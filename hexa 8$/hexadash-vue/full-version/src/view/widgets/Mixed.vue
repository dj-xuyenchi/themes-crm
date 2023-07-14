<template>
  <div>
    <sdPageHeader title="Widgets Mixed" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <MixedCardWrap>
        <a-row :gutter="25">
          <a-col :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <overview-data-list /> </template>
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
          <a-col :lg="16" :md="24" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <sales-by-location /> </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
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
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <team-list /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <profile-card /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <timeline /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <knowledge-base /> </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <upcoming-events /> </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <inbox /> </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <Calender /> </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <locations /> </template>
            </Suspense>
          </a-col>
        </a-row>
      </MixedCardWrap>
    </Main>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import { Main } from "../styled";
import { MixedCardWrap } from "./Style";

const OverviewDataList = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoSix/OverviewDataList.vue")
);

const SalesOverview = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoSix/SalesOverview.vue")
);

const SalesByLocation = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoSix/SalesByLocation.vue")
);
const InfoCard = defineAsyncComponent(() =>
  import("@/components/cards/InfoCard.vue")
);
const Newsletter = defineAsyncComponent(() =>
  import("@/components/cards/Newsletter.vue")
);

const TeamList = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoNine/TeamList.vue")
);

const ProfileCard = defineAsyncComponent(() =>
  import("@/components/cards/ProfileCard.vue")
);

const KnowledgeBase = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoFive/KnowledgeBase.vue")
);

const Timeline = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoFive/Timeline.vue")
);

const UpcomingEvents = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoFive/UpcomingEvents.vue")
);

const Inbox = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoFive/Inbox.vue")
);

const Calender = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoFive/Calender.vue")
);

const Locations = defineAsyncComponent(() =>
  import("@/view/dashboard/overview/demoNine/Locations.vue")
);

export default defineComponent({
  name: "WidgetMixed",
  components: {
    Main,
    MixedCardWrap,
    OverviewDataList,
    SalesOverview,
    SalesByLocation,
    InfoCard,
    Newsletter,
    TeamList,
    ProfileCard,
    KnowledgeBase,
    Timeline,
    UpcomingEvents,
    Inbox,
    Calender,
    Locations,
  },
  setup() {
    return {};
  },
});
</script>
