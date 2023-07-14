<script>
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import EcomerceSidebar from '../../../../../lib/view/apps/ecommerce/EcomerceSidebar.svelte';
	import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'sveltestrap';
	import EcomerceContent from '../../../../../lib/view/apps/ecommerce/EcomerceProducts.svelte';
	import EcomerceToolBox from '../../../../../lib/components/toolbox/EcomerceToolBox.svelte';
	import ProductCard from '../../../../../lib/components/cards/ProductCard.svelte';
	import PaginationBasic from '../../../../../lib/components/pagination/PaginationBasic.svelte';
	import { allProducts } from '../../../../../lib/store/productStore.js';

	const breadcrumbData = {
		pageTitle: 'Product',
		bcItem: 'Dashboard',
		bcItemActive: 'Product'
	};

	const products = $allProducts;
	let cardType = 'card';
</script>

<div class="products_page product_page--grid mb-30">
	<Container fluid>
		<Row class="justify-content-center">
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<div class="columns-1 col-lg-8 col-sm-10">
				<EcomerceSidebar />
			</div>
			<div class="columns-2 col-sm-10">
				<EcomerceToolBox {cardType} />
				<Row class="row product-page-list justify-content-center mt-25">
					{#each products as { name, img, rate, price, oldPrice, stared, unread }, i}
						<Col xxl={3} md={6} xs={12} class="mb-30 px-10">
							<ProductCard
								type="card"
								{name}
								image={img}
								rating={rate}
								regularPrice={price}
								{oldPrice}
							/>
						</Col>
					{/each}
				</Row>
				<Row cols={12}>
					<Col>
						<div class="product-pagination">
							<PaginationBasic pageDropdown={true} />
						</div>
					</Col>
				</Row>
			</div>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import '../../../../../assets/sass/mixins/functions';
		@import '../../../../../assets/sass/mixins/rfs';
		@import '../../../../../assets/sass/mixins/media-queries';
		@import '../../../../../assets/sass/components/users';
		@import '../../../../../assets/sass/components/shop';
		@import '../../../../../assets/sass/components/ecommerce';
	}
</style>
