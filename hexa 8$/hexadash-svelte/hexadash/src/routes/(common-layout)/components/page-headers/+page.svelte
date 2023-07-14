<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import PageHeaders from '$lib/uiElements/PageHeaders.svelte';

	const breadcrumbData = {
		pageTitle: 'Page Headers',
		bcItem: 'Dashboard',
		bcItemActive: 'Page Headers'
	};
</script>

<svelte:head>
	<title>Page Headers</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<PageHeaders />
			</Col>
		</Row>
	</Container>
</div>
