<template>
  <div>
    <sdPageHeader
      title="Demo Eight"
      class="ninjadash-page-header-main"
      :routes="pageRoutes"
    ></sdPageHeader>
    <Main>
      <Suspense>
        <template #fallback>
          <sdCards headless>
            <a-skeleton active />
          </sdCards>
        </template>
        <template #default>
          <OverviewDataList />
        </template>
      </Suspense>
      <a-row justify="center" :gutter="25">
        <a-col :xs="24" :md="24" :xxl="16">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default>
              <MonthlyEarning />
            </template>
          </Suspense>
        </a-col>
        <a-col :xs="24" :md="12" :xxl="8">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default>
              <ProfitGrowth />
            </template>
          </Suspense>
        </a-col>
        <!-- </a-row>
      <a-row :gutter="25"> -->
        <a-col :xs="24" :md="12" :xxl="8">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default>
              <TotalEarning />
            </template>
          </Suspense>
        </a-col>
        <a-col :xs="24" :md="24" :xxl="16">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default>
              <ActiveUser />
            </template>
          </Suspense>
        </a-col>
        <a-col :xs="24" :md="24" :xxl="8">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default>
              <SalesOverview />
            </template>
          </Suspense>
        </a-col>
        <a-col :xs="24" :md="24" :xxl="8">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default>
              <TopProduct />
            </template>
          </Suspense>
        </a-col>
        <a-col :xs="24" :md="24" :xxl="8">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default>
              <RecentDeals />
            </template>
          </Suspense>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import cardData from "../../demoData/overviewCard.json";
import { defineComponent, defineAsyncComponent } from "vue";

const OverviewDataList = defineAsyncComponent(() =>
  import("./overview/demoEight/OverviewDataList.vue")
);
const MonthlyEarning = defineAsyncComponent(() =>
  import("./overview/demoEight/MonthlyEarning.vue")
);
const ProfitGrowth = defineAsyncComponent(() =>
  import("./overview/demoEight/ProfitGrowth.vue")
);
const TotalEarning = defineAsyncComponent(() =>
  import("./overview/demoEight/TotalEarning.vue")
);
const ActiveUser = defineAsyncComponent(() =>
  import("./overview/demoEight/ActiveUser.vue")
);
const SalesOverview = defineAsyncComponent(() =>
  import("./overview/demoEight/SalesOverview.vue")
);
const RecentDeals = defineAsyncComponent(() =>
  import("./overview/demoEight/RecentDeals.vue")
);
const TopProduct = defineAsyncComponent(() =>
  import("./overview/demoEight/TopProduct.vue")
);

const pageRoutes = [
  {
    path: "/",
    breadcrumbName: "Dashboard",
  },
  {
    path: "demo-eight",
    breadcrumbName: "Demo Eight",
  },
];

export default defineComponent({
  name: "DemoEight",
  components: {
    Main,
    OverviewDataList,
    MonthlyEarning,
    ProfitGrowth,
    TotalEarning,
    ActiveUser,
    SalesOverview,
    RecentDeals,
    TopProduct,
  },
  setup() {
    return { cardData, pageRoutes };
  },
});
</script>
