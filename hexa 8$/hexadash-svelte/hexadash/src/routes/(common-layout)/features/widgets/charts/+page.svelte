<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import TotalLineChart from '$lib/view/dashboard/demoOne/TotalLineChart.svelte';
	import SalesGrowth from '$lib/view/dashboard/demoOne/SalesGrowth.svelte';
	import SalesRevenue from '$lib/view/dashboard/demoTwo/SalesRevenue.svelte';
	import RevenueGenerated from '$lib/view/dashboard/demoTwo/RevenueGenerated.svelte';
	import ProfitGrowth from '$lib/view/dashboard/demoThree/ProfitGrowth.svelte';
	import SalesOverview from '$lib/view/dashboard/demoThree/SalesOverview.svelte';
	import PerformanceOverview from '$lib/view/dashboard/demoFour/PerformanceOverview.svelte';
	import UserOverview from '$lib/view/dashboard/demoFive/UserOverview.svelte';

	const breadcrumbData = {
		pageTitle: 'Charts',
		bcItem: 'Widgets',
		bcItemActive: 'Charts'
	};
</script>

<svelte:head>
	<title>Charts</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col xl={12} class="mb-25">
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={8} class="mb-25">
				<TotalLineChart />
			</Col>
			<Col xxl={4} class="mb-25">
				<SalesGrowth />
			</Col>
			<Col xxl={6} class="mb-25">
				<SalesRevenue />
			</Col>
			<Col xxl={6} class="mb-25">
				<div class="revenue-generated">
					<RevenueGenerated />
				</div>
			</Col>
			<Col xxl={6} class="mb-25">
				<ProfitGrowth />
			</Col>
			<Col xxl={6} class="mb-25">
				<SalesOverview />
			</Col>
			<Col xxl={4} class="mb-25">
				<PerformanceOverview />
			</Col>
			<Col xxl={8} class="mb-25">
				<UserOverview />
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global{
		@import '../../../../../../src/assets/sass/mixins/media-queries';
		.revenue-generated{
			.chart-content {
				.chart-content__details{
					flex-wrap: wrap;
					@include lg{
						gap: 15px;
					}
					@include sm{
						margin-top: 20px;
					}
					span.icon{
						width: 70px;
						height: 70px;
						margin:20px 15px 0 0;
						@include lg{
							width: 80px;
							height: 80px;
							margin: 0
						}
					}
				}
			}
		}
	}
</style>