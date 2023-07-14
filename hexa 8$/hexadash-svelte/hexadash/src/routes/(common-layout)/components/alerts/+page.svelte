<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Alerts from '$lib/uiElements/Alerts.svelte';

	const breadcrumbData = {
		pageTitle: 'Alerts',
		bcItem: 'UI Elements',
		bcItemActive: 'Alerts'
	};
</script>

<svelte:head>
	<title>Alerts</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Alerts />
			</Col>
		</Row>
	</Container>
</div>
