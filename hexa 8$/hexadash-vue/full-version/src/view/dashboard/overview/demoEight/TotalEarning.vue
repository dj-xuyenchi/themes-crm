<template>
  <a-row :gutter="25">
    <a-col v-for="(item, i) in totalChartData" :xs="24" :key="i">
      <TotalChartStyleWrap>
        <div class="ninjaDash-total-chart">
          <ChartContainer>
            <sdCards>
              <template #title>
                <div class="ninjadash-card-title-wrap">
                  <span class="ninjadash-card-title-text">
                    Total {{ item.title }}
                    <span class="ninjadash-card-subtitile"
                      >(Last){{ item.period }}</span
                    >
                  </span>
                  <span class="ninjadash-card-title-extra-text">
                    <span class="ninjadash-total-chart-total">$8550</span>
                    <span
                      :class="
                        item.status === 'down'
                          ? 'ninjadash-total-chart-status ninjadash-total-chart-status-down'
                          : 'ninjadash-total-chart-status ninjadash-total-chart-status-growth'
                      "
                    >
                      <unicon
                        :name="
                          item.status === 'growth' ? 'arrow-up' : 'arrow-down'
                        "
                      ></unicon>
                      25.36%
                    </span>
                  </span>
                </div>
              </template>
              <div class="ninjadash-chart-container">
                <DashboardChart
                  type="line"
                  id="totalEarning"
                  className="totalEarning"
                  :labels="item.labels"
                  :datasets="[
                    {
                      data: item.data,
                      borderColor: item.lineColor,
                      borderWidth: 3,
                      fill: false,
                      pointBackgroundColor: '#FA8B0C',
                      pointBorderColor: '#fff',
                      pointHoverBorderColor: '#fff',
                      pointBorderWidth: 0,
                      pointHoverBorderWidth: 0,
                      pointHoverRadius: 0,
                      z: 5,
                    },
                  ]"
                  :height="innerWidth <= 575 ? 280 : 200"
                  :tooltip="{
                    custom(tooltip) {
                      if (!tooltip) return;
                      // disable displaying the color box;
                      tooltip.displayColors = false;
                    },
                    callbacks: {
                      title(t) {
                        const { label } = t[0];
                        return `${label}`;
                      },
                      label(t) {
                        const { formattedValue } = t;
                        return `${item.title}: $${formattedValue}k`;
                      },
                      labelColor() {
                        return {
                          backgroundColor: item.lineColor,
                          borderColor: 'transparent',
                        };
                      },
                    },
                  }"
                />
              </div>
            </sdCards>
          </ChartContainer>
        </div>
      </TotalChartStyleWrap>
    </a-col>
  </a-row>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import DashboardChart from "@/components/utilities/chartjs.vue";
import { TotalChartStyleWrap, ChartContainer } from "../../style";

import totalChartData from "@/demoData/TotalEarning.json";

export default defineComponent({
  components: { TotalChartStyleWrap, ChartContainer, DashboardChart },
  setup() {
    const innerWidth = ref(0);
    onMounted(() => {
      innerWidth.value = window.innerWidth;
    });
    return {
      totalChartData,
      innerWidth,
    };
  },
});
</script>
