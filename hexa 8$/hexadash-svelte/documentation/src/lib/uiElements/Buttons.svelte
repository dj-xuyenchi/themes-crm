<script>
	import {
		Row,
		Col,
		Card,
		CardHeader,
		CardBody,
		Button,
		ButtonGroup,
		ButtonDropdown,
		DropdownMenu,
		DropdownToggle
	} from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';

	const buttonColors = [
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'dark',
		'light',
		'white'
	];
</script>

<Row>
	<Col lg={6}>
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Basic</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap">
					{#each buttonColors as color}
						<Button {color} class="btn-default btn-squared radius-xs fs-15 fw-400 text-capitalize"
							>{color.charAt(0).toUpperCase() + color.slice(1)}</Button
						>
					{/each}
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Light Color</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap">
					{#each buttonColors as color}
						<Button {color} class="btn-default btn-squared btn-transparent-{color} radius-xs fs-15 fw-400 text-capitalize"
							>{color.charAt(0).toUpperCase() + color.slice(1)}</Button
						>
					{/each}
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Rounded</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap">
					{#each buttonColors as color}
						<Button {color} class="btn-default btn-rounded radius-xs fs-15 fw-400 text-capitalize"
							>{color.charAt(0).toUpperCase() + color.slice(1)}</Button
						>
					{/each}
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Icon</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap">
					<Button color="primary" class="btn-default btn-squared radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="primary" class="btn-default btn-squared btn-transparent-primary radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button outline color="primary" class="btn-default btn-squared radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button outline color="light" class="btn-default btn-squared radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="light" class="btn-default btn-squared radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="white" class="btn-default btn-squared btn-shadow-white radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="primary" class="btn-icon btn-squared radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>

					<Button outline color="primary" class="btn-icon btn-squared radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>

					<Button color="light" class="btn-icon btn-squared radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>

					<Button color="light" outline class="btn-icon btn-squared radius-xs fs-15 fw-400 text-capitalize">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Size</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap align-items-end">
					<Button color="primary" size="lg" class="btn-squared radius-xs fs-15 fw-400 text-capitalize">Large Buton</Button>
					<Button color="secondary" size="default" class="btn-squared radius-xs fs-15 fw-400 text-capitalize">Default</Button>
					<Button color="success" size="sm" class="btn-squared radius-xs fs-15 fw-400 text-capitalize">Small</Button>
					<Button color="info" size="xs" class="btn-squared radius-xs fs-15 fw-400 text-capitalize">Extra Small</Button>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Multiple Buttons</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap align-items-end">
					<Button color="primary" class="btn-default btn-squared radius-xs fs-15 fw-400 text-capitalize">Primary</Button>
					<Button color="secondary" class="btn-default btn-squared radius-xs fs-15 fw-400 text-capitalize">Secondary</Button>
					<ButtonDropdown>
						<DropdownToggle class="radius-xs fs-15 fw-400 text-capitalize" color="light">
							Actions
							<i class="la la-angle-down" />
						</DropdownToggle>
						<DropdownMenu>
							<a class="dropdown-item" href={'#'}>Btn Action One</a>
							<a class="dropdown-item" href={'#'}>Btn Action Two</a>
							<a class="dropdown-item" href={'#'}>Btn Action Three</a>
						</DropdownMenu>
					</ButtonDropdown>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Group Button</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-block">
					<h6>Basic</h6>
					<div class="button-inline-list my-n2">
						<ButtonGroup class="custom-button-group btn-group-normal my-2">
							<Button class="fs-15 fw-400 text-capitalize" color="light" size="xs" outline active>Today</Button>
							<Button class="fs-15 fw-400 text-capitalize" color="light" size="xs" outline>Week</Button>
							<Button class="fs-15 fw-400 text-capitalize" color="light" size="xs" outline>Month</Button>
							<Button class="fs-15 fw-400 text-capitalize" color="light" size="xs" outline>Year</Button>
						</ButtonGroup>

						<ButtonGroup class="custom-button-group btn-group-normal my-2">
							<Button class="fs-15 fw-400 text-capitalize" color="light" size="xs" outline>Cancel</Button>
							<Button class="fs-15 fw-400 text-capitalize" color="light" size="xs" outline>Ok</Button>
						</ButtonGroup>

						<ButtonGroup class="custom-button-group btn-group-solid my-2">
							<Button class="fs-15 fw-400 text-capitalize" color="light" size="xs" outline>Left</Button>
							<Button class="fs-15 fw-400 text-capitalize" color="light" size="xs" outline>Middle</Button>
							<Button class="fs-15 fw-400 text-capitalize" color="light" size="xs" outline>Right</Button>
						</ButtonGroup>
					</div>
				</div>
				<div class="buttons-block mt-30">
					<h6>With Icon</h6>
					<div class="button-inline-list">
						<ButtonGroup class="custom-button-group btn-group-withIcon my-2">
							<Button class="fs-15 fw-400 text-capitalize" color="primary" size="xs" active>
								<InlineSVG src={'/img/svg/chevron-left.svg'} />
								Go Back
							</Button>
							<Button class="fs-15 fw-400 text-capitalize" color="primary" size="xs">
								Go Forward
								<InlineSVG src={'/img/svg/chevron-right.svg'} />
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Block</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list">
					<Button block color="primary" size="lg" class="btn-squared   radius-xs fs-15 fw-400 text-capitalize">Large Button</Button>
					<Button block color="secondary" size="default" class="btn-squared   radius-xs fs-15 fw-400 text-capitalize">Default</Button>
					<Button block color="success" size="sm" class="btn-squared   radius-xs fs-15 fw-400 text-capitalize">Small</Button>
					<Button block color="info" size="xs" class="btn-squared   radius-xs fs-15 fw-400 text-capitalize">Extra Small</Button>
				</div>
			</CardBody>
		</Card>
	</Col>
	<Col lg={6}>
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Outline</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap">
					{#each buttonColors as color}
						<Button size="default" {color} outline class="btn-squared radius-xs fs-15 fw-400 text-capitalize"
							>{color.charAt(0).toUpperCase() + color.slice(1)}</Button
						>
					{/each}
					<Button size="default" outline class="btn-squared color-dashed btn-outline-dashed radius-xs fs-15 fw-400 text-capitalize"
						>Dashed</Button
					>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Shadow</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap">
					{#each buttonColors as color}
						<Button {color} size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared btn-shadow-{color}"
							>{color.charAt(0).toUpperCase() + color.slice(1)}</Button
						>
					{/each}
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Rounded Outline</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap">
					{#each buttonColors as color}
						<Button {color} outline size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-rounded"
							>{color.charAt(0).toUpperCase() + color.slice(1)}</Button
						>
					{/each}
					<Button outline size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-rounded color-dashed btn-outline-dashed"
						>Dashed</Button
					>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Rounded with Icon</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap">
					<Button color="primary" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-rounded">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="primary" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-rounded btn-transparent-primary">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="primary" outline size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-rounded">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="light" outline size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-rounded">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="light" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-rounded">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="white" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared btn-shadow-white">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="primary" class="radius-xs fs-15 fw-400 text-capitalize btn-icon btn-circle">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>

					<Button color="primary" outline class="radius-xs fs-15 fw-400 text-capitalize btn-icon btn-circle">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>

					<Button color="light" class="radius-xs fs-15 fw-400 text-capitalize btn-icon btn-circle">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>

					<Button color="light" outline class="radius-xs fs-15 fw-400 text-capitalize btn-icon btn-circle">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Disabled</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap align-items-end mb-1">
					<Button color="primary" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared">Primary</Button>
					<Button color="primary" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared" disabled
						>Primary (Disabled)</Button
					>
				</div>
				<div class="buttons-list d-flex flex-wrap align-items-end">
					<Button outline color="dark" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared">Dark</Button>
					<Button outline color="dark" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared" disabled
						>Dark (Disabled)</Button
					>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Loading</h6>
			</CardHeader>
			<CardBody>
				<div class="buttons-list d-flex flex-wrap">
					<Button color="primary" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="primary" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared btn-transparent-primary">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button outline color="primary" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button outline color="light" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="light" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="white" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared btn-shadow-white">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>

					<Button color="primary" class="radius-xs fs-15 fw-400 text-capitalize btn-squared btn-icon">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>

					<Button outline color="primary" class="radius-xs fs-15 fw-400 text-capitalize btn-squared btn-icon">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>

					<Button color="light" class="radius-xs fs-15 fw-400 text-capitalize btn-squared btn-icon">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>

					<Button outline color="light" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared btn-icon">
						<InlineSVG src={'/img/svg/layers.svg'} />
					</Button>
				</div>
			</CardBody>
		</Card>

		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Button Ghost</h6>
			</CardHeader>
			<CardBody class="gradient1">
				<div class="buttons-list d-flex flex-wrap">
					<Button color="ghost" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared">Primary</Button>
					<Button color="ghost" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared">Secondary</Button>
					<Button color="ghost" size="default" class="radius-xs fs-15 fw-400 text-capitalize btn-squared">
						<InlineSVG src={'/img/svg/layers.svg'} />
						Default
					</Button>
				</div>
			</CardBody>
		</Card>
	</Col>
</Row>

<style lang="scss">
	:global {
		.buttons-list {
			margin: -5px -6px;
		}

		.buttons-list button {
			margin: 5px 6px;
		}

		.buttons-list .dropdown .btn {
			height: auto;
			line-height: 2.65rem;
		}

		.buttons-list .dropdown .btn i,
		.buttons-list .dropdown .btn span,
		.buttons-list .dropdown .btn svg,
		.buttons-list .dropdown .btn img {
			margin: 0 0 0 6px;
		}

		.buttons-list .btn:focus {
			-webkit-box-shadow: 0 0;
			box-shadow: 0 0;
		}
		.buttons-block h1,
		.buttons-block h2,
		.buttons-block h3,
		.buttons-block h4,
		.buttons-block h5,
		.buttons-block h6 {
			font-size: 15px;
			font-weight: 500;
			margin-bottom: 12px;
		}

		.buttons-block .button-inline-list .btn-group:not(:last-child) {
			margin-right: 18px;
		}

		.gradient1 {
			background: var(--color-primary);
			background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
		}
	}
</style>
