<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Layouts from '$lib/view/features/forms/Layouts.svelte';

	const breadcrumbData = {
		pageTitle: 'Form Layout',
		bcItem: 'Forms',
		bcItemActive: 'Form Layout'
	};
</script>

<svelte:head>
	<title>Form Layout</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Layouts />
		</Row>
	</Container>
</div>
<style lang="scss">
	:global{
		@import "../../../../../../src/assets/sass/mixins/mixins";
		@import "../../../../../../src/assets/sass/components/form-layouts";
	}
</style>
