<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Badge from '$lib/uiElements/Badge.svelte';

	const breadcrumbData = {
		pageTitle: 'Badges',
		bcItem: 'Dashboard',
		bcItemActive: 'Badges'
	};
</script>

<svelte:head>
	<title>Badges</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Badge />
			</Col>
		</Row>
	</Container>
</div>
