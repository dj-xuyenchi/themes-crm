<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Gallery from '$lib/view/pages/Gallery.svelte';

	const breadcrumbData = {
		pageTitle: 'Gallery',
		bcItem: 'Pages',
		bcItemActive: 'Gallery'
	};
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Gallery />
			</Col>
		</Row>
	</Container>
</div>
