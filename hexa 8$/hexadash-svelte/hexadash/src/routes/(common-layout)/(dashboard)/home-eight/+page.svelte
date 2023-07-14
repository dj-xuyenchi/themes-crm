<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import overviewCardData from '@data/overviewCardOld.json';
	import OverviewCards from '@view/dashboard/demoEight/OverviewCards.svelte';
	import MonthlyEarning from '@view/dashboard/demoEight/MonthlyEarning.svelte';
	import ProfitGrowth from '@view/dashboard/demoEight/ProfitGrowth.svelte';
	import TotalLineChartMonth from '@view/dashboard/demoEight/TotalLineChartMonth.svelte';
	import ActiveUsers from '@view/dashboard/demoEight/ActiveUsers.svelte';
	import SalesOverview from '@view/dashboard/demoEight/SalesOverview.svelte';
	import TopProducts from '@view/dashboard/demoEight/TopProducts.svelte';
	import NewProducts from '@view/dashboard/demoEight/NewProducts.svelte';


	const overviewDataSorted = overviewCardData.slice(4, 8);

	const breadcrumbData = {
		pageTitle: 'Demo Eight',
		bcItem: 'Dashboard',
		bcItemActive: 'Demo Eight'
	};
</script>

<svelte:head>
	<title>Home Eight</title>
</svelte:head>

<div class="demo3 mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={12} lg={6} class="mb-25">
				<div class="ap-po-details ap-po-details--3 new h-100 radius-xl d-flex">
					{#each overviewDataSorted as item}
						<OverviewCards {...item} />
					{/each}
				</div>
			</Col>
			<Col xxl={7} class="mb-25">
				<MonthlyEarning />
			</Col>
			<Col xxl={5} class="mb-25">
				<ProfitGrowth />
			</Col>
			<Col xxl={4} class="mb-25">
			<TotalLineChartMonth />
			</Col>
			<Col xxl={8} class="mb-25">
				<ActiveUsers />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<SalesOverview />
			</Col>
			<Col xxl={4} class="mb-25">
				<TopProducts />
			</Col>
			<Col xxl={4} class="mb-25">
				<NewProducts />
			</Col>
		</Row>
	</Container>
</div>


<style>

</style>