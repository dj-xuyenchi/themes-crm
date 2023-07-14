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
            <Banner8 />
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
          <a-col :xxl="8" :md="12" :xs="24">
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
          <a-col :xxl="16" :md="12" :xs="24">
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
          <a-col :xxl="8" :md="12" :xs="24">
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
          <a-col :xxl="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default>
                <Todo />
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :md="12" :xs="24">
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
          <a-col :xxl="8" :md="12" :xs="24">
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
          <a-col :xxl="8" :md="24" :xs="24">
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
          <a-col :xxl="16" :md="24" :xs="24">
            <a-row :gutter="25">
              <a-col :xl="12" :lg="24" :xs="24">
                <Suspense>
                  <template #fallback>
                    <sdCards headless>
                      <a-skeleton active />
                    </sdCards>
                  </template>
                  <template #default>
                    <TrafficChannel />
                  </template>
                </Suspense>
              </a-col>
              <a-col :xl="12" :lg="24" :xs="24">
                <Suspense>
                  <template #fallback>
                    <sdCards headless>
                      <a-skeleton active />
                    </sdCards>
                  </template>
                  <template #default>
                    <Locations />
                  </template>
                </Suspense>
              </a-col>
              <a-col :xl="24" :lg="24" :xs="24">
                <Suspense>
                  <template #fallback>
                    <sdCards headless>
                      <a-skeleton active />
                    </sdCards>
                  </template>
                  <template #default>
                    <RecentSeller />
                  </template>
                </Suspense>
              </a-col>
            </a-row>
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
import { Banner8 } from "@/components/banners/Banners";

const PerformanceOverview = defineAsyncComponent(() =>
  import("./overview/demoNine/PerfomanceOverview.vue")
);
const Tasks = defineAsyncComponent(() =>
  import("./overview/demoNine/Tasks.vue")
);
const MarketingCampaigns = defineAsyncComponent(() =>
  import("./overview/demoNine/MarketingCampaigns.vue")
);
const Todo = defineAsyncComponent(() => import("./overview/demoNine/Todo.vue"));
const TeamList = defineAsyncComponent(() =>
  import("./overview/demoNine/TeamList.vue")
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
const TrafficChannel = defineAsyncComponent(() =>
  import("./overview/demoNine/TrafficChannel.vue")
);
const Locations = defineAsyncComponent(() =>
  import("./overview/demoNine/Locations.vue")
);
const RecentSeller = defineAsyncComponent(() =>
  import("./overview/demoNine/RecentSeller.vue")
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
    Banner8,
    PerformanceOverview,
    InfoCard,
    Newsletter,
    Tasks,
    MarketingCampaigns,
    Todo,
    TeamList,
    ProfileCard,
    SingleChat,
    TrafficChannel,
    Locations,
    RecentSeller,
  },
  setup() {
    return {
      pageRoutes,
    };
  },
});
</script>
