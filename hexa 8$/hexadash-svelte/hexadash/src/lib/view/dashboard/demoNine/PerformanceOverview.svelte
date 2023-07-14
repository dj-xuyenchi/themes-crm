<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '$lib/components/cards/CardExtra.svelte';
	import { onMount } from 'svelte';
	let border = "border-0"
	let performanceChart;
	const labels = ['Target', 'Completed', 'In Progress'];
	var chartConfig = {
		series: [30, 30, 40],
		labels: ['Target', 'In Progress', 'Completed'],
		colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
		chart: {
			width: '100%',
			height: 225,
			type: 'donut',
			group: 'social',
		},
		legend: {
            show: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    minAngleToShowLabel: undefined
                },
                donut: {
                    size: "75%",
                    labels: {
                        show: true,
                        value: {
                            show: true,
                            fontSize: '30px',
                            fontFamily: 'Jost, sans-serif',
                            color: "black",
                            fontWeight: "bold",
                            offsetY: -10,
                            formatter: function (val) {
                                return +val + "K"
                            }
                        },
                        name: {
                            show: true,
                            fontSize: '16px',
                            fontFamily: 'Jost, sans-serif',
                            color: '#404040',
                            offsetY: 25
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            color: '#404040',
                            fontFamily: 'Jost, sans-serif',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                },
            },
        },
        responsive: [{
            breakpoint: 1399,
            options: {
                chart: {
                    width: "100%"
                },

            }
        }]
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		var chart = new ApexCharts(performanceChart, chartConfig);
		chart.render();
	});
</script>

<Card class="border-0 h-100 perfomance-o">
	<CardHeader class="pb-0 {border}">
		<h6>Sales Overview</h6>
		<CardExtra />
	</CardHeader>
	<CardBody class="pt-sm-25 pb-25 pt-15">
		<div class="performance-chart-wrap flex-column">
			<div class="performance-chart">
				<div bind:this={performanceChart} />
			</div>
			<div class="performance-chart-labels">
				<ul>
					{#each labels as label}
						<li class="label-{label.replace(/\s+/g, '-').toLowerCase()}">{label}</li>
					{/each}
				</ul>
			</div>
		</div>
	</CardBody>
</Card>

<style lang="scss">
@import '../../../../assets/sass/mixins/functions';
@import '../../../../assets/sass/mixins/media-queries';
	:global{
		.perfomance-o{
			.performance-chart-wrap{
				@include xl{
					display: flex;
					align-items: center;
					flex-direction: column;
				}
			}
			.performance-chart-labels{
				@include xl{
					margin: 0 !important;
					ul{
						display: flex;
						align-items: center;
						gap: 20px;
						margin-top: 15px;
						li{
							margin: 0 !important;
						}
					}
				}
				@include xs{
					ul{
						flex-wrap: wrap;
						justify-content: center
					}
				}
			}
		}
	};
	.performance-chart-wrap {
		display: flex;
		align-items: center;
	}
	.performance-chart-labels {
		margin-top: 15px;
		ul {
			gap: 10px 30px;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			@include ssm{
				gap: 2.5px 5px;
			}
			li {
				font-size: 14px;
				font-weight: 400;
				display: flex;
				align-items: center;
				&::before {
					content: '';
					width: 7px;
					height: 7px;
					border-radius: 50%;
					background: #ccc;
					margin-right: 7px;
				}
				&.label-target {
					color:var(--color-gray) ;
					&::before {
						background: var(--color-primary);
					}
				}
				&.label-completed {
					&::before {
						background: var(--color-info);
					}
				}
				&.label-in-progress {
					&::before {
						background: var(--color-warning);
					}
				}
			}
		}
	}
</style>
