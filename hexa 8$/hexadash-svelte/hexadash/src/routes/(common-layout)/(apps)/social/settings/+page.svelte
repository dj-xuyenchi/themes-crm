<script>
	import { Container, Row, Col, Button, Card, CardBody } from 'sveltestrap';

	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import EditProfile from '@apps/social/settings/EditProfile.svelte';
	import AccountSetting from '@apps/social/settings/AccountSetting.svelte';
	import ChangePassword from '@apps/social/settings/ChangePassword.svelte';
	import SocialProfiles from '@apps/social/settings/SocialProfiles.svelte';
	import Notification from '@apps/social/settings/Notification.svelte';

	const breadcrumbData = {
		pageTitle: 'Profile Settings',
		bcItem: 'Home',
		bcItem2: 'Apps',
		bcItemActive: 'Social'
	};

	const settingsTabs = [EditProfile, AccountSetting, ChangePassword, SocialProfiles, Notification];
	let activeTab = settingsTabs.indexOf(EditProfile);
	function removeActive(selector) {
		selector
			.closest('.profile-settings-js')
			.querySelectorAll('.nav-link')
			.forEach((elm) => {
				elm.classList.remove('active');
			});
	}
	function shiftTabs(e) {
		e.preventDefault();
		const targetElm = e.target;
		if (targetElm.dataset.type === 'edit-profile') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = settingsTabs.indexOf(EditProfile);
		} else if (targetElm.dataset.type === 'account-settings') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = settingsTabs.indexOf(AccountSetting);
		} else if (targetElm.dataset.type === 'change-password') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = settingsTabs.indexOf(ChangePassword);
		} else if (targetElm.dataset.type === 'social-profiles') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = settingsTabs.indexOf(SocialProfiles);
		} else if (targetElm.dataset.type === 'notification') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = settingsTabs.indexOf(Notification);
		}
	}
</script>

<svelte:head>
	<title>Profile Settings</title>
</svelte:head>

<div class="profile-setting">
	<Container fluid>
		<Row class="mb-50">
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col xxl={3} lg={4} sm={5}>
				<Card class="mb-25">
					<CardBody class="text-center p-0">
						<div
							class="account-profile border-bottom pt-25 px-25 pb-0 flex-column d-flex align-items-center"
						>
							<div class="ap-img mb-20 pro_img_wrapper">
								<input id="file-upload" type="file" name="fileUpload" class="d-none" />
								<label for="file-upload">
									<img
										class="ap-img__main rounded-circle wh-120"
										src="/img/author/profile.png"
										alt="profile"
									/>
									<span class="cross" id="remove_pro_pic">
										<img class="svg" alt="" src={'/img/svg/camera.svg'} />
									</span>
								</label>
							</div>
							<div class="ap-nameAddress pb-3">
								<h5 class="ap-nameAddress__title">Duran Clayton</h5>
								<p class="ap-nameAddress__subTitle fs-14 m-0">UI/UX Designer</p>
							</div>
						</div>
						<div class="ps-tab p-20 pb-25">
							<div
								class="nav flex-column text-start profile-settings-js"
								role="tablist"
								aria-orientation="vertical"
							>
								<a
									class="nav-link active"
									href={'#'}
									role="tab"
									data-type="edit-profile"
									on:click={shiftTabs}
								>
									<img class="svg" alt="" src={'/img/svg/user.svg'} />
									Edit profile</a
								>
								<a
									class="nav-link"
									href={'#'}
									role="tab"
									data-type="account-settings"
									on:click={shiftTabs}
								>
									<img class="svg" alt="" src={'/img/svg/settings.svg'} /> Account setting</a
								>
								<a
									class="nav-link"
									href={'#'}
									role="tab"
									data-type="change-password"
									on:click={shiftTabs}
								>
									<img class="svg" alt="" src={'/img/svg/key.svg'} />change password</a
								>
								<a
									class="nav-link"
									href={'#'}
									role="tab"
									data-type="social-profiles"
									on:click={shiftTabs}
								>
									<img class="svg" alt="" src={'/img/svg/users.svg'} /> social profiles</a
								>
								<a
									class="nav-link"
									href={'#'}
									role="tab"
									data-type="notification"
									on:click={shiftTabs}
								>
									<img class="svg" alt="" src={'/img/svg/bell.svg'} /> notification</a
								>
							</div>
						</div>
					</CardBody>
				</Card>
			</Col>
			<Col xxl={9} lg={8} sm={7}>
				<div class="ap-tab ap-tab-header">
					<div class="ap-tab-header__img">
						<img src="/img/ap-header.png" alt="ap-header" class="img-fluid w-100" />
						<div class="ap-cover__changeImgBtn">
							<Button color="light" outline class="change-cover cover-btn"
								><img class="svg" alt="" src={'/img/svg/camera.svg'} /> Change Cover</Button
							>
						</div>
					</div>
				</div>
				<svelte:component this={settingsTabs[activeTab]} />
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
