<script>
	import { Container, Row, Col, Button } from 'sveltestrap';

	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import ProfileCard from '@apps/social/widgets/ProfileCard.svelte';
	import UserBio from '@apps/social/widgets/UserBio.svelte';
	import Overview from '@apps/social/Overview.svelte';
	import Timeline from '@apps/social/Timeline.svelte';
	import Activity from '@apps/social/Activity.svelte';

	const breadcrumbData = {
		pageTitle: 'My Profile',
		bcItem: 'Home',
		bcItem2: 'Apps',
		bcItemActive: 'Social'
	};

	const socialTabs = [Overview, Timeline, Activity];
	let activeTab = socialTabs.indexOf(Overview);
	function removeActive(selector) {
		selector
			.closest('.ap-tab-main')
			.querySelectorAll('li a')
			.forEach((elm) => {
				elm.classList.remove('active');
			});
	}
	function shiftTabs(e) {
		e.preventDefault();
		const targetElm = e.target;
		if (targetElm.dataset.type === 'overview') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = socialTabs.indexOf(Overview);
		} else if (targetElm.dataset.type === 'timeline') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = socialTabs.indexOf(Timeline);
		} else if (targetElm.dataset.type === 'activity') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = socialTabs.indexOf(Activity);
		}
	}
</script>

<svelte:head>
	<title>My Profile</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={3} md={4}>
				<div class="profile-sider">
					<ProfileCard />
					<UserBio />
				</div>
			</Col>
			<Col xxl={9} md={8}>
				<div class="ap-tab ap-tab-header mb-25">
					<div class="ap-tab-header__img">
						<img src="/img/ap-header.png" alt="ap-header" class="img-fluid w-100" />
						<div class="ap-cover__changeImgBtn">
							<Button color="light" outline class="change-cover cover-btn"
								><img class="svg" alt="" src={'/img/svg/camera.svg'} /> Change Cover</Button
							>
						</div>
					</div>
					<div class="ap-tab-wrapper">
						<ul class="nav px-25 ap-tab-main">
							<li class="nav-item">
								<a class="nav-link active" data-type="overview" href={'#'} on:click={shiftTabs}
									>Overview</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" data-type="timeline" href={'#'} on:click={shiftTabs}>Timeline</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" data-type="activity" href={'#'} on:click={shiftTabs}>Activity</a
								>
							</li>
						</ul>
					</div>
				</div>
				<svelte:component this={socialTabs[activeTab]} />
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import '../../../../../assets/sass/components/profile';
		@import '../../../../../assets/sass/components/style';
	}
</style>
