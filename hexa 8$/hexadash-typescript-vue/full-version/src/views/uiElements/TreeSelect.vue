<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Tree Select"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic">
            <a-tree-select
              v-model:value="value"
              show-search
              :style="{ width: '100%' }"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              placeholder="Please select"
              allow-clear
              tree-default-expand-all
              class="ant-tree-select"
              :tree-data="treeData4"
            >
              <template #title="{ value: val, title }">
                <b v-if="val === 'parent 1-1'" style="color: #08c">sss</b>
                <template v-else>{{ title }}</template>
              </template>
            </a-tree-select>
          </sdCards>
          <sdCards title="Generate from tree data">
            <a-tree-select
              class="ant-tree-select"
              v-model:value="value"
              style="width: 100%"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="treeData2"
              placeholder="Please select"
              tree-default-expand-all
            >
              <template #title="{ key, value }">
                <span style="color: #08c" v-if="key === '0-0-1'">Child Node1 {{ value }}</span>
              </template>
            </a-tree-select>
          </sdCards>
          <sdCards title="Asynchronous loading">
            <a-tree-select
              class="ant-tree-select"
              v-model:value="value"
              tree-data-simple-mode
              :style="{ width: '100%' }"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="treeData"
              placeholder="Please select"
              :load-data="onLoadData"
            />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Multiple Selection">
            <a-tree-select
              class="ant-tree-select"
              show-search
              :style="{ width: '100%' }"
              v-model:value="value2"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              placeholder="Please select"
              allow-clear
              multiple
              tree-default-expand-all
              :tree-data="treeData5"
            >
              <template #title="{ value: val, title }">
                <b v-if="val === 'parent 2-1'" style="color: #08c">sss</b>
                <template v-else>{{ title }}</template>
              </template>
            </a-tree-select>
          </sdCards>
          <sdCards title="Checkable">
            <a-tree-select
              class="ant-tree-select"
              v-model:value="value3"
              :style="{ width: '100%' }"
              :tree-data="treeData3"
              tree-checkable
              allow-clear
              :show-checked-strategy="SHOW_PARENT"
              search-placeholder="Please select"
            />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { TreeSelect } from 'ant-design-vue';
import { Main } from '../styled';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const treeData3: any = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        disabled: true,
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const treeData2: any = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        value: '0-0-1',
        key: '0-0-1',
        title: 'title',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  },
];

const treeData4: any = [
  {
    title: 'parent 1',
    value: 'parent 1',
    children: [
      {
        title: 'parent 1-0',
        value: 'parent 1-0',
        children: [
          {
            title: 'my leaf',
            value: 'leaf1',
          },
          {
            title: 'your leaf',
            value: 'leaf2',
          },
        ],
      },
      {
        title: 'parent 1-1',
        value: 'parent 1-1',
      },
    ],
  },
];

const treeData5: any = [
  {
    title: 'parent 2',
    value: 'parent 2',
    children: [
      {
        title: 'parent 2-0',
        value: 'parent 2-0',
        children: [
          {
            title: 'my deer',
            value: 'deer1',
          },
          {
            title: 'your deer',
            value: 'deer2',
          },
        ],
      },
      {
        title: 'parent 2-1',
        value: 'parent 2-1',
      },
    ],
  },
];

let value = ref();
let value2 = ref([]);
let value3 = ref(['0-0-0']);
const treeData: any = ref([
  {
    id: 1,
    pId: 0,
    value: '1',
    title: 'Expand to load',
  },
  {
    id: 2,
    pId: 0,
    value: '2',
    title: 'Expand to load',
  },
  {
    id: 3,
    pId: 0,
    value: '3',
    title: 'Tree Node',
    isLeaf: true,
  },
]);
const genTreeNode = (parentId: any, isLeaf = false) => {
  const random = Math.random().toString(36).substring(2, 6);
  return {
    id: random,
    pId: parentId,
    value: random,
    title: isLeaf ? 'Tree Node' : 'Expand to load',
    isLeaf,
  };
};

const onLoadData = (treeNode: any) => {
  return new Promise((resolve) => {
    const { id } = treeNode.dataRef;
    setTimeout(() => {
      treeData.value = treeData.value.concat([genTreeNode(id, false), genTreeNode(id, true)]);
      resolve('');
    }, 300);
  });
};
watch(value, () => {
  //console.log(value.value);
});
</script>
