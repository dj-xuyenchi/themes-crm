<script>
	import { Col, Card, CardHeader, CardBody, Button } from 'sveltestrap';
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="empty-content text-center">
				<div class="empty-content__image">
					<img src="/img/drawer-file.png" alt="Admin Empty" />
				</div>
				<div class="empty-content__text">
					<p class="">No Data</p>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Customize</h6>
		</CardHeader>
		<CardBody>
			<div class="empty-content text-center">
				<div class="empty-content__image">
					<img src="/img/svg/drawer-empty.svg" alt="Admin Empty" />
				</div>
				<div class="empty-content__text">
					<p>Customize <a href={'#'}>Description</a></p>
					<div class="empty-content__action">
						<Button color="primary" size="sm" class="btn-squared">Create New</Button>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Chose image</h6>
		</CardHeader>
		<CardBody>
			<div class="empty-content text-center">
				<div class="empty-content__image">
					<img src="/img/drawer-empty.png" alt="Admin Empty" />
				</div>
				<div class="empty-content__text">
					<p class="disabled">No Data</p>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>No Description</h6>
		</CardHeader>
		<CardBody>
			<div class="empty-content text-center">
				<div class="empty-content__image">
					<img src="/img/drawer-file.png" alt="Admin Empty" />
				</div>
				<div class="empty-content__text">
					<p class="">No Data</p>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<style lang="scss">
</style>
