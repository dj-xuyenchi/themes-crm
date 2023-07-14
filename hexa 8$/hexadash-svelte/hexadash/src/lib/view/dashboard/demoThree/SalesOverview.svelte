<script>
	import { onMount } from 'svelte';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import chartContent from '@data/dashboardChartContent.json';
	import DoughnutChart from '@components/utilities/DoughnutChart.svelte';

	let { SalesOverviewData } = chartContent;
	let labels = ['Revenue', 'Sales', 'Products'];

	let currentTab = 'today';
	let salesOverviewData = null;
	let totalSale = null;
	let isLoading = false;
	let height = 200;

	let handleTabActivation = (value) => {
		isLoading = true;
		currentTab = value;
		salesOverviewData = SalesOverviewData[currentTab];
		totalSale = salesOverviewData !== null && salesOverviewData.reduce((a, b) => a + b, 0);
		setTimeout(() => {
			isLoading = false;
		}, 0);
	};

	//colors
	let colorPrimary;
	let colorInfo;
	let colorWarning;

	onMount(() => {
		colorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
		colorInfo = getComputedStyle(document.documentElement).getPropertyValue('--color-info');
		colorWarning = getComputedStyle(document.documentElement).getPropertyValue('--color-warning');

		salesOverviewData = SalesOverviewData[currentTab];
		totalSale = SalesOverviewData[currentTab].reduce((a, b) => a + b, 0);
	});

	$: datasets = [
		{
			data: salesOverviewData,
			backgroundColor: [colorWarning, colorInfo, colorPrimary],
			centerText: '$7.9K',
			centerTextLabel: 'Revenue'
		}
	];

	$: style = [];

	const options = {
		cutout: 62,
		borderWidth: 2,
		maintainAspectRatio: false,
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

	const tooltip = {
		backgroundColor: '#FFF',
		titleFontSize: 16,
		titleFontColor: '#0066ff',
		bodyFontColor: '#000',
		bodyFontSize: 14,
		displayColors: false,

		callbacks: {
			title(t) {
				console.log(t);
			}
		}
	};
</script>

<Card class="border-0 h-100">
	{#if salesOverviewData !== null}
		<CardHeader>
			<h6>Sales Overview</h6>
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
							class={currentTab === 'month' ? 'active' : ''}>Month</a
						>
					</li>
				</ul>
			</div>
		</CardHeader>
		<CardBody class="py-30">
			<div class="device-pieChart-wrap position-relative">
				{#if !isLoading}
					<DoughnutChart
						type="doughnut"
						id="salesOverview"
						className="salesOverview"
						{labels}
						{datasets}
						{height}
						{options}
						{tooltip}
					/>
				{/if}
			</div>
			<div class="ninjadash-overview-percentage">
				{#each salesOverviewData as value, i}
					<div class="ninjadash-overview-percentage__item">
						<span
							class="ninjadash-overview-percentage__point"
							style={`background-color: ${datasets[0].backgroundColor[i]}`}
						/>
						<span class="ninjadash-overview-percentage__text"
							>{Math.round((value / totalSale) * 100)}%</span
						>
					</div>
				{/each}
			</div>

			<div class="ninjadash-overview-box align-center-v justify-content-between">
				{#each salesOverviewData as value, index}
					<div class="ninjadash-overview-box-item">
						<h4>{value.toLocaleString()}</h4>
						<p>{labels[index]}</p>
					</div>
				{/each}
			</div>
		</CardBody>
	{/if}
</Card>

<style lang="scss">
	.ninjadash-overview-percentage {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 12px;
		.ninjadash-overview-percentage__item {
			display: flex;
			align-items: center;
			margin: 15px;
		}
		.ninjadash-overview-percentage__point {
			display: block;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			margin-right: 5px;
			background-color: var(--color-primary);
			margin-top: -2px;
		}
		.ninjadash-overview-percentage__text {
			font-size: 15px;
			font-weight: 500;
			color: var(--color-dark);
		}
	}
	.card-body {
		padding: 30px 25px !important;
	}
	.ninjadash-overview-wrap {
		color: #333;
		canvas {
			margin: 0 auto;
			position: relative;
			z-index: 10;
		}
		&__inner {
			@media only screen and (max-width: 480px) {
				height: 150px !important;
			}
		}
	}
	.ninjadash-overview-box {
		margin-top: 10px;
		padding: 16.65px 32px;
		border-radius: 8px;
		background: var(--bg-normal);
		display: flex;
		flex-wrap: wrap;
		.ninjadash-overview-box-item {
			text-align: center;
			h4 {
				font-size: 18px;
				line-height: 1;
				font-weight: 600;
				margin-bottom: 6px;
				color: var(--color-dark);
			}
			p {
				margin-bottom: 0;
				font-size: 15px;
				line-height: 1.25;
				color: var(--color-gray);
			}
		}
	}
</style>
