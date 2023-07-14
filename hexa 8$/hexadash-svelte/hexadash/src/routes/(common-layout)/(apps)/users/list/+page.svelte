<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbTwo from '@components/breadcrumbs/BreadcrumbTwo.svelte';
	import UserList from '@apps/users/UserList.svelte';
	import PaginationBasic from '@components/paginations/PaginationBasic.svelte';

	const breadcrumbData = {
		pageTitle: 'Users List',
		pageLabel: 'Home'
	};
</script>

<svelte:head>
	<title>Users List</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbTwo {...breadcrumbData} />
			</Col>
			<UserList />
			<Col lg={12}>
				<div class="user-pagination">
					<PaginationBasic />
				</div>
			</Col>
		</Row>
	</Container>
</div>
