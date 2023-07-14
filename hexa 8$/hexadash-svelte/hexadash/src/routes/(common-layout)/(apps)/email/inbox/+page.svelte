<script>
	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';
	import EmailSidebar from '../../../../../lib/view/apps/email/EmailSidebar.svelte';
	import EmailList from '../../../../../lib/view/apps/email/EmailList.svelte';
	import { Container, Row, Col } from 'sveltestrap';

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
					<EmailSidebar navList={emailNavList} labelList={emailLabelList} />
				</Col>
				<Col lg={10}>
					<EmailList mailType="inbox" />
				</Col>
			</Row>
		</div>
	</Container>
</div>
