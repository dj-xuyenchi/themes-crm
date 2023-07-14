<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbTwo from '@components/breadcrumbs/BreadcrumbTwo.svelte';
	import PaginationBasic from '@components/paginations/PaginationBasic.svelte';
	import UserGroup from '@apps/users/UserGroup.svelte';

	const breadcrumbData = {
		pageTitle: 'Users Group',
		pageLabel: 'Home'
	};
</script>

<svelte:head>
	<title>Users Group</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbTwo {...breadcrumbData} />
			</Col>
			<UserGroup />
			<Col lg={12}>
				<div class="user-pagination">
					<PaginationBasic />
				</div>
			</Col>
		</Row>
	</Container>
</div>
