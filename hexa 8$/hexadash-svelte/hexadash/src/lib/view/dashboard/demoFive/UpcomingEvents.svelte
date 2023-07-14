<script>
	import { Card, CardBody, CardHeader } from 'sveltestrap';
	import Events from '@components/events/Events.svelte';
	import CardExtra from '@components/cards/CardExtra.svelte';
	import eventData from '@data/upcomingEvents.json';
	const upcomingEvents = eventData;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = upcomingEvents[period];
	function changeData(data) {
		dataPeriod = upcomingEvents[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25 pb-10 project-task-list--event">
	<CardHeader class="px-0 border-0">
		<h6>Upcoming Events</h6>
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
		<Events {dataPeriod} />
	</CardBody>
</Card>