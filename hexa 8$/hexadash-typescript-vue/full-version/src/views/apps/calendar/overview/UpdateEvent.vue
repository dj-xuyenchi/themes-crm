<template>
  <BasicFormWrapper>
    <AddEventWrap>
      <a-form
        ref="formRef"
        :style="{ width: '100%' }"
        :model="formState"
        name="addNewEvent"
        @finish="handleSubmit"
      >
        <a-form-item v-bind="formItemLayout" label="Title" name="title">
          <a-input
            v-model:value="formState.title"
            placeholder="Write Your Event Title"
          />
        </a-form-item>

        <a-form-item v-bind="formItemLayout" name="type" label="Event Type">
          <a-radio-group v-model:value="formState.type">
            <a-radio value="event">Event</a-radio>
            <a-radio value="reminder">Reminder</a-radio>
            <a-radio value="task">Task</a-radio>
          </a-radio-group>
        </a-form-item>
        <div class="ant-form-item">
          <a-row>
            <a-col :sm="4" :xs="24">
              <span class="label">Start:</span>
            </a-col>
            <a-col :sm="20" :xs="24">
              <div class="date-time-picker d-flex">
                <a-date-picker v-model:value="startDate" />
                <a-time-picker v-model:value="startTime" />
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="ant-form-item">
          <a-row>
            <a-col :sm="4" :xs="24">
              <span class="label">End:</span>
            </a-col>
            <a-col :sm="20" :xs="24">
              <div class="date-time-picker d-flex">
                <a-date-picker v-model:value="endDate" />
                <a-time-picker v-model:value="endTime" />
              </div>
            </a-col>
          </a-row>
        </div>

        <a-form-item
          v-bind="formItemLayout"
          class="event-desc"
          name="description"
          label="Description"
        >
          <a-textarea
            v-model:value="formState.description"
            placeholder="Write Your Description"
          />
        </a-form-item>

        <a-form-item v-bind="formItemLayout" name="label" label="Label">
          <a-select v-model:value="formState.label" :style="{ width: '100%' }">
            <a-select-option value="primary">
              <span>
                <span class="bullet primary"></span>
                Primary
              </span>
            </a-select-option>
            <a-select-option value="secondary">
              <span>
                <span class="bullet secondary" />
                Secondary
              </span>
            </a-select-option>
            <a-select-option value="success">
              <span>
                <span class="bullet success" />
                success
              </span>
            </a-select-option>
            <a-select-option value="warning">
              <span>
                <span class="bullet warning" />
                Warning
              </span>
            </a-select-option>
            <a-select-option value="info">
              <span>
                <span class="bullet info" />
                Info
              </span>
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item>
          <div class="add-event-footer text-right">
            <sdButton class="ant-btn ant-btn-white" @click="resetForm">
              Reset
            </sdButton>
            <sdButton htmlType="submit" class="btn-save" type="primary">
              Save
            </sdButton>
          </div>
        </a-form-item>
      </a-form>
    </AddEventWrap>
  </BasicFormWrapper>
</template>
<script>
import dayjs from "dayjs";
import PropTypes from "vue-types";
import { AddEventWrap } from "../Style";
import { BasicFormWrapper } from "../../../styled";
import { computed, toRefs, ref, reactive } from "vue";
import { useStore } from "vuex";

const dateFormat = "MM/DD/YYYY";

const formRef = ref();

const UpdateEvent = {
  name: "UpdateEvent",
  components: { AddEventWrap, BasicFormWrapper },
  props: {
    data: PropTypes.object,
    onCancel: PropTypes.func,
  },
  setup(props) {
    const { state, dispatch } = useStore();
    const { data, onCancel } = toRefs(props);
    const events = computed(() => state.calendar.events);
    const { title, id, description, label, time, date, type } = data.value;

    const formState = reactive({
      title: title.value,
      description: description,
      type: type.value,
      label: label.value,
    });
    const startDate = ref(dayjs(date.value[0], dateFormat));
    const endDate = ref(dayjs(date.value[1], dateFormat));
    const startTime = ref(dayjs(time.value[0], "HH:mm a"));
    const endTime = ref(dayjs(time.value[1], "HH:mm a"));

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };

    const handleSubmit = (values) => {
      dispatch("updateCurrentEvent", {
        events: events.value,
        event: {
          title: values.title,
          id: id.value,
          description: values.description,
          date: [
            dayjs(startDate.value).format("MM/DD/YYYY"),
            dayjs(endDate.value).format("MM/DD/YYYY"),
          ],
          time: [
            startTime.value.format("hh:mm a"),
            endTime.value.format("hh:mm a"),
          ],
          type: values.type,
          label: values.label,
        },
        id: id.value,
      });
      onCancel.value();
    };
    const onChangeStart = (_, dateString) => {
      startDate.value = dateString;
    };
    const onChangeEnd = (_, dateString) => {
      endDate.value = dateString;
    };

    const onChangeStartTime = (times) => {
      startTime.value = times;
    };
    const onChangeEndTime = (times) => {
      endTime.value = times;
    };

    const resetForm = () => {
      formRef.value.resetFields();
    };

    return {
      formState,
      data,
      events,
      title,
      id,
      description,
      label,
      time,
      date,
      type,
      onChangeEnd,
      onChangeEndTime,
      onChangeStart,
      handleSubmit,
      onChangeStartTime,
      formItemLayout,
      dateFormat,
      startDate,
      endDate,
      startTime,
      endTime,
      formRef,
      resetForm,
    };
  },
};

export default UpdateEvent;
</script>
