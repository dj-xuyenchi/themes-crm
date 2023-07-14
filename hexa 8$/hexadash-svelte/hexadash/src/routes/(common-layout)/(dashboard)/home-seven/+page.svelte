<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import OverviewCards from '@components/cards/OverviewCards.svelte';
	import overviewCardData from '@data/overviewCardOld.json';
	import SalesRevenue from '@view/dashboard/demoSeven/SalesRevenue.svelte';
	import NewProducts from '@view/dashboard/demoSeven/NewProducts.svelte';
	import BestSellers from '@view/dashboard/demoSeven/BestSellers.svelte';
	import MemberProgress from '@view/dashboard/demoSeven/MemberProgressOld.svelte';

	const overviewDataSorted = overviewCardData.slice(0, 4);

	const breadcrumbData = {
		pageTitle: 'Demo Seven',
		bcItem: 'Dashboard',
		bcItemActive: 'Demo Seven'
	};
	let cardStyle = 'ap-po-details--two';
</script>

<svelte:head>
	<title>Home Seven</title>
</svelte:head>

<div class="demo2 mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			{#each overviewDataSorted as item}
				<Col xxl={3} sm={6} class="mb-25">
					<OverviewCards {...item} {cardStyle} />
				</Col>
			{/each}
			<Col xxl={6} class="mb-25">
				<SalesRevenue />
			</Col>
			<Col xxl={6} class="mb-25">
				<MemberProgress />
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
