<script>
	import { onMount } from 'svelte';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import Chartjs from '@components/utilities/Chartjs.svelte';
	import totalEarningsData from '@data/TotalEarning.json';

	const earningsData = totalEarningsData[0];
	let innerWidth;
	onMount(() => {
		innerWidth = window.innerWidth;
	});

	const tooltip = {
		custom(tooltip) {
			if (!tooltip) return;
			// disable displaying the color box;
			tooltip.displayColors = false;
		},
		callbacks: {
			title(t) {
				const { label } = t[0];
				return `${label}`;
			},
			label(t) {
				const { formattedValue } = t;
				return `${earningsData.title}: $${formattedValue}k`;
			},
			labelColor() {
				return {
					backgroundColor: earningsData.lineColor,
					borderColor: 'transparent'
				};
			}
		}
	};

	$: datasets = [
		{
			data: earningsData.data,
			borderColor: earningsData.lineColor,
			borderWidth: 3,
			fill: false,
			pointBackgroundColor: '#FA8B0C',
			pointBorderColor: '#fff',
			pointHoverBorderColor: '#fff',
			pointBorderWidth: 0,
			pointHoverBorderWidth: 0,
			pointHoverRadius: 0,
			z: 5
		}
	];
</script>

<Card class="border-0 chartLine-po-details h-100">
	<CardHeader class="border-0 px-25 pt-25 pb-45">
		<div class="chartLine-po-details__overview-content w-100">
			<div class=" chartLine-po-details__content d-flex flex-wrap justify-content-between">
				<div class="chartLine-po-details__titlebar">
					<h1>Total {earningsData.title}</h1>
					<p>(Last {earningsData.period})</p>
				</div>
			</div>
			<div class="chartLine-po-details__time">
				<h5>${earningsData.total}</h5>
				<span class="color-success"
					><i class="fas fa-arrow-up" />
					<strong>{earningsData.statusRate}%</strong></span
				>
			</div>
		</div>
	</CardHeader>
	<CardBody class="pb-25">
		<div class="wp-chart">
			<div class="parentContainer">
				<Chartjs
					type="line"
					id="totalEarnings"
					className="totalEarnings"
					labels={earningsData.labels}
					{datasets}
					height={innerWidth <= 575 ? 280 : 173}
					{tooltip}
				/>
			</div>
		</div>
	</CardBody>
</Card>

<style lang="scss">
</style>
