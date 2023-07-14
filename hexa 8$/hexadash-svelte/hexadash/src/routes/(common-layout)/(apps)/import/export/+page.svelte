<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Export from '@apps/import/Export.svelte';

	const breadcrumbData = {
		pageTitle: 'Export',
		bcItem: 'Home',
		bcItem2: 'App',
		bcItemActive: 'Export'
	};
</script>

<svelte:head>
	<title>Export</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Export />
			</Col>
		</Row>
	</Container>
</div>
