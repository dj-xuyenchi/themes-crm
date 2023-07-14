<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import MembersProgress from '@components/tables/MembersProgress-3.svelte';
	import progressData from '@data/table-data.json';
	import CardExtra from '$lib/components/cards/CardExtra.svelte';
	const membersProgress = progressData.memberProgressData_3;
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
		<h6>Social Media Traffic</h6>
		<CardExtra />
	</CardHeader>
	<CardBody class="p-0">
		<MembersProgress {dataPeriod} />
	</CardBody>
</Card>
