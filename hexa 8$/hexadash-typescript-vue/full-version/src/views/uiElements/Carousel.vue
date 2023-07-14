<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Carousel"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12">
          <sdCards title="Basic">
            <CarouselStyleWraper>
              <a-carousel :after-change="onChange">
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </a-carousel>
            </CarouselStyleWraper>
          </sdCards>
          <sdCards title="Scroll automatically">
            <CarouselStyleWraper>
              <a-carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </a-carousel>
            </CarouselStyleWraper>
          </sdCards>
        </a-col>
        <a-col :md="12">
          <sdCards title="Position">
            <CarouselStyleWraper>
              <div>
                <a-radio-group v-model:value="dotPosition" style="margin-bottom: 8px">
                  <a-radio-button value="top">Top</a-radio-button>
                  <a-radio-button value="bottom">Bottom</a-radio-button>
                  <a-radio-button value="left">Left</a-radio-button>
                  <a-radio-button value="right">Right</a-radio-button>
                </a-radio-group>
                <a-carousel :dot-position="dotPosition">
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                </a-carousel>
              </div>
            </CarouselStyleWraper>
          </sdCards>
          <sdCards title="Fade in">
            <CarouselStyleWraper>
              <a-carousel effect="fade">
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </a-carousel>
            </CarouselStyleWraper>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Main } from '../styled';
import { CarouselStyleWraper } from './ui-elements-styled';

const dotPosition = ref('top');
const onChange = (a: any, b: any, c: any) => {
  console.log(a, b, c);
};
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
