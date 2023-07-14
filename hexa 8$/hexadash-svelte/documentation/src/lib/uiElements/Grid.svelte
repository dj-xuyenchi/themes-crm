<script>
	import { Container, Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
</script>

<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Equal-width</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row w-100">
					<div class="bd-example">
						<Container fluid>
							<Row>
								<Col>1 of 2</Col>
								<Col>2 of 2</Col>
							</Row>
							<Row>
								<Col>1 of 3</Col>
								<Col>2 of 3</Col>
								<Col>3 of 3</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Setting one column width</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<Row>
								<Col>1 of 3</Col>
								<Col xs="6">2 of 3 (wider)</Col>
								<Col>3 of 3</Col>
							</Row>
							<Row>
								<Col>1 of 3</Col>
								<div class="col-5">2 of 3 (wider)</div>
								<Col>3 of 3</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Variable width content</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<Row class="justify-content-md-center">
								<Col lg={2}>1 of 3</Col>
								<Col md="auto">Variable width content</Col>
								<Col lg={2}>3 of 3</Col>
							</Row>
							<Row>
								<Col>1 of 3</Col>
								<Col md="auto">Variable width content</Col>
								<Col lg={2}>3 of 3</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Variable width content</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<Row class="justify-content-md-center">
								<Col lg={2}>1 of 3</Col>
								<Col md="auto">Variable width content</Col>
								<Col lg={2}>3 of 3</Col>
							</Row>
							<Row>
								<Col>1 of 3</Col>
								<Col md="auto">Variable width content</Col>
								<Col lg={2}>3 of 3</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Equal-width multi-row</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<Row>
								<Col>col</Col>
								<Col>col</Col>
								<div class="w-100" />
								<Col>col</Col>
								<Col>col</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>All breakpoints</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<Row>
								<Col>col</Col>
								<Col>col</Col>
								<Col>col</Col>
								<Col>col</Col>
							</Row>
							<Row>
								<Col xs="8">col-8</Col>
								<Col xs="4">col-4</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Stacked to horizontal</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<Row>
								<Col sm="8">col-sm-8</Col>
								<Col sm="4">col-sm-4</Col>
							</Row>
							<Row>
								<Col sm>col-sm</Col>
								<Col sm>col-sm</Col>
								<Col sm>col-sm</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Mix and match</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<!-- Stack the columns on mobile by making one full-width and the other half-width -->
							<Row>
								<Col xs="12" md="8">.col-12 .col-md-8</Col>
								<Col xs="6" md="4">.col-6 .col-md-4</Col>
							</Row>

							<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
							<Row>
								<Col xs="6" md="4">.col-6 .col-md-4</Col>
								<Col xs="6" md="4">.col-6 .col-md-4</Col>
								<Col xs="6" md="4">.col-6 .col-md-4</Col>
							</Row>

							<!-- Columns are always 50% wide, on mobile and desktop -->
							<Row>
								<Col xs="6">.col-6</Col>
								<Col xs="6">.col-6</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Vertical alignment</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row bd-example-row-flex-cols">
					<div class="bd-example">
						<Container fluid>
							<Row class="align-items-start">
								<Col>One of three columns</Col>
								<Col>One of three columns</Col>
								<Col>One of three columns</Col>
							</Row>
							<Row class="align-items-center">
								<Col>One of three columns</Col>
								<Col>One of three columns</Col>
								<Col>One of three columns</Col>
							</Row>
							<Row class="align-items-end">
								<Col>One of three columns</Col>
								<Col>One of three columns</Col>
								<Col>One of three columns</Col>
							</Row>
							<Row>
								<Col class="align-self-start">One of three columns</Col>
								<Col class="align-self-center">One of three columns</Col>
								<Col class="align-self-end">One of three columns</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Horizontal alignment</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<Row class="justify-content-start">
								<Col xs="4">One of two columns</Col>
								<Col xs="4">One of two columns</Col>
							</Row>
							<Row class="justify-content-center">
								<Col xs="4">One of two columns</Col>
								<Col xs="4">One of two columns</Col>
							</Row>
							<Row class="justify-content-end">
								<Col xs="4">One of two columns</Col>
								<Col xs="4">One of two columns</Col>
							</Row>
							<Row class="justify-content-around">
								<Col xs="4">One of two columns</Col>
								<Col xs="4">One of two columns</Col>
							</Row>
							<Row class="justify-content-between">
								<Col xs="4">One of two columns</Col>
								<Col xs="4">One of two columns</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Offset classes</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<Row>
								<Col md="4">.col-md-4</Col>
								<Col md="4" class="offset-md-4">.col-md-4 .offset-md-4</Col>
							</Row>
							<Row>
								<Col md="3" class="offset-md-3">.col-md-3 .offset-md-3</Col>
								<Col md="3" class="offset-md-3">.col-md-3 .offset-md-3</Col>
							</Row>
							<Row>
								<Col md="6" class="offset-md-3">.col-md-6 .offset-md-3</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
<Col lg={12}>
	<div class="grid-area mb-25">
		<Card>
			<CardHeader>
				<h4>Margin utilities</h4>
			</CardHeader>
			<CardBody>
				<div class="bd-example-row">
					<div class="bd-example">
						<Container fluid>
							<Row>
								<Col md="4">.col-md-4</Col>
								<Col md="4" class="ms-auto">.col-md-4 .ms-auto</Col>
							</Row>
							<Row>
								<Col md="3" class="ms-md-auto">.col-md-3 .ms-md-auto</Col>
								<Col md="3" class="ms-md-auto">.col-md-3 .ms-md-auto</Col>
							</Row>
							<Row>
								<Col xs="auto" class="me-auto">.col-auto .me-auto</Col>
								<Col xs="auto">.col-auto</Col>
							</Row>
						</Container>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>

<style lang="scss">
	:global {
		.bd-example-row .row > .col,
		.bd-example-row .row > [class^='col-'] {
			padding-top: 0.75rem;
			padding-bottom: 0.75rem;
			background-color: rgba(95, 99, 242, 0.584);
			color: var(--color-white);
		}

		.bd-example-row .row > div:nth-last-child(odd) {
			background-color: var(--color-primary);
		}

		.bd-example-row .row + .row {
			margin-top: 1rem;
		}

		.bd-example-row .flex-items-top,
		.bd-example-row .flex-items-middle,
		.bd-example-row .flex-items-bottom {
			min-height: 6rem;
			background-color: rgba(255, 0, 0, 0.1);
		}

		.bd-example-row-flex-cols .row {
			min-height: 10rem;
			background-color: rgba(255, 0, 0, 0.1);
		}

		.bd-example-row-flex-cols .row {
			min-height: 10rem;
			background-color: rgba(255, 0, 0, 0.1);
		}
	}
</style>
