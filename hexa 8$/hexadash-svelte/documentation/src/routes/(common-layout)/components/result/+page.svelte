<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Result from '$lib/uiElements/Result.svelte';

	const breadcrumbData = {
		pageTitle: 'Result',
		bcItem: 'Dashboard',
		bcItemActive: 'Result'
	};
</script>

<svelte:head>
	<title>Result</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Result />
		</Row>
	</Container>
</div>
