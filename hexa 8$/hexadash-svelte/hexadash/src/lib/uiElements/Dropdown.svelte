<script>
	import {
		Col,
		Card,
		CardHeader,
		CardBody,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Nav
	} from 'sveltestrap';
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="dropdown dropdown-hover">
				<a class="btn-link" href={'#'}>
					Hover me
					<img class="svg" alt="" src={'/img/svg/chevron-down.svg'} />
				</a>

				<div class="dropdown-default dropdown-clickEvent">
					<a class="dropdown-item" href={'#'}>Item One</a>
					<a class="dropdown-item" href={'#'}>Item Two</a>
					<a class="dropdown-item" href={'#'}>Item Three</a>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Other elements</h6>
		</CardHeader>
		<CardBody>
			<div class="dropdown  dropdown-hover">
				<a class="btn-link" href={'#'}>
					Hover me
					<img class="svg" alt="" src={'/img/svg/chevron-down.svg'} />
				</a>
				<div class="dropdown-default">
					<a class="dropdown-item" href={'#'}>Item One</a>
					<a class="dropdown-item" href={'#'}>Item Two</a>
					<a class="dropdown-item" href={'#'}>Item Three</a>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Click event</h6>
		</CardHeader>
		<CardBody>
			<Dropdown class="dropdown-hover">
				<DropdownToggle nav class="p-0">
					Click menu item
					<img class="svg" alt="" src={'/img/svg/chevron-down.svg'} />
				</DropdownToggle>

				<DropdownMenu class="dropdown-default">
					<DropdownItem href={'#'}>Item One</DropdownItem>
					<DropdownItem href={'#'}>Item Two</DropdownItem>
					<DropdownItem href={'#'}>Item Three</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Placement</h6>
		</CardHeader>
		<CardBody>
			<div class="row justify-content-end">
				<div class="col-12 mb-2">
					<div class="dropdown-list">
						<div class="dropdown dropdown-btn dropdown-hover">
							<button class="btn btn-outline-lighten fs-14 fw-400"> Bottom Left </button>
							<div class="dropdown-default dropdown-bottomLeft">
								<a class="dropdown-item" href={'#'}>Item One</a>
								<a class="dropdown-item" href={'#'}>Item Two</a>
								<a class="dropdown-item" href={'#'}>Item Three</a>
							</div>
						</div>

						<div class="dropdown dropdown-btn dropdown-hover">
							<button class="btn btn-outline-lighten fs-14 fw-400"> Bottom Right </button>
							<div class="dropdown-default dropdown-bottomRight">
								<a class="dropdown-item" href={'#'}>Item One</a>
								<a class="dropdown-item" href={'#'}>Item Two</a>
								<a class="dropdown-item" href={'#'}>Item Three</a>
							</div>
						</div>

						<div class="dropdown dropdown-btn dropdown-hover">
							<button class="btn btn-outline-lighten fs-14 fw-400"> Bottom Center </button>
							<div class="dropdown-default dropdown-bottomCenter">
								<a class="dropdown-item" href={'#'}>Item One</a>
								<a class="dropdown-item" href={'#'}>Item Two</a>
								<a class="dropdown-item" href={'#'}>Item Three</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12">
					<div class="dropdown-list">
						<div class="dropdown dropdown-btn dropdown-hover">
							<button class="btn btn-outline-lighten fs-14 fw-400"> Top Left </button>
							<div class="dropdown-default dropdown-topLeft">
								<a class="dropdown-item" href={'#'}>Item One</a>
								<a class="dropdown-item" href={'#'}>Item Two</a>
								<a class="dropdown-item" href={'#'}>Item Three</a>
							</div>
						</div>

						<div class="dropdown dropdown-btn dropdown-hover">
							<button class="btn btn-outline-lighten fs-14 fw-400"> Top Center </button>
							<div class="dropdown-default dropdown-topCenter">
								<a class="dropdown-item" href={'#'}>Item One</a>
								<a class="dropdown-item" href={'#'}>Item Two</a>
								<a class="dropdown-item" href={'#'}>Item Three</a>
							</div>
						</div>

						<div class="dropdown dropdown-btn dropdown-hover">
							<button class="btn btn-outline-lighten fs-14 fw-400"> Top Right </button>
							<div class="dropdown-default dropdown-topRight">
								<a class="dropdown-item" href={'#'}>Item One</a>
								<a class="dropdown-item" href={'#'}>Item Two</a>
								<a class="dropdown-item" href={'#'}>Item Three</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Trigger mode</h6>
		</CardHeader>
		<CardBody>
			<Dropdown class="dropdown-click">
				<DropdownToggle nav class="btn-link">
					Click me
					<img class="svg" alt="" src={'/img/svg/chevron-down.svg'} />
				</DropdownToggle>

				<DropdownMenu class="dropdown-default">
					<DropdownItem href={'#'}>Item One</DropdownItem>
					<DropdownItem href={'#'}>Item Two</DropdownItem>
					<DropdownItem href={'#'}>Item Three</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Button with dropdown menu</h6>
		</CardHeader>
		<CardBody>
			<div class="row">
				<div class="col-lg-10">
					<div class="dropdown-list">
						<Dropdown class="dropdown-click">
							<div class="btn-group dropleft">
								<button class="btn btn-outline-lighten btn-sm hover-border-0 hover-opacity-btn"
									>Dropdown</button
								>

								<DropdownToggle
									color="white"
									class="btn-outline-lighten btn-sm dropdown-toggle-split hover-border-0"
								>
									<img class="svg m-0" alt="" src={'/img/svg/more-horizontal.svg'} />
								</DropdownToggle>

								<DropdownMenu class="dropdown-default">
									<DropdownItem href={'#'}>Item One</DropdownItem>
									<DropdownItem href={'#'}>Item Two</DropdownItem>
									<DropdownItem href={'#'}>Item Three</DropdownItem>
								</DropdownMenu>
							</div>
						</Dropdown>

						<Dropdown class="dropdown-click">
							<div class="btn-group dropleft">
								<button class="btn btn-outline-lighten btn-sm hover-border-0 hover-opacity-btn"
									>Dropdown</button
								>

								<DropdownToggle
									color="white"
									class="btn-outline-lighten btn-sm dropdown-toggle-split hover-border-0"
								>
									<img class="svg m-0" alt="" src={'/img/svg/user.svg'} />
								</DropdownToggle>

								<DropdownMenu class="dropdown-default">
									<DropdownItem href={'#'}>Item One</DropdownItem>
									<DropdownItem href={'#'}>Item Two</DropdownItem>
									<DropdownItem href={'#'}>Item Three</DropdownItem>
								</DropdownMenu>
							</div>
						</Dropdown>

						<Dropdown class="dropdown-click dropdown-disable">
							<div class="btn-group dropleft">
								<button class="btn btn-outline-lighten btn-sm hover-border-0 hover-opacity-btn"
									>Dropdown</button
								>

								<DropdownToggle
									disabled
									class="btn-outline-lighten btn-sm dropdown-toggle-split hover-border-0 border-left"
									color=""
								>
									<img class="svg m-0" alt="" src={'/img/svg/more-horizontal.svg'} />
								</DropdownToggle>

								<DropdownMenu class="dropdown-default">
									<DropdownItem href={'#'}>Item One</DropdownItem>
									<DropdownItem href={'#'}>Item Two</DropdownItem>
									<DropdownItem href={'#'}>Item Three</DropdownItem>
								</DropdownMenu>
							</div>
						</Dropdown>

						<Dropdown class="dropdown-click">
							<div class="btn-group dropleft">
								<button class="btn btn-outline-lighten btn-sm hover-border-0 hover-opacity-btn"
									>Dropdown</button
								>

								<DropdownToggle
									color="white"
									class="btn-outline-lighten btn-sm dropdown-toggle-split hover-border-0"
								>
									<img class="svg m-0" alt="" src={'/img/svg/more-horizontal.svg'} />
								</DropdownToggle>

								<DropdownMenu class="dropdown-default">
									<DropdownItem href={'#'}>Item One</DropdownItem>
									<DropdownItem href={'#'}>Item Two</DropdownItem>
									<DropdownItem href={'#'}>Item Three</DropdownItem>
								</DropdownMenu>
							</div>
						</Dropdown>

						<Dropdown class="dropdown-click">
							<div class="btn-group dropleft">
								<button class="btn btn-outline-lighten btn-sm hover-border-0 hover-opacity-btn"
									>Button</button
								>

								<DropdownToggle
									color="white"
									class="btn-outline-lighten btn-sm dropdown-toggle-split hover-border-0"
								>
									<img class="svg m-0" alt="" src={'/img/svg/more-horizontal.svg'} />
								</DropdownToggle>

								<DropdownMenu class="dropdown-default">
									<DropdownItem href={'#'}>Item One</DropdownItem>
									<DropdownItem href={'#'}>Item Two</DropdownItem>
									<DropdownItem href={'#'}>Item Three</DropdownItem>
								</DropdownMenu>
							</div>
						</Dropdown>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>
