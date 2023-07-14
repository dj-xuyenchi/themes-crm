<script>
	import { goto } from '$app/navigation';
	import { createForm } from 'svelte-forms-lib';
	import {
		Button,
		Card,
		CardBody,
		CardHeader,
		Col,
		Container,
		FormGroup,
		Input,
		Label,
		Alert,
		Row
	} from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
	import * as yup from 'yup';
	import { DataService } from '../../../config/dataService';
	import Checkbox from '@components/checkbox/Checkbox.svelte';
	import Spinner from '@components/spinner/Spinner.svelte';
	import { setItem } from '../../utility/localStorageController';
	const googleIcon = '/img/svg/google-Icon.svg';

	let visible = true;
	let loader = false;
	let notification = {};

	const loginSchema = yup.object().shape({
		email: yup.string().email().required(),
		password: yup.string().required()
	});

	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: 'HexaDash@dm.com',
			password: '12345678'
		},
		validationSchema: loginSchema,
		onSubmit: async (values) => {
			loader = true;
			await DataService.post('/login', values)
				.then((response) => {
					
					if (response.data.errors) {
						console.log(response)
						notification = response.data;
					} else if (response.data.success) {
						setItem('user', response.data.data);
						setItem('loggedin', response.data.loggedin);
						setItem('access_token', response.data.data.token);
						goto(`/home-one`);
					}
					loader = false;
				})
				.catch((error) => {
					console.log(error);
					loader = false;
				});

			visible = true;
		}
	});
	const handleCheckBox = () => {};

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
							{#if loader}
								<Spinner type="primary" size="md" />
							{/if}
							<CardHeader>
								<div class="edit-profile__title">
									<h6>Sign in HexaDash</h6>
								</div>
							</CardHeader>
							<CardBody>
								{#if notification.errors}
									<Alert
										color="danger"
										isOpen={visible}
										toggle={() => (visible = false)}
										fade={false}
									>
										{notification.errors}
									</Alert>
								{/if}
								<form on:submit|preventDefault={handleSubmit}>
									<div class="edit-profile__body">
										<FormGroup class="form-group mb-25">
											<Label for="username">Email Address</Label>
											<Input
												on:change={handleChange}
												bind:value={$form.email}
												invalid={$errors.email.length > 0}
												type="email"
												class="form-control"
												id="email"
												name="email"
												placeholder="HexaDash@dm.com"
											/>
											{#if $errors.email}
												<div class="invalid-feedback">{$errors.email}</div>
											{/if}
										</FormGroup>
										<FormGroup class="form-group mb-15">
											<Label for="password">password</Label>
											<div class="position-relative">
												<Input
													on:change={handleChange}
													bind:value={$form.password}
													invalid={$errors.password.length > 0}
													type="password"
													class="form-control"
													id="password"
													name="password"
													placeholder="Password"
												/>
												{#if $errors.password}
													<div class="invalid-feedback">{$errors.password}</div>
												{/if}
											</div>
										</FormGroup>
										<div class="admin-condition">
											<Checkbox type="default" id="check-1" onChange={handleCheckBox}>
												Keep Me Logged In
											</Checkbox>
											<a href="/forgotPass">Forget password?</a>
										</div>
										<div
											class="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center"
										>
											<Button
												type="submit"
												color="primary"
												class="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn "
											>
												sign in
											</Button>
										</div>
									</div>
								</form>
							</CardBody>
							<div class="px-20">
								<p class="social-connector social-connector__admin text-center">
									<span>Or</span>
								</p>
								<div class="button-group d-flex align-items-center justify-content-center">
									<ul class="admin-socialBtn">
										<li>
											<Button class="btn text-dark google">
												<InlineSVG src={googleIcon} />
											</Button>
										</li>
										<li>
											<Button class=" radius-md wh-48 content-center facebook">
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
								</div>
							</div>
							<div class="admin-bottom">
								<p class="mb-0">
									Don't have an account?
									<a href="/signup" class="color-primary"> Sign up </a>
								</p>
							</div>
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
