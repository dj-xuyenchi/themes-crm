<script>
	import { onMount } from 'svelte';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import Chartjs from '@components/utilities/Chartjs.svelte';
	import { chartLinearGradient, customTooltips } from '@components/utilities/utilities';

	let innerWidth;
	let primaryColor;
	let primaryColorRGB;
	onMount(() => {
		innerWidth = window.innerWidth;
		primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
		primaryColorRGB = getComputedStyle(document.documentElement).getPropertyValue(
			'--color-primary-rgba'
		);
	});
	let revenue = 'months';
	let isLoading = false;

	const handleTabActivation = (value) => {
		isLoading = true;
		revenue = value;
		setTimeout(() => {
			isLoading = false;
		}, 100);
	};

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

	let salesRevenue = {
		today: {
			users: [0,10, 36, 25, 50, 40, 55, 40, 75, 35, 40, 35],
			labels: ['2hr', '4hr', '6hr', '8hr', '10hr', '12hr', '14hr', '16hr', '18hr', '20hr', '22hr', '24hr']
		},
		week: {
			users: [40, 30, 35, 20, 25, 40, 35],
			labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		},
		months: {
			users: [45, 20, 35, 32, 50, 45, 55, 71, 36, 65, 55, 75],
			labels: ['Jan', 'Feb', 'Mar', 'App', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec']
		}
	};
	$: salesRevenueDatasets = [
		{
			data: salesRevenue[revenue].users,
			borderColor: primaryColor,
			borderWidth: 3,
			fill: true,
			backgroundColor: () =>
				chartLinearGradient(document.getElementById('ninjadash-sales-revenue'), 300, {
					start: `rgba(${primaryColorRGB},0.5)`,
					end: 'rgba(255,255,255,0.4)'
				}),
			label: 'Current period',
			pointStyle: 'circle',
			pointRadius: '0',
			hoverRadius: '6',
			pointBorderColor: '#fff',
			pointBackgroundColor: primaryColor,
			hoverBorderWidth: 2,
			amount: '$7,596',
			amountClass: 'current-amount',
			lineTension: 0.5
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
				Min: 50,
				Max: 80,
				stepSize: 20,
				padding:15,
				callback(label) {
					return `${label}k`;
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
					family:"'Jost', sans-serif",
				},
				color: '#747474',
			}
		}
	};

	let tooltips = {
		custom: customTooltips,
		...tooltip
	};
</script>

<Card class="monthly-earning border-0 h-100">
	<CardHeader class="border-0">
		<h6>Monthly Earning</h6>
		<div class="card-extra">
			<ul class="card-tab-links nav">
				<li>
					<a
						on:click|preventDefault={() => {
							handleTabActivation('today');
						}}
						href={'#'}
						class={revenue === 'today' ? 'active' : ''}>Today</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							handleTabActivation('week');
						}}
						href={'#'}
						class={revenue === 'week' ? 'active' : ''}>Week</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							handleTabActivation('months');
						}}
						href={'#'}
						class={revenue === 'months' ? 'active' : ''}>Month</a
					>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody>
		<div class="wp-chart">
			{#if !isLoading}
				<div class="parentContainer">
					<Chartjs
						type="line"
						id="ninjadash-sales-revenue"
						className="ninjadash-sales-revenue"
						labels={salesRevenue[revenue].labels}
						datasets={salesRevenueDatasets}
						{scales}
						tooltip={tooltips}
						height={innerWidth < 1399 ? (innerWidth < 575 ? 200 : 100) : 108}
					/>
				</div>
			{:else}
				<div class="ninjadash-sales-revenue-loading"><a-spin /></div>
			{/if}
		</div>
	</CardBody>
</Card>

<style lang="scss">
	:global {
		@import '../../../../assets/sass/mixins/mixins.scss';
		.monthly-earning{
			.card-body{
				padding: 20px 25px 15px 10px;
				.chartLine-po-details__time{
					margin-bottom: 15px;
					@include ssm{
						margin-top: 10px;
					}
				}
			}
		}
	}
</style>
