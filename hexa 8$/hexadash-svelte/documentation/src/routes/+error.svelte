<script>
	import { Row, Col, Container, Button } from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
	import LogoArea from '@components/header/LogoArea.svelte';
	import Customizer from '@components/header/Customizer.svelte';
	import NavSearch from '@components/header/NavSearch.svelte';
	import NavMessage from '@components/header/NavMessage.svelte';
	import NavNotification from '@components/header/NavNotification.svelte';
	import NavSettings from '@components/header/NavSettings.svelte';
	import NavFlags from '@components/header/NavFlags.svelte';
	import NavAuthor from '@components/header/NavAuthor.svelte';
	import Sidebar from '@components/sidebar/Sidebar.svelte';
	import Footer from '@components/footer/Footer.svelte';
</script>

<div class="mobile-search">
	<form action="/" class="search-form">
		<InlineSVG src={'/img/svg/search.svg'} />
		<input
			class="form-control me-sm-2 box-shadow-none"
			type="search"
			placeholder="Search..."
			aria-label="Search"
		/>
	</form>
</div>
<div class="mobile-author-actions" />
<header class="header-top">
	<nav class="navbar navbar-light">
		<div class="navbar-left">
			<LogoArea />
		</div>
		<div class="navbar-right">
			<Button>Buy Now</Button>
		</div>
	</nav>
</header>

<main class="main-content">
	<Sidebar />
	<div class="contents">
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
	<Footer />
</main>

<style lang="scss">
	:global {
		@import '../assets/sass/style.scss';
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
			@include ssm{
				margin-top: 40px;
				margin-bottom: 20px;
			}
		}

		.error-page img,
		.error-page svg {
			max-width: 100%;
			height: auto;
		}
	}
</style>
