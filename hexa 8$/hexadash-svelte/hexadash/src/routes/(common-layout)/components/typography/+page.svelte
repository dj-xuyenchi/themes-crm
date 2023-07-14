<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Typography from '$lib/uiElements/Typography.svelte';

	const breadcrumbData = {
		pageTitle: 'Typography',
		bcItem: 'Dashboard',
		bcItemActive: 'Typography'
	};
</script>

<svelte:head>
	<title>Typography</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={9} class={['offset-lg-1']}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={9} class={['offset-lg-1']}>
				<Typography />
			</Col>
		</Row>
	</Container>
</div>
