<script>
	import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label } from 'sveltestrap';
</script>

<div
	class="checkout wizard6 global-shadow border-0 px-sm-50 px-20 pt-sm-50 pt-30 mb-0 bg-white radius-xl w-100"
>
	<Row class="justify-content-center">
		<Col xl={8}>
			<div class="checkout-progress-indicator content-center">
				<div class="checkout-progress">
					<div class="step current" id="1">
						<span>
							<img class="svg" alt="" src={'/img/svg/userExtra.svg'} />
						</span>
						<span>Create Account</span>
					</div>
					<div class="current">
						<img class="svg" alt="" src={'/img/svg/checkout.svg'} />
					</div>
					<div class="step" id="2">
						<span><img class="svg" alt="" src={'/img/svg/address.svg'} /></span>
						<span>Shipping Address</span>
					</div>
					<div class="current"><img class="svg" alt="" src={'/img/svg/checkout.svg'} /></div>
					<div class="step" id="3">
						<span><img class="svg" alt="" src={'/img/svg/155-credit-card.svg'} /></span>
						<span>Payment Method</span>
					</div>
					<div class="current"><img class="svg" alt="" src={'/img/svg/checkout.svg'} /></div>
					<div class="step" id="4">
						<span><img class="svg" alt="" src={'/img/svg/024-like.svg'} /></span>
						<span>Review Order</span>
					</div>
				</div>
			</div>
		</Col>
		<Col xl={5}>
			<Card class="checkout-shipping-form shadow-none border-0 shadow-none">
				<CardHeader class="border-bottom-0 align-content-start pb-sm-0 pb-1">
					<h4 class="fw-500">1. Please create your account</h4>
				</CardHeader>
				<CardBody>
					<div class="edit-profile__body">
						<Form>
							<FormGroup class="form-group">
								<Label for="name1">Usename</Label>
								<Input type="text" class="form-control" id="name1" placeholder="Usename" />
							</FormGroup>
							<FormGroup class="form-group">
								<Label for="name2">Email Address</Label>
								<Input
									type="email"
									class="form-control"
									id="name2"
									placeholder="username@email.com"
								/>
							</FormGroup>
							<FormGroup class="create-passord form-group">
								<Label for="phoneNumber">Password</Label>
								<Input
									type="password"
									class="form-control"
									id="phoneNumber"
									placeholder="Password"
									value="121445"
								/>
								<span class="create-passord-warn"
									>Enter a valid password. Min 6 characters long</span
								>
							</FormGroup>
						</Form>
					</div>
				</CardBody>
			</Card>
		</Col>
	</Row>
</div>
