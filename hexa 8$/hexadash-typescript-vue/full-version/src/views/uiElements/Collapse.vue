<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Collapse"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <a-collapse v-model="activeKey">
              <a-collapse-panel key="1" header="This is panel header 1">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="This is panel header 2">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
                <p>{{ text }}</p>
              </a-collapse-panel>
            </a-collapse>
          </sdCards>
          <sdCards title="Nested Panel">
            <a-collapse @change="changeActivekey">
              <a-collapse-panel key="1" header="This is panel header 1">
                <a-collapse default-active-key="4">
                  <a-collapse-panel key="4" header="This is panel nest panel">
                    <p>{{ text }}</p>
                  </a-collapse-panel>
                </a-collapse>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="This is panel header 2">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="This is panel header 3">
                <p>{{ text }}</p>
              </a-collapse-panel>
            </a-collapse>
          </sdCards>
          <sdCards title="No arrow">
            <a-collapse v-model="activeKey">
              <a-collapse-panel :showArrow="false" key="1" header="This is panel header 1">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel :showArrow="false" key="2" header="This is panel header 2">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel :showArrow="false" key="3" header="This is panel header 3" collapsible="disabled">
                <p>{{ text }}</p>
              </a-collapse-panel>
            </a-collapse>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Accordion">
            <a-collapse accordion>
              <a-collapse-panel key="1" header="This is panel header 1">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="This is panel header 2">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="This is panel header 3">
                <p>{{ text }}</p>
              </a-collapse-panel>
            </a-collapse>
          </sdCards>
          <sdCards title="Borderless">
            <a-collapse default-active-key="1" :bordered="false">
              <a-collapse-panel key="1" header="This is panel header 1">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="This is panel header 2">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="This is panel header 3">
                <p>{{ text }}</p>
              </a-collapse-panel>
            </a-collapse>
          </sdCards>
          <sdCards title="Custom Panel">
            <a-collapse default-active-key="1" :bordered="false">
              <template #expandIcon="props">
                <unicon :name="props.isActive ? 'angle-down' : 'angle-right'" width="14"></unicon>
              </template>
              <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
                <p>{{ text }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
                <p>{{ text }}</p>
              </a-collapse-panel>
            </a-collapse>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { watch } from 'vue';

const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
let activeKey = 1;
const customStyle = 'border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';

watch(
  () => activeKey,
  (newKey, oldKey) => {
    console.log(`New key: ${newKey}, old key: ${oldKey}`);
  },
);

const changeActivekey = (key: any) => {
  console.log(key);
};
</script>
