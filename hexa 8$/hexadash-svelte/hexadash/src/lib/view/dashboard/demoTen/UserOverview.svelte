<script>
	import { onMount } from 'svelte';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import Chartjs from '$lib/components/utilities/Chartjs.svelte';
	import chartData from '@data/dashboardChartContent.json';

	let { userOverviewData } = chartData;

	let isLoading = false;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = userOverviewData[period];
	function changeData(data) {
		isLoading = true;
		dataPeriod = userOverviewData[data];
		currentTab = data;
		setTimeout(() => {
			isLoading = false;
		}, 300);
	}

	let innerWidth;
	let colorPrimaryRGB;
	let colorInfoRGB;
	onMount(() => {
		innerWidth = window.innerWidth;
		colorPrimaryRGB = getComputedStyle(document.documentElement).getPropertyValue(
			'--color-primary-rgba'
		);
		colorInfoRGB = getComputedStyle(document.documentElement).getPropertyValue('--color-info-rgba');
	});

	const tooltip = {
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

	$: userOverviewDataset = [
		{
			data: userOverviewData[currentTab].target,
			backgroundColor: `rgba(${colorPrimaryRGB}, 0.5)`,
			hoverBackgroundColor: `rgb(${colorPrimaryRGB})`,
			label: 'Target',
			maxBarThickness: 10,
			barThickness: 12,
			total: '8,550',
			prefix: '$',
			growthRate: '25',
			growthStatus: 'up',
			borderRadius: 2,
			labelType: 'primary'
		},
		{
			data: userOverviewData[currentTab].gained,
			backgroundColor: `rgba(${colorInfoRGB}, 0.5)`,
			hoverBackgroundColor: `rgb(${colorInfoRGB})`,
			label: 'Gained',
			maxBarThickness: 10,
			barThickness: 12,
			total: '5,550',
			prefix: '$',
			growthRate: '15',
			growthStatus: 'down',
			borderRadius: 2,
			labelType: 'info'
		}
	];

	const scales = {
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
				max: Math.max(...userOverviewData[currentTab].gained),
				padding: 15,
				stepSize: Math.floor(Math.max(...userOverviewData[currentTab].gained) / 5),
				callback: function (value, index, ticks) {
					return value + 'k';
				}
			}
		},

		x: {
			grid: {
				display: true,
				zeroLineWidth: 0,
				drawTicks: true,
				drawBorder: false,
				zeroLineColor: '#E3E6EF',
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
</script>

<Card class="border-0 user-overview h-100">
	<CardHeader class="border-bottom-0">
		<h6>Users Overview</h6>
		<div class="card-extra">
			<ul class="card-tab-links nav">
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('today');
						}}
						href={'#'}
						class={currentTab === 'today' ? 'active' : ''}>Today</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('week');
						}}
						href={'#'}
						class={currentTab === 'week' ? 'active' : ''}>Week</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('month');
						}}
						href={'#'}
						class={currentTab === 'month' ? 'active' : ''}>year</a
					>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody>
		<div class="cashflow-chart">
			<div class="label-detailed">
				{#each userOverviewDataset as item}
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
			{#if !isLoading}
				<div class="parentContainer">
					<Chartjs
						className="userChart"
						id="userCharts"
						labels={userOverviewData[currentTab].labels}
						datasets={userOverviewDataset}
						type="bar"
						{tooltip}
						{scales}
						height={innerWidth < 1399 ? (innerWidth < 575 ? 200 : 120) : 104}
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
		.user-overview {
			.card-body {
				padding: 0 25px 22px 10px;
				margin-top: -25px;
			}
		}
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

		.label-detailed {
			display: flex;
			justify-content: center;
			margin: -3px -12px -5px;
			flex-wrap: wrap;
			@include xs {
				margin-top: 10px;
			}
			&__single {
				padding: 5px 8px;
				display: flex;
				align-items: center;
				span,
				strong {
					padding: 0 5px;
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
				img,
				svg {
					width: 10px;
					height: 10px;
					margin-left: 5px;
					+ strong {
						margin-left: 5px;
					}
				}
				i {
					font-size: 11px;
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
