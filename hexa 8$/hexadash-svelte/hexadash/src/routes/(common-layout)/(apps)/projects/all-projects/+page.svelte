<script>
	import { onMount } from 'svelte';
	import {
		Container,
		Row,
		Col,
		Button,
		Modal,
		ModalBody,
		ModalHeader,
		Form,
		FormGroup,
		Input,
		Label
	} from 'sveltestrap';
	import DatePicker from '@beyonk/svelte-datepicker/src/components/DatePicker.svelte';

	import ProjectGrid from '@apps/projects/ProjectGrid.svelte';
	import ProjectList from '@apps/projects/ProjectList.svelte';
	import PaginationBasic from '@components/paginations/PaginationBasic.svelte';
	import projects from '@data/projects.json';

	let open = false;
	const toggle = () => (open = !open);

	const projectLayout = [ProjectGrid, ProjectList];
	let activeLayout = projectLayout.indexOf(ProjectGrid);

	const projectMembers = ['tm1.png', 'tm2.png', 'tm3.png', 'tm4.png', 'tm5.png'];

	const projectsArr = Object.assign([], ...projects);
	const allProjects = [
		...projectsArr.progress,
		...projectsArr.completed,
		...projectsArr.late,
		...projectsArr.early
	];

	$: projectType = allProjects;

	onMount(() => {
		let navLinks = document.querySelectorAll('#project-tabs li a');
		navLinks.forEach((link) => {
			link.addEventListener('click', function () {
				let dataType = this.getAttribute('data-type');
				this.closest('#project-tabs')
					.querySelectorAll('li a')
					.forEach((elm) => {
						elm.classList.remove('active');
					});
				this.classList.add('active');
				if (dataType === 'all') {
					projectType = allProjects;
				} else {
					projectType = projects[0][dataType];
				}
			});
		});
	});

	function removeActive(selector) {
		selector
			.closest('.icon-list-social')
			.querySelectorAll('a')
			.forEach((elm) => {
				elm.classList.remove('active');
			});
	}
	function shiftTabs() {
		if (this.dataset.type === 'project-grid') {
			removeActive(this);
			this.classList.add('active');
			projectType = allProjects;
			activeLayout = projectLayout.indexOf(ProjectGrid);
		} else if (this.dataset.type === 'project-list') {
			removeActive(this);
			this.classList.add('active');
			projectType = allProjects;
			activeLayout = projectLayout.indexOf(ProjectList);
		}
	}
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12} class="mb-25">
				<div class="project-progree-breadcrumb">
					<div class="breadcrumb-main user-member justify-content-sm-between ">
						<div class="d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
							<div
								class="d-flex align-items-center user-member__title justify-content-center me-sm-25"
							>
								<h4 class="text-capitalize fw-500 breadcrumb-title">Projects</h4>
								<span class="sub-title ms-sm-25 ps-sm-25">12 Running projects</span>
							</div>
						</div>
						<div class="action-btn">
							<Button color="primary" class="px-15" on:click={toggle}>
								<i class="las la-plus fs-16" />Create Project
							</Button>

							<Modal isOpen={open} {toggle} class="new-member">
								<ModalHeader {toggle}>
									<h6 class="modal-title fw-500" id="staticBackdropLabel">Create project</h6>
								</ModalHeader>
								<ModalBody>
									<div class="new-member-modal">
										<Form>
											<FormGroup class="mb-20">
												<Input type="text" class="form-control" placeholder="Duran Clayton" />
											</FormGroup>
											<FormGroup class="mb-20">
												<div class="category-member">
													<select class="form-select form-control" id="category-member">
														<option value="JAN">1</option>
														<option value="FBR">2</option>
													</select>
												</div>
											</FormGroup>
											<FormGroup class="mb-20">
												<Input
													type="textarea"
													class="form-control"
													id="exampleFormControlTextarea1"
													rows="3"
													placeholder="Project description"
												/>
											</FormGroup>
											<FormGroup class="textarea-group">
												<Label class="mb-15">status</Label>
												<div class="d-flex">
													<div class="project-task-list__left d-flex align-items-center">
														<div class="checkbox-group d-flex me-50 pe-10">
															<div
																class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex"
															>
																<Input
																	class="checkbox"
																	type="checkbox"
																	id="check-grp-1"
																	checked
																	label="status"
																/>
															</div>
														</div>
														<div class="checkbox-group d-flex me-50 pe-10">
															<div
																class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex"
															>
																<Input
																	class="checkbox"
																	type="checkbox"
																	id="check-grp-2"
																	label="Deactivated"
																/>
															</div>
														</div>
														<div class="checkbox-group d-flex">
															<div
																class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex"
															>
																<Input
																	class="checkbox"
																	type="checkbox"
																	id="check-grp-3"
																	label="blocked"
																/>
															</div>
														</div>
													</div>
												</div>
											</FormGroup>
											<div class="mb-25">
												<FormGroup class="mb-10">
													<Label for="name47">project member</Label>
													<Input
														type="text"
														class="form-control"
														id="name47"
														placeholder="Search members"
													/>
												</FormGroup>
												<ul class="d-flex flex-wrap mb-20 user-group-people__parent">
													{#each projectMembers as member}
														<li>
															<a href={'#'}>
																<img
																	class="rounded-circle wh-34"
																	src="/img/{member}"
																	alt="author"
																/>
															</a>
														</li>
													{/each}
												</ul>
											</div>
											<div
												class="d-flex new-member-calendar custom-date-ranger custom-date-ranger__sm"
											>
												<FormGroup class="w-100 me-sm-15 form-group-calender">
													<Label for="datepicker">start Date</Label>
													<div class="position-relative">
														<DatePicker format="MMMM DD, YYYY" />
														<a href={'#'}>
															<img class="svg" alt="" src={'/img/svg/chevron-right.svg'} /></a
														>
													</div>
												</FormGroup>
												<FormGroup class="w-100 form-group-calender">
													<Label for="datepicker2">End Date</Label>
													<div class="position-relative">
														<DatePicker format="MMMM DD, YYYY" />
														<a href={'#'}>
															<img class="svg" alt="" src={'/img/svg/chevron-right.svg'} /></a
														>
													</div>
												</FormGroup>
											</div>
											<div class="button-group d-flex pt-25">
												<Button
													color="primary"
													size="default"
													class="fs-15 btn-squared text-capitalize"
													>add new project
												</Button>

												<Button
													color="light"
													size="default"
													type="button"
													class="btn-squared fs-15 fw-400 text-capitalize b-light btn-transparent-light"
													on:click={toggle}>cancel</Button
												>
											</div>
										</Form>
									</div>
								</ModalBody>
							</Modal>
						</div>
					</div>
				</div>

				<div
					class="project-top-wrapper project-top-progress d-flex justify-content-between flex-wrap"
				>
					<div
						class="project-top-left d-flex flex-wrap justify-content-lg-between justify-content-center mt-n10"
					>
						<div class="project-tab global-shadow order-lg-1 order-2 my-10">
							<ul class="nav px-1" id="project-tabs">
								<li class="nav-item">
									<a class="nav-link active" id="ap-overview-tab" href="#all" data-type="all"
										>all projects</a
									>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="timeline-tab" href="#progress" data-type="progress"
										>in progress</a
									>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="activity-tab" href="#completed" data-type="completed"
										>completed</a
									>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="late-tab" href="#late" data-type="late">late</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="early-tab" href="#early" data-type="early">early</a>
								</li>
							</ul>
						</div>
						<div
							class="project-search project-search--height global-shadow ms-md-20 my-10 order-md-2 order-1"
						>
							<Form action="/" class="d-flex align-items-center user-member__form">
								<img class="svg" alt="" src={'/img/svg/search.svg'} />
								<Input
									class="form-control me-sm-2 border-0 box-shadow-none"
									type="search"
									placeholder="Search by Name"
									aria-label="Search"
								/>
							</Form>
						</div>
					</div>
					<div class="project-top-right d-flex flex-wrap">
						<div class="project-category d-flex align-items-center">
							<div class="d-flex align-items-center">
								<p class="mb-0 me-10 fs-14 color-light">sort by:</p>
								<div class="project-category__select dm-select">
									<select class="form-control color-primary">
										<option value="all" selected="selected">Project category</option>
										<option value="JAN">Event</option>
										<option value="FBR">Venues</option>
									</select>
								</div>
							</div>
						</div>
						<div class="project-icon-selected content-center">
							<div class="listing-social-link">
								<div class="icon-list-social d-flex">
									<a
										class="icon-list-social__link rounded-circle me-15 icon-list-social__style justify-content-center active"
										href={'#'}
										data-type="project-grid"
										on:click|preventDefault={shiftTabs}
									>
										<img class="svg" alt="" src={'/img/svg/grid.svg'} /></a
									>
									<a
										class="icon-list-social__link rounded-circle icon-list-social__style justify-content-center"
										href={'#'}
										data-type="project-list"
										on:click|preventDefault={shiftTabs}
									>
										<img class="svg" alt="" src={'/img/svg/list.svg'} /></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Col>
			<svelte:component this={projectLayout[activeLayout]} {projectType} />
			<Col lg={12}>
				<PaginationBasic />
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import '../../../../../assets/sass/mixins/functions';
		@import '../../../../../assets/sass/mixins/rfs';
		@import '../../../../../assets/sass/mixins/media-queries';
		@import '../../../../../assets/sass/components/app-ui';
		@import '../../../../../assets/sass/components/projects';
		@import '../../../../../assets/sass/components/breadcrumb';
		@import '../../../../../assets/sass/components/progress-bar';
		@import '../../../../../assets/sass/components/profile';
		@import '../../../../../assets/sass/components/users';
		@import '../../../../../assets/sass/components/shop';
		@import '../../../../../assets/sass/components/select';
		@import '../../../../../assets/sass/components/responsive';
	}
</style>
