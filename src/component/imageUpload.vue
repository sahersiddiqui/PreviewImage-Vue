<template>
  <el-form-item label="Upload Image" prop="image">
    <div class="selectImage" @click="$refs.fileInput.click()">
      <el-image v-if="imageUrl" :src="imageUrl"></el-image>
      <i v-else class="el-icon-plus icon"></i>
      <input accept="image/*" class="file" type="file" @change="previewImageFn" ref="fileInput" />
    </div>
  </el-form-item>
</template>

<script>
export default {
  name: "image-preview-iupload",
  data() {
    return {
      imageUrl: null
    };
  },
  methods: {
    previewImageFn(input) {
      this.imageUrl = URL.createObjectURL(input.target.files[0]);
      this.$emit("image-change", this.imageUrl);
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
}
.icon {
  padding-top: 45px;
}
</style>
