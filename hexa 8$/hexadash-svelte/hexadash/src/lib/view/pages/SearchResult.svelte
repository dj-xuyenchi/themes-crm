<script>
	import {
		Col,
		Button,
		Card,
		CardHeader,
		CardBody,
		CardFooter,
		Pagination,
		PaginationItem,
		PaginationLink
	} from 'sveltestrap';
</script>

<Col md={6}>
	<div class="search-result global-shadow rounded-pill bg-white">
		<form action="/" class="d-flex align-items-center justify-content-between">
			<div class="border-right d-flex align-items-center w-100  ps-25 pe-sm-25 pe-0 py-1">
				<img class="svg" alt="" src={'/img/svg/search.svg'} />
				<input
					class="form-control border-0 box-shadow-none"
					type="search"
					placeholder="Type and search"
					aria-label="Search"
				/>
			</div>
			<button
				type="button"
				class="border-0 bg-transparent px-25 color-primary fw-500 hover-opacity-btn">Search</button
			>
		</form>
	</div>
</Col>
<Col md={12}>
	<div class="search-keyword mt-20 mb-30">
		<ul class="nav m-n1" id="pills-tab">
			<li class="nav-item">
				<a class="nav-link active" id="pills-home-tab" href={'#'}>All</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="pills-profile-tab" href={'#'}>UI Design</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="pills-contact-tab" href={'#'}>Wireframe Kits</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="pills-presentation-tab" href={'#'}>Presentation</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="pills-web-tab" href={'#'} role="tab" aria-selected="false"
					>Web Design</a
				>
			</li>
		</ul>
	</div>
</Col>
<Col md={12}>
	<div id="pills-home">
		<div class="search-content bg-white radius-xl d-flex mb-50">
			<Card class="border-0 px-sm-30 px-20">
				<CardHeader
					class="flex-1 d-flex align-items-center flex-wrap justify-content-between border-bottom-0 px-0"
				>
					<p class="keyword-searching text-dark py-10">
						207 <span class="color-light fw-400">results found for</span> “Keyword”
					</p>
					<p class="mb-0 fs-14 color-light fw-400 ">Showing 1-10 of 76 results</p>
				</CardHeader>
				<CardBody class="border-bottom border-top px-0 pb-0 pt-25">
					<div class="search-content__keyResult">
						<div class="mb-30">
							<a href={'#'}>
								<h6 class="fw-500">
									<span class="color-primary"> Keyword </span> installing lorem multi vendor marketplace
								</h6>
							</a>
							<p class="mb-0">
								Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
								elitr, sed diam nonumy eirmod...
							</p>
						</div>
						<div class="mb-30">
							<a href={'#'}>
								<h6 class="fw-500">
									<span class="color-primary"> Keyword </span> how to copyright and trademarks
								</h6>
							</a>
							<p class="mb-0">
								Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
								elitr, sed diam nonumy eirmod...
							</p>
						</div>
						<div class="mb-30">
							<a href={'#'}>
								<h6 class="fw-500">
									How to stop getting emails from lorem <span class="color-primary"> Keyword </span>
								</h6>
							</a>
							<p class="mb-0">
								Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
								elitr, sed diam nonumy eirmod...
							</p>
						</div>
						<div class="mb-30">
							<a href={'#'}>
								<h6 class="fw-500">
									How to installing lorem multi vendor <span class="color-primary"> Keyword </span> marketplace
								</h6>
							</a>
							<p class="mb-0">
								Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
								elitr, sed diam nonumy eirmod...
							</p>
						</div>
						<div class="mb-30">
							<a href={'#'}>
								<h6 class="fw-500">
									<span class="color-primary"> Keyword </span> installing lorem multi vendor marketplace
								</h6>
							</a>
							<p class="mb-0">
								Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
								elitr, sed diam nonumy eirmod...
							</p>
						</div>
						<div class="mb-30">
							<a href={'#'}>
								<h6 class="fw-500">
									<span class="color-primary"> Keyword </span> how to copyright and trademarks
								</h6>
							</a>
							<p class="mb-0">
								Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
								elitr, sed diam nonumy eirmod...
							</p>
						</div>
						<div class="mb-30">
							<a href={'#'}>
								<h6 class="fw-500">
									How to stop getting emails from lorem <span class="color-primary"> Keyword </span>
								</h6>
							</a>
							<p class="mb-0">
								Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
								elitr, sed diam nonumy eirmod...
							</p>
						</div>
						<div class="mb-30">
							<a href={'#'}>
								<h6 class="fw-500">
									How to installing lorem multi vendor <span class="color-primary"> Keyword </span> marketplace
								</h6>
							</a>
							<p class="mb-0">
								Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
								elitr, sed diam nonumy eirmod...
							</p>
						</div>
						<div class="mb-30">
							<a href={'#'}>
								<h6 class="fw-500">
									<span class="color-primary"> Keyword </span> how to copyright and trademarks
								</h6>
							</a>
							<p class="mb-0">
								Lorem ipsum dolor amet consetetur get up and running with a world-class sadipscing
								elitr, sed diam nonumy eirmod...
							</p>
						</div>
					</div>
				</CardBody>
				<CardFooter class="border-0 pt-30 pb-40 px-0 bg-transparent">
					<Pagination ariaLabel="Page navigation example">
						<PaginationItem disabled>
							<PaginationLink first href="#" />
						</PaginationItem>
						<PaginationItem disabled>
							<PaginationLink previous href="#" />
						</PaginationItem>
						<PaginationItem active>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">2</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">4</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">5</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink next href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink last href="#" />
						</PaginationItem>
					</Pagination>
				</CardFooter>
			</Card>
		</div>
	</div>
</Col>

<style lang="scss">
	@import '../../../assets/sass/components/testimonial.scss';
	:global {
		//Search Result
		.search-result form {
			height: 48px;

			.form-control {
				padding: 8px 13px;

				&::placeholder {
					font-size: 14px;
					line-height: calc(25px / 14px);
					font-weight: 400;
					color: var(--color-lighten);
				}
			}
			img,
			svg {
				width: 18px;
				color: var(--color-light);
			}

			button {
				font-size: 14px;
				line-height: calc(16px / 14px);
				font-weight: 500;
				color: var(--color-primary);
				text-transform: capitalize;
			}
		}

		.search-keyword {
			@include sm {
				display: flex;
				justify-content: center;
			}

			ul {
				@include sm {
					justify-content: center;
				}

				li {
					margin: 5px;

					a {
						padding: 6px 15px;
						color: var(--color-light);
						box-shadow: 0 3px 6px #9299b80d;
						border-radius: 4px;
						background-color: var(--color-white);
						font-size: 13px;
						line-height: calc(22px / 13px);
						font-weight: 500;
						text-transform: capitalize;

						&.active {
							background-color: var(--color-primary);
							color: var(--color-white);
						}
					}

					&:not(:last-child) {
						margin-right: 4px;
					}
				}
			}
		}

		.search-content {
			.search-content__keyResult {
				a h6 {
					text-transform: capitalize;

					span {
						font-weight: 600;
					}
				}

				p {
					font-size: 14px;
					line-height: calc(22px / 14px);
					font-weight: 400;
					color: var(--color-gray);
					margin-top: 10px;
				}
			}

			.keyword-searching {
				font-size: 16px;
				line-height: calc(20px / 16px);
				font-weight: 600;
				color: var(--color-dark);
				text-transform: capitalize;
				margin-bottom: 0;

				span {
					color: var(--color-light);
					text-transform: lowercase;
				}
			}

			.card .card-header {
				@include lg {
					flex-flow: unset;
				}
			}

			@include cms3(1199px) {
				.card-header,
				.card-body {
					width: 1001px;
				}
			}
			@media (max-width: 1300px) {
				.card-header,
				.card-body {
					width: 100%;
				}
			}
		}
	}
	:global {
		.pagination {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 5px;
			&:not(.pagination-lg) {
				.page-link {
					font-size: 14px;
				}
			}
			&:not(.pagination-sm) {
				.page-link {
					font-size: 14px;
				}
			}
			.page-item {
				.page-link {
					padding: 4px 12px;
					color: var(--light-gray);
					border-color: var(--border-color);
					border-radius: 2px;
				}
				&.active {
					.page-link {
						color: var(--color-white);
						border-color: var(--color-primary);
						background-color: var(--color-primary);
					}
				}
			}
		}
	}
</style>
