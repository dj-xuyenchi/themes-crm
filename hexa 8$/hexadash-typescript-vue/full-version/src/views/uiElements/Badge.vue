<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Blank Page"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Basic">
            <BadgeWraperStyle>
              <a-badge count="5">
                <a to="#" class="head-example" />
              </a-badge>
              <a-badge count="0" showZero>
                <a to="#" class="head-example" />
              </a-badge>
              <a-badge>
                <template #count>
                  <unicon name="clock" style="fill: #f5222d"></unicon>
                </template>

                <a to="#" class="head-example" />
              </a-badge>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Overflow Count">
            <BadgeWraperStyle>
              <BadgeOverflowStyle>
                <a-badge count="99">
                  <a to="#" class="head-example" />
                </a-badge>
                <a-badge count="100">
                  <a to="#" class="head-example" />
                </a-badge>
                <a-badge count="99" :overflowCount="10">
                  <a to="#" class="head-example" />
                </a-badge>
                <a-badge count="1000" :overflowCount="999">
                  <a to="#" class="head-example" />
                </a-badge>
              </BadgeOverflowStyle>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Clickable">
            <BadgeWraperStyle>
              <a to="#">
                <a-badge :count="5">
                  <span class="head-example" />
                </a-badge>
              </a>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Status">
            <BadgeWraperStyle>
              <div :style="{ marginBottom: 10 }">
                <a-badge v-for="color in colors" :key="color" :color="color" />
              </div>
              <div>
                <div v-for="color in colors" :key="color">
                  <a-badge :color="color" :text="color" />
                </div>
              </div>
            </BadgeWraperStyle>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Standalone">
            <BadgeWraperStyle>
              <BadgeStandAloneStyle>
                <a-badge count="25" />
                <a-badge
                  count="4"
                  :number-style="{
                    backgroundColor: '#fff',
                    color: '#999',
                    boxShadow: '0 0 0 1px #d9d9d9 inset',
                  }"
                />
                <a-badge count="109" :number-style="{ backgroundColor: '#52c41a' }" />
              </BadgeStandAloneStyle>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Red badge">
            <BadgeWraperStyle>
              <BadgeRedStyle>
                <a-badge dot>
                  <unicon name="bell"></unicon>
                </a-badge>
                <a-badge count="0" dot>
                  <unicon name="bell"></unicon>
                </a-badge>
                <a-badge dot>
                  <a to="#">something</a>
                </a-badge>
              </BadgeRedStyle>
            </BadgeWraperStyle>
          </sdCards>

          <sdCards title="Dynamic">
            <BadgeWraperStyle>
              <BadgeDynamicStyle>
                <div class="badge-dynamic" :style="{ display: 'flex', alignItems: 'flex-start' }">
                  <a-badge :count="count">
                    <a to="#" class="head-example" />
                  </a-badge>
                  <sdBtnGroup>
                    <sdButton type="white" @click="decline">
                      <unicon name="minus"></unicon>
                    </sdButton>
                    <sdButton type="white" @click="increase">
                      <unicon name="plus"></unicon>
                    </sdButton>
                  </sdBtnGroup>
                </div>
                <div
                  :style="{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10',
                  }"
                >
                  <a-badge :dot="state.show">
                    <a to="#" class="head-example" />
                  </a-badge>
                  <a-switch @click="onChange" :checked="state.show" />
                </div>
              </BadgeDynamicStyle>
            </BadgeWraperStyle>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue';
import { Main } from '../styled';
import {
  BadgeWraperStyle,
  BadgeStandAloneStyle,
  BadgeOverflowStyle,
  BadgeRedStyle,
  BadgeDynamicStyle,
} from './ui-elements-styled';
import { mapState } from 'vuex';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

let count = ref(5);

const state = reactive({
  show: true,
});

const increase = () => {
  count.value = count.value + 1;
};
const decline = () => {
  count.value = count.value - 1;
  if (count.value < 0) {
    count.value = 0;
  }
};

const onChange = (shows: boolean) => {
  state.show = shows;
};

watchEffect(() => {
  onChange(state.show);
});

const { rtl } = mapState(['rtl']);
</script>
