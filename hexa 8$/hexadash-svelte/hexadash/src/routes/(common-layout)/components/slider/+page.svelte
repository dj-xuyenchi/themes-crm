<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Sliders from '$lib/uiElements/Sliders.svelte';

	const breadcrumbData = {
		pageTitle: 'Range Slider',
		bcItem: 'Dashboard',
		bcItemActive: 'Range Slider'
	};
</script>

<svelte:head>
	<title>Range Slider</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Sliders />
		</Row>
	</Container>
</div>
