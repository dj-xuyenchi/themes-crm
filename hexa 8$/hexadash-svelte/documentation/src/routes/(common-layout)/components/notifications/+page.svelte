<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Notifications from '$lib/uiElements/Notifications.svelte';

	const breadcrumbData = {
		pageTitle: 'Notifications',
		bcItem: 'Dashboard',
		bcItemActive: 'Notifications'
	};
</script>

<svelte:head>
	<title>Notifications</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Notifications />
		</Row>
	</Container>
</div>
