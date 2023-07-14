<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import Countdown from 'svelte-countdown/src/index.js';
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-stats-wrap d-flex">
				<div class="stats-item stats-default">
					<span class="stats-item__title">Active Users</span>

					<p class="stats-item__number">112,893</p>
				</div>

				<div class="stats-item stats-default">
					<span class="stats-item__title">Account Balance (CNY)</span>

					<p class="stats-item__number">112,893.00</p>

					<div class="stats-item__action">
						<a href={'#'} class="btn btn-shadow-primary btn-primary btn-md">Recharge</a>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Unit</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-stats-wrap d-flex">
				<div class="stats-item stats-default">
					<span class="stats-item__title">Feedback</span>

					<p class="stats-item__number">
						<i class="la la-thumbs-up" /> 1,128
					</p>
				</div>

				<div class="stats-item stats-default">
					<span class="stats-item__title">Unmerged</span>

					<p class="stats-item__number">
						93 <span class="text-gray">/100</span>
					</p>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>In Card</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-stats-wrap d-flex">
				<div class="stats-item stats-success">
					<span class="stats-item__title">Active</span>

					<p class="stats-item__number">
						<i class="la la-arrow-up" /> 11 <span class="number-fraction">.28</span>
					</p>
				</div>

				<div class="stats-item stats-danger">
					<span class="stats-item__title">Idle</span>

					<p class="stats-item__number">
						<i class="la la-arrow-down" /> 9 <span class="number-fraction">.30</span>
					</p>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>In Card</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-stats-wrap d-flex">
				<div class="stats-countdown">
					<span class="stats-countdown__title">Countdown</span>
					<Countdown
						from="2025-11-09 09:30:00"
						dateFormat="YYYY-MM-DD H:m:s"
						zone="Europe/Athens"
						let:remaining
					>
						<div class="whatever">
							{#if remaining.done === false}
								<span>{remaining.years} years</span>
								<span>{remaining.months} months</span>
								<span>{remaining.weeks} weeks</span>
								<span>{remaining.days} days</span>
								<span>{remaining.hours} hours</span>
								<span>{remaining.minutes} minutes</span>
								<span>{remaining.seconds} seconds</span>
							{:else}
								<h2>Countdown Finished!</h2>
							{/if}
						</div>
					</Countdown>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>
