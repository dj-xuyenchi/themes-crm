<script setup lang="tsx">
import { computed, ref } from 'vue';
import { TableDefaultStyle } from '../../styled';
import transactionsData from '../../../demoData/transactions.json';

const transactions: any = transactionsData;
const productColumns = [
  {
    dataIndex: 'info',
    key: 'info',
  },
  {
    dataIndex: 'amount',
    key: 'amount',
  },
];

const productTab = ref('today');

/* Tab Activation */
const handleTabActivation = (value: any, event: any) => {
  event.preventDefault();
  productTab.value = value;
};

const productTableData = computed(() =>
  transactions[productTab.value].map((value: any) => {
    const { key, paymentMethod, duration, amount, icon, style, paymentType } = value;
    return {
      key,
      info: (
        <div class="transection-single__details">
          <span class={`transection-single__icon transection-single__icon--${style}`}>
            <unicon name={icon}></unicon>
          </span>
          <span class="transection-single__info">
            <strong>{paymentMethod}</strong>
            <span>{duration}</span>
          </span>
        </div>
      ),
      amount:
        paymentType === 'credit' ? (
          <div class="transection-single__amount transection-single__amount--credited">
            <span>+{amount}</span>
          </div>
        ) : (
          <div class="transection-single__amount transection-single__amount--debited">
            <span>-{amount}</span>
          </div>
        ),
    };
  }),
);
</script>

<template>
  <div class="full-width-table">
    <sdCards title="Latest Transections">
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
        <div class="latest-transections-table table-responsive">
          <a-table :columns="productColumns" :dataSource="productTableData" :pagination="false" />
        </div>
      </TableDefaultStyle>
    </sdCards>
  </div>
</template>
