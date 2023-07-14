<script>
	import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'sveltestrap';
	let isOpen,
		toggle,
		borderless,
		modalBg,
		header,
		headerContent,
		modalContent,
		footer,
		icon,
		buttonOne,
		buttonOneClass,
		buttonOneText,
		buttonTwo,
		buttonTwoClass,
		buttonTwoText,
		infoType;
	export {
		isOpen,
		toggle,
		borderless,
		modalBg,
		header,
		headerContent,
		modalContent,
		footer,
		icon,
		buttonOne,
		buttonOneClass,
		buttonOneText,
		buttonTwo,
		buttonTwoClass,
		buttonTwoText,
		infoType
	};
</script>

<Modal {isOpen} {toggle} class="{modalBg} {borderless} {infoType !== undefined ? infoType : ''}">
	{#if header}
		<ModalHeader {toggle}>
			{#if icon !== ''}
				<i class="uil uil-{icon}" />
			{/if}
			{headerContent}
		</ModalHeader>
	{/if}
	<ModalBody>
		{#if modalContent !== ''}
			<i class="uil uil-{icon}" />
			{@html modalContent}
		{:else}
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		{/if}
	</ModalBody>
	{#if footer}
		<ModalFooter>
			{#if buttonOne !== ''}
				<Button color={buttonOne} class={buttonOneClass} on:click={toggle}>{buttonOneText}</Button>
			{/if}
			{#if buttonTwo !== ''}
				<Button color={buttonTwo} class={buttonTwoClass} on:click={toggle}>{buttonTwoText}</Button>
			{/if}
		</ModalFooter>
	{/if}
</Modal>
