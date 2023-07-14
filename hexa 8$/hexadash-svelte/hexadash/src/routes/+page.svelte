<script>
	import { onMount, afterUpdate } from 'svelte';
	import { Spinner } from 'sveltestrap';
	import { goto } from '$app/navigation';
	import { getItem } from '$lib/utility/localStorageController';
	import { inlineSvg } from '$lib/components/utilities/utilities';

	let isAuthenticated = getItem('access_token');

	onMount(() => {
		if (isAuthenticated) {
			goto(`/home-one`);
		} else {
			goto(`/signin`);
		}
	});
	afterUpdate(() => {
		inlineSvg();
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="preloader-wrap">
		<Spinner color="primary" size="lg" type="grow" />
	</div>
</section>

<style lang="scss">
	.preloader-wrap {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
