import ImagePreview from './component/imageUpload';


export default {
    // The install method will be called with the Vue constructor as
    // the first argument, along with possible options
    install(Vue, options) {
        Vue.component('lq-image-preview', ImagePreview);
    }
}