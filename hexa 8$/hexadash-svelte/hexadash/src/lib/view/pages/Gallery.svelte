<script>
	const galleryData = [
		{
			img: '1.png',
			title: 'Snow Covered Mountain',
			category: 'Web Design',
			keyword: 'webDesign'
		},
		{
			img: '2.png',
			title: 'Raven demons over the',
			category: 'UI Design',
			keyword: 'uiDesign'
		},
		{
			img: '3.png',
			title: 'Sit et dolores stet',
			category: 'Wireframe',
			keyword: 'wireframe'
		},
		{
			img: '4.png',
			title: 'Et sed gubergren aliquyam',
			category: 'Presentation',
			keyword: 'presentation'
		},
		{
			img: '5.png',
			title: 'Lorem et ipsum invidunt',
			category: 'Web Design',
			keyword: 'webDesign'
		},
		{
			img: '6.png',
			title: 'Vero dolores rebum aliquyam',
			category: 'Presentation',
			keyword: 'presentation'
		},
		{
			img: '7.png',
			title: 'Rebum sadipscing eos lore',
			category: 'Wireframe',
			keyword: 'wireframe'
		},
		{
			img: '8.png',
			title: 'Et sadipscing lorem set',
			category: 'Web Design',
			keyword: 'webDesign'
		},
		{
			img: '9.png',
			title: 'Det stet eirmod eirmod',
			category: 'UI Design',
			keyword: 'uiDesign'
		},
		{
			img: '10.png',
			title: 'Dolor eos lorem sea justo',
			category: 'Presentation',
			keyword: 'presentation'
		},
		{
			img: '11.png',
			title: 'Accusam et stet clita est',
			category: 'Wireframe',
			keyword: 'wireframe'
		},
		{
			img: '2.png',
			title: 'Invidunt rebum tempor dolor',
			category: 'Presentation',
			keyword: 'presentation'
		}
	];

	const categories = [
		{
			category: 'All',
			keyword: 'all'
		},
		{
			category: 'Web Design',
			keyword: 'webDesign'
		},
		{
			category: 'UI Design',
			keyword: 'uiDesign'
		},
		{
			category: 'Wireframe',
			keyword: 'wireframe'
		},
		{
			category: 'Presentation',
			keyword: 'presentation'
		}
	];

	let selected = 'all';

	const filterSelection = (e) => (selected = e.target.dataset.name);
</script>

<div class="gallery-filter mb-sm-50 mb-30">
	<ul class="gallery-filter__nav w-100 px-sm-25 px-15 bg-white d-flex flex-wrap radius-xl">
		{#each categories as item}
			<li
				class:active={selected === item.keyword}
				class="filter-controls nav-link active"
				data-name={item.keyword}
				on:click={filterSelection}
			>
				{item.category}
			</li>
		{/each}
	</ul>
	<div class="gallery-filter__wrap">
		<div class="gallery-filter__container">
			{#each galleryData as item}
				{#if selected === 'all'}
					<div class="show filter-item filter-item--style">
						<div class="card">
							<div class="gc ">
								<div class="gc__img">
									<img src="/img/gallery/{item.img}" alt="img" class="w-100 radius-xl" />
								</div>
								<div class="card-body px-25 py-20">
									<div class="gc__title">
										<p>{item.title}</p>
										<span>{item.category}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				{:else}
					<div class:show={selected === item.keyword} class="filter-item filter-item--style">
						<div class="card">
							<div class="gc ">
								<div class="gc__img">
									<img src="/img/gallery/{item.img}" alt="img" class="w-100 radius-xl" />
								</div>
								<div class="card-body px-25 py-20">
									<div class="gc__title">
										<p>{item.title}</p>
										<span>{item.category}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../assets/sass/mixins/media-queries';
	.gallery-filter .gallery-filter__nav .nav-link {
		font-size: 14px;
		line-height: 1.7857142857;
		font-weight: 400;
		color: var(--color-light);
		padding: 20px 0;
		position: relative;
	}

	.gallery-filter .gallery-filter__nav .nav-link.active {
		font-weight: 500;
		color: var(--color-primary);
	}

	.gallery-filter .gallery-filter__nav .nav-link:not(:last-child) {
		margin-right: 25px;
	}

	.gallery-filter .gallery-filter__nav .nav-link:after {
		height: 2px;
		bottom: 0;
		position: absolute;
		left: 0;
		width: 100%;
		-webkit-border-radius: 6px;
		border-radius: 6px;
		content: '';
		opacity: 0;
		visibility: hidden;
		background-color: var(--color-primary);
	}

	.gallery-filter .gallery-filter__nav .nav-link.active:after {
		visibility: visible;
		opacity: 1;
	}

	.gallery-filter .gallery-filter__nav .nav-link {
		padding: 6px 0;
		margin-bottom: 0;
		cursor: pointer;
	}

	.gallery-filter .gallery-filter__nav {
		padding: 15px 0;
	}

	.gallery-filter__container {
		margin-top: 25px;
		display: flex;
		flex-wrap: wrap;
		gap: 25px;
		.filter-item {
			display: none;
			width: calc(25% - 19px);
			@include cms2(1368px){
				width: calc(33% - 19px);
			}
			@include md{
				width: calc(50% - 19px);
			}
			@include ssm{
				width:calc(100% - 19px);
			}
			&.show {
				display: block;
			}
		}
		.gc__title{
			p{
				font-size: 15px;
				font-weight: 500;
				line-height: calc(22px / 15px);
				color: var(--color-dark);
				margin-bottom: 5px;
			}
			span{
				font-size: 13px;
				font-weight: 400;
				line-height: calc(22px / 13px);
				color: var(--color-lighten);
			}
		}
	}
</style>
