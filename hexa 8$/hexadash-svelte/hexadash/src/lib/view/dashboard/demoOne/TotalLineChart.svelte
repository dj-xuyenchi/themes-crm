<script>
	import totalChartData from '@data/totalSaleChart.json';
	import { onMount } from 'svelte';
	import Chartjs from '@components/utilities/Chartjs.svelte';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '@components/cards/CardExtra.svelte';

	let innerWidth;
	let primaryColor;
	let primaryColorRGB;
	let infoColor;
	let infoColorRGB;
	onMount(() => {
		innerWidth = window.innerWidth;
		primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
		primaryColorRGB = getComputedStyle(document.documentElement).getPropertyValue(
			'--color-primary-rgba'
		);
		infoColor = getComputedStyle(document.documentElement).getPropertyValue('--color-info');
		infoColorRGB = getComputedStyle(document.documentElement).getPropertyValue('--color-info-rgba');
	});

	const tooltip = {
		usePointStyle: true,
		callbacks: {
			label(t) {
				const dstLabel = t.dataset.label;
				const { formattedValue } = t;
				return `  ${formattedValue} ${dstLabel}`;
			},
			labelColor(t) {
				return {
					backgroundColor: t.dataset.hoverBackgroundColor,
					borderColor: 'transparent'
				};
			}
		}
	};

	$: totalChartDataset = [
		{
			data: totalChartData.orders,
			backgroundColor: `rgba(${primaryColorRGB},0.5)`,
			hoverBackgroundColor: primaryColor,
			borderColor: primaryColor,
			label: 'Orders',
			total: '8,550',
			prefix: '$',
			growthRate: '25',
			growthStatus: 'up',
			labelType: 'primary',
			maxBarThickness: 10,
			barThickness: 12
		},
		{
			data: totalChartData.sales,
			backgroundColor: `rgba(${infoColorRGB},0.5)`,
			hoverBackgroundColor: infoColor,
			borderColor: infoColor,
			label: 'Sales',
			total: '5,550',
			prefix: '$',
			growthRate: '15',
			growthStatus: 'down',
			labelType: 'info',
			maxBarThickness: 10,
			barThickness: 12
		}
	];

	$: scales = {
		y: {
			grid: {
				color: '#E3E6EF',
				borderDash: [3, 3],
				zeroLineColor: '#E3E6EF',
				zeroLineWidth: 1,
				zeroLineBorderDash: [3, 3],
				drawTicks: false,
				drawBorder: false,
				borderWidth: 0
			},
			ticks: {
				beginAtZero: true,
				font: {
					size: 14,
					family: "'Jost', sans-serif"
				},
				color: '#747474',
				stepSize: 20,
				padding: 15,
				callback: function (value, index, ticks) {
					return value + 'k';
				}
			}
		},

		x: {
			offset: true,
			grid: {
				display: false,
				zeroLineWidth: 0,
				drawTicks: true,
				drawBorder: false,
				color: 'transparent',
				z: 1
			},
			ticks: {
				beginAtZero: true,
				font: {
					size: 14,
					family: "'Jost', sans-serif"
				},
				color: '#747474'
			}
		}
	};
	$: layout = {
		padding: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}
	};
</script>

<Card class="border-0 chartLine-po-details">
	<CardHeader class="border-0 pb-md-0 pb-20">
		<h6>Sales Reports</h6>
		<CardExtra />
	</CardHeader>
	<CardBody>
		<div class="label-detailed">
			{#each totalChartDataset as item}
				<div class="label-detailed__single">
					<span class="label-detailed__type label-detailed__type--{item.labelType}"
						>{item.label}</span
					>
					<strong class="label-detailed__total">{item.prefix + item.total}</strong>
					<span
						class="label-detailed__status {item.growthStatus === 'up'
							? 'color-success'
							: 'color-danger'}"
					>
						{#if item.growthStatus === 'up'}
							<img class="svg" alt="" src={'/img/svg/arrow-success-up.svg'} />
						{:else}
							<img class="svg" alt="" src={'/img/svg/arrow-danger-down.svg'} />
						{/if}
						<strong>{item.growthRate}%</strong>
					</span>
				</div>
			{/each}
		</div>
		<div class="wp-chart">
			<div class="parentContainer">
				<Chartjs
					className="totalLineCharts"
					id="totalLineCharts"
					labels={totalChartData.labels}
					datasets={totalChartDataset}
					type="line"
					{tooltip}
					{scales}
					{layout}
					height={innerWidth <= 575 ? 180 : 105}
				/>
			</div>
		</div>
	</CardBody>
</Card>

<style lang="scss">
	@import '../../../../assets/sass/mixins/media-queries';
	@import '../../../../assets/sass/mixins/functions';
	@import '../../../../assets/sass/mixins/rfs';

	//Line Chart Card
	:global {
		.sales-data-labels {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.chartLine-po-details {
			height: 100%;
			.card-body {
				padding: 0 25px 25px 10px;
			}

			.card-header {
				min-height: auto;
				padding-top: 10px;
				@include ssm {
					padding: 20px 0 0 0;
				}
			}
		}
		.label-detailed {
			display: flex;
			justify-content: center;
			margin: -16px -12px -5px;
			flex-wrap: wrap;
			&__single {
				padding: 5px 8px;
				margin-bottom: 11px;
				display: flex;
				align-items: center;
				span,
				strong {
					padding: 0 5px;

					&.label-detailed__status {
						padding-left: 0;
					}
				}
			}
			&__type {
				font-size: 14px;
				font-weight: 400;
				display: inline-flex;
				align-items: center;
				color: var(--color-gray);
				&::before {
					content: '';
					width: 7px;
					height: 7px;
					border-radius: 50%;
					background: #eee;
					display: inline-block;
					margin-right: 5px;
				}
				&--primary {
					&::before {
						background: var(--color-primary);
					}
				}
				&--info {
					&::before {
						background: var(--color-info);
					}
				}
			}
			&__total {
				font-size: 22px;
				font-weight: 600;
				color: var(--color-dark);
			}
			&__status {
				display: inline-flex;
				align-items: center;
				line-height: normal;
				i {
					font-size: 11px;
				}
				img,
				svg {
					width: 10px;
					height: 10px;
					margin-left: 5px;
					+ strong {
						margin-left: 5px;
					}
				}
				strong {
					padding: 0;
					font-size: 14px;
					font-weight: 500;
				}
			}
		}
	}
</style>
