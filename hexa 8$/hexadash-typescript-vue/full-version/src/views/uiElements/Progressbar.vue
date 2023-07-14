<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Progress Bar"> </sdPageHeader>

    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <ProgressBarStyle>
              <a-progress :percent="30" :style="{ marginBottom: '15px' }" />
              <a-progress :percent="50" status="active" :style="{ marginBottom: '15px' }" />
              <a-progress :percent="70" status="exception" :style="{ marginBottom: '15px' }" />
              <a-progress :percent="100" :style="{ marginBottom: '15px' }" />
              <a-progress :percent="50" :show-info="false" :style="{ marginBottom: '15px' }" />
            </ProgressBarStyle>
          </sdCards>

          <sdCards title="Mini size Circular progress bar">
            <ProgressBarStyle>
              <a-progress
                type="circle"
                :percent="75"
                :width="80"
                :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }"
              />
              <a-progress
                :width="80"
                :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }"
                type="circle"
                :percent="70"
                status="exception"
              />
              <a-progress
                :width="80"
                :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }"
                type="circle"
                :percent="100"
              />
            </ProgressBarStyle>
          </sdCards>
          <sdCards title="Dashboard">
            <ProgressBarStyle>
              <a-progress type="dashboard" :percent="75" />
            </ProgressBarStyle>
          </sdCards>
          <sdCards title="Square linecaps">
            <ProgressBarStyle>
              <a-progress stroke-linecap="square" :percent="75" :style="{ marginBottom: '15px' }" />
              <a-progress
                stroke-linecap="square"
                :percent="75"
                type="circle"
                :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }"
              />
              <a-progress
                stroke-linecap="square"
                :percent="75"
                type="dashboard"
                :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }"
              />
            </ProgressBarStyle>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Progress bar with success segment">
            <ProgressBarStyle>
              <a-progress
                :stroke-color="{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }"
                :percent="99.9"
                :style="{ marginBottom: '15px' }"
              />
              <a-progress
                :stroke-color="{
                  from: '#108ee9',
                  to: '#87d068',
                }"
                :percent="99.9"
                status="active"
                :style="{ marginBottom: '15px' }"
              />
              <a-progress
                :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }"
                type="circle"
                :stroke-color="{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }"
                :percent="90"
              />
              <a-progress
                :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }"
                type="circle"
                :stroke-color="{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }"
                :percent="100"
              />
            </ProgressBarStyle>
          </sdCards>
          <sdCards title="Dynamic circle">
            <ProgressBarStyle>
              <a-progress type="circle" :percent="percent" />
              <div class="progressbar-action-btn">
                <a-button-group>
                  <a-button @click="decline"><MinusOutlined /></a-button>
                  <a-button @click="increase"><PlusOutlined /></a-button>
                </a-button-group>
              </div>
            </ProgressBarStyle>
          </sdCards>
          <sdCards title="Circular progress bar">
            <ProgressBarStyle>
              <a-progress :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }" type="circle" :percent="75" />
              <a-progress
                :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }"
                type="circle"
                :percent="70"
                status="exception"
              />
              <a-progress :style="{ [!rtl ? 'marginRight' : 'marginLeft']: '15px' }" type="circle" :percent="100" />
            </ProgressBarStyle>
          </sdCards>
          <sdCards title="Mini size progress bar">
            <ProgressBarStyle>
              <a-progress :percent="30" size="small" :style="{ marginBottom: '15px' }" />
              <a-progress :percent="50" size="small" status="active" :style="{ marginBottom: '15px' }" />
              <a-progress :percent="70" size="small" status="exception" :style="{ marginBottom: '15px' }" />
            </ProgressBarStyle>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { ProgressBarStyle } from './ui-elements-styled';
import { mapState } from 'vuex';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons-vue';

let percent = 10;

const increase = () => {
  let percents = percent + 10;
  if (percents > 100) {
    percents = 100;
  }
  percent = percents;
};
const decline = () => {
  let percents = percent - 10;
  if (percents < 0) {
    percents = 0;
  }
  percent = percents;
};

const rtl = mapState(['rtl']);
</script>

<style scoped>
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
