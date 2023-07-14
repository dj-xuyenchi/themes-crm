<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import DraggableList from '$lib/uiElements/DraggableList.svelte';

	const breadcrumbData = {
		pageTitle: 'Draggable List',
		bcItem: 'Dashboard',
		bcItemActive: 'Draggable List'
	};
</script>

<svelte:head>
	<title>Draggable List</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<DraggableList />
			</Col>
		</Row>
	</Container>
</div>
