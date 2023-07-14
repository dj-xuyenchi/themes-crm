<script>
	import { Col, Card, CardHeader, CardBody, Accordion, AccordionItem, Button } from 'sveltestrap';

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

<Col xxl={3} lg={4}>
	<Card class="shadow-lg border-color-i">
		<CardBody class="p-0">
			<div class="faqs-wrapper">
				<div class="px-30 pt-35 ">
					<span class="px-20 py-2 fs-14 rounded-pill bg-normal color-light">Browse by Topic</span>
				</div>
				<div class="faqs-wrapper-tab p-15 pt-25 pb-30">
					<div class="nav flex-column text-start mb-2" id="v-pills-tab">
						<a class="nav-link active" id="v-pills-home-tab" href={'#'}>
							<span class="dot bg-primary" />Using Applications</a
						>
						<a class="nav-link" id="v-pills-profile-tab" href={'#'}>
							<span class="dot bg-warning" />UI Elements</a
						>
						<a class="nav-link" id="v-pills-messages-tab" href={'#'}>
							<span class="dot bg-success" />Components</a
						>
						<a class="nav-link" id="v-pills-settings-tab" href="#v">
							<span class="dot bg-warning" />Build process</a
						>
						<a class="nav-link" id="v-pills-notification-tab" href={'#'}>
							<span class="dot bg-info" />Support Policy</a
						>
						<a class="nav-link" id="v-pills-support-tab" href={'#'}>
							<span class="dot bg-danger" />Accounts & Billing</a
						>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
	<Card class="shadow-lg mt-25 mb-md-50 mb-25 border-color-i">
		<CardBody class="py-40 px-50">
			<div class="faq-support text-center">
				<img class="svg" alt="" src={'/img/svg/faq-support.svg'} />
				<h5 class="fw-500 mt-30 mb-20 color-dark">Not finding the help you need?</h5>
				<div class="content-center">
					<Button color="primary" size="default" class="btn-squared text-capitalize px-30"
						>Contact Support
					</Button>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col xxl={9} lg={8}>
	<div class="mb-30">
		<div id="v-pills-home">
			<Card class="h-100 shadow-lg pb-md-50 pb-30 mb-md-50 mb-30 border-color-i">
				<CardHeader class="px-30 pt-30 pb-25 border-bottom-0">
					<h4 class="fw-500">Using Applications</h4>
				</CardHeader>
				<CardBody class="pt-0">
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
		</div>
	</div>
</Col>

<style lang="scss">
	@import '../../../assets/sass/components/testimonial.scss';
	:global {
		//Faqs
		.faq-support {
			img,
			svg {
				max-width: 100%;
			}
			button {
				white-space: nowrap;
			}
		}

		.faqs-wrapper-tab {
			padding-top: 28px;

			.nav-link {
				font-size: 14px;
				line-height: calc(22px / 14px);
				font-weight: 500;
				text-transform: capitalize;
				padding: 0 13px;
				color: var(--color-gray);
				height: 30px;
				display: flex;
				align-items: center;
				justify-content: start;
				border-left: 2px solid transparent;
				transition: var(--transition);

				&:not(:last-child) {
					margin-bottom: 12px;
				}

				.dot {
					width: 8px;
					height: 8px;
					border-radius: 50%;
					opacity: 0.5;
					margin-right: 12px;
				}
				img,
				svg {
					width: 16px;
					margin-right: 14px;
				}

				&:hover,
				&.active {
					border-left: 2px solid var(--color-primary);
					color: var(--color-primary);
					padding: 0 27px;

					.dot {
						opacity: 1;
					}
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
