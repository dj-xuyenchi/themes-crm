<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import MarketingCampaigns from '$lib/components/tables/MarketingCampaigns.svelte';

	const campaignData = {
		today: [
			{
				id: 1,
				title: 'Microsoft Company',
				amount: '1045,520',
				percent: 84,
				icon: 'internet-explorer.png'
			},
			{
				id: 2,
				title: 'WordPress',
				amount: '2000,520',
				percent: 62,
				icon: 'wordpress.png'
			},
			{
				id: 3,
				title: 'Adidas Brand',
				amount: '1520,950',
				percent: 47,
				icon: 'adidas.png'
			},
			{
				id: 4,
				title: 'Slack',
				amount: '7045,154',
				percent: 69,
				icon: 'slack.png'
			},
			{
				id: 5,
				title: 'Adobe CC',
				amount: '1252,220',
				percent: 54,
				icon: 'adobe.png'
			}
		],
		week: [
			{
				id: 2,
				title: 'WordPress',
				amount: '2000,520',
				percent: 90,
				icon: 'wordpress.png'
			},
			{
				id: 1,
				title: 'Microsoft Company',
				amount: '1045,520',
				percent: 80,
				icon: 'internet-explorer.png'
			},
			{
				id: 4,
				title: 'Slack',
				amount: '7045,154',
				percent: 60,
				icon: 'slack.png'
			},
			{
				id: 3,
				title: 'Adidas Brand',
				amount: '1520,950',
				percent: 50,
				icon: 'adidas.png'
			},
			{
				id: 5,
				title: 'Adobe CC',
				amount: '1252,220',
				percent: 60,
				icon: 'adobe.png'
			}
		],
		month: [
			{
				id: 4,
				title: 'Slack',
				amount: '7045,154',
				percent: 80,
				icon: 'slack.png'
			},
			{
				id: 5,
				title: 'Adobe CC',
				amount: '1252,220',
				percent: 70,
				icon: 'adobe.png'
			},
			{
				id: 2,
				title: 'WordPress',
				amount: '2000,520',
				percent: 60,
				icon: 'wordpress.png'
			},
			{
				id: 1,
				title: 'Microsoft Company',
				amount: '1045,520',
				percent: 80,
				icon: 'internet-explorer.png'
			},
			{
				id: 3,
				title: 'Adidas Brand',
				amount: '1520,950',
				percent: 50,
				icon: 'adidas.png'
			}
		]
	};

	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = campaignData[period];
	function changeData(data) {
		dataPeriod = campaignData[data];
		currentTab = data;
	}
</script>

<Card class="border-0 px-25 merketing-campaigns h-100">
	<CardHeader class="px-0 border-0">
		<h6>Marketing Campaigns</h6>
		<div class="card-extra">
			<ul class="card-tab-links nav">
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('today');
						}}
						href={'#'}
						class={currentTab === 'today' ? 'active' : ''}>Today</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('week');
						}}
						href={'#'}
						class={currentTab === 'week' ? 'active' : ''}>Week</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('month');
						}}
						href={'#'}
						class={currentTab === 'month' ? 'active' : ''}>year</a
					>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody>
		<MarketingCampaigns {dataPeriod} />
	</CardBody>
</Card>
