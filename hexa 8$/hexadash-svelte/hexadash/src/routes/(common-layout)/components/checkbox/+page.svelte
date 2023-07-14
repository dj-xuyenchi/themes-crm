<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Checkboxes from '$lib/uiElements/Checkboxes.svelte';

	const breadcrumbData = {
		pageTitle: 'Checkbox',
		bcItem: 'Dashboard',
		bcItemActive: 'Checkbox'
	};
</script>

<svelte:head>
	<title>Checkbox</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Checkboxes />
			</Col>
		</Row>
	</Container>
</div>
