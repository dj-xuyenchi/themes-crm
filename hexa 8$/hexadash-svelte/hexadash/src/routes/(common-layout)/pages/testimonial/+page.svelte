<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Testimonial from '$lib/view/pages/Testimonial.svelte';

	const breadcrumbData = {
		pageTitle: 'Testimonial',
		bcItem: 'Pages',
		bcItemActive: 'Testimonial'
	};
</script>

<svelte:head>
	<title>Testimonial</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Testimonial />
			</Col>
		</Row>
	</Container>
</div>
