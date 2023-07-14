<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Cards from '@view/features/widgets/Cards.svelte';

	const breadcrumbData = {
		pageTitle: 'Cards',
		bcItem: 'Widgets',
		bcItemActive: 'Cards'
	};
</script>

<svelte:head>
	<title>Cards</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Cards />
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import '../../../../../../src/assets/sass/components/breadcrumb';
		@import '../../../../../../src/assets/sass/components/users';
		@import '../../../../../../src/assets/sass/components/profile';
		@import '../../../../../../src/assets/sass/components/progress-bar';
		@import '../../../../../../src/assets/sass/components/responsive';
	}
</style>