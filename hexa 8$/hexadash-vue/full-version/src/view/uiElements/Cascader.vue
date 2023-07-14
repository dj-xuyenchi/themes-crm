<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Cascader">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <CasCaderStyleWrapper>
              <sdCascader :onChange="onChange" />
            </CasCaderStyleWrapper>
          </sdCards>
          <sdCards title="Disabled option">
            <CasCaderStyleWrapper>
              <sdCascader :data="disabledData" :onChange="onChange" />
            </CasCaderStyleWrapper>
          </sdCards>
          <sdCards title="Size">
            <CasCaderStyleWrapper>
              <sdCascader size="large" :onChange="onChange" />
              <sdCascader size="default" :onChange="onChange" />
              <sdCascader size="small" :onChange="onChange" />
            </CasCaderStyleWrapper>
          </sdCards>
          <sdCards title="Search">
            <CasCaderStyleWrapper>
              <sdCascader :isShowSearch="true" :onChange="onChange" />
            </CasCaderStyleWrapper>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Default Value">
            <CasCaderStyleWrapper>
              <sdCascader
                :defaultValue="['zhejiang', 'hangzhou', 'xihu']"
                :onChange="onChange"
              />
            </CasCaderStyleWrapper>
          </sdCards>
          <sdCards title="Hover">
            <CasCaderStyleWrapper>
              <sdCascader trigger="hover" :onChange="onChange" />
            </CasCaderStyleWrapper>
          </sdCards>
          <sdCards title="Change on select">
            <CasCaderStyleWrapper>
              <sdCascader :onChange="onChange" />
            </CasCaderStyleWrapper>
          </sdCards>
          <sdCards title="Lazy Loading">
            <CasCaderStyleWrapper>
              <sdCascader
                :loading="true"
                :data="[
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    isLeaf: false,
                  },
                  {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    isLeaf: false,
                  },
                ]"
                :onChange="onChange"
              />
            </CasCaderStyleWrapper>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { CasCaderStyleWrapper } from "./ui-elements-styled";
import { defineComponent } from "vue";

const disabledData = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    disabled: true,
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

export default defineComponent({
  name: "Cascader",
  components: {
    Main,
    CasCaderStyleWrapper,
  },
  data() {
    return {
      value: null,
      loading: [],
      disabledData,
    };
  },
  methods: {
    onChange(value) {
      this.value = value;
    },
  },
});
</script>
