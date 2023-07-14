<template>
  <div v-if="type == 'basic'">
    <sdButton type="primary" :raised="true" @click="showDrawer">{{ btnText }}</sdButton>
    <a-drawer
      :title="title"
      :placement="placement"
      :closable="false"
      v-model:visible="visible"
      @afterVisibleChange="afterVisibleChange"
    >
      <slot></slot>
    </a-drawer>
  </div>
  <div class="ninjadash-drawer-placement" v-if="type == 'custom'">
    <a-radio-group v-model:value="customPlacement">
      <a-radio value="top">top</a-radio>
      <a-radio value="right">right</a-radio>
      <a-radio value="bottom">bottom</a-radio>
      <a-radio value="left">left</a-radio>
    </a-radio-group>
    <sdButton type="primary" :raised="true" @click="showDrawer">{{ btnText }}</sdButton>
    <a-drawer :title="title" :placement="customPlacement" :closable="false" :visible="visible" @close="onClose">
      <slot></slot>
    </a-drawer>
  </div>
  <div
    v-if="type == 'render'"
    :style="{
      height: '200px',
      overflow: 'hidden',
      position: 'relative',
      padding: '48px',
      textAlign: 'center',
      width: '100%',
    }"
  >
    Render in this
    <div style="margin-top: 16px">
      <sdButton type="primary" :raised="true" @click="showDrawer">Open</sdButton>
    </div>
    <a-drawer
      :title="title"
      placement="right"
      :closable="false"
      :visible="visible"
      :get-container="false"
      :style="{ position: 'absolute' }"
      @close="onClose"
    >
      <slot></slot>
    </a-drawer>
  </div>

  <div v-if="type == 'submit'">
    <sdButton type="primary" :raised="true" @click="showDrawer">
      <PlusOutlined />
      <span>New account</span>
    </sdButton>
    <a-drawer
      :title="title"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
      class="drawer-default"
    >
      <slot></slot>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <sdButton type="primary" @click="onClose">Submit</sdButton>
      </div>
    </a-drawer>
  </div>
</template>

<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import { computed, ref, onMounted, defineComponent } from 'vue';
export default defineComponent({
  name: 'Drawer',
  components: {
    PlusOutlined,
  },
  props: {
    type: {
      type: String,
      validator: (value) => ['basic', 'custom', 'render', 'submit'].includes(value as string),
      default: 'basic',
    },
    title: String,
    placement: String,
    btnText: {
      type: String,
      default: 'Open',
    },
    width: {
      type: Number,
      default: 320,
    },
  },
  setup() {
    const { state } = useStore();
    const visible = ref(false);
    const customPlacement = ref('left');
    const rtl = computed(() => state.themeLayout.rtlData);

    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    onMounted(() => {
      visible.value = false;
    });

    return {
      visible,
      customPlacement,
      afterVisibleChange,
      showDrawer,
      onClose,
      rtl,
    };
  },
});
</script>
