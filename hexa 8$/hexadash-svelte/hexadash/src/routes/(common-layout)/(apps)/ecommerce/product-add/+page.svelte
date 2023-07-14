<script>
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, InputGroup, InputGroupText, Input, Button, PaginationLink, } from 'sveltestrap';
	
    import { UploadIcon, Trash2Icon } from 'svelte-feather-icons';

	const breadcrumbData = {
		pageTitle: 'Add Product',
		bcItem: 'Dashboard',
		bcItemActive: 'Add Product'
	};

</script>

<Container fluid>
	<Row>
		<Col lg={12}>
			<BreadcrumbOne {...breadcrumbData} />
		</Col>

		<Col lg={12}>
			<div class="product-add global-shadow border-light-light px-sm-30 py-sm-50 px-0 py-20 bg-white radius-xl w-100 mb-40">
				<Row class="justify-content-center">
					<Col xxl={7} lg={10}>
						<div class="mx-sm-30 mx-20">
							<Form>
								<Card class="px-25 browser-states mb-30">
									<CardHeader>
										<h6 class="fw-500">About Product</h6>
									</CardHeader>
									<CardBody class="browser-states__body">
										
											<FormGroup class="form-group">
												<Label for="product-name">Product Name</Label>
												<Input type="text" name="name" id="product-name" placeholder="Ex: Gold Coin" />
											</FormGroup>
											<FormGroup class="form-group">
												<Label for="product-sub-text">Sub Text</Label>
												<Input type="text" name="name" id="product-sub-text" placeholder="Ex: Gold coin text" />
											</FormGroup>
											<FormGroup class="form-group">
												<Label for="product-category">Category</Label>
												<select name="category" id="product-category" class="form-control form-select">
													<option value="venu">Event</option>
													<option value="event">Venues</option>
												</select>
											</FormGroup>
											<FormGroup class="form-group quantity-appearance">
												<Label for="product-price">Price</Label>
												<InputGroup>
													<InputGroupText>$</InputGroupText>
													<Input placeholder="Price" min={0} max={100} type="number" id="product-price" step="1" />
												</InputGroup>
											</FormGroup>
											<FormGroup class="form-group quantity-appearance">
												<Label for="product-discount">Discount</Label>
												<InputGroup>
													<InputGroupText>%</InputGroupText>
													<Input placeholder="Discount" min={0} max={100} type="number" id="product-discount" step="1" />
												</InputGroup>
											</FormGroup>
											<FormGroup class="form-group status-radio browser-states-status-radio mb-20">
												<Label for="product-status mb-15">status</Label>
												<div class="radio-horizontal-list d-flex flex-wrap">
													<div class="radio-theme-default custom-radio">
														<input class="radio" type="radio" name="radio-optional" value="0" id="status-publish">
														<label for="status-publish"><span class="radio-text">Published</span></label>
													</div>
													<div class="radio-theme-default custom-radio">
														<input class="radio" type="radio" name="radio-optional" value="0" id="status-draft">
														<label for="status-draft"><span class="radio-text">Draft</span></label>
													</div>
												</div>
											</FormGroup>
											<FormGroup class="form-group">
												<Label for="meta-title">Product Description</Label>
												<textarea name="meta-title" class="form-control" placeholder="Ex: Product Description" ></textarea>
											</FormGroup>
											<FormGroup class="form-group">
												<Label for="meta-title">Meta Title</Label>
												<Input type="text" name="name" id="meta-title" placeholder="Ex: Title" />
											</FormGroup>
											<FormGroup class="form-group">
												<Label for="product-name">Meta Keyword</Label>
												<Input type="text" name="name" id="product-keyword" placeholder="Ex: Keyword" />
											</FormGroup>
										
									</CardBody>
								</Card>
								<Card class="px-25 browser-states">
									<CardHeader>
										<h6 class="fw-500">Product Image</h6>
									</CardHeader>
									<CardBody class="browser-states__body-img">
										<label for="product-img-upload" class="file-upload__label">
											<span class="upload-product-img px-10 d-block">
												<span class="file-upload">
													<UploadIcon />
												</span>
												<input type="text" id="product-img-upload" name="product-img-upload" class="file-upload__input">
												<span class="upload-title">Drag and drop an image</span>
												<span>or <a href="/" class="color-secondary">Browse</a> to choose a file</span>
											</span>
										</label>
										<div class="upload-product-media d-flex justify-content-between align-items-center mt-25">
											<div class="upload-media-area d-flex">
												<img src="/img/food-restaurant-media.png" alt="">
												<div class="upload-media-area__title d-flex flex-wrap align-items-center ms-10">
													<span class="media-content">
														<p>Product_image.jpg</p>
														<span>68.8 KB</span>
													</span>
													<div class="upload-media-area__btn">
														<button type="button" class="transparent rounded-circle wh-30 border-0 color-danger"><Trash2Icon /></button>
													</div>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
								<div class="button-group browser-states-btn d-flex justify-content-sm-end justify-content-center mt-40">
									<Button color="light" class="btn-squared fw-400 text-capitalize">Cancel</Button>
									<Button color="primary" class="btn-squared text-capitalize">save product</Button>
								</div>
							</Form>
						</div>
					</Col>			
				</Row>
			</div>
		</Col>
	</Row>
</Container>
<style lang="scss">
	:global{
		@import "../../../../../assets/sass/mixins/functions";
		@import "../../../../../assets/sass/mixins/rfs";
		@import "../../../../../assets/sass/mixins/media-queries";
		@import "../../../../../assets/sass/components/add-product";
	}
</style>