<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Tabs from '$lib/uiElements/Tabs.svelte';

	const breadcrumbData = {
		pageTitle: 'Tabs',
		bcItem: 'Dashboard',
		bcItemActive: 'Tabs'
	};
</script>

<svelte:head>
	<title>Tabs</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Tabs />
		</Row>
	</Container>
</div>
