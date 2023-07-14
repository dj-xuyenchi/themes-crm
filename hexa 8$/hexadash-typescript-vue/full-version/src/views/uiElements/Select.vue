<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Select"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <SelectWrapperStyle>
              <a-select v-model:value="value1" style="width: 120px" @focus="focus" ref="select" @change="handleChange">
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="disabled" disabled>Disabled</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
              <a-select v-model:value="value2" style="width: 120px" disabled>
                <a-select-option value="lucy">Lucy</a-select-option>
              </a-select>
              <a-select v-model:value="value3" style="width: 120px" loading>
                <a-select-option value="lucy">Lucy</a-select-option>
              </a-select>
            </SelectWrapperStyle>
          </sdCards>
          <sdCards title="Select Size">
            <SelectRadioStyle>
              <a-radio-group v-model:value="size">
                <a-radio-button value="large">Large</a-radio-button>
                <a-radio-button value="default">Default</a-radio-button>
                <a-radio-button value="small">Small</a-radio-button>
              </a-radio-group>
            </SelectRadioStyle>
            <div class="tag-select-list">
              <a-select :size="size" v-model:value="value4" style="width: 200px">
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                  {{ (i + 9).toString(36) + i }}
                </a-select-option>
              </a-select>
              <a-select
                mode="multiple"
                :size="size"
                placeholder="Please select"
                v-model:value="value5"
                style="width: 100%"
                @popupScroll="popupScroll"
              >
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                  {{ (i + 9).toString(36) + i }}
                </a-select-option>
              </a-select>
              <a-select mode="tags" :size="size" placeholder="Please select" v-model:value="value6" style="width: 100%">
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                  {{ (i + 9).toString(36) + i }}
                </a-select-option>
              </a-select>
            </div>
          </sdCards>
          <sdCards title="Custom">
            <div class="ninjadash-select-vertical-list">
              <a-select
                v-model:value="valueCountry"
                mode="multiple"
                style="width: 100%"
                placeholder="select one country"
                option-label-prop="label"
              >
                <a-select-option value="china" label="China">
                  <span role="img" aria-label="China">🇨🇳</span>
                  China
                </a-select-option>
                <a-select-option value="usa" label="USA">
                  <span role="img" aria-label="USA">🇺🇸</span>
                  USA
                </a-select-option>
                <a-select-option value="japan" label="Japan">
                  <span role="img" aria-label="Japan">🇯🇵</span>
                  Japan
                </a-select-option>
                <a-select-option value="korea" label="Korea">
                  <span role="img" aria-label="Korea">🇰🇷</span>
                  Korea
                </a-select-option>
              </a-select>
            </div>
          </sdCards>
          <sdCards title="Hide Already Selected">
            <a-select
              mode="multiple"
              placeholder="Inserted are removed"
              v-model:value="selectedItems"
              style="width: 100%"
            >
              <a-select-option v-for="item in filteredOptions" :key="item" :value="item">
                {{ item }}
              </a-select-option>
            </a-select>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Select Coordinate">
            <SelectWrapperStyle>
              <a-select v-model:value="province" style="width: 120px">
                <a-select-option v-for="pro in provinceData" :key="pro">
                  {{ pro }}
                </a-select-option>
              </a-select>
              <a-select v-model:value="state.secondCity" style="width: 120px">
                <a-select-option v-for="city in cities" :key="city">
                  {{ city }}
                </a-select-option>
              </a-select>
            </SelectWrapperStyle>
          </sdCards>
          <sdCards title="Multiple select">
            <a-select
              mode="multiple"
              v-model:value="value8"
              style="width: 100%"
              placeholder="Please select"
              @change="handleChangeMulti"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </sdCards>

          <sdCards title="Tags select">
            <a-select v-model:value="tag" mode="tags" style="width: 100%" placeholder="Tags Mode" @change="tagChange">
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </sdCards>

          <sdCards title="Group">
            <a-select v-model:value="groupValue" style="width: 100%" @change="groupChange">
              <a-select-opt-group>
                <template #label>
                  <span>
                    <user-outlined />
                    Manager
                  </span>
                </template>
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
              </a-select-opt-group>
              <a-select-opt-group label="Engineer">
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
                <a-select-option value="Yiminghe1">yiminghe1</a-select-option>
              </a-select-opt-group>
            </a-select>
          </sdCards>

          <sdCards title="Automatic Completion">
            <a-select
              v-model:value="automaticValue"
              mode="tags"
              style="width: 100%"
              :token-separators="[',']"
              @change="automaticChange"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { reactive, computed, ref, watch } from 'vue';
import { Main } from '../styled';
import { SelectWrapperStyle, SelectRadioStyle } from './ui-elements-styled';
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
let index = 0;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData: any = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const items = ref(['jack', 'lucy']);
let value = ref('lucy');

const focus = () => {
  console.log('focus');
};

const handleChange = (value: any) => {
  console.log(`selected ${value}`);
};
const handleChangeMulti = (value: any) => {
  console.log(`selected ${value}`);
};
const automaticChange = (value: any) => {
  console.log(`selected ${value}`);
};

const popupScroll = () => {
  console.log('popupScroll');
};

const addItem = () => {
  console.log('addItem');
  items.value.push(`New item ${index++}`);
};

const valueCountry = ref(['china']);
watch(valueCountry, (val) => {
  console.log(`selected:`, val);
});

const selectedItems = ref(['Apples']);
const filteredOptions = computed(() => OPTIONS.filter((o) => !selectedItems.value.includes(o)));

const province = provinceData[0];

const state = reactive({
  province,
  provinceData,
  cityData,
  secondCity: cityData[province][0],
});
const cities = computed(() => {
  return cityData[state.province];
});

watch(
  () => state.province,
  (val) => {
    state.secondCity = state.cityData[val][0];
  },
);
const tagChange = (value: any) => {
  console.log(`selected ${value}`);
};
const groupChange = (value: any) => {
  console.log(`selected ${value}`);
};

let value1 = ref('lucy');
let value2 = ref('lucy');
let value3 = ref('lucy');
let size = ref('default');
let value4 = ref('a1');
let value5 = ref(['a10', 'b20']);
let value6 = ref(['a1', 'b2']);
let value8 = ref(['a1', 'b2']);
let groupValue = ref(['lucy']);
let tag = ref([]);
let automaticValue = ref([]);
</script>
