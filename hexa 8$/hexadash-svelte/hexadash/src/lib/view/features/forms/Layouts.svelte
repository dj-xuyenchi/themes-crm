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

<Col lg={6}>
	<Card class="card-horizontal card-default card-md mb-4">
		<CardHeader>
			<h6>Horizontal Form</h6>
		</CardHeader>
		<CardBody class="py-md-30">
			<div class="horizontal-form">
				<Form>
					<Row class="mb-25 form-group">
						<Col sm={3} class="d-flex aling-items-center">
							<Label for="inputName" class=" col-form-label color-dark fs-14 fw-500 align-center"
								>Name</Label
							>
						</Col>
						<Col sm={9}>
							<Input
								type="text"
								class="form-control ih-medium ip-gray radius-xs b-light px-15"
								id="inputName"
								placeholder="Duran Clayton"
							/>
						</Col>
					</Row>
					<Row class="mb-25">
						<Col sm={3} class="d-flex aling-items-center">
							<Label
								for="inputPassword"
								class="col-form-label  color-dark fs-14 fw-500 align-center">Email Address</Label
							>
						</Col>
						<Col sm={9}>
							<Input
								type="email"
								class="form-control  ih-medium ip-gray radius-xs b-light px-15"
								id="inputEmail"
								placeholder="username@email.com"
							/>
						</Col>
					</Row>
					<Row class="mb-0">
						<Col sm={3}>
							<Label
								for="inputPassword"
								class=" col-form-label  color-dark fs-14 fw-500 align-center">Password</Label
							>
						</Col>
						<Col sm={9}>
							<Input
								type="password"
								class="form-control  ih-medium ip-gray radius-xs b-light px-15"
								id="inputPassword"
							/>
							<div class="layout-button mt-25">
								<Button color="light" size="default" class="btn-transparent-light btn-squared px-20 ">cancel</Button>
								<Button color="primary" size="default" class="btn-squared px-30">save</Button>
							</div>
						</Col>
					</Row>
				</Form>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6}>
	<Card class="card-horizontal card-default card-md mb-4">
		<CardHeader>
			<h6>Horizontal Form With Icons</h6>
		</CardHeader>
		<CardBody class="py-md-30">
			<div class="horizontal-form">
				<Form>
					<Row class="mb-25">
						<Col sm={3} class="d-flex aling-items-center">
							<Label
								for="inputNameIcon"
								class=" col-form-label color-dark fs-14 fw-500 align-center mb-10">Name</Label
							>
						</Col>
						<Col sm={9}>
							<div class="with-icon">
								<span class="uil uil-user color-light" />
								<Input
									type="text"
									class="form-control  ih-medium ip-gray radius-xs b-light"
									id="inputNameIcon"
									placeholder="Duran Clayton"
								/>
							</div>
						</Col>
					</Row>
					<Row class="mb-25">
						<Col sm={3} class="d-flex aling-items-center">
							<Label
								for="inputEmailIcon"
								class=" col-form-label color-dark fs-14 fw-500 align-center mb-10"
								>Email Address</Label
							>
						</Col>
						<Col sm={9}>
							<div class="with-icon">
								<span class="uil uil-envelope color-light" />
								<Input
									type="email"
									class="form-control  ih-medium ip-gray radius-xs b-light"
									id="inputEmailIcon"
									placeholder="username@email.com"
								/>
							</div>
						</Col>
					</Row>
					<Row class="mb-0">
						<Col sm={3}>
							<Label
								for="inputPasswordIcon"
								class=" col-form-label color-dark fs-14 fw-500 align-center mb-10">Password</Label
							>
						</Col>
						<Col sm={9}>
							<div class="with-icon">
								<span class="uil uil-clock color-light" />
								<Input
									type="password"
									class="form-control  ih-medium ip-gray radius-xs b-light"
									id="inputPasswordIcon"
								/>
							</div>
							<div class="layout-button mt-25">
								<Button color="light" size="default" class="btn-squared px-20 btn-transparent-light">cancel</Button>
								<Button color="primary" size="default" class="btn-squared px-30">save</Button>
							</div>
						</Col>
					</Row>
				</Form>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6}>
	<Card class="card-Vertical card-default card-md mb-4">
		<CardHeader>
			<h6>Vertical Form</h6>
		</CardHeader>
		<CardBody class="pb-md-30">
			<div class="Vertical-form">
				<Form>
					<FormGroup>
						<Label for="formGroupExampleInput" class="color-dark fs-14 fw-500 align-center mb-10"
							>Name</Label
						>
						<Input
							type="text"
							class="form-control ih-medium ip-gray radius-xs b-light px-15"
							id="formGroupExampleInput"
							placeholder="Duran Clayton"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="formGroupExampleInput2" class="color-dark fs-14 fw-500 align-center mb-10"
							>Email Address</Label
						>
						<Input
							type="email"
							class="form-control ih-medium ip-gray radius-xs b-light px-15"
							id="formGroupExampleInput2"
							placeholder="username@email.com"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="formGroupExampleInput3" class="color-dark fs-14 fw-500 align-center mb-10"
							>Password</Label
						>
						<Input
							type="password"
							class="form-control ih-medium ip-gray radius-xs b-light px-15"
							id="formGroupExampleInput3"
						/>
					</FormGroup>
					<div class="layout-button mt-25">
						<Button color="light" size="default" class="btn-transparent-light btn-squared px-20 ">cancel</Button>
						<Button color="primary" size="default" class="btn-squared px-30">save</Button>
					</div>
				</Form>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6}>
	<Card class="card-Vertical card-default card-md mb-4">
		<CardHeader>
			<h6>Vertical Form With Icon</h6>
		</CardHeader>
		<CardBody class="pb-md-30">
			<div class="Vertical-form">
				<Form>
					<FormGroup>
						<Label for="formGroupExampleInput4" class=" color-dark fs-14 fw-500 align-center mb-10"
							>Name</Label
						>
						<div class="with-icon">
							<span class="uil uil-user" />
							<Input
								type="text"
								class="form-control ih-medium ip-gray radius-xs b-light"
								id="formGroupExampleInput4"
								placeholder="Duran Clayton"
							/>
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="formGroupExampleInput5" class=" color-dark fs-14 fw-500 align-center mb-10"
							>Email Address</Label
						>
						<div class="with-icon">
							<span class="uil uil-envelope" />
							<Input
								type="email"
								class="form-control ih-medium ip-gray radius-xs b-light"
								id="formGroupExampleInput5"
								placeholder="username@email.com"
							/>
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="formGroupExampleInput6" class=" color-dark fs-14 fw-500 align-center mb-10"
							>Password</Label
						>
						<div class="with-icon">
							<span class="uil uil-lock" />
							<Input
								type="password"
								class="form-control ih-medium ip-gray radius-xs b-light"
								id="formGroupExampleInput6"
							/>
						</div>
					</FormGroup>
					<div class="layout-button mt-25">
						<Button color="light" size="default" class="btn-transparent-light btn-squared px-20 ">cancel</Button>
						<Button color="primary" size="default" class="btn-squared px-30">save</Button>
					</div>
				</Form>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={12}>
	<Card class="card-Vertical card-default card-md mb-4">
		<CardHeader>
			<h6>Multiple Column</h6>
		</CardHeader>
		<CardBody class="py-md-30">
			<Form>
				<Row>
					<Col md={6} class="mb-25">
						<Input
							type="text"
							class="form-control ih-medium ip-gray radius-xs b-light px-15"
							placeholder="First Name"
						/>
					</Col>
					<Col md={6} class="mb-25">
						<Input
							type="text"
							class="form-control ih-medium ip-gray radius-xs b-light px-15"
							placeholder="Last Name"
						/>
					</Col>
					<Col md={6} class="mb-25">
						<Input
							type="text"
							class="form-control ih-medium ip-gray radius-xs b-light px-15"
							placeholder="City"
						/>
					</Col>
					<Col md={6} class="mb-25">
						<Input
							type="text"
							class="form-control ih-medium ip-gray radius-xs b-light px-15"
							placeholder="Country"
						/>
					</Col>
					<Col md={6} class="mb-25">
						<Input
							type="text"
							class="form-control ih-medium ip-gray radius-xs b-light px-15"
							placeholder="Company"
						/>
					</Col>
					<Col md={6} class="mb-25">
						<Input
							type="email"
							class="form-control ih-medium ip-gray radius-xs b-light px-15"
							placeholder="Email"
						/>
					</Col>
					<Col md={6}>
						<div class="layout-button mt-0">
							<Button color="light" size="default" class="btn-transparent-light btn-squared px-20 ">cancel</Button>
							<Button color="primary" size="default" class="btn-squared px-30">save</Button>
						</div>
					</Col>
				</Row>
			</Form>
		</CardBody>
	</Card>
</Col>
