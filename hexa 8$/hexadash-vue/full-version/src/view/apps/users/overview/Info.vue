<template>
  <a-row justify="center">
    <a-col :xl="10" :md="16" :xs="24">
      <div class="user-info-form">
        <BasicFormWrapper>
          <a-form
            style="width: 100%"
            name="info"
            :model="formState"
            :rules="rules"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
            :layout="formState.layout"
          >
            <sdHeading class="form-title" as="h4">
              Personal Information
            </sdHeading>

            <figure class="photo-upload align-center-v">
              <img
                :src="require('@/static/img/avatar/profileImage.png')"
                alt=""
              />
              <figcaption>
                <a-upload>
                  <a class="btn-upload" to="#">
                    <unicon name="camera" width="16"></unicon>
                  </a>
                </a-upload>
                <div class="info">
                  <sdHeading as="h4">Profile Photo</sdHeading>
                </div>
              </figcaption>
            </figure>

            <a-form-item label="Name" name="name">
              <a-input
                v-model:value="formState.name"
                placeholder="Input Name"
              />
            </a-form-item>

            <a-form-item label="Email Address" name="email">
              <a-input
                v-model:value="formState.email"
                placeholder="name@example.com"
              />
            </a-form-item>

            <a-form-item name="phone" label="Phone Number">
              <a-input
                v-model:value="formState.phone"
                placeholder="+440 2546 5236"
              />
            </a-form-item>

            <a-form-item name="country" label="Country">
              <a-select v-model:value="formState.country" style="width: 100%">
                <a-select-option value="">Please Select</a-select-option>
                <a-select-option value="bangladesh">Bangladesh</a-select-option>
                <a-select-option value="india">India</a-select-option>
                <a-select-option value="pakistan">Pakistan</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item name="city" label="City">
              <a-select v-model:value="formState.city" style="width: 100%">
                <a-select-option value="">Please Select</a-select-option>
                <a-select-option value="dhaka">Dhaka</a-select-option>
                <a-select-option value="khulna">Khulna</a-select-option>
                <a-select-option value="barisal">Barisal</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item name="website" label="Website">
              <a-input
                v-model:value="formState.website"
                placeholder="www.example.com"
              />
            </a-form-item>

            <a-form-item>
              <div class="add-user-bottom text-right">
                <sdButton class="ant-btn ant-btn-light"> Reset </sdButton>
                <sdButton htmlType="submit" type="primary">
                  <router-link to="work">Save & Next</router-link>
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
import { reactive, ref, defineComponent } from "vue";
const Info = defineComponent({
  name: "Info",
  components: { BasicFormWrapper },
  setup() {
    const values = ref("");
    const formState = reactive({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      website: "",
      layout: "vertical",
    });

    const rules = {
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      email: [
        {
          required: true,
          message: "Please input Activity email",
          trigger: "blur",
        },
        {
          type: "email",
          message: "Please input a valid email",
          trigger: "blur",
        },
      ],
    };

    const handleFinish = (values) => {
      values.value = values;
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };
    return {
      values,
      formState,
      handleFinish,
      handleFinishFailed,
      rules,
    };
  },
});

export default Info;
</script>
