<script>
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import { Container, Row, Col } from 'sveltestrap';
	import CartTable from '../../../../../lib/view/apps/ecommerce/CartTable.svelte';
	import OrderSummery from '../../../../../lib/view/apps/ecommerce/OrderSummery.svelte';

	const breadcrumbData = {
		pageTitle: 'Product Cart',
		bcItem: 'eCommerce',
		bcItemActive: 'Product Cart'
	};
</script>

<div class="crm mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
		</Row>
	</Container>

	<Container fluid>
		<div class="cartPage global-shadow pe-sm-30 ps-sm-30 p-15 py-sm-30 radius-xl w-100 mb-30">
			<Row>
				<Col lg={12} class="cus-xl-9 mb-30">
					<CartTable />
					<div class="product-cart__coupon">
						<input type="text" class="form-control  col-xl-4 col-md-6 " placeholder="Coupon code">
						<a href="#" class="btn btn-primary col-xl-3 col-lg-4 space-nowrap">Apply Coupon</a>
					</div>
				</Col>
				<Col md={12} class="cus-xl-3">
					<OrderSummery />
				</Col>
			</Row>
		</div>
	</Container>
</div>
<style lang="scss">
	:global{
		@import "../../../../../assets/sass/mixins/functions";
		@import "../../../../../assets/sass/mixins/rfs";
		@import "../../../../../assets/sass/mixins/media-queries";
		@import "../../../../../assets/sass/components/shop";
		@import "../../../../../assets/sass/components/cart";
	}
</style>