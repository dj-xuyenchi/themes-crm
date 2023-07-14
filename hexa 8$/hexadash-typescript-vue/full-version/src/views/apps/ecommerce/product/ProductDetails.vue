<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Main } from '../../../styled';
import { ProductDetailsWrapper } from '../Style';
import DetailsRight from './overview/DetailsRight.vue';
const pageRoutes = [
  {
    path: '/',
    breadcrumbName: 'Product',
  },
  {
    path: '/',
    breadcrumbName: 'Details',
  },
];

const { state, dispatch } = useStore();
const product = computed(() => state.ecommerce.product);
const isProductLoading = computed(() => state.ecommerce.isProductLoading);
const products = computed(() => product.value && state.ecommerce.products);
const filterData = computed(() =>
  products.value.filter((value: any) => {
    return value.category === product.value[0].category;
  }),
);
const { params, matched }: any = useRoute();
const { path }: any = matched;

onMounted(() =>
  dispatch('filterSinglePage', {
    paramsId: parseInt(params.id, 10),
    currentState: products.value,
  }),
);
const router = useRouter();
router.beforeEach((to: any) => {
  dispatch('filterSinglePage', {
    paramsId: parseInt(to.params.id, 10),
    currentState: products.value,
  });
});
</script>

<template>
  <sdPageHeader title="Product details" class="ninjadash-page-header-main" :routes="pageRoutes"></sdPageHeader>
  <Main>
    <sdCards headless>
      <ProductDetailsWrapper v-if="product[0]">
        <div class="product-details-box">
          <a-row :gutter="30">
            <a-col :xs="24" :lg="10">
              <div class="product-details-box__left pdbl">
                <figure>
                  <img :style="{ width: '100%' }" :src="product[0] && `${product[0].img}`" alt="" />
                </figure>
                <div class="pdbl__slider pdbs">
                  <a-row v-if="filterData.length" :gutter="5">
                    <a-col v-for="(value, index) in filterData" :key="value.id">
                      <div class="pdbl__image" v-if="index <= 3">
                        <figure>
                          <router-link :to="`/app/ecommerce/productDetails/${value.id}`">
                            <img :style="{ width: '100%' }" :src="`${value.img}`" alt="" />
                          </router-link>
                        </figure>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :lg="14">
              <DetailsRight :product="product[0]" />
            </a-col>
          </a-row>
        </div>
      </ProductDetailsWrapper>
      <div v-else class="spin">
        <a-spin />
      </div>
    </sdCards>
  </Main>
</template>
