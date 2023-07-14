<template>
  <sdCards>
    <template v-slot:title>
      <div class="setting-card-title">
        <sdHeading as="h4">Edit Profile</sdHeading>
        <span>Set Up Your Personal Information</span>
      </div>
    </template>
    <a-row type="flex" justify="center">
      <a-col :xxl="12" :lg="24" :xs="24">
        <BasicFormWrapper>
          <a-form :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed" layout="vertical">
            <a-form-Item label="Name">
              <a-input v-model:value="formState.name" />
            </a-form-Item>
            <a-form-item label="Phone Number">
              <a-input v-model:value="formState.phone" />
            </a-form-item>
            <a-form-item label="Country">
              <a-select v-model:value="formState.country" style="width: 100%">
                <a-select-option value="">Please Select</a-select-option>
                <a-select-option value="bangladesh">Bangladesh</a-select-option>
                <a-select-option value="india">India</a-select-option>
                <a-select-option value="pakistan">Pakistan</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="City">
              <a-select v-model:value="formState.city" style="width: 100%">
                <a-select-option value="">Please Select</a-select-option>
                <a-select-option value="dhaka">Dhaka</a-select-option>
                <a-select-option value="mymensingh">Mymensingh</a-select-option>
                <a-select-option value="khulna">Khulna</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Company Name">
              <a-input v-model:value="formState.company" />
            </a-form-item>
            <a-form-item label="Website">
              <a-input v-model:value="formState.website" />
            </a-form-item>
            <a-form-item label="User Bio">
              <a-textarea v-model:value="formState.userBio" :rows="3" />
            </a-form-item>
            <a-form-item name="skills" label="Skills">
              <TagInput>
                <div>
                  <template v-for="(tag, index) in tagList">
                    <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                      <a-tag :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
                        {{ `${tag.slice(0, 20)}...` }}
                      </a-tag>
                    </a-tooltip>
                    <a-tag v-else :key="index + 1" :closable="index !== 0" @close="() => handleClose(tag)">
                      {{ tag }}
                    </a-tag>
                  </template>
                  <div>
                    <a-input
                      v-if="inputVisible"
                      ref="input"
                      type="text"
                      size="small"
                      :style="{ width: '78px' }"
                      :value="inputValue"
                      @change="handleInputChange"
                      @blur="handleInputConfirm"
                      @keyup.enter="handleInputConfirm"
                    />
                    <a-tag v-else style="background: #fff; borderstyle: dashed" @click="showInput">
                      <unicon name="plus" width="14"></unicon> New Tag
                    </a-tag>
                  </div>
                </div>
              </TagInput>
            </a-form-item>

            <div class="setting-form-actions">
              <sdButton size="default" htmlType="submit" type="primary"> Update Profile </sdButton>
              &nbsp; &nbsp;
              <sdButton size="default" @click="handleCancel" type="light"> Cancel </sdButton>
            </div>
          </a-form>
        </BasicFormWrapper>
      </a-col>
    </a-row>
  </sdCards>
</template>

<script setup lang="ts">
import { BasicFormWrapper, TagInput } from '../../../styled';
import { reactive, getCurrentInstance } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  name: string;
  phone: string;
  country: string;
  city: string;
  company: string;
  website: string;
  userBio: string;
}

const formState: UnwrapRef<FormState> = reactive({
  name: 'Duran Clayton',
  phone: '01742920502',
  country: '',
  city: '',
  company: 'Example',
  website: 'www.example.com',
  userBio:
    'Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee.',
});

let tagList = ['UI/UX', 'Branding', 'Product Design', 'Web Design'];
let values = null;
let inputVisible = false;
let inputValue = '';

const handleFinish = (value: any) => {
  values = { ...value, tags: tagList };
  console.log(values, formState);
};

const handleFinishFailed = (errors: any) => {
  console.log(errors);
};

const handleCancel = (e: Event) => {
  e.preventDefault();
  //form.resetFields();
};
const handleClose = (removedTag: any) => {
  const tags = tagList.filter((tag) => tag !== removedTag);
  console.log(tags);
  tagList = tags;
};

const showInput = () => {
  const instance = getCurrentInstance()!;
  inputVisible = true;
  instance?.appContext.config.globalProperties.$nextTick(function () {
    instance?.appContext.config.globalProperties.$refs.input.focus();
  });
};

const handleInputChange = (e: any) => {
  inputValue = e.target.value;
};

const handleInputConfirm = () => {
  const instance = getCurrentInstance()!;
  const inputValues = inputValue;
  let tags = tagList;
  if (inputValues && tags.indexOf(inputValues) === -1) {
    tags = [...tags, inputValues];
  }
  console.log(tags);
  Object.assign(instance?.appContext.config.globalProperties, {
    tags,
    inputVisible: false,
    inputValue: '',
  });
};
</script>
