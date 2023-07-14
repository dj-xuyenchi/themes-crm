<script setup lang="tsx">
import { ref, computed } from 'vue';
import Cards from '../../../components/cards/frame/CardsFrame.vue';
import { BorderLessHeading, TableDefaultStyle } from '../../styled';

import tableData from '../../../demoData/table-data.json';

const { bestSeller }: any = tableData;
const sellerColumns = [
  {
    title: 'Seller Name',
    dataIndex: 'sellerName',
    key: 'sellerName',
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
const sellerTab = ref('today');
const bestSellerData = computed(() => {
  return (
    bestSeller !== null &&
    bestSeller[sellerTab.value].map((value: any) => {
      const { key, img, name, company, product, revenue, status } = value;
      return {
        key,
        sellerName: (
          <div className="ninjadash-info-element align-center-v">
            <div className="ninjadash-info-element__media">
              <img src={`/src/assets/img/sellers/${img}`} alt="HexaDash Product" />
            </div>
            <div className="ninjadash-info-element__content">
              <span className="ninjadash-info-element__text">{name}</span>
            </div>
          </div>
        ),
        company,
        product,
        revenue,
        status,
      };
    })
  );
});

const handleTabActivation = (event: any, value: any) => {
  event.preventDefault();
  sellerTab.value = value;
};
</script>

<template>
  <div class="full-width-table">
    <BorderLessHeading>
      <Cards>
        <template #title>
          <div class="ninjadash-card-title-wrap">
            <span class="ninjadash-card-title-text"> Best Sellers </span>
          </div>
        </template>
        <template #button>
          <div class="ninjadash-card-nav">
            <ul>
              <li :class="sellerTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'">
                <router-link @click="(e: any) => handleTabActivation(e, 'today')" to="#"> Today </router-link>
              </li>
              <li :class="sellerTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'">
                <router-link @click="(e: any) => handleTabActivation(e, 'week')" to="#"> Week </router-link>
              </li>
              <li :class="sellerTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'">
                <router-link @click="(e: any) => handleTabActivation(e, 'month')" to="#"> Month </router-link>
              </li>
            </ul>
          </div>
        </template>
        <TableDefaultStyle class="ninjadash-having-header-bg ninjadash-large-table">
          <div className="table-responsive">
            <a-table :columns="sellerColumns" :dataSource="bestSellerData" :pagination="false" />
          </div>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  </div>
</template>
