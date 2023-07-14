<template>
  <InlineSvg :src="src" />
</template>
<script>
import { ref, defineComponent } from 'vue';
//import Img from './test.vue';
import InlineSvg from 'vue-inline-svg';
export default defineComponent({
  name: 'SvgConverter',
  props: ['src'],
  components: { InlineSvg },
  setup() {
    // const { src } = toRefs(props);
    let activity = ref(0);
    //console.log(Img);
    return { activity };
  },
});
</script>
