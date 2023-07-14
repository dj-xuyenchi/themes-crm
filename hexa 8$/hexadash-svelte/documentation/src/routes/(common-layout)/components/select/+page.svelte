<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import InputSelect from '../../../../lib/uiElements/InputSelect.svelte';

	const breadcrumbData = {
		pageTitle: 'Select',
		bcItem: 'Dashboard',
		bcItemActive: 'Select'
	};
</script>

<svelte:head>
	<title>Select</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<InputSelect />
		</Row>
	</Container>
</div>
