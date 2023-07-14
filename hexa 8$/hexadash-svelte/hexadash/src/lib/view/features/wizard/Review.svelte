<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card, CardBody } from 'sveltestrap';

	function quantityDec() {
		const qtyInput = this.closest('.product-cart__quantity').querySelector('.qty');
		let qtyInputVal = qtyInput.value;
		if (qtyInputVal > 0) {
			qtyInput.value = qtyInputVal -= 1;
		}
	}
	function quantityInc() {
		const qtyInput = this.closest('.product-cart__quantity').querySelector('.qty');
		let qtyInputVal = qtyInput.value;
		if (qtyInputVal >= 0) {
			qtyInputVal++;
			qtyInput.value = qtyInputVal;
		}
	}
</script>

<div class="global-shadow wizard6 checkout-review pt-sm-50 px-20 p-20 bg-white w-100">
	<Row class="justify-content-center">
		<Col xl={8}>
			<div class="checkout-progress-indicator content-center">
				<div class="checkout-progress w-100">
					<div class="step completed" id="1">
						<span> <img class="svg" alt="" src={'/img/svg/user-success.svg'} /> </span>
						<span>Create Account</span>
					</div>
					<div class="current"><img class="svg" alt="" src={'/img/svg/green.svg'} /></div>
					<div class="step completed" id="2">
						<span> <img class="svg" alt="" src={'/img/svg/address-success.svg'} /> </span>
						<span>Shipping Address</span>
					</div>
					<div class="current"><img class="svg" alt="" src={'/img/svg/green.svg'} /></div>
					<div class="step completed" id="3">
						<span><img class="svg" alt="" src={'/img/svg/155-credit-card-success.svg'} /></span>
						<span>Payment Method</span>
					</div>
					<div class="current"><img class="svg" alt="" src={'/img/svg/checkoutin.svg'} /></div>
					<div class="step current" id="4">
						<span><img class="svg" alt="" src={'/img/svg/024-like-active.svg'} /></span>
						<span>Review Order</span>
					</div>
				</div>
			</div>
			<h4 class="fw-500 checkout-review-title">4. Review and confirm your order</h4>
			<Card class="review-order bg-normal p-sm-30 p-15">
				<CardBody class="mb-30 bg-white bg-shadow radius-xl px-sm-30 px-15 pt-25 mb-30">
					<div class="review-order__title mb-30">
						<h5 class="color-gray">Shipping Information</h5>
						<span class="color" />
						<button
							type="submit"
							class="border-0 review-order__title-btn shadow-none bg-transparent color-info content-center fs-14"
							><img class="svg" alt="" src={'/img/svg/edit.svg'} /> edit</button
						>
					</div>
					<div class="d-flex mb-10">
						<div class="radio-theme-default custom-radio   me-2">
							<input class="radio" type="radio" name="radio-vertical" value="0" id="radio-vl5" />
							<label for="radio-vl5">
								<span class="radio-text" />
								<div class="check-review__contact">
									<p>Ibn Adam <br /> Phone: +61412345678</p>
									<span>795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States</span>
								</div>
							</label>
						</div>
					</div>
					<button
						type="submit"
						class="border-0 review-order__title-btn shadow-none bg-transparent color-info content-center fs-13 fw-500 p-0"
						><img class="svg" alt="" src={'/img/svg/plus.svg'} /> Add new address</button
					>
				</CardBody>
				<CardBody class="mb-30 bg-white bg-shadow radius-xl px-sm-30 px-15 pt-25  mb-30">
					<div class="review-order__title mb-30">
						<h5 class="color-gray">Payment Method</h5>
						<span class="color" />
					</div>
					<div class="d-flex mb-20 align-items-center">
						<div class="radio-theme-default custom-radio   me-2">
							<input class="radio" type="radio" name="radio-vertical2" value="0" id="radio-vl6" />
							<label for="radio-vl6">
								<span class="radio-text" />
								<span class="review-order__method"
									><img src="/img/ms.png" alt="img" /> •••• •••• •••• 2527</span
								>
							</label>
						</div>
					</div>
					<button
						type="submit"
						class="border-0 review-order__title-btn shadow-none bg-transparent color-info content-center fs-13 fw-500 p-0"
						><img class="svg" alt="" src={'/img/svg/plus.svg'} /> Add new card
					</button>
				</CardBody>
				<CardBody class="bg-white bg-shadow radius-xl review-order-table p-sm-30 p-15 ">
					<div class="table-responsive">
						<table id="cart" class="table table-borderless mb-0">
							<tbody>
								<tr>
									<td class="Product-cart-title">
										<div class="media  align-items-center">
											<img class="me-3 wh-80 align-self-center" src="/img/review1.png" alt="" />
											<div class="media-body">
												<h5 class="mt-0">Fiber base chair</h5>
												<div class="d-flex">
													<p>Size:<span>large</span></p>
													<p>color:<span>brown</span></p>
												</div>
											</div>
										</div>
									</td>
									<td>
										<div class="quantity product-cart__quantity">
											<input
												type="button"
												value="-"
												class="qty-minus bttn bttn-left wh-36"
												on:click={quantityDec}
											/>
											<input type="number" value="1" class="qty qh-36 input" />
											<input
												type="button"
												value="+"
												class="qty-plus bttn bttn-right wh-36"
												on:click={quantityInc}
											/>
										</div>
									</td>
									<td class="subtotal">$743.30</td>
								</tr>
								<tr>
									<td class="Product-cart-title">
										<div class="media  align-items-center">
											<img class="me-3 wh-80 align-self-center" src="/img/review2.png" alt="" />
											<div class="media-body">
												<h5 class="mt-0">Fiber base chair</h5>
												<div class="d-flex">
													<p>Size:<span>large</span></p>
													<p>color:<span>brown</span></p>
												</div>
											</div>
										</div>
									</td>
									<td>
										<div class="quantity product-cart__quantity">
											<input
												type="button"
												value="-"
												class="qty-minus bttn bttn-left wh-36"
												on:click={quantityDec}
											/>
											<input type="number" value="1" class="qty qh-36 input" />
											<input
												type="button"
												value="+"
												class="qty-plus bttn bttn-right wh-36"
												on:click={quantityInc}
											/>
										</div>
									</td>
									<td class=" subtotal">$878.30</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td />
									<td colspan="2" class="order-summery">
										<div class="total">
											<div class="subtotalTotal">
												Subtotal:
												<span>$1,690.26</span>
											</div>
											<div class="shipping">
												Shipping charge:
												<span>$46.30</span>
											</div>
										</div>
										<div class="total-money d-flex justify-content-between align-items-center mt-1">
											<h6>Total :</h6>
											<h5 class="color-primary">$1738.60</h5>
										</div>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</CardBody>
			</Card>
		</Col>
	</Row>
</div>
