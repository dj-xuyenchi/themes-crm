<template>
  <sdPageHeader title="Import" class="ninjadash-page-header-main">
  </sdPageHeader>
  <Main>
    <a-row :gutter="25">
      <a-col :sm="24" :xs="24">
        <ImportStyleWrap>
          <div class="ninjadash_import-box">
            <a-row :gutter="15">
              <a-col :xs="24">
                <div class="ninjadash_import-inner">
                  <a-upload-dragger v-bind="fileUploadProps">
                    <p class="ant-upload-drag-icon">
                      <unicon name="upload" width="50" height="50"></unicon>
                    </p>
                    <sdHeading as="h4" class="ant-upload-text">
                      <span> Drop File</span>
                      <span class="ant-upload-hint">
                        or <span>Browse</span>
                      </span>
                    </sdHeading>
                  </a-upload-dragger>
                </div>
              </a-col>
            </a-row>
          </div>
        </ImportStyleWrap>
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { Main, ImportStyleWrap } from "../../styled";
import { message } from "ant-design-vue";
import { ref, defineComponent } from "vue";

const Import = defineComponent({
  name: "Import",
  components: { Main, ImportStyleWrap },
  setup() {
    const file = ref(null);
    const list = ref(null);
    const submitValues = ref({});
    const fileUploadProps = {
      name: "file",
      multiple: true,
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
          file.value = info.file;
          list.value = info.fileList;
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      listType: "picture",
      defaultFileList: [],
      showUploadList: {
        showRemoveIcon: true,
        removeIcon: (
          <unicon
            name="trash-alt"
            onClick={(e) => console.log(e, "custom removeIcon event")}
          ></unicon>
        ),
      },
    };

    return {
      submitValues,
      fileUploadProps,
    };
  },
});

export default Import;
</script>
