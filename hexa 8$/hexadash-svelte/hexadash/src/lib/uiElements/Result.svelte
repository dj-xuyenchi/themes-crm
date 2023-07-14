<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
</script>

<Col lg={6}>
	<div class="custom-notice">
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Basic</h6>
			</CardHeader>
			<CardBody>
				<div class="custom-notice__content">
					<div class="custom-notice__top text-center">
						<div class="custom-notice__icon bg-success">
							<i class="uil uil-check color-white" />
						</div>
						<div class="custom-notice__text">
							<h4>Successfully Purchased Cloud Server ECS!</h4>

							<p>
								Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes,
								please wait.
							</p>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>

<Col lg={6}>
	<div class="custom-notice">
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Info</h6>
			</CardHeader>
			<CardBody>
				<div class="custom-notice__content">
					<div class="custom-notice__top text-center">
						<div class="custom-notice__icon bg-info">
							<i class="uil uil-exclamation color-white" />
						</div>
						<div class="custom-notice__text">
							<h4>There are some problems with your operation.</h4>
						</div>
					</div>

					<div class="custom-notice__action d-flex justify-content-center">
						<a href={'#'} class="btn btn-sm btn-primary">Go Console</a>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>

<Col lg={6}>
	<div class="custom-notice">
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Warning</h6>
			</CardHeader>
			<CardBody>
				<div class="custom-notice__content">
					<div class="custom-notice__top text-center">
						<div class="custom-notice__icon bg-info">
							<i class="uil uil-exclamation-triangle color-white" />
						</div>
						<div class="custom-notice__text">
							<h4>There are some problems with your operation.</h4>
						</div>
					</div>

					<div class="custom-notice__action d-flex justify-content-center">
						<a href={'#'} class="btn btn-sm btn-primary">Go Console</a>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>

<Col lg={6}>
	<div class="custom-notice">
		<Card class="card-default card-md mb-4">
			<CardHeader>
				<h6>Error</h6>
			</CardHeader>
			<CardBody>
				<div class="custom-notice__content">
					<div class="custom-notice__top text-center">
						<div class="custom-notice__icon bg-danger">
							<i class="uil uil-times color-white" />
						</div>
						<div class="custom-notice__text">
							<h4>Submission Failed</h4>

							<p>Please check and modify the following information before resubmitting.</p>
						</div>
					</div>

					<div class="notice-listBlock bg-normal mt-30">
						<h6>The content you submitted has the following error:</h6>
						<ul class="notice-list">
							<li>
								<img class="svg color-danger" alt="" src={'/img/svg/x-circle.svg'} />
								<span class="notice-list__text"
									>Your account has been frozen <a href={'#'}>Thaw immediately ></a></span
								>
							</li>
							<li>
								<img class="svg color-danger" alt="" src={'/img/svg/x-circle.svg'} />
								<span class="notice-list__text"
									>Your account is not yet eligible to apply<a href={'#'}>Apply Unlock ></a></span
								>
							</li>
						</ul>
					</div>

					<div class="custom-notice__action d-flex justify-content-center">
						<a href={'#'} class="btn btn-sm btn-primary">Go Console</a>
						<a href={'#'} class="btn btn-sm btn-light btn-outlined">Buy Again</a>
					</div>
				</div>
			</CardBody>
		</Card>
	</div>
</Col>
