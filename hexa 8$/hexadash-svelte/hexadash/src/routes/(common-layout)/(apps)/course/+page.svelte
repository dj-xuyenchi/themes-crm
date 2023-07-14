<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Course from '../../../../lib/view/apps/course/all/course.svelte';

	const breadcrumbData = {
		pageTitle: 'Course',
		bcItem: 'App',
		bcItemActive: 'Course'
	};
</script>

<svelte:head>
	<title>Course</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={12}>
				<Course />
			</Col>
		</Row>
	</Container>
</div>
<style lang="scss">
	:global {
		@import '../../../../assets/sass/mixins/functions';
		@import '../../../../assets/sass/mixins/rfs';
		@import '../../../../assets/sass/mixins/media-queries';
		@import '../../../../assets/sass/components/course';
	}
</style>