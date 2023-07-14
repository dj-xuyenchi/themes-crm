<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import List from '@apps/contacts/List.svelte';

	const breadcrumbData = {
		pageTitle: 'Contacts',
		bcItem: 'Dashboard',
		bcItemActive: 'Contacts'
	};
</script>

<svelte:head>
	<title>User Cards</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<List />
		</Row>
	</Container>
</div>
