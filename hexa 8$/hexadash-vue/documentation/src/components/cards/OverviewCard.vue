<template>
  <OverviewCard class="ninjadash-overview-card-box">
    <a-card :bordered="false">
      <div
        :class="`ninjadash-overview-card ninjadash-overview-card-${ocData.type}`"
      >
        <div
          :class="
            contentFirst
              ? 'ninjadash-overview-card__top d-flex justify-content-between ninjadash-overview-card-theme-2'
              : 'ninjadash-overview-card__top d-flex justify-content-between'
          "
        >
          <div
            :class="`ninjadash-overview-card__top--icon ninjadash-${ocData.type}`"
          >
            <unicon :name="ocData.icon"></unicon>
          </div>
          <div
            :class="
              contentFirst
                ? 'ninjadash-overview-card__top--content'
                : 'ninjadash-overview-card__top--content text-right'
            "
          >
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
          </div>
        </div>

        <div v-if="bottomStatus" class="ninjadash-overview-card__bottom">
          <span
            :class="`ninjadash-overview-status ninjadash-status-${ocData.growth}`"
          >
            <span class="ninjadash-status-rate">
              <unicon
                :name="ocData.growth === 'upward' ? 'arrow-up' : 'arrow-down'"
              ></unicon>
              {{ ocData.growthRate }}%
            </span>
            <span class="ninjadash-status-label">{{ ocData.dataPeriod }}</span>
          </span>
        </div>
      </div>
    </a-card>
  </OverviewCard>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { OverviewCard } from "./style";
import VueTypes from "vue-types";
import Vue3Autocounter from "vue3-autocounter";

const OverviewCards = defineComponent({
  name: "OverviewCards",
  props: {
    ocData: VueTypes.object.def({
      id: "1",
      type: "primary",
      icon: "briefcase-alt",
      total: "100",
      suffix: "+",
      prefix: "",
      label: "Total Products",
      growth: "downward",
      growthRate: "15.65",
      dataPeriod: "Since Last Month",
      decimal: 0,
    }),
    bottomStatus: VueTypes.bool.def(true),
    contentFirst: VueTypes.bool.def(true),
  },
  components: {
    OverviewCard,
    "vue3-autocounter": Vue3Autocounter,
  },
  setup() {
    const didViewCountUp = ref(false);

    onMounted(() => {
      setTimeout(() => {
        didViewCountUp.value = true;
      }, 200);
    });

    return {
      didViewCountUp,
    };
  },
});

export default OverviewCards;
</script>
