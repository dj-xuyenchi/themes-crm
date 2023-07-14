<script>
	import { Container, Row, Col } from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
</script>

<svelte:head>
	<title>404 Error Page</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<div class="error-page-wrapper content-center">
					<div class="error-page text-center">
						<InlineSVG src={'/img/svg/404.svg'} />
						<div class="error-page__title">404</div>
						<h5 class="fw-500">Sorry! the page you are looking for doesn't exist.</h5>
						<div class="content-center mt-30">
							<a href="/home-one" class="btn btn-primary btn-default btn-squared px-30"
								>Return Home</a
							>
						</div>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		.error-page-wrapper {
			height: calc(100vh - 169px);
		}
		.error-page {
			padding: 30px;
			padding-top: 0;
		}

		.error-page__title {
			font-size: calc(20.4px + 3.3vw);
			line-height: 0.6333333333;
			font-weight: 600;
			color: var(--color-lighten);
			margin-top: 107px;
			margin-bottom: 37px;
		}

		.error-page img,
		.error-page svg {
			max-width: 100%;
			height: auto;
		}
	}
</style>
