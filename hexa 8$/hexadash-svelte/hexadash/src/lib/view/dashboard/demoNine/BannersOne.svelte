<script>
	import { Card, CardBody } from 'sveltestrap';
</script>

<Card class="banner-feature banner-feature--19 mb-0 h-100">
	<div class="banner-feature__shape">
		<img src="/img/trophy-2.png" alt="img" class="svg" />
	</div>
	<div class="d-flex justify-content-center">
		<CardBody>
			<h1 class="banner-feature__heading fw-700 color-white">Congratulations Jhon!</h1>
			<p class="banner-feature__para">Best Seller on the last month.</p>
			<button class="banner-feature__btn btn btn-lg px-20 radius-xs fs-15 color-primary" type="button"
				>Learn More</button
			>
		</CardBody>
	</div>
</Card>

<style lang="scss">
	:global{
	@import '../../../../assets/sass/components/banner';
	.banner-feature--19 {
		background-image: linear-gradient(to right top,#5840ff,#00e4ec);

		.banner-feature__shape {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1;
		}

		.card-body {
			padding: 55px 30px 55px 30px;
		}

		.banner-feature__para {
			margin: 14px 0 22px 0;
			color: var(--color-white);
		}

		.banner-feature__btn {
			background-color: var(--color-white);
			color: #fff;
			height: 44px;
			border-radius: 6px;
			font-size: 15px;
			font-weight: 500;
			&.color-primary {
				color: var(--color-primary);
			}
			&:hover {
				background-color: var(--bg-primary-hover);
				&.color-primary {
					color: var(--color-white);
				}
			}
		}
	}
	}
</style>
