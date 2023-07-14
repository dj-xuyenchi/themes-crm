<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	const breadcrumbData = {
		pageTitle: 'Month',
		bcItem: 'Apps',
		bcItemActive: 'Month'
	};
</script>

<svelte:head>
	<title>Calendar</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
		</Row>
	</Container>
</div>
