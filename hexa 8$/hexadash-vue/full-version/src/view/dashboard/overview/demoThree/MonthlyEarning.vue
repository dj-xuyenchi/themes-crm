<template>
  <SalesRevenueWrapper>
    <BorderLessHeading v-if="earningsData !== null">
      <ChartContainer>
        <sdCards :title="title">
          <template #button>
            <div class="ninjadash-card-nav">
              <ul>
                <li
                  :class="
                    earningsTab === 'today'
                      ? 'ninjadash-active'
                      : 'ninjadash-today'
                  "
                >
                  <router-link
                    @click="(event) => handleTabActivation('today', event)"
                    to="#"
                  >
                    Today
                  </router-link>
                </li>
                <li
                  :class="
                    earningsTab === 'week'
                      ? 'ninjadash-active'
                      : 'ninjadash-week'
                  "
                >
                  <router-link
                    @click="(event) => handleTabActivation('week', event)"
                    to="#"
                  >
                    Week
                  </router-link>
                </li>
                <li
                  :class="
                    earningsTab === 'month'
                      ? 'ninjadash-active'
                      : 'ninjadash-month'
                  "
                >
                  <router-link
                    @click="(event) => handleTabActivation('month', event)"
                    to="#"
                  >
                    Month
                  </router-link>
                </li>
              </ul>
            </div>
          </template>
          <div
            class="ninjadash-chart-container ninjadash-sales-revenue-lineChart"
          >
            <DashboardChart
              v-if="!isLoading"
              className="ninjadash-earning-revenue"
              id="ninjadash-earning-revenue"
              :labels="earnings[earningsTab].labels"
              :datasets="earningsData"
              :tooltip="{
                custom: customTooltips,
                callbacks: {
                  title() {
                    return `Total Revenue`;
                  },
                  label(t) {
                    const { formattedValue, dataset } = t;
                    return `${formattedValue}k ${dataset.label}`;
                  },
                },
              }"
              :height="innerWidth <= 575 ? 200 : 110"
            />
            <a-spin v-else />
          </div>
        </sdCards>
      </ChartContainer>
    </BorderLessHeading>
  </SalesRevenueWrapper>
</template>
<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import PropTypes from "vue-types";
import {
  customTooltips,
  chartLinearGradient,
} from "@/components/utilities/utilities";
import DashboardChart from "@/components/utilities/chartjs.vue";
import { SalesRevenueWrapper, ChartContainer } from "../../style";
import { BorderLessHeading } from "../../../styled";
import chartContent from "@/demoData/dashboardChartContent.json";

const { earnings } = chartContent;
export default defineComponent({
  props: {
    title: PropTypes.string.def("Earning Report"),
  },
  components: {
    BorderLessHeading,
    SalesRevenueWrapper,
    ChartContainer,
    DashboardChart,
  },
  setup() {
    const earningsTab = ref("today");
    const isLoading = ref(false);
    const handleTabActivation = (value, e) => {
      e.preventDefault();
      isLoading.value = true;
      earningsTab.value = value;
      setTimeout(() => {
        isLoading.value = false;
      }, 100);
    };

    const innerWidth = ref(0);
    onMounted(() => {
      innerWidth.value = window.innerWidth;
    });

    const earningsData = computed(() => {
      return [
        {
          data: earnings[earningsTab.value].users,
          borderColor: "#8231D3",
          borderWidth: 3,
          fill: true,
          backgroundColor: () =>
            chartLinearGradient(
              document.getElementById("ninjadash-earning-revenue"),
              300,
              {
                start: `rgba(130, 49, 211, 0.4)`,
                end: `rgba(255, 255, 255, 0.5)`,
              }
            ),
          label: "Current period",
          pointStyle: "circle",
          pointRadius: "0",
          hoverRadius: "9",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#8231D3",
          hoverBorderWidth: 5,
          amount: "$7,596",
          amountClass: "current-amount",
        },
      ];
    });

    return {
      earnings,
      customTooltips,
      chartLinearGradient,
      earningsTab,
      handleTabActivation,
      earningsData,
      innerWidth,
      isLoading,
    };
  },
});
</script>
