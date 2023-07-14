<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Avatar from '$lib/uiElements/Avatar.svelte';

	const breadcrumbData = {
		pageTitle: 'Avatars',
		bcItem: 'Ui Elements',
		bcItemActive: 'Avatars'
	};
</script>

<svelte:head>
	<title>Avatars</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Avatar />
			</Col>
		</Row>
	</Container>
</div>
