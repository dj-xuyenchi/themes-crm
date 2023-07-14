<template>
  <ModalStyled
    :title="title"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="onOk"
    @cancel="onCancel"
    :type="color ? type : false"
    :width="width"
    :class="className"
    :footer="null"
  >
    <template #footer>
      <slot name="footer">
        <sdButton type="white" :outlined="color ? false : true" key="back" @click="onCancel"> Return </sdButton>
        <sdButton
          key="submit"
          :type="color ? 'white' : type"
          :outlined="type !== 'white' ? false : true"
          :loading="confirmLoading"
          @click="handleOk"
        >
          Submit
        </sdButton>
      </slot>
    </template>
    <slot name="title"> </slot>
    <slot></slot>
  </ModalStyled>
</template>

<script lang="ts">
import { ModalStyled } from './styled';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Modal',
  components: {
    ModalStyled,
  },
  props: {
    onCancel: Function,
    onOk: Function,
    visible: {
      type: Boolean,
      default: false,
    },
    confirmLoading: {
      type: Boolean,
      default: false,
    },
    title: String,
    class: {
      type: String,
      default: 'ninjadash-modal',
    },
    type: {
      type: String,
      validator: (value) =>
        ['primary', 'secondary', 'success', 'error', 'danger', 'info', 'white', 'warning'].includes(value as string),
      default: 'white',
    },
    footer: {
      type: null,
      default: null,
    },
    width: {
      type: Number,
      default: 620,
    },
    color: {
      type: [Boolean, String],
      default: false,
    },
  },
  setup(props) {
    const className = ref(props.class);
    const handleOk = () => {
      if (props.onOk) {
        props.onOk();
      }
    };
    return {
      className,
      handleOk,
    };
  },
});
</script>
