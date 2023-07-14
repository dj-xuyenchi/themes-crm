<script setup lang="tsx">
import { computed, onMounted, ref, reactive } from 'vue';
import { TableDefaultStyle, BasicFormWrapper, BorderLessHeading } from '../../styled';
import { UpcomingEventsStyleWrap } from '../style';

const events: any = {
  today: [
    {
      id: 1,
      type: 'primary',
      title: 'Planning for new dashboard wireframe and prototype design',
      date: '19',
      month: 'March',
      time: '08:30 AM',
    },
    {
      id: 2,
      type: 'secondary',
      title: 'International Web Conference 2021',
      date: '19',
      month: 'March',
      time: '09:30 AM',
    },
    {
      id: 3,
      type: 'info',
      title: 'Dribble Designer Meetup',
      date: '19',
      month: 'March',
      time: '10:30 AM',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Dribble Designer Meetup',
      date: '19',
      month: 'March',
      time: '11:30 AM',
    },
  ],
  week: [
    {
      id: 1,
      type: 'primary',
      title: 'Planning for new dashboard wireframe and prototype design',
      date: '12',
      month: 'September',
      time: '08:30 AM',
    },
    {
      id: 2,
      type: 'info',
      title: 'International Web Conference 2021',
      date: '16',
      month: 'September',
      time: '09:30 AM',
    },
    {
      id: 3,
      type: 'secondary',
      title: 'Dribble Designer Meetup',
      date: '15',
      month: 'September',
      time: '10:30 AM',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Dribble Designer Meetup',
      date: '13',
      month: 'September',
      time: '11:30 AM',
    },
  ],
  month: [
    {
      id: 1,
      type: 'primary',
      title: 'Planning for new dashboard wireframe and prototype design',
      date: '24',
      month: 'April',
      time: '08:30 AM',
    },
    {
      id: 2,
      type: 'secondary',
      title: 'International Web Conference 2021',
      date: '24',
      month: 'April',
      time: '09:30 AM',
    },
    {
      id: 3,
      type: 'info',
      title: 'Dribble Designer Meetup',
      date: '24',
      month: 'April',
      time: '10:30 AM',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Dribble Designer Meetup',
      date: '28',
      month: 'April',
      time: '11:30 AM',
    },
  ],
};

const columns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '',
    dataIndex: 'actions',
    key: 'actions',
  },
];

const tabValue = ref('today');
const responsive = ref(0);
const collapsed = ref(false);
const visible = ref(false);
const modalType = ref('primary');
const taskEditId = ref('');
const editableItem = ref({});
const eventState = ref<any[]>([]);

const initFormData = reactive({
  title: '',
});

const tabChange = (value: any) => {
  tabValue.value = value;
  eventState.value = events[tabValue.value];
};

const showModal = (id: any, item: any) => {
  visible.value = true;
  collapsed.value = false;
  taskEditId.value = id;
  editableItem.value = item;
  initFormData.title = item.title;
};

const handleTaskDelete = (id: any) => {
  events[tabValue.value] = events[tabValue.value].filter((item: any) => item.id !== id);
  eventState.value = eventState.value.filter((item: any) => item.id !== id);
};

const handleCancel = () => {
  visible.value = false;
};

const handleUpdate = (value: any) => {
  eventState.value = events[tabValue.value].map((item: any) => {
    if (item.id == taskEditId.value) {
      return (item = { ...item, title: value.title });
    }
    return item;
  });

  events[tabValue.value] = events[tabValue.value].map((item: any) => {
    if (item.id == taskEditId.value) {
      return (item = { ...item, title: value.title });
    }
    return item;
  });

  return (visible.value = false);
};

const dataSource = computed(() => {
  return (
    eventState.value &&
    eventState.value.map((value: any) => {
      const { title, time, date, month, type, id } = value;
      return {
        key: id,
        name: (
          <div class="ninjadash-event-details align-center-v">
            <div class={`ninjadash-event-details__date ninjadash-event-${type}`}>
              <span class="ninjadash-event-day">{date}</span>
              <span class="ninjadash-event-month">{month}</span>
            </div>
            <article class="ninjadash-event-details__content">
              <h4 class="ninjadash-event-details__title">{title}</h4>
              <p class="ninjadash-event-details__time">{time}</p>
            </article>
          </div>
        ),
        actions: (
          <div class="ninjadash-event-details-action">
            <router-link
              to="#"
              class="ninjadash-event-details-action__edit"
              onClick={() => showModal(id, { title, time, date, id })}
            >
              <unicon name="edit" width="14"></unicon>
            </router-link>
            <router-link to="#" class="ninjadash-event-details-action__delete" onClick={() => handleTaskDelete(id)}>
              <unicon name="times" width="14"></unicon>
            </router-link>
          </div>
        ),
      };
    })
  );
});

onMounted(() => {
  eventState.value = events[tabValue.value];
});
</script>

<template>
  <BorderLessHeading>
    <UpcomingEventsStyleWrap>
      <sdCards title="Upcoming Events">
        <template #button>
          <div class="ninjadash-card-nav">
            <ul>
              <li :class="tabValue === 'today' ? 'ninjadash-active' : 'ninjadash-today'">
                <router-link @click="() => tabChange('today')" to="#"> Today </router-link>
              </li>
              <li :class="tabValue === 'week' ? 'ninjadash-active' : 'ninjadash-week'">
                <router-link @click="() => tabChange('week')" to="#"> Week </router-link>
              </li>
              <li :class="tabValue === 'month' ? 'ninjadash-active' : 'ninjadash-month'">
                <router-link @click="() => tabChange('month')" to="#"> Month </router-link>
              </li>
            </ul>
          </div>
        </template>
        <TableDefaultStyle class="ninjadash-having-header-bg">
          <a-table :data-source="dataSource" :columns="columns" :pagination="false" :showHeader="false" />
        </TableDefaultStyle>
      </sdCards>
    </UpcomingEventsStyleWrap>
    <sdModal
      title="Update Events"
      class="ninjadash_addTask-modal"
      :type="modalType"
      :visible="visible"
      :footer="null"
      @cancel="handleCancel"
    >
      <div class="ninjadash_addTask-modal-inner">
        <BasicFormWrapper>
          <a-form :model="initFormData" name="add-task" @finish="handleUpdate" layout="vertical">
            <a-form-item :rules="[{ required: true, message: 'Please add a Title' }]" name="title">
              <a-input v-model:value="initFormData.title" placeholder="Title" />
            </a-form-item>
            <div class="ninjadash-modal-actions">
              <sdButton size="sm" type="white" key="cancel" outlined @click="handleCancel"> Cancel </sdButton>
              <sdButton htmlType="submit" size="sm" type="primary" key="submit"> Update Event </sdButton>
            </div>
          </a-form>
        </BasicFormWrapper>
      </div>
    </sdModal>
  </BorderLessHeading>
</template>
