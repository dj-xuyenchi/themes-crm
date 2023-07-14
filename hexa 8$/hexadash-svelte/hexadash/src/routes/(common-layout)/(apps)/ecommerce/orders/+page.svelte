<script>
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import PaginationBasic from '$lib/components/pagination/PaginationBasic.svelte';
	import { Container, Row, Col } from 'sveltestrap';
	import OrdersTable from '../../../../../lib/view/apps/ecommerce/OrdersTable.svelte';
	import TableToolbox from '../../../../../lib/components/toolbox/TableToolbox.svelte';

	const breadcrumbData = {
		pageTitle: 'Order',
		bcItem: 'eCommerce',
		bcItemActive: 'Order'
	};
</script>

<Container fluid>
	<Row>
		<Col lg={12}>
			<BreadcrumbOne {...breadcrumbData} />
		</Col>
	</Row>
</Container>

<Container fluid>
	<div class="orderPage mb-30">
		<Row>
			<Col lg={12}>
				<div class="orderDatatable py-30 px-sm-30 px-20 radius-xl w-100 mb-30 border-0">
					<TableToolbox filtering={true} buttonText="Order" />

					<OrdersTable />

					<PaginationBasic pageDropdown={true} />
				</div>
			</Col>
		</Row>
	</div>
</Container>

<style lang="scss">
	:global {
		@import '../../../../../assets/sass/mixins/functions';
		@import '../../../../../assets/sass/mixins/rfs';
		@import '../../../../../assets/sass/mixins/media-queries';
		@import '../../../../../assets/sass/components/table';
		@import '../../../../../assets/sass/components/cart';
	}
</style>
