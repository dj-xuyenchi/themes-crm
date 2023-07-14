<script>
	import Notifications from 'svelte-notifications';
	import CustomNotification from './notification-elements/CustomNotification.svelte';
	import NotificationTemplate from './notification-elements/NotificationTemplate.svelte';
</script>

<Notifications item={CustomNotification}>
	<NotificationTemplate />
</Notifications>

<style lang="scss">
	:global {
		.default-position-style-top-left,
		.default-position-style-top-center,
		.default-position-style-top-right,
		.default-position-style-bottom-left,
		.default-position-style-bottom-right,
		.default-position-style-bottom-center {
			z-index: 9999;
		}
	}
</style>
