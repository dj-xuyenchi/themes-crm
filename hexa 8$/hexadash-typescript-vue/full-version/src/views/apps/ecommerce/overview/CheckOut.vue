<script setup lang="tsx">
import { computed, onMounted, reactive, ref, defineEmits, watchEffect } from 'vue';
import { useStore } from 'vuex';
import Steps from '@/components/steps/Steps.vue';
import { BasicFormWrapper } from '../../../styled';
import { FigureCart, CheckoutWrapper, ProductTable, OrderSummary } from '../Style';

const columns = [
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
];

const emit = defineEmits(['onCurrentChange']);

const { state, dispatch } = useStore();
const cartData = computed(() => state.cart.data);
const isLoading = computed(() => state.cart.loading);
const rtl = computed(() => state.themeLayout.rtlData);
const paymentValue = ref('card');
const stateAccount = reactive({
  username: '',
  email: '',
  password: '',
});

const stateAddress = reactive({
  name: '',
  company: '',
  street: '',
  street2: '',
  country: '',
  city: '',
  phone: '',
  zip: '',
});

const stateMethod = reactive({
  month: '',
  year: '',
  name: '',
  number: '',
});

const handleAccountSubmit = (values: any) => {
  console.log(values);
};

const handleAddressSubmit = (values: any) => {
  console.log(values);
};

const status = ref('process');
const isFinished = ref(false);
let current = ref(1);

onMounted(() => dispatch('cartGetData'));

const incrementUpdate = (id: any, quantity: any) => {
  const data = parseInt(quantity, 10) + 1;
  dispatch('cartUpdateQuantity', {
    id,
    quantity: data,
    cartData: cartData.value,
  });
};

const decrementUpdate = (id: any, quantity: any) => {
  const data = parseInt(quantity, 10) >= 2 ? parseInt(quantity, 10) - 1 : 1;
  dispatch('cartUpdateQuantity', {
    id,
    quantity: data,
    cartData: cartData.value,
  });
};

const cartDeleted = (id: any) => {
  const confirm = window.confirm('Are you sure to delete this product?');
  if (confirm) dispatch('cartDelete', { id, cartData: cartData.value });
};

const PlaceOrder = (
  <sdButton class="btn-proceed" type="secondary" size="lg">
    <a to="#">Place Order</a>
  </sdButton>
);

const next = () => {
  emit('onCurrentChange', current, PlaceOrder);
  status.value = 'process';
  current.value = current.value + 1;
};

const prev = () => {
  emit('onCurrentChange', current, PlaceOrder);
  status.value = 'process';
  current.value = current.value - 1;
};

const done = () => {
  const confirm = window.confirm('Are sure to submit order?');
  emit('onCurrentChange', current, PlaceOrder);
  if (confirm) {
    status.value = 'finish';
    isFinished.value = true;
    current.value = 0;
  }
};
const month: any = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
let subtotal = ref(0);

function updateSubtotal(cartData: any[]) {
  subtotal.value = cartData.reduce((acc, data) => {
    const { quantity, price } = data;
    return acc + parseInt(quantity, 10) * parseInt(price, 10);
  }, 0);
}
const dataSource = computed(() => {
  return state.cart.data.map((data: any) => {
    const { id, img, name, quantity, price, size, color } = data;
    subtotal.value += parseInt(quantity, 10) * parseInt(price, 10);

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
      total: <span class="cart-single-t-price">${quantity * price}</span>,
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
  });
});

watchEffect(() => {
  updateSubtotal(state.cart.data);
});

const reviewValue = ref('ms');

const steps = [
  {
    title: 'Create Account',
    content: 'account',
  },
  {
    title: 'Shipping Address',
    content: 'address',
  },
  {
    title: 'Payment Method',
    content: 'method',
  },
  {
    title: 'Review Order',
    content: 'review',
  },
];

const handleMethodSubmit = () => {
  console.log('Submitted!');
};
</script>

<template>
  <CheckoutWrapper>
    <Steps
      isSwitch
      :current="0"
      :status="status"
      :steps="steps"
      @onNext="next"
      @onPrev="prev"
      @onDone="done"
      :isFinished="isFinished"
    >
      <template #account>
        <BasicFormWrapper class="basic-form-inner">
          <div class="ninjadash-form-checkout">
            <a-row justify="center">
              <a-col :sm="22" :xs="24">
                <div class="create-account-form">
                  <sdHeading as="h4">1. Please Create Your Account</sdHeading>
                  <a-form :model="stateAccount" @finish="handleAccountSubmit" name="account" layout="vertical">
                    <a-form-item name="username" label="Username">
                      <a-input v-model:value="stateAccount.username" placeholder="Username" />
                    </a-form-item>
                    <a-form-item name="email" label="Email Address">
                      <a-input type="email" v-model:value="stateAccount.email" placeholder="name@gmail.com" />
                    </a-form-item>
                    <a-form-item name="password" label="Password">
                      <a-input type="password" v-model:value="stateAccount.password" placeholder="Password" />
                      <span class="input-message">Enter a valid password. Min 6 characters long</span>
                    </a-form-item>
                  </a-form>
                </div>
              </a-col>
            </a-row>
          </div>
        </BasicFormWrapper>
      </template>
      <template #address>
        <BasicFormWrapper class="basic-form-inner">
          <div class="ninjadash-form-checkout">
            <a-row justify="center">
              <a-col :sm="22" :xs="24">
                <div class="create-account-form">
                  <sdHeading as="h4">2. Please Fill in Your Shipping Address</sdHeading>
                  <a-form @finish="handleAddressSubmit" :model="stateAddress" name="address" layout="vertical">
                    <a-form-item name="name" label="Contact Name">
                      <a-input v-model:value="stateAddress.name" placeholder="Ibn adam" />
                    </a-form-item>
                    <a-form-item name="company">
                      <template #label
                        ><span> Company Name <span>(Optional)</span> </span></template
                      >
                      <a-input v-model:value="stateAddress.company" placeholder="adam" />
                    </a-form-item>
                    <a-form-item name="phone" label="Phone Number">
                      <a-input v-model:value="stateAddress.phone" placeholder="+880" />
                    </a-form-item>
                    <a-form-item name="country" label="Country/Region">
                      <a-select v-model:value="stateAddress.country" :style="{ width: '100%' }">
                        <a-select-option value="">Please Select</a-select-option>
                        <a-select-option value="bangladesh">Bangladesh</a-select-option>
                        <a-select-option value="india">India</a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item name="street" label="Street Address">
                      <a-input v-model:value="stateAddress.street" placeholder="House Number and Street Name" />
                    </a-form-item>
                    <a-form-item name="street2" label="">
                      <a-input v-model:value="stateAddress.street2" placeholder="Apartment, Suite, Unit etc." />
                    </a-form-item>
                    <a-form-item name="city" label="City">
                      <a-input v-model:value="stateAddress.city" placeholder="Enter City" />
                    </a-form-item>
                    <a-form-item name="zip" label="Zip/Postal Code">
                      <a-input v-model:value="stateAddress.zip" placeholder="Enter Zip" />
                    </a-form-item>
                  </a-form>
                </div>
              </a-col>
            </a-row>
          </div>
        </BasicFormWrapper>
      </template>
      <template #method>
        <BasicFormWrapper class="basic-form-inner">
          <div class="ninjadash-form-checkout">
            <a-row justify="center">
              <a-col :sm="22" :xs="24">
                <div class="payment-method-form">
                  <sdHeading as="h4">3. Please Select Your Payment Method</sdHeading>
                  <div class="shipping-selection">
                    <a-radio-group v-model:value="paymentValue" :style="{ width: '100%' }">
                      <div class="shipping-selection__card">
                        <a-radio :style="{ width: '100%' }" value="card">
                          <sdCards headless>
                            <div class="supported-card d-flex">
                              <span>Credit/Debit Card</span>
                              <div class="supported-card_logos">
                                <img :style="{ width: '50px' }" :src="'/src/assets/img/cards-logo/ms.png'" alt="" />
                                <img
                                  :style="{ width: '50px' }"
                                  :src="'/src/assets/img/cards-logo/american-express.png'"
                                  alt=""
                                />
                                <img :style="{ width: '50px' }" :src="'/src/assets/img/cards-logo/visa.png'" alt="" />
                              </div>
                            </div>
                            <sdCards headless :style="{ marginBottom: 0 }">
                              <a-form @finish="handleMethodSubmit" :model="stateMethod" name="info" layout="vertical">
                                <a-form-item name="number" label="Card Number">
                                  <a-input v-model:value="stateMethod.number" placeholder="6547-8702-6987-2527" />
                                </a-form-item>
                                <a-form-item name="name" label="Name on Card">
                                  <a-input v-model:value="stateMethod.name" placeholder="Full name" />
                                </a-form-item>
                                <a-form-item name="month" label="Expiration Date">
                                  <a-select v-model:value="stateMethod.month" :style="{ width: '100%' }">
                                    <a-select-option value="">MM</a-select-option>
                                    <a-select-option v-for="value in month" :key="value" :value="value">
                                      {{ value }}
                                    </a-select-option>
                                  </a-select>
                                </a-form-item>
                                <a-form-item name="year">
                                  <a-select v-model:value="stateMethod.year" :style="{ width: '100%' }">
                                    <a-select-option value="">YY</a-select-option>
                                    <a-select-option :value="new Date().getFullYear()">{{
                                      new Date().getFullYear()
                                    }}</a-select-option>

                                    <a-select-option
                                      v-for="value in month"
                                      :key="value"
                                      :value="(new Date().getFullYear() + parseInt(value)).toString()"
                                    >
                                      {{ (new Date().getFullYear() + parseInt(value)).toString() }}
                                    </a-select-option>
                                  </a-select>
                                </a-form-item>
                                <a-form-item name="cvv" label="CVV">
                                  <div class="cvv-wrap">
                                    <a-input :style="{ width: '60%' }" placeholder="XXX" />
                                    <a class="input-leftText" to="#"> What is this? </a>
                                  </div>
                                </a-form-item>
                              </a-form>
                            </sdCards>
                          </sdCards>
                        </a-radio>
                      </div>
                      <div class="shipping-selection__paypal">
                        <a-radio value="payPal" :style="{ width: '100%' }">
                          Pay With PayPal
                          <img :src="'/src/assets/img/PayPalLogo.png'" alt="paypal" />
                        </a-radio>
                      </div>
                      <div class="shipping-selection__cash">
                        <a-radio value="cash" :style="{ width: '100%' }"> Cash on delivery </a-radio>
                      </div>
                    </a-radio-group>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </BasicFormWrapper>
      </template>
      <template #review>
        <BasicFormWrapper v-if="status !== 'finish'" :style="{ width: '100%' }">
          <div class="ninjadash-review-order" :style="{ width: '100%' }">
            <sdHeading as="h4">4. Review and confirm Order</sdHeading>
            <sdCards
              :bodyStyle="{
                backgroundColor: `${({ theme }: any) => theme[theme.mainContent]['main-background-light']}`,
                borderRadius: 10,
              }"
              headless
            >
              <div class="ninjadash-review-order__single">
                <sdCards headless>
                  <div class="ninjadash-review-order__shippingTitle">
                    <sdHeading as="h5">
                      Shipping Information
                      <a to="#">
                        <unicon name="edit"></unicon>
                        Edit
                      </a>
                    </sdHeading>
                  </div>
                  <article class="ninjadash-review-order__shippingInfo">
                    <a-radio-group v-model:value="reviewValue" :style="{ width: '100%' }">
                      <a-radio value="ms" :style="{ width: '100%' }">
                        <div class="shipping-info-text">
                          <sdHeading as="h6">Ibn Adam</sdHeading>
                          <sdHeading as="h6">Phone: +61412345678</sdHeading>
                          <p>
                            795 Folsom Ave, Suite 600 <br />
                            San Francisco, CA 94107 <br />
                            United States
                          </p>
                        </div>
                      </a-radio>
                    </a-radio-group>
                    <a class="btn-addNew" to="#"> + Add New Address </a>
                  </article>
                </sdCards>
              </div>
              <div class="ninjadash-review-order__single">
                <sdCards headless>
                  <div>
                    <sdHeading as="h5">Payment Method</sdHeading>
                  </div>
                  <a-radio-group v-model:value="reviewValue" :style="{ width: '100%' }">
                    <a-radio value="sm" :style="{ width: '100%' }">
                      <div class="method-info">
                        <img :src="'/src/assets/img/ms.svg'" alt="" />
                        **** **** **** 2597
                      </div>
                    </a-radio>
                  </a-radio-group>
                  <a class="btn-addCard" to="#"> + Add New Card </a>
                </sdCards>
              </div>

              <div class="ninjadash-review-order__single">
                <sdCards headless>
                  <ProductTable>
                    <div class="table-cart table-responsive">
                      <a-table :pagination="false" :dataSource="dataSource" :columns="columns" />
                    </div>
                  </ProductTable>

                  <a-row justify="end">
                    <a-col :xxl="8" :xl="5" :md="9" :sm="14" :xs="24" :offset="!rtl ? 10 : 0">
                      <OrderSummary>
                        <div class="invoice-summary-inner">
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
                          <sdHeading class="summary-total" as="h4">
                            <span class="summary-total-label">Total : </span>
                            <span class="summary-total-amount">{{ `$${subtotal + 30 - 20}` }}</span>
                          </sdHeading>
                        </div>
                      </OrderSummary>
                    </a-col>
                  </a-row>
                </sdCards>
              </div>
            </sdCards>
          </div>
        </BasicFormWrapper>

        <a-row v-else justify="start" :style="{ width: '100%' }">
          <a-col :xl="24" :xs="24">
            <div class="checkout-successful">
              <sdCards
                headless
                :bodyStyle="{
                  borderRadius: '20px',
                }"
              >
                <sdCards headless>
                  <span class="icon-success">
                    <unicon name="check"></unicon>
                  </span>
                  <sdHeading as="h3">Payment Successful</sdHeading>
                  <p>Thank you! We have received your Payment</p>
                </sdCards>
              </sdCards>
            </div>
          </a-col>
        </a-row>
      </template>
    </Steps>
  </CheckoutWrapper>
</template>
