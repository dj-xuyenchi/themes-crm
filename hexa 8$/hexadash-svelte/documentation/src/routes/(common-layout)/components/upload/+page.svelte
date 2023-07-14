<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Upload from '$lib/uiElements/Upload.svelte';

	const breadcrumbData = {
		pageTitle: 'Upload',
		bcItem: 'Dashboard',
		bcItemActive: 'Upload'
	};
</script>

<svelte:head>
	<title>Upload</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Upload />
		</Row>
	</Container>
</div>
