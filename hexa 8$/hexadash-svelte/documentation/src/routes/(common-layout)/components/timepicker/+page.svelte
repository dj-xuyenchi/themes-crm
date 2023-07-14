<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import TimePicker from '$lib/uiElements/TimePicker.svelte';

	const breadcrumbData = {
		pageTitle: 'Time Picker',
		bcItem: 'Dashboard',
		bcItemActive: 'Time Picker'
	};
</script>

<svelte:head>
	<title>Time Picker</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<TimePicker />
		</Row>
	</Container>
</div>
