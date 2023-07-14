<script>
	import { Card, CardHeader, CardBody, Input, Label, FormGroup, Button } from 'sveltestrap';
	import { onMount } from 'svelte';
	onMount(() => {
		const togglePass = document.querySelectorAll('.toggle-password');
		togglePass.forEach((elm) => {
			elm.addEventListener('click', () => {
				if (elm.nextElementSibling.getAttribute('type') == 'password') {
					elm.classList.add('active');
					elm.classList.remove('uil-eye-slash');
					elm.classList.add('uil-eye');
					elm.nextElementSibling.setAttribute('type', 'text');
				} else {
					elm.classList.remove('active');
					elm.classList.remove('uil-eye');
					elm.classList.add('uil-eye-slash');
					elm.nextElementSibling.setAttribute('type', 'password');
				}
			});
		});
	});
</script>

<Card class="card-default card-md mb-4">
	<CardHeader>
		<h6>Basic</h6>
	</CardHeader>
	<CardBody>
		<div class="basic-form-wrapper">
			<form action="#">
				<div class="form-basic">
					<FormGroup class="mb-25">
						<Label for="">Username or Email Address</Label>
						<Input
							class="form-control form-control-lg"
							type="text"
							name="username"
							placeholder="name@example.com"
						/>
					</FormGroup>
					<FormGroup class="mb-25">
						<Label for="password-field">Password</Label>
						<div class="position-relative">
							<span class="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password" />
							<Input
								id="password-field"
								type="password"
								class="form-control"
								name="password"
								value="secret"
							/>
						</div>
					</FormGroup>
					<FormGroup class="mb-0">
						<Button color="primary" size="lg" class="btn-submit">Log In</Button>
					</FormGroup>
				</div>
			</form>
		</div>
	</CardBody>
</Card>

<style lang="scss">
	:global {
		.toggle-password {
			&.active {
				&::before {
					color: var(--color-dark);
				}
			}
		}
	}
</style>
