<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '$lib/components/cards/CardExtra.svelte';
	import SocialTraffic from '$lib/components/tables/SocialTraffic.svelte';

	let trafficData = [
		{
			id: 1,
			channel: 'Facebook',
			traffic: '38,536',
			type: 'primary',
			icon: 'facebook-f',
			session: '457',
			bounceRate: '60%',
			duration: '00:25:30'
		},
		{
			id: 2,
			channel: 'Instragram',
			traffic: '28,536',
			type: 'info',
			icon: 'twitter',
			session: '254',
			bounceRate: '25%',
			duration: '00:14:35'
		},
		{
			id: 4,
			channel: 'Twitter',
			traffic: '15,536',
			type: 'secondary',
			icon: 'instagram',
			session: '753',
			bounceRate: '58%',
			duration: '00:14:32'
		},
		{
			id: 5,
			channel: 'YouTube',
			traffic: '10,536',
			type: 'danger',
			icon: 'youtube',
			session: '895',
			bounceRate: '17%',
			duration: '00:19:24'
		}
	];
</script>

<Card class="border-0 h-100 social-media-traffic">
	<CardHeader class="px-25 border-0">
		<h6>Social Media Traffic</h6>
		<CardExtra />
	</CardHeader>
	<CardBody>
		<SocialTraffic {trafficData} />
	</CardBody>
</Card>
