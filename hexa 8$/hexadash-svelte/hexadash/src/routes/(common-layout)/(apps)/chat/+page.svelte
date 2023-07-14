<script>
	import { onMount } from 'svelte';
	import { Container, Row, Col, Form, Input, Button } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';

	import PrivateChat from '@apps/chat/PrivateChat.svelte';
	import GroupChat from '@apps/chat/GroupChat.svelte';
	import AllContacts from '@apps/chat/AllContacts.svelte';
	import SingleChat from '@apps/chat/SingleChat.svelte';
	import chatData from '@data/chatData.json';
	import { chatContent } from '@store/chatStore';
	const privateChats = $chatContent[0].privateChat;
	const groupChats = $chatContent[0].groupChat;

	const breadcrumbData = {
		pageTitle: 'Chat',
		bcItem: 'Apps',
		bcItemActive: 'Chat'
	};
	const chatTabs = [PrivateChat, GroupChat, AllContacts];
	let activeTab = chatTabs.indexOf(PrivateChat);
	function removeActive(selector) {
		selector
			.closest('.chat-nav-js')
			.querySelectorAll('li a')
			.forEach((elm) => {
				elm.classList.remove('active');
			});
	}
	function shiftTabs(e) {
		e.preventDefault();
		const targetElm = e.target;
		if (targetElm.dataset.type === 'private') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = chatTabs.indexOf(PrivateChat);
		} else if (targetElm.dataset.type === 'group') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = chatTabs.indexOf(GroupChat);
		} else if (targetElm.dataset.type === 'all') {
			removeActive(targetElm);
			targetElm.classList.add('active');
			activeTab = chatTabs.indexOf(AllContacts);
		}
	}

	let activeUser = 0;
	let groupChat = false;
	let singleContent = chatData[0].privateChat[activeUser].content;
	let userNames = chatData[0].privateChat[activeUser].userName;
	onMount(() => {
		document.body.addEventListener('click', function (e) {
			document.querySelectorAll('.user-list-item__wrapper').forEach((elem) => {
				if (e.target.closest('.user-list-item__wrapper') === elem) {
					groupChat = false;
					if (
						activeTab === chatTabs.indexOf(PrivateChat) ||
						activeTab === chatTabs.indexOf(AllContacts)
					) {
						const itemIndex = Array.prototype.findIndex.call(
							privateChats,
							(item) => item.email === elem.dataset.user
						);

						privateChats.forEach((item) => {
							if (elem.dataset.user === item.email) {
								activeUser = itemIndex;
								singleContent = chatData[0].privateChat[activeUser].content;
								userNames = chatData[0].privateChat[activeUser].userName;
							}
						});
					} else if (activeTab === chatTabs.indexOf(GroupChat)) {
						groupChat = true;
						const itemIndex = Array.prototype.findIndex.call(
							groupChats,
							(item) => item.id === elem.dataset.user
						);

						groupChats.forEach((item) => {
							if (elem.dataset.user === item.id) {
								activeUser = itemIndex;
								singleContent = chatData[0].groupChat[activeUser].content;
								userNames = chatData[0].groupChat[activeUser].groupName;
							}
						});
					}
				}
			});
		});
	});
</script>

<svelte:head>
	<title>Chat</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<div class="chat-area d-flex">
					<div class="mb-lg-0 mb-40 chat-sidebar">
						<div class="sidebar-group left-sidebar chat_sidebar">
							<div id="chat" class="left-sidebar-wrap radius-xl active">
								<div class="chat-wrapper py-25">
									<div class="search-header">
										<Form class="d-flex align-items-center">
											<img class="svg" alt="" src={'/img/svg/search.svg'} />
											<Input
												class="form-control me-sm-2 border-0 box-shadow-none"
												type="search"
												placeholder="Search"
												aria-label="Search"
											/>
										</Form>
									</div>
									<div class="search-tab">
										<ul class="nav ap-tab-main border-bottom text-capitalize chat-nav-js">
											<li class="nav-item me-0">
												<a
													href={'#'}
													class="active nav-link"
													on:click={shiftTabs}
													data-type="private">private chat</a
												>
											</li>
											<li class="nav-item me-0">
												<a class="nav-link" href={'#'} on:click={shiftTabs} data-type="group">
													group chat
													<span class="total-message ms-1">
														<span class="badge badge-danger ">5</span>
													</span>
												</a>
											</li>
											<li class="nav-item me-0">
												<a class="nav-link" href={'#'} on:click={shiftTabs} data-type="all"
													>all contact</a
												>
											</li>
										</ul>
									</div>
									<div class="search-body">
										<div>
											{#if activeTab === chatTabs.indexOf(GroupChat)}
												<div class="user-button-top">
													<Button class="border bg-normal color-gray rounded-pill content-center">
														<img class="svg" alt="" src={'/img/svg/edit.svg'} />
														create a new group</Button
													>
												</div>
											{/if}
											{#if activeTab === chatTabs.indexOf(AllContacts)}
												<div class="user-button-top">
													<Button class="border bg-normal color-gray rounded-pill content-center">
														<img class="svg" alt="" src={'/img/svg/edit.svg'} />
														Add New Contact</Button
													>
												</div>
											{/if}
											<ul class="user-list">
												<svelte:component this={chatTabs[activeTab]} />
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="chat-content">
						<div class="chat">
							<div class="chat-body bg-white radius-xl">
								<SingleChat {singleContent} {userNames} {groupChat} />
							</div>
						</div>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</div>
