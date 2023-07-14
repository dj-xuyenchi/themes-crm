<template>
  <InfoCardStyle :type="type">
    <span class="ninjadash-infocard-icon">
      <unicon :name="icon"></unicon>
    </span>
    <p class="ninjadash-infocard-text">{{ text }}</p>
    <h2 class="ninjadash-infocard-label">{{ counter }}</h2>
  </InfoCardStyle>
</template>
<script>
import { defineComponent } from "vue";
import propTypes from "vue-types";
import { InfoCardStyle } from "./style";
export default defineComponent({
  components: { InfoCardStyle },
  props: {
    counter: propTypes.string.def("21k"),
    text: propTypes.string.def("Total Products"),
    icon: propTypes.string.def("briefcase"),
    type: propTypes.oneOf(["primary", "secondary"]).def("primary"),
  },
  setup() {},
});
</script>
