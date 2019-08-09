# PreviewImage-Vue

#1.
run 
npm i preview-image-vue
OR
yarn add preview-image-vue


#2.
update your main.js or index.js file
add 
import ImagePreview from 'preview-image-vue'
Vue.use(ImagePreview)


#3.
In your vue file use it as
<lq-image-preview />

It uses inject/provide so you need to use provide that will return a method update you formdata like thi
 provide() {
    return {
      image: this.imageChanged
    };
  },

#4.
this will defined under methods
  imageChanged: function(value) {
      this.form.previewImage = value;
    }


