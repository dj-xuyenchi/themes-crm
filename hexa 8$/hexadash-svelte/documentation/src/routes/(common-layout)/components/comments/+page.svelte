<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Comments from '$lib/uiElements/Comments.svelte';

	const breadcrumbData = {
		pageTitle: 'Comments',
		bcItem: 'Dashboard',
		bcItemActive: 'Comments'
	};
</script>

<svelte:head>
	<title>Comments</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Comments />
		</Row>
	</Container>
</div>
