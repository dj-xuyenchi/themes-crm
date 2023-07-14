<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbTwo from '@components/breadcrumbs/BreadcrumbTwo.svelte';
	import UserGrid from '@apps/users/UserGrid.svelte';

	const breadcrumbData = {
		pageTitle: 'User Cards',
		pageLabel: 'Home'
	};
</script>

<svelte:head>
	<title>User Cards</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbTwo {...breadcrumbData} />
			</Col>
			<UserGrid />
		</Row>
	</Container>
</div>
