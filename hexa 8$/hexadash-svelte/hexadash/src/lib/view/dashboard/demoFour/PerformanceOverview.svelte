<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '$lib/components/cards/CardExtra.svelte';
	import { onMount } from 'svelte';

	let performanceChart;
	const labels = ['Target', 'Completed', 'In Progress'];
	var chartConfig = {
		series: [90, 80, 70],
		colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
		chart: {
			width: '100%',
			height: '100%',
			type: 'radialBar',
			sparkline: {
				enabled: true
			}
		},
		legend: {
			show: false
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: '28%'
				},
				track: {
					show: true,
					margin: 11
				},
				dataLabels: {
					show: true,
					name: {
						offsetY: 20
					},
					value: {
						fontSize: '24px',
						fontFamily: '"Jost", sans-serif',
						fontWeight: 600,
						offsetY: -21
					},
					total: {
						show: true,
						label: 'Completed',
						fontSize: '16px',
						fontFamily: '"Jost", sans-serif',
						fontWeight: 400,
						color: '#404040',
						formatter: function (w) {
							return '60%';
						}
					}
				}
			}
		},
		stroke: {
			lineCap: 'round'
		},
		grid: {
			padding: {
				to: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		},
		labels
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		var chart = new ApexCharts(performanceChart, chartConfig);
		chart.render();
	});
</script>

<Card class="border-0 h-100 perfomance-o">
	<CardHeader class="border-0 pb-0">
		<h6>Performance Overview</h6>
		<CardExtra />
	</CardHeader>
	<CardBody class="pt-sm-25 pb-25 pt-15">
		<div class="performance-chart-wrap">
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
	.performance-chart {
		width: 285px;
		height: 285px;
		margin: -25px;
	}
	.performance-chart-labels {
		margin-left: 38px;
		ul {
			li {
				font-size: 15px;
				font-weight: 400;
				display: flex;
				align-items: center;
				&:not(:last-child) {
					margin-bottom: 12px;
				}
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
