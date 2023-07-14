<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Switch from '$lib/uiElements/Switch.svelte';

	const breadcrumbData = {
		pageTitle: 'Switch',
		bcItem: 'Dashboard',
		bcItemActive: 'Switch'
	};
</script>

<svelte:head>
	<title>Switch</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Switch />
		</Row>
	</Container>
</div>
