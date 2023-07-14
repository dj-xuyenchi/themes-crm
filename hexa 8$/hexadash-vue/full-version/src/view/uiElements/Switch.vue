<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Switch">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic"
            ><a-switch v-model:checked="checked" />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Size">
            <div class="ninjadash-switch-list">
              <a-switch v-model:checked="checked1" />
              <a-switch
                style="margin: 0 10px"
                size="small"
                v-model:checked="checked2"
              />
            </div>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Text and Icon">
            <a-switch
              checked-children="A"
              un-checked-children="B"
              v-model:checked="checked3"
            />
            <br />
            <a-switch
              checked-children="1"
              un-checked-children="0"
              v-model:checked="checked4"
            />
            <br />
            <a-switch v-model:checked="checked5">
              <template #checkedChildren><check-outlined /></template>
              <template #unCheckedChildren><close-outlined /></template>
            </a-switch>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Loading">
            <a-switch loading v-model:checked="checked6" />
            <br />
            <a-switch size="small" loading v-model:checked="checked7" />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { CheckOutlined, CloseOutlined } from "@ant-design/icons-vue";
import { Main } from "../styled";
import { ref, reactive, toRefs, defineComponent } from "vue";
export default defineComponent({
  name: "Switch",
  components: {
    Main,
    CheckOutlined,
    CloseOutlined,
  },
  setup() {
    const checked = ref(false);
    const state = reactive({
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: false,
      checked5: false,
      checked6: true,
      checked7: false,
    });
    return {
      checked,
      ...toRefs(state),
    };
  },
});
</script>
