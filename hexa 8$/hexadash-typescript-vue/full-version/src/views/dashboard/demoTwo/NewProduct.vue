<script setup lang="tsx">
import { ref, computed } from 'vue';
import Cards from '../../../components/cards/frame/CardsFrame.vue';
import { NewProductWrapper } from '../style';
import { BorderLessHeading, TableDefaultStyle } from '../../styled';

import tableData from '../../../demoData/table-data.json';

const { newProduct }: any = tableData;
const productColumns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];
const productTab = ref('today');

const newProductData = computed(() => {
  return (
    newProduct !== null &&
    newProduct[productTab.value].map((value: any) => {
      const { key, name, img, price } = value;
      return {
        key,
        name: (
          <div className="ninjadash-info-element align-center-v">
            <div className="ninjadash-info-element__media">
              <img src={`/src/assets/img/products/electronics/${img}`} alt="HexaDash Product" />
            </div>
            <div className="ninjadash-info-element__content">
              <span className="ninjadash-info-element__text">{name}</span>
            </div>
          </div>
        ),
        price: <span className="ninjadash-product-price">{price}</span>,
      };
    })
  );
});

const handleTabActivation = (event: any, value: any) => {
  event.preventDefault();
  productTab.value = value;
};
</script>

<template>
  <div class="full-width-table">
    <BorderLessHeading>
      <Cards>
        <template #title>
          <div class="ninjadash-card-title-wrap">
            <span class="ninjadash-card-title-text"> New Products </span>
          </div>
        </template>
        <template #button>
          <div class="ninjadash-card-nav">
            <ul>
              <li :class="productTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'">
                <router-link @click="(e: any) => handleTabActivation(e, 'today')" to="#"> Today </router-link>
              </li>
              <li :class="productTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'">
                <router-link @click="(e: any) => handleTabActivation(e, 'week')" to="#"> Week </router-link>
              </li>
              <li :class="productTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'">
                <router-link @click="(e: any) => handleTabActivation(e, 'month')" to="#"> Month </router-link>
              </li>
            </ul>
          </div>
        </template>
        <TableDefaultStyle class="ninjadash-having-header-bg">
          <NewProductWrapper>
            <div className="table-responsive">
              <a-table :columns="productColumns" :dataSource="newProductData" :pagination="false" />
            </div>
          </NewProductWrapper>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  </div>
</template>
