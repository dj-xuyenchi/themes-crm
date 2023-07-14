<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import List from '$lib/uiElements/List.svelte';

	const breadcrumbData = {
		pageTitle: 'List',
		bcItem: 'Dashboard',
		bcItemActive: 'List'
	};
</script>

<svelte:head>
	<title>List</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<List />
			</Col>
		</Row>
	</Container>
</div>
