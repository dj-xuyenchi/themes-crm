<script>
	import { onMount } from 'svelte';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import Chartjs from '@components/utilities/Chartjs.svelte';

	let isLoading = false;
	let currentTab = 'today';

	const handleTabActivation = (value) => {
		isLoading = true;
		currentTab = value;
		setTimeout(() => {
			isLoading = false;
		}, 100);
	};

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

	let salesGrowths = {
		today: {
			labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
			orders: [35, 55, 25, 60, 42, 80, 35],
			sales: [10, 30, 8, 30, 22, 38, 45]
		},
		week: {
			labels: ['1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8'],
			orders: [12, 34, 76, 23, 48, 34, 78],
			sales: [34, 25, 34, 8, 45, 65, 18]
		},
		month: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
			orders: [53, 55, 52, 6, 24, 8, 56],
			sales: [16, 54, 80, 37, 76, 78, 54]
		}
	};

	$: salesGrowthset = [
		{
			data: salesGrowths[currentTab].orders,
			backgroundColor: `rgba(${primaryColorRGB},0.5)`,
			hoverBackgroundColor: primaryColor,
			label: 'Target',
			total: '8,550',
			prefix: '$',
			growthRate: '25',
			growthStatus: 'up',
			labelType: 'primary',
			maxBarThickness: 10,
			barThickness: 12
		},
		{
			data: salesGrowths[currentTab].sales,
			backgroundColor: `rgba(${infoColorRGB},0.5)`,
			hoverBackgroundColor: infoColor,
			label: 'Total Sales',
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
				max: Math.max(...salesGrowths[currentTab].sales),
				stepSize: 20,
				padding: 15,
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

	$: responsive = [];
</script>

<Card class="border-0 cashflowChart2">
	<CardHeader class="border-0 px-25">
		<h6>Sales Growth</h6>
		<div class="card-extra">
			<ul class="card-tab-links nav">
				<li>
					<a
						on:click|preventDefault={() => {
							handleTabActivation('today');
						}}
						href={'#'}
						class={currentTab === 'today' ? 'active' : ''}>Today</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							handleTabActivation('week');
						}}
						href={'#'}
						class={currentTab === 'week' ? 'active' : ''}>Week</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							handleTabActivation('month');
						}}
						href={'#'}
						class={currentTab === 'month' ? 'active' : ''}>year</a
					>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody class="">
		<div class="cashflow-chart">
			<div class="label-detailed label-detailed--two">
				{#each salesGrowthset as item}
					<div class="label-detailed__single">
						<!-- <span class="label-detailed__type">{item.label}</span> -->
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
						className="salesChart"
						id="salesCharts"
						labels={salesGrowths[currentTab].labels}
						datasets={salesGrowthset}
						type="bar"
						{tooltip}
						{scales}
						{responsive}
						height={innerWidth < 1399 ? (innerWidth < 575 ? 200 : 100) : 188}
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
	:global {
		.cashflowChart2 {
			height: 100%;
			.card-body {
				padding: 0 25px 27px 10px;
			}
		}
	}
	.label-detailed {
		display: flex;
		justify-content: center;
		margin: -3px -12px 15px;
		flex-wrap: wrap;
		&__single {
			padding: 5px 8px;
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
			font-size: 18px;
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
		&--two {
			margin: 0px 0px 0px;
			.label-detailed__type {
				&::before {
					content: none;
				}
			}
			.label-detailed__single {
				margin-bottom: 4px;
			}
		}
	}
</style>
