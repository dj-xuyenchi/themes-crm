<script lang="ts">
import { icons } from 'feather-icons';
import { toRefs, watchEffect, ref, defineComponent } from 'vue';

const allIcons: any = icons;
export default defineComponent({
  name: 'FeatherIcons',
  props: {
    type: {
      type: String,
      default: 'activity',
    },
    size: {
      type: [Number, String],
      default: 16,
    },
    stroke: {
      type: [Number, String],
      default: 2,
    },
    classes: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    fill: {
      type: String,
      default: 'transparent',
    },
  },
  setup(props) {
    const { size, color, fill, type, stroke, classes }: any = toRefs(props);

    let activity = ref(
      allIcons[type.value].toSvg({
        'stroke-width': stroke.value,
        width: size.value,
        height: size.value,
        color: color.value,
        fill: fill.value,
        class: classes.value,
      }),
    );

    watchEffect(() => {
      activity.value = allIcons[type.value].toSvg({
        'stroke-width': stroke.value,
        width: size.value,
        height: size.value,
        color: color.value,
        fill: fill.value,
      });
    });

    return {
      activity,
    };
  },
});
</script>

<template>
  <i :class="classes" v-html="activity" style="line-height: 0"></i>
</template>

<style lang="scss" scoped></style>
