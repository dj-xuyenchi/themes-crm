<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import ProgressBars from '$lib/uiElements/ProgressBars.svelte';

	const breadcrumbData = {
		pageTitle: 'Progressbars',
		bcItem: 'Dashboard',
		bcItemActive: 'Progressbars'
	};
</script>

<svelte:head>
	<title>Progressbars</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<ProgressBars />
		</Row>
	</Container>
</div>
