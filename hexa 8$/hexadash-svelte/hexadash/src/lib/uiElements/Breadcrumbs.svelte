<script>
	import { Row, Col, Card, CardHeader, CardBody, Breadcrumb, BreadcrumbItem } from 'sveltestrap';
</script>

<Row>
	<Col lg={6}>
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Bootstrap Default</h6>
			</CardHeader>
			<CardBody>
				<Breadcrumb>
					<BreadcrumbItem>
						<a href="#home">Home</a>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<a href="#library">Library</a>
					</BreadcrumbItem>
					<BreadcrumbItem active>Data</BreadcrumbItem>
				</Breadcrumb>
			</CardBody>
		</Card>
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Custom Basic</h6>
			</CardHeader>
			<CardBody>
				<ul class="custom-breadcrumb nav">
					<li class="custom-breadcrumb__item">
						<a href={'#'}> Home </a>
						<span class="breadcrumb__seperator">
							<span class="la la-slash" />
						</span>
					</li>
					<li class="custom-breadcrumb__item">
						<a href={'#'}>Application Center</a>
						<span class="breadcrumb__seperator">
							<span class="la la-slash" />
						</span>
					</li>

					<li class="custom-breadcrumb__item">
						<a href={'#'}>Application list</a>
						<span class="breadcrumb__seperator">
							<span class="la la-slash" />
						</span>
					</li>

					<li class="custom-breadcrumb__item">
						<span>An Application</span>
					</li>
				</ul>
			</CardBody>
		</Card>
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Breadcrumb with dropdown menu</h6>
			</CardHeader>
			<CardBody>
				<ul class="custom-breadcrumb nav">
					<li class="custom-breadcrumb__item">
						<a href={'#'}> Home </a>
						<span class="breadcrumb__seperator">
							<span class="la la-slash" />
						</span>
					</li>
					<li class="custom-breadcrumb__item">
						<a href={'#'}>Application Center</a>
						<span class="breadcrumb__seperator">
							<span class="la la-slash" />
						</span>
					</li>

					<li class="custom-breadcrumb__item">
						<div class="dropdown dropdown-hover">
							<a href={'#'} data-bs-toggle="dropdown">General</a>
							<span class="breadcrumb__seperator">
								<span class="la la-slash" />
							</span>
							<div class="dropdown-default">
								<a class="dropdown-item" href={'#'}>Item One</a>
								<a class="dropdown-item" href={'#'}>Item Two</a>
								<a class="dropdown-item" href={'#'}>Item Three</a>
							</div>
						</div>
					</li>

					<li class="custom-breadcrumb__item">
						<span>An Application</span>
					</li>
				</ul>
			</CardBody>
		</Card>
	</Col>
	<Col lg={6}>
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Custom Basic with icon</h6>
			</CardHeader>
			<CardBody>
				<ul class="custom-breadcrumb nav">
					<li class="custom-breadcrumb__item">
						<a href={'#'}>
							<span class="la la-home" />
						</a>
						<span class="breadcrumb__seperator">
							<span class="la la-slash" />
						</span>
					</li>
					<li class="custom-breadcrumb__item">
						<a href={'#'}>Application Center</a>
						<span class="breadcrumb__seperator">
							<span class="la la-slash" />
						</span>
					</li>

					<li class="custom-breadcrumb__item">
						<span>An Application</span>
					</li>
				</ul>
			</CardBody>
		</Card>
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Configuring the Separator</h6>
			</CardHeader>
			<CardBody>
				<ul class="custom-breadcrumb nav">
					<li class="custom-breadcrumb__item">
						<a href={'#'}> Home </a>
						<span class="breadcrumb__seperator">
							<span class="la la-angle-right" />
						</span>
					</li>
					<li class="custom-breadcrumb__item">
						<a href={'#'}>Application Center</a>
						<span class="breadcrumb__seperator">
							<span class="la la-angle-right" />
						</span>
					</li>

					<li class="custom-breadcrumb__item">
						<a href={'#'}>Application list</a>
						<span class="breadcrumb__seperator">
							<span class="la la-angle-right" />
						</span>
					</li>

					<li class="custom-breadcrumb__item">
						<span>An Application</span>
					</li>
				</ul>
			</CardBody>
		</Card>
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Configuring the Separator</h6>
			</CardHeader>
			<CardBody>
				<ul class="custom-breadcrumb nav">
					<li class="custom-breadcrumb__item">
						<a href={'#'} class="me-1">Location : </a>
					</li>
					<li class="custom-breadcrumb__item">
						<a href={'#'}>Application Center</a>
						<span class="breadcrumb__seperator">
							<span class="la la-angle-right" />
						</span>
					</li>

					<li class="custom-breadcrumb__item">
						<a href={'#'}>Application list</a>
						<span class="breadcrumb__seperator">
							<span class="la la-angle-right" />
						</span>
					</li>

					<li class="custom-breadcrumb__item">
						<span>An Application</span>
					</li>
				</ul>
			</CardBody>
		</Card>
	</Col>
</Row>
