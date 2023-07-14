<template>
  <div class="cover-image">
    <img
      style="width: 100%"
      :src="require('../../../../static/img/profile/cover-img.png')"
      alt="banner"
    />
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
<script>
import { defineComponent } from "vue";
const CoverSection = defineComponent({
  name: "CoverSection",
  components: {},
  data() {
    return {
      headers: {
        authorization: "authorization-text",
      },
    };
  },
  methods: {
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
});

export default CoverSection;
</script>
