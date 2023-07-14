<template>
    <div>
      <sdPageHeader
        title="Demo Two"
        class="ninjadash-page-header-main"
        :routes="pageRoutes"
      ></sdPageHeader>
      <Main>
        <a-row :gutter="25">
          <a-col :xxl="24"><OverviewDataList /></a-col>
          <a-col :xxl="12" :xl="12" :xs="24">
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
          <a-col :xxl="12" :xl="12" :xs="24">
            <Suspense>
              <template #default>
                <SourceRevenueGenerated />
              </template>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="24" :xs="24">
            <Suspense>
              <template #default>
                <NewProduct />
              </template>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="16" :xl="24" :xs="24">
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
  import { defineComponent, defineAsyncComponent } from "vue";

  const OverviewDataList = defineAsyncComponent(() =>
    import("./overview/demoTwo/OverviewDataList.vue")
  );
  const SaleRevenue = defineAsyncComponent(() =>
    import("./overview/demoTwo/SaleRevenue.vue")
  );
  const SourceRevenueGenerated = defineAsyncComponent(() =>
    import("./overview/demoTwo/SourceRevenueGenerated.vue")
  );
  const BestSeller = defineAsyncComponent(() =>
    import("./overview/demoTwo/BestSeller.vue")
  );
  const NewProduct = defineAsyncComponent(() =>
    import("./overview/demoTwo/NewProduct.vue")
  );

  const pageRoutes = [
    {
      path: "/",
      breadcrumbName: "Dashboard",
    },
    {
      path: "demo-two",
      breadcrumbName: "Demo Two",
    },
  ];

  export default defineComponent({
    name: "DemoTwo",
    components: {
      Main,
      OverviewDataList,
      SaleRevenue,
      SourceRevenueGenerated,
      BestSeller,
      NewProduct
    },
    setup() {
      return { cardData, pageRoutes };
    },
  });
  </script>
