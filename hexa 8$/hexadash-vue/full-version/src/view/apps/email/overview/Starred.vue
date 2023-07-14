<template>
  <p v-if="isLoading">Loading</p>
  <Content
    v-else
    :email="
      email.filter((value) => {
        return value.stared;
      })
    "
    :searchData="searchData"
  />
</template>
<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Content from "./Content.vue";

const Starred = defineComponent({
  name: "Starred",
  components: { Content },
  setup() {
    const { state } = useStore();
    const email = computed(() => state.email.allMessage);
    const searchData = computed(() => state.headerSearchData.data);
    const isLoading = computed(() => state.email.sLoading);

    return {
      email,
      searchData,
      isLoading,
    };
  },
});

export default Starred;
</script>
