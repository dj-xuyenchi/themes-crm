<template>
  <AccountWrapper>
    <sdCards>
      <template v-slot:title>
        <div class="setting-card-title">
          <sdHeading as="h4">Account Settings</sdHeading>
          <span>Update your username and manage your account</span>
        </div>
      </template>
      <a-row>
        <a-col :xs="24">
          <BasicFormWrapper>
            <a-form
              :model="formState"
              @finish="handleFinish"
              @finishFailed="handleFinishFailed"
              layout="vertical"
            >
              <div class="account-form-top">
                <a-row type="flex" justify="center">
                  <a-col :xxl="10" :lg="16" :md="18" :xs="24">
                    <div class="account-form">
                      <a-form-item label="Username">
                        <a-input
                          v-model:value="formState.username"
                          @change="handleChange"
                        />
                      </a-form-item>
                      <p>
                        Your Dashboard URL: http://dashboard.com/<span>{{
                          name
                        }}</span>
                      </p>
                      <a-form-item label="Email">
                        <a-input v-model:value="formState.email" />
                      </a-form-item>
                    </div>
                  </a-col>
                </a-row>
              </div>

              <div class="account-form-bottom">
                <a-row type="flex" justify="center">
                  <a-col :xxl="10" :lg="16" :md="18" :xs="24">
                    <div class="account-closing">
                      <a-row>
                        <a-col :lg="18" :md="24" :sm="18" :xs="24">
                          <sdHeading class="account-closing__title" as="h4">
                            Close Account
                          </sdHeading>
                          <p>Delete Your Account and Account data</p>
                        </a-col>
                        <a-col :lg="6" :md="24" :sm="6" :xs="24">
                          <sdButton size="sm" type="danger">
                            Close Account
                          </sdButton>
                        </a-col>
                      </a-row>
                    </div>
                    <div class="account-action">
                      <div class="setting-form-actions">
                        <sdButton
                          size="default"
                          htmlType="submit"
                          type="primary"
                        >
                          Save Change
                        </sdButton>
                        &nbsp; &nbsp;
                        <sdButton
                          size="default"
                          @click="handleCancel"
                          type="light"
                        >
                          Cancel
                        </sdButton>
                      </div>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-form>
          </BasicFormWrapper>
        </a-col>
      </a-row>
    </sdCards>
  </AccountWrapper>
</template>

<script>
import { AccountWrapper } from "./style";
import { BasicFormWrapper } from "../../../styled";
import { reactive, defineComponent } from "vue";

const Account = defineComponent({
  name: "Account",
  components: { AccountWrapper, BasicFormWrapper },
  data() {
    const name = "clayton";
    const formState = reactive({
      username: name,
      email: "contact@example.com",
    });

    const handleFinish = (values) => {
      this.values = { ...values };
      console.log(values, formState);
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };
    return {
      name,
      values: null,
      formState,
      handleFinish,
      handleFinishFailed,
      // form: this.$form.createForm(this, { name: "account" }),
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.values = { ...values, tags: this.tags };
          console.log(values);
        }
      });
    },
    handleCancel(e) {
      e.preventDefault();
    },
    handleChange(e) {
      this.name = e.target.value;
    },
  },
});

export default Account;
</script>
