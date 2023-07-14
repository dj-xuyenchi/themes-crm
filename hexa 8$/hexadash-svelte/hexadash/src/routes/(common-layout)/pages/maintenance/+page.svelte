<script>
	import { Container, Row, Col } from 'sveltestrap';
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<div class="maintenance-wrapper content-center">
					<div class="maintenance-page text-center">
						<img class="svg" alt="" src={'/img/svg/maintenance.svg'} />
						<h5 class="maintenance-page__title">We are currently performing maintenance</h5>
						<p class="fw-500">We're making the system more awesome.We'll be back shortly.</p>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	.maintenance-wrapper {
		height: calc(100vh - 169px);
	}
	.maintenance-page__title {
		font-weight: 500;
		margin: 70px 0 14px;
	}

	.maintenance-page p {
		font-size: 14px;
		color: var(--color-gray);
	}

	:global {
		.maintenance-page svg {
			max-width: 100%;
			height: auto;
		}
	}
</style>
