<script setup lang="ts">
import { toRefs } from 'vue';
import Styled from 'vue3-styled-components';

const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      id: 1,
      title: '47',
      content: 'Total tasks',
      img: 'assets/img/icon/1.svg',
      className: 'primary',
    }),
  },
});

const { item } = toRefs(props);
const { id, title, content, img, className } = item.value;

const CardWrapper = Styled.figure`
  display: flex;
  margin: 0;
  position: relative;
  h2,
  p {
    margin: 0;
  }
  figcaption {
    .more {
      position: absolute;
      top: 0px;
      ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
      a {
				svg{
        	color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
				}
      }
    }
    h2 {
      font-size: 20px;
      font-weight: 600;
			color: ${({ theme }) => theme[theme.mainContent]['dark-text']}
    }
    p {
      font-size: 14px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
`;
const Icon = Styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme[theme.mainContent]['primary-color']};
  ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
`;
/* background: ${({ theme, className }) => theme[`${className}-color`]}; */
</script>

<template>
  <sdCards headless>
    <CardWrapper>
      <Icon :className="className">
        <img :src="`/src/${img}`" alt="" />
      </Icon>
      <figcaption>
        <div class="more">
          <sdDropdown :action="['click']" class="wide-dropdwon">
            <template #overlay>
              <router-link to="#">Edit</router-link>
              <router-link to="#">Delete</router-link>
              <router-link to="#">View</router-link>
            </template>
            <router-link to="#">
              <unicon name="ellipsis-h" width="18"></unicon>
            </router-link>
          </sdDropdown>
        </div>
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </figcaption>
    </CardWrapper>
  </sdCards>
</template>
