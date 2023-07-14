<template>
  <TabBasic
    v-model:activeKey="activeKey"
    :color="color && color"
    :tabPosition="tabPosition !== undefined ? tabPosition : 'top'"
  >
    <Child
      v-for="(item, index) in data"
      :key="index + 1"
      :color="color && color"
    >
      <template #tab>
        <span v-if="item.icon && item.icon !== 'undefined'">
          <unicon :name="item.icon" width="18"></unicon>
          <span>{{ item.tabTitle }}</span>
        </span>
        <span v-if="!item.icon">
          {{ item.tabTitle }}
        </span>
      </template>
      <h2>{{ item.title }}</h2>
      <p>{{ item.content }}</p>
    </Child>
  </TabBasic>
</template>

<script>
import { ref, defineComponent } from "vue";
import VueTypes from "vue-types";
import { TabBasic, Child } from "./Style";
export default defineComponent({
  name: "Tab",
  components: { TabBasic, Child },
  props: {
    color: VueTypes.string,
    tabPosition: VueTypes.oneOf(["top", "right", "bottom", "left"]).def("top"),
    data: VueTypes.arrayOf(VueTypes.object),
  },
  setup() {
    return {
      activeKey: ref(1),
    };
  },
});
</script>
