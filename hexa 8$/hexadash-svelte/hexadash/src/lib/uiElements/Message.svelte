<script>
	import Notifications from 'svelte-notifications';
	import CustomMessage from './message-elements/CustomMessage.svelte';
	import MessageTemplate from './message-elements/MessageTemplate.svelte';
</script>

<Notifications item={CustomMessage}>
	<MessageTemplate />
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
