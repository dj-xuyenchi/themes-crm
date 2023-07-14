<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import BlogOne from '$lib/view/pages/BlogOne.svelte';

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
			<BlogOne />
		</Row>
	</Container>
</div>

<style lang="scss">
:global{
	@import "../../../../../assets/sass/pages/blog.scss";
}
</style>