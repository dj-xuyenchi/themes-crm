<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Skeleton from '$lib/uiElements/Skeleton.svelte';

	const breadcrumbData = {
		pageTitle: 'Skeleton',
		bcItem: 'Dashboard',
		bcItemActive: 'Skeleton'
	};
</script>

<svelte:head>
	<title>Skeleton</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={6}>
				<Skeleton />
			</Col>
		</Row>
	</Container>
</div>
