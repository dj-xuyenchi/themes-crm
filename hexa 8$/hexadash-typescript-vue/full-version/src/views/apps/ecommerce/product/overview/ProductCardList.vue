<script setup lang="ts">
import { ProductCard } from '../../Style';
import { computed, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
const { dispatch, state } = useStore();
const isLoader = computed(() => state.ecommerce.isProductLoading);
const { product } = toRefs(props);
const renderData = computed(() => product.value);
const { matched } = useRoute();

const addWishList = (value: any) => {
  dispatch('updateWishList', value);
};
</script>

<template>
  <div class="spin" v-if="isLoader"><a-spin /></div>
  <ProductCard v-else class="list-view" :style="{ marginBottom: '20px' }">
    <div class="product-list">
      <a-row :gutter="15">
        <a-col :md="24" :lg="6" :xs="24">
          <figure>
            <img :style="{ width: '100%' }" :src="`${renderData.img}`" alt="" />
          </figure>
        </a-col>
        <a-col :md="24" :lg="12" :xs="24">
          <div class="product-single-description">
            <sdHeading class="product-single-title" as="h5">
              <router-link :to="`${matched[1].path}/ecommerce/productDetails/${renderData.id}`">{{
                renderData.name
              }}</router-link>
            </sdHeading>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English. he point
              of using Lorem Ipsum is that it has
            </p>
          </div>
        </a-col>
        <a-col :md="24" :lg="6" :xs="24">
          <div class="product-single-info">
            <a @click="() => addWishList(renderData.id)" class="btn-heart" to="#">
              <unicon
                name="heart"
                width="14"
                :class="renderData.popular ? 'wish-active' : 'wish-deactivate'"
                :fill="renderData.popular ? '#ff4d4f' : '#9299B8'"
              ></unicon>
            </a>
            <p class="product-single-price">
              <span class="product-single-price__new">${{ renderData.price }} </span>

              <template v-if="renderData.oldPrice">
                <del> ${{ renderData.oldPrice }} </del>
                <span class="product-single-price__offer"> 60% Off</span>
              </template>
            </p>
            <div class="product-single-rating">
              <a-rate allow-half :value="renderData.rate" disabled />
              4.9
              <span class="total-reviews"> 778 Reviews</span>
            </div>
            <div class="product-single-action">
              <sdButton size="sm" class="btn-cart" type="white" :outlined="true">
                <unicon name="shopping-bag" width="14"></unicon>
                <span>Add To Cart</span>
              </sdButton>
              <sdButton size="sm" type="primary"> Buy Now </sdButton>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </ProductCard>
</template>
