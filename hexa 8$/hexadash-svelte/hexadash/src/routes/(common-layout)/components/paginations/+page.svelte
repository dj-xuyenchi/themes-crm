<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Paginations from '$lib/uiElements/Paginations.svelte';

	const breadcrumbData = {
		pageTitle: 'Paginations',
		bcItem: 'Dashboard',
		bcItemActive: 'Paginations'
	};
</script>

<svelte:head>
	<title>Paginations</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Paginations />
			</Col>
		</Row>
	</Container>
</div>
