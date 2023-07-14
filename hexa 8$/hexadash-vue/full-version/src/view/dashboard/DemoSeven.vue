<template>
  <div>
    <sdPageHeader
      title="Demo Seven"
      class="ninjadash-page-header-main"
      :routes="pageRoutes"
    ></sdPageHeader>
    <Main>
      <a-row justify="center" :gutter="25">
        <a-col :xxl="24" :md="24">
          <OverviewDataList />
        </a-col>
        <a-col :xxl="12" :md="24" :xs="24">
          <Suspense>
            <template #default>
              <SaleRevenue />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="12" :md="24" :xs="24">
          <Suspense>
            <template #default>
              <RevenueGenerated />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="8" :md="24" :xs="24">
          <Suspense>
            <template #default>
              <NewProducts />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="16" :md="24" :xs="24">
          <Suspense>
            <template #default>
              <BestSeller />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
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
import { defineComponent, defineAsyncComponent } from "@vue/runtime-core";

const OverviewDataList = defineAsyncComponent(() =>
  import("./overview/demoSeven/OverviewDataList.vue")
);
const SaleRevenue = defineAsyncComponent(() =>
  import("./overview/demoSeven/SaleRevenue.vue")
);
const RevenueGenerated = defineAsyncComponent(() =>
  import("./overview/demoSeven/RevenueGenerated.vue")
);
const NewProducts = defineAsyncComponent(() =>
  import("./overview/demoSeven/NewProduct.vue")
);
const BestSeller = defineAsyncComponent(() =>
  import("./overview/demoSeven/BestSeller.vue")
);

const pageRoutes = [
  {
    path: "/",
    breadcrumbName: "Dashboard",
  },
  {
    path: "demo-seven",
    breadcrumbName: "Demo Seven",
  },
];

export default defineComponent({
  name: "DemoSeven",
  components: {
    Main,
    OverviewDataList,
    SaleRevenue,
    RevenueGenerated,
    NewProducts,
    BestSeller,
  },
  setup() {
    return { cardData, pageRoutes };
  },
});
</script>
