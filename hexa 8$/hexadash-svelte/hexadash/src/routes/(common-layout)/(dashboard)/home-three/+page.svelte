<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import overviewCardData from '@data/overviewCard.json';
	import OverviewCards from '@view/dashboard/demoThree/OverviewCards.svelte';
	import MonthlyEarning from '@view/dashboard/demoThree/MonthlyEarning.svelte';
	import ProfitGrowth from '@view/dashboard/demoThree/ProfitGrowth.svelte';
	import ActiveUsers from '@view/dashboard/demoThree/ActiveUsers.svelte';
	import SalesOverview from '@view/dashboard/demoThree/SalesOverview.svelte';
	import TopProducts from '@view/dashboard/demoThree/TopProducts.svelte';
	import LatestTransection from '@view/dashboard/demoThree/LatestTransection.svelte';

	const overviewDataSorted = overviewCardData.slice(4, 8);

	const breadcrumbData = {
		pageTitle: 'Demo Three',
		bcItem: 'Dashboard',
		bcItemActive: 'Demo Three'
	};
</script>

<svelte:head>
	<title>Home Three</title>
</svelte:head>

<div class="demo3 mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={7} class="mb-25">
				<MonthlyEarning />
			</Col>
			<Col xxl={5} class="mb-25">
				<ProfitGrowth />
			</Col>
			<Col xxl={12} lg={6} class="mb-25">
				<div class="ap-po-details ap-po-details--3 h-100 radius-xl d-flex">
					{#each overviewDataSorted as item}
						<OverviewCards {...item} />
					{/each}
				</div>
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<SalesOverview />
			</Col>
			<Col xxl={4} class="mb-25">
				<TopProducts />
			</Col>
			<Col xxl={4} class="mb-25">
				<LatestTransection />
			</Col>
			<Col xxl={12} class="mb-25">
				<ActiveUsers />
			</Col>
		</Row>
	</Container>
</div>


