<template>
  <a-row :gutter="25">
    <a-col
      v-for="(item, i) in totalChartData"
      :key="i"
      :xxl="8"
      :md="i === 2 ? 24 : 12"
      :sm="24"
      :xs="24"
    >
      <TotalChartStyleWrap>
        <div class="ninjaDash-total-chart">
          <ChartContainer>
            <Cards>
              <template #title>
                <div class="ninjadash-card-title-wrap">
                  <span class="ninjadash-card-title-text">
                    Total {{ item.title }}
                    <span class="ninjadash-card-subtitile"
                      >(Last{{ item.period }})</span
                    >
                  </span>
                  <span class="ninjadash-card-title-extra-text">
                    <span class="ninjadash-total-chart-total">$8550</span>
                    <span
                      :class="`ninjadash-total-chart-status ninjadash-total-chart-status-${item.status}`"
                    >
                      <unicon
                        name="arrow-up"
                        v-if="item.status === 'growth'"
                      ></unicon>
                      <unicon name="arrow-down" v-else></unicon> 25.36%
                    </span>
                  </span>
                </div>
              </template>
              <div class="ninjadash-chart-container">
                <Chart
                  type="line"
                  className="totalLineCharts"
                  :labels="item.labels"
                  :id="`id_${i}`"
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
                  :height="height"
                  :tooltip="tooltip(item)"
                />
              </div>
            </Cards>
          </ChartContainer>
        </div>
      </TotalChartStyleWrap>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent, ref } from "vue";
import totalChartData from "../../../../demoData/totalSaleChart.json";
import { TotalChartStyleWrap, ChartContainer } from "../../style";
import Cards from "../../../../components/cards/frame/CardsFrame.vue";
import Chart from "../../../../components/utilities/chartjs.vue";

const TotalLineChart = defineComponent({
  name: "TotalLineChart",
  components: {
    Chart,
    TotalChartStyleWrap,
    ChartContainer,
    Cards,
  },
  setup() {
    const height = ref(window.innerWidth <= 575 ? 280 : 180);

    const tooltip = (item) => {
      return {
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
            return `  ${item.title}: ${formattedValue}k`;
          },
          labelColor() {
            return {
              backgroundColor: item.lineColor,
              borderColor: "transparent",
            };
          },
        },
      };
    };

    return {
      totalChartData,
      height,
      tooltip,
    };
  },
});

export default TotalLineChart;
</script>
