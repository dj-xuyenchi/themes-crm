<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Tabs">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <Tabs :data="data"></Tabs>
        </a-col>
        <a-col :md="12" :xs="24">
          <Tabs :data="data" color="default"></Tabs>
        </a-col>
      </a-row>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <Tabs :data="dataIcon" :color="themeColor['primary-color']"></Tabs>
        </a-col>
        <a-col :md="12" :xs="24">
          <Tabs :data="icon" :color="themeColor['primary-color']"></Tabs>
        </a-col>
      </a-row>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <Tabs
            :data="dataIcon"
            :color="!darkMode ? '#ffffff' : '#1B1E2B'"
          ></Tabs>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import Tabs from "../../components/tabs/Tabs";
import { themeColor } from "../../config/theme/themeVariables";
import tabData from "../../demoData/tab-data.json";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

const { data, dataIcon, icon } = tabData;

export default defineComponent({
  name: "Tab",
  components: {
    Main,
    Tabs,
  },
  setup() {
    const { state } = useStore();
    const darkMode = computed(() => state.themeLayout.data);
    return { data, dataIcon, icon, themeColor, darkMode };
  },
});
</script>
