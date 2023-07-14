<template>
  <div>
    <sdPageHeader
      title="Demo Three"
      class="ninjadash-page-header-main"
      :routes="pageRoutes"
    ></sdPageHeader>
    <Main>
      <a-row justify="center" :gutter="25">
        <a-col :xs="24" :md="24" :xxl="14">
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
        <a-col :xs="24" :md="24" :xxl="10">
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

        <a-col :xs="24" :md="24" :xxl="24">
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
        </a-col>

        <a-col :xs="24" :md="24" :xxl="8" class="h-100">
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
              <LatestTransection />
            </template>
          </Suspense>
        </a-col>

        <a-col :xs="24" :md="24" :xxl="24">
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
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import cardData from "../../demoData/overviewCard.json";
import { defineComponent, defineAsyncComponent } from "vue";

const OverviewDataList = defineAsyncComponent(() =>
  import("./overview/demoThree/OverviewDataList.vue")
);
const MonthlyEarning = defineAsyncComponent(() =>
  import("./overview/demoThree/MonthlyEarning.vue")
);
const ProfitGrowth = defineAsyncComponent(() =>
  import("./overview/demoThree/ProfitGrowth.vue")
);
const ActiveUser = defineAsyncComponent(() =>
  import("./overview/demoThree/ActiveUser.vue")
);
const SalesOverview = defineAsyncComponent(() =>
  import("./overview/demoThree/SalesOverview.vue")
);
const TopProduct = defineAsyncComponent(() =>
  import("./overview/demoThree/TopProduct.vue")
);
const LatestTransection = defineAsyncComponent(() =>
  import("./overview/demoThree/LatestTransection.vue")
);

const pageRoutes = [
  {
    path: "/",
    breadcrumbName: "Dashboard",
  },
  {
    path: "demo-three",
    breadcrumbName: "Demo Three",
  },
];

export default defineComponent({
  name: "DemoThree",
  components: {
    Main,
    OverviewDataList,
    MonthlyEarning,
    ProfitGrowth,
    ActiveUser,
    SalesOverview,
    TopProduct,
    LatestTransection
  },
  setup() {
    return { cardData, pageRoutes };
  },
});
</script>
