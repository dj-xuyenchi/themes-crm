<script>
	import { Row, Col, Card, CardBody } from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
</script>

<div
	class="global-shadow wizard6 checkout-review border-light py-30 px-sm-50 px-20 bg-white radius-xl w-100 mb-30"
>
	<Row class="justify-content-center">
		<Col xl={8}>
			<div class="checkout-progress-indicator content-center">
				<div class="checkout-progress w-100">
					<div class="step completed" id="1">
						<span> <InlineSVG src={'/img/svg/user-success.svg'} /> </span>
						<span>Create Account</span>
					</div>
					<div class="current"><InlineSVG src={'/img/svg/green.svg'} /></div>
					<div class="step completed" id="2">
						<span> <InlineSVG src={'/img/svg/address-success.svg'} /> </span>
						<span>Shipping Address</span>
					</div>
					<div class="current"><InlineSVG src={'/img/svg/green.svg'} /></div>
					<div class="step completed" id="3">
						<span><InlineSVG src={'/img/svg/155-credit-card-success.svg'} /></span>
						<span>Payment Method</span>
					</div>
					<div class="current"><InlineSVG src={'/img/svg/green.svg'} /></div>
					<div class="step completed" id="4">
						<span><InlineSVG src={'/img/svg/024-like-success.svg'} /></span>
						<span>Review Order</span>
					</div>
				</div>
				<!-- End: .checkout-progress -->
			</div>

			<Card class="payment-status bg-normal p-sm-30 p-15">
				<CardBody class="bg-white bg-shadow radius-xl px-sm-30 py-sm-25 m-0 px-15 py-1">
					<div class="payment-status__area  py-sm-25 py-20 text-center">
						<div class="content-center">
							<span class="wh-34 bg-success rounded-circle content-center">
								<span class="las la-check fs-16 color-white" /></span
							>
						</div>
						<h4 class="fw-500 mt-20 mb-10">Payment Successful</h4>
						<span class="fs-15 color-gray">Thank you! We've received your payment.</span>
					</div>
				</CardBody>
			</Card>
		</Col>
	</Row>
</div>
