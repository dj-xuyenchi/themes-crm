<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Calendar from '@view/apps/calendar/CalendarDay.svelte';

	const breadcrumbData = {
		pageTitle: 'Day',
		bcItem: 'Apps',
		bcItemActive: 'Day'
	};
</script>

<svelte:head>
	<title>Calendar</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col>
				<Calendar />
			</Col>
		</Row>
	</Container>

</div>
