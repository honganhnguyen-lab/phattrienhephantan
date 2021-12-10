import torch, torchvision
from torchvision import datasets, models, transforms
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
from torch.optim import Adam

from torchvision.datasets import CIFAR100

import time

import numpy as np
import os
from collections import namedtuple
from TransformationNet import TransformationNet


from PIL import Image

#Class model extract features transfer learning VGG16
class Vgg16(torch.nn.Module):
    def __init__(self, requires_grad=False):
        super(Vgg16, self).__init__()
        vgg_pretrained_features = models.vgg16(pretrained=True).features
        self.slice1 = torch.nn.Sequential()
        self.slice2 = torch.nn.Sequential()
        self.slice3 = torch.nn.Sequential()
        self.slice4 = torch.nn.Sequential()
        for x in range(4):
            self.slice1.add_module(str(x), vgg_pretrained_features[x])
        for x in range(4, 9):
            self.slice2.add_module(str(x), vgg_pretrained_features[x])
        for x in range(9, 16):
            self.slice3.add_module(str(x), vgg_pretrained_features[x])
        for x in range(16, 23):
            self.slice4.add_module(str(x), vgg_pretrained_features[x])
        if not requires_grad:
            for param in self.parameters():
                param.requires_grad = False

    def forward(self, X):
        h = self.slice1(X)
        h_relu1_2 = h
        h = self.slice2(h)
        h_relu2_2 = h
        h = self.slice3(h)
        h_relu3_3 = h
        h = self.slice4(h)
        h_relu4_3 = h
        vgg_outputs = namedtuple("VggOutputs", ['relu1_2', 'relu2_2', 'relu3_3', 'relu4_3'])
        out = vgg_outputs(h_relu1_2, h_relu2_2, h_relu3_3, h_relu4_3)
        return out

#ham tinh ma tran gram su dung de tinh style_loss
def gram_matrix(y):
    (b, ch, h, w) = y.size()
    features = y.view(b, ch, w * h)
    features_t = features.transpose(1, 2)
    gram = features.bmm(features_t) / (ch * h * w)
    return gram

#ham normalize image bang mean va std cua mang vgg
def normalize_batch(batch):
    mean = batch.new_tensor([0.485, 0.456, 0.406]).view(-1, 1, 1)
    std = batch.new_tensor([0.229, 0.224, 0.225]).view(-1, 1, 1)
    batch = batch.div_(255.0)
    return (batch - mean) / std


def load_image(filename, size=None, scale=None):
    img = Image.open(filename)
    if size is not None:
        img = img.resize((size, size), Image.ANTIALIAS)
    elif scale is not None:
        img = img.resize((int(img.size[0] / scale), int(img.size[1] / scale)), Image.ANTIALIAS)
    return img


def save_image(filename, data):
    img = data.clone().clamp(0, 255).numpy()
    img = img.transpose(1, 2, 0).astype("uint8")
    img = Image.fromarray(img)
    img.save(filename)
    
def train(styleimagepath):
    epochs = 2
    batch_size = 4
    content_weight = 1e5
    style_weight = 1e10
    lr = 1e-3
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    
    np.random.seed(42)
    torch.manual_seed(42)
    #chuyen anh sang Tensor de dua vao train model 
    transform = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(256),
        transforms.ToTensor(),
        transforms.Lambda(lambda x: x.mul(255))
    ])

    #tai vao tap training - su dung Flickr8k 8000 anh
    train_dataset = CIFAR100(download=True, root="./data", transform= transform)
    train_loader = DataLoader(train_dataset, batch_size)

    transformer = TransformationNet().to(device)


    #khoi tao optimizer adam
    optimizer = Adam(transformer.parameters(), lr)

    style_transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Lambda(lambda x: x.mul(255))
    ])
    style = load_image(styleimagepath, size=512)
    style = style_transform(style)
    style = style.repeat(batch_size, 1, 1, 1).to(device)
    
    #su dung model vgg16 da duoc train san de extract feature maps 
    vgg = Vgg16(requires_grad=False).to(device)
    
    #extract feature maps cho image style
    features_style = vgg(normalize_batch(style))

    #gram matrix image style
    gram_style = [gram_matrix(y) for y in features_style]
    
    criterion = nn.MSELoss()

    for e in range(epochs):
        transformer.train()
        agg_content_loss = 0.
        agg_style_loss = 0.
        count = 0
        for batch_id, (x, _) in enumerate(train_loader):
            n_batch = len(x)
            count += n_batch
            optimizer.zero_grad()

            #extract feature maps cho content image va input image
            #tinh content_loss bang mean square error distance giua content image va input image 
            x = x.to(device) #content image 
            y = transformer(x) #input image

            y = normalize_batch(y)
            x = normalize_batch(x)

            features_y = vgg(y)
            features_x = vgg(x)

            content_loss = content_weight * criterion(features_y.relu2_2, features_x.relu2_2)
            
            #tinh style_loss giua input image va syle image
            style_loss = 0.
            for ft_y, gm_s in zip(features_y, gram_style):
                gm_y = gram_matrix(ft_y)
                style_loss += criterion(gm_y, gm_s[:n_batch, :, :])
            style_loss *= style_weight


            #loss function model = content loss + style loss 
            total_loss = content_loss + style_loss
            total_loss.backward()
            optimizer.step()
            
            agg_content_loss += content_loss.item()
            agg_style_loss += style_loss.item()


            #In ra ket qua train sau moi batch
            if (batch_id + 1) % 500 == 0:
                mesage = "{}\tEpoch {}:\t[{}/{}]\tcontent error: {:.6f}\tstyle error: {:.6f}\ttotal: {:.6f}".format(
                    time.ctime(), e + 1, count, len(train_dataset),
                                  agg_content_loss / (batch_id + 1),
                                  agg_style_loss / (batch_id + 1),
                                  (agg_content_loss + agg_style_loss) / (batch_id + 1)
                )
                print(mesage)

            if (batch_id + 1) % 2000 == 0:
                transformer.eval().cpu()
                ckpt_model_filename = "ckpt_epoch_" + str(e) + "_batch_id_" + str(batch_id + 1) + ".pth"
                ckpt_model_path = os.path.join(None, ckpt_model_filename)
                torch.save(transformer.state_dict(), ckpt_model_path)
                transformer.to(device).train()
    
    save_model_dir = 'saved_model'
            
    transformer.eval().cpu()
    save_model_filename = "epoch_" + str(epochs) + "_" + str(time.ctime()).replace(' ', '_') + "_" + str(
        content_weight) + "_" + str(style_weight) + ".model"
    save_model_path = os.path.join(save_model_dir, save_model_filename)
    torch.save(transformer.state_dict(), save_model_path)

    print("\nDone, trained model saved at", save_model_path)