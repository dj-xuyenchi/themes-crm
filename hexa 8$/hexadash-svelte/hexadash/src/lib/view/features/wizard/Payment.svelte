<script>
	import {
		Row,
		Col,
		Card,
		CardHeader,
		CardBody,
		Form,
		FormGroup,
		Input,
		Label,
		Button
	} from 'sveltestrap';
</script>

<div class="checkout wizard6 global-shadow border-0 px-sm-50 px-20 pt-sm-50 py-30 bg-white w-100">
	<Row class="justify-content-center">
		<Col xl={8}>
			<div class="checkout-progress-indicator content-center px-15">
				<div class="checkout-progress">
					<div class="step completed" id="1">
						<span>
							<img class="svg" alt="" src={'/img/svg/user-success.svg'} />
						</span>
						<span>Create Account</span>
					</div>
					<div class="current">
						<img class="svg" alt="" src={'/img/svg/green.svg'} />
					</div>
					<div class="step completed" id="2">
						<span>
							<img class="svg" alt="" src={'/img/svg/address-success.svg'} />
						</span>
						<span>Shipping Address</span>
					</div>
					<div class="current">
						<img class="svg" alt="" src={'/img/svg/checkoutin.svg'} />
					</div>
					<div class="step current" id="3">
						<span>
							<img class="svg" alt="" src={'/img/svg/155-credit-card-active.svg'} />
						</span>
						<span>Payment Method</span>
					</div>
					<div class="current">
						<img class="svg" alt="" src={'/img/svg/checkout.svg'} />
					</div>
					<div class="step" id="4">
						<span>
							<img class="svg" alt="" src={'/img/svg/024-like.svg'} />
						</span>
						<span>Review Order</span>
					</div>
				</div>
			</div>
		</Col>
		<Col xl={5}>
			<Card class="shadow-none border-0 mt-sm-50 mt-0">
				<CardBody>
					<div class="payment-method-area payment-method-area--top mt-sm-10 mt-0 w-100 mb-20">
						<h4 class="fw-500">3. Please select your payment method</h4>
						<div class="d-flex">
							<div class="radio-theme-default custom-radio custom-radio--height  mt-40">
								<input
									class="radio box-shadow-none"
									type="radio"
									name="radio-vertical"
									value="0"
									id="radio-vl5"
									checked
								/>
								<label for="radio-vl5">
									<span class="radio-text" />
									<div class="payment-method-card w-100  px-sm-25 px-15 pt-20 pb-20">
										<div
											class="border-bottom-0 p-0 pb-25 d-flex align-items-center justify-content-between flex-wrap"
										>
											<h6>Credit / Debit card</h6>
											<div class="payment-way mt-xl-0 mt-20 d-flex align-items-center">
												<img src="/img/ms.png" alt="payment" />
												<img src="/img/visa.png" alt="payment" />
												<img src="/img/american-express.png" alt="payment" />
											</div>
										</div>
										<div class="edit-profile__body bg-white">
											<Form>
												<div class="form-cc">
													<FormGroup class="mb-30">
														<Label for="payment1">card number</Label>
														<div
															class=" d-flex justify-content-between align-items-center form-control"
														>
															<Input
																type="text"
																class="ps-0 w-100 border-0 box-shadow-none bg-transparent d-block"
																id="payment1"
																placeholder="number"
															/>
															<img
																src="/img/ms.png"
																alt="visa"
																class="form-cc-img d-md-block d-none"
															/>
														</div>
													</FormGroup>
													<FormGroup class="mb-30 form-group">
														<Label for="payment2">name on card</Label>
														<Input
															type="text"
															class="form-control d-block"
															id="payment2"
															placeholder="full name"
														/>
													</FormGroup>
													<FormGroup class="mb-2 form-group">
														<Label>Expiration date</Label>
														<div class="d-flex flex-wrap flex-lg-nowrap mb-md-15">
															<div class="w-100 me-xl-20 mb-15">
																<div class="dm-select">
																	<select class="form-select form-control d-block" id="month">
																		<option value="JAN">Jan</option>
																		<option value="FBR">FRB</option>
																	</select>
																</div>
															</div>
															<div class="w-100">
																<div class="dm-select">
																	<select class="form-select form-control d-block" id="year">
																		<option value="JAN">2020</option>
																		<option value="FBR">2019</option>
																	</select>
																</div>
															</div>
														</div>
													</FormGroup>
													<FormGroup class="mb-0 payment-method-csv form-group">
														<Label for="payment5">CVV</Label>
														<div class="d-flex align-items-center flex-wrap">
															<Input
																type="text"
																class="form-control me-2 d-block"
																id="payment5"
																placeholder="XXX"
															/>
															<a href={'#'} class="color-info">what is this</a>
														</div>
													</FormGroup>
												</div>
											</Form>
										</div>
									</div>
								</label>
							</div>
						</div>
					</div>
					<div class="payment-method-paypal payment-method-area--top mt-0">
						<div class="d-flex align-items-center mb-20">
							<div class="radio-theme-default custom-radio  d-flex me-2 w-100">
								<input class="radio" type="radio" name="radio-vertical" value="1" id="radio-vl6" />
								<label for="radio-vl6" class="w-100">
									<span class="radio-text" />
									<div class="form-control d-flex align-items-center justify-content-between w-100">
										Pay with PayPal<img
											src="/img/paypal.png"
											alt="paypal"
											class="d-lg-block d-none"
										/>
									</div>
								</label>
							</div>
						</div>
						<div class="d-flex align-items-center">
							<div class="radio-theme-default custom-radio  d-flex me-2 w-100">
								<input class="radio" type="radio" name="radio-vertical" value="0" id="radio-vl7" />
								<label for="radio-vl7" class="w-100">
									<span class="radio-text" />
									<div
										color="transparent"
										class=" form-control d-flex align-items-center w-100"
										id="payment3"
									>
										Cash on delivery
									</div>
								</label>
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</Col>
	</Row>
</div>
