<script>
	import totalChartData from '@data/totalCurrentPeriodMonth.json';
	import {
		onMount
	} from 'svelte';
	import Chartjs from '@components/utilities/Chartjs.svelte';
	import {
		Card,
		CardHeader,
		CardBody
	} from 'sveltestrap';

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
				label: function (context) {
					let label = context.dataset.label || '';

					if (label) {
						label += ': ';
					}
					if (context.parsed.y !== null) {
						label += new Intl.NumberFormat().format(context.parsed.y);
					}
					return `<span class="data-label">${label}k</span>`;
				}
			}
	};

	$: totalChartDataset = [{
			data: totalChartData.orders,
			backgroundColor: `rgba(${primaryColorRGB},0.5)`,
			hoverBackgroundColor: primaryColor,
			borderColor: primaryColor,

			label: 'Current Period',
			total: '8,550',
			prefix: '$',
			growthRate: '25',
			growthStatus: 'up',
			labelType: 'primary',
			borderWidth: 3,
			hoverRadius: '6',
			pointBackgroundColor: primaryColor,
			pointRadius: 0,
			pointHoverRadius: 6,
			pointHitRadius: 30,
			pointStyle: 'circle',
			pointHoverBorderWidth: 2,
		}
	];

	$: scales = {
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
					family: "'Jost', sans-serif",
				},
				color: '#747474',
				padding: 15,
				max: 80,
				min: 0,
				stepSize: 20,
				callback(value) {
					return `${value}k`;
				},
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
					family: "'Jost', sans-serif",
				},
				color: '#747474'
			}
		}
	};
	$: layout = {
		padding: {
			left: -13,
			right: -10,
			top: 0,
			bottom: 0,
		}
	};
</script>

<Card class="border-0 chartLine-po-details">
	<CardHeader class="border-0 px-25 pt-25 pb-30">
		<div class="chartLine-po-details__overview-content w-100">
			<div class=" chartLine-po-details__content d-flex flex-wrap justify-content-between">
				<div class="chartLine-po-details__titlebar">
					<h1>Total Sales</h1>
					<p>(Last 10 months)</p>
				</div>
			</div>
			<div class="chartLine-po-details__time">
				<h5>$8,550</h5>
				<span class="color-success"><i class="uil uil-arrow-up "></i>
					<strong>25.36%</strong></span>
			</div>
		</div>
	</CardHeader>
	<CardBody class="px-25">
		<div class="wp-chart">
			<div class="parentContainer">
				<Chartjs className="totalLineChartsMonth" id="totalLineChartsMonth" labels={totalChartData.labels}
					datasets={totalChartDataset} type="line" {tooltip} {scales} {layout} height={innerWidth <=575 ? 200
					: 196} />
			</div>
		</div>
	</CardBody>
</Card>

<style lang="scss">
	@import '../../../../assets/sass/mixins/media-queries';
	@import '../../../../assets/sass/mixins/functions';
	@import '../../../../assets/sass/mixins/rfs';

	//Line Chart Card
	.chartLine-po-details {
		.card-body {
			padding: 0 25px 19px 25px;
		}

		.card-header {
			@include ssm {
				padding: 20px 0 0 0;
			}
		}

		@include e(overview-content) {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;

			@include ssm {
				flex-direction: column;
				justify-content: center;
			}
		}

		@include e(titlebar) {
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
				@include ofs(12px, lh(12px, 18px), 400);
				color: var(--color-gray);
			}
		}

		@include e(time) {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			span {
				@include ofs(14px, lh(14px, 22px), 500);
				margin-left: 10px;
				display: flex;
				align-items: center;

				strong {
					margin-left: 5px;
					font-weight: 500;
				}
			}
		}
	}
</style>