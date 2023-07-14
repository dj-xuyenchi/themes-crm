<script setup lang="ts">
import { OverviewCardMeshWrap } from './style';
import { onMounted, ref } from 'vue';
import Vue3Autocounter from 'vue3-autocounter';

const props = defineProps({
  data: {
    type: Object,
  },
});

const didViewCountUp = ref(false);

onMounted(() => {
  setTimeout(() => {
    didViewCountUp.value = true;
  }, 200);
});
</script>

<template>
  <OverviewCardMeshWrap class="ninjadash-overview-card-single">
    <a-card :bordered="false">
      <div :class="`ninjadash-overview-card ninjadash-overview-card-${data?.type}`">
        <div class="ninjadash-overview-card__left d-flex justify-content-between">
          <div :class="`ninjadash-overview-card__left--icon ninjadash-${data?.type}`">
            <unicon :name="data?.icon"></unicon>
          </div>
        </div>
        <div class="ninjadash-overview-card__right">
          <div class="ninjadash-overview-card__right--content">
            <h4 class="ninjadash-overview-total">
              <vue3-autocounter
                ref="counter"
                :startAmount="0"
                :endAmount="didViewCountUp ? Number(data?.total) : 0"
                :duration="2"
                :prefix="data?.prefix"
                :suffix="data?.suffix"
                separator=","
                decimalSeparator="."
                :decimals="data?.decimal"
                :autoinit="true"
              ></vue3-autocounter>
            </h4>
            <span class="ninjadahs-overview-label">{{ data?.label }}</span>
          </div>
          <span :class="`ninjadash-overview-status ninjadash-status-${data?.status}`">
            <span class="ninjadash-status-rate">
              <unicon :name="data?.status === 'growth' ? 'arrow-up' : 'arrow-down'"></unicon>{{ data?.statusRate }}
            </span>
          </span>
        </div>
      </div>
    </a-card>
  </OverviewCardMeshWrap>
</template>
