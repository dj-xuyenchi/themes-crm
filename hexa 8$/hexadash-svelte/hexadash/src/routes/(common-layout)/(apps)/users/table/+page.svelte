<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbTwo from '@components/breadcrumbs/BreadcrumbTwo.svelte';
	import PaginationBasic from '@components/paginations/PaginationBasic.svelte';
	import UserTable from '@apps/users/UserTable.svelte';

	const breadcrumbData = {
		pageTitle: 'Users Datatable',
		pageLabel: 'Home'
	};
</script>

<svelte:head>
	<title>Users Datatable</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbTwo {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<UserTable />
			</Col>
			<Col lg={12}>
				<div class="user-pagination">
					<PaginationBasic />
				</div>
			</Col>
		</Row>
	</Container>
</div>
