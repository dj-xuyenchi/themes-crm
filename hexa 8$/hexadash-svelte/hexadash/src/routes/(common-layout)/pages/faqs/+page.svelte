<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Faqs from '$lib/view/pages/Faqs.svelte';

	const breadcrumbData = {
		pageTitle: 'Frequently Asked Questions',
		bcItem: 'Pages',
		bcItemActive: "FAQ's"
	};
</script>

<svelte:head>
	<title>FAQ's</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Faqs />
		</Row>
	</Container>
</div>
