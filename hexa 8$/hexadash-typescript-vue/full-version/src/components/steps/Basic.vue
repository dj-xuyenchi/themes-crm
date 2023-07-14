<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { StepsStyle, ActionWrapper } from './style';

const props = defineProps({
  step: {
    type: String,
    validator: (value) => ['basic', 'withIcon', 'switch', 'direction'].includes(value as string),
    default: 'basic',
  },
  sizes: {
    type: String,
    validator: (value) => ['small', 'bar', 'default'].includes(value as string),
    default: 'small',
  },
  direction: {
    type: String,
    validator: (value) => ['bar', 'horizontal', 'vertical'].includes(value as string),
  },
  status: {
    type: String,
    validator: (value) => ['wait', 'process', 'finish', 'error'].includes(value as string),
  },
  current: {
    type: Number,
    default: 1,
  },
  titles: String,
  data: Object,
});

const current1 = ref(0);
const next = () => {
  current1.value++;
};
const prev = () => {
  current1.value--;
};
</script>

<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
.steps-action {
  margin-top: 24px;
}
</style>

<template>
  <StepsStyle :current="current" :sizes?="sizes" v-if="step == 'basic'" :status?="status">
    <a-step v-for="title in titles" :titles="title" :key="title" />
  </StepsStyle>
  <StepsStyle :status?="status" :direction?="direction" :current="current" :sizes?="sizes" v-if="step == 'direction'">
    <a-step v-for="item in data" :titles="item.title" :description="item.description" :key="item.id" />
  </StepsStyle>
  <StepsStyle :sizes?="sizes" v-if="step == 'withIcon'">
    <a-step v-for="item in data" :titles="item.title" :key="item.id" status="item.status">
      <template #icon>
        <unicon :name="item.icon" width="24"></unicon>
      </template>
    </a-step>
  </StepsStyle>
  <ActionWrapper v-if="step == 'switch'">
    <a-row>
      <a-col :xs="24">
        <a-steps :current="current1">
          <a-step v-for="item in data" :key="item.title" :titles="item.title" />
        </a-steps>
        <div class="steps-content">
          {{ data?.[current1].content }}
        </div>
        <div class="steps-action">
          <a-button v-if="current1 < data?.length - 1" class="btn-next" type="primary" @click="next">
            Save & Next <unicon name="arrow-right" width="14"></unicon>
          </a-button>
          <a-button v-if="current1 == data?.length - 1" type="primary" @click="message.success('Processing complete!')">
            Done
          </a-button>
          <a-button class="btn-prev" v-if="current1 > 0" @click="prev">
            <unicon name="arrow-left" width="14"></unicon>
            Previous
          </a-button>
        </div>
      </a-col>
    </a-row>
  </ActionWrapper>
</template>
