<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Datepicker from '$lib/uiElements/Datepicker.svelte';

	const breadcrumbData = {
		pageTitle: 'Datepicker',
		bcItem: 'Dashboard',
		bcItemActive: 'Datepicker'
	};
</script>

<svelte:head>
	<title>Datepicker</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Datepicker />
		</Row>
	</Container>
</div>
