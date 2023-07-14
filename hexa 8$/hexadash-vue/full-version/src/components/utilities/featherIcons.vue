<template>
  <i :class="classes" v-html="activity" style="line-height: 0"></i>
</template>

<script>
import { icons } from 'feather-icons';
import VueTypes from 'vue-types';
import { toRefs, watchEffect, ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'FeatherIcons',
  props: {
    type: VueTypes.string.def('activity'),
    size: VueTypes.oneOfType([VueTypes.number, VueTypes.string]).def(16),
    stroke: VueTypes.oneOfType([VueTypes.number, VueTypes.string]).def(2),
    classes: VueTypes.string,
    color: VueTypes.string,
    fill: VueTypes.string.def('transparent'),
  },
  setup(props) {
    const { size, color, fill, type, stroke, classes } = toRefs(props);

    let activity = ref(
      icons[type.value].toSvg({
        'stroke-width': stroke.value,
        width: size.value,
        height: size.value,
        color: color.value,
        fill: fill.value,
        class: classes.value,
      }),
    );

    watchEffect(() => {
      activity.value = icons[type.value].toSvg({
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

<style lang="scss" scoped></style>
