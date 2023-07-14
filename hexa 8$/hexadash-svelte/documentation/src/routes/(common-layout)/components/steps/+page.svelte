<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Steps from '$lib/uiElements/Steps.svelte';

	const breadcrumbData = {
		pageTitle: 'Steps',
		bcItem: 'Dashboard',
		bcItemActive: 'Steps'
	};
</script>

<svelte:head>
	<title>Steps</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Steps />
		</Row>
	</Container>
</div>
