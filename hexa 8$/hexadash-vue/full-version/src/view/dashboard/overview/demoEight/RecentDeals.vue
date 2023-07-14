<template>
  <div class="full-width-table">
      <sdCards title="Recent Deals">
        <template #button>
          <div class="ninjadash-card-nav">
            <ul>
              <li
                :class="
                  dealTab === 'today' ? 'ninjadash-active' : 'ninjadash-year'
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
                  dealTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'
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
                  dealTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'
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
          <div class="ninjadash-recent-deals table-responsive">
            <a-table
              :columns="dealColumns"
              :dataSource="dealTableData"
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

import tableData from "@/demoData/table-data.json";

const { recentDeal } = tableData;

const dealColumns = [
  {
    title: "Product Name",
    dataIndex: "productname",
    key: "prroductname",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

export default defineComponent({
  components: { TableDefaultStyle },
  setup() {
    const dealTab = ref("today");
    const handleTabActivation = (value, e) => {
      e.preventDefault();
      dealTab.value = value;
    };

    const dealTableData = computed(() =>
      recentDeal[dealTab.value].map((value) => {
        const { key, img, name, price } = value;
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
          price: <span class="medium-text">{price}</span>,
        };
      })
    );

    return {
      handleTabActivation,
      dealTableData,
      dealColumns,
      dealTab,
    };
  },
});
</script>
