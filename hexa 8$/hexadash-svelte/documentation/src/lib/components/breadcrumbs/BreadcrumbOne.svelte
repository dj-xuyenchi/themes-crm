<script>
	export let pageTitle = 'Dashboard';
	export let bcItem = 'Dashboard';
	export let bcItem2 = '';
	export let bcItemActive = 'Demo One';
</script>

<div class="breadcrumb-main">
	<h3 class="text-capitalize breadcrumb-title">{pageTitle}</h3>
	<div class="breadcrumb-action justify-content-center flex-wrap">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="/"><i class="uil uil-estate" />{bcItem}</a></li>
				{#if bcItem2 !== ''}
					<li class="breadcrumb-item"><a href="/">{bcItem2}</a></li>
				{/if}
				<li class="breadcrumb-item active" aria-current="page">{bcItemActive}</li>
			</ol>
		</nav>
	</div>
</div>

<style lang="scss">
	:global {
		@import '../../../../src/assets/sass/components/breadcrumb';
	}
</style>
