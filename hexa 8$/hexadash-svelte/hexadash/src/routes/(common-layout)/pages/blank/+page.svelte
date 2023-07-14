<script>
	import { Container, Row, Col, Card, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	const breadcrumbData = {
		pageTitle: 'Starter',
		bcItem: 'Pages',
		bcItemActive: 'Starter'
	};
</script>

<svelte:head>
	<title>Starter</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Card>
					<CardBody>
						<p class="color-dark fw-500 fs-20 mb-0">Skeleton Page</p>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
