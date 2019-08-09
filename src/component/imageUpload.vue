<template>
  <el-form-item label="Upload Image" prop="image">
    <div class="selectImage" @click="$refs.fileInput.click()">
      <el-image v-if="file" :src="file" :fit="fit" style="width: 100px; height: 100px"></el-image>
      <el-image v-else-if="oldImage" :src="oldImage" :fit="fit" style="width: 100px; height: 100px"></el-image>
      <i v-else class="el-icon-plus icon"></i>
      <input accept="image/*" class="file" type="file" @change="previewImageFn" ref="fileInput" />
    </div>
  </el-form-item>
</template>

<script>
export default {
  name: "image-preview-iupload",
  inject: ["image"],
  props: {
    fit: {
      type: String,
      default: "cover"
    },
    oldImage: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      file: ""
    };
  },
  computed: {
    imageUrl: {
      get: function() {},
      set: function(val) {
        this.image(val);
      }
    }
  },
  methods: {
    previewImageFn(input) {
      this.file = URL.createObjectURL(input.target.files[0]);
      this.imageUrl = input.target.files[0];
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
