<script>
	import { Container, Row, Col, Button } from 'sveltestrap';

	import ProjectSingle from '@apps/projects/ProjectSingle.svelte';
</script>

<svelte:head>
	<title>Projects Details</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<div class="breadcrumb-main application-ui mb-30">
					<div class="breadcrumb-action d-flex">
						<div class="d-flex align-items-center user-member__title me-sm-25 me-0">
							<h4 class="text-capitalize fw-500 breadcrumb-title">Application UI Design</h4>
						</div>
						<div class="action-btn me-10 my-sm-0">
							<Button color="primary" class="fs-12 fw-500"
								><img class="svg" alt="" src={'/img/svg/plus.svg'} /> Add task</Button
							>
						</div>
						<div class="btn-group-toggle" data-bs-toggle="buttons">
							<input type="checkbox" class="btn-check" id="btn-check-2-outlined" />
							<label class="btn btn-outline-secondary" for="btn-check-2-outlined">
								<img class="svg" alt="" src={'/img/svg/check.svg'} /> Mark as Complete</label
							>
						</div>
					</div>
					<div class="d-flex text-capitalize">
						<Button
							color="white"
							class="breadcrumb-edit border-0 color-primary content-center fs-12 fw-500 radius-md"
						>
							<img class="svg" alt="" src={'/img/svg/edit-3.svg'} />edit</Button
						>
						<Button
							class="breadcrumb-remove border-0 color-danger content-center bg-white fs-12 fw-500 ms-10 radius-md"
						>
							<img class="svg" alt="" src={'/img/svg/trash-2.svg'} />remove</Button
						>
					</div>
				</div>
			</Col>

			<Col lg={12}>
				<ProjectSingle />
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
	}
</style>
