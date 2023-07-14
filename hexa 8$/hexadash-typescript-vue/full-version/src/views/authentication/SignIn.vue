<script lang="ts">
import { computed, reactive, ref, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { AuthWrapper } from './style';
import { useRouter } from 'vue-router';
import { auth0options } from '@/config/auth0';
import { inlineSvg } from '@/components/utilities/utilities';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const SignIn = defineComponent({
  name: 'SignIn',
  components: { AuthWrapper },
  setup() {
    const { state, dispatch } = useStore();
    const isLoading = computed(() => state.auth.loading);
    const checked = ref(null);
    const router = useRouter();

    const handleSubmit = () => {
      router.push('/');
      dispatch('login');
    };
    const onChange = (checked: any) => {
      checked.value = checked;
    };

    const formState = reactive({
      email: 'example@email.com',
      password: '1234565',
    });

    /* eslint-disable */
    // @ts-ignore
    const lock = new Auth0Lock(clientId, domain, auth0options);

    lock.on('authenticated', (authResult: any) => {
      lock.getUserInfo(authResult.accessToken, (error: any) => {
        if (error) {
          return;
        }

        handleSubmit();
        lock.hide();
      });
    });

    onMounted(() => {
      //init inlineSvg
      inlineSvg();
    });

    return {
      isLoading,
      checked,
      handleSubmit,
      onChange,
      formState,
      lock,
    };
  },
});

export default SignIn;
</script>

<template>
  <a-row justify="center">
    <a-col :xxl="6" :xl="12" :md="12" :sm="18">
      <AuthWrapper>
        <div class="ninjadash-authentication-top">
          <h2 class="ninjadash-authentication-top__title">Sign in HexaDash</h2>
        </div>
        <div class="ninjadash-authentication-content">
          <a-form @finish="handleSubmit" :model="formState" layout="vertical">
            <a-form-item name="username" label="Username or Email Address">
              <a-input type="email" v-model:value="formState.email" />
            </a-form-item>
            <a-form-item name="password" initialValue="123456" label="Password">
              <a-input type="password" v-model:value="formState.password" placeholder="Password" />
            </a-form-item>
            <div class="ninjadash-auth-extra-links">
              <a-checkbox @change="onChange">Keep me logged in</a-checkbox>
              <router-link class="forgot-pass-link" to="/auth/forgotPassword"> Forgot password? </router-link>
            </div>
            <a-form-item>
              <sdButton class="btn-signin" htmlType="submit" type="primary">
                {{ isLoading ? 'Loading...' : 'Sign In' }}
              </sdButton>
            </a-form-item>
            <p class="ninjadash-form-divider">
              <span>Or</span>
            </p>
            <ul class="ninjadash-social-login">
              <li>
                <a class="google-social" href="#">
                  <img src="/src/assets/img/icon/google-plus.svg" class="svg" alt="" />
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
            <div class="auth0-login">
              <a href="#" @click="() => lock.show()"> Sign In with Auth0 </a>
            </div>
          </a-form>
        </div>
        <div class="ninjadash-authentication-bottom">
          <p>Don't have an account?<router-link to="/auth/register">Sign up</router-link></p>
        </div>
      </AuthWrapper>
    </a-col>
  </a-row>
</template>
