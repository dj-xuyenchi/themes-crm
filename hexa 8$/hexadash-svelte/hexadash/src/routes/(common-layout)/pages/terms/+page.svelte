<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Terms from '$lib/view/pages/Terms.svelte';

	const breadcrumbData = {
		pageTitle: 'Terms & Conditions',
		bcItem: 'Pages',
		bcItemActive: 'Terms & Conditions'
	};
</script>

<svelte:head>
	<title>Terms & Conditions</title>
</svelte:head>

<div class="terms">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<div class="terms-breadcrumb">
					<div class="display-1">Terms & Conditions</div>
				</div>
				<Terms />
			</Col>
		</Row>
	</Container>
</div>
