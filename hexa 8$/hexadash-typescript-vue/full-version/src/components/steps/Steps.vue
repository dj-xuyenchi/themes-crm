<script lang="ts">
import { toRefs, ref, defineComponent } from 'vue';
import VueTypes from 'vue-types';
import { StepsStyle, ActionWrapper } from './style';

const stepStyle = {
  marginBottom: 60,
  boxShadow: '0px -1px 0 0 #e8e8e8 inset',
};

const Steps = defineComponent({
  name: 'Steps',
  components: { StepsStyle, ActionWrapper },
  props: {
    size: VueTypes.string.def('default'),
    current: VueTypes.number.def(0),
    direction: VueTypes.string.def('horizontal'),
    status: VueTypes.string,
    description: VueTypes.string,
    //progressDot: VueTypes.func.def(() => 1),
    steps: VueTypes.arrayOf(VueTypes.object).def(),
    wizardItem: VueTypes.arrayOf(VueTypes.object),
    isSwitch: VueTypes.bool.def(false),
    navigation: VueTypes.bool.def(false),
    isFinished: VueTypes.bool.def(false),
    isVertical: VueTypes.bool.def(false),
    height: VueTypes.number.def(150),
  },
  emits: ['onPrev', 'onNext', 'onDone', 'onChange'],
  setup(props, { emit }) {
    const { current } = toRefs(props);
    const currents = ref(current.value);
    const next = () => {
      currents.value = currents.value + 1;
      emit('onNext', currents.value);
    };

    const prev = () => {
      currents.value = currents.value - 1;
      emit('onPrev', currents.value);
    };

    const onDone = () => {
      emit('onDone', currents.value);
    };

    const onChanges = (curr: any) => {
      currents.value = curr;
      emit('onChange', curr);
    };

    return {
      onChanges,
      prev,
      next,
      currents,
      stepStyle,
      onDone,
    };
  },
});

export default Steps;
</script>

<template>
  <StepsStyle
    v-if="!isSwitch"
    :type?="navigation && 'navigation'"
    :style="navigation && stepStyle"
    :size?="size"
    :current="navigation ? currents : current"
    :direction?="direction"
    :status?="status"
    @change="onChanges"
  >
    <slot></slot>
  </StepsStyle>

  <template v-else>
    <StepsStyle v-if="steps !== undefined" :current="currents" :direction?="direction" :status?="status" :size?="size">
      <a-step
        v-for="item in steps"
        :class="item.class && item.class"
        :icon="item.icon && item.icon"
        :key="item.title"
        :title="item.title"
        :description="item.titleDescription"
      >
        <template #description>
          <div v-if="item.path" class="wizard-item">
            <h2>{{ item.subTitle }}</h2>
            <p>{{ item.description }}</p>
            <img :src="'../../assets/' + item.path" alt="" />
          </div>
        </template>
      </a-step>
    </StepsStyle>

    <div v-if="isVertical" class="steps-wrapper">
      <div
        class="steps-content"
        :style="{
          minHeight: height,
          display: 'flex',
          justifyContent: 'center',
          marginTop: 100,
        }"
      >
        <slot v-if="steps && currents" :name="steps[currents].content"></slot>
      </div>
      <ActionWrapper v-if="!isFinished">
        <div class="step-action-wrap">
          <div class="step-action-inner">
            <a-row>
              <a-col :xs="24">
                <div class="steps-action">
                  <sdButton v-if="currents > 0" class="btn-prev" type="light" @click="() => prev()">
                    <unicon name="arrow-left" width="16"></unicon>
                    Previous
                  </sdButton>

                  <sdButton v-if="currents < steps.length - 1" class="btn-next" type="primary" @click="() => next()">
                    Save & Next
                    <unicon name="arrow-right" width="14"></unicon>
                  </sdButton>

                  <sdButton v-if="currents === steps.length - 1" type="primary" @click="onDone"> Done </sdButton>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </ActionWrapper>
    </div>
    <template v-else>
      <div
        class="steps-content"
        :style="{
          minHeight: height,
          display: 'flex',
          justifyContent: 'center',
          marginTop: 100,
        }"
      >
        <slot :name="steps[currents].content"></slot>
      </div>
      <ActionWrapper v-if="!isFinished">
        <div class="step-action-wrap">
          <div class="step-action-inner">
            <a-row>
              <a-col :xs="24">
                <div class="steps-action">
                  <sdButton v-if="currents > 0" class="btn-prev" type="light" @click="() => prev()">
                    <unicon name="arrow-left" width="16"></unicon>
                    <span>Previous</span>
                  </sdButton>
                  <sdButton v-if="currents < steps.length - 1" class="btn-next" type="primary" @click="() => next()">
                    <span>Save & Next</span>
                    <unicon name="arrow-right" width="14"></unicon>
                  </sdButton>
                  <sdButton v-if="currents === steps.length - 1" type="primary" @click="onDone">
                    <span>Done</span>
                  </sdButton>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </ActionWrapper>
    </template>
  </template>
</template>
