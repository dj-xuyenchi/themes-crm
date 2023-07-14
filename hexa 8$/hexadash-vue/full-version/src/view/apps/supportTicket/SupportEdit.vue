<template>
  <sdModal
    :getContainer="false"
    type="primary"
    title="Edit Support"
    :visible="visible"
    :footer="null"
    :onCancel="handleCancel"
  >
    <div className="project-modal">
      <BasicFormWrapper>
        <a-form
          :model="formState"
          autoComplete="off"
          name="supportCreate"
          @finish="handleOk"
          layout="vertical"
        >
          <a-form-item
            name="email"
            label="Email"
            :rules="[
              {
                required: true,
                type: 'email',
              },
            ]"
          >
            <a-input v-model:value="formState.email" />
          </a-form-item>
          <a-form-item
            name="subject"
            label="Subject"
            :rules="[
              {
                required: true,
              },
            ]"
          >
            <a-input v-model:value="formState.subject" />
          </a-form-item>
          <a-form-item name="priority" initialValue="high" label="Priority">
            <a-select
              v-model:value="formState.priority"
              :style="{ width: '100%' }"
            >
              <a-select-option value="high">High</a-select-option>
              <a-select-option value="medium">Medium</a-select-option>
              <a-select-option value="low">Low</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item name="status" initialValue="open" label="Status">
            <a-select
              v-model:value="formState.status"
              :style="{ width: '100%' }"
            >
              <a-select-option value="open">Open</a-select-option>
              <a-select-option value="close">Close</a-select-option>
              <a-select-option value="pending">Pending</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            name="description"
            label="Description"
            :rules="[
              {
                required: true,
              },
            ]"
          >
            <a-textarea v-model:value="formState.description" :rows="4" />
          </a-form-item>
          <a-form-item>
            <sdButton
              size="default"
              htmlType="submit"
              type="primary"
              key="submit"
              @click="handleOk"
            >
              Submit Ticket
            </sdButton>
          </a-form-item>
        </a-form>
      </BasicFormWrapper>
    </div>
  </sdModal>
</template>
<script>
import { defineComponent, reactive } from "vue";
import PropTypes from "vue-types";
import { BasicFormWrapper } from "@/view/styled";

const SupportTicket = defineComponent({
  name: "SupportTicket",
  components: { BasicFormWrapper },
  props: {
    visible: PropTypes.bool,
  },

  setup(_, { emit }) {
    const formState = reactive({
      email: "",
      subject: "",
      priority: "",
      status: "",
      description: "",
    });
    const handleOk = (value) => {
      emit("handleSubmit", value);
    };

    const handleCancel = () => {
      emit("onCancel");
    };

    return { handleOk, handleCancel, formState };
  },
});

export default SupportTicket;
</script>
