<script>
	import { Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
</script>

<Card class="card-default card-md mb-4">
	<CardHeader>
		<h6>Basic card</h6>
	</CardHeader>
	<CardBody>
		<Row>
			<Col lg={4}>
				<div class="cards-wrapper">
					<div class="card-single mb-4">
						<Card class="card-default card-md bg-transparent card-bordered">
							<CardHeader>
								<h6>Default size card</h6>

								<div class="card-extra">
									<div class="dropdown dropdown-hover">
										<a class="btn-link" href={'#'}>More</a>

										<div class="dropdown-default">
											<a class="dropdown-item" href={'#'}>More One</a>
											<a class="dropdown-item" href={'#'}>More Two</a>
											<a class="dropdown-item" href={'#'}>More Three</a>
										</div>
									</div>
								</div>
							</CardHeader>
							<CardBody>
								<div class="card-content">
									<p>Card content</p>
									<p>Card content</p>
									<p>Card content</p>
								</div>
							</CardBody>
						</Card>
					</div>
					<div class="card-single">
						<Card class="card-default card-sm bg-transparent card-bordered">
							<CardHeader>
								<h6>Small size card</h6>

								<div class="card-extra">
									<div class="dropdown dropdown-hover">
										<a class="btn-link" href={'#'}>More</a>

										<div class="dropdown-default">
											<a class="dropdown-item" href={'#'}>More One</a>
											<a class="dropdown-item" href={'#'}>More Two</a>
											<a class="dropdown-item" href={'#'}>More Three</a>
										</div>
									</div>
								</div>
							</CardHeader>
							<CardBody>
								<div class="card-content">
									<p>Card content</p>
									<p>Card content</p>
									<p>Card content</p>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Col>
		</Row>
	</CardBody>
</Card>
<Card class="card-default card-md mb-4">
	<CardHeader>
		<h6>Basic card</h6>
	</CardHeader>
	<CardBody>
		<Row>
			<Col lg={4}>
				<div class="cards-wrapper">
					<div class="card-single mb-4">
						<Card class="card-default card-md bg-normal card-bordered">
							<CardHeader>
								<h6>Default size card</h6>

								<div class="card-extra">
									<div class="dropdown dropdown-hover">
										<a class="btn-link" href={'#'}>More</a>

										<div class="dropdown-default">
											<a class="dropdown-item" href={'#'}>More One</a>
											<a class="dropdown-item" href={'#'}>More Two</a>
											<a class="dropdown-item" href={'#'}>More Three</a>
										</div>
									</div>
								</div>
							</CardHeader>
							<CardBody>
								<div class="card-content">
									<p>Card content</p>
									<p>Card content</p>
									<p>Card content</p>
								</div>
							</CardBody>
						</Card>
					</div>
					<div class="card-single">
						<Card class="card-default card-sm bg-normal card-bordered">
							<CardHeader>
								<h6>Small size card</h6>

								<div class="card-extra">
									<div class="dropdown dropdown-hover">
										<a class="btn-link" href={'#'}>More</a>

										<div class="dropdown-default">
											<a class="dropdown-item" href={'#'}>More One</a>
											<a class="dropdown-item" href={'#'}>More Two</a>
											<a class="dropdown-item" href={'#'}>More Three</a>
										</div>
									</div>
								</div>
							</CardHeader>
							<CardBody>
								<div class="card-content">
									<p>Card content</p>
									<p>Card content</p>
									<p>Card content</p>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Col>
		</Row>
	</CardBody>
</Card>
<Card class="card-default card-md mb-4">
	<CardHeader>
		<h6>Simple card</h6>
	</CardHeader>
	<CardBody>
		<Row>
			<Col lg={4}>
				<div class="cards-wrapper">
					<div class="card-single">
						<Card class="card-default card-md bg-transparent card-bordered">
							<CardBody>
								<div class="card-content">
									<p>Card content</p>
									<p>Card content</p>
									<p>Card content</p>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Col>
		</Row>
	</CardBody>
</Card>
<Card class="card-default card-md mb-4">
	<CardHeader>
		<h6>Simple card</h6>
	</CardHeader>
	<CardBody>
		<div class="columnCard-wrapper">
			<Row>
				<Col lg={4} class="mb-20">
					<Card class="card-default card-md">
						<CardHeader>
							<h6>Card title</h6>
						</CardHeader>
						<CardBody>
							<div class="card-content">
								<p>Card content</p>
								<p>Card content</p>
								<p>Card content</p>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col lg={4} class="mb-20">
					<Card class="card-default card-md">
						<CardHeader>
							<h6>Card title</h6>
						</CardHeader>
						<CardBody>
							<div class="card-content">
								<p>Card content</p>
								<p>Card content</p>
								<p>Card content</p>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col lg={4} class="mb-20">
					<Card class="card-default card-md">
						<CardHeader>
							<h6>Card title</h6>
						</CardHeader>
						<CardBody>
							<div class="card-content">
								<p>Card content</p>
								<p>Card content</p>
								<p>Card content</p>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	</CardBody>
</Card>
<Card class="card-default card-md mb-4">
	<CardHeader>
		<h6>Simple card</h6>
	</CardHeader>
	<CardBody>
		<div class="columnGrid-wrapper">
			<Row>
				<div class="col-12">
					<Card class="card-default card-md bg-transparent card-bordered">
						<CardHeader>
							<h6>Card title</h6>
						</CardHeader>
						<CardBody>
							<div class="card-grid-table table-responsive">
								<table class="table">
									<tr>
										<td>
											<p>Content</p>
										</td>
										<td>
											<p>Content</p>
										</td>
										<td>
											<p>Content</p>
										</td>
										<td>
											<p>Content</p>
										</td>
									</tr>
									<tr>
										<td>
											<p>Content</p>
										</td>
										<td>
											<p>Content</p>
										</td>
										<td>
											<p>Content</p>
										</td>
										<td>
											<p>Content</p>
										</td>
									</tr>
								</table>
							</div>
						</CardBody>
					</Card>
				</div>
			</Row>
		</div>
	</CardBody>
</Card>
