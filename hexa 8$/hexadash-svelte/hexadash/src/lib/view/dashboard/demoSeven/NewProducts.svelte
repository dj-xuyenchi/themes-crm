<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import newProducts from '@data/table-data.json';
	import NewProducts from '@components/tables/NewProducts.svelte';
	const products = newProducts.newProduct;
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = products[period];
	function changeData(data) {
		dataPeriod = products[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25 new-products">
	<CardHeader class="px-0 border-0">
		<h6>New Products</h6>

		<div class="card-extra">
			<ul class="card-tab-links nav">
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('today');
						}}
						href={'#'}
						class={currentTab === 'today' ? 'active' : ''}>Today</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('week');
						}}
						href={'#'}
						class={currentTab === 'week' ? 'active' : ''}>Week</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('month');
						}}
						href={'#'}
						class={currentTab === 'month' ? 'active' : ''}>year</a
					>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody class="p-0">
		<NewProducts {dataPeriod} />
	</CardBody>
</Card>
<style lang="scss">
	:global{
		.new-products{
			.selling-table-wrap {
					table.table--default{
						tbody {
							td{
								font-weight: 400;
								font-size: 14px;
							}
						}
					}
				}
		}
	};
</style>