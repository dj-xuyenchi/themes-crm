<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import OverviewCards from '@components/cards/OverviewCards.svelte';
	import overviewCardData from '@data/overviewCard.json';
	import TotalLineChart from '@view/dashboard/demoOne/TotalLineChart.svelte';
	import SalesGrowth from '@view/dashboard/demoOne/SalesGrowth.svelte';
	import SalesByLocation from '@view/dashboard/demoOne/SalesByLocation.svelte';
	import TopSellingProduct from '@view/dashboard/demoOne/TopSellingProduct.svelte';
	import BrowserState from '@view/dashboard/demoOne/BrowserState.svelte';

	const overviewDataSorted = overviewCardData.slice(0, 4);

	const breadcrumbData = {
		pageTitle: 'Demo One',
		bcItem: 'Dashboard',
		bcItemActive: 'Demo One'
	};
	let cardStyle = 'ap-po-details--two';
</script>

<svelte:head>
	<title>Home One</title>
</svelte:head>

<div class="crm mb-25">
	<Container fluid>
		<Row>
			<Col xxl={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={6}>
				<Row>
					{#each overviewDataSorted as item}
						<Col xxl={6} sm={6} ssm={12} class="mb-25">
							<OverviewCards {...item} {cardStyle} />
						</Col>
					{/each}
				</Row>
			</Col>
			<Col xxl={6} class="mb-25">
				<TotalLineChart />
			</Col>
			<Col xxl={4} class="mb-25">
				<SalesGrowth />
			</Col>
			<Col xxl={8} class="mb-25">
				<SalesByLocation />
			</Col>
			<Col xxl={6} lg={6} class="mb-25">
				<TopSellingProduct />
			</Col>
			<Col xxl={6} lg={6} class="mb-25">
				<BrowserState />
			</Col>
		</Row>
	</Container>
</div>
