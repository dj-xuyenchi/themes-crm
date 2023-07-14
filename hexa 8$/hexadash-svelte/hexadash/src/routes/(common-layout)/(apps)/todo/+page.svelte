<script>
	import { Container, Row, Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import TaskApp from '$lib/components/tasklist/TaskApp.svelte';

	const breadcrumbData = {
		pageTitle: 'Todo',
		bcItem: 'Home',
		bcItem2: 'Todo',
		bcItemActive: 'Todo'
	};

	let taskTab = 'all';
	let actionBtn = true;
</script>

<svelte:head>
	<title>Todo</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<Card class="mb-25">
					<CardHeader>
						<h6>Task Lists</h6>
					</CardHeader>
					<CardBody class="px-0 pt-15 pb-20">
						<div class="todo-task table-responsive todo-task1">
							<TaskApp
								header=""
								description={false}
								taskStatus={taskTab}
								taskLimit="5"
								{actionBtn}
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
</style>
