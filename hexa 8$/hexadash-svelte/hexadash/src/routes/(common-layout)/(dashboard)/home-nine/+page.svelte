<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import PerformanceOverview from '@view/dashboard/demoNine/PerformanceOverview.svelte';
	import InfoCard from '@components/cards/InfoCard-2.svelte';
	import NewsLetter from '@components/cards/NewsLetter-2.svelte';
	import SingleChat from '@view/dashboard/demoNine/SingleChat.svelte';
	import BannersOne from '@view/dashboard/demoNine/BannersOne.svelte';
	import Tasks from '@view/dashboard/demoNine/Tasks.svelte';
	import MarketingCampaigns from '@view/dashboard/demoNine/MarketingCampaigns.svelte';
	import TeamList from '@view/dashboard/demoNine/TeamList.svelte';
	import ProfileCard from '@view/dashboard/demoNine/ProfileCard.svelte';
	import TodoList from '@view/dashboard/demoNine/Todos.svelte';
	import MemberProgress from '@view/dashboard/demoNine/MemberProgress.svelte';
	import Gmap from '@view/dashboard/demoNine/Locations.svelte';
	import BestSellers from '@view/dashboard/demoNine/BestSellers.svelte';
	import chatData from '@data/chatData.json';
	let border = "border-0"
	const breadcrumbData = {
		pageTitle: 'Demo Nine',
		bcItem: 'Dashboard',
		bcItemActive: 'Demo Nine'
	};

	let activeUser = 0;
	let singleContent = chatData[0].privateChat[activeUser].content;
	let userNames = chatData[0].privateChat[activeUser].userName;
	let singleComponent = true;
</script>

<svelte:head>
	<title>Home Nine</title>
</svelte:head>

<div class="demo4 mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<BannersOne />
			</Col>
			<Col xxl={4} lg={6} class="mb-25">
				<PerformanceOverview {border} />
			</Col>
			<Col xxl={4} class=" mb-25">
				<Row>
					<Col md={6} class="mb-25">
						<InfoCard />
					</Col>
					<Col md={6} class="mb-25">
						<InfoCard type="secondary" icon="award" text="Total Awards" counter="15K" />
					</Col>
					<Col xxl={12}>
						<NewsLetter />
					</Col>
				</Row>
			</Col>
			<Col  xxl={8} lg={6} class="mb-25">
				<Tasks />
			</Col>
			<Col xxl={4} xl={6} class="mb-25">
				<MarketingCampaigns />
			</Col>
			<Col xxl={4} md={6} class="mb-25">
				<TodoList />
			</Col>
			<Col xxl={4} md={6} class="mb-25">
				<TeamList />
			</Col>
			<Col xxl={4} md={6} class="mb-25">
				<ProfileCard />
			</Col>
			<Col xxl={4} class="mb-25">
				<SingleChat {singleContent} {userNames} {singleComponent} />
			</Col>
			<Col xxl={8}>
				<Row>
					<Col md={6} class="mb-25">
						<MemberProgress />
					</Col>
					<Col md={6} class="mb-25">
						<Gmap />
					</Col>
					<Col xxl={12} class="mb-25">
						<BestSellers />
					</Col>
				</Row>
			</Col>
		</Row>
	</Container>
</div>
