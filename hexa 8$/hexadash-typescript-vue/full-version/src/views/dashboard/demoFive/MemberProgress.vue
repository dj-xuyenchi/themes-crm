<script setup lang="tsx">
import { computed, ref } from 'vue';
import { TableDefaultStyle, BorderLessHeading } from '../../styled';

import tableData from '@/demoData/table-data.json';

const columns = [
  {
    title: '',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '',
    dataIndex: 'salary',
    key: 'salary',
  },
  {
    title: '',
    dataIndex: 'workOn',
    key: 'workOn',
  },
  {
    title: '',
    dataIndex: 'status',
    key: 'status',
  },
];
const { memberProgressData }: any = tableData;
const traffic = ref('today');

const dataSource = computed(() => {
  return memberProgressData[traffic.value].map(({ id, title, workOn, userImg, salary, status, progress }: any) => {
    return {
      id,
      title: (
        <div class="ninjadash-info-element align-center-v">
          <img src={`/src/assets/img/sellers/${userImg}`} alt="ninjaDash" />
          <span class="ninjadash-info-element__text">{title}</span>
        </div>
      ),
      salary: `$${salary}`,
      workOn,
      status: (
        <a-progress
          percent={Number(status)}
          strokeWidth={5}
          status="active"
          showInfo
          class={`progress-dt progress-${progress}`}
        />
      ),
    };
  });
});

const handleTabActivation = (value: any) => {
  traffic.value = value;
};
</script>
<template>
  <BorderLessHeading>
    <sdCards title="Member Progress" more>
      <template #more>
        <router-link to="#">
          <unicon name="print" width="16"></unicon>
          <span>Printer</span>
        </router-link>
        <router-link to="#">
          <unicon name="book-open" width="16"></unicon>
          <span>PDF</span>
        </router-link>
        <router-link to="#">
          <unicon name="file-alt" width="16"></unicon>
          <span>Google Sheets</span>
        </router-link>
        <router-link to="#">
          <unicon name="x" width="16"></unicon>
          <span>Excel (XLSX)</span>
        </router-link>
        <router-link to="#">
          <unicon name="file" width="16"></unicon>
          <span>CSV</span>
        </router-link>
      </template>
      <template #button>
        <div class="ninjadash-card-nav">
          <ul>
            <li :class="traffic === 'today' ? 'ninjadash-active' : 'ninjadash-today'">
              <router-link @click="() => handleTabActivation('today')" to="#"> Today </router-link>
            </li>
            <li :class="traffic === 'week' ? 'ninjadash-active' : 'ninjadash-week'">
              <router-link @click="() => handleTabActivation('week')" to="#"> Week </router-link>
            </li>
            <li :class="traffic === 'month' ? 'ninjadash-active' : 'ninjadash-month'">
              <router-link @click="() => handleTabActivation('month')" to="#"> Month </router-link>
            </li>
          </ul>
        </div>
      </template>
      <TableDefaultStyle class="ninjadash-having-header-bg">
        <div class="ninjadash-member-progress-table table-bordered table-responsive">
          <a-table :columns="columns" :data-source="dataSource" :pagination="false" :showHeader="false" />
        </div>
      </TableDefaultStyle>
    </sdCards>
  </BorderLessHeading>
</template>
