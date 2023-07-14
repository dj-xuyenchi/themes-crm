<script>
	import { Container, Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import VectorMap from '@components/utilities/VectorMap.svelte';

	const breadcrumbData = {
		pageTitle: 'Vector Maps',
		bcItem: 'Features',
		bcItemActive: 'Vector Maps'
	};
</script>

<svelte:head>
	<title>Vector Map</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12} class="mb-25">
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12} class="mb-25">
				<Card>
					<CardHeader>
						<h6>Vector Map</h6>
					</CardHeader>
					<CardBody class="py-25">
						<div class="regions-svg">
							<VectorMap />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	@import '../../../../../../src/assets/sass/mixins/media-queries';
	.regions-svg {
		height: 500px;
		@include md{
			height: 300px;
		}
	}
</style>
