<script>
	import {
		Button,
		Card,
		CardBody,
		CardHeader,
		Col,
		Container,
		Input,
		Label,
		Row
	} from 'sveltestrap';
</script>

<div class="main-content">
	<div class="admin">
		<Container fluid>
			<Row class="justify-content-center">
				<Col xxl="3" md="6" sm="8">
					<div class="edit-profile">
						<div class="edit-profile__logos">
							<a href={'#'}>
								<img class="dark" src="/img/logo-dark.png" alt="" />
								<img class="light" src="/img/logo-white.png" alt="" />
							</a>
						</div>
						<Card class="border-0">
							<CardHeader>
								<div class="edit-profile__title">
									<h6>Forgot Password?</h6>
								</div>
							</CardHeader>
							<CardBody>
								<div class="edit-profile__body">
									<p>
										Enter the email address you used when you joined and we’ll send you instructions
										to reset your password.
									</p>
									<div class="form-group mb-20">
										<Label for="email">Email Adress</Label>
										<Input
											type="text"
											class="form-control"
											id="email"
											placeholder="name@example.com"
										/>
									</div>
									<div class="d-flex">
										<Button
											color="primary"
											size="default"
											class="btn-squared text-capitalize lh-normal px-md-50 signIn-createBtn"
										>
											Send Reset Instructions
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
</div>

<style lang="scss">
	:global {
		@import '../../../../src/assets/sass/components/style.scss';
	}
</style>
