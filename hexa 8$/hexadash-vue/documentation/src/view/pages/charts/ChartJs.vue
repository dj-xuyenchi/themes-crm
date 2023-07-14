<template>
  <div>
    <sdPageHeader
      title="ChartJs"
      class="ninjadash-page-header-main"
      :routes="[
        { path: '/', breadcrumbName: 'Charts' },
        { path: 'demo-four', breadcrumbName: 'Chartjs' },
      ]"
    ></sdPageHeader>
    <Main>
      <ChartContainer>
        <a-row :gutter="25">
          <a-col :md="12" :sm="24" :xs="24">
            <sdCards title="Bar Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="bar"
                  :options="{
                    maintainAspectRatio: true,
                    responsive: true,
                  }"
                  :height="200"
                />
                <br />
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100 mb-35"
                  v-model="barChart"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards title="Stacked Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="bar"
                  :height="200"
                  className="stacked"
                  id="stacked"
                  :options="stackedOption"
                />
                <br />
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100 mb-35"
                  v-model="stackedChart"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards title="Area Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="line"
                  :options="areaChartOption"
                  :datasets="areaChartData"
                  className="areaChart"
                  id="areaChart"
                  :height="200"
                />
                <br />
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100 mb-35"
                  v-model="areaChart"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards title="Donut Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="doughnut"
                  :label="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
                  :options="{
                    cutoutPercentage: 70,
                    maintainAspectRatio: true,
                    responsive: true,
                    legend: {
                      display: false,
                      position: 'bottom',
                    },
                    animation: {
                      animateScale: true,
                      animateRotate: true,
                    },
                  }"
                  :datasets="[
                    {
                      data: [20, 20, 30, 5, 25],
                      backgroundColor: [
                        '#560bd0',
                        '#007bff',
                        '#00cccc',
                        '#cbe0e3',
                        '#74de00',
                      ],
                    },
                  ]"
                  className="donutChart"
                  id="donutChart"
                  :height="200"
                />
                <br />
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100 mb-35"
                  v-model="donut"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
          </a-col>
          <a-col :md="12" :sm="24" :xs="24">
            <sdCards title="Line Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="line"
                  className="lineChart"
                  id="lineChart"
                  :options="lineChartOption"
                  :datasets="lineChartData"
                  :height="200"
                />
                <br />
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100 mb-35"
                  v-model="lineChart"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards title="Transparent Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="bar"
                  className="transparentChart"
                  id="transparentChart"
                  :height="200"
                  :options="transparentChartOption"
                  :datasets="transparentChartData"
                />
                <br />
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100 mb-35"
                  v-model="transparentChart"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards title="Pie Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="pie"
                  :label="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
                  :options="{
                    maintainAspectRatio: true,
                    responsive: true,
                    legend: {
                      display: false,
                    },
                    animation: {
                      animateScale: true,
                      animateRotate: true,
                    },
                  }"
                  :datasets="[
                    {
                      data: [20, 20, 30, 5, 25],
                      backgroundColor: [
                        '#560bd0',
                        '#007bff',
                        '#00cccc',
                        '#cbe0e3',
                        '#74de00',
                      ],
                    },
                  ]"
                  className="pieChart"
                  id="pieChart"
                />
                <br />
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100 mb-35"
                  v-model="paiChart"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
          </a-col>
        </a-row>
      </ChartContainer>
    </Main>
  </div>
</template>

<script>
import { Main } from "../../styled";
import Chart from "@/components/utilities/chartjs";
import { customTooltips } from "@/components/utilities/utilities";
import { defineComponent } from "vue";
import Styled from "vue3-styled-components";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const ChartContainer = Styled.div`
    display: block;
    font-family: 'Jost', sans-serif;
    .chart-divider {
        display: block;
        width: 100%;
        height: 100px;
    }
    .chartjs-tooltip {
        opacity: 1;
        position: absolute;
        background: #fff;
        box-shadow: 0 3px 16px #ADB5D915;
        padding: 8px 6px !important;
        border-radius: 5px;
        border: 1px solid #F1F2F6;
        min-width: 80px;
        transition: all 0.5s ease;
        pointer-events: none;
        transform: translate(-50%, 5%);
        z-index: 222;
        top: 0;
        left: 0;
        @media only screen and (max-width: 991px){
            transform: translate(-60%, 5%);
        }
        &:before {
            position: absolute;
            content: '';
            border-top: 5px solid #fff;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            bottom: -5px;
            ${({ theme }) => (!theme.rtl ? "left" : "right")}: 50%;
            transform: translateX(-50%);
        }
        table td{
            padding: 0;
        }
    }
    .chartjs-tooltip-key {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: "pink";
        ${({ theme }) => (theme.rtl ? "margin-left" : "margin-right")} : 5px;
    }
    .tooltip-title {
        color: ${({ theme }) => theme[theme.mainContent]["gray-text"]};
        font-size: 12px;
        line-height: 1;
        font-weight: 500 !important;
        font-family: 'Jost', sans-serif;;
        text-transform: capitalize;
        margin-bottom: 4px;
    }
    .tooltip-value {
        color: #63b963;
        font-size: 22px;
        font-weight: 600 !important;
        font-family: 'Jost', sans-serif;;
    }
    .tooltip-value sup {
        font-size: 12px;
        @media only screen and (max-width: 1199px){
            font-size: 11px;
        }
    }
    table{
        tbody{
            td{
                font-size: 12px;
                font-weight: 500;
                padding-bottom: 3px;
                color: ${({ theme }) => theme["extra-light-color"]};
                .data-label{
                    ${({ theme }) =>
                      theme.rtl ? "margin-right" : "margin-left"}: 3px;
                    color: ${({ theme }) => theme["light-gray-color"]};
                }
            }
        }
    }
`;

export default defineComponent({
  name: "Chartjs",
  components: {
    Main,
    Chart,
    ChartContainer,
    PrismEditor,
  },
  data() {
    return {
      stackedOption: {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: false,
          labels: {
            display: false,
          },
        },
        scales: {
          y: {
            stacked: true,
            gridLines: {
              color: "#e5e9f2",
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "#182b49",
            },
          },
          x: {
            stacked: true,
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 11,
              fontColor: "#182b49",
            },
          },
        },
      },
      horizontalOption: {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: false,
          labels: {
            display: false,
          },
        },
        scales: {
          y: {
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              fontColor: "#182b49",
            },
          },
          x: {
            gridLines: {
              color: "#e5e9f2",
            },

            ticks: {
              beginAtZero: true,
              fontSize: 11,
              fontColor: "#182b49",
              max: 100,
            },
          },
        },
      },
      lineChartOption: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
          padding: {
            left: "-10",
            right: 0,
            top: 0,
            bottom: "-10",
          },
        },
        legend: {
          display: false,
          labels: {
            display: false,
          },
        },
        tooltips: {
          mode: "label",
          intersect: false,
          position: "average",
          enabled: false,
          custom: customTooltips,
          callbacks: {
            label(t, d) {
              const dstLabel = d.datasets[t.datasetIndex].label;
              const { yLabel } = t;
              return `<span class="chart-data">${yLabel}</span> <span class="data-label">${dstLabel}</span>`;
            },
            labelColor(tooltipItem, chart) {
              const dataset =
                chart.config.data.datasets[tooltipItem.datasetIndex];
              return {
                backgroundColor: dataset.borderColor,
                borderColor: "transparent",
                usePointStyle: true,
              };
            },
          },
        },
      },
      lineChartData: [
        {
          data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
          borderColor: "#001737",
          borderWidth: 1,
          fill: false,
          label: "Lose",
        },
        {
          data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
          borderColor: "#1ce1ac",
          borderWidth: 1,
          fill: false,
          label: "Profit",
        },
      ],
      areaChartData: [
        {
          data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
          borderColor: "#001737",
          borderWidth: 1,
          fill: true,
          label: "Lose",
          backgroundColor: "#00173750",
          pointHoverBorderColor: "transparent",
        },
        {
          data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
          borderColor: "#1ce1ac",
          borderWidth: 1,
          fill: true,
          label: "Profit",
          backgroundColor: "#1ce1ac50",
          pointHoverBorderColor: "transparent",
        },
      ],
      areaChartOption: {
        maintainAspectRatio: true,
        hover: {
          mode: "nearest",
          intersect: false,
        },
        layout: {
          padding: {
            left: -10,
            right: 0,
            top: 2,
            bottom: -10,
          },
        },
        legend: {
          display: false,
          labels: {
            display: false,
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          y: {
            stacked: true,
            gridLines: {
              display: false,
              color: "#e5e9f2",
            },
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              display: false,
              stepSize: 20,
            },
          },
          x: {
            stacked: true,
            gridLines: {
              display: false,
            },

            ticks: {
              beginAtZero: true,
              fontSize: 11,
              display: false,
            },
          },
        },
        tooltips: {
          mode: "label",
          intersect: false,
          position: "average",
          enabled: false,
          custom: customTooltips,
          callbacks: {
            label(t, d) {
              const dstLabel = d.datasets[t.datasetIndex].label;
              const { yLabel } = t;
              return `<span class="chart-data">${yLabel}</span> <span class="data-label">${dstLabel}</span>`;
            },
            labelColor(tooltipItem, chart) {
              const dataset =
                chart.config.data.datasets[tooltipItem.datasetIndex];
              return {
                backgroundColor: dataset.borderColor,
                borderColor: "transparent",
                usePointStyle: true,
              };
            },
          },
        },
      },
      transparentChartData: [
        {
          data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
          backgroundColor: "rgba(0,23,55, .5)",
          label: "Profit",
          barPercentage: 0.6,
        },
        {
          data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
          backgroundColor: "rgba(28,225,172, .5)",
          label: "Lose",
          barPercentage: 0.6,
        },
      ],
      transparentChartOption: {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: true,
          position: "bottom",
          align: "start",
          labels: {
            boxWidth: 6,
            display: true,
            usePointStyle: true,
          },
        },
        layout: {
          padding: {
            left: "0",
            right: 0,
            top: 0,
            bottom: "0",
          },
        },
        scales: {
          y: {
            gridLines: {
              color: "#e5e9f2",
            },
            ticks: {
              beginAtZero: true,
              fontSize: 13,
              fontColor: "#182b49",
              max: 80,
              stepSize: 20,
              callback(value) {
                return `${value}k`;
              },
            },
          },
          x: {
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 13,
              fontColor: "#182b49",
            },
          },
        },
        tooltips: {
          mode: "label",
          intersect: false,
          position: "average",
          enabled: false,
          custom: customTooltips,
          callbacks: {
            label(t, d) {
              const dstLabel = d.datasets[t.datasetIndex].label;
              const { yLabel } = t;
              return `<span class="chart-data">${yLabel}</span> <span class="data-label">${dstLabel}</span>`;
            },
            labelColor(tooltipItem, chart) {
              const dataset =
                chart.config.data.datasets[tooltipItem.datasetIndex];
              return {
                backgroundColor: dataset.backgroundColor,
                borderColor: "transparent",
                usePointStyle: true,
              };
            },
          },
        },
      },
      barChart: `
<template>
    <Main>
        <ChartContainer>
            <Chart
                type="bar"
                :options="{
                maintainAspectRatio: true,
                responsive: true,
                }"
                :height="200"
            />
        </ChartContainer>
    </Main>
</template>
<script>
    import Chart from "@/components//utilities/chartjs";
    import ChartContainer from "@/view/dashboard/style.js"; 
    import { defineComponent } from "vue";  

    export default defineComponent({       
        components: {
            Main,
            Chart,
            ChartContainer,            
        }        
    })
< /script>
      `,

      stackedChart: `
<template>
    <Main>
        <ChartContainer>
            <Chart
                type="bar"
                :height="200"
                className="stacked"
                id="stacked"
                :options="stackedOption"
            />
        </ChartContainer>
    </Main>
</template>
<script>
    import Chart from "@/components//utilities/chartjs";
    import ChartContainer from "@/view/dashboard/style.js";
    import { defineComponent } from "vue";     

    export default defineComponent({       
        components: {
            Main,
            Chart,
            ChartContainer,            
        }
    })
< /script>
      `,
      areaChart: `
<template>
    <Main>
        <ChartContainer>
            <Chart
                type="line"
                :options="areaChartOption"
                :datasets="areaChartData"
                className="areaChart"
                id="areaChart"
                :height="200"
            />
        </ChartContainer>
    </Main>
</template>
<script>
    import Chart from "@/components//utilities/chartjs";
    import ChartContainer from "@/view/dashboard/style.js";
    import { defineComponent } from "vue";     

    export default defineComponent({       
        components: {
            Main,
            Chart,
            ChartContainer,            
        }
    })
< /script>
      `,

      donut: `
<template>
    <Main>
        <ChartContainer>            
            <Chart
                type="doughnut"
                :label="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
                :options="{
                cutoutPercentage: 70,
                maintainAspectRatio: true,
                responsive: true,
                legend: {
                    display: false,
                    position: 'bottom',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                },
                }"
                :datasets="[
                {
                    data: [20, 20, 30, 5, 25],
                    backgroundColor: [
                    '#560bd0',
                    '#007bff',
                    '#00cccc',
                    '#cbe0e3',
                    '#74de00',
                    ],
                },
                ]"
                className="donutChart"
                id="donutChart"
                :height="200"
            />
        </ChartContainer>
    </Main>
</template>
<script>
    import Chart from "@/components//utilities/chartjs";
    import ChartContainer from "@/view/dashboard/style.js";
    import { defineComponent } from "vue";     

    export default defineComponent({       
        components: {
            Main,
            Chart,
            ChartContainer,            
        }
    })

< /script>
      `,
      lineChart: `
<template>
    <Main>
        <ChartContainer>            
            <Chart
                  type="line"
                  className="lineChart"
                  id="lineChart"
                  :options="lineChartOption"
                  :datasets="lineChartData"
                  :height="200"
                />
        </ChartContainer>
    </Main>
</template>
<script>
    import Chart from "@/components//utilities/chartjs";
    import ChartContainer from "@/view/dashboard/style.js";
    import { defineComponent } from "vue";     

    export default defineComponent({       
        components: {
            Main,
            Chart,
            ChartContainer,            
        }
    });
< /script>
      `,
      transparentChart: `
<template>
    <Main>
        <ChartContainer>            
            <Chart
                type="bar"
                className="transparentChart"
                id="transparentChart"
                :height="200"
                :options="transparentChartOption"
                :datasets="transparentChartData"
            />
        </ChartContainer>
    </Main>
</template>
<script>
    import Chart from "@/components//utilities/chartjs";
    import ChartContainer from "@/view/dashboard/style.js";
    import { defineComponent } from "vue";     

    export default defineComponent({       
        components: {
            Main,
            Chart,
            ChartContainer,            
        }
    });
< /script>
      `,
      paiChart: `
<template>
    <Main>
        <ChartContainer>            
            <Chart
                type="pie"
                :label="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
                :options="{
                maintainAspectRatio: true,
                responsive: true,
                legend: {
                    display: false,
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                },
                }"
                :datasets="[
                {
                    data: [20, 20, 30, 5, 25],
                    backgroundColor: [
                    '#560bd0',
                    '#007bff',
                    '#00cccc',
                    '#cbe0e3',
                    '#74de00',
                    ],
                },
                ]"
                className="pieChart"
                id="pieChart"
            />
        </ChartContainer>
    </Main>
</template>
<script>
    import Chart from "@/components//utilities/chartjs";
    import ChartContainer from "@/view/dashboard/style.js";
    import { defineComponent } from "vue";     

    export default defineComponent({       
        components: {
            Main,
            Chart,
            ChartContainer,            
        }
    });
< /script>
      `,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
