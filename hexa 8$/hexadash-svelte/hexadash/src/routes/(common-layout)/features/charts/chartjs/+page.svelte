<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Chartjs from '$lib/view/features/Chartjs.svelte';

	const breadcrumbData = {
		pageTitle: 'Chartjs',
		bcItem: 'Pages',
		bcItemActive: 'Chartjs'
	};
</script>

<svelte:head>
	<title>Chartjs</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Chartjs />
		</Row>
	</Container>
</div>
