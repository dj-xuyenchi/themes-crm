<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '@components/cards/CardExtra.svelte';
	import salesData from '@data/salesData.json';
	import ProgressCircle from '@components/others/ProgressCircle.svelte';
</script>

<Card class="revenueChartTwo border-0">
	<CardHeader>
		<h6>Sales Overview</h6>
		<CardExtra />
	</CardHeader>
	<CardBody class="px-sm-50 pb-sm-30 pt-sm-25 px-30 pb-30 pt-25">
		<div class="d-flex justify-content-center">
			<ProgressCircle />
		</div>
		<div class="sales-target d-flex justify-content-around">
			{#each salesData as item}
				<div class="sales-target__single">
					<span>{item.status}</span>
					<h3>{item.salesCount}</h3>
				</div>
			{/each}
		</div>
	</CardBody>
</Card>

<style lang="scss">
	@import '../../../../assets/sass/mixins/functions';
	.sales-target {
		&__single {
			font-size: 16px;
			line-height: lh(16px, 27px);
			font-weight: 400;
			color: var(--color-gray-x);
			h3 {
				margin-top: 3px;
			}
		}
	}
</style>
