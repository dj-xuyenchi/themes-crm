<script setup lang="ts">
import { toRefs } from 'vue';
import Styled from 'vue3-styled-components';

const CardWrapper = Styled.figure`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0;
  img {
    width: 100%;
  }
  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 25px;
    background: ${({ theme }) => theme['dark-color']}50;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      color: #fff;
      margin: 0px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
    }
    p {
      line-height: 25px;
      font-size: 13px;
    }
    .feedbackSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .author {
        color: #fff;
        img {
          width: 50px;
          border-radius: 50%;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')} : 10px;
        }
        span {
          font-weight: 500;
          font-size: 13px;
        }
      }
    }
  }
`;

const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      id: 1,
      title: 'How to Use Apples Products',
      content: 'Lorem Ipsum is simply dummy text of the printing ',
      img: 'assets/img/sampleCards/6.png',
      auth: '',
    }),
  },
});
const { item } = toRefs(props);
const { id, title, content, img, auth } = item.value;
</script>

<template>
  <CardWrapper>
    <img :src="`/src/${img}`" alt="" />
    <figcaption>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <div class="feedbackSection">
        <div class="author">
          <img :src="`/src/${auth}`" alt="" />
          <span>Burns Marks</span>
        </div>
      </div>
    </figcaption>
  </CardWrapper>
</template>
