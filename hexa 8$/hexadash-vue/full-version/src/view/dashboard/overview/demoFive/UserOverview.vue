<template>
  <BorderLessHeading v-if="userOverviewData[overviewTab] !== null">
    <UserOverviewStyle>
      <ChartContainer>
        <sdCards title="User Overview">
          <template #button>
            <div class="ninjadash-card-nav">
              <ul>
                <li
                  :class="
                    overviewTab === 'today'
                      ? 'ninjadash-active'
                      : 'ninjadash-today'
                  "
                >
                  <router-link
                    @click="(e) => handleTabActivation('today', e)"
                    to="#"
                  >
                    Today
                  </router-link>
                </li>
                <li
                  :class="
                    overviewTab === 'week'
                      ? 'ninjadash-active'
                      : 'ninjadash-week'
                  "
                >
                  <router-link
                    @click="(e) => handleTabActivation('week', e)"
                    to="#"
                  >
                    Week
                  </router-link>
                </li>
                <li
                  :class="
                    overviewTab === 'month'
                      ? 'ninjadash-active'
                      : 'ninjadash-month'
                  "
                >
                  <router-link
                    @click="(e) => handleTabActivation('month', e)"
                    to="#"
                  >
                    Month
                  </router-link>
                </li>
              </ul>
            </div>
          </template>
          <CardBarChart class="ninjadash-chart-container">
            <ul class="ninjadash-chartdata-list">
              <template v-if="userOverviewDataset">
                <li v-for="(item, key) in userOverviewDataset" :key="key + 1">
                  <span
                    :style="{
                      width: '7px',
                      height: '7px',
                      display: 'flex',
                      backgroundColor: item.hoverBackgroundColor,
                      borderRadius: '50%',
                      margin: '0px 6.5px',
                    }"
                  />
                  {{ item.label }}
                </li>
              </template>
            </ul>
            <DashboardChart
              v-if="!isLoading"
              className="userChanrt"
              id="userCharts"
              :labels="userOverviewData[overviewTab].labels"
              :datasets="userOverviewDataset"
              :height="height"
              :layout="{
                padding: {
                  top: 20,
                },
              }"
              type="bar"
              :scales="{
                y: {
                  grid: {
                    color: '#485e9029',
                    borderDash: [3, 3],
                    zeroLineColor: '#485e9029',
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 3],
                  },

                  ticks: {
                    beginAtZero: true,
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                    max: Math.max(...userOverviewData[overviewTab].gained),
                    stepSize: Math.floor(
                      Math.max(...userOverviewData[overviewTab].gained) / 5
                    ),
                    callback(label) {
                      return `${label}k`;
                    },
                  },
                },
                x: {
                  grid: {
                    display: true,
                    zeroLineWidth: 2,
                    zeroLineColor: '#485e9029',
                    color: 'transparent',
                    z: 1,
                  },
                  ticks: {
                    beginAtZero: true,
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                  },
                },
              }"
              :tooltip="{
                external: customTooltips,
                callbacks: {
                  label(t) {
                    const dstLabel = t.dataset.label;
                    const { formattedValue } = t;
                    return ` ${dstLabel}:${formattedValue}k`;
                  },
                  labelColor(t) {
                    return {
                      backgroundColor: t.dataset.hoverBackgroundColor,
                      borderColor: 'transparent',
                    };
                  },
                },
              }"
            />
          </CardBarChart>
        </sdCards>
      </ChartContainer>
    </UserOverviewStyle>
  </BorderLessHeading>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import DashboardChart from "@/components/utilities/chartjs.vue";
import { customTooltips } from "@/components/utilities/utilities";
import { BorderLessHeading } from "../../../styled";
import { CardBarChart, ChartContainer, UserOverviewStyle } from "../../style";

import chartContent from "@/demoData/dashboardChartContent.json";

const { userOverviewData } = chartContent;

export default defineComponent({
  components: {
    DashboardChart,
    BorderLessHeading,
    CardBarChart,
    ChartContainer,
    UserOverviewStyle,
  },
  setup() {
    const overviewTab = ref("today");
    const isLoading = ref(false);

    /* Tab Activation */
    const handleTabActivation = (value) => {
      isLoading.value = true;
      overviewTab.value = value;
      setTimeout(() => {
        isLoading.value = false;
      }, 0);
    };
    const height = window.innerWidth <= 575 ? 180 : 105;
    const userOverviewDataset = computed(() => [
      {
        data: userOverviewData[overviewTab.value].target,
        backgroundColor: "rgba(130, 49, 211, 0.5)",
        hoverBackgroundColor: "#8231D3",
        label: "target",
        maxBarThickness: 10,
        barThickness: 12,
      },
      {
        data: userOverviewData[overviewTab.value].gained,
        backgroundColor: "rgba(0, 170, 255, 0.5)",
        hoverBackgroundColor: "#00AAFF",
        label: "gained",
        maxBarThickness: 10,
        barThickness: 12,
      },
    ]);

    return {
      customTooltips,
      userOverviewDataset,
      handleTabActivation,
      height,
      userOverviewData,
      overviewTab,
      isLoading,
    };
  },
});
</script>
