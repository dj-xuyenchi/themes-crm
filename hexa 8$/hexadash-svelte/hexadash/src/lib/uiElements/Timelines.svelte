<script>
	import { Col, Card, CardHeader, CardBody, TabContent, TabPane } from 'sveltestrap';
</script>

<div class="col-lg-6">
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="timeline-box">
				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble buble-primary" />
					<div class="timeline-single__content">
						<p>Create a services site 2015-09-01</p>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble buble-primary" />
					<div class="timeline-single__content">
						<p>Solve initial network problems 2015-09-01</p>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble buble-primary" />
					<div class="timeline-single__content">
						<p>Technical testing 2015-09-01</p>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-single__buble buble-primary" />
					<div class="timeline-single__content">
						<p>Network problems being solved 2015-09-01</p>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Timeline 1</h6>
		</CardHeader>
		<div class="card-body py-20 ps-sm-35 ps-30 pe-sm-50 pe-30">
			<div class="timeline-box--3 timeline-vertical left-middle basic-timeline px-10">
				<ul class="timeline">
					<li class="timeline-inverted">
						<div class="timeline-single__buble">
							<div class="timeline-single__buble--svg  bg-opacity-secondary">
								<img class="svg" alt="" src={'/img/svg/paper-plane.svg'} />
							</div>
						</div>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>10:00 Am</span>
							</div>
							<div class="timeline-single__content">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<span>HTML,CSS,VueJS</span>
							</div>
						</div>
					</li>
					<li class="timeline-inverted">
						<div class="timeline-single__buble">
							<div class="timeline-single__buble--svg  bg-opacity-info">
								<img class="svg" alt="" src={'/img/svg/surface1.svg'} />
							</div>
						</div>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>10:00 Am</span>
							</div>
							<div class="timeline-single__content">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<span>HTML,CSS,VueJS</span>
							</div>
						</div>
					</li>
					<li class="timeline-inverted">
						<div class="timeline-single__buble">
							<div class="timeline-single__buble--svg  bg-opacity-warning">
								<img class="svg" alt="" src={'/img/svg/pen.svg'} />
							</div>
						</div>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>10:00 Am</span>
							</div>
							<div class="timeline-single__content">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<span>HTML,CSS,VueJS</span>
							</div>
						</div>
					</li>
					<li class="timeline-inverted">
						<div class="timeline-single__buble">
							<div class="timeline-single__buble--svg  bg-opacity-primary">
								<img class="svg" alt="" src={'/img/svg/notification-basic.svg'} />
							</div>
						</div>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>10:00 Am</span>
							</div>
							<div class="timeline-single__content">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<span>HTML,CSS,VueJS</span>
							</div>
						</div>
					</li>
					<li class="timeline-inverted">
						<div class="timeline-single__buble">
							<div class="timeline-single__buble--svg  bg-opacity-success">
								<img class="svg" alt="" src={'/img/svg/user-basic.svg'} />
							</div>
						</div>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>10:00 Am</span>
							</div>
							<div class="timeline-single__content">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<span>HTML,CSS,VueJS</span>
							</div>
						</div>
					</li>
					<li class="timeline-inverted">
						<div class="timeline-single__buble">
							<div class="timeline-single__buble--svg  bg-opacity-danger">
								<img class="svg" alt="" src={'/img/svg/layers-basic.svg'} />
							</div>
						</div>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>10:00 Am</span>
							</div>
							<div class="timeline-single__content">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<span>HTML,CSS,VueJS</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Color</h6>
		</CardHeader>
		<CardBody>
			<div class="timeline-box">
				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble buble-success" />
					<div class="timeline-single__content">
						<p>Create a services site 2015-09-01</p>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble buble-success" />
					<div class="timeline-single__content">
						<p>Create a services site 2015-09-01</p>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble buble-danger" />
					<div class="timeline-single__content">
						<p>Solve initial network problems 1</p>
						<p>Solve initial network problems 2</p>
						<p>Solve initial network problems 3 2015-09-01</p>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble buble-primary" />
					<div class="timeline-single__content">
						<p>Technical testing 1</p>
						<p>Technical testing 2</p>
						<p>Technical testing 3 2015-09-01</p>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble border-extra-light" />
					<div class="timeline-single__content">
						<p>Technical testing 1</p>
						<p>Technical testing 2</p>
						<p>Technical testing 3 2015-09-01</p>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble border-extra-light" />
					<div class="timeline-single__content">
						<p>Technical testing 1</p>
						<p>Technical testing 2</p>
						<p>Technical testing 3 2015-09-01</p>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</div>

<div class="col-lg-6">
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Timeline 1</h6>
		</CardHeader>
		<CardBody>
			<div class="timeline-box timeline-box--2">
				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble" />
					<div class="timeline-single__content">
						<div class="d-flex justify-content-between align-content-center flex-wrap">
							<div class="d-flex align-content-center pe-10">
								<p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
							</div>
							<div class="timeline-single__days">
								<span>6:00 am</span>
							</div>
						</div>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble bg-primary" />
					<div class="timeline-single__content">
						<div class="d-flex justify-content-between align-content-center flex-wrap">
							<div class="d-flex align-content-center pe-10">
								<p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
								<span class="order-bg-opacity-success color-success timeline-single__badge"
									>now</span
								>
							</div>
							<div class="timeline-single__days">
								<span>1 hrs</span>
							</div>
						</div>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble bg-info" />
					<div class="timeline-single__content">
						<div class="d-flex justify-content-between align-content-center flex-wrap">
							<div class="d-flex align-content-center pe-10">
								<p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
							</div>
							<div class="timeline-single__days">
								<span>2 days</span>
							</div>
						</div>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble bg-success" />
					<div class="timeline-single__content">
						<div class="d-flex justify-content-between align-content-center flex-wrap">
							<div class="d-flex align-content-center pe-10">
								<p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
								<span class="order-bg-opacity-danger color-danger timeline-single__badge"
									>panding</span
								>
							</div>
							<div class="timeline-single__days">
								<span>3 week</span>
							</div>
						</div>
					</div>
				</div>

				<div class="timeline-single d-flex">
					<span class="timeline-line" />
					<span class="timeline-single__buble bg-warning" />
					<div class="timeline-single__content">
						<div class="d-flex justify-content-between align-content-center flex-wrap">
							<div class="d-flex align-content-center pe-10">
								<p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
							</div>
							<div class="timeline-single__days">
								<span>2 month</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Timeline 2</h6>
		</CardHeader>
		<CardBody class="p-30">
			<div class="timeline-box--3 timeline-vertical">
				<ul class="timeline">
					<li>
						<span class="timeline-single__buble">
							<span class="bg-danger" />
						</span>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>10:00 Am</span>
							</div>
							<div class="timeline-single__content">
								<div class="d-flex justify-content-between align-content-center flex-wrap">
									<div class="d-flex align-content-center pe-10">
										<p>
											Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem
											Ipsum has been the industry's standard dummy text ever since the,
										</p>
									</div>
								</div>
							</div>
						</div>
						<!-- ends: .timelline-single -->
					</li>
					<li class="timeline-inverted">
						<span class="timeline-single__buble">
							<span class="bg-success" />
						</span>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>12:00Am</span>
							</div>
							<div class="timeline-single__content">
								<div class="d-flex justify-content-between align-content-center flex-wrap">
									<div class="d-flex align-content-center pe-10">
										<p>
											Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem
											Ipsum.
										</p>
									</div>
								</div>
							</div>
						</div>
						<!-- ends: .timelline-single -->
					</li>
					<li>
						<span class="timeline-single__buble bg-info">
							<span class="bg-danger" />
						</span>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>2 days</span>
							</div>
							<div class="timeline-single__content">
								<div class="d-flex justify-content-between align-content-center flex-wrap">
									<div class="d-flex align-content-center pe-10">
										<p>
											Lorem Ipsum is simply dummy text of theprintng and typesetting industry. Lorem
											Ipsum has been the industry's standard dummy text ever since the,
										</p>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Timeline 3</h6>
		</CardHeader>
		<div class="card-body py-30 ps-sm-35 ps-30 pe-sm-50 pe-30">
			<div class="timeline-box--3 timeline-vertical left-middle">
				<ul class="timeline">
					<li class="timeline-inverted">
						<span class="timeline-single__buble">
							<span class="bg-info" />
						</span>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>10:00 Am</span>
							</div>
							<div class="timeline-single__content">
								<div class="d-flex justify-content-between align-content-center flex-wrap">
									<div class="d-flex align-content-center">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type
											specimen book. It has survived not only five centuries, but also
										</p>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="timeline-inverted">
						<span class="timeline-single__buble">
							<span class="bg-success" />
						</span>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>12:00Am</span>
							</div>
							<div class="timeline-single__content">
								<div class="d-flex justify-content-between align-content-center flex-wrap">
									<div class="d-flex align-content-center">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type
											specimen book. It has survived not only five centuries, but also
										</p>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li class="timeline-inverted mb-0">
						<span class="timeline-single__buble bg-info">
							<span class="bg-warning" />
						</span>
						<div class="timeline-single">
							<div class="timeline-single__days">
								<span>2 days</span>
							</div>
							<div class="timeline-single__content mb-0">
								<div class="d-flex justify-content-between align-content-center flex-wrap">
									<div class="d-flex align-content-center">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
											when an unknown printer took a galley of type and scrambled it to make a type
											specimen book. It has survived not only five centuries, but also
										</p>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</Card>
</div>
