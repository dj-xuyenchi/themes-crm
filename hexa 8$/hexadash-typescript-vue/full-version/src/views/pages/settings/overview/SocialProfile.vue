<template>
  <sdCards>
    <template v-slot:title>
      <div class="setting-card-title">
        <sdHeading as="h4">Social Profiles</sdHeading>
        <span>Add elsewhere links to your profile </span>
      </div>
    </template>
    <SocialProfileForm>
      <a-row type="flex" justify="center">
        <a-col :xxl="12" :xl="14" :sm="18" :xs="24">
          <BasicFormWrapper>
            <a-form @submit="handleSubmit" layout="vertical">
              <a-form-item label="Facebook">
                <a-input :value="formState.facebook" class="facebook" placeholder="URL">
                  <template #prefix>
                    <font-awesome-icon
                      class="super-crazy-colors"
                      :icon="faFacebookF"
                      size="1x"
                      :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                    />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item label="Twitter">
                <a-input :value="formState.twitter" class="twitter" placeholder="URL">
                  <template #prefix>
                    <font-awesome-icon
                      class="super-crazy-colors"
                      :icon="faTwitter"
                      size="1x"
                      :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                    />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item label="Dribbble">
                <a-input :value="formState.dribble" class="dribbble" placeholder="URL">
                  <template #prefix>
                    <font-awesome-icon
                      class="super-crazy-colors"
                      :icon="faDribbble"
                      size="1x"
                      :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                    />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item label="Instagram">
                <a-input :value="formState.instagram" class="instagram" placeholder="URL">
                  <template #prefix>
                    <font-awesome-icon
                      class="super-crazy-colors"
                      :icon="faInstagram"
                      size="1x"
                      :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                    />
                  </template>
                </a-input>
              </a-form-item>

              <a-form-item label="Github">
                <a-input :value="formState.github" class="github" placeholder="URL">
                  <template #prefix>
                    <font-awesome-icon
                      class="super-crazy-colors"
                      :icon="faGithub"
                      size="1x"
                      :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                    />
                  </template>
                </a-input>
              </a-form-item>

              <a-form-item label="Medium">
                <a-input :value="formState.medium" class="medium" placeholder="URL">
                  <template #prefix>
                    <font-awesome-icon
                      class="super-crazy-colors"
                      :icon="faMediumM"
                      size="1x"
                      :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
                    />
                  </template>
                </a-input>
              </a-form-item>

              <div class="setting-form-actions">
                <sdButton @click="handleSubmit" size="default" htmlType="submit" type="primary">
                  Update Social Profile
                </sdButton>
                &nbsp; &nbsp;
                <sdButton size="default" @click="handleCancel" type="light"> Cancel </sdButton>
              </div>
            </a-form>
          </BasicFormWrapper>
        </a-col>
      </a-row>
    </SocialProfileForm>
  </sdCards>
</template>

<script setup lang="ts">
import { SocialProfileForm } from './style';
import { BasicFormWrapper } from '../../../styled';
import {
  faFacebookF,
  faDribbble,
  faTwitter,
  faInstagram,
  faGithub,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import { reactive, getCurrentInstance } from 'vue';
import type { UnwrapRef } from 'vue';

const name = 'clayton';

interface FormState {
  facebook: string;
  twitter: string;
  instagram: string;
  dribble: string;
  medium: string;
  github: string;
}

const formState: UnwrapRef<FormState> = reactive({
  facebook: '',
  twitter: '',
  instagram: '',
  dribble: '',
  medium: '',
  github: '',
});

let values: any = null;

const handleFinish = (value: any) => {
  values = { ...value };
  console.log(values, formState);
};

const handleFinishFailed = (errors: any) => {
  console.log(errors);
};

const handleSubmit = (e: Event) => {
  const instance = getCurrentInstance()!;
  e.preventDefault();
  instance?.appContext.config.globalProperties.form.validateFields((err: any, value: any) => {
    if (!err) {
      values = { ...value, tags: instance?.appContext.config.globalProperties.tags };
      console.log(values);
    }
  });
};

const handleCancel = (e: Event) => {
  e.preventDefault();
  //form.resetFields();
};
</script>
