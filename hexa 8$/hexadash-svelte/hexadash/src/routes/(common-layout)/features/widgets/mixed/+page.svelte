<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import OverviewCards from '@components/cards/OverviewCards.svelte';
	import overviewCardData from '@data/overviewCard.json';
	import SalesByLocation from '$lib/view/dashboard/demoOne/SalesByLocation.svelte';
	import TopProducts from '@view/dashboard/demoThree/TopProducts.svelte';
	import LatestTransection from '@view/dashboard/demoThree/LatestTransection.svelte';
	import MarketingCampaigns from '@view/dashboard/demoFour/MarketingCampaigns.svelte';
	import TeamList from '@view/dashboard/demoFour/TeamList.svelte';
	import Timeline from '@view/dashboard/demoFive/Timeline.svelte';

	const breadcrumbData = {
		pageTitle: 'Widget Mixed',
		bcItem: 'Widgets',
		bcItemActive: 'Widget Mixed'
	};
	const overviewDataSorted = overviewCardData.slice(0, 4);
	let cardStyle = 'ap-po-details--two';
</script>

<svelte:head>
	<title>Widget Mixed</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
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
				<TeamList />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<LatestTransection />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<TopProducts />
			</Col>
			<Col xxl={4}  lg={6} class="mb-25">
				<Timeline />
			</Col>
			<Col xxl={5}  lg={6} class="mb-25">
				<MarketingCampaigns />
			</Col>
			<Col xxl={7} class="mb-25">
				<SalesByLocation />
			</Col>
		</Row>
	</Container>
</div>
