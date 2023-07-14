<script>
	import { onMount, afterUpdate } from 'svelte';
	import LogoArea from '@components/header/LogoArea.svelte';
	import TopMenu from '@components/header/TopMenu.svelte';
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
	import { page } from '$app/stores';

	let isAuthenticated = getItem('access_token');
	let currentPage = $page.url.pathname;

	onMount(() => {
		if (isAuthenticated && isAuthenticated !== '') {
			goto(currentPage);
			//Mobile Search
			const mobileSearchIcon = document.querySelector('.btn-search');
			mobileSearchIcon.addEventListener('click', function () {
				if (window.innerWidth < 768) {
					document.querySelector('.mobile-author-actions').classList.remove('show');
					document.querySelector('.mobile-search').classList.toggle('show');
				}
			});

			//Mobile Author Menu
			const mobileAuthorMenu = document.querySelector('.btn-author-action');
			mobileAuthorMenu.addEventListener('click', function () {
				if (window.innerWidth < 768) {
					document.querySelector('.mobile-search').classList.remove('show');
					document.querySelector('.mobile-author-actions').classList.toggle('show');
				}
			});
		} else {
			goto(`/signin`);
		}

		const searchToggler = document.querySelector('.header-top .nav-search .search-toggle');
		if (searchToggler) {
			searchToggler.addEventListener('click', function (e) {
				if (window.innerWidth >= 768) {
					e.preventDefault();
					this.classList.toggle('active');
					this.closest('.nav-search')
						.querySelector('.search-form-topMenu')
						.classList.toggle('show');
				}
			});
		}
	});

	afterUpdate(() => {
		inlineSvg();
	});

	/* Active Top Menu */
	function handleMenuType(e) {
		e.preventDefault();
		document.body.classList.add('top-menu');
		document.body.classList.remove('side-menu');
	}

	function handleMenuTypeSide(e) {
		e.preventDefault();
		document.body.classList.add('side-menu');
		document.body.classList.remove('top-menu');
	}
</script>

<svelte:head>
	<title>HexaDash - Dashoboard Template</title>
</svelte:head>

{#if isAuthenticated}
	<div class="mobile-search">
		<form action="/" class="search-form">
			<img class="svg" alt="" src="/img/svg/search.svg" />
			<input
				class="form-control me-sm-2 box-shadow-none"
				type="search"
				placeholder="Search..."
				aria-label="Search"
			/>
		</form>
	</div>
	<div class="mobile-author-actions">
		<ul class="navbar-right__menu">
			<li class="nav-search"><NavSearch /></li>
			<li class="nav-message"><NavMessage /></li>
			<li class="nav-notification"><NavNotification /></li>
			<li class="nav-settings"><NavSettings /></li>
			<li class="nav-flag-select"><NavFlags /></li>
			<li class="nav-author"><NavAuthor /></li>
		</ul>
	</div>
	<header class="header-top">
		<nav class="navbar navbar-light">
			<div class="navbar-left">
				<LogoArea />
				<TopMenu />
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
						<img class="svg" alt="" src={'/img/svg/search.svg'} />
						<img class="svg" alt="" src={'/img/svg/x.svg'} /></a
					>
					<a href={'#'} class="btn-author-action">
						<img class="svg" alt="" src={'/img/svg/more-vertical.svg'} /></a
					>
				</div>
			</div>
		</nav>
	</header>

	<main class="main-content">
		<Sidebar />
		<div class="contents">
			<slot />
		</div>
		<Footer />
	</main>
{:else}
	<div class="preloader-wrap">
		<Spinner color="primary" size="lg" type="grow" />
	</div>
{/if}

<style lang="scss">
	:global {
		@import '../../assets/sass/style.scss';
	}

	.preloader-wrap {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
