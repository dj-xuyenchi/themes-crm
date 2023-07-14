<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Details from '@apps/support/Details.svelte';

	const breadcrumbData = {
		pageTitle: 'Ticket Details',
		bcItem: 'Home',
		bcItem2: 'Apps',
		bcItemActive: 'Support'
	};
</script>

<svelte:head>
	<title>Ticket Details</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Row>
					<Details />
				</Row>
			</Col>
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
	}
</style>