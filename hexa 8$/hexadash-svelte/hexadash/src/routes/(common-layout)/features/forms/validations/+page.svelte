<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Validation from '$lib/view/features/forms/Validation.svelte';

	const breadcrumbData = {
		pageTitle: 'Form Components',
		bcItem: 'Forms',
		bcItemActive: 'Form Components'
	};
</script>

<svelte:head>
	<title>Form Components</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Validation />
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