<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import browserStates from '@data/dashboardChartContent.json';
	import BrowserState from '@components/tables/BrowserState.svelte';
	const browserStateData = browserStates.browserState;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = browserStateData[period];
	function changeData(data) {
		dataPeriod = browserStateData[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25 browser-states">
	<CardHeader class="px-0 border-0">
		<h6>Browser States</h6>

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
	<CardBody>
		<BrowserState {dataPeriod} />
	</CardBody>
</Card>
