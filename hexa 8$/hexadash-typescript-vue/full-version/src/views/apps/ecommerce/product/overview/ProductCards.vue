<script setup lang="ts">
import { ProductCard } from '../../Style';
import { toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const props = defineProps({
  product: Object,
});
const { dispatch, state } = useStore();
const isLoader = computed(() => state.ecommerce.isProductLoading);
const { product } = toRefs(props);
const renderData = computed(() => product?.value);
const { matched } = useRoute();
const addWishList = (value: any) => {
  dispatch('updateWishList', value);
};
</script>

<template>
  <div class="spin" v-if="isLoader"><a-spin /></div>
  <ProductCard v-else style="margin-bottom: 30px">
    <figure>
      <img :src="`../../../../../${renderData?.img}`" :alt="`img${renderData?.id}`" />
    </figure>
    <figcaption>
      <a @click="() => addWishList(renderData?.id)" class="btn-heart" to="#">
        <unicon name="heart" width="14" :style="{ fill: renderData?.popular ? '#ff4d4f' : '#9299B8' }"></unicon>
      </a>
      <sdHeading class="product-single-title" as="h5">
        <router-link :to="`${matched[1].path}/ecommerce/productDetails/${renderData?.id}`">{{
          renderData?.name
        }}</router-link>
      </sdHeading>

      <div class="product-single-rating">
        <a-rate allow-half :value="renderData?.rate" disabled /> 4.9
        <span class="total-reviews"> 778 Reviews</span>
      </div>

      <p class="product-single-price">
        <span class="product-single-price__new">${{ renderData?.price }} </span>

        <template v-if="renderData?.oldPrice">
          <del class="product-single-price__old"> ${{ renderData?.oldPrice }} </del>
          <span class="product-single-price__offer"> 60% Off</span>
        </template>
      </p>

      <div class="product-single-action">
        <sdButton size="sm" type="white" class="btn-cart" outlined>
          <unicon name="shopping-bag" width="14"></unicon>
          <span>Add To Cart</span>
        </sdButton>
        <sdButton size="sm" type="primary"> Buy Now </sdButton>
      </div>
    </figcaption>
  </ProductCard>
</template>
