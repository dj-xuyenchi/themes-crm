<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import sellersData from '@data/table-data.json';
	import Sellers from '$lib/components/tables/Sellers.svelte';
	const sellers = sellersData.bestSeller;
	let tableHead = false;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = sellers[period];
	function changeData(data) {
		dataPeriod = sellers[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25">
	<CardHeader class="px-0 border-0">
		<h6>Recent Sellers</h6>

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
						class={currentTab === 'month' ? 'active' : ''}>Year</a
					>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody class="p-0">
		<Sellers {dataPeriod} {tableHead} />
	</CardBody>
</Card>
