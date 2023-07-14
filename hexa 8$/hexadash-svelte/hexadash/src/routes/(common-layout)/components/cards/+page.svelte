<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Cards from '$lib/uiElements/Cards.svelte';

	const breadcrumbData = {
		pageTitle: 'Cards',
		bcItem: 'Dashboard',
		bcItemActive: 'Cards'
	};
</script>

<svelte:head>
	<title>Cards</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Cards />
			</Col>
		</Row>
	</Container>
</div>
