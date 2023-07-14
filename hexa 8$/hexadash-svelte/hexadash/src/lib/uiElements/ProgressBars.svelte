<script>
	import { Col, Card, CardHeader, CardBody, Progress } from 'sveltestrap';
</script>

<Col lg={6}>
	<Card class="mb-4">
		<CardHeader>
			<h6>Progressbar Simple</h6>
		</CardHeader>
		<CardBody>
			<div class="text-center">0%</div>
			<Progress class="mb-15" />
			<div class="text-center">25%</div>
			<Progress class="mb-15" value={25} />
			<div class="text-center">50%</div>
			<Progress class="mb-15" value={50} />
			<div class="text-center">75%</div>
			<Progress class="mb-15" value={75} />
			<div class="text-center">100%</div>
			<Progress class="mb-15" value={100} />
		</CardBody>
	</Card>

	<Card class="mb-4">
		<CardHeader>
			<h6>Progressbar Colors</h6>
		</CardHeader>
		<CardBody>
			<Progress class="mb-15" value={2 * 5} />
			<Progress class="mb-15" color="success" value={25} />
			<Progress class="mb-15" color="info" value={50} />
			<Progress class="mb-15" color="warning" value={75} />
			<Progress class="mb-15" color="danger" value={100} />
		</CardBody>
	</Card>

	<Card class="mb-4">
		<CardHeader>
			<h6>Progressbar with labels</h6>
		</CardHeader>
		<CardBody>
			<Progress class="mb-15" value={25}>25%</Progress>
			<Progress class="mb-15" value={50}>1/2</Progress>
			<Progress class="mb-15" value={75}>You're almost there!</Progress>
			<Progress class="mb-15" color="success" value={100}>You did it!</Progress>
			<Progress class="mb-15" multi>
				<Progress bar value={15}>Meh</Progress>
				<Progress bar color="success" value={30}>Wow!</Progress>
				<Progress bar color="info" value={25}>Cool</Progress>
				<Progress bar color="warning" value={20}>20%</Progress>
				<Progress bar color="danger" value={5}>!!</Progress>
			</Progress>
		</CardBody>
	</Card>

	<Card class="mb-4">
		<CardHeader>
			<h6>Progressbar Striped</h6>
		</CardHeader>
		<CardBody>
			<Progress class="mb-15" striped value={2 * 5} />
			<Progress class="mb-15" striped color="success" value={25} />
			<Progress class="mb-15" striped color="info" value={50} />
			<Progress class="mb-15" striped color="warning" value={75} />
			<Progress class="mb-15" striped color="danger" value={100} />
			<Progress class="mb-15" multi>
				<Progress striped bar value={10} />
				<Progress striped bar color="success" value={30} />
				<Progress striped bar color="warning" value={20} />
				<Progress striped bar color="danger" value={20} />
			</Progress>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="mb-4">
		<CardHeader>
			<h6>Progressbar Animated</h6>
		</CardHeader>
		<CardBody>
			<Progress class="mb-15" animated value={2 * 5} />
			<Progress class="mb-15" animated color="success" value={25} />
			<Progress class="mb-15" animated color="info" value={50} />
			<Progress class="mb-15" animated color="warning" value={75} />
			<Progress class="mb-15" animated color="danger" value={100} />
			<Progress class="mb-15" multi>
				<Progress animated striped bar value={10} />
				<Progress animated striped bar color="success" value={30} />
				<Progress animated bar color="warning" value={20} />
				<Progress animated bar color="danger" value={20} />
			</Progress>
		</CardBody>
	</Card>

	<Card class="mb-4">
		<CardHeader>
			<h6>Progressbar Multi</h6>
		</CardHeader>
		<CardBody>
			<div class="text-center">Plain</div>
			<Progress multi class="mb-15">
				<Progress bar value={15} />
				<Progress bar color="success" value={20} />
				<Progress bar color="info" value={20} />
				<Progress bar color="warning" value={20} />
				<Progress bar color="danger" value={15} />
			</Progress>
			<div class="text-center">With Labels</div>
			<Progress multi class="mb-15">
				<Progress bar value={15}>Meh</Progress>
				<Progress bar color="success" value={35}>Wow!</Progress>
				<Progress bar color="warning" value={25}>25%</Progress>
				<Progress bar color="danger" value={25}>LOOK OUT!!</Progress>
			</Progress>
			<div class="text-center">Stripes and Animations</div>
			<Progress multi class="mb-15">
				<Progress bar striped value={15}>Stripes</Progress>
				<Progress bar animated color="success" value={30}>Animated Stripes</Progress>
				<Progress bar color="info" value={25}>Plain</Progress>
			</Progress>
		</CardBody>
	</Card>

	<Card class="mb-4">
		<CardHeader>
			<h6>Progressbar Max</h6>
		</CardHeader>
		<CardBody>
			<div class="text-center">1 of 5</div>
			<Progress class="mb-15" value={1} max={5} />
			<div class="text-center">50 of 135</div>
			<Progress class="mb-15" value={50} max={135} />
			<div class="text-center">75 of 111</div>
			<Progress class="mb-15" value={75} max={111} />
			<div class="text-center">463 of 500</div>
			<Progress class="mb-15" value={463} max={500} />

			<div class="text-center">Various (40) of 55</div>
			<Progress class="mb-15" multi>
				<Progress bar value={5} max={55}>5</Progress>
				<Progress bar color="success" value={15} max={55}>15</Progress>
				<Progress bar color="warning" value={10} max={55}>10</Progress>
				<Progress bar color="danger" value={10} max={55}>10</Progress>
			</Progress>
		</CardBody>
	</Card>
</Col>
