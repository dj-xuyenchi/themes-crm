<script setup lang="tsx">
import { computed, onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { FigureCart, ProductTable, CouponForm } from '../Style';

const productTableColumns = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
  },
];

const { state, dispatch } = useStore();

const cartData = computed(() => state.cart.data);
const isLoading = computed(() => state.cart.loading);
const rtl = computed(() => state.themeLayout.rtlData);

const formState = reactive({
  coupon: '',
});

const coupon = ref(0);
const promo = ref(0);
let current = ref(0);

const incrementUpdate = (id: number, quantity: any) => {
  const data = parseInt(quantity, 10) + 1;
  dispatch('cartUpdateQuantity', {
    id,
    quantity: data,
    cartData: cartData.value,
  });
};

const decrementUpdate = (id: number, quantity: any) => {
  const data = parseInt(quantity, 10) >= 2 ? parseInt(quantity, 10) - 1 : 1;
  dispatch('cartUpdateQuantity', {
    id,
    quantity: data,
    cartData: cartData.value,
  });
};

const cartDeleted = (id: number) => {
  const confirm = window.confirm('Are you sure to delete this product?');
  if (confirm) dispatch('cartDelete', { id, cartData: cartData.value });
};

onMounted(() => dispatch('cartGetData'));

// const productTableData = ref([]);

const productTableData = computed(() =>
  state.cart.data !== null
    ? state.cart.data.map((data: any) => {
        const { id, img, name, quantity, price, size, color } = data;
        return {
          key: id,
          product: (
            <div class="cart-single">
              <FigureCart>
                <img style={{ width: 80 }} src={`${img}`} alt="" />
                <figcaption>
                  <div class="cart-single__info">
                    <sdHeading as="h6">{name}</sdHeading>
                    <ul class="info-list">
                      <li>
                        <span class="info-title">Size :</span>
                        <span>{size}</span>
                      </li>
                      <li>
                        <span class="info-title"> Color :</span>
                        <span>{color}</span>
                      </li>
                    </ul>
                  </div>
                </figcaption>
              </FigureCart>
            </div>
          ),
          price: <span class="cart-single-price">${price}</span>,
          quantity: (
            <div class="cart-single-quantity">
              <sdButton onClick={() => decrementUpdate(id, quantity)} class="btn-dec" type="default">
                <unicon name="minus" width="14"></unicon>
              </sdButton>
              {quantity}
              <sdButton onClick={() => incrementUpdate(id, quantity)} class="btn-inc" type="default">
                <unicon name="plus" width="14"></unicon>
              </sdButton>
            </div>
          ),
          total: <span class="cart-single-t-price">${(quantity * price).toFixed(2)}</span>,
          action: (
            <div class="table-action">
              <sdButton
                onClick={() => cartDeleted(id)}
                class="btn-icon"
                to="#"
                size="default"
                type="danger"
                shape="circle"
                transparented
              >
                <unicon name="trash-alt" width="16"></unicon>
              </sdButton>
            </div>
          ),
        };
      })
    : [],
);

const submitCoupon = (values: any) => {
  coupon.value = values;
};
</script>

<template>
  <ProductTable>
    <div v-if="isLoading" class="sd-spin">
      <a-spin />
    </div>
    <div class="table-cart table-responsive">
      <a-table :pagination="false" :dataSource="productTableData" :columns="productTableColumns" />
    </div>
  </ProductTable>
  <CouponForm>
    <a-form id="submitCoupon" :model="formState" @finish="submitCoupon">
      <a-row :gutter="15">
        <a-col :lg="4" :sm="8" :xs="24">
          <a-form-item name="coupon" label="">
            <a-input v-model:value="formState.coupon" placeholder="Coupon Code" />
          </a-form-item>
        </a-col>
        <a-col :lg="4" :sm="8" :xs="24">
          <sdButton htmlType="submit" size="default" type="primary"> Apply Coupon </sdButton>
        </a-col>
      </a-row>
    </a-form>
  </CouponForm>
</template>
