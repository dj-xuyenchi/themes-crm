<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Empty from '$lib/uiElements/Empty.svelte';

	const breadcrumbData = {
		pageTitle: 'Empty',
		bcItem: 'Dashboard',
		bcItemActive: 'Empty'
	};
</script>

<svelte:head>
	<title>Empty</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Empty />
		</Row>
	</Container>
</div>
