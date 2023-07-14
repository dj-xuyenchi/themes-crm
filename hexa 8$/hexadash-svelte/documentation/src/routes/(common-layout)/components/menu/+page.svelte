<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Menu from '$lib/uiElements/Menu.svelte';

	const breadcrumbData = {
		pageTitle: 'Menu',
		bcItem: 'Dashboard',
		bcItemActive: 'Menu'
	};
</script>

<svelte:head>
	<title>Menu</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Menu />
		</Row>
	</Container>
</div>
