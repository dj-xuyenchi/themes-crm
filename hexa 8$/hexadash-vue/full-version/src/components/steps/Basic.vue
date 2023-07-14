<template>
  <StepsStyle
    :current="current"
    :size="size"
    v-if="step == 'basic'"
    :status="status"
  >
    <a-step v-for="title in title" :title="title" :key="title" />
  </StepsStyle>
  <StepsStyle
    :status="status"
    :direction="direction"
    :current="current"
    :size="size"
    v-if="step == 'direction'"
  >
    <a-step
      v-for="item in data"
      :title="item.title"
      :description="item.description"
      :key="item.id"
    />
  </StepsStyle>
  <StepsStyle :size="size" v-if="step == 'withIcon'">
    <a-step
      v-for="item in data"
      :title="item.title"
      :key="item.id"
      status="item.status"
    >
      <template #icon>
        <unicon :name="item.icon" width="24"></unicon>
      </template>
    </a-step>
  </StepsStyle>
  <ActionWrapper v-if="step == 'switch'">
    <a-row>
      <a-col :xs="24">
        <a-steps :current="current1">
          <a-step v-for="item in data" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
          {{ data[current1].content }}
        </div>
        <div class="steps-action">
          <a-button
            v-if="current1 < data.length - 1"
            class="btn-next"
            type="primary"
            @click="next"
          >
            Save & Next <unicon name="arrow-right" width="14"></unicon>
          </a-button>
          <a-button
            v-if="current1 == data.length - 1"
            type="primary"
            @click="$message.success('Processing complete!')"
          >
            Done
          </a-button>
          <a-button class="btn-prev" v-if="current1 > 0" @click="prev">
            <unicon name="arrow-left" width="14"></unicon>
            Previous
          </a-button>
        </div>
      </a-col>
    </a-row>
  </ActionWrapper>
</template>

<script>
import { ref, defineComponent } from "vue";
import VueTypes from "vue-types";
import { StepsStyle, ActionWrapper } from "./style";
export default defineComponent({
  name: "BasicSteps",
  components: { StepsStyle, ActionWrapper },
  props: {
    step: VueTypes.oneOf(["basic", "withIcon", "switch", "direction"]).def(
      "basic"
    ),
    size: VueTypes.oneOf(["small", "bar", "default"]).def("small"),
    direction: VueTypes.oneOf(["bar", "horizontal", "vertical"]),
    status: VueTypes.oneOf(["wait", "process", "finish", "error"]),
    current: VueTypes.number.def(1),
    title: VueTypes.arrayOf(VueTypes.string),
    data: VueTypes.arrayOf(VueTypes.object),
  },
  setup() {
    const current1 = ref(0);
    const next = () => {
      current1.value++;
    };
    const prev = () => {
      current1.value--;
    };
    return {
      current1,
      next,
      prev,
    };
  },
});
</script>

<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
.steps-action {
  margin-top: 24px;
}
</style>
