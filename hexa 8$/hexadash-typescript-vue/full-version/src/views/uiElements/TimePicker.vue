<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Time Picker"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic">
            <a-time-picker v-model:value="strValue" valueFormat="HH:mm:ss" />
          </sdCards>
          <sdCards title="Interval option">
            <a-time-picker v-model:value="value" :minute-step="15" :second-step="10" />
          </sdCards>
          <sdCards title="Three Size">
            <div class="timepicker-list">
              <a-time-picker v-model:value="value1" size="large" :style="{ marginBottom: '10px' }" />
              <br />
              <a-time-picker v-model:value="value2" :style="{ marginBottom: '10px' }" />
              <br />
              <a-time-picker v-model:value="value3" size="small" />
            </div>
          </sdCards>
          <sdCards title="Addon">
            <a-time-picker
              v-model:value="value"
              v-model:open="open"
              @openChange="handleOpenChange"
              :style="{ marginBottom: '10px' }"
            >
              <template #renderExtraFooter="{ prefixCls }">
                <a-button size="small" type="primary" @click="handleClose">Ok {{ prefixCls }}</a-button>
              </template>
            </a-time-picker>
            <br />
            <a-time-picker v-model:value="value" v-model:open="open2">
              <template #renderExtraFooter>
                <a-button size="small" type="primary" @click="handleClose">Ok</a-button>
              </template>
            </a-time-picker>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Disebled">
            <a-time-picker :value="dayjs('12:08:23', 'HH:mm:ss')" disabled />
          </sdCards>
          <sdCards title="12 hours">
            <a-time-picker v-model:value="value4" use12-hours :style="{ marginBottom: '10px' }" />
            <br />
            <a-time-picker
              v-model:value="value4"
              use12-hours
              format="h:mm:ss A"
              :style="{ marginBottom: '10px' }"
            /><br />
            <a-time-picker v-model:value="value4" use12-hours format="h:mm a" />
          </sdCards>
          <sdCards title="Hours and minute"> <a-time-picker :value="dayjs('12:08', 'HH:mm')" format="h:mm " /></sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { ref, watch } from 'vue';
import { Main } from '../styled';

let value = ref();
const strValue = ref('09:00:00');
const open = ref(false);
const open2 = ref(false);
watch(strValue, () => {
  //console.log(strValue.value);
});

const handleOpenChange = (openStatus: any) => {
  //console.log('open', openStatus);
  open.value = openStatus;
};

const handleClose = () => {
  open.value = false;
  open2.value = false;
};
let value4 = ref(undefined);
let value1 = ref(dayjs('12:08:23', 'HH:mm'));
let value2 = ref(dayjs('12:08:23', 'HH:mm'));
let value3 = ref(dayjs('12:08:23', 'HH:mm'));
</script>
