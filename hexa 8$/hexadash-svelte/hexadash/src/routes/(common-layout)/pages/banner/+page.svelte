<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Banner from '$lib/view/pages/Banner.svelte';

	const breadcrumbData = {
		pageTitle: 'Banner',
		bcItem: 'Pages',
		bcItemActive: 'Banner'
	};
</script>

<svelte:head>
	<title>Banner</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Banner />
		</Row>
	</Container>
</div>
