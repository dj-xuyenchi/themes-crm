<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import topProductsData from '@data/table-data.json';
	import TopProducts from '@components/tables/TopProducts.svelte';
	const products = topProductsData.topProduct;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = products[period];
	function changeData(data) {
		dataPeriod = products[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25 pb-15 h-100">
	<CardHeader class="px-0 border-0">
		<h6>Top Products</h6>
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
	<CardBody class="p-0">
		<TopProducts {dataPeriod} />
	</CardBody>
</Card>
