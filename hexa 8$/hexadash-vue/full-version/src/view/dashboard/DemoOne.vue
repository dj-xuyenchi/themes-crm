<template>
    <div>
      <sdPageHeader
        title="Demo One"
        class="ninjadash-page-header-main"
        :routes="pageRoutes"
      ></sdPageHeader>
      <Main>
        <a-row :gutter="25">
          <a-col :xxl="12"><OverviewDataList /></a-col>
          <a-col :xxl="12" :xl="12" :xs="24">
            <Suspense>
              <template #default>
                <SalesReport />
              </template>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="12" :xs="24">
            <Suspense>
              <template #default>
                <SalesGrowth />
              </template>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="16" :xs="24">
            <Suspense>
              <template #default>
                <SalesByLocation />
              </template>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="12" :xs="24">
            <Suspense>
              <template #default>
                <TopSellingProduct />
              </template>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="12" :xs="24">
            <Suspense>
              <template #default>
                <BrowsersState />
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
  import { defineComponent, defineAsyncComponent } from "vue";

  const OverviewDataList = defineAsyncComponent(() =>
    import("./overview/demoOne/OverviewDataList.vue")
  );
  const SalesReport = defineAsyncComponent(() =>
    import("./overview/demoOne/SalesReport.vue")
  );
  const SalesGrowth = defineAsyncComponent(() =>
    import("./overview/demoOne/SalesGrowth.vue")
  );
  const SalesByLocation = defineAsyncComponent(() =>
    import("./overview/demoOne/SalesByLocation.vue")
  );
  const TopSellingProduct = defineAsyncComponent(() =>
    import("./overview/demoOne/TopSellingProduct.vue")
  );
  const BrowsersState = defineAsyncComponent(() =>
    import("./overview/demoOne/BrowserState.vue")
  );

  const pageRoutes = [
    {
      path: "/",
      breadcrumbName: "Dashboard",
    },
    {
      path: "demo-one",
      breadcrumbName: "Demo-one",
    },
  ];

  export default defineComponent({
    name: "DemoOne",
    components: {
      Main,
      OverviewDataList,
      SalesReport,
      SalesGrowth,
      SalesByLocation,
      TopSellingProduct,
      BrowsersState,
    },
    setup() {
      return { cardData, pageRoutes };
    },
  });
  </script>
