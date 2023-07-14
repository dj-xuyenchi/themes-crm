<script>
	import {
		Col,
		Card,
		CardHeader,
		CardBody,
		Input
	} from 'sveltestrap';
</script>

<Col lg={6}>
<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Basic</h6>
	</CardHeader>
	<CardBody>
		<Input id="c1" type="switch" label="" />
	</CardBody>
</Card>
</Col>

<Col lg={6}>
<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Size</h6>
	</CardHeader>
	<CardBody>
		<div class="custom-switch-wrap d-flex align-items-center">
			<Input id="c1" class="form-switch-primary form-switch-default" type="switch" label="" />
			<Input id="c2" class="form-switch-secondary form-switch-sm" type="switch" label="" />
			<Input id="c3" class="form-switch-info form-switch-md" type="switch" label="" />
			<Input id="c4" class="form-switch-warning form-switch-lg" type="switch" label="" />
			<Input id="c5" class="form-switch-danger form-switch-xl" type="switch" label="" />
		</div>
	</CardBody>
</Card>
</Col>


<style lang="scss">
	:global {

		// Switch Css

		.form-check-input {
			clear: left;
		}

		.form-switch {
			margin-left: 10px;
			.form-check-input {
				width: 1.80rem;
				height: 0.90rem;
				border-radius: 2rem;
				padding: 0 13px;
			}

			&.form-switch-sm .form-check-input {
				width: 2.188rem;
				height: 1.25rem;
				border-radius: 2rem;
			}

			&.form-switch-md .form-check-input {
				height: 1.5rem;
				width: calc(2rem + 0.75rem);
				border-radius: 3rem;
			}

			&.form-switch-lg .form-check-input {
				height: 2rem;
				width: calc(3rem + 0.75rem);
				border-radius: 4rem;
			}

			&.form-switch-xl .form-check-input {
				height: 2.5rem;
				width: calc(4rem + 0.75rem);
				border-radius: 5rem;
			}
		}

		.form-check-input:checked {
			background-color: var(--color-primary);
			border-color: var(--color-primary);
		}
	}
</style>