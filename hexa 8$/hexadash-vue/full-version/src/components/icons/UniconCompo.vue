<template>
  <a-row :gutter="15">
    <a-col
      v-for="(icon, key) in Object.values(unicons)"
      :xl="6"
      :md="12"
      :xs="24"
      :key="key + 1"
    >
      <Icon
        v-if="
          icon.name !== 'blackberry' &&
          icon.name !== 'css3' &&
          icon.name !== 'gitlab-alt' &&
          icon.name !== 'squre-shape' &&
          icon.name !== 'right-indent' &&
          icon.name !== 'covid-19'
        "
        class="icon-single"
      >
        <unicon :name="icon.name" :width="14"></unicon>
        <span> {{ icon.name }}</span>
      </Icon>
    </a-col>
  </a-row>
</template>
<script>
import * as unicons from "vue-unicons/dist/icons";
import { Icon } from "./IconStyled";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UniconCompo",
  components: {
    Icon,
  },
  data() {
    return {
      unicons,
    };
  },
});
</script>
