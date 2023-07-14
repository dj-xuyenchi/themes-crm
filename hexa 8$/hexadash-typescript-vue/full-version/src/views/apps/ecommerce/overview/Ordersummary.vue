<script lang="ts">
import { computed, onMounted, reactive, ref, toRefs, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { OrderSummary } from '../Style';

const OrdersSummary = defineComponent({
  name: 'OrdersSummary',
  components: { OrderSummary },
  props: ['subtotal', 'isExact', 'path'],
  setup() {
    const { state, dispatch } = useStore();
    const rtl = computed(() => state.themeLayout.rtlData);
    const coupon = ref(0);
    const promo = ref(0);
    let current = ref(0);
    const submitPromo = (values: any) => {
      promo.value = values;
    };

    const formState = reactive({
      couponType: '',
      promoCode: '',
      layout: 'vertical',
    });

    const onSubmit = () => {
      document.querySelectorAll('button span').forEach((item: any) => {
        if (item.innerHTML === 'Done') {
          item.click();
        }
      });
    };
    onMounted(() => dispatch('cartGetData'));
    return {
      onSubmit,
      submitPromo,
      current,
      coupon,
      rtl,
      formState,
      ...toRefs(formState),
    };
  },
});

export default OrdersSummary;
</script>

<template>
  <sdCards
    :bodyStyle="{
      borderRadius: '20px',
    }"
    class="ninjadash-order-summery"
    headless
  >
    <OrderSummary>
      <sdHeading class="summary-table-title" as="h4"> Order Summary </sdHeading>
      <sdCards
        :bodyStyle="{
          borderRadius: '20px',
        }"
        headless
      >
        <div class="order-summary-inner">
          <ul class="summary-list">
            <li>
              <span class="summary-list-title">Subtotal :</span>
              <span class="summary-list-text">{{ `$${subtotal}` }}</span>
            </li>
            <li>
              <span class="summary-list-title">Discount :</span>
              <span class="summary-list-text">{{ `$${-20}` }}</span>
            </li>
            <li>
              <span class="summary-list-title">Shipping Charge :</span>
              <span class="summary-list-text">{{ `$${30}` }}</span>
            </li>
          </ul>
          <a-form :layout="formState.layout" :model="formState" :onFinish="submitPromo">
            <a-form-item name="couponType" label="">
              <a-select v-model:value="couponType" :style="{ width: '100%' }">
                <a-select-option value="">
                  <span>
                    <img :src="'/src/assets/img/Subtraction1.png'" alt="" />
                    Select Coupon
                  </span>
                </a-select-option>
                <a-select-option value="one">
                  <span>
                    <img :src="'/src/assets/img/Subtraction1.png'" alt="" />
                    Coupon one
                  </span>
                </a-select-option>
                <a-select-option value="tow">
                  <span>
                    <img :src="'/src/assets/img/Subtraction1.png'" alt="" />
                    Coupon tow
                  </span>
                </a-select-option>
              </a-select>
            </a-form-item>
            <div class="promo-apply-form">
              <a-form-item name="promoCode" label="Promo Code">
                <a-input v-model:value="promoCode" placeholder="Promo Code" />
              </a-form-item>
              <a-form-item>
                <sdButton htmlType="submit" size="default" type="success" outlined> Apply </sdButton>
              </a-form-item>
            </div>
          </a-form>
          <sdHeading class="summary-total" as="h4">
            <span class="summary-total-label">Total : </span>
            <span class="summary-total-amount">{{ `$${subtotal + 30 - 20}` }}</span>
          </sdHeading>

          <sdButton v-if="isExact" class="btn-proceed" type="primary" size="lg">
            <router-link :to="`${path}/checkout`">
              Proceed To Checkout
              <unicon :name="!rtl ? 'arrow-right' : 'arrow-left'" width="14"></unicon>
            </router-link>
          </sdButton>

          <sdButton v-if="current === 3" @click="onSubmit" class="btn-proceed" type="secondary" size="lg">
            <a to="#">Place Order</a>
          </sdButton>
        </div>
      </sdCards>
    </OrderSummary>
  </sdCards>
</template>
