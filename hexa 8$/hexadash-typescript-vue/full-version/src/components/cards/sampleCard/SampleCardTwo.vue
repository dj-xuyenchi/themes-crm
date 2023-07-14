<script setup lang="ts">
import { toRefs } from 'vue';
import Styled from 'vue3-styled-components';
const CardWrapper = Styled.figure`
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 0;
  figcaption {
    h2 {
      margin: 18px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
			color: ${({ theme }) => theme[theme.mainContent]['dark-text']}
    }
    p {
      line-height: 1.79;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    a {
      color: ${({ theme }) => theme['primary-color']};
      font-size: 15px;
      font-weight: 600;
    }
  }
`;

const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      id: 1,
      title: 'Technology Change the World',
      content: 'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
      img: 'assets/img/sampleCards/1.png',
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
      <router-link to="#">Learn More</router-link>
    </figcaption>
  </CardWrapper>
</template>
