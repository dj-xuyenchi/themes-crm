<template>
  <div class="cover-image">
    <img style="width: 100%" :src="require('@/static/img/profile/cover-img.png')" alt="banner" />
    <a-upload v-bind="props">
      <a to="#"> <unicon name="camera" width="16"></unicon> Change Cover </a>
    </a-upload>
  </div>
</template>
<script>
import { getCurrentInstance, reactive, defineComponent } from 'vue';

const CoverSection = defineComponent({
  name: 'CoverSection',
  setup() {
    const { $message } = getCurrentInstance().appContext.config.globalProperties;
    const props = reactive({
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          $message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          $message.error(`${info.file.name} file upload failed.`);
        }
      },
    });
    return {
      props,
    };
  },
});

export default CoverSection;
</script>
