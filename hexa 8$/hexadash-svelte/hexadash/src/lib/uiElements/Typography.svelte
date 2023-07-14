<script>
	import { Card, CardHeader, CardBody, Button } from 'sveltestrap';
	const buttonColors = [
		{
			color: 'primary',
			colorName: 'Primary',
			colorCode: '#8231D3',
			hoverColor: '#6726A8'
		},
		{
			color: 'secondary',
			colorName: 'Secondary',
			colorCode: '#5840FF',
			hoverColor: '#3520C8'
		},
		{
			color: 'success',
			colorName: 'Success',
			colorCode: '#01B81A',
			hoverColor: '#0D811D'
		},
		{
			color: 'info',
			colorName: 'Info',
			colorCode: '#00AAFF',
			hoverColor: '#0787C7'
		},
		{
			color: 'warning',
			colorName: 'Warning',
			colorCode: '#FA8B0C',
			hoverColor: '#D9790A'
		},
		{
			color: 'danger',
			colorName: 'Danger',
			colorCode: '#FF0F0F',
			hoverColor: '#CB0000'
		},
		{
			color: 'dark',
			colorName: 'Dark',
			colorCode: '#0A0A0A',
			hoverColor: '#272525'
		},
		{
			color: 'gray',
			colorName: 'Gray',
			colorCode: '#404040',
			hoverColor: '#585858'
		},
		{
			color: 'light',
			colorName: 'Light',
			colorCode: '#747474',
			hoverColor: '#747474'
		},
		{
			color: 'lighten',
			colorName: 'Extra Light',
			colorCode: '#A0A0A0',
			hoverColor: '#A0A0A0'
		}
	];

	const buttonHoverColors = buttonColors.slice(0, 8);
</script>

<div class="dashboard-base">
	<Card class="card-md mb-30 shadow1">
		<CardHeader class="border-bottom-0  p-sm-30">
			<h5 class="fw-500 ">Theme colors</h5>
		</CardHeader>
		<CardBody class="pt-0 px-30 pb-35">
			<div class="buttons-list d-flex flex-wrap">
				{#each buttonColors as item}
					{#if item.color === 'light'}
						<div class="text-center">
							<Button
								color={item.color}
								size="default"
								class="btn-squared radius-xs fs-15 fw-400 px-30 bg-light text-white text-capitalize"
							>
								{item.colorName}
							</Button>

							<span class="fs-14 fw-400 color-dark">{item.colorCode}</span>
						</div>
					{:else}
						<div class="text-center">
							<Button
								color={item.color}
								size="default"
								class="btn-squared radius-xs fs-15 fw-400  text-white text-capitalize"
							>
								{item.colorName}
							</Button>

							<span class="fs-14 fw-400 color-dark">{item.colorCode}</span>
						</div>
					{/if}
				{/each}
			</div>
		</CardBody>
	</Card>

	<Card class="card-md mb-30 shadow1">
		<CardHeader class="border-bottom-0  p-sm-30">
			<h5 class="fw-500 ">Hover colors</h5>
		</CardHeader>
		<CardBody class="pt-0 px-30 pb-35">
			<div class="buttons-list d-flex flex-wrap ">
				{#each buttonHoverColors as item}
					<div class="text-center">
						<Button
							size="default"
							class="btn-{item.color}-hover btn-squared radius-xs fs-15 fw-400"
						>
							{item.colorName}
						</Button>
						<span class="fs-14 fw-400 color-dark">{item.hoverColor}</span>
					</div>
				{/each}
			</div>
		</CardBody>
	</Card>

	<Card class="card-md mb-30 shadow1">
		<CardHeader class="border-bottom-0 p-sm-30">
			<h5 class="fw-500 ">Gradient colors</h5>
		</CardHeader>
		<CardBody class="pt-0 px-30 pb-30">
			<div class="d-flex flex-wrap m-n10 ">
				<div class="gradient-color-name gradient1 py-35 px-20 color-white radius-xl m-10">
					<span class="me-sm-40 me-0  fs-15">#8231D3</span>
					<span class="ms-40 fs-15">#5840FF</span>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-md mb-30 shadow1">
		<CardHeader class="border-bottom-0  p-sm-30">
			<h5 class="fw-500 ">Border colors</h5>
		</CardHeader>
		<CardBody class="pt-0 px-30 pb-30">
			<div class="d-flex flex-wrap m-n15 ">
				<div
					class="d-flex align-items-center justify-content-between py-15 px-20 border-color radius-xs m-15 "
				>
					<span class="fs-15 fw-400 color-gray me-sm-50 me-20">Border color 1</span>
					<span class="fs-14 fw-500 color-dark ms-sm-50">#F1F2F6</span>
				</div>
				<div
					class="d-flex align-item-center justify-content-between py-15 px-20 b-light radius-xs m-15 "
				>
					<span class="fs-15 fw-400 color-gray me-sm-50 me-20">Border color 2</span>
					<span class="fs-14 fw-500 color-dark ms-sm-50">#E3E6EF</span>
				</div>
				<div
					class="d-flex align-item-center justify-content-between py-15 px-20 b-deep radius-xs m-15"
				>
					<span class="fs-15 fw-400 color-gray me-sm-50 me-20">Border color 3</span>
					<span class="fs-14 fw-500 color-dark ms-sm-50 ">#C6D0DC</span>
				</div>
			</div>
			<!-- ends: .buttons-list" -->
		</CardBody>
	</Card>

	<Card class="card-md mb-30 shadow1">
		<CardHeader class="border-bottom-0  p-sm-30">
			<h5 class="fw-500 ">Background gray colors</h5>
		</CardHeader>
		<CardBody class="pt-0 px-30 pb-30">
			<div class="d-flex flex-wrap m-n15 ">
				<div
					class="d-flex align-items-center justify-content-between py-15 px-20 bg-normal radius-xs m-15"
				>
					<span class="fs-15 fw-400 color-gray me-sm-50 me-20 pe-sm-30">Bg color 1</span>
					<span class="fs-14 fw-500 color-dark ms-sm-50">#F8F9FB</span>
				</div>
				<div
					class="d-flex align-item-center justify-content-between py-15 px-20 bg-lighter radius-xs m-15"
				>
					<span class="fs-15 fw-400 color-gray me-sm-50 me-20 pe-sm-30">Bg color 2</span>
					<span class="fs-14 fw-500 color-dark ms-sm-50">#F4F5F7</span>
				</div>
				<div
					class="d-flex align-item-center justify-content-between py-15 px-20 bg-deep radius-xs m-15"
				>
					<span class="fs-15 fw-400 color-gray me-sm-50 me-20 pe-sm-30">Bg color 3</span>
					<span class="fs-14 fw-500 color-dark ms-sm-50">#EFF0F3</span>
				</div>
			</div>
			<!-- ends: .buttons-list" -->
		</CardBody>
	</Card>

	<Card class="card-md mb-30 shadow1">
		<CardHeader class="border-bottom-0  p-sm-30">
			<h5 class="fw-500 ">butttons</h5>
		</CardHeader>
		<CardBody class="pt-0 px-30 pb-30">
			<div class="buttons-list d-flex flex-wrap align-items-end mb-45">
				<Button color="primary" size="xs" class="btn-squared btn-shadow-primary"
					>Extra small
				</Button>

				<Button color="primary" size="sm" class="btn-squared btn-shadow-primary">Small</Button>

				<Button color="primary" size="default" class="btn-squared btn-shadow-primary"
					>Normal
				</Button>

				<Button color="primary" size="lg" class="btn-squared btn-shadow-primary"
					>Large Button
				</Button>
			</div>
			<!-- ends: .buttons-list" -->
			<div class="buttons-list d-flex flex-wrap align-items-end mb-45">
				<Button color="primary" outline size="xs" class="btn-squared">Extra small</Button>

				<Button color="primary" outline size="sm" class="btn-squared">Small</Button>

				<Button color="primary" outline size="default" class="btn-squared btn-outline-primary "
					>Normal
				</Button>

				<Button color="primary" outline size="lg" class="btn-squared">Large Button</Button>
			</div>
			<!-- ends: .buttons-list" -->
			<div class="buttons-list d-flex flex-wrap align-items-end">
				<Button color="primary" size="" class="btn-squared btn-transparent-primary"
					>Extra small
				</Button>

				<Button color="primary" size="" class="btn-squared btn-transparent-primary">Small</Button>

				<Button color="primary" size="" class="btn-squared btn-transparent-primary">Normal</Button>

				<Button color="primary" size="" class="btn-squared btn-transparent-primary"
					>Large Button
				</Button>
			</div>
			<!-- ends: .buttons-list" -->
		</CardBody>
	</Card>

	<Card class="card-md mb-30 shadow1">
		<CardHeader class="border-bottom-0  p-sm-30">
			<h5 class="fw-500 ">
				Typography <small class="color-secondary fs-16 fw-500">Jost</small>
			</h5>
		</CardHeader>
		<CardBody class="pt-0 px-30">
			<div class="d-flex flex-wrap">
				<div class="table-responsive">
					<table class="table table-borderless mb-0 w-80">
						<tbody>
							<tr>
								<th>
									<div class="h1">h1. Default Heading</div>
								</th>
								<td class="type-info color-primary">Font Size - 30 px</td>
								<td class="type-info color-secondary">Font weight - 600</td>
								<td class="type-info color-success">Line height - 38 px</td>
							</tr>
							<tr>
								<th>
									<div class="h2">h2. Default Heading</div>
								</th>
								<td class="type-info color-primary">Font Size - 24 px</td>
								<td class="type-info color-secondary">Font weight - 600</td>
								<td class="type-info color-success">Line height - 30 px</td>
							</tr>
							<tr>
								<th>
									<div class="h3">h3. Default Heading</div>
								</th>
								<td class="type-info color-primary">Font Size - 22 px</td>
								<td class="type-info color-secondary">Font weight - 600</td>
								<td class="type-info color-success">Line height - 27 px</td>
							</tr>
							<tr>
								<th>
									<div class="h4">h4. Default Heading</div>
								</th>
								<td class="type-info color-primary">Font Size - 20 px</td>
								<td class="type-info color-secondary">Font weight - 600</td>
								<td class="type-info color-success">Line height - 24 px</td>
							</tr>
							<tr>
								<th>
									<div class="h5">h5. Default Heading</div>
								</th>
								<td class="type-info color-primary">Font Size - 18 px</td>
								<td class="type-info color-secondary">Font weight - 600</td>
								<td class="type-info color-success">Line height - 22 px</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!-- ends: .buttons-list" -->
		</CardBody>
	</Card>

	<Card class="card-md shadow1 pt-30 pb-10">
		<div class="border-bottom-0 px-30 pb-1">
			<h5>Body Text Normal</h5>
		</div>
		<CardBody class="pt-0 px-30">
			<div class="d-flex flex-wrap mb-2">
				<span class="text-normal color-primary"
					>Font Size - 15px<span class="color-secondary  mx-15">Font weight - 400</span>
					<span class="color-success"> Line height - 26px</span></span
				>
			</div>
			<!-- ends: .buttons-list" -->
			<p class="text-normal">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
				et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
				diam nonumy eirmod
			</p>
		</CardBody>
		<div class="border-bottom-0 px-30 pb-1">
			<h5>Body Text small</h5>
		</div>
		<CardBody class="pt-0 px-30">
			<div class="d-flex flex-wrap mb-2">
				<span class="text-normal color-primary"
					>Font Size - 14px<span class="color-secondary  mx-15">Font weight - 400</span>
					<span class="color-success"> Line height - 24px</span></span
				>
			</div>
			<!-- ends: .buttons-list" -->
			<p class="text-small mb-0">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
				et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
				diam nonumy eirmod
			</p>
		</CardBody>

		<div class="border-bottom-0 px-30 pb-1">
			<h5>Body Text Big</h5>
		</div>
		<CardBody class="pt-0 px-30">
			<div class="d-flex flex-wrap mb-2">
				<span class="text-normal color-primary"
					>Font Size - 16px<span class="color-secondary  mx-15">Font weight - 400</span>
					<span class="color-success"> Line height - 27px</span></span
				>
			</div>
			<!-- ends: .buttons-list" -->
			<p class="text-small mb-0">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
				et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
				Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
				diam nonumy eirmod
			</p>
		</CardBody>
	</Card>
</div>

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
		.gradient-color-name {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.dashboard-base {
			margin-top: 0;
			margin-bottom: 90px;
		}

		.dashboard-base .table th,
		.dashboard-base .table td {
			vertical-align: middle;
			padding: 0 15px;
			white-space: nowrap;
		}

		.dashboard-base .table tbody tr th {
			padding-left: 0;
		}

		.dashboard-base .type-info {
			font-size: 15px;
			line-height: 3.2;
			font-weight: 400;
			padding: 0;
		}
	}
</style>
