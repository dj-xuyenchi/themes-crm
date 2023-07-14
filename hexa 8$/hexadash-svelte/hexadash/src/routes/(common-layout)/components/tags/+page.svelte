<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Tags from '$lib/uiElements/Tags.svelte';

	const breadcrumbData = {
		pageTitle: 'Tags',
		bcItem: 'Dashboard',
		bcItemActive: 'Tags'
	};
</script>

<svelte:head>
	<title>Tags</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Tags />
		</Row>
	</Container>
</div>
