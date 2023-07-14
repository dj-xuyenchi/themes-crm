<template>
  <p v-if="isLoading">Loading</p>
  <Content
    v-else
    :email="
      email.filter((value) => {
        return value.type === 'trash';
      })
    "
    :searchData="searchData"
  />
</template>
<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Content from "./Content.vue";

const Trash = defineComponent({
  name: "Trash",
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

export default Trash;
</script>
