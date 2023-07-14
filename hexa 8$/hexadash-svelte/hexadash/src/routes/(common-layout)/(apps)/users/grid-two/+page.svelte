<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbTwo from '@components/breadcrumbs/BreadcrumbTwo.svelte';
	import PaginationBasic from '@components/paginations/PaginationBasic.svelte';
	import UserGridTwo from '@apps/users/UserGridTwo.svelte';

	const breadcrumbData = {
		pageTitle: 'Users Card Two',
		pageLabel: 'Home'
	};
</script>

<svelte:head>
	<title>Users Card Two</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbTwo {...breadcrumbData} />
			</Col>
			<UserGridTwo />
			<Col lg={12}>
				<div class="user-pagination">
					<PaginationBasic />
				</div>
			</Col>
		</Row>
	</Container>
</div>
