<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import CourseDetails from '../../../../../lib/view/apps/course/details/details.svelte';
	const breadcrumbData = {
		pageTitle: 'Course Details',
		bcItem: 'App',
		bcItemActive: 'Course Details'
	};
</script>

<svelte:head>
	<title>Course Details</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={12}>
				<CourseDetails/>
			</Col>
		</Row>
	</Container>
</div>
<style lang="scss">
	:global {
		@import '../../../../../assets/sass/mixins/functions';
		@import '../../../../../assets/sass/mixins/rfs';
		@import '../../../../../assets/sass/mixins/media-queries';
		@import '../../../../../assets/sass/components/collapses';
		@import '../../../../../assets/sass/components/course';
	}
</style>