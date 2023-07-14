<script>
	import { Container, Row, Col } from 'sveltestrap';
	import PageHeaderBanner from '@components/banners/PageHeaderBanner.svelte';
	import Calendar from '@apps/calendar/Calendar.svelte';
	import KnowledgeBase from '@components/cta/KnowledgeBase.svelte';
	import UserOverview from '@view/dashboard/demoFive/UserOverview.svelte';
	import MemberProgress from '@view/dashboard/demoFive/MemberProgress.svelte';
	import UpcomingEvents from '@view/dashboard/demoFive/UpcomingEvents.svelte';
	import Timeline from '@view/dashboard/demoFive/Timeline.svelte';
	import Inbox from '@view/dashboard/demoFive/Inbox.svelte';
	import Blogs from '@view/dashboard/demoFive/Blogs.svelte';
	let imgPath = '/img/banner-img.png';
	let title =  'Hey Danial! Welcome to the Dashboard';
</script>

<svelte:head>
	<title>Home Five</title>
</svelte:head>

<div class="demo5">
	<Container fluid>
		<Row>
			<Col xxl={12} class="mt-25 mb-25">
				<PageHeaderBanner {imgPath} {title}/>
			</Col>
			<Col xxl={8} class="mb-25">
				<UserOverview />
			</Col>
			<Col xxl={4} class="mb-25">
				<Calendar />
			</Col>
			<Col xl={6} class="mb-25">
				<MemberProgress />
			</Col>
			<Col xl={6} class="mb-25">
				<UpcomingEvents />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<KnowledgeBase />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<Timeline />
			</Col>
			<Col xxl={4} class="mb-25">
				<Inbox />
			</Col>
			<Col xxl={12} class="mb-25">
				<Blogs />
			</Col>
		</Row>
	</Container>
</div>
