<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Import from '@apps/import/Import.svelte';

	const breadcrumbData = {
		pageTitle: 'Import',
		bcItem: 'Home',
		bcItem2: 'App',
		bcItemActive: 'Import'
	};
</script>

<svelte:head>
	<title>Import</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Import />
			</Col>
		</Row>
	</Container>
</div>
