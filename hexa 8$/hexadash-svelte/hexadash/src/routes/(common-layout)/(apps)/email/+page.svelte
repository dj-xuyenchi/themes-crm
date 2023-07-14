<script>
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import EmailNav from '@apps/email/sidebarComponents/EmailNav.svelte';
	import EmailLabel from '@apps/email/sidebarComponents/EmailLabel.svelte';
	import AddLabel from '@apps/email/sidebarComponents/AddLabel.svelte';
	import { Container, Row, Col, Card, CardBody, Button } from 'sveltestrap';

	const breadcrumbData = {
		pageTitle: 'Email',
		bcItem: 'Dashboard',
		bcItemActive: 'Email'
	};

	const emailNavList = [
		{
			text: 'Inbox',
			icon: 'inbox',
			path: 'inbox',
			unread: 2
		},
		{
			text: 'Stared',
			icon: 'star',
			path: 'stared',
			unread: 0
		},
		{
			text: 'Sent',
			icon: 'message',
			path: 'sent',
			unread: 0
		},
		{
			text: 'Drafts',
			icon: 'edit',
			path: 'drafts',
			unread: 2
		},
		{
			text: 'Spam',
			icon: 'exclamation-octagon',
			path: '#',
			unread: 0
		},
		{
			text: 'Trash',
			icon: 'trash',
			path: '#',
			unread: 0
		}
	];

	const emailLabelList = [
		{
			text: 'Personal'
		},
		{
			text: 'Social'
		},
		{
			text: 'Promotion'
		}
	];
</script>

<div class="crm mb-25">
	<Container fluid>
		<div class="mailbox-wrapper">
			<Row>
				<Col lg={12}>
					<BreadcrumbOne {...breadcrumbData} />
				</Col>
				<Col lg={2}>
					<aside class="mailbox-sidebar-container">
						<div class="dm-mail-sidebar show mb-30">
							<Card>
								<CardBody>
									<div class="d-flex align-content-center content-center px-15">
										<Button class="btn-compose btn-shadow-primary" color={'primary'}>
											<i class="uil uil-plus" /> Compose
										</Button>
									</div>
									<div class="mail-sidebar-bottom">
										<EmailNav navList={emailNavList} />
									</div>
									<span class="dm-mail-label mt-35">Label</span>
									<EmailLabel labelList={emailLabelList} />
									<AddLabel />
								</CardBody>
							</Card>
						</div>
					</aside>
				</Col>
				<Col lg={10} />
			</Row>
		</div>
	</Container>
</div>
