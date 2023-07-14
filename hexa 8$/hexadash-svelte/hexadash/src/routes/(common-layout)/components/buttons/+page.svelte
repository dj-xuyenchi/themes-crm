<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Buttons from '$lib/uiElements/Buttons.svelte';

	const breadcrumbData = {
		pageTitle: 'Buttons',
		bcItem: 'Dashboard',
		bcItemActive: 'Buttons'
	};
</script>

<svelte:head>
	<title>Buttons</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Buttons />
			</Col>
		</Row>
	</Container>
</div>
