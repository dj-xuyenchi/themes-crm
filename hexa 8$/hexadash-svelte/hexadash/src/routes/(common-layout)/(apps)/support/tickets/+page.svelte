<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Tickets from '../../../../../lib/view/apps/support/Tickets.svelte';

	const breadcrumbData = {
		pageTitle: 'Supprot Tickets',
		bcItem: 'Home',
		bcItem2: 'Apps',
		bcItemActive: 'Support'
	};

	const cardContents = [
		{
			total: '30,124',
			label: 'Total Tickets',
			icon: 'ticket',
			type: 'primary'
		},
		{
			total: '825',
			label: 'New Tickets',
			icon: 'ticket',
			type: 'secondary'
		},
		{
			total: '350',
			label: 'Pending Tickets',
			icon: 'clock',
			type: 'warning'
		},
		{
			total: '23,145',
			label: 'Completed Tickets',
			icon: 'check-circle',
			type: 'success'
		}
	];
</script>

<svelte:head>
	<title>Support Tickets</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			{#each cardContents as content}
				<Col xxl={3} md="6" class="mb-30">
					<div class="ap-po-details ap-po-details--ticket radius-xl d-flex justify-content-between">
						<div class="overview-content w-100">
							<div class="ap-po-details-content d-flex flex-wrap justify-content-between">
								<div class="ap-po-details__titlebar">
									<h1>{content.total}</h1>
									<p>{content.label}</p>
								</div>
								<div class="ap-po-details__icon-area">
									<div class="svg-icon order-bg-opacity-{content.type}">
										<i class="uil uil-{content.icon}" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
			{/each}
			<Tickets />
		</Row>
	</Container>
</div>


<style lang="scss">
	:global {
		@import '../../../../../../src/assets/sass/components/profile';
		@import '../../../../../../src/assets/sass/components/support-ticket';
		@import '../../../../../../src/assets/sass/components/data-table';
		@import '../../../../../../src/assets/sass/components/table';
		@import '../../../../../../src/assets/sass/components/select';
		@import '../../../../../../src/assets/sass/components/select';
		@import '../../../../../../src/assets/sass/components/users';
		.order-bg-opacity{
			&-primary {
				i{
					color: var(--color-primary);
				}
			}
			&-secondary {
				i{
					color: var(--color-secondary);
				}
			}
			&-warning {
				i{
					color: var(--color-warning);
				}
			}
			&-success {
				i{
					color: var(--color-success);
				}
			}
		}
	}
</style>