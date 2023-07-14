<script>
	import { Card, CardBody, CardHeader } from 'sveltestrap';
	import CardExtra from '@components/cards/CardExtra.svelte';

	let timelineContent = [
		{
			type: 'primary',
			title: 'Create a services site',
			date: '2015-09-01',
			posted: '17 mins ago'
		},
		{
			type: 'secondary',
			title: 'Solve initial network problems',
			date: '2015-09-05',
			posted: '2 hours ago'
		},
		{
			type: 'success',
			title: 'Technical testing',
			date: '2015-05-02',
			posted: '3 hours ago'
		},
		{
			type: 'info',
			title: 'Network problems being solved',
			date: '2016-03-12',
			posted: '4 hours ago'
		},
		{
			type: 'warning',
			title: 'Technical testing',
			date: '2015-03-07',
			posted: '5 hours ago'
		},
		{
			type: 'danger',
			title: 'Network problems being solved',
			date: '2022-06-25',
			posted: '7 hours ago'
		}
	];
</script>

<Card class="border-0 card-timeline h-100">
	<CardHeader class="border-0">
		<h6>Timeline</h6>
		<CardExtra />
	</CardHeader>
	<!-- ends: .card-header -->
	<CardBody class="pb-30 pt-1 mt-n10">
		<div class="card-timeline-body">
			<ul>
				{#each timelineContent as item}
					<li>
						<div class="card-timeline-body__left">
							<div class="card-timeline-body__title">
								<span class="timeline-line" />
								<span class="badge-dot badge-dot--big dot-{item.type}" />
								<p>{item.title}<span>{item.date}</span></p>
							</div>
						</div>
						<div class="card-timeline-body__right">
							<div class="card-timeline-body__time">
								<span>{item.posted}</span>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</CardBody>
	<!-- ends: .card-body -->
</Card>

<style lang="scss">
	/* timeline */
	@import '../../../../assets/sass/mixins/media-queries';
	:global {
		.card-timeline {
			.card-timeline-body {
				ul {
					@include ssm {
						overflow-x: auto;
						white-space: nowrap;
					}
					li {
						display: flex;
						align-items: center;
						justify-content: space-between;

						.card-timeline-body__title {
							display: flex;
							align-items: center;
							position: relative;
							padding: 13px 0;

							.badge-dot--big {
								width: 10px;
								height: 10px;
								position: absolute;
							}

							p {
								margin-bottom: 0;
								font-size: 14px;
								font-weight: 500;
								color: var(--color-gray);
								margin-left: 25px;
								@include ssm {
									padding-right: 10px;
								}
								span {
									margin-left: 3px;
									@include ssm {
										font-size: 12px;
									}
								}
							}
						}

						&:not(:last-child) {
							.card-timeline-body__title {
								.timeline-line {
									position: absolute;
									left: 4px;
									top: 18px;
									height: 100%;
									width: 1px;
									z-index: 0;
									background-color: var(--border-color);
								}
							}
						}
					}
				}

				.card-timeline-body__time {
					span {
						font-size: 13px;
						font-weight: 400;
						color: var(--color-light);
						@include ssm {
							font-size: 12px;
						}
					}
				}
			}
			.card-header {
				@include xs {
					padding-bottom: 0;
				}
			}
		}
	}
</style>
