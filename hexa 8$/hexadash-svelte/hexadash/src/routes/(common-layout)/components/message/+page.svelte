<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Message from '$lib/uiElements/Message.svelte';

	const breadcrumbData = {
		pageTitle: 'Message',
		bcItem: 'Dashboard',
		bcItemActive: 'Message'
	};
</script>

<svelte:head>
	<title>Message</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Message />
		</Row>
	</Container>
</div>
