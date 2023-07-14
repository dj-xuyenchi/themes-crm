<script>
	import { onMount, afterUpdate } from 'svelte';
	import { Row, Col, Container } from 'sveltestrap';
	import LogoArea from '@components/header/LogoArea.svelte';
	import NavSearch from '@components/header/NavSearch.svelte';
	import NavMessage from '@components/header/NavMessage.svelte';
	import NavNotification from '@components/header/NavNotification.svelte';
	import NavSettings from '@components/header/NavSettings.svelte';
	import NavFlags from '@components/header/NavFlags.svelte';
	import NavAuthor from '@components/header/NavAuthor.svelte';
	import Sidebar from '@components/sidebar/Sidebar.svelte';
	import Footer from '@components/footer/Footer.svelte';
	import { Spinner } from 'sveltestrap';
	import { getItem } from '$lib/utility/localStorageController';
	import { inlineSvg } from '$lib/components/utilities/utilities';
	import { goto } from '$app/navigation';

	let isAuthenticated = getItem('access_token');

	onMount(() => {
		if (!isAuthenticated && isAuthenticated === '') {
			goto(`/signin`);
		}
	});
	afterUpdate(() => {
		inlineSvg();
	});
</script>

{#if isAuthenticated}
<div class="mobile-search">
	<form action="/" class="search-form">
		<img class="svg" alt="" src={'/img/svg/search.svg'} />
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
			<ul class="navbar-right__menu">
				<li class="nav-search"><NavSearch /></li>
				<li class="nav-message"><NavMessage /></li>
				<li class="nav-notification"><NavNotification /></li>
				<li class="nav-settings"><NavSettings /></li>
				<li class="nav-flag-select"><NavFlags /></li>
				<li class="nav-author"><NavAuthor /></li>
			</ul>

			<div class="navbar-right__mobileAction d-md-none">
				<a href={'#'} class="btn-search">
					<img class="svg feather-search" alt="" src={'/img/svg/search.svg'} />
					<img alt="" src={'/img/svg/x.svg'} class="svg feather-x" />
					<a href={'#'} class="btn-author-action">
						<img alt="" class="svg" src={'/img/svg/more-vertical.svg'} />
					</a>
				</a>
			</div>
			<div class="navbar-right">
				<ul class="navbar-right__menu">
					<li class="nav-search"><NavSearch /></li>
					<li class="nav-message"><NavMessage /></li>
					<li class="nav-notification"><NavNotification /></li>
					<li class="nav-settings"><NavSettings /></li>
					<li class="nav-flag-select"><NavFlags /></li>
					<li class="nav-author"><NavAuthor /></li>
				</ul>

				<div class="navbar-right__mobileAction d-md-none">
					<a href={'#'} class="btn-search">
						<img class="svg feather-search" alt="" src={'/img/svg/search.svg'} />
						<img class="svg feather-x" alt="" src={'/img/svg/x.svg'} />
						<a href={'#'} class="btn-author-action">
							<img class="svg" alt="" src={'/img/svg/more-vertical.svg'} />
						</a>
					</a>
				</div>
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
								<img class="svg" alt="" src={'/img/svg/404.svg'} />
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
{:else}
	<div class="preloader-wrap">
		<Spinner color="primary" size="lg" type="grow" />
	</div>
{/if}

<style lang="scss">
	.preloader-wrap {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
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
			@include ssm {
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
