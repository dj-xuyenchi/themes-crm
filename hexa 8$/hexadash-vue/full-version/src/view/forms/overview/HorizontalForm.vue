<template>
  <HorizontalFormStyleWrap>
    <sdCards title="Horizontal Form">
      <a-form
        :layout="formState.layout"
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        labelAlign="left"
      >
        <a-form-item label="Name">
          <a-input
            v-model:value="formState.name"
            placeholder="input placeholder"
          />
        </a-form-item>
        <a-form-item label="Email Address">
          <a-input
            v-model:value="formState.emailAddress"
            placeholder="input placeholder"
          />
        </a-form-item>
        <a-form-item label="Password">
          <a-input-password
            v-model:value="formState.password"
            placeholder="input placeholder"
          />
        </a-form-item>
        <a-row>
          <a-col
            :lg="{ span: 16, offset: 8 }"
            :md="{ span: 15, offset: 9 }"
            :xs="{ span: 24, offset: 0 }"
          >
            <div class="ninjadash_form-action">
              <sdButton
                class="ninjadash_form-action__btn"
                size="lg"
                html-type="submit"
                type="light"
              >
                Cancel
              </sdButton>
              <sdButton
                class="ninjadash_form-action__btn"
                type="primary"
                size="lg"
              >
                Save
              </sdButton>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </sdCards>
  </HorizontalFormStyleWrap>
</template>

<script>
import { reactive, defineComponent } from "vue";
import { HorizontalFormStyleWrap } from "./Style";
export default defineComponent({
  name: "HorizantalForm",
  components: {
    HorizontalFormStyleWrap,
  },
  setup() {
    const formState = reactive({
      layout: "horizontal",
      name: "Duran Clayton",
      emailAddress: "username@email.com",
      password: "123456",
    });

    const labelCol = {
      lg: 8,
      md: 9,
      xs: 24,
    };
    const wrapperCol = {
      lg: 16,
      md: 15,
      xs: 24,
    };

    return {
      formState,
      labelCol,
      wrapperCol,
    };
  },
});
</script>
