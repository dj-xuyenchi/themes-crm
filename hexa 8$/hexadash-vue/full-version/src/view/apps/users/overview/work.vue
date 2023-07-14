<template>
  <a-row justify="center">
    <a-col :xl="10" :md="16" :xs="24">
      <div class="user-work-form">
        <BasicFormWrapper>
          <a-form
            style="width: 100%"
            name="work"
            :model="formState"
            :rules="rules"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
            :layout="formState.layout"
          >
            <sdHeading class="form-title" as="h4"> Work Information </sdHeading>

            <a-form-item name="company" label="Company Name">
              <a-input
                v-model:value="formState.company"
                placeholder="Company Name"
              />
            </a-form-item>

            <a-form-item name="department" label="Department">
              <a-input
                v-model:value="formState.department"
                placeholder="Department name"
              />
            </a-form-item>

            <a-form-item name="designation" label="Designation">
              <a-input
                v-model:value="formState.designation"
                placeholder="Designation"
              />
            </a-form-item>

            <a-form-item name="hiringDate" label="Hiring Date">
              <a-datePicker
                v-model:value="formState.hiringDate"
                :format="dateFormat"
                style="width: 100%"
              />
            </a-form-item>

            <a-form-item name="status" label="Status" class="work-status">
              <a-radio-group v-model:value="formState.status">
                <a-radio value="active">Active</a-radio>
                <a-radio value="deactivated">Deactivated</a-radio>
                <a-radio value="blocked">Blocked</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item>
              <div class="add-user-bottom text-right">
                <sdButton class="ant-btn ant-btn-light" type="default">
                  Reset
                </sdButton>
                <sdButton htmlType="submit" type="primary">
                  <router-link to="social">Next</router-link>
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
const dateFormat = "MM/DD/YYYY";

const Work = defineComponent({
  name: "Work",
  components: { BasicFormWrapper },
  setup() {
    const values = ref("");
    const formState = reactive({
      company: "",
      department: "",
      designation: "",
      hiringDate: "",
      status: "active",
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
      dateFormat,
      formState,
      rules,
      handleFinish,
      handleFinishFailed,
    };
  },
});

export default Work;
</script>
