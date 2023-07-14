<script>
	import { Container, Row, Col, Button, Card, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import CreateAccount from '@view/features/wizard/CreateAccount.svelte';
	import Shipping from '@view/features/wizard/Shipping.svelte';
	import Payment from '@view/features/wizard/Payment.svelte';
	import Review from '@view/features/wizard/Review.svelte';
	import Success from '@view/features/wizard/Success.svelte';

	const breadcrumbData = {
		pageTitle: 'Wizard 1',
		bcItem: 'Wizards',
		bcItemActive: 'Wizard 1'
	};
	const wizardComponents = [CreateAccount, Shipping, Payment, Review, Success];
	const totalItems = wizardComponents.length;
	let activeIndex = 0;
	function nextIndex() {
		if (activeIndex < totalItems - 1) {
			activeIndex++;
		}
	}
	function prevIndex() {
		if (activeIndex <= totalItems && activeIndex > 0) {
			activeIndex--;
		}
	}
</script>

<svelte:head>
	<title>Wizard 1</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<svelte:component this={wizardComponents[activeIndex]} />
				{#if activeIndex !== totalItems - 1}
					<div class="bg-white px-20 px-sm-50 pb-sm-50 pb-30 border-radius-bottom">
						<Row class="justify-content-center">
							<div class="col-xl-{activeIndex === 3 ? 8 : 5}">
								<Card class="border-0">
									<CardBody>
										<div
											class="d-flex flex-wrap gap-10 {activeIndex > 0
												? 'justify-content-between'
												: 'justify-content-end'}"
										>
											{#if activeIndex > 0}
												<Button
													on:click={prevIndex}
													color="light"
													size="default"
													class="btn-squared text-capitalize btn-transparent-light fs-15"
													><i class="me-1 uil uil-arrow-left" /> Previous</Button
												>
											{/if}
											{#if activeIndex !== totalItems - 1}
												<div class="d-flex pt-0 mb-0 justify-content-end">
													<Button
														on:click={nextIndex}
														color="primary"
														size="default"
														class="btn-squared text-capitalize text-white fs-15"
														>Save & Next <i class="ms-1 me-0 uil uil-arrow-right" /></Button
													>
												</div>
											{/if}
										</div>
									</CardBody>
								</Card>
							</div>
						</Row>
					</div>
				{/if}
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import '../../../../../src/assets/sass/mixins/media-queries';
		@import '../../../../../src/assets/sass/mixins/functions';
		@import '../../../../../src/assets/sass/mixins/rfs';
		@import '../../../../../src/assets/sass/components/checkout';
		@import '../../../../../src/assets/sass/components/style.scss';
		@import '../../../../../src/assets/sass/components/cart.scss';
		@import '../../../../../src/assets/sass/components/shop.scss';
		@import '../../../../../src/assets/sass/components/select.scss';
	}
</style>
