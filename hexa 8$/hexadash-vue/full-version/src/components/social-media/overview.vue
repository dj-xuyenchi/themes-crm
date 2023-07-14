<template>
  <MainWraper>
    <SocialIcon :bgColor="bgColor">
      <font-awesome-icon
        class="super-crazy-colors"
        :icon="icon"
        size="2x"
        :style="{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }"
      />
    </SocialIcon>
    <sdHeading as="h1">{{ title }}</sdHeading>
    <p>{{ subTitle }}</p>
  </MainWraper>
</template>

<script>
import { MainWraper, SocialIcon } from './overview-style';
import VueTypes from 'vue-types';
import { defineComponent } from 'vue';

const SocialMediaContent = defineComponent({
  name: 'SocialMediaContent',
  props: {
    icon: VueTypes.object,
    bgColor: VueTypes.string.isRequired,
    title: VueTypes.string.isRequired,
    subTitle: VueTypes.string.isRequired,
  },
  components: {
    MainWraper,
    SocialIcon,
  },
});

export default SocialMediaContent;
</script>
