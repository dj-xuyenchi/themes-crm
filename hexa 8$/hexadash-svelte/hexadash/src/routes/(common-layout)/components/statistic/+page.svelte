<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Stats from '$lib/uiElements/Stats.svelte';

	const breadcrumbData = {
		pageTitle: 'Stats',
		bcItem: 'Dashboard',
		bcItemActive: 'Stats'
	};
</script>

<svelte:head>
	<title>Stats</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Stats />
		</Row>
	</Container>
</div>
