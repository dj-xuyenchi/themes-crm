<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Collpase from '$lib/uiElements/Collpase.svelte';

	const breadcrumbData = {
		pageTitle: 'Collapse',
		bcItem: 'Dashboard',
		bcItemActive: 'Collapse'
	};
</script>

<svelte:head>
	<title>Collapse</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Collpase />
			</Col>
		</Row>
	</Container>
</div>
