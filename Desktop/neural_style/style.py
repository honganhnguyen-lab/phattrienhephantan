import streamlit as st
import re


import torch
from torchvision import datasets
from torchvision import transforms
from model_style import load_image, save_image
from TransformationNet import TransformationNet
import numpy as np

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

@st.cache
def load_model(model_path):
    print('load model')
    with torch.no_grad():
        style_model = TransformationNet()
        state_dict = torch.load(model_path)
        # remove saved deprecated running_* keys in InstanceNorm from the checkpoint
        for k in list(state_dict.keys()):
            if re.search(r'in\d+\.running_(mean|var)$', k):
                del state_dict[k]
        style_model.load_state_dict(state_dict)
        style_model.to(device)
        style_model.eval()
        return style_model

@st.cache
def stylize(style_model, content_image, output_image):
    content_image = load_image(content_image)
    content_transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Lambda(lambda x: x.mul(255))
    ])
    content_image = content_transform(content_image)
    content_image = content_image.unsqueeze(0).to(device)
    
    with torch.no_grad():
        output = style_model(content_image).cpu()
            
    save_image(output_image, output[0])