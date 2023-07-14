<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Modals from '$lib/uiElements/Modals.svelte';

	const breadcrumbData = {
		pageTitle: 'Modals',
		bcItem: 'Dashboard',
		bcItemActive: 'Modals'
	};
</script>

<svelte:head>
	<title>Modals</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Modals />
		</Row>
	</Container>
</div>
