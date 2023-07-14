<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Calendar"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="24">
          <sdCards title="Basic">
            <CalendarWrapper><a-calendar @panelChange="onPanelChange" /></CalendarWrapper>
          </sdCards>
        </a-col>
        <a-col :md="24">
          <sdCards title="Notice Calendar">
            <CalendarWrapper>
              <a-calendar v-model:value="value">
                <template #dateCellRender="{ current: value }">
                  <ul class="events">
                    <li v-for="item in getListData(value)" :key="item.content">
                      <a-badge :status="item.type" :text="item.content" />
                    </li>
                  </ul>
                </template>
                <template #monthCellRender="{ current: value }">
                  <div v-if="getMonthData(value)" class="notes-month">
                    <section>{{ getMonthData(value) }}</section>
                    <span>Backlog number</span>
                  </div>
                </template>
              </a-calendar>
            </CalendarWrapper>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main, CalendarWrapper } from '../styled';
import { ref } from 'vue';

const value = ref();

const getListData = (value: any) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
      ];
      break;

    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
        {
          type: 'error',
          content: 'This is error event.',
        },
      ];
      break;

    case 15:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event',
        },
        {
          type: 'success',
          content: 'This is very long usual event。。....',
        },
        {
          type: 'error',
          content: 'This is error event 1.',
        },
        {
          type: 'error',
          content: 'This is error event 2.',
        },
        {
          type: 'error',
          content: 'This is error event 3.',
        },
        {
          type: 'error',
          content: 'This is error event 4.',
        },
      ];
      break;

    default:
  }

  return listData || [];
};

const getMonthData = (value: any) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const onPanelChange = (value: any, mode: any) => {
  console.log(value, mode);
};
</script>
