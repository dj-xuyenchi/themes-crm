<script>
	import { Container, Row, Col } from 'sveltestrap';
	import PageHeaderBanner from '@components/banners/PageHeaderBanner.svelte';
	import Calendar from '@apps/calendar/Calendar.svelte';
	import KnowledgeBase from '@components/cta/KnowledgeBase.svelte';
	import UserOverview from '@view/dashboard/demoTen/UserOverview.svelte';
	import MemberProgress from '@view/dashboard/demoTen/MemberProgress.svelte';
	import UpcomingEvents from '@view/dashboard/demoTen/UpcomingEvents.svelte';
	import Timeline from '@view/dashboard/demoTen/Timeline.svelte';
	import Inbox from '@view/dashboard/demoTen/Inbox.svelte';
	import Blogs from '@view/dashboard/demoTen/Blogs.svelte';
	let withoutHeader = 'withoutHeader';
	let cardClass = 'bg-dark-area';
	let imgPath = '/img/demo5-banner.png';
	let title =  'Welcome To Demo Dashboard';
</script>

<svelte:head>
	<title>Home Ten</title>
</svelte:head>

<div class="demo5">
	<Container fluid>
		<Row>
			<Col xxl={12} class="mt-25 mb-25">
				<PageHeaderBanner {cardClass} {imgPath} {title}/>
			</Col>
			<Col xxl={8} class="mb-25">
				<UserOverview />
			</Col>
			<Col xxl={4} class="mb-25">
				<Calendar {withoutHeader} />
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
