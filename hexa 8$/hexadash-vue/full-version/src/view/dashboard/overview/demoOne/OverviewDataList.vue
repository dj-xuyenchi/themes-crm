<template>
  <a-row :gutter="25">
    <a-col
      v-for="(item, i) in OverviewDataSorted"
      :lg="12"
      :md="12"
      :sm="12"
      :xs="24"
      :key="i"
    >
      <Suspense>
        <template #default>
          <OverviewCard :ocData="item" />
        </template>
        <template #fallback>
          <sdCards headless>
            <a-skeleton active />
          </sdCards>
        </template>
      </Suspense>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent } from "vue";
import OverviewCard from "../../../../components/cards/OverviewCard.vue";
//import { OverviewDataStyleWrap } from "../../style";
import OverviewData from "../../../../demoData/overviewCard.json";

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
