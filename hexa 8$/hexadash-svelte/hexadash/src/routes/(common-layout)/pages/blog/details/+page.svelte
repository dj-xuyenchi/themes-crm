<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import BlogDetails from '$lib/view/pages/BlogDetails.svelte';

	const breadcrumbData = {
		pageTitle: 'Blog Details',
		bcItem: 'Pages',
		bcItemActive: 'Blog'
	};
</script>

<svelte:head>
	<title>Blog Details</title>
</svelte:head>

<div class="blog-page2">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<BlogDetails />
		</Row>
	</Container>
</div>
