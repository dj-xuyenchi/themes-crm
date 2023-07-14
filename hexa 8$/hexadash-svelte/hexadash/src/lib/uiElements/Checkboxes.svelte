<script>
	import {
		Row,
		Col,
		Card,
		CardHeader,
		CardBody,
		Input,
		Button
	} from 'sveltestrap';
	import { onMount } from 'svelte';
	onMount(() => {
		document.querySelector('.btn-checkToggle').addEventListener('click', () => {
			let checkbox = document.getElementById('check-2');
			checkbox.checked ? (checkbox.checked = false) : (checkbox.checked = true);
		});
		document.querySelector('.btn-activeToggle').addEventListener('click', () => {
			let checkbox = document.getElementById('check-2');
			checkbox.hasAttribute('disabled')
				? checkbox.removeAttribute('disabled')
				: checkbox.setAttribute('disabled', 'true');
		});
	});
</script>

<Row>
	<Col lg={6}>
		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Basic card</h6>
			</CardHeader>
			<CardBody class="pt-sm-20 pt-3">
				<div class="checkbox-theme-default custom-checkbox">
					<Input class="checkbox checkbox form-check-undo" type="checkbox" id="check-1" label="Checkbox" />
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Controlled Checkbox</h6>
			</CardHeader>
			<CardBody class="pt-sm-20 pt-3">
				<div class="checkbox-controll">
					<div class="checkbox-theme-default custom-checkbox ">
						<Input class="checkbox form-check-undo" type="checkbox" id="check-2" label="Checked" checked />
					</div>

					<div class="checkbox-controll__actions d-flex">
						<Button color="primary" size="xs" class="btn-squared btn-checkToggle">Uncheck</Button>
						<Button color="primary" size="xs" class="btn-squared btn-activeToggle">Disable</Button>
					</div>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Check all</h6>
			</CardHeader>
			<CardBody class="pt-sm-20 pt-3">
				<div class="checkbox-group-header mb-20">
					<div class="checkbox-theme-2 custom-checkbox  check-all">
						<Input class="checkbox form-check-undo" type="checkbox" id="check-3" label="Checkbox" />
					</div>
				</div>
				<div class="checkbox-group-wrapper">
					<div class="checkbox-group d-flex">
						<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
							<Input class="checkbox form-check-undo" type="checkbox" id="check-grp-1" label="Apple" />
						</div>

						<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
							<Input class="checkbox" type="checkbox" id="check-grp-2" label="Peer" />
						</div>

						<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
							<Input class="checkbox" type="checkbox" id="check-grp-3" label="Orange" />
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>

	<Col lg={6}>
		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Disabled</h6>
			</CardHeader>
			<div class="card-body">
				<div class="checkbox-list">
					<div class="checkbox-list__single mb-1">
						<div class="checkbox-theme-default custom-checkbox">
							<Input
								class="checkbox form-check-undo"
								type="checkbox"
								id="check-5"
								label="Checkbox Disabled"
								disabled
							/>
						</div>
					</div>
					<div class="checkbox-list__single">
						<div class="checkbox-theme-default custom-checkbox">
							<Input
								class="checkbox form-check-undo"
								type="checkbox"
								id="check-4"
								label="Checkbox Disabled"
								checked
								disabled
							/>
						</div>
					</div>
				</div>
			</div>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader class="py-20">
				<h6>Checkbox Group</h6>
			</CardHeader>
			<CardBody class="pt-sm-20 pt-3">
				<div class="checkbox-list">
					<div class="checkbox-list__single mb-3">
						<div class="checkbox-group d-flex">
							<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
								<Input class="checkbox form-check-undo" type="checkbox" id="check-grp-4" label="Apple" />
							</div>

							<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
								<Input class="checkbox" type="checkbox" id="check-grp-5" label="Peer" />
							</div>

							<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
								<Input class="checkbox" type="checkbox" id="check-grp-6" label="Orange" />
							</div>
						</div>
					</div>
					<div class="checkbox-list__single mb-3">
						<div class="checkbox-group d-flex">
							<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
								<Input class="checkbox form-check-undo" type="checkbox" id="check-grp-7" label="Apple" />
							</div>

							<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
								<Input class="checkbox" type="checkbox" id="check-grp-8" label="Peer" />
							</div>

							<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
								<Input class="checkbox" type="checkbox" id="check-grp-9" label="Orange" />
							</div>
						</div>
					</div>
					<div class="checkbox-list__single">
						<div class="checkbox-group d-flex">
							<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
								<Input class="checkbox form-check-undo" type="checkbox" id="check-grp-10" label="Apple" />
							</div>

							<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
								<Input class="checkbox" type="checkbox" id="check-grp-11" label="Peer" />
							</div>

							<div class="checkbox-theme-default custom-checkbox checkbox-group__single">
								<Input class="checkbox" type="checkbox" id="check-grp-12" label="Orange" />
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md  mb-4">
			<CardHeader class="py-20">
				<h6>Checkbox Group</h6>
			</CardHeader>
			<CardBody class="pt-sm-20 pt-3">
				<div class="row">
					<div class="col-lg-8">
						<div class="row">
							<div class="col-lg-4">
								<div class="checkbox-theme-default custom-checkbox ">
									<Input class="checkbox form-check-undo" type="checkbox" id="check-grid-1" label="A" />
								</div>
							</div>
							<div class="col-lg-4">
								<div class="checkbox-theme-default custom-checkbox ">
									<Input class="checkbox" type="checkbox" id="check-grid-2" label="B" />
								</div>
							</div>
							<div class="col-lg-4">
								<div class="checkbox-theme-default custom-checkbox ">
									<Input class="checkbox" type="checkbox" id="check-grid-3" label="C" />
								</div>
							</div>
							<div class="col-lg-4">
								<div class="checkbox-theme-default custom-checkbox ">
									<Input class="checkbox form-check-undo" type="checkbox" id="check-grid-4" label="D" />
								</div>
							</div>
							<div class="col-lg-4">
								<div class="checkbox-theme-default custom-checkbox ">
									<Input class="checkbox" type="checkbox" id="check-grid-5" label="E" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<style lang="scss">
	:global {

		.form-check-undo{
			padding-left: 0;
		}
		.checkbox-controll__actions {
			margin-top: 35px;
		}

		.checkbox-controll__actions .btn-checkToggle {
			min-width: 95px;
			margin-right: 10px;
		}

		.checkbox-controll__actions .btn-activeToggle {
			min-width: 70px;
		}

		.checkbox-group-header {
			border-bottom: 1px solid var(--border-color);
			padding-bottom: 5px;
			margin-bottom: 30px;
		}
	}
</style>
