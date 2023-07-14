<template>
  <div class="full-width-table">
    <BorderLessHeading>
      <Cards>
        <template #title>
          <div class="ninjadash-card-title-wrap">
            <span class="ninjadash-card-title-text">
              Source Of Revenue Generated
            </span>
          </div>
        </template>
        <template #button>
          <div class="ninjadash-card-nav">
            <ul>
              <li
                :class="
                  revenueTab === 'today'
                    ? 'ninjadash-active'
                    : 'ninjadash-today'
                "
              >
                <router-link
                  @click="(e) => handleTabActivation(e, 'today')"
                  to="#"
                >
                  Today
                </router-link>
              </li>
              <li
                :class="
                  revenueTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'
                "
              >
                <router-link
                  @click="(e) => handleTabActivation(e, 'week')"
                  to="#"
                >
                  Week
                </router-link>
              </li>
              <li
                :class="
                  revenueTab === 'month'
                    ? 'ninjadash-active'
                    : 'ninjadash-month'
                "
              >
                <router-link
                  @click="(e) => handleTabActivation(e, 'month')"
                  to="#"
                >
                  Month
                </router-link>
              </li>
            </ul>
          </div>
        </template>
        <TableDefaultStyle class="ninjadash-having-header-bg">
          <RevenueGeneratedWrapper>
            <div class="table-responsive">
              <a-table
                :columns="locationColumns"
                :dataSource="revenueData"
                :pagination="false"
              />
            </div>
          </RevenueGeneratedWrapper>
        </TableDefaultStyle>
      </Cards>
    </BorderLessHeading>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
import Cards from "../../../../components/cards/frame/CardsFrame.vue";
import { RevenueGeneratedWrapper } from "../../style";
import { BorderLessHeading, TableDefaultStyle } from "../../../styled";

import tableData from "../../../../demoData/table-data.json";

const RevenueGenerated = defineComponent({
  name: "RevenueGenerated",
  components: {
    Cards,
    RevenueGeneratedWrapper,
    BorderLessHeading,
    TableDefaultStyle,
  },
  setup() {
    const { revenueGenerated } = tableData;

    const locationColumns = [
      {
        title: "Source",
        dataIndex: "source",
        key: "source",
      },
      {
        title: "Visitors",
        dataIndex: "visitors",
        key: "visitors",
      },
      {
        title: "Page View",
        dataIndex: "pageView",
        key: "pageView",
      },
      {
        title: "Revenue",
        dataIndex: "revenue",
        key: "revenue",
      },
      {
        title: "Trend",
        dataIndex: "trend",
        key: "trend",
      },
    ];

    const revenueTab = ref("today");
    const revenueData = computed(() => {
      return (
        revenueGenerated !== null &&
        revenueGenerated[revenueTab.value].map((value) => {
          const { key, name, icon, visitors, pageView, revenue, trend } = value;
          return {
            key,
            source: (
              <div class="ninjadash-revenue-company align-center-v">
                <div
                  class={`ninjadash-revenue-company__icon ninjadash-revenue-company__icon-${icon}`}
                >
                  <i class={`fa fa-${icon}`} />
                </div>
                <div class="ninjadash-revenue-company__content">
                  <span class="ninjadash-revenue-company__text">{name}</span>
                </div>
              </div>
            ),
            visitors,
            pageView,
            revenue,
            trend: (
              <div
                className={`ninjadash-trend-progress align-center-v ninjadash-trend-progress-${icon}`}
              >
                <span class="ninjadash-trend-percentage">{trend}%</span>
                <a-progress
                  percent={Number(trend)}
                  strokeWidth={4}
                  status="active"
                  showInfo={false}
                  class={`ninjadash-trend-progress ninjadash-trend-progress-${trend}`}
                />
              </div>
            ),
          };
        })
      );
    });

    const handleTabActivation = (event, value) => {
      event.preventDefault();
      revenueTab.value = value;
    };

    return {
      handleTabActivation,
      revenueGenerated,
      locationColumns,
      revenueTab,
      revenueData,
    };
  },
});

export default RevenueGenerated;
</script>
