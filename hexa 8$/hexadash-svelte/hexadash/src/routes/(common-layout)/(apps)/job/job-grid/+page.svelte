<script>
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import JobsSidebar from '../../../../../lib/view/apps/job/JobSidebar.svelte';
	import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'sveltestrap';
	import JobToolBox from '../../../../../lib/components/job/JobToolBox.svelte';
	import ProductCard from '../../../../../lib/components/cards/JobCard.svelte';
	import PaginationBasic from '../../../../../lib/components/pagination/PaginationBasic.svelte';
	import { allProducts } from '../../../../../lib/store/JobStore.js';

	const breadcrumbData = {
		pageTitle: 'Grid View',
		bcItem: 'Dashboard',
		bcItemActive: 'Job'
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
			<Col lg={12}>
				<Row class="justify-content-center">
					<Col lg={8} md={10} sm={12} class="mb-50">
						<div class="search-style-2 global-shadow ">
							<form action="/" class="d-flex align-items-center">
								<div class="job-search">
									<i class="uil uil-search"></i>
									<input class="form-control border-0 box-shadow-none" type="search" placeholder="Job Title, skills, or company"
										aria-label="Search">
								</div>
								<div class="location-search">
									<i class="uil uil-map-marker"></i>
									<input class="form-control border-0 box-shadow-none" type="search" placeholder="Location"
										aria-label="Search">
								</div>
									<button class="btn btn-primary"><i class="uil uil-search"></i>search</button>
							</form>
						</div>
					</Col>
				</Row>
			</Col>
			<div class="columns-1 col-lg-8 col-sm-10">
				<JobsSidebar />
			</div>
			<div class="columns-2 col-sm-10">
				<JobToolBox {cardType} />
				<Row class="row product-page-list justify-content-center mt-25">
					{#each products as { name, img, subName, deadline, jobTime, salary }, i}
						<Col md={6} xs={12} class="mb-30 px-10">
							<ProductCard
								type="card"
								{img}
								{name}
								{subName}
								{deadline}
								{jobTime}
								{salary}
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
		@import '../../../../../assets/sass/components/job';
		@import '../../../../../assets/sass/components/ecommerce';
	}
</style>
