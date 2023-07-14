<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import OverviewCards from '@components/cards/OverviewCards.svelte';
	import overviewCardData from '@data/overviewCard.json';
	import SalesRevenue from '@view/dashboard/demoTwo/SalesRevenue.svelte';
	import RevenueGenerated from '@view/dashboard/demoTwo/RevenueGenerated.svelte';
	import NewProducts from '@view/dashboard/demoTwo/NewProducts.svelte';
	import BestSellers from '@view/dashboard/demoTwo/BestSellers.svelte';

	const overviewDataSorted = overviewCardData.slice(0, 4);

	const breadcrumbData = {
		pageTitle: 'Demo Two',
		bcItem: 'Dashboard',
		bcItemActive: 'Demo Two'
	};
	let cardStyle = 'overview-card-shape';
</script>

<svelte:head>
	<title>Home Two</title>
</svelte:head>

<div class="demo2 mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			{#each overviewDataSorted as item}
				<Col xxl={3} sm={6} ssm={12} class="mb-25">
					<OverviewCards {...item} {cardStyle} />
				</Col>
			{/each}
			<Col xxl={6} class="mb-25">
				<SalesRevenue />
			</Col>
			<Col xxl={6} class="mb-25">
				<RevenueGenerated />
			</Col>
			<Col xxl={4} class="mb-25">
				<NewProducts />
			</Col>
			<Col xxl={8} class="mb-25">
				<BestSellers />
			</Col>
		</Row>
	</Container>
</div>
