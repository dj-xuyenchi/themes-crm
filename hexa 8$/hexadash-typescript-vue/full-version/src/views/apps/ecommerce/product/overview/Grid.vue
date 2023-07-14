<script setup lang="ts">
import { computed, ref, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import { PaginationWrapper, NotFoundWrapper } from '../../Style';
const ProductCards = defineAsyncComponent(() => import('./ProductCards.vue'));

const { state } = useStore();
const products = computed(() => state.ecommerce.products);
const isLoader = computed(() => state.ecommerce.isProductLoading);

let current = ref(1);
const pageSize = ref(10);

const onShowSizeChange = (newCurrent: number, newPageSize: number) => {
  current.value = newCurrent;
  pageSize.value = newPageSize;
};

const onHandleChange = (newCurrent: number, newPageSize: number) => {
  current.value = newCurrent;
  pageSize.value = newPageSize;
};
</script>

<template>
  <a-row :gutter="30">
    <a-col v-if="isLoader" :xs="24">
      <div class="spin">
        <a-spin />
      </div>
    </a-col>
    <template v-else-if="products.length">
      <a-col v-for="{ id, name, rate, price, oldPrice, popular, img } in products" :xxl="6" :lg="12" :xs="24" :key="id">
        <Suspense>
          <template #default>
            <ProductCards :product="{ id, name, rate, price, oldPrice, popular, img }" />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton :paragraph="{ rows: 22 }" active />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
    </template>

    <a-col v-else :md="24">
      <NotFoundWrapper>
        <sdHeading as="h1">Data Not Found</sdHeading>
      </NotFoundWrapper>
    </a-col>

    <a-col :xs="24" class="pb-30">
      <PaginationWrapper v-if="products.length">
        <a-pagination
          :style="{ marginTop: 10 }"
          :change="onHandleChange"
          showSizeChanger
          @showSizeChange="onShowSizeChange"
          v-model:current="current"
          v-model:pageSize="pageSize"
          :defaultCurrent="1"
          :total="40"
        />
      </PaginationWrapper>
    </a-col>
  </a-row>
</template>
