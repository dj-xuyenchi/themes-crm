<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Basic from '$lib/view/features/forms/Basic.svelte';

	const breadcrumbData = {
		pageTitle: 'Basic Form',
		bcItem: 'Forms',
		bcItemActive: 'Basic Form'
	};
</script>

<svelte:head>
	<title>Basic Form</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={6}>
				<Basic />
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