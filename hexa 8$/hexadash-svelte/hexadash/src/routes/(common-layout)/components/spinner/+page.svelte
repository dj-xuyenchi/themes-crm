<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Spinner from '$lib/uiElements/Spinner.svelte';

	const breadcrumbData = {
		pageTitle: 'Spinner',
		bcItem: 'Dashboard',
		bcItemActive: 'Spinner'
	};
</script>

<svelte:head>
	<title>Spinner</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Spinner />
		</Row>
	</Container>
</div>
