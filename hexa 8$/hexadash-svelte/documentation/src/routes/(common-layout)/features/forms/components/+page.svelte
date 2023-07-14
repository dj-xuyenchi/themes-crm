<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Components from '$lib/view/features/forms/Components.svelte';

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
				<Components />
			</Col>
		</Row>
	</Container>
</div>
<style lang="scss">
	:global{
		@import "../../../../../../src/assets/sass/mixins/mixins";
		@import "../../../../../../src/assets/sass/components/form-layouts";
	}
</style>