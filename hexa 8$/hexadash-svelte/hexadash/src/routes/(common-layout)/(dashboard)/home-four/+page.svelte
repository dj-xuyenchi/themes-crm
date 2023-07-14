<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import BannersOne from '@components/banners/BannersOne.svelte';
	import PerformanceOverview from '@view/dashboard/demoFour/PerformanceOverview.svelte';
	import InfoCard from '@components/cards/InfoCard.svelte';
	import NewsLetter from '@components/cards/NewsLetter.svelte';
	import SingleChat from '@apps/chat/SingleChat.svelte';
	import Tasks from '@view/dashboard/demoFour/Tasks.svelte';
	import MarketingCampaigns from '@view/dashboard/demoFour/MarketingCampaigns.svelte';
	import TeamList from '@view/dashboard/demoFour/TeamList.svelte';
	import ProfileCard from '@view/dashboard/demoFour/ProfileCard.svelte';
	import SocialTraffic from '@view/dashboard/demoFour/SocialTraffic.svelte';
	import chatData from '@data/chatData.json';

	const breadcrumbData = {
		pageTitle: 'Demo Four',
		bcItem: 'Dashboard',
		bcItemActive: 'Demo Four'
	};

	let activeUser = 0;
	let singleContent = chatData[0].privateChat[activeUser].content;
	let userNames = chatData[0].privateChat[activeUser].userName;
	let singleComponent = true;
</script>

<svelte:head>
	<title>Home Four</title>
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
				<PerformanceOverview />
			</Col>
			<Col xxl={4} class=" mb-25">
				<Row>
					<Col md={6} class="mb-25">
						<InfoCard />
					</Col>
					<Col md={6} class="mb-25">
						<InfoCard type="info" icon="award" text="Total Awards" counter="15K" />
					</Col>
					<Col xxl={12}>
						<NewsLetter />
					</Col>
				</Row>
			</Col>
			<Col  xl={6} class="mb-25">
				<Tasks />
			</Col>
			<Col xxl={6} xl={6} class="mb-25">
				<MarketingCampaigns />
			</Col>
			<Col xxl={8}>
				<Row>
					<Col xxl={6} md={6} class="mb-25">
						<ProfileCard />
					</Col>
					<Col xxl={6} md={6} class="mb-25">
						<TeamList />
					</Col>
					<Col xxl={12} class="mb-25">
						<SocialTraffic />
					</Col>
				</Row>
			</Col>
			<Col xxl={4} class="mb-25">
				<SingleChat {singleContent} {userNames} {singleComponent} />
			</Col>
		</Row>
	</Container>
</div>
