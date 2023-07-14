<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Dropdown from '$lib/uiElements/Dropdown.svelte';

	const breadcrumbData = {
		pageTitle: 'Dropdown',
		bcItem: 'Dashboard',
		bcItemActive: 'Dropdown'
	};
</script>

<svelte:head>
	<title>Dropdown</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Dropdown />
		</Row>
	</Container>
</div>
