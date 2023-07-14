<script>
	import {
		Container,
		Row,
		Col,
		Card,
		CardHeader,
		CardBody
	} from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import {
		Accordion,
		AccordionItem
	} from 'sveltestrap';
	import changelogData from '@data/changelog.json';

	const latestChanges = changelogData.slice(0, 1);
	const allChanges = changelogData.slice(1);

	const breadcrumbData = {
		pageTitle: 'Changelog',
		bcItem: 'Pages',
		bcItemActive: 'Changelog'
	};
</script>

<svelte:head>
	<title>Changelog</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
			<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={9} class="changelog-19 d-block">
			<div class="changelog mb-30">
				<Card>
					<CardHeader>
						{#each latestChanges as item}
								<div class="changelog__title">
									<span class="v-num">Version {item.version}</span>
									<span class="sign">-</span>
									<span class="rl-date">{item.date}</span>
								</div>
							{/each}
						</CardHeader>
						<CardBody class="p-30">
							{#each latestChanges as item}
								<div class="version-list mb-30">
									{#if item.new}
										<div class="version-list__single">
											<div class="version-list__top">
												<span class="badge badge-round badge-success badge-lg">New</span>
											</div>
											<ul class="version-success">
												{#each item.new as newItems}
													<li>{newItems}</li>
												{/each}
											</ul>
										</div>
									{/if}
									{#if item.fixed}
										<div class="version-list__single">
											<div class="version-list__top">
												<span class="badge badge-round badge-info badge-lg">Fixed</span>
											</div>
											<ul class="version-info">
												{#each item.fixed as fixedItems}
													<li>{fixedItems}</li>
												{/each}
											</ul>
										</div>
									{/if}
									{#if item.updated}
										<div class="version-list__single">
											<div class="version-list__top">
												<span class="badge badge-round badge-primary badge-lg">Updated</span>
											</div>
											<ul class="version-success">
												{#each item.updated as updatedItems}
													<li>{updatedItems}</li>
												{/each}
											</ul>
										</div>
									{/if}
								</div>
							{/each}
							<Accordion>
								{#each allChanges as data}
									<AccordionItem header="{data.version} - {data.date}">
										<div class="version-list">
											{#if data.new}
												<div class="version-list__single">
													<div class="version-list__top">
														<span class="badge badge-round badge-success badge-lg">New</span>
													</div>
													<ul class="version-success">
														{#each data.new as newItems}
															<li>{newItems}</li>
														{/each}
													</ul>
												</div>
											{/if}
											{#if data.fixed}
												<div class="version-list__single">
													<div class="version-list__top">
														<span class="badge badge-round badge-info badge-lg">Fixed</span>
													</div>
													<ul class="version-success">
														{#each data.fixed as fixedItems}
															<li>{fixedItems}</li>
														{/each}
													</ul>
												</div>
											{/if}
											{#if data.updated}
												<div class="version-list__single">
													<div class="version-list__top">
														<span class="badge badge-round badge-primary badge-lg">Updated</span>
													</div>
													<ul class="version-success">
														{#each data.updated as updatedItems}
															<li>{updatedItems}</li>
														{/each}
													</ul>
												</div>
											{/if}
										</div>
									</AccordionItem>
								{/each}
							</Accordion>
						</CardBody>
					</Card>
				</div>
			</Col>
			<Col lg={3} class="changelog-5 d-block">
				<div class="changeLog-history mb-30">
					<Card>
						<CardHeader class="py-20 px-20">
							<div class="changelog-history__title text-uppercase">CHANGELOG</div>
							<div class="changelog-history__titleExtra" />
						</CardHeader>
						<CardBody class="p-25">
							<h4 class="history-title">VERSION HISTORY</h4>
							<ul class="v-history-list">
								{#each changelogData as data}
									<li>
										<span class="version-name">Version {data.version}</span><span
											class="version-date">{data.date}</span
										>
									</li>
								{/each}
							</ul>
						</CardBody>
					</Card>
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import '../../../../assets/sass/mixins/functions';
		@import '../../../../assets/sass/mixins/helpers';
		@import '../../../../assets/sass/mixins/rfs';
		@import '../../../../assets/sass/mixins/media-queries';
		@import '../../../../assets/sass/components/change-log';
		.changelog{
			.accordion{
				.accordion-item{
					border: 1px solid var(--border-color);
					box-shadow: 0 5px 20px rgba(var(--light-gray-rgba),.03);
					background-color: var(--bg-white);
					border-radius: 6px;
					.accordion-header{
						button{
							border-radius: 6px;
							background-color: var(--bg-normal);
							height: 66px;
							display: flex;
							align-items: center;
							border-bottom: 0;
							font-size: 18px;
							font-weight: 500;
							color: var(--color-dark);
							box-shadow: none;
							&:after{
								width: 16px;
								height: 16px;
								mask-repeat: no-repeat;
								mask-position: center;
								background-color: var(--color-light);
								-webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
								mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
							}
						}
					}
				}
			}
		}
	}
</style>