<script setup lang="ts">
import { FormValidationWrap, VerticalFormStyleWrap } from './overview/Style';
import { Main } from '../styled';
import { reactive, ref, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  layout: string;
  firstName: string;
  lastName: string;
  username: string;
  city: string;
  state: string;
  zip: string;
}

const formState: UnwrapRef<FormState> = reactive({
  layout: 'vertical',
  firstName: '',
  lastName: '',
  username: '',
  city: '',
  state: '',
  zip: '',
});

const formRef = ref();

const rules = {
  firstName: [
    {
      required: true,
      message: 'Please input First name',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
  lastName: [
    {
      required: true,
      message: 'Please input Last name',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
  username: [
    {
      required: true,
      message: 'Please input Username',
      trigger: 'blur',
    },
  ],
  city: [
    {
      required: true,
      message: 'Please input city',
      trigger: 'blur',
    },
  ],
  state: [
    {
      required: true,
      message: 'Please input state',
      trigger: 'blur',
    },
  ],
  zip: [
    {
      required: true,
      message: 'Please input zip',
      trigger: 'blur',
    },
  ],
};

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
    })
    .catch((error: any) => {
      console.log('error', error);
    });
};

const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<template>
  <div>
    <sdPageHeader title="Form Validation" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xs="24">
          <sdCards title="Custom Styles" caption="The simplest use of Form">
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <a-form
                  name="ninjadash_validation-form"
                  ref="formRef"
                  :model="formState"
                  :rules="rules"
                  :layout="formState.layout"
                >
                  <a-row :gutter="30">
                    <a-col :md="8" :xs="24">
                      <a-form-item ref="firstName" label="First Name" name="firstName">
                        <a-input v-model:value="formState.firstName" placeholder="First Name" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item ref="lastName" name="lastName" label="Last Name">
                        <a-input v-model:value="formState.lastName" placeholder="Last Name" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item ref="username" name="username" label="Username">
                        <a-input v-model:value="formState.username" autocomplete="off" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="12" :xs="24">
                      <a-form-item ref="city" name="city" label="City">
                        <a-input v-model:value="formState.city" autocomplete="off" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="6" :xs="24">
                      <a-form-item ref="state" name="state" label="state">
                        <a-input v-model:value="formState.state" autocomplete="off" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="6" :xs="24">
                      <a-form-item ref="zip" name="zip" label="Zip">
                        <a-input v-model:value="formState.zip" autocomplete="off" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <div class="ninjadash_agree-check">
                    <a-form-item>
                      <a-checkbox name="checkbox"> Agree to terms and conditions </a-checkbox>
                    </a-form-item>
                  </div>
                  <div class="ninjadash_form-action mt-20">
                    <sdButton type="primary" html-type="submit"> Submit Form </sdButton>
                    <sdButton @click="resetForm" class="btn-outlined" size="default" :outlined="true" type="light">
                      Reset
                    </sdButton>
                  </div>
                </a-form>
              </VerticalFormStyleWrap>
            </FormValidationWrap>
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Server Side">
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <a-form name="ninjadash_vertical-form" :layout="formState.layout">
                  <a-row :gutter="30">
                    <a-col :md="8" :xs="24">
                      <a-form-item label="First Name" validate-status="success" help="Looks good!">
                        <a-input placeholder="First Name" name="fname2" value="Duran" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item label="Last Name" validate-status="success" help="Looks good!">
                        <a-input placeholder="Last Name" name="lname" value="Clayton" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="8" :xs="24">
                      <a-form-item label="Username" validate-status="error">
                        <a-input placeholder="Username" name="username" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="12" :xs="24">
                      <a-form-item label="City" help="Please provide a valid city." validate-status="error">
                        <a-input name="city" placeholder="City" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="6" :xs="24">
                      <a-form-item label="State" help="Please provide a valid state." validate-status="error">
                        <a-input name="state" placeholder="State" />
                      </a-form-item>
                    </a-col>
                    <a-col :md="6" :xs="24">
                      <a-form-item label="Zip" help="Please provide a valid zip." validate-status="error">
                        <a-input name="zip-code" placeholder="Zip" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <div class="ninjadash_agree-check">
                    <a-form-item help="You must agree before submitting." validate-status="error">
                      <a-checkbox name="checkbox"> Agree to terms and conditions </a-checkbox>
                    </a-form-item>
                  </div>
                  <a-row>
                    <a-col :xs="24">
                      <a-form-item help="You must agree before submitting." validate-status="error">
                        <a-input-password name="password" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                  <div class="ninjadash_form-action mt-20">
                    <a-button type="primary" html-type="submit"> Submit Form </a-button>
                  </div>
                </a-form>
              </VerticalFormStyleWrap>
            </FormValidationWrap>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>
