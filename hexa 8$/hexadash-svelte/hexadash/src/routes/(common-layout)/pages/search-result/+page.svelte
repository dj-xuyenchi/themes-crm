<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import SearchResult from '$lib/view/pages/SearchResult.svelte';

	const breadcrumbData = {
		pageTitle: 'Search Result',
		bcItem: 'Pages',
		bcItemActive: 'Search Result'
	};
</script>

<svelte:head>
	<title>Search Result</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<SearchResult />
			</Col>
		</Row>
	</Container>
</div>
