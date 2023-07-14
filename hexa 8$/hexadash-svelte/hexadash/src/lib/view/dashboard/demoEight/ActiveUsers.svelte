<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import usersData from '@data/table-data.json';
	import ActiveUsers from '@components/tables/ActiveUsers.svelte';
	let users = usersData.activeUserDataOld;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = users[period];
	function changeData(data) {
		dataPeriod = users[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25 total-active-user h-100">
	<CardHeader class="px-0 border-0">
		<h6>Active Users</h6>
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
	<CardBody class="p-0">
		<ActiveUsers {dataPeriod} />
	</CardBody>
</Card>
