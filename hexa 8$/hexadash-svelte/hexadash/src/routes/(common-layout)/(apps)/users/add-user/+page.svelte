<script>
	import { Container, Row, Col } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	import PersonalInfo from '@apps/users/add-user/PersonalInfo.svelte';
	import WorkInfo from '../../../../../lib/view/apps/users/add-user/WorkInfo.svelte';
	import SocialInfo from '../../../../../lib/view/apps/users/add-user/SocialInfo.svelte';

	const breadcrumbData = {
		pageTitle: 'Add User',
		bcItem: 'Home',
		bcItem2: 'Apps',
		bcItemActive: 'Users'
	};

	const addUserTabs = [PersonalInfo, WorkInfo, SocialInfo];
	let activeTab = addUserTabs.indexOf(PersonalInfo);
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
		if (targetElm.dataset.type === 'personalInfo') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = addUserTabs.indexOf(PersonalInfo);
		} else if (targetElm.dataset.type === 'workInfo') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = addUserTabs.indexOf(WorkInfo);
		} else if (targetElm.dataset.type === 'socialInfo') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = addUserTabs.indexOf(SocialInfo);
		}
	}
</script>

<svelte:head>
	<title>Add User</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<div class="user-info-tab w-100 bg-white global-shadow radius-xl mb-50">
					<div class="ap-tab-wrapper border-bottom">
						<ul
							class="nav px-30 ap-tab-main text-capitalize"
							role="tablist"
							aria-orientation="vertical"
						>
							<li class="nav-item">
								<a
									class="nav-link active"
									href={'#'}
									role="tab"
									data-type="personalInfo"
									on:click={shiftTabs}
								>
									<img class="svg" alt="" src={'/img/svg/user.svg'} />
									personal info</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link" href={'#'} role="tab" data-type="workInfo" on:click={shiftTabs}>
									<img class="svg" alt="" src={'/img/svg/briefcase.svg'} /> work info</a
								>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href={'#'}
									role="tab"
									data-type="socialInfo"
									on:click={shiftTabs}
								>
									<img class="svg" alt="" src={'/img/svg/share-2.svg'} /> Social</a
								>
							</li>
						</ul>
					</div>

					<svelte:component this={addUserTabs[activeTab]} />
				</div>
			</Col>
		</Row>
	</Container>
</div>
