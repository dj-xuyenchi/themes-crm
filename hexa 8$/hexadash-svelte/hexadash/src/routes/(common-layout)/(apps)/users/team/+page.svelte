<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbTwo from '@components/breadcrumbs/BreadcrumbTwo.svelte';
	import Team from '../../../../../lib/view/apps/users/Team.svelte';

	const breadcrumbData = {
		pageTitle: 'Team Members',
		pageLabel: 'Home'
	};
</script>

<svelte:head>
	<title>Team Members</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbTwo {...breadcrumbData} />
			</Col>
			<Col xxl={12}>
				<Team />
			</Col>
		</Row>
	</Container>
</div>
