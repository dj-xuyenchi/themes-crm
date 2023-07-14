<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import recentDealsData from '@data/table-data.json';
	import RecentDeals from '@components/tables/RecentDeals.svelte';
	const deals = recentDealsData.recentDeal;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = deals[period];
	function changeData(data) {
		dataPeriod = deals[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25 pb-15 h-100">
	<CardHeader class="px-0 border-0">
		<h6>Recent Deals</h6>

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
		<RecentDeals {dataPeriod} />
	</CardBody>
</Card>
