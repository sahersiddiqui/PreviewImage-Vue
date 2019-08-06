# PreviewImage-Vue

1.
run 
npm i preview-image-vue
OR
yarn add preview-image-vue


2.
update your main.js or index.js file
add 
import ImagePreview from 'preview-image-vue'
Vue.use(ImagePreview)


3.
In your vue file use it as
<lq-image-preview @image-change="imageChanged" />
then add a method like

imageChanged(value) {
    YOUR_FORM_VALUE = value;
}
