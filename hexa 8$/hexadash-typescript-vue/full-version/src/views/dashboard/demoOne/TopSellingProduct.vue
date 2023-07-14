<script lang="tsx">
import { computed, onMounted, ref, defineComponent } from 'vue';
import { useStore } from 'vuex';
import Cards from '@/components/cards/frame/CardsFrame.vue';
import { TopSellerWrap } from '../style';
import { BorderLessHeading, TableDefaultStyle } from '../../styled';

const sellingColumns = [
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
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];

const TopSellingProduct = defineComponent({
  name: 'TopSellingProduct',
  components: {
    Cards,
    TopSellerWrap,
    BorderLessHeading,
    TableDefaultStyle,
  },
  setup() {
    const { state, dispatch } = useStore();
    const topSaleState = computed(() => state.chartContent.topSaleData);
    const products = ref('today');

    const handleActiveChangeProducts = (event: any, value: any) => {
      event.preventDefault();
      products.value = value;
      dispatch('topSaleFilterData', value);
    };

    const sellingData = computed(() =>
      topSaleState.value
        ? topSaleState.value.map((value: any) => {
            const { key, name, img, price, sold, revenue } = value;
            return {
              key,
              name: (
                <div className="product-info align-center-v">
                  <div className="product-img">
                    <img src={`/src/assets/img/products/electronics/${img}`} alt="" />
                  </div>
                  <span className="product-name">{name}</span>
                </div>
              ),
              price,
              sold,
              revenue,
            };
          })
        : [],
    );

    onMounted(() => dispatch('topSaleGetData'));

    return {
      topSaleState,
      handleActiveChangeProducts,
      sellingColumns,
      sellingData,
      products,
    };
  },
});
export default TopSellingProduct;
</script>

<template>
  <div class="full-width-table">
    <BorderLessHeading>
      <Cards>
        <template #title>
          <div class="ninjadash-card-title-wrap">
            <span class="ninjadash-card-title-text"> Top Selling Products </span>
          </div>
        </template>
        <template #button>
          <div class="ninjadash-card-nav">
            <ul>
              <li :class="products === 'today' ? 'ninjadash-active' : 'ninjadash-today'">
                <router-link @click="(e: any) => handleActiveChangeProducts(e, 'today')" to="#"> Today </router-link>
              </li>
              <li :class="products === 'week' ? 'ninjadash-active' : 'ninjadash-week'">
                <router-link @click="(e: any) => handleActiveChangeProducts(e, 'week')" to="#"> Week </router-link>
              </li>
              <li :class="products === 'month' ? 'ninjadash-active' : 'ninjadash-month'">
                <router-link @click="(e: any) => handleActiveChangeProducts(e, 'month')" to="#"> Month </router-link>
              </li>
            </ul>
          </div>
        </template>
        <TableDefaultStyle class="ninjadash-having-header-bg">
          <TopSellerWrap>
            <div class="table-bordered top-seller-table table-responsive">
              <a-table :columns="sellingColumns" :dataSource="sellingData" :pagination="false" />
            </div>
          </TopSellerWrap>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  </div>
</template>
