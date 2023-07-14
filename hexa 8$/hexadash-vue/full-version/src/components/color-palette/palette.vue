<template>
  <ColorPalette
    :isgrad="gradient"
    :direction="direction"
    :isbg="bg"
    :iscontent="content"
    :isbordered="bordered"
    :type="colorCode"
  >
    <span><slot></slot></span>
    <span v-if="content">{{ !gradient ? colorCode : colorCode[1] }}</span>
  </ColorPalette>
  <span
    style="display: block; text-align: center; margin-top: 5px"
    v-if="!content"
    >{{ colorCode }}</span
  >
</template>

<script>
import { ColorPalette } from "./style";
import VueTypes from "vue-types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Palette",
  components: {
    ColorPalette,
  },
  props: {
    colorCode: VueTypes.oneOfType([VueTypes.string, VueTypes.array]),
    bordered: VueTypes.bool.def(false),
    content: VueTypes.bool.def(false),
    bg: VueTypes.bool.def(false),
    gradient: VueTypes.bool.def(false),
    direction: VueTypes.string,
    children: VueTypes.oneOfType([
      VueTypes.object,
      VueTypes.string,
      VueTypes.node,
    ]),
  },
});
</script>
