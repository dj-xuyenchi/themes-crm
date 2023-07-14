<template>
  <a-row>
    <a-col :xs="24" :md="24" :xxl="24">
      <OverviewDataStyleWrap class="card-mesh-wrap align-center-v">
        <OverviewCardMesh
          v-for="(item, i) in OverviewData"
          :data="item"
          :key="i"
        />
      </OverviewDataStyleWrap>
    </a-col>
  </a-row>
</template>
<script>
import OverviewCardMesh from "@/components/cards/OverviewCardMesh.vue";
import { OverviewDataStyleWrap } from "../../style";

import OverviewData from "@/demoData/overviewMeshData.json";
import { defineComponent } from "vue";

export default defineComponent({
  name: "OverviewDataList",
  components: { OverviewCardMesh, OverviewDataStyleWrap },
  setup() {
    return {
      OverviewData,
    };
  },
});
</script>
