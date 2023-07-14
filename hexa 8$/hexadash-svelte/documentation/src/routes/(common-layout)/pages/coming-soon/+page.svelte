<script>
	import { Container, Row, Col, Button } from 'sveltestrap';
	import Countdown from 'svelte-countdown/src/index.js';
</script>

<svelte:head>
	<title>Coming Soon</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<div class="bg-white my-30 content-center">
					<div class="coming-soon text-center">
						<img class="dark" src="/img/logo-dark.svg" alt="dark" />
						<div class="coming-soon__body">
							<h1>We are coming soon</h1>
							<p class="subtitle">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry's standard
								dummy text ever since the 1500s
							</p>
							<div class="counting">
								<Countdown
									from="2022-12-30 09:30:00"
									dateFormat="YYYY-MM-DD H:m:s"
									zone="Europe/Athens"
									let:remaining
								>
									<div class="counting-area">
										{#if remaining.done === false}
											<span class="number">
												{remaining.days}
												<span class="text">days</span>
											</span>
											<span class="number">
												{remaining.hours}
												<span class="text">hours</span>
											</span>
											<span class="number">
												{remaining.minutes}
												<span class="text">minutes</span>
											</span>
											<span class="number">
												{remaining.seconds}
												<span class="text">seconds</span>
											</span>
										{:else}
											<h2>Countdown Finished!</h2>
										{/if}
									</div>
								</Countdown>
							</div>
							<form class="form-inline d-flex justify-content-center my-n10 subscribe-bar">
								<div class="form-group m-10">
									<label for="inputPassword2" class="sr-only">name@example.com</label>
									<input
										type="email"
										class="form-control"
										id="inputPassword2"
										placeholder="name@example.com"
									/>
								</div>
								<Button color="primary" size="lg" class="m-10 text-uppercase px-20"
									>Subscribe</Button
								>
							</form>
						</div>
						<div class="coming-social">
							<ul class="d-flex justify-content-center">
								<li>
									<a href={'#'} class="bg-facebook rounded-circle"
										><i class="lab la-facebook-f" /></a
									>
								</li>
								<li>
									<a href={'#'} class="bg-twitter rounded-circle"><i class="lab la-twitter" /></a>
								</li>
								<li>
									<a href={'#'} class="bg-instagram rounded-circle"
										><i class="lab la-instagram" /></a
									>
								</li>
								<li>
									<a href={'#'} class="bg-dark rounded-circle"><i class="lab la-github" /></a>
								</li>
							</ul>
							<p>2022 © SovWare</p>
						</div>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	@import "../../../../../src/assets/sass/mixins/media-queries";
	@import "../../../../../src/assets/sass/mixins/functions";
	@import "../../../../../src/assets/sass/mixins/rfs";
	:global {
		//CountDown
		.counting-area {
			display: flex;
			justify-content: center;
			margin-bottom: 32px;
			flex-wrap: wrap;
			margin: -25px;
			margin-bottom: 40px;
			@include xs{
				margin: 0;
			}
			@include md{
				margin-bottom: 12px;
			}

			.number {
				display: flex;
				flex-flow: column;
				@include ofs(42px, lh(42px, 38px), 600);
				color: var(--color-dark);
				min-width: 50px;
				margin: 25px;
				@include xs(){
					margin: 20px;
				}

				.text {
					@include ofs(16px, lh(16px, 20px), 400);
					color:var(--color-light);
					text-transform: capitalize;
					margin-top: 12px;
				}
			}
		}
		.coming-soon {
			padding: 120px 0;
			@include md{
				padding: 80px 0;
			}
			@include sm{
				padding: 50px 0;
			}
			img,
			svg{
				width: 300px;
				@include sm{
					width: 200px;
				}
			}
			.subscribe-bar{
				@include xs{
					flex-direction: column;
					align-items: center;
				}
			}
		}

		.coming-soon h1 {
			font-size: calc(20.2px + 3.15vw);
			line-height: 1.0689655172;
			font-weight: 600;
		}

		.coming-soon .light {
			display: none;
		}

		.coming-soon .subtitle {
			font-size: calc(16.1px + 0.075vw);
			line-height: 1.6470588235;
			font-weight: 400;
			color: var(--color-gray-x);
			max-width: 580px;
			margin: 30px auto 53px;
			@include ssm{
				margin: 15px auto 15px;
			}
		}

		.coming-soon__body {
			margin-top: 100px;
			margin-bottom: 100px;
			padding: 0 30px;
			@include sm{
				margin-top: 40px;
				margin-bottom: 40px;
			}
		}

		.coming-soon .form-inline .form-control {
			width: 320px;
			max-width: 100%;
			height: 48px;
			-webkit-border-radius: 4px;
			border-radius: 4px;
			@include xs{
				width: 200px;
			}
		}

		.coming-social ul li a {
			width: 44px;
			height: 44px;
			color: var(--color-white);
			font-size: 18px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.coming-social ul li:not(:last-child) {
			margin-right: 15px;
		}

		.coming-social p {
			font-size: 14px;
			line-height: 1.7857142857;
			font-weight: 400;
			color: var(--color-light);
			margin-bottom: 0;
			text-align: center;
			margin-top: 28px;
		}
	}
</style>
