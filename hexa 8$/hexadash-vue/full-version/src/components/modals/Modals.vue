<template>
  <ModalStyled
    :title="title"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="onOk"
    @cancel="onCancel"
    :type="color ? this.type : false"
    :width="width"
    :class="className"
    :footer="null"
  >
    <template #footer>
      <slot name="footer">
        <sdButton
          type="white"
          :outlined="color ? false : true"
          key="back"
          @click="onCancel"
        >
          Return
        </sdButton>
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

<script>
import { ModalStyled } from "./styled";
import VueTypes from "vue-types";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Modal",
  components: {
    ModalStyled,
  },
  props: {
    onCancel: VueTypes.func,
    onOk: VueTypes.func,
    visible: VueTypes.bool.def(false),
    confirmLoading: VueTypes.bool.def(false),
    title: VueTypes.string,
    class: VueTypes.string.def("ninjadash-modal"),
    type: VueTypes.oneOf([
      "primary",
      "secondary",
      "success",
      "error",
      "danger",
      "info",
      "white",
      "warning",
    ]).def("white"),
    footer: VueTypes.oneOf([null]),
    width: VueTypes.number.def(620),
    color: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]).def(false),
  },
  data() {
    return {
      className: this.class,
    };
  },
});
</script>
