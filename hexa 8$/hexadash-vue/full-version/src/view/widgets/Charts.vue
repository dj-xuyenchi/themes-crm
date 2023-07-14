<template>
  <div>
    <sdPageHeader title="Widgets Charts" class="ninjadash-page-header-main"></sdPageHeader>
    <Main>
      <CardChartStyle>
        <a-row :gutter="25">
          <a-col :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <total-line-chart /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <sale-revenue /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <monthly-earning /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <profit-growth /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <total-earning /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <sales-overview /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <performance-overview /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="16" :md="24" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <user-overview /> </template>
            </Suspense>
          </a-col>
        </a-row>
      </CardChartStyle>
    </Main>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import { Main } from "../styled";
import { CardChartStyle } from "./Style";

const chartOptions = {
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    y: {
      stacked: true,
      gridLines: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      stacked: true,
      barPercentage: 1,
      gridLines: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const TotalLineChart = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoSix/TotalLineChart.vue")
);

const SaleRevenue = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoSeven/SaleRevenue.vue")
);

const MonthlyEarning = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoEight/MonthlyEarning.vue")
);

const ProfitGrowth = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoEight/ProfitGrowth.vue")
);

const TotalEarning = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoEight/TotalEarning.vue")
);

const SalesOverview = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoEight/SalesOverview.vue")
);

const PerformanceOverview = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoNine/PerfomanceOverview.vue")
);

const UserOverview = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoFive/UserOverview.vue")
);

export default defineComponent({
  name: "WidgetChart",
  components: {
    Main,
    CardChartStyle,
    TotalLineChart,
    SaleRevenue,
    MonthlyEarning,
    ProfitGrowth,
    TotalEarning,
    SalesOverview,
    PerformanceOverview,
    UserOverview,
  },
  setup() {
    return {
      chartOptions,
    };
  },
});
</script>
