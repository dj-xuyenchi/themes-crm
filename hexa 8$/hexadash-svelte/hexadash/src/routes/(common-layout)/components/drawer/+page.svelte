<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Drawer from '$lib/uiElements/Drawer.svelte';

	const breadcrumbData = {
		pageTitle: 'Drawer',
		bcItem: 'Dashboard',
		bcItemActive: 'Drawer'
	};
</script>

<svelte:head>
	<title>Drawer</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Drawer />
		</Row>
	</Container>
</div>
