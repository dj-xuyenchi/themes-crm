<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import InputRadio from '$lib/uiElements/InputRadio.svelte';

	const breadcrumbData = {
		pageTitle: 'Radio',
		bcItem: 'Dashboard',
		bcItemActive: 'Radio'
	};
</script>

<svelte:head>
	<title>Radio</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<InputRadio />
		</Row>
	</Container>
</div>
