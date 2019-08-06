import Vue from 'vue'
import ElementUI from 'element-ui';
import ImagePreview from './component/imageUpload';

Vue.use(ElementUI);

export default {
    // The install method will be called with the Vue constructor as
    // the first argument, along with possible options
    install(Vue, options) {
        Vue.component('lq-image-preview', ImagePreview);
    }
}