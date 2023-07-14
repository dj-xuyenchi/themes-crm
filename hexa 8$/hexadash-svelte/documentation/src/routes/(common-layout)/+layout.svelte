<script>
	import { onMount } from 'svelte';
	import { Button } from 'sveltestrap';
	import LogoArea from '@components/header/LogoArea.svelte';
	import TopMenu from '@components/header/TopMenu.svelte';
	import Customizer from '@components/header/Customizer.svelte';
	import NavSearch from '@components/header/NavSearch.svelte';
	import NavMessage from '@components/header/NavMessage.svelte';
	import NavNotification from '@components/header/NavNotification.svelte';
	import NavSettings from '@components/header/NavSettings.svelte';
	import NavFlags from '@components/header/NavFlags.svelte';
	import NavAuthor from '@components/header/NavAuthor.svelte';
	import Sidebar from '@components/sidebar/Sidebar.svelte';
	import Footer from '@components/footer/Footer.svelte';
	import { page } from '$app/stores';
	import InlineSVG from 'svelte-inline-svg';

	onMount(() => {

		//Customizer
		/* Customizing */
		const customizerBtn = document.querySelector('.customizer-trigger');
		const customizer = document.querySelector('.customizer-wrapper');
		const customizerClose = document.querySelector('.customizer-close');
		const customizerOverlay = document.querySelector('.customizer-overlay');

		function toggleCustomizer(e) {
			e.preventDefault();
			this.classList.toggle('show');
			customizer.classList.toggle('show');
			customizerOverlay.classList.add('show');
		}

		function closeCustomizer(e) {
			e.preventDefault();
			customizer.classList.remove('show');
			customizerBtn.classList.remove('show');
			customizerOverlay.classList.remove('show');
		}

		if (customizerBtn) {
			customizerBtn.addEventListener('click', toggleCustomizer);
		}

		if (customizerClose && customizerOverlay) {
			customizerClose.addEventListener('click', closeCustomizer);
			customizerOverlay.addEventListener('click', closeCustomizer);
		}
	});

	function handleLayoutDirecction(e, direction) {
		e.preventDefault();

		document.documentElement.setAttribute('dir', direction);
		if (direction === 'rtl') {
			document.getElementById('bootstrap-css-link').href = '../css/bootstrap.rtl.min.css';
		} else {
			document.getElementById('bootstrap-css-link').href = '../css/bootstrap.min.css';
		}
	}

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
			
		</div>
		<div class="navbar-right">
			<Button>Buy Now</Button>
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

<div class="customizer-overlay" />
<div class="customizer-wrapper">
	<div class="customizer">
		<div class="customizer__head">
			<h4 class="customizer__title">Customizer</h4>
			<span class="customizer__sub-title">Customize your overview page layout</span>
			<a href={'#'} class="customizer-close">
				<InlineSVG src={'/img/svg/x2.svg'} />
			</a>
		</div>
		<div class="customizer__body">
			<div class="customizer__single">
				<h4>Layout Type</h4>
				<ul class="customizer-list d-flex layout">
					<li class="customizer-list__item">
						<a
							href={'#'}
							class="direction-js active"
							on:click={(e) => handleLayoutDirecction(e, 'ltr')}
						>
							<img src="/img/ltr.png" alt="" />
							<i class="fa fa-check-circle" />
						</a>
					</li>
					<li class="customizer-list__item">
						<a href={'#'} class="direction-js" on:click={(e) => handleLayoutDirecction(e, 'rtl')}>
							<img src="/img/rtl.png" alt="" />
							<i class="fa fa-check-circle" />
						</a>
					</li>
				</ul>
			</div>

			<div class="customizer__single">
				<h4>Navbar Type</h4>
				<ul class="customizer-list d-flex l_navbar">
					<li class="customizer-list__item">
						<a
							href={'#'}
							class="menu-type-js active"
							data-layout="side"
							on:click={(e) => handleMenuTypeSide(e)}
						>
							<img src="/img/side.png" alt="" />
							<i class="fa fa-check-circle" />
						</a>
					</li>
					<li class="customizer-list__item top">
						<a
							href={'#'}
							data-layout="top"
							class="menu-type-js"
							on:click={(e) => handleMenuType(e)}
						>
							<img src="/img/top.png" alt="" />
							<i class="fa fa-check-circle" />
						</a>
					</li>
					<li class="colors" />
				</ul>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	:global {
		@import '../../assets/sass/style.scss';
	}
</style>
