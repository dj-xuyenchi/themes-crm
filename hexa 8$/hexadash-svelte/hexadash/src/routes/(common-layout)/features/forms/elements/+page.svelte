<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Elements from '$lib/view/features/forms/Elements.svelte';

	const breadcrumbData = {
		pageTitle: 'Form Elements',
		bcItem: 'Forms',
		bcItemActive: 'Form Elements'
	};
</script>

<svelte:head>
	<title>Form Elements</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Elements />
			</Col>
		</Row>
	</Container>
</div>
<style lang="scss">
	:global{
		@import "../../../../../../src/assets/sass/mixins/mixins";
		@import "../../../../../../src/assets/sass/components/form-layouts";
		@import "../../../../../../src/assets/sass/components/users";
		@import "../../../../../../src/assets/sass/components/select";
		@import "../../../../../../src/assets/sass/components/import";
	}
</style>