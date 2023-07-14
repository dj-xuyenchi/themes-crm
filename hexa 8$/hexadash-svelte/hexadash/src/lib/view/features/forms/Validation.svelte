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

<div class="form-element">
	<Row>
		<Col lg={12}>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Custom Styles</h6>
				</CardHeader>
				<CardBody class="pb-md-50">
					<Form>
						<Row class="mx-n15">
							<Col md={4} class="mb-20 px-15">
								<Label for="validationDefault01" class="il-gray fs-14 fw-500 align-center mb-10"
									>First name</Label
								>
								<Input
									type="text"
									class="form-control ih-medium ip-light radius-xs b-light"
									id="validationDefault01"
									placeholder="Mark"
									required
								/>
							</Col>
							<Col md={4} class="mb-20 px-15">
								<Label for="validationDefault02" class="il-gray fs-14 fw-500 align-center mb-10"
									>Last name</Label
								>
								<Input
									type="text"
									class="form-control  ih-medium ip-light radius-xs b-light"
									id="validationDefault02"
									placeholder="Clayton"
									required
								/>
							</Col>
							<Col md={4} class="mb-20 px-15">
								<Label for="validationDefault012" class="il-gray fs-14 fw-500 align-center mb-10"
									>Username</Label
								>
								<Input
									type="text"
									class="form-control  ih-medium ip-light radius-xs b-light"
									id="validationDefault012"
									placeholder="Username"
									required
								/>
							</Col>
						</Row>
						<Row class="mx-n15">
							<Col md={6} class="mb-20 px-15">
								<Label for="validationDefault03" class="il-gray fs-14 fw-500 align-center mb-10"
									>City</Label
								>
								<Input
									type="text"
									class="form-control  ih-medium ip-light radius-xs b-light"
									id="validationDefault03"
									placeholder="City"
									required
								/>
							</Col>
							<Col md={3} class="mb-20 px-15">
								<Label for="validationDefault04" class="il-gray fs-14 fw-500 align-center mb-10"
									>State</Label
								>
								<select class="form-select form-control select-arrow-none ih-medium  radius-xs b-light shadow-none color-light  fs-14"
									id="validationDefault04"
									required
								>
									<option selected disabled value="">State</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
							</Col>
							<Col md={3} class="mb-20 px-15">
								<Label for="validationDefault05" class="il-gray fs-14 fw-500 align-center mb-10"
									>Zip</Label
								>
								<Input
									type="text"
									class="form-control  ih-medium ip-light radius-xs b-light"
									id="validationDefault05"
									placeholder="Zip"
									required
								/>
							</Col>
						</Row>
						<FormGroup class="mb-25 mt-1">
							<div class="ps-0">
								<Input
									class="checkbox"
									type="checkbox"
									id="check-1"
									label="Agree to terms and conditions"
								/>
							</div>
						</FormGroup>
						<Button color="primary" class="px-30">Submit Form</Button>
					</Form>
				</CardBody>
			</Card>
		</Col>

		<Col lg={12}>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Server Side</h6>
				</CardHeader>
				<CardBody class="pb-md-50">
					<form class="was-validated">
						<Row class="mx-n15">
							<Col md={4} class="mb-3 px-15">
								<Label for="validationServer01" class="il-gray fs-14 fw-500 align-center mb-10"
									>First name</Label
								>
								<Input
									type="text"
									class="form-control is-invalid ih-medium ip-light radius-xs b-light"
									id="validationServer01"
									placeholder="Mark"
									required
								/>
								<div class="valid-feedback">Looks good!</div>
							</Col>
							<Col md={4} class="mb-3 px-15">
								<Label for="validationServer02" class="il-gray fs-14 fw-500 align-center mb-10"
									>Last name</Label
								>
								<Input
									type="text"
									class="form-control is-invalid ih-medium ip-light radius-xs b-light"
									id="validationServer02"
									placeholder="Clayton"
									required
								/>
								<div class="valid-feedback">Looks good!</div>
							</Col>
							<Col md={4} class="mb-3 px-15">
								<Label for="validationServer12" class="il-gray fs-14 fw-500 align-center mb-10"
									>Username</Label
								>
								<Input
									type="text"
									class="form-control is-invalid ih-medium ip-light radius-xs b-light"
									id="validationServer12"
									placeholder="Username"
									required
								/>
								<div class="valid-feedback">Looks good!</div>
							</Col>
						</Row>
						<Row class="mx-n15">
							<Col md={6} class="mb-3 px-15">
								<Label for="validationServer033" class="il-gray fs-14 fw-500 align-center mb-10"
									>City</Label
								>
								<Input
									type="text"
									class="form-control is-valid ih-medium ip-light radius-xs b-light"
									id="validationServer033"
									aria-describedby="validationServer033Feedback"
									placeholder="City"
									required
								/>
								<div id="validationServer033Feedback" class="invalid-feedback">
									Please provide a valid city.
								</div>
							</Col>
							<Col md={3} class="mb-3 px-15">
								<Label for="validationServer04" class="il-gray fs-14 fw-500 align-center mb-10"
									>State</Label
								>
								<select
									class="form-select is-valid form-control select-arrow-none ih-medium  radius-xs b-light shadow-none color-light  fs-14"
									id="validationServer04"
									aria-describedby="validationServer04Feedback"
									required
								>
									<option selected disabled value="">State</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
								<div id="validationServer04Feedback" class="invalid-feedback">
									Please select a valid state.
								</div>
							</Col>
							<Col md={3} class="mb-3 px-15">
								<Label for="validationServer05" class="il-gray fs-14 fw-500 align-center mb-10"
									>Zip</Label
								>
								<Input
									type="text"
									class="form-control is-valid ih-medium ip-light radius-xs b-light"
									id="validationServer05"
									aria-describedby="validationServer05Feedback"
									placeholder="Zip"
									required
								/>
								<div id="validationServer05Feedback" class="invalid-feedback">
									Please provide a valid zip.
								</div>
							</Col>
						</Row>
						<FormGroup class="mt-10 mb-25">
							<Input
								type="checkbox"
								class="checkbox"
								id="customControlValidation1"
								required
								label="Agree to terms and conditions"
							/>
							<div class="invalid-feedback ms-25">You must agree before submitting.</div>
						</FormGroup>
						<Row>
							<Col md={6} class="mb-30">
								<Input
									type="password"
									class="form-control is-invalid ih-medium ip-light radius-xs b-light"
									id="validationServer03"
									required
								/>
								<div class="valid-feedback">Looks good!</div>
							</Col>
						</Row>
						<Button color="primary" class="px-30">Submit Form</Button>
					</form>
				</CardBody>
			</Card>
		</Col>
	</Row>
</div>
