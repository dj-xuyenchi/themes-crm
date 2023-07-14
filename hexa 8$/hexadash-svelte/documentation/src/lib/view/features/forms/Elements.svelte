<script>
	import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label } from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
</script>

<div class="form-element">
	<Row>
		<Col lg={12}>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Form Group in Grid</h6>
				</CardHeader>
				<CardBody class="py-md-25">
					<Form>
						<Row>
							<Col md={4}>
								<FormGroup>
									<Label for="a1" class="il-gray fs-14 fw-500 align-center mb-10"
										>One of Three Columns</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a1"
										placeholder="One of Three Columns"
									/>
								</FormGroup>
							</Col>
							<Col md={4}>
								<FormGroup>
									<Label for="a2" class="il-gray fs-14 fw-500 align-center mb-10"
										>One of Three Columns</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a2"
										placeholder="One of Three Columns"
									/>
								</FormGroup>
							</Col>
							<Col md={4}>
								<FormGroup>
									<Label for="a3" class="il-gray fs-14 fw-500 align-center mb-10"
										>One of Three Columns</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a3"
										placeholder="One of Three Columns"
									/>
								</FormGroup>
							</Col>
							<Col md="3">
								<FormGroup>
									<Label for="a4" class="il-gray fs-14 fw-500 align-center mb-10"
										>One of Four Columns</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a4"
										placeholder="One of Four Columns"
									/>
								</FormGroup>
							</Col>
							<Col md="3">
								<FormGroup>
									<Label for="a5" class="il-gray fs-14 fw-500 align-center mb-10"
										>One of Four Columns</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a5"
										placeholder="One of Four Columns"
									/>
								</FormGroup>
							</Col>
							<Col md="3">
								<FormGroup>
									<Label for="a6" class="il-gray fs-14 fw-500 align-center mb-10"
										>One of Four Columns</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a6"
										placeholder="One of Four Columns"
									/>
								</FormGroup>
							</Col>
							<Col md="3">
								<FormGroup>
									<Label for="a7" class="il-gray fs-14 fw-500 align-center mb-10"
										>One of Four Columns</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a7"
										placeholder="One of Four Columns"
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="a8" class="il-gray fs-14 fw-500 align-center mb-10"
										>One of Two Columns</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a8"
										placeholder="One of Two Columns"
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label for="a9" class="il-gray fs-14 fw-500 align-center mb-10"
										>One of Two Columns</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a9"
										placeholder="One of Two Columns"
									/>
								</FormGroup>
							</Col>
						</Row>
					</Form>
				</CardBody>
			</Card>
		</Col>

		<div class="col-lg-6">
			<Row>
				<Col lg={12}>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Form Control</h6>
						</CardHeader>
						<CardBody class="pb-md-30">
							<Form>
								<FormGroup>
									<Label for="a11" class="il-gray fs-14 fw-500 align-center mb-10"
										>Email Address</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a11"
										placeholder="username@email.com"
									/>
								</FormGroup>
								<FormGroup>
									<Label
										for="exampleFormControlSelect1"
										class="il-gray fs-14 fw-500 align-center mb-10">Example Select</Label
									>
									<Input type="select" class="form-control px-15" id="exampleFormControlSelect1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Input>
								</FormGroup>
								<FormGroup class="tagSelect-rtl">
									<Label class="il-gray fs-14 fw-500 align-center mb-10"
										>Example multiple select</Label
									>

									<div class="dm-select">
										<Input
											type="select"
											name="select-tag"
											id="select-tag"
											class="form-control "
											multiple="multiple"
										>
											<option value="01">Option 1</option>
											<option value="02">Option 2</option>
											<option value="03">Option 3</option>
											<option value="04">Option 4</option>
											<option value="05">Option 5</option>
										</Input>
									</div>
								</FormGroup>

								<FormGroup class="form-element-Input mb-20">
									<Label
										for="exampleFormControlTextarea1"
										class="il-gray fs-14 fw-500 align-center mb-10">Example textarea</Label
									>
									<Input
										type="textarea"
										class="form-control"
										id="exampleFormControlTextarea1"
										rows="3"
									/>
								</FormGroup>
							</Form>
						</CardBody>
					</Card>
				</Col>
				<Col lg={12}>
					<Card class="card-horizontal card-default card-md mb-4">
						<CardHeader>
							<h6>HTML5 Inputs</h6>
						</CardHeader>
						<CardBody class="py-md-30">
							<div class="horizontal-form">
								<Form>
									<Row>
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="inputName"
												class=" col-form-label color-dark fs-14 fw-500 align-center">Text</Label
											>
										</Col>
										<Col sm={9}>
											<Input
												type="text"
												class="form-control ih-medium ip-light radius-xs b-light px-15"
												id="inputName"
												placeholder="Duran Clayton"
											/>
										</Col>
									</Row>
									<Row>
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="element-text"
												class=" col-form-label color-dark fs-14 fw-500 align-center"
												>Email Address</Label
											>
										</Col>
										<Col sm={9}>
											<Input
												type="email"
												class="form-control ih-medium ip-light radius-xs b-light px-15"
												id="element-text"
												placeholder="username@email.com"
											/>
										</Col>
									</Row>
									<Row>
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="element-text2"
												class=" col-form-label color-dark fs-14 fw-500 align-center">URL</Label
											>
										</Col>
										<Col sm={9}>
											<Input
												type="url"
												class="form-control ih-medium ip-light radius-xs b-light px-15"
												id="element-text2"
											/>
										</Col>
									</Row>
									<Row>
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="element-text3"
												class=" col-form-label color-dark fs-14 fw-500 align-center">Phone</Label
											>
										</Col>
										<Col sm={9}>
											<Input
												type="number"
												class="form-control ih-medium ip-light radius-xs b-light px-15"
												id="element-text3"
												placeholder="017123456789"
											/>
										</Col>
									</Row>
									<Row>
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="element-text4"
												class=" col-form-label color-dark fs-14 fw-500 align-center">Password</Label
											>
										</Col>
										<Col sm={9}>
											<Input
												type="password"
												class="form-control ih-medium ip-light radius-xs b-light px-15"
												id="element-text4"
											/>
										</Col>
									</Row>
									<Row>
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="element-text5"
												class=" col-form-label color-dark fs-14 fw-500 align-center">Number</Label
											>
										</Col>
										<Col sm={9}>
											<Input
												type="number"
												class="form-control ih-medium ip-light radius-xs b-light px-15"
												id="element-text5"
												placeholder="123"
											/>
										</Col>
									</Row>
									<Row class="form-group-calender">
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="datepicker7"
												class=" col-form-label color-dark fs-14 fw-500 align-center">Datetime</Label
											>
										</Col>
										<Col sm={9}>
											<div class="position-relative">
												<div
													class="d-flex align-items-center justify-content-start ih-medium ip-light radius-xs b-light px-15 form-control"
												>
													<Input
														type="text"
														class="ip-light border-0 shadow-none w-100px"
														id="datepicker7"
														placeholder="01/10/2021"
													/>
													<Input
														type="text"
														class="ip-light color-lighten border-0 shadow-none"
														id="time-picker2"
														placeholder="12:00 AM"
													/>
												</div>
												<a href={'#'}>
													<InlineSVG src={'/img/svg/calendar.svg'} />
												</a>
											</div>
										</Col>
									</Row>
									<Row class="form-group-calender">
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="datepicker8"
												class=" col-form-label color-dark fs-14 fw-500 align-center">Date</Label
											>
										</Col>
										<Col sm={9}>
											<div class="position-relative">
												<Input
													type="text"
													class="form-control  ih-medium ip-light radius-xs b-light px-15"
													id="datepicker8"
													placeholder="01/10/2021"
												/>
												<a href={'#'}>
													<InlineSVG src={'/img/svg/calendar.svg'} />
												</a>
											</div>
										</Col>
									</Row>
									<Row class="form-group-calender">
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="datepicker"
												class=" col-form-label color-dark fs-14 fw-500 align-center">Month</Label
											>
										</Col>
										<Col sm={9}>
											<div class="position-relative">
												<Input
													type="text"
													class="form-control  ih-medium ip-light radius-xs b-light px-15"
													id="datepicker"
													placeholder="January 20, 2018"
												/>
												<a href={'#'}>
													<InlineSVG src={'/img/svg/calendar.svg'} />
												</a>
											</div>
										</Col>
									</Row>
									<Row class="form-group-calender">
										<Col sm={3} class="d-flex aling-items-center">
											<Label
												for="datepicker9"
												class=" col-form-label color-dark fs-14 fw-500 align-center">Week</Label
											>
										</Col>
										<Col sm={9}>
											<div class="position-relative">
												<Input
													type="text"
													class="form-control  ih-medium ip-light radius-xs b-light px-15"
													id="datepicker9"
													placeholder="Week 2, 2021"
												/>
												<a href={'#'}>
													<InlineSVG src={'/img/svg/calendar.svg'} />
												</a>
											</div>
										</Col>
									</Row>
									<Row class="form-group-calender mb-20">
										<Col sm={3} class="d-flex aling-items-center">
											<Label class=" col-form-label color-dark fs-14 fw-500 align-center"
												>Time</Label
											>
										</Col>
										<Col sm={9}>
											<div class="time-picker">
												<FormGroup class="mb-0">
													<div
														class="input-container icon-right position-relative w-100 color-light "
													>
														<span class="input-icon icon-right">
															<InlineSVG src={'/img/svg/clock.svg'} />
														</span>
														<Input
															type="text"
															class="form-control ih-medium ip-light radius-xs b-light px-15 color-lighten"
															id="time-picker"
															placeholder="12:00 AM"
														/>
													</div>
												</FormGroup>
											</div>
										</Col>
									</Row>
									<Row class="form-group-calender mb-20">
										<Col sm={3} class="d-flex aling-items-center">
											<Label class=" col-form-label color-dark fs-14 fw-500 align-center"
												>Color</Label
											>
										</Col>
										<Col sm={9}>
											<div class="color-picker">
												<FormGroup class="mb-0">
													<div
														class="input-container icon-right position-relative w-100 color-light "
													>
														<Input
															type="color"
															class="form-control ih-medium ip-light radius-xs b-light px-15 color-light"
															id="favcolor"
															value="#5F63F2"
														/>
													</div>
												</FormGroup>
											</div>
										</Col>
									</Row>
								</Form>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
		<div class="col-lg-6">
			<Row>
				<Col lg={12}>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Sizes</h6>
						</CardHeader>
						<CardBody>
							<Form>
								<FormGroup>
									<Label for="a12" class="il-gray fs-14 fw-500 align-center mb-10"
										>Large Input</Label
									>
									<Input
										type="text"
										class="form-control ih-large ip-light radius-xs b-light px-15"
										id="a12"
										placeholder=".form-control.lg"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="a13" class="il-gray fs-14 fw-500 align-center mb-10"
										>Default Input</Label
									>
									<Input
										type="text"
										class="form-control ih-medium ip-light radius-xs b-light px-15"
										id="a13"
										placeholder="Default input"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="a14" class="il-gray fs-14 fw-500 align-center mb-10"
										>Small Input</Label
									>
									<Input
										type="text"
										class="form-control ih-small ip-light radius-xs b-light px-15"
										id="a14"
										placeholder=".form-control.sm"
									/>
								</FormGroup>
							</Form>
						</CardBody>
					</Card>
				</Col>
				<Col lg={12}>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Form Control</h6>
						</CardHeader>
						<CardBody>
							<FormGroup class="form-element-textarea">
								<Label
									for="exampleFormControlTextarea2"
									class="il-gray fs-14 fw-500 align-center mb-10">Example basic</Label
								>
								<Input
									type="textarea"
									class="form-control"
									id="exampleFormControlTextarea2"
									rows="3"
								/>
							</FormGroup>
							<FormGroup class="form-element-textarea">
								<Label
									for="exampleFormControlTextarea3"
									class="il-gray fs-14 fw-500 align-center mb-10">Unresizable Textarea</Label
								>
								<Input
									type="textarea"
									class="form-control"
									id="exampleFormControlTextarea3"
									rows="3"
								/>
							</FormGroup>
						</CardBody>
					</Card>
				</Col>
				<Col>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Sizes</h6>
						</CardHeader>
						<CardBody>
							<FormGroup class="select-px-15">
								<Label for="countryOption" class="il-gray fs-14 fw-500 align-center mb-10"
									>Example Select</Label
								>
								<Input type="select" class="form-control px-15" id="countryOption">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label for="select-2" class="il-gray fs-14 fw-500 align-center mb-10"
									>Disable Select</Label
								>
								<div class="dm-select disabled">
									<Input
										type="select"
										name="select-2"
										id="select-2"
										class="form-control  ih-medium ip-light radius-xs b-light px-15"
										disabled=""
									>
										<option value="01">Option 1</option>
										<option value="01">Option 1</option>
										<option value="01">Option 1</option>
										<option value="01">Option 1</option>
										<option value="01">Option 1</option>
									</Input>
								</div>
							</FormGroup>
							<FormGroup class="select-px-15 tagSelect-rtl">
								<Label class="il-gray fs-14 fw-500 align-center mb-10"
									>Example multiple select</Label
								>

								<div class="dm-select ">
									<Input
										type="select"
										name="select-tag2"
										id="select-tag2"
										class="form-control "
										multiple="multiple"
									>
										<option value="01">Option 1</option>
										<option value="02">Option 2</option>
										<option value="03">Option 3</option>
										<option value="04">Option 4</option>
										<option value="05">Option 5</option>
									</Input>
								</div>
							</FormGroup>
							<FormGroup>
								<Label for="select-3" class="il-gray fs-14 fw-500 align-center mb-10"
									>Disable multiple select</Label
								>
								<div class="dm-select disabled ">
									<Input
										type="select"
										name="select-2"
										id="select-3"
										class="form-control  ih-medium ip-light radius-xs b-light px-15"
										disabled=""
									>
										<option value="01">Option 1</option>
										<option value="01">Option 1</option>
										<option value="01">Option 1</option>
										<option value="01">Option 1</option>
										<option value="01">Option 1</option>
									</Input>
								</div>
							</FormGroup>
						</CardBody>
					</Card>
				</Col>
				<Col>
					<Card class=" card-default card-md mb-4">
						<CardHeader>
							<h6>File Browser</h6>
						</CardHeader>
						<CardBody class="pb-md-40 pt-md-30">
							<div class="custom-file">
								<Input class="form-control custom-file-input" type="file" id="customFile" />
								<Label class="custom-file-label ps-15" for="customFile">Browse</Label>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Checkboxes and Radios</h6>
						</CardHeader>
						<CardBody class="form-element-radioChecks">
							<Row>
								<Col md={6}>
									<div class="mb-3">
										<div class="checkbox-theme-default custom-checkbox ">
											<Input class="checkbox" type="checkbox" id="check-un1" label="Uncheck" />
										</div>
									</div>
									<div class="mb-3">
										<div class="checkbox-theme-default custom-checkbox ">
											<Input
												class="checkbox"
												type="checkbox"
												id="check-un3"
												checked
												label="checked"
											/>
										</div>
									</div>
									<div class="checkbox-list">
										<div class="checkbox-list__single mb-3">
											<div class="checkbox-theme-default custom-checkbox disabled ">
												<Input
													class="checkbox"
													type="checkbox"
													id="check-5"
													label="Disabled Unchecked"
												/>
											</div>
										</div>
										<div class="checkbox-list__single">
											<div class="checkbox-theme-default custom-checkbox disabled ">
												<Input
													class="checkbox"
													type="checkbox"
													id="check-4"
													label="Disabled checked"
													checked
												/>
											</div>
										</div>
									</div>
								</Col>
								<Col md={6}>
									<div class="mb-3">
										<div class="radio-theme-default custom-radio ">
											<Input
												class="radio"
												type="radio"
												name="radio-default"
												value="0"
												id="radio-un2"
												label="Uncheck"
											/>
										</div>
									</div>
									<div class="mb-3">
										<div class="radio-theme-default custom-radio">
											<Input
												class="radio"
												type="radio"
												name="radio-default"
												value="0"
												id="radio-un4"
												checked
												label="Checked"
											/>
										</div>
									</div>
									<div class="mb-3">
										<div class="radio-theme-default custom-radio disabled ">
											<Input
												class="radio"
												type="radio"
												name="radio-default"
												value="0"
												id="radio-2"
												label="Disabled"
											/>
										</div>
									</div>
									<div>
										<div class="radio-theme-default custom-radio disabled ">
											<Input
												class="radio"
												type="radio"
												name="radio-default2"
												value="0"
												id="radio-3"
												checked=""
												label="Disabled Checked"
											/>
										</div>
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	</Row>
</div>
