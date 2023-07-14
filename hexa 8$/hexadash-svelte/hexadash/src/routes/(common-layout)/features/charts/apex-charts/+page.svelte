<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import ApexCharts from '$lib/view/features/ApexCharts.svelte';

	const breadcrumbData = {
		pageTitle: 'Apex Charts',
		bcItem: 'Features',
		bcItemActive: 'Apex Charts'
	};
</script>

<svelte:head>
	<title>Apex Charts</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<ApexCharts />
		</Row>
	</Container>
</div>
