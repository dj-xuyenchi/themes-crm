<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Timelines from '$lib/uiElements/Timelines.svelte';

	const breadcrumbData = {
		pageTitle: 'Timeline',
		bcItem: 'Dashboard',
		bcItemActive: 'Timeline'
	};
</script>

<svelte:head>
	<title>Timeline</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Timelines />
		</Row>
	</Container>
</div>
