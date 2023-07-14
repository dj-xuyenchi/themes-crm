<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import OverviewCards from '@components/cards/OverviewCards.svelte';
	import overviewCardData from '@data/overviewCard.json';
	import TotalLineChartMonth from '@view/dashboard/demoSix/TotalLineChartMonth.svelte';
	import TotalLineChartDay from '@view/dashboard/demoSix/TotalLineChartDay.svelte';
	import TotalLineChartYear from '@view/dashboard/demoSix/TotalLineChartYear.svelte';
	import SalesByLocation from '@view/dashboard/demoSix/SalesByLocation.svelte';
	import TopSellingProduct from '@view/dashboard/demoSix/TopSellingProduct.svelte';
	import BrowserState from '@view/dashboard/demoSix/BrowserState.svelte';
	import SalesOverview from '@view/dashboard/demoSix/SalesOverview.svelte';

	const overviewDataSorted = overviewCardData.slice(0, 4);

	const breadcrumbData = {
		pageTitle: 'Demo six',
		bcItem: 'Dashboard',
		bcItemActive: 'Demo six'
	};
	let cardStyle = 'ap-po-details--two';
</script>

<svelte:head>
	<title>Home Six</title>
</svelte:head>

<div class="crm mb-25">
	<Container fluid>
		<Row>
			<Col xxl={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={12}>
				<Row>
					{#each overviewDataSorted as item}
						<Col xxl={3} sm={6} class="mb-25">
							<OverviewCards {...item} {cardStyle} />
						</Col>
					{/each}
				</Row>
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<TotalLineChartMonth />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<TotalLineChartDay />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<TotalLineChartYear />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<SalesOverview />
			</Col>
			<Col xxl={8} class="mb-25">
				<SalesByLocation />
			</Col>
			<Col lg={6} class="mb-25">
				<TopSellingProduct />
			</Col>
			<Col lg={6} class="mb-25">
				<BrowserState />
			</Col>
		</Row>
	</Container>
</div>
