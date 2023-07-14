<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Ratings from '$lib/uiElements/Ratings.svelte';

	const breadcrumbData = {
		pageTitle: 'Rate',
		bcItem: 'Dashboard',
		bcItemActive: 'Rate'
	};
</script>

<svelte:head>
	<title>Rate</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Ratings />
		</Row>
	</Container>
</div>
