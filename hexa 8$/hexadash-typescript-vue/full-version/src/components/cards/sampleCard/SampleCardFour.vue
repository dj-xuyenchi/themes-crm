<script setup lang="ts">
import { toRefs } from 'vue';
import Styled from 'vue3-styled-components';

const CardWrapper = Styled.figure`
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0;
  img {
    width: 100%;
  }
  figcaption {
    padding: 25px;
    h4 {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
      }
    }
    h2 {
      margin: 6px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
			color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    p {
      line-height: 1.79;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    button {
      background: ${({ theme }) => theme['primary-color']}15;
      color: ${({ theme }) => theme['primary-color']};
    }
    .feedbackSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      .author {
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        img {
          width: 50px;
          border-radius: 50%;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')} : 10px;
        }
        span {
          font-size: 14px;
          font-weight: 500;
        }
      }
      .feedback {
        span {
          font-size: 13px;
          ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')} : 10px;
          color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
          display: inline-flex;
          align-items: center;
          svg {
            margin: 0 5px;
            cursor: pointer;
            fill: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
          }
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
      content:
        'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
      img: 'assets/img/sampleCards/6.png',
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
      <h4>
        <span>Web Development</span>
        <span>01 July 2021 </span>
      </h4>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <div class="feedbackSection">
        <div class="author">
          <img :src="'/src/assets/img/chat-author/t1.jpg'" alt="" />
          <span>Burns Marks</span>
        </div>
        <div class="feedback">
          <span class="like">
            <unicon name="heart" width="14"></unicon>
            70
          </span>
          <span class="view">
            <unicon name="eye" width="14"></unicon>
            120
          </span>
        </div>
      </div>
    </figcaption>
  </CardWrapper>
</template>
