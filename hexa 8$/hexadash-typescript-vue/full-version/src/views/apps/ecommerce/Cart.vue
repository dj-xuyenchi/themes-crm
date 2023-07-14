<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { Main } from '../../styled';
import Ordersummary from './overview/Ordersummary.vue';

const { state, dispatch } = useStore();
const { matched } = useRoute();
const cartData = computed(() => state.cart.data);
const rtl = computed(() => state.themeLayout.rtlData);
const coupon = ref(0);
const promo = ref(0);
let current = ref(0);

let subtotal = ref(0);

onMounted(() => dispatch('cartGetData'));

watchEffect(() => {
  let totalValue = ref(0);
  if (cartData.value !== null) {
    cartData.value.map((data: any) => {
      const { quantity, price } = data;
      totalValue.value += parseInt(quantity, 10) * parseInt(price, 10);

      return (subtotal.value = totalValue.value);
    });
  }
});

const onHandleCurrent = (current: any) => {
  current.value = current;
};
const isExact = ref(true);
isExact.value = matched[3].name === 'exact' ? true : false;

onBeforeRouteUpdate(async (to) => {
  isExact.value = to.name === 'exact' ? true : false;
});
const { path }: any = matched[2].path;
</script>
<template>
  <sdPageHeader title="Shopping Cart" class="ninjadash-page-header-main"> </sdPageHeader>
  <Main>
    <div :class="isExact ? 'cartWraper' : 'checkoutWraper'">
      <a-row :gutter="15">
        <a-col :md="24">
          <sdCards headless>
            <a-row :gutter="30">
              <a-col :xxl="17" :xs="24">
                <router-view name="child"></router-view>
              </a-col>
              <a-col :xxl="7" :xs="24">
                <Ordersummary :isExact="isExact" :subtotal="subtotal" :path="path" />
              </a-col>
            </a-row>
          </sdCards>
        </a-col>
      </a-row>
    </div>
  </Main>
</template>
