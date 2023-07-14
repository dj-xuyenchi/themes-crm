<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { OverviewCard } from './style';
import Vue3Autocounter from 'vue3-autocounter';

const props = defineProps({
  ocData: {
    type: Object,
    default: () => ({
      id: '1',
      type: 'primary',
      icon: 'briefcase-alt',
      total: '100',
      suffix: '+',
      prefix: '',
      label: 'Total Products',
      growth: 'downward',
      growthRate: '15.65',
      dataPeriod: 'Since Last Month',
      decimal: 0,
    }),
  },
  bottomStatus: {
    type: Boolean,
    default: true,
  },
  contentFirst: {
    type: Boolean,
    default: true,
  },
  halfCircleIcon: {
    type: Boolean,
    default: false,
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
  <OverviewCard class="ninjadash-overview-card-box">
    <a-card :bordered="false" :class="halfCircleIcon ? 'ninjadash-overview-halfCircle-card' : null">
      <div :class="`ninjadash-overview-card ninjadash-overview-card-${ocData.type}`">
        <div
          :class="
            contentFirst
              ? 'ninjadash-overview-card__top d-flex justify-content-between ninjadash-overview-card-theme-2'
              : 'ninjadash-overview-card__top d-flex justify-content-between'
          "
        >
          <div :class="`ninjadash-overview-card__top--icon ninjadash-${ocData.type}`">
            <unicon :name="ocData.icon"></unicon>
          </div>
          <div
            :class="
              contentFirst
                ? 'ninjadash-overview-card__top--content'
                : 'ninjadash-overview-card__top--content text-right'
            "
          >
            <template v-if="halfCircleIcon">
              <span className="ninjadahs-overview-label">{{ ocData.label }}</span>
              <h4 class="ninjadash-overview-total">
                <vue3-autocounter
                  ref="counter"
                  :startAmount="0"
                  :endAmount="didViewCountUp ? Number(ocData.total) : 0"
                  :duration="2"
                  :prefix="ocData.prefix"
                  :suffix="ocData.suffix"
                  separator=","
                  decimalSeparator="."
                  :decimals="ocData.decimal"
                  :autoinit="true"
                ></vue3-autocounter>
              </h4>
            </template>
            <template v-else>
              <h4 class="ninjadash-overview-total">
                <vue3-autocounter
                  ref="counter"
                  :startAmount="0"
                  :endAmount="didViewCountUp ? Number(ocData.total) : 0"
                  :duration="2"
                  :prefix="ocData.prefix"
                  :suffix="ocData.suffix"
                  separator=","
                  decimalSeparator="."
                  :decimals="ocData.decimal"
                  :autoinit="true"
                ></vue3-autocounter>
              </h4>
              <span class="ninjadahs-overview-label">{{ ocData.label }}</span>
            </template>
          </div>
        </div>

        <div v-if="bottomStatus" class="ninjadash-overview-card__bottom">
          <span :class="`ninjadash-overview-status ninjadash-status-${ocData.growth}`">
            <span class="ninjadash-status-rate">
              <unicon :name="ocData.growth === 'upward' ? 'arrow-up' : 'arrow-down'"></unicon>
              {{ ocData.growthRate }}%
            </span>
            <span class="ninjadash-status-label">{{ ocData.dataPeriod }}</span>
          </span>
        </div>
      </div>
    </a-card>
  </OverviewCard>
</template>
