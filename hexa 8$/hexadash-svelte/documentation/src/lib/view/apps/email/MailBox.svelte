<script>
	import { Button, CardBody, Badge } from 'sveltestrap';
	import { mailBoxVisibility } from '../../../store/mailStore.js';
	import Editor from 'cl-editor/src/Editor.svelte';
	import InlineSvg from 'svelte-inline-svg';
	const miximizeIcon = '/img/svg/maximize.svg';
	const xIcon = '/img/svg/x.svg';
	const paperClipIcon = '/img/svg/paperclip.svg';
	const smileIcon = '/img/svg/smile.svg';
	const trashIcon = '/img/svg/trash-2.svg';

	function handleMailboxClose(e) {
		e.preventDefault();
		mailBoxVisibility.update(() => {
			return false;
		});
	}
</script>

<div
	class={$mailBoxVisibility
		? 'custom-mailCompose custom-mailCompose--position show'
		: 'custom-mailCompose custom-mailCompose--position'}
>
	<form action="/">
		<div class="custom-mailCompose__header d-flex justify-content-between align-items-center">
			<h6 class="mailCompose-title">New Message</h6>
			<div class="custom-mailCompose__action">
				<a href="/"><InlineSvg src={miximizeIcon} /></a>
				<a href="/" class="compose-close" on:click={(e) => handleMailboxClose(e)}
					><InlineSvg src={xIcon} /></a
				>
			</div>
		</div>
		<div class="custom-mailCompose__body">
			<div class="mailCompose-form-content">
				<div class="form-group positon-relative">
					<div class="form-group positon-relative">
						<input type="email" class="form-control-lg" name="email-to" placeholder="To">
					</div>
					<span class="mail-cc">Cc</span>
				</div>
				<div class="form-group positon-relative">
					<input type="text" class="form-control-lg" name="mail-to" placeholder="Subject" />
				</div>
				<div class="form-group">
					<Editor />
				</div>
			</div>
		</div>
		<div class="custom-mailCompose__footer d-flex justify-content-between align-items-center">
			<div class="footer-left d-flex align-items-center">
				<Button color="primary" size="md">Send</Button>
				<a href="/"><InlineSvg src={paperClipIcon} /></a>
				<a href="/"><InlineSvg src={smileIcon} /></a>
			</div>
			<div class="footer-right">
				<a href="/" class="btn-remove"><InlineSvg src={trashIcon} /></a>
			</div>
		</div>
	</form>
</div>
