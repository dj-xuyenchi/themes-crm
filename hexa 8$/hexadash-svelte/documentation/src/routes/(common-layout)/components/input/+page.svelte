<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Input from '$lib/uiElements/Input.svelte';

	const breadcrumbData = {
		pageTitle: 'Input',
		bcItem: 'Dashboard',
		bcItemActive: 'Input'
	};
</script>

<svelte:head>
	<title>Input</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Input />
		</Row>
	</Container>
</div>
