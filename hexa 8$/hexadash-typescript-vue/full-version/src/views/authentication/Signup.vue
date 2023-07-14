<script setup lang="ts">
import { AuthWrapper } from './style';
import { reactive, ref, onMounted } from 'vue';
import { inlineSvg } from '@/components/utilities/utilities';

const values = ref(null);
const checked = ref(null);
const handleSubmit = (value: any) => {
  values.value = value;
};

const onChange = (check: any) => {
  checked.value = check;
};
const formState = reactive({
  name: '',
  username: '',
  email: '',
  password: '',
});
onMounted(() => {
  //init inlineSvg
  inlineSvg();
});
</script>
<template>
  <a-row justify="center">
    <a-col :xxl="6" :xl="12" :md="12" :sm="18">
      <AuthWrapper>
        <div class="ninjadash-authentication-top">
          <h2 class="ninjadash-authentication-top__title">Sign Up HexaDash</h2>
        </div>
        <div class="ninjadash-authentication-content">
          <a-form name="register" :model="formState" @finish="handleSubmit" layout="vertical">
            <a-form-item
              label="Name"
              name="name"
              :rules="[{ required: true, message: 'Please input your Full name!' }]"
            >
              <a-input v-model:value="formState.name" placeholder="Full name" />
            </a-form-item>
            <a-form-item
              name="username"
              label="Username"
              :rules="[{ required: true, message: 'Please input your username!' }]"
            >
              <a-input v-model:value="formState.username" placeholder="Username" />
            </a-form-item>
            <a-form-item
              name="email"
              label="Email Address"
              :rules="[
                {
                  required: true,
                  message: 'Please input your email!',
                  type: 'email',
                },
              ]"
            >
              <a-input type="email" v-model:value="formState.email" placeholder="name@example.com" />
            </a-form-item>
            <a-form-item
              label="Password"
              name="password"
              :rules="[{ required: true, message: 'Please input your password!' }]"
            >
              <a-input type="password" v-model:value="formState.password" placeholder="Password" />
            </a-form-item>
            <div class="ninjadash-auth-extra-links">
              <a-checkbox @change="onChange">
                Creating an account means you’re okay with our Terms of Service and Privacy Policy
              </a-checkbox>
            </div>
            <a-form-item>
              <sdButton class="btn-create" htmlType="submit" type="primary" size="lg"> Create Account </sdButton>
            </a-form-item>
            <p class="ninjadash-form-divider">
              <span>Or</span>
            </p>
            <ul class="ninjadash-social-login">
              <li>
                <a class="google-social" href="#">
                  <img :src="require('/src/assets/img/icon/google-plus.svg')" alt="" class="svg" />
                </a>
              </li>
              <li>
                <a class="facebook-social" href="#">
                  <unicon name="facebook-f"></unicon>
                </a>
              </li>
              <li>
                <a class="twitter-social" href="#">
                  <unicon name="twitter"></unicon>
                </a>
              </li>
              <li>
                <a class="twitter-social" href="#">
                  <unicon name="github"></unicon>
                </a>
              </li>
            </ul>
          </a-form>
        </div>
        <div class="ninjadash-authentication-bottom">
          <p>Already have an account?<router-link to="/auth/login">Sign In</router-link></p>
        </div>
      </AuthWrapper>
    </a-col>
  </a-row>
</template>
