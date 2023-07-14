<script>
	import { onMount } from 'svelte';
	import { Col, Card, CardHeader, CardBody, Input } from 'sveltestrap';

	onMount(() => {
		const togglePass = document.querySelectorAll('.toggle-password');
		togglePass.forEach((elm) => {
			elm.addEventListener('click', () => {
				if (elm.nextElementSibling.getAttribute('type') == 'password') {
					elm.classList.add('active');
					elm.nextElementSibling.setAttribute('type', 'text');
				} else {
					elm.classList.remove('active');
					elm.nextElementSibling.setAttribute('type', 'password');
				}
			});
		});
	});
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="form-group mb-0">
				<Input class="form-control-lg form-control" placeholder="Username" />
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Three sizes of Input</h6>
		</CardHeader>
		<CardBody>
			<div class="input-list-wrap">
				<div class="input-list d-flex flex-wrap">
					<div class="input-list__single">
						<div class="form-group mb-0">
							<div class="input-container icon-left position-relative">
								<span class="input-icon icon-left">
									<img class="svg" alt="" src={'/img/svg/user.svg'} />
								</span>

								<Input class="form-control-lg form-control" placeholder="Large Size" />
							</div>
						</div>
					</div>
					<div class="input-list__single">
						<div class="form-group mb-0">
							<div class="input-container icon-left position-relative">
								<span class="input-icon icon-left">
									<img class="svg" alt="" src={'/img/svg/user.svg'} />
								</span>

								<Input class="form-control-default form-control" placeholder="Default Size" />
							</div>
						</div>
					</div>
				</div>
				<div class="input-list d-flex flex-wrap">
					<div class="input-list__single">
						<div class="form-group mb-0">
							<div class="input-container icon-left position-relative">
								<span class="input-icon icon-left">
									<img class="svg" alt="" src={'/img/svg/user.svg'} />
								</span>

								<Input class="form-control-sm" placeholder="Small Size" />
							</div>
						</div>
					</div>
					<div class="input-list__single">
						<div class="form-group mb-0">
							<div class="position-relative">
								<div class="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password" />
								<Input
									id="password-field"
									type="password"
									class="form-control-lg form-control"
									placeholder="Large Password"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

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
