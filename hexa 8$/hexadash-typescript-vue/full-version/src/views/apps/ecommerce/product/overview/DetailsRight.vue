<script setup lang="ts">
import { toRefs, ref, computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  product: Object,
});
const quantity = ref(1);
const id = '0';
const { product } = toRefs(props);
const { state, dispatch } = useStore();

const incrementQuantity = (e: Event) => {
  e.preventDefault();
  if (quantity.value !== 5) quantity.value = quantity.value + 1;
};

const decrementQuantity = (e: Event) => {
  e.preventDefault();
  if (quantity.value !== 1) quantity.value = quantity.value - 1;
};

const isLoader = computed(() => state.ecommerce.isLoading);
</script>

<template>
  <div v-if="isLoader" class="spin">
    <a-spin />
  </div>
  <div v-else class="product-details-box__right pdbr">
    <sdHeading class="pdbr__title" as="h2">
      {{ product?.name }}
    </sdHeading>
    <div class="pbr__rating-wrapper">
      <a-rate allow-half :value="product?.rate" disabled />
      <span class="pdbr__rating">{{ product?.rate }}</span>
      <span class="pdbr__review-count"> 778 Reviews</span>
    </div>
    <p>
      <span class="pdbr__brand-text">Brand :</span>
      <span class="pdbr__brand-name">{{ product?.brand }}</span>
    </p>
    <sdHeading class="pdbr__new-price" as="h3">
      <span class="pdbr__currency">$</span>
      <span class="pdbr__price">{{ product?.price }}</span>
    </sdHeading>

    <sdHeading v-if="product?.oldPrice" class="pdbr__old-price" as="h6">
      <del>${{ product?.oldPrice }}</del>
      <span class="pdbr__offer-price">30% Off</span>
    </sdHeading>

    <p class="pdbr__desc">{{ product?.description }}</p>
    <div class="pdbr__current-status">
      <p>
        <span class="current-status-title">Available:</span>
        <span class="stock-status in-stock"> In Stock</span>
      </p>
      <p>
        <span class="current-status-title"> Shipping: </span>
        <span class="shipping-cost">Free</span>
      </p>
      <p class="pdbr__quantity">
        <span class="current-status-title">Quantity:</span>

        <sdButton class="btn-inc" @click="decrementQuantity" type="default"> - </sdButton>
        {{ quantity }}
        <sdButton class="btn-dec" @click="incrementQuantity" type="default"> + </sdButton>
        <span class="pdbr__availability">540 pieces available</span>
      </p>
    </div>

    <div class="pdbr__Actions d-flex align-items-center">
      <div class="pdbr__product-action">
        <sdButton class="btn-buy" size="default" type="primary"> Buy Now </sdButton>
        <sdButton class="btn-cart" size="default" type="secondary">
          <unicon name="shopping-bag" width="14"></unicon>
          <span>Add To Cart</span>
        </sdButton>
        <sdButton
          @click="() => dispatch('updateWishList', parseInt(id, 10))"
          class="btn-icon"
          size="default"
          raised
          type="white"
          shape="circle"
        >
          <unicon name="heart" width="14" :fill="product?.popular ? '#ff4d4f' : 'none'"></unicon>
        </sdButton>
        <sdButton class="btn-icon" size="default" raised type="white" shape="circle">
          <unicon name="share-alt" width="14"></unicon>
        </sdButton>
      </div>
      <div class="pdbr__socials">
        <a to="#">
          <unicon
            class="super-crazy-colors"
            name="facebook-f"
            width="16"
            :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
          ></unicon>
        </a>
        <a to="#">
          <unicon
            class="super-crazy-colors"
            name="twitter-alt"
            width="16"
            :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
          ></unicon>
        </a>
        <a to="#">
          <unicon
            class="super-crazy-colors"
            name="dribbble"
            width="16"
            :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
          ></unicon>
        </a>
        <a to="#">
          <unicon
            class="super-crazy-colors"
            name="instagram"
            width="16"
            :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
          ></unicon>
        </a>
        <a to="#">
          <unicon
            class="super-crazy-colors"
            name="github"
            width="16"
            :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
          ></unicon>
        </a>
      </div>
    </div>
    <ul class="pdbr__list">
      <li>
        <span>Category:</span>
        <span>{{ product?.category }}</span>
      </li>
    </ul>
    <ul class="pdbr__list">
      <li>
        <span>Tags:</span>
        <span>Blue, Green, Light</span>
      </li>
    </ul>
  </div>
</template>
