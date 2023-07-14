<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '@components/cards/CardExtra.svelte';
	import topSaleData from '@data/dashboardChartContent.json';
	import TopSellingProduct from '@components/tables/TopSellingProduct.svelte';
	const topSales = topSaleData.topSale;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = topSales[period];
	function changeData(data) {
		dataPeriod = topSales[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25 top-selling-product">
	<CardHeader class="px-0 border-0">
		<h6>Top Selling Products</h6>

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
						class={currentTab === 'month' ? 'active' : ''}>Month</a
					>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody class="">
		<TopSellingProduct {dataPeriod} />
	</CardBody>
</Card>
