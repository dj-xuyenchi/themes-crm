<script>
	import { Card, CardHeader, CardBody, Row, Col } from 'sveltestrap';
	import CardExtra from '@components/cards/CardExtra.svelte';
	import SalesByLocation from '@components/tables/SalesByLocation.svelte';
	import VectorMap from '@components/utilities/VectorMap.svelte';
	import salesData from '@data/salesByLocation.json';
	let dataPeriod;
	let currentTab = 'today';
	function changeData(data) {
		dataPeriod = salesData[data];
		currentTab = data;
	}
	changeData('today');
</script>

<Card class="border-0 sales-location h-100">
	<CardHeader>
		<h6>Sales by Location</h6>

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
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('year');
						}}
						href={'#'}
						class={currentTab === 'year' ? 'active' : ''}>Year</a
					>
				</li>
			</ul>
			<CardExtra />
		</div>
	</CardHeader>
	<CardBody>
		<Row>
			<Col md={6}>
				<SalesByLocation {dataPeriod} />
			</Col>
			<Col md={6} class="d-flex align-items-center justify-content-center">
				<div class="regions-svg">
					<VectorMap />
				</div>
			</Col>
		</Row>
	</CardBody>
</Card>
