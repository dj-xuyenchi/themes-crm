<template>
  <div class="full-width-table">
      <sdCards title="Top Product">
        <template #button>
          <div class="ninjadash-card-nav">
            <ul>
              <li
                :class="
                  productTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'
                "
              >
                <router-link
                  @click="(event) => handleTabActivation('today', event)"
                  to="#"
                >
                  Year
                </router-link>
              </li>
              <li
                :class="
                  productTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'
                "
              >
                <router-link
                  @click="(event) => handleTabActivation('week', event)"
                  to="#"
                >
                  Week
                </router-link>
              </li>
              <li
                :class="
                  productTab === 'month'
                    ? 'ninjadash-active'
                    : 'ninjadash-month'
                "
              >
                <router-link
                  @click="(event) => handleTabActivation('month', event)"
                  to="#"
                >
                  Month
                </router-link>
              </li>
            </ul>
          </div>
        </template>
        <TableDefaultStyle class="ninjadash-having-header-bg">
          <div class="ninjadash-top-product table-responsive">
            <a-table
              :columns="productColumns"
              :dataSource="productTableData"
              :pagination="false"
            />
          </div>
        </TableDefaultStyle>
      </sdCards>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { TableDefaultStyle } from "../../../styled";

import tableData from "../../../../demoData/table-data.json";

const { topProduct } = tableData;

const productColumns = [
  {
    title: "Product Name",
    dataIndex: "productname",
    key: "prroductname",
  },
  {
    title: "Deals",
    dataIndex: "deals",
    key: "deals",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];

export default defineComponent({
  components: { TableDefaultStyle },
  setup() {
    const productTab = ref("today");

    /* Tab Activation */
    const handleTabActivation = (value, event) => {
      event.preventDefault();
      productTab.value = value;
    };

    const productTableData = computed(() =>
      topProduct[productTab.value].map((value) => {
        const { key, img, name, deals, amount } = value;
        return {
          key,
          productname: (
            <div class="ninjadash-info-element align-center-v">
              <img
                src={require(`@/static/img/products/electronics/${img}`)}
                alt="ninjadash Product"
              />
              <span class="ninjadash-info-element__text">{name}</span>
            </div>
          ),
          deals,
          amount,
        };
      })
    );

    return {
      productColumns,
      handleTabActivation,
      productTableData,
      productTab,
    };
  },
});
</script>
