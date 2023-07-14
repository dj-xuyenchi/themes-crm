<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Breadcrumbs from '$lib/uiElements/Breadcrumbs.svelte';

	const breadcrumbData = {
		pageTitle: 'Breadcrumbs',
		bcItem: 'Dashboard',
		bcItemActive: 'Breadcrumbs'
	};
</script>

<svelte:head>
	<title>Breadcrumbs</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Breadcrumbs />
			</Col>
		</Row>
	</Container>
</div>
