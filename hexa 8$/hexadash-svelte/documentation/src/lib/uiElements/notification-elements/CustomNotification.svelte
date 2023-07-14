<script>
	export let notification = {};
	export let onRemove = null;

	const handleButtonClick2 = () => {
		onRemove();
	};
</script>

<div class="notification-wrapper notification-wrapper notification-wrapper--{notification.type}">
	<div class="message-wrapper__content">
		<h6>
			{#if notification.icon !== ''}
				<span class="message-wrapper__icon">
					<i class="la la-{notification.icon}" />
				</span>
			{/if}
			{notification.heading}
		</h6>
		<span class="message-wrapper__text"><p>{notification.description}</p></span>
		<button on:click={handleButtonClick2}><i class="la la-times" /></button>
	</div>
</div>
