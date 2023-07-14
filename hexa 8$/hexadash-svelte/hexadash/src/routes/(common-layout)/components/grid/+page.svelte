<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Grid from '$lib/uiElements/Grid.svelte';

	const breadcrumbData = {
		pageTitle: 'Grid',
		bcItem: 'Dashboard',
		bcItemActive: 'Grid'
	};
</script>

<svelte:head>
	<title>Grid</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Grid />
		</Row>
	</Container>
</div>
