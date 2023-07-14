<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Statistic"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic" caption="The simplest use of Statistic">
            <a-row :gutter="16">
              <a-col :span="12">
                <a-statistic title="Active Users" :value="112893" />
              </a-col>
              <a-col :span="12">
                <div class="ninjadash-ac-balance">
                  <a-statistic title="Account Balance (CNY)" :value="112893" :precision="2" />
                  <sdButton class="ninjadash-rcharge-btn" size="lg" type="primary" raised> Recharge </sdButton>
                </div>
              </a-col>
            </a-row>
          </sdCards>
          <sdCards title="In Card" caption="The simplest use of Statistic">
            <a-row :gutter="15">
              <a-col :md="12">
                <a-statistic
                  title="Feedback"
                  :value="11.28"
                  :precision="2"
                  suffix="%"
                  :value-style="{ color: '#01B81A' }"
                  style="margin-right: 50px"
                >
                  <template #prefix>
                    <ArrowUpOutlined />
                  </template>
                </a-statistic>
              </a-col>
              <a-col :md="12">
                <a-statistic
                  title="Idle"
                  :value="9.3"
                  :precision="2"
                  suffix="%"
                  class="demo-class"
                  :value-style="{ color: '#FF0F0F' }"
                >
                  <template #prefix>
                    <ArrowDownOutlined />
                  </template>
                </a-statistic>
              </a-col>
            </a-row>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Unit" caption="The simplest use of Statistic">
            <a-row :gutter="16">
              <a-col :span="12">
                <a-statistic title="Feedback" :value="1128">
                  <template #suffix>
                    <LikeOutlined />
                  </template>
                </a-statistic>
              </a-col>
              <a-col :span="12">
                <a-statistic title="Unmerged" :value="93" class="demo-class">
                  <template #suffix>
                    <span> / 100</span>
                  </template>
                </a-statistic>
              </a-col>
            </a-row>
          </sdCards>
          <sdCards title="Countdown" caption="The simplest use of Statistic">
            <a-row :gutter="15">
              <a-col :md="12">
                <a-statistic-countdown
                  title="Countdown"
                  :value="deadline"
                  :style="{ [rtl ? 'marginLeft' : 'marginRight']: 50 }"
                  @finish="onFinish"
                />
              </a-col>
              <a-col :md="12">
                <a-statistic-countdown
                  title="Million Seconds"
                  :value="deadline"
                  format="HH:mm:ss:SSS"
                  :style="{ [rtl ? 'marginLeft' : 'marginRight']: 50 }"
                />
              </a-col>
            </a-row>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { LikeOutlined, ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const onFinish = () => {
  console.log('finished!');
};
const { state } = useStore();
const rtl = computed(() => state.themeLayout.rtlData);
</script>
