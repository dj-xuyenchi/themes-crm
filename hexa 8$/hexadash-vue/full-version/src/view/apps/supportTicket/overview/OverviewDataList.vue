<template>
  <a-col
    v-for="(item, i) in OverviewDataSorted"
    :xxl="6"
    :md="12"
    :xs="24"
    :key="i"
  >
    <Suspense>
      <template #default>
        <OverviewCard
          :ocData="item"
          :bottomStatus="false"
          class="ninjadash-overview-card-support"
        />
      </template>
      <template #fallback>
        <sdCards headless>
          <a-skeleton active />
        </sdCards>
      </template>
    </Suspense>
  </a-col>
</template>

<script>
import { defineComponent } from "vue";
import OverviewCard from "../../../../components/cards/OverviewCard.vue";
//import { OverviewDataStyleWrap } from "../../style";
import OverviewData from "../../../../demoData/supportOverview.json";

const OverviewDataList = defineComponent({
  name: "OverviewDataList",
  components: {
    OverviewCard,
    //OverviewDataStyleWrap,
  },
  setup() {
    const OverviewDataSorted = OverviewData.slice(0, 4);
    return {
      OverviewDataSorted,
    };
  },
});
export default OverviewDataList;
</script>
