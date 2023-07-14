<script>
	import { onMount } from 'svelte';
	import { Spinner } from 'sveltestrap';
	import { goto } from '$app/navigation';

	let loaded = true;

	onMount(() => {
		if (loaded) {
			goto(`/overview`);
		}
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="preloader-wrap">
		<Spinner color="light" size="lg" type="grow" />
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
