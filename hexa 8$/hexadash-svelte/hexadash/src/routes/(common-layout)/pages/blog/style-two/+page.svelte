<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import BlogTwo from '$lib/view/pages/BlogTwo.svelte';

	const breadcrumbData = {
		pageTitle: 'Blog',
		bcItem: 'Pages',
		bcItemActive: 'Blog'
	};
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="blog-page">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<BlogTwo />
		</Row>
	</Container>
</div>
