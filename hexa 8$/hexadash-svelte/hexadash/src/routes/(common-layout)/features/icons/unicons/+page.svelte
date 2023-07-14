<script>
	import { Container, Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import icons from '@data/icons.json';

	const unicons = icons.unicons;

	const breadcrumbData = {
		pageTitle: 'Unicon Icons',
		bcItem: 'Icons',
		bcItemActive: 'Unicon Icons'
	};
</script>

<svelte:head>
	<title>Unicon Icons</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12} class="mb-25">
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Card class="card-default card-md mb-4">
					<CardHeader>
						<h6>Simply beautiful open source icons</h6>
					</CardHeader>
					<CardBody>
						<Row class="icon-list">
							{#each unicons as icon}
								<Col lg={3}>
									<i class="uil uil-{icon}" />
									<span class="icon-text">{icon}</span>
								</Col>
							{/each}
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
