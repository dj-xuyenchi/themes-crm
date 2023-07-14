<template>
  <a-row justify="center">
    <a-col :xl="10" :md="16" :xs="24">
      <div class="social-form">
        <BasicFormWrapper>
          <a-form
            name="editAccount"
            :model="formState"
            :rules="rules"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
            :layout="formState.layout"
          >
            <sdHeading class="form-title" as="h4"> Social Profiles </sdHeading>
            <a-form-item name="facebook" label="Facebook">
              <a-input v-model:value="formState.facebook" placeholder="URL">
                <template #prefix>
                  <span class="facebook">
                    <font-awesome-icon :icon="faFacebookF" />
                  </span>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="twitter" label="Twitter">
              <a-input v-model:value="formState.twitter" placeholder="URL">
                <template #prefix>
                  <span class="twitter">
                    <font-awesome-icon :icon="faTwitter" />
                  </span>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="linkedin" label="Linkedin">
              <a-input v-model:value="formState.linkedin" placeholder="URL">
                <template #prefix>
                  <span class="linkedin">
                    <font-awesome-icon :icon="faLinkedin" />
                  </span>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="instagram" label="Instagram">
              <a-input v-model:value="formState.instagram" placeholder="URL">
                <template #prefix>
                  <span class="instagram">
                    <font-awesome-icon :icon="faInstagram" />
                  </span>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="github" label="GitHub">
              <a-input v-model:value="formState.github" placeholder="URL">
                <template #prefix>
                  <span class="github">
                    <font-awesome-icon :icon="faGithub" />
                  </span>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="youtube" label="Youtube">
              <a-input v-model:value="formState.youtube" placeholder="Url">
                <template #prefix>
                  <span class="youtube">
                    <font-awesome-icon :icon="faYoutube" />
                  </span>
                </template>
              </a-input>
            </a-form-item>

            <a-form-item>
              <div class="add-user-bottom text-right">
                <sdButton
                  class="ant-btn ant-btn-light"
                  type="default"
                  htmlType="submit"
                >
                  <router-link to="work">Back</router-link>
                </sdButton>
                <sdButton htmlType="button" type="primary">
                  Save Profile
                </sdButton>
              </div>
            </a-form-item>
          </a-form>
        </BasicFormWrapper>
      </div>
    </a-col>
  </a-row>
</template>
<script>
import { BasicFormWrapper } from "../../../styled";
import { ref, reactive, defineComponent } from "vue";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialProfile = defineComponent({
  name: "SocialProfile",
  components: { BasicFormWrapper },
  setup() {
    const values = ref("");
    const formState = reactive({
      facebook: "",
      twitter: "",
      instagram: "",
      github: "",
      youtube: "",
      linkedin: "",
      layout: "vertical",
    });

    const rules = {};

    const handleFinish = (values) => {
      values.value = values;
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };

    return {
      values,
      formState,
      rules,
      handleFinish,
      handleFinishFailed,
      faFacebookF,
      faYoutube,
      faTwitter,
      faInstagram,
      faGithub,
      faLinkedin,
    };
  },
});

export default SocialProfile;
</script>
