<template>
  <div class="el-form-item">
    <label class="el-form-item__label" style="width: 120px;">Upload Image</label>
    <div class="el-form-item__content" style="margin-left:120px">
      <div class="selectImage" @click="$refs.fileInput.click()">
        <el-image v-if="imageUrl" :src="imageUrl"></el-image>
        <i v-else class="el-icon-plus icon"></i>
        <input class="file" type="file" :name="name" @change="previewImageFn" ref="fileInput" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "image-preview-iupload",
  props: {
    name: {
      type: String,
      default: "image"
    }
  },
  data() {
    return {
      imageUrl: null
    };
  },
  methods: {
    previewImageFn(input) {
      this.imageUrl = URL.createObjectURL(input.target.files[0]);
    }
  }
};
</script>

<style >
.file {
  display: none;
}
.selectImage {
  cursor: pointer;
  border: 1px dashed #dcdfe6;
  height: 100px;
  width: 100px;
  /* margin-left: 122px; */
}
.icon {
  padding: 40%;
}
</style>
