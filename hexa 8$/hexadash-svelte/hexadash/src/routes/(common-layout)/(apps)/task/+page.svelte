<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Sidebar from '@apps/task/Sidebar.svelte';
	import TaskList from '@apps/task/TaskList.svelte';
	import taskData from '@data/task.json';

	const breadcrumbData = {
		pageTitle: 'Task',
		bcItem: 'Home',
		bcItem2: 'App',
		bcItemActive: 'Task'
	};

	let taskActiveTab = 'all';
	const handleTabActivation = (value) => {
		taskActiveTab = value;
	};
	let showModal = false;
	let toggleModal = () => (showModal = !showModal);
	let slicedData = taskData;
	let taskDataSorted = slicedData;

	/* Add Task */
	let newTask = [];
	let defaultId = 8;
	let addTask = (e) => {
		e.preventDefault();
		const id = defaultId++;
		const title = document.querySelector('#add-task-input').value;
		const description = document.querySelector('#add-task-textarea').value;
		newTask.push({ id, title, description, favorite: false, completed: false });
		taskDataSorted = [...slicedData, ...newTask];
		toggleModal();
	};
	$: tasks = taskDataSorted;
</script>

<svelte:head>
	<title>Task</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<div class="task-contents">
					<Sidebar {taskActiveTab} {handleTabActivation} {addTask} {showModal} {toggleModal} />
					<TaskList taskStatus={taskActiveTab} taskDataSorted={tasks} taskLimit="5" />
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
		:global{
			@import '../../../../assets/sass/mixins/media-queries';
			@import '../../../../assets/sass/mixins/functions';
			@import '../../../../assets/sass/mixins/rfs';
			@import '../../../../assets/sass/components/task.scss';
			@import '../../../../assets/sass/components/task-app.scss';
		}
</style>
