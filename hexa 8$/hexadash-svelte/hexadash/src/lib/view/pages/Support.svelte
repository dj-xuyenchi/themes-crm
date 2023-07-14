<script>
	import {
		Row,
		Col,
		Card,
		CardHeader,
		CardBody,
		Button,
		Accordion,
		AccordionItem
	} from 'sveltestrap';

	const cardContent = [
		{
			icon: 'idea.svg',
			type: 'primary',
			title: 'Knowledgebase',
			content: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy'
		},
		{
			icon: 'chat.svg',
			type: 'info',
			title: 'FAQ',
			content: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy'
		},
		{
			icon: 'documents.svg',
			type: 'success',
			title: 'Documentation',
			content: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy'
		}
	];

	const faqContent = [
		{
			active: true,
			title: 'How long does it take to download updates?',
			content:
				"Many support queries and technical questions will already be answered in supporting documentation such as FAQ's and comments from previous buyers. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch etse."
		},
		{
			active: false,
			title: 'How to use SCSS variables to build custom color?',
			content:
				"Many support queries and technical questions will already be answered in supporting documentation such as FAQ's and comments from previous buyers."
		},
		{
			active: false,
			title: 'How long does it take to download updates?',
			content:
				"Many support queries and technical questions will already be answered in supporting documentation such as FAQ's and comments from previous buyers."
		},
		{
			active: false,
			title: 'What is the flex layout?',
			content:
				"Many support queries and technical questions will already be answered in supporting documentation such as FAQ's and comments from previous buyers."
		},
		{
			active: false,
			title: 'How long does it take to download updates?',
			content:
				"Many support queries and technical questions will already be answered in supporting documentation such as FAQ's and comments from previous buyers."
		},
		{
			active: false,
			title: 'Where to buy this UI dashboard?',
			content:
				"Many support queries and technical questions will already be answered in supporting documentation such as FAQ's and comments from previous buyers."
		},
		{
			active: false,
			title: 'How long does it take to download updates?',
			content:
				"Many support queries and technical questions will already be answered in supporting documentation such as FAQ's and comments from previous buyers."
		}
	];
</script>

<Card class="banner-feature--14 mb-25">
	<Row class="justify-content-center">
		<Col md="9">
			<Row class="align-items-center">
				<Col md={6}>
					<CardBody class="d-inline-block">
						<h1 class="d-flex">Hello, We are here to help</h1>
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
						<div class="d-flex justify-content-start">
							<Button color="primary" size="default" class="btn-squared btn-shadow-primary"
								>Create Support Ticket
							</Button>
						</div>
					</CardBody>
				</Col>
				<Col md={6}>
					<div class="banner-feature__shape mt-50 d-flex justify-content-end">
						<img class="svg" alt="" src={'/img/svg/banne-group21.svg'} />
					</div>
				</Col>
			</Row>
		</Col>
	</Row>
</Card>
<Card class="banner-feature--16 mb-50  px-xxl-0 px-sm-30 px-15">
	<Row class="justify-content-center">
		<Col md={9}>
			<Row>
				{#each cardContent as data}
					<Col lg={4} md={6} class="mb-25">
						<Card class="shadow-none border-0">
							<CardBody class="banner-feature--15">
								<div class="banner-feature__shape d-flex justify-content-center">
									<div class="wh-80 bg-{data.type} rounded-circle content-center">
										<img class="svg" alt="" src={`/img/svg/${data.icon}`} />
									</div>
								</div>
								<div class="text-center">
									<h4>{data.title}</h4>
									<p>{data.content}</p>
								</div>
								<div class="content-center mt-25">
									<Button
										color="primary"
										size="sm"
										class="btn-squared btn-transparent-primary rounded-pill">Learn More</Button
									>
								</div>
							</CardBody>
						</Card>
					</Col>
				{/each}
			</Row>
		</Col>
	</Row>
	<div class="banner-feature--17 px-xxl-0 px-sm-30 px-0">
		<Row class="justify-content-center">
			<Col xl={9}>
				<Card class="pb-0 mb-md-50 mb-30 border">
					<CardHeader class="px-30 pt-30 pb-25 border-bottom-0">
						<h4 class="fw-500">Frequently Asked Questions</h4>
					</CardHeader>
					<CardBody class="pt-0 pb-30 px-md-30 px-15">
						<div class="application-faqs">
							<Accordion>
								{#each faqContent as data}
									<AccordionItem active={data.active} header={data.title}>
										<p class="mb-sm-35 mb-20">
											{data.content}
										</p>
										<span class="fs-14 fw-500 color-dark">Was this article helpful?</span>
										<div class="button-group d-flex mt-2">
											<Button size="default" color="success" outline class="btn-squared px-15 ">
												<img class="svg" alt="" src={'/img/svg/smile.svg'} />
												Yes
											</Button>

											<Button size="default" color="warning" outline class="btn-squared px-15 ">
												<img class="svg" alt="" src={'/img/svg/frown.svg'} />
												No
											</Button>
										</div>
									</AccordionItem>
								{/each}
							</Accordion>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</div>
</Card>

<style lang="scss">
	@import '../../../assets/sass/mixins/media-queries';
	@import '../../../assets/sass/mixins/rfs';
	:global {
		.banner-feature {
			z-index: 1;
			overflow: hidden;
			img,
			svg {
				max-width: 100%;
			}

			&--14 {
				background: var(--bg-white);

				h1 {
					line-height: lh(30px, 36px);
					margin-bottom: 17px;
				}

				p {
					font-size: 15px;
					line-height: calc(25px / 15px);
					font-weight: 400;
					color: var(--color-gray-x);
					margin-bottom: 30px;
				}

				button {
					height: 46px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 14px;
					line-height: calc(20px / 14px);
					font-weight: 500;
					box-shadow: 0 5px 10px rgba(var(--color-secondary-rgba), 0.15);
					padding: 10px 20px;
				}

				.card-body {
					padding: 0;
					@include sm {
						padding: 1rem;
					}
				}
			}

			&--16 {
				padding: 100px 0 0 0;

				@include sm {
					padding: 50px 0 0 0;
				}
			}
			&--17 {
				margin-top: 85px;
				@include xs {
					margin-top: 30px;
				}

				.card-header {
					h4 {
						white-space: normal;
					}
				}

				@include xs {
					.application-faqs .panel-title > a:before {
						right: -15px;
					}
				}
			}
			&--15 {
				border-radius: 6px;
				padding: 30px;
				transition: var(--transition);
				border: 1px solid var(--border-color);

				&:hover {
					box-shadow: 0 15px 25px rgba(var(--color-lighten-rgba), 0.15);
					border: 1px solid transparent;
				}

				h4 {
					line-height: lh(20px, 24px);
					font-weight: 500;
					margin-top: 27px;
				}

				p {
					font-size: 15px;
					line-height: calc(25px / 15px);
					font-weight: 400;
					color: var(--color-gray-x);
					margin-top: 20px;
					margin-bottom: 0;
				}

				button {
					height: 40px;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0 30px;
				}
			}
		}
		.application-faqs {
			.accordion-item {
				border-radius: 5px;
				margin-bottom: 5px;
				border: 1px solid var(--border-color);
				.accordion-header {
					padding: 19px 25px;
					border-radius: 5px 5px 0 0;
					button {
						position: relative;
						color: var(--color-dark);
						padding: 0;
						background: transparent;
						border: none;
						box-shadow: none;
						&:after {
							font-family: 'unicons-line';
							content: '\e983';
							background-image: none;
							color: var(--color-lighten);
							transform: none;
						}
						&.collapsed {
							&:after {
								font-family: 'unicons-line';
								content: '\e98c';
								background-image: none;
								color: var(--color-lighten);
							}
						}
						&:hover {
							color: var(--color-primary);
						}
					}
				}
				.accordion-collapse {
					.accordion-body {
						box-shadow: 0 15px 40px var(--shadow5);
						padding: 21px 25px 29px;
						border-radius: 0 0 5px 5px;
						border-top: 1px solid var(--border-color);
						.button-group {
							button {
								height: 36px;
								font-size: 13px;
								line-height: 1.69231;
								font-weight: 500;
							}
						}
					}
				}
			}
		}
	}
</style>
