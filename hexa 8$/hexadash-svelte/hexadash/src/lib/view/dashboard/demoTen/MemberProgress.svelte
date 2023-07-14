<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import MembersProgress from '@components/tables/MembersProgress.svelte';
	import progressData from '@data/table-data.json';
	const membersProgress = progressData.memberProgressData;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = membersProgress[period];
	function changeData(data) {
		dataPeriod = membersProgress[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25 pb-15 h-100">
	<CardHeader class="px-0 border-0">
		<h6>Members Progress</h6>

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
		<MembersProgress {dataPeriod} />
	</CardBody>
</Card>
