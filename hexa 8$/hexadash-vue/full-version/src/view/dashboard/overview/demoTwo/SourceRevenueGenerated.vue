<template>
    <BorderLessHeading>
      <sdCards more title="Source of Revenue Generated">
        <template #more>
          <router-link to="#">
            <unicon name="print" width="16"></unicon>
            <span>Printer</span>
          </router-link>
          <router-link to="#">
            <unicon name="book-open" width="16"></unicon>
            <span>PDF</span>
          </router-link>
          <router-link to="#">
            <unicon name="file-alt" width="16"></unicon>
            <span>Google Sheets</span>
          </router-link>
          <router-link to="#">
            <unicon name="x" width="16"></unicon>
            <span>Excel (XLSX)</span>
          </router-link>
          <router-link to="#">
            <unicon name="file" width="16"></unicon>
            <span>CSV</span>
          </router-link>
        </template>
        <RevenueSourceStyle>
            <div class="ninjadash-chart-container">
                <Chart
                    type="pie"
                    id="source-revenue-generated"
                    className="pieChart"
                    :labels="labels"
                    :datasets="chartData"
                    :scales="scales"
                    :tooltip="{
                    custom: customTooltips,
                    ...tooltip,
                    }"
                />
            </div>
            <div class="chart-content__details">
                <div class="chart-content__single" v-for="({icons, labels, revenue}, index) in dataStats" :key="index">
                    <span v-for="(icon, i) in icons" :key="i" :class="`icon color-${icon}`">
                        <unicon v-if="icon === 'facebook'" name="facebook-f" />
                        <unicon v-if="icon === 'twitter'" name="twitter" />
                        <InlineSvg v-if="icon === 'google'" :src="require('@/static/img/icon/google-customIcon.svg')"></InlineSvg>
                    </span>
                    <span v-for="(label, i) in labels" class="label" :key="i">{{ label }}</span>
                    <span v-for="(data, i) in revenue" class="data" :key="i">${{ data }}</span>
                </div>
            </div>
        </RevenueSourceStyle>
      </sdCards>
    </BorderLessHeading>
</template>
<script>
    import { defineComponent } from "vue";
    import { RevenueSourceStyle } from "../../style";
    import { BorderLessHeading } from "../../../styled";
    import Chart from "../../../../components/utilities/chartjs.vue";
    import { customTooltips } from "../../../../components/utilities/utilities";
    import InlineSvg from 'vue-inline-svg';

    export default defineComponent({
    components: {
        RevenueSourceStyle,
        BorderLessHeading,
        Chart,
        InlineSvg
    },
    setup() {
        const height = 250;
        let scales = {
            y: {
                display: false
            },
            x: {
                display: false
            }
        };
        const dataStats = [
            {
                icons: ['facebook'],
                labels: ['Facebook'],
                revenue: [4621],
                color: '#8231D3'
            },
            {
                icons: ['twitter'],
                labels: ['Twitter'],
                revenue: [4245],
                color: '#00AAFF'
            },
            {
                icons: ['google'],
                labels: ['Google'],
                revenue: [12112],
                color: '#5840FF'
            }
        ];

        let labels = ['Twitter', 'Google', 'Facebook'];
        let revenues = [];
        let colors = [];
        dataStats.forEach((elm) => {
            //labels.push(elm.labels);
            revenues.push(elm.revenue);
            colors.push(elm.color);
        });

        let chartData = [
            {
                label: 'Revenue Generated',
                data: revenues,
                backgroundColor: colors
            }
        ];

        const tooltip = {
            callbacks: {
                label(t) {
                    const { dataset, label, dataIndex } = t;
                    return `${label} $${dataset.data[dataIndex]}`;
                },
                labelColor({ dataIndex, dataset }) {
                    return {
                        backgroundColor: dataset.backgroundColor[dataIndex],
                        borderColor: 'transparent',
                    };
                },
            },
        };

        const options = {
            hoverOffset: 3,
            maintainAspectRatio: true,
            responsive: false,
            borderColor: '#fff',
            plugins: {
                legend: {
                    display: false
                },
                labels: {
                    display: false
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
            };
            return {
                customTooltips,
                dataStats,
                labels,
                options,
                scales,
                chartData,
                tooltip,
                revenues,
                colors,
                height
            };
        },
    });
</script>
