<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Carousels from '$lib/uiElements/Carousels.svelte';

	const breadcrumbData = {
		pageTitle: 'Carousels',
		bcItem: 'Dashboard',
		bcItemActive: 'Carousels'
	};
</script>

<svelte:head>
	<title>Carousels</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Carousels />
			</Col>
		</Row>
	</Container>
</div>
