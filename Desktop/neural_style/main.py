import streamlit as st
from PIL import Image

import style

st.title('Style Transfer')

img = st.sidebar.selectbox(
    'Chọn ảnh',
    ('house.jpg', 'cat.png', 'Photo.jpg', 'scenery.jpg', 'drawing.jpg')
)

style_name = st.sidebar.selectbox(
    'Chọn phong cách',
    ('vangogh', '')
)


model= "saved_models/" + style_name + ".pth"
input_image = "images/content-images/" + img
output_image = "images/output-images/" + style_name + "-" + img
style_image = "images/style-images/" + style_name + ".jpg"

st.write('### Source image:')
image = Image.open(input_image)
st.image(image, width=300)  

st.write('### Style image: ')
image_style = Image.open(style_image)
st.image(image_style, width=300)  


clicked = st.button('Stylize')
if clicked:
    model = style.load_model(model)
    style.stylize(model, input_image, output_image)

    st.write('### Output image:')
    image = Image.open(output_image)
    st.image(image, width=400)
