<script>
	import { onMount } from 'svelte';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import Chartjs from '@components/utilities/Chartjs.svelte';
	import chartData from '@data/dashboardChartContent.json';
	let profitGrowthData = chartData.profitGrowth;

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

	let isLoading = false;

	const tooltip = {
		callbacks: {
			label: function (context) {
				let label = context.dataset.label || '';

				if (label) {
					label += ': ';
				}
				if (context.parsed.y !== null) {
					label += new Intl.NumberFormat().format(context.parsed.y);
				}
				return `<span class="data-label">${label}K</span>`;
			}
		},
	};

	$: profitGrowthDataset = [
		{
			data: profitGrowthData.orders,
			backgroundColor: `rgba(${primaryColorRGB},0.5)`,
			hoverBackgroundColor: primaryColor,
			label: 'Orders',
			average: '50.8',
			maxBarThickness: 10,
			borderRadius: 2,
			barThickness: 16,
			percent: 49
		},
		{
			data: profitGrowthData.sales,
			backgroundColor: `rgba(${infoColorRGB},0.5)`,
			hoverBackgroundColor: infoColor,
			label: 'Sales',
			average: '$28k',
			maxBarThickness: 10,
			borderRadius: 2,
			barThickness: 16,
			percent: 60
		}
	];

	const scales = {
		y: {
			grid: {
				color: "#485e9029",
				borderDash: [3, 3],
				zeroLineColor: "#485e9029",
				zeroLineWidth: 1,
				zeroLineBorderDash: [3, 3],
				drawTicks: false,
				drawBorder: false,
				zeroLineWidth: 3,
				borderWidth: 0,
			},
			ticks: {
				beginAtZero: true,
				font: {
					size: 14,
					family:"'Jost', sans-serif",
				},
				color: '#747474',
				max: Math.max(...profitGrowthData.orders),
				max: 80,
				min: 0,
				stepSize: 20,
				padding: 20,
				callback: function (value, index, ticks) {
					return value + 'k';
				}
			}
		},

		x: {
			grid: {
				display: true,
				zeroLineWidth: 2,
				zeroLineColor: "transparent",
				color: "transparent",
				z: 1,
				tickMarkLength: 10,
				drawTicks: true,
				drawBorder: false,
			},
			ticks: {
				beginAtZero: true,
				font: {
					size: 14,
					family:"'Jost', sans-serif",
				},
				color: '#747474',
			}
		}
	};
</script>

<Card class="border-0 profit-growth h-100">
	<CardHeader class="border-0">
		<div class="chartLine-po-details__overview-content w-100">
			<div class=" chartLine-po-details__content d-flex flex-wrap justify-content-between">
				<div class="chartLine-po-details__titlebar">
					<h1>Profit Growth</h1>
				</div>
			</div>
			<div class="chartLine-po-details__time">
				<h5>$8,550</h5>
				<span class="color-success"
					><i class="uil uil-arrow-up"></i>
					<strong>25.36%</strong></span
				>
			</div>
		</div>
	</CardHeader>
	<CardBody>
		<div class="cashflow-chart">
			<ul class="legend-static mt-1 d-flex justify-content-center">
				<li class="custom-label">
					<span class="bg-primary" />Order
				</li>
				<li class="custom-label">
					<span class="bg-info" />Sale
				</li>
			</ul>
			{#if !isLoading}
				<div class="parentContainer">
					<Chartjs
						className="ninjadash-profit-growth"
						id="ninjadash-profit-growth"
						labels={profitGrowthData.labels}
						datasets={profitGrowthDataset}
						type="bar"
						{tooltip}
						{scales}
						height={innerWidth < 1399 ? (innerWidth < 575 ? 200 : 100) :147}
					/>
				</div>
			{:else}
				<div class="ninjadash-sales-revenue-loading"><a-spin /></div>
			{/if}
		</div>
	</CardBody>
</Card>

<style lang="scss">
	@import '../../../../assets/sass/mixins/media-queries';
	@import '../../../../assets/sass/mixins/functions';
	:global {
		.chartLine-po-details {
			.card-body {
				padding: 0 18px 19px 18px;
			}

			.card-header {
				@include ssm {
					padding: 20px 0 0 0;
				}
			}

			&__overview-content {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;

				@include ssm {
					flex-direction: column;
					justify-content: center;
				}
			}

			&__titlebar {
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				h1 {
					line-height: lh(18px, 22px);
					color: var(--color-dark);
				}

				p {
					margin-bottom: 0;
					margin-left: 8px;
					font-size: 12px;
					line-height: 1.5;
					font-weight: 400;
					color: var(--color-gray);
				}
			}

			&__time {
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				span {
					font-size: 14px;
					line-height: 1.6;
					font-weight: 500;
					margin-left: 10px;
					display: flex;
					align-items: center;

					i {
						font-size: 20px;
    					width: 16px;
					}

					strong {
						margin-left: 5px;
						font-weight: 500;
					}
				}
			}
		}

		.profit-growth{
			.card-body{
				padding:0 25px 25px 10px;
				.legend-static{
					margin-bottom: 9px;
					.custom-label{
						font-size: 14px;
						font-weight: 400;
						color:var(--color-lighten);
					}
				}
			}
		}
	}
</style>
