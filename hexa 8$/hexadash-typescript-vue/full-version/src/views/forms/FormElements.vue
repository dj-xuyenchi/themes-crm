<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { Main } from '../styled';
import { CheckListWrap } from './overview/Style';
import GridForm from './overview/GridForm.vue';
import SizedForm from './overview/SizedForm.vue';
import InputForm from './overview/InputForm.vue';

const handleChange = (info: any) => {
  if (info.file.status !== 'uploading') {
    console.log(info.file, info.fileList);
  }

  if (info.file.status === 'done') {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
};
const fileList = ref([]);
const headers = {
  authorization: 'authorization-text',
};
</script>

<template>
  <div>
    <sdPageHeader title="Form Elements" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xs="24">
          <GridForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <SizedForm />
          <InputForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <sdCards title="Text Input" class="mb-25">
            <a-form name="ninjadash_textarea" layout="vertical">
              <a-form-item name="basic-textarea" label="Basic Textarea">
                <a-textarea placeholder="Basic usage" :rows="2" />
              </a-form-item>
              <a-form-item label="Unresizable Textarea">
                <a-textarea
                  placeholder="Unresizable Textarea"
                  name="unresizable-textarea"
                  class="ninjadash_unresizable"
                  :rows="3"
                />
              </a-form-item>
            </a-form>
          </sdCards>
          <sdCards title="Select" class="mb-25">
            <a-form name="ninjadash_Select" layout="vertical">
              <a-form-item label="Basic Select">
                <a-select size="large" name="basic-select" class="ninjadash_fullwidth-select">
                  <a-select-option value="1">1</a-select-option>
                  <a-select-option default-value="2" value="2">2</a-select-option>
                  <a-select-option value="3">3</a-select-option>
                  <a-select-option value="4">4</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="Disabled Basic Select">
                <a-select size="large" name="disabled-select" class="ninjadash_fullwidth-select" disabled>
                  <a-select-option value="1">1</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="Multiple Select">
                <a-select mode="multiple" :default-value="['1', '2']" placeholder="Please select">
                  <a-select-option value="1">1</a-select-option>
                  <a-select-option value="2">2</a-select-option>
                  <a-select-option value="3">3</a-select-option>
                  <a-select-option value="4">4</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="Disabled Multiple Select">
                <a-select mode="multiple" :default-value="['1', '2']" placeholder="Please select" disabled>
                  <a-select-option value="1">1</a-select-option>
                  <a-select-option value="2">2</a-select-option>
                  <a-select-option value="3">3</a-select-option>
                  <a-select-option value="4">4</a-select-option>
                </a-select>
              </a-form-item>
            </a-form>
          </sdCards>
          <sdCards title="File Browser" class="ninjadash_upload-form mb-25">
            <a-form name="ninjadash_file_browser" layout="vertical">
              <a-upload
                class="ninjadash_upload-basic"
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :headers="headers"
                @change="handleChange"
              >
                <span class="ninjadash_upload-text">Select File</span>
                <a to="#" class="ninjadash_upload-browse"> Browse </a>
              </a-upload>
            </a-form>
          </sdCards>
          <CheckListWrap class="mb-25">
            <sdCards title="Checkboxes and Radios">
              <div class="ninjadash_check-list-wrap">
                <ul class="ninjadash_check-list ninjadash_check-list--left">
                  <li>
                    <a-checkbox>Checkbox</a-checkbox>
                  </li>
                  <li>
                    <a-checkbox checked> Checked </a-checkbox>
                  </li>
                  <li>
                    <a-checkbox disabled> Disabled Unchecked </a-checkbox>
                  </li>
                  <li>
                    <a-checkbox checked disabled> Disabled Checked </a-checkbox>
                  </li>
                </ul>
                <ul class="ninjadash_check-list ninjadash_check-list--right">
                  <li>
                    <a-radio>Uncheck</a-radio>
                  </li>
                  <li>
                    <a-radio checked>Checked</a-radio>
                  </li>
                  <li>
                    <a-radio disabled>Disabled Unchecked</a-radio>
                  </li>
                  <li>
                    <a-radio checked disabled> Disabled Checked </a-radio>
                  </li>
                </ul>
              </div>
            </sdCards>
          </CheckListWrap>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>
