<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
</script>

<Col lg={12}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-steps-wrap">
				<div class="custom-steps">
					<ul class="nav d-flex flex-row">
						<li class="custom-steps__item finished">
							<div class="custom-steps__line" />
							<div class="custom-steps__content">
								<span class="custom-steps__icon"><i class="la la-check" /></span>
								<span class="custom-steps__text">Finished</span>
							</div>
						</li>
						<li class="custom-steps__item active">
							<div class="custom-steps__line" />
							<div class="custom-steps__content">
								<span class="custom-steps__icon"><span class="custom-steps__count">2</span></span>
								<span class="custom-steps__text">In Progress</span>
							</div>
						</li>
						<li class="custom-steps__item">
							<div class="custom-steps__content">
								<span class="custom-steps__icon"><span class="custom-steps__count">3</span></span>
								<span class="custom-steps__text">Waiting</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>
