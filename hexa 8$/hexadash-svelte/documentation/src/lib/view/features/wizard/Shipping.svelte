<script>
	import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label } from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
</script>

<div
	class="checkout wizard6 global-shadow border-0 px-sm-50 px-20 pt-sm-50 py-30 bg-white radius-xl w-100"
>
	<Row class="justify-content-center">
		<Col xl={8}>
			<div class="checkout-progress-indicator px-15 content-center">
				<div class="checkout-progress">
					<div class="step completed" id="1">
						<span> <InlineSVG src={'/img/svg/user-success.svg'} /> </span>
						<span>Create Account</span>
					</div>
					<div class="current"><InlineSVG src={'/img/svg/checkoutin.svg'} /></div>
					<div class="step current" id="2">
						<span> <InlineSVG src={'/img/svg/adress-active.svg'} /> </span>
						<span>Shipping Address</span>
					</div>
					<div class="current"><InlineSVG src={'/img/svg/checkout.svg'} /></div>
					<div class="step" id="3">
						<span><InlineSVG src={'/img/svg/155-credit-card.svg'} /></span>
						<span>Payment Method</span>
					</div>
					<div class="current"><InlineSVG src={'/img/svg/checkout.svg'} /></div>
					<div class="step" id="4">
						<span><InlineSVG src={'/img/svg/024-like.svg'} /></span>
						<span>Review Order</span>
					</div>
				</div>
			</div>
		</Col>
		<Col xl={5}>
			<Card class="checkout-shipping-form shadow-none border-0">
				<CardHeader class="border-bottom-0 pb-sm-0 pb-1">
					<h4 class="fw-500">2. Please fill in your shipping address</h4>
				</CardHeader>
				<CardBody>
					<div class="edit-profile__body">
						<Form>
							<FormGroup class="form-group">
								<Label for="name31">Contact name</Label>
								<Input type="text" class="form-control" id="name31" placeholder="Ibn adam" />
							</FormGroup>
							<FormGroup class="form-group">
								<Label for="name62"
									>Company name <span class="color-extra-light"> (Optional)</span></Label
								>
								<Input type="text" class="form-control" id="name62" placeholder="adam" />
							</FormGroup>
							<FormGroup class="form-group">
								<Label for="phoneNumber">phone number</Label>
								<Input type="tel" class="form-control" id="phoneNumber" placeholder="+440" />
							</FormGroup>
							<FormGroup class="form-group">
								<div class="countryOption">
									<Label for="countryOption">Country / Region</Label>
									<Input
										type="select"
										class="js-example-basic-single js-states form-control"
										id="countryOption"
									>
										<option value="JAN">event</option>
										<option value="FBR">Venues</option>
									</Input>
								</div>
							</FormGroup>
							<FormGroup class="form-group">
								<Label for="name32">Street address</Label>
								<Input
									type="text"
									class="form-control mb-15"
									id="name32"
									placeholder="House number and street name"
								/>
								<Input
									type="text"
									class="form-control"
									id="name2"
									placeholder="Apartment, suite, unit etc."
								/>
							</FormGroup>
							<FormGroup class="form-group">
								<Label for="phoneNumber2">city</Label>
								<Input
									type="text"
									class="form-control"
									id="phoneNumber2"
									placeholder="Enter city"
								/>
							</FormGroup>
							<FormGroup class="form-group">
								<Label for="userBio">Zip / Postal code</Label>
								<Input type="text" class="form-control" id="userBio" placeholder="City Code" />
							</FormGroup>
						</Form>
					</div>
				</CardBody>
			</Card>
		</Col>
	</Row>
</div>
