<template>
  <div>
    <sdPageHeader
      title="Demo Nine"
      class="ninjadash-page-header-main"
      :routes="pageRoutes"
    ></sdPageHeader>
    <Main>
      <DemoFourStyle>
        <a-row justify="center" :gutter="25">
          <a-col :xxl="8" :md="12" :lg="12" :xs="24">
            <Banner9 />
          </a-col>
          <a-col :xxl="8" :md="12" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default>
                <PerformanceOverview />
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="24" :md="24" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default>
                <a-row :gutter="15">
                  <a-col :xs="12">
                    <InfoCard icon="briefcase-alt" />
                  </a-col>
                  <a-col :xs="12">
                    <InfoCard
                      text="Total Awards"
                      icon="award"
                      type="secondary"
                      counter="15k"
                    />
                  </a-col>
                  <a-col :xs="24">
                    <Newsletter />
                  </a-col>
                </a-row>
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="12" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default>
                <Tasks />
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="12" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default>
                <MarketingCampaigns />
              </template>
            </Suspense>
          </a-col>

          <a-col :xxl="16" :xl="24" :md="24" :xs="24">
            <a-row :gutter="25">
              <a-col :xxl="12" :md="12" :xs="24">
                <Suspense>
                  <template #fallback>
                    <sdCards headless>
                      <a-skeleton active />
                    </sdCards>
                  </template>
                  <template #default>
                    <ProfileCard />
                  </template>
                </Suspense>
              </a-col>
              <a-col :xxl="12" :md="12" :xs="24">
                <Suspense>
                  <template #fallback>
                    <sdCards headless>
                      <a-skeleton active />
                    </sdCards>
                  </template>
                  <template #default>
                    <TeamList />
                  </template>
                </Suspense>
              </a-col>
              <a-col :xxl="24" :md="24" :xs="24">
                <Suspense>
                  <template #fallback>
                    <sdCards headless>
                      <a-skeleton active />
                    </sdCards>
                  </template>
                  <template #default>
                    <SocialMediaTraffic />
                  </template>
                </Suspense>
              </a-col>
            </a-row>
          </a-col>
          <a-col :xxl="8" :xl="24" :md="24" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default>
                <single-chat dashboard />
              </template>
            </Suspense>
          </a-col>
        </a-row>
      </DemoFourStyle>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { defineComponent, defineAsyncComponent } from "vue";
import { DemoFourStyle } from "./style";
import { Banner9 } from "@/components/banners/Banners";

const PerformanceOverview = defineAsyncComponent(() =>
  import("./overview/demoFour/PerfomanceOverview.vue")
);
const Tasks = defineAsyncComponent(() =>
  import("./overview/demoNine/Tasks.vue")
);
const MarketingCampaigns = defineAsyncComponent(() =>
  import("./overview/demoNine/MarketingCampaigns.vue")
);
const TeamList = defineAsyncComponent(() =>
  import("./overview/demoFour/TeamList.vue")
);
const SocialMediaTraffic = defineAsyncComponent(() =>
  import("./overview/demoFour/SocialMediaTraffic.vue")
);
const InfoCard = defineAsyncComponent(() =>
  import("@/components/cards/InfoCard.vue")
);
const Newsletter = defineAsyncComponent(() =>
  import("@/components/cards/Newsletter.vue")
);
const ProfileCard = defineAsyncComponent(() =>
  import("@/components/cards/ProfileCard.vue")
);
const SingleChat = defineAsyncComponent(() =>
  import("@/view/apps/chat/overview/SingleChat.vue")
);

const pageRoutes = [
  {
    path: "/",
    breadcrumbName: "Dashboard",
  },
  {
    path: "demo-nine",
    breadcrumbName: "Demo Nine",
  },
];

export default defineComponent({
  name: "DemoNine",
  components: {
    Main,
    DemoFourStyle,
    Banner9,
    PerformanceOverview,
    InfoCard,
    Newsletter,
    Tasks,
    MarketingCampaigns,
    TeamList,
    SocialMediaTraffic,
    ProfileCard,
    SingleChat,
  },
  setup() {
    return {
      pageRoutes,
    };
  },
});
</script>
