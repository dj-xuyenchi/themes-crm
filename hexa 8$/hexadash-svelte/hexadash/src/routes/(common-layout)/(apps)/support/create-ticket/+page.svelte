<script>
	import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	const breadcrumbData = {
		pageTitle: 'New Ticket',
		bcItem: 'Home',
		bcItem2: 'Apps',
		bcItemActive: 'Support'
	};
</script>

<svelte:head>
	<title>New Ticket</title>
</svelte:head>

<div class="component-page mb-25">
	<div class="new-ticket">
		<Container fluid>
			<Row class="justify-content-center">
				<Col lg={12}>
					<BreadcrumbOne {...breadcrumbData} />
				</Col>
				<Col lg={6} class="mb-30">
					<div class="ticket_modal">
						<div class="ticket_modal-modal">
							<h1>Submit your Ticket</h1>
							<Form>
								<FormGroup>
									<Label>Email</Label>
									<Input type="text" class="form-control" />
								</FormGroup>
								<FormGroup>
									<Label>Subject</Label>
									<Input type="text" class="form-control" />
								</FormGroup>
								<FormGroup>
									<Label>Priority</Label>
									<Input type="text" class="form-control" placeholder="High" />
								</FormGroup>
								<FormGroup>
									<Label>Status</Label>
									<Input type="text" class="form-control" placeholder="Open" />
								</FormGroup>
								<FormGroup>
									<Label>Description</Label>
									<Input type="textarea" class="form-control" />
								</FormGroup>
								<div class="button-group d-flex pt-15">
									<Button color="primary" size="default" class="btn-squared">Submit ticket</Button>
								</div>
							</Form>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
</div>

<style lang="scss">
	:global {
		@import '../../../../../../src/assets/sass/components/profile';
		@import '../../../../../../src/assets/sass/components/support-ticket';
		@import '../../../../../../src/assets/sass/components/data-table';
		@import '../../../../../../src/assets/sass/components/table';
		@import '../../../../../../src/assets/sass/components/select';
		@import '../../../../../../src/assets/sass/components/select';
		@import '../../../../../../src/assets/sass/components/users';
	}
</style>