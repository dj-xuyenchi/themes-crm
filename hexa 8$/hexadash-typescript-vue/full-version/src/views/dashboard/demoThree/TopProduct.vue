<script setup lang="tsx">
import { computed, ref } from 'vue';
import { TableDefaultStyle } from '../../styled';
import tableData from '../../../demoData/table-data.json';

const { topProduct }: any = tableData;
const productTab = ref('today');
const productColumns = [
  {
    title: 'Product Name',
    dataIndex: 'productname',
    key: 'prroductname',
  },
  {
    title: 'Deals',
    dataIndex: 'deals',
    key: 'deals',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

/* Tab Activation */
const handleTabActivation = (value: any, event: any) => {
  event.preventDefault();
  productTab.value = value;
};

const productTableData = computed(() =>
  topProduct[productTab.value].map((value: any) => {
    const { key, img, name, deals, amount } = value;
    return {
      key,
      productname: (
        <div class="ninjadash-info-element align-center-v">
          <img src={`/src/assets/img/products/electronics/${img}`} alt="ninjadash Product" />
          <span class="ninjadash-info-element__text">{name}</span>
        </div>
      ),
      deals,
      amount,
    };
  }),
);
</script>

<template>
  <div class="full-width-table">
    <sdCards title="Top Product">
      <template #button>
        <div class="ninjadash-card-nav">
          <ul>
            <li :class="productTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'">
              <router-link @click="(event: any) => handleTabActivation('today', event)" to="#"> Year </router-link>
            </li>
            <li :class="productTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'">
              <router-link @click="(event: any) => handleTabActivation('week', event)" to="#"> Week </router-link>
            </li>
            <li :class="productTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'">
              <router-link @click="(event: any) => handleTabActivation('month', event)" to="#"> Month </router-link>
            </li>
          </ul>
        </div>
      </template>
      <TableDefaultStyle class="ninjadash-having-header-bg">
        <div class="ninjadash-top-product table-responsive">
          <a-table :columns="productColumns" :dataSource="productTableData" :pagination="false" />
        </div>
      </TableDefaultStyle>
    </sdCards>
  </div>
</template>
