<script setup lang="tsx">
import { ref, computed } from 'vue';
import { BorderLessHeading, TableDefaultStyle } from '../../styled';
import tableData from '@/demoData/table-data.json';

const { activeUserData }: any = tableData;
const sellerColumns = [
  {
    title: 'Username Name',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];
const userTab = ref('today');
const handleTabActivation = (value: any, e: any) => {
  e.preventDefault();
  userTab.value = value;
};

const userTableData = computed(() => {
  return activeUserData[userTab.value].map((value: any) => {
    const { key, img, name, company, product, revenue, status } = value;
    return {
      key,
      username: (
        <div class="ninjadash-info-element align-center-v">
          <img src={`/src/assets/img/sellers/${img}`} alt="ninjadash Img" />
          <span class="ninjadash-info-element__text">{name}</span>
        </div>
      ),
      company,
      product,
      revenue,
      status,
    };
  });
});
</script>

<template>
  <div class="full-width-table">
    <BorderLessHeading>
      <sdCards title="Active User">
        <template #button>
          <div class="ninjadash-card-nav">
            <ul>
              <li :class="userTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'">
                <router-link @click="(event: any) => handleTabActivation('today', event)" to="#"> Year </router-link>
              </li>
              <li :class="userTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'">
                <router-link @click="(event: any) => handleTabActivation('week', event)" to="#"> Week </router-link>
              </li>
              <li :class="userTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'">
                <router-link @click="(event: any) => handleTabActivation('month', event)" to="#"> Month </router-link>
              </li>
            </ul>
          </div>
        </template>
        <TableDefaultStyle class="ninjadash-having-header-bg ninjadash-large-table">
          <div class="table-responsive">
            <a-table :columns="sellerColumns" :dataSource="userTableData" :pagination="false" />
          </div>
        </TableDefaultStyle>
      </sdCards>
    </BorderLessHeading>
  </div>
</template>
