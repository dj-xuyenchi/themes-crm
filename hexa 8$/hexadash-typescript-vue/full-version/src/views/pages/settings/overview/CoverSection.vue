<template>
  <div class="cover-image">
    <img style="width: 100%" :src="'/src/assets/img/profile/cover-img.png'" alt="banner" />
    <a-upload
      name="file"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :headers="headers"
      @change="onChange"
    >
      <a to="#"> <unicon name="camera" width="16"></unicon> Change Cover </a>
    </a-upload>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const headers = {
  authorization: 'authorization-text',
};
const onChange = (info: any) => {
  const instance = getCurrentInstance();
  if (info.file.status !== 'uploading') {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === 'done') {
    instance?.appContext.config.globalProperties.$message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
    instance?.appContext.config.globalProperties.$message.error(`${info.file.name} file upload failed.`);
  }
};
</script>
