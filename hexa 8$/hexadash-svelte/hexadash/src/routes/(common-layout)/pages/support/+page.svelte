<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Support from '$lib/view/pages/Support.svelte';

	const breadcrumbData = {
		pageTitle: 'Support Center',
		bcItem: 'Pages',
		bcItemActive: 'Support Center'
	};
</script>

<svelte:head>
	<title>Support</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Support />
			</Col>
		</Row>
	</Container>
</div>
