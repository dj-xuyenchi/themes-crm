<script setup lang="ts">
import { toRefs } from 'vue';
import Styled from 'vue3-styled-components';
const CardWrapper = Styled.figure`
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  margin: 0;
  figcaption {
    h2 {
      margin: 24px 0 10px 0;
			color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    p {
      line-height: 1.79;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
`;

const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      id: 1,
      title: 'User Friendly',
      content: 'Lorem Ipsum is simply dummy text of the',
      img: 'assets/img/sampleCards/1.svg',
    }),
  },
});

const { item } = toRefs(props);
const { id, title, content, img } = item.value;
</script>

<template>
  <CardWrapper>
    <img :src="`/src/${img}`" alt="" />
    <figcaption>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </figcaption>
  </CardWrapper>
</template>
