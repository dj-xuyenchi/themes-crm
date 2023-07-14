<script>
	import * as yup from 'yup';
	import { createForm } from 'svelte-forms-lib';
	import Spinner from '@components/spinner/Spinner.svelte';
	import Checkbox from '@components/checkbox/Checkbox.svelte';
	const googleIcon = '/img/svg/google-Icon.svg';
	import {
		Card,
		CardHeader,
		CardBody,
		Container,
		Row,
		Col,
		FormGroup,
		Input,
		Label,
		Button,
		ButtonGroup,
		Alert
	} from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
	import { DataService } from '../../../config/dataService';

	let visible = true;
	let loader = false;
	let notification = {};

	const regiterSchema = yup.object().shape({
		fullname: yup.string().required(),
		username: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().required().min(8)
	});

	const { form, errors, handleChange, handleSubmit } = createForm({
		userData: {
			name: '',
			username: '',
			email: '',
			password: ''
		},
		validationSchema: regiterSchema,
		onSubmit: async (values) => {
			loader = true;
			await DataService.post('/register', values)
				.then((response) => {
					if (response.data.errors) {
						notification = response.data;
					} else {
						notification = response;
					}
				})
				.catch((error) => {
					console.log(error);
				});
			loader = false;
			visible = true;
		}
	});

	const handleCheckBox = () => {};
</script>

<main class="main-content">
	<div class="admin">
		<Container fluid>
			<Row class="justify-content-center">
				<Col xxl={3} xl={4} md={6} sm={8}>
					<div class="edit-profile">
						<div class="edit-profile__logos">
							<a href={"#"}>
								<img class="dark" src="/img/logo-dark.png" alt="" />
								<img class="light" src="/img/logo-white.png" alt="" />
							</a>
						</div>
						<Card class={loader ? 'border-0 ninjadash-loader-active' : 'border-0'}>
							{#if loader}
								<Spinner type="primary" size="md" />
							{/if}
							<CardHeader>
								<div class="edit-profile__title">
									<h6>Sign in HexaDash</h6>
								</div>
							</CardHeader>
							<CardBody>
								<!-- <Alert
									color="success"
									isOpen={visible}
									toggle={() => (visible = false)}
									fade={false}
								>
									Your Email Registered Successfully
								</Alert> -->

								{#if notification.errors}
									<Alert
										color="danger"
										isOpen={visible}
										toggle={() => (visible = false)}
										fade={false}
									>
										{notification.errors[Object.keys(notification.errors)[0]]}
									</Alert>
								{/if}
								{#if notification.status === 200}
									<Alert
										color="success"
										isOpen={visible}
										toggle={() => (visible = false)}
										fade={false}
									>
										{notification.data.success}
									</Alert>
								{/if}
								<form on:submit|preventDefault={handleSubmit}>
									<div class="edit-profile__body">
										<div class="edit-profile__body">
											<FormGroup class="form-group mb-20">
												<Label for="full-name">name</Label>
												<Input
													on:change={handleChange}
													bind:value={$form.name}
													invalid={$errors.fullname.length > 0}
													type="text"
													class="form-control"
													id="full-name"
													name="fullname"
													placeholder="Full Name"
												/>
												{#if $errors.fullname}
													<div class="invalid-feedback">{$errors.fullname}</div>
												{/if}
											</FormGroup>
											<FormGroup class="form-group mb-20">
												<Label for="suer-name">username</Label>
												<Input
													on:change={handleChange}
													bind:value={$form.username}
													invalid={$errors.username.length > 0}
													type="text"
													class="form-control"
													id="username"
													name="username"
													placeholder="Username"
												/>
												{#if $errors.username}
													<div class="invalid-feedback">{$errors.username}</div>
												{/if}
											</FormGroup>
											<FormGroup class="form-group mb-20">
												<Label for="user-email">Email Adress</Label>
												<Input
													on:change={handleChange}
													bind:value={$form.email}
													invalid={$errors.email.length > 0}
													type="text"
													class="form-control"
													id="user-email"
													name="email"
													placeholder="name@example.com"
												/>
												{#if $errors.email}
													<div class="invalid-feedback">{$errors.email}</div>
												{/if}
											</FormGroup>
											<FormGroup class="form-group mb-15">
												<Label for="user-password">password</Label>
												<div class="position-relative">
													<Input
														on:change={handleChange}
														bind:value={$form.password}
														invalid={$errors.password.length > 0}
														id="user-password"
														type="password"
														class="form-control"
														name="password"
														placeholder="Password"
													/>
													{#if $errors.password}
														<div class="invalid-feedback">{$errors.password}</div>
													{/if}
												</div>
												<div class="admin-condition">
													<div class="checkbox-theme-default custom-checkbox ">
														<Checkbox type="default" id="check-1" onChange={handleCheckBox}>
															Creating an account means you’re okay with our <a
																href={'#'}
																class="color-primary">Terms of Service</a
															>
															and <a href={'#'} class="color-primary">Privacy Policy</a>
															my preference
														</Checkbox>
													</div>
												</div>
												<div
													class="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center"
												>
													<Button
														color="primary"
														class="w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn "
													>
														Create Account
													</Button>
												</div>
											</FormGroup>
										</div>
									</div>
									<!-- End: .card-body -->
								</form>
							</CardBody>
							<div class="px-20">
								<p class="social-connector social-connector__admin text-center">
									<span>Or</span>
								</p>
								<ButtonGroup class="d-flex align-items-center justify-content-center">
									<ul class="admin-socialBtn">
										<li>
											<Button class="text-dark google">
												<InlineSVG src={googleIcon} />
											</Button>
										</li>
										<li>
											<Button class="radius-md wh-48 content-center facebook">
												<i class="uil uil-facebook-f" />
											</Button>
										</li>
										<li>
											<Button class="radius-md wh-48 content-center twitter">
												<i class="uil uil-twitter" />
											</Button>
										</li>
										<li>
											<Button class="radius-md wh-48 content-center github">
												<i class="uil uil-github" />
											</Button>
										</li>
									</ul>
								</ButtonGroup>
							</div>
							<div class="admin-bottom">
								<p class="mb-0">
									Don't have an account?
									<a href="/signin" class="color-primary"> Sign In </a>
								</p>
							</div>
						</Card>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
</main>

<style lang="scss">
	:global {
		@import '../../../../src/assets/sass/components/style.scss';
	}
</style>
