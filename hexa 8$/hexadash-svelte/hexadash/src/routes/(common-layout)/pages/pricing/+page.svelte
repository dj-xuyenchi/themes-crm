<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Pricing from '$lib/view/pages/Pricing.svelte';

	const breadcrumbData = {
		pageTitle: 'Pricing Tables',
		bcItem: 'Pages',
		bcItemActive: 'Pricing'
	};
</script>

<svelte:head>
	<title>Pricing</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Pricing />
		</Row>
	</Container>
</div>
