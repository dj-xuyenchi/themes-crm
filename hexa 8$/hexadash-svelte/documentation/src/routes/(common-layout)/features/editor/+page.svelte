<script>
	import { Container, Row, Col, Input, Card, CardHeader, CardBody } from 'sveltestrap';
	import BreadcrumbOne from '@components/breadcrumbs/BreadcrumbOne.svelte';
	import Editor from 'cl-editor/src/Editor.svelte';
	import InlineSVG from 'svelte-inline-svg';

	const breadcrumbData = {
		pageTitle: 'Editors',
		bcItem: 'Feature',
		bcItemActive: 'Editors'
	};
</script>

<svelte:head>
	<title>Editors</title>
</svelte:head>

<div class="component-page ">
	<Container fluid>
		<Row>
			<Col lg={12} class="mb-25">
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			<Col lg={12}>
				<div class="bg-white mb-25 radius-xl">
					<div class="reply-form ">
						<form action={'#'}>
							<div class="mailCompose-form-content">
								<div class="form-group">
									<Editor />
								</div>
							</div>
						</form>
					</div>
				</div>
			</Col>
			<Col lg={12}>
				<div class="bg-white mb-25 radius-xl">
					<div class="reply-form">
						<form action={'#'}>
							<div class="mailCompose-form-content">
								<div class="form-group positon-relative">
									<span class="input-label">To</span>
									<Input class="border-0" type="text" placeholder="someone@mail.com" />
									<span class="mail-cc">Cc</span>
								</div>
								<div class="form-group">
									<Editor />
								</div>
							</div>
							<div class="reply-form__action d-flex justify-content-between align-items-center">
								<div class="reply-form__left d-flex align-items-center">
									<button class="btn btn-md btn-primary btn-send">Send</button>
									<a href={'#'}> <InlineSVG src={'/img/svg/paperclip.svg'} /></a>
									<a href={'#'}> <InlineSVG src={'/img/svg/smile.svg'} /></a>
								</div>
								<div class="reply-form__right">
									<a href={'#'} class="btn-remove">
										<InlineSVG src={'/img/svg/trash-2.svg'} />
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Col>
			<Col lg={12}>
				<div class="bg-white mb-25 radius-xl">
					<div class="dm-mailCompose ">
						<form action={'#'}>
							<div
								class="dm-mailCompose__header d-flex justify-content-between align-items-center"
							>
								<h6 class="mailCompose-title">New Message</h6>
								<div class="dm-mailCompose__action">
									<a href={'#'}>
										<InlineSVG src={'/img/svg/maximize-2.svg'} />
									</a>
									<a class="compose-close" href={'#'} data-trigger="compose">
										<InlineSVG src={'/img/svg/x.svg'} />
									</a>
								</div>
							</div>
							<!-- ends: .dm-mailCompose__header -->
							<div class="dm-mailCompose__body">
								<div class="mailCompose-form-content">
									<div class="form-group positon-relative">
										<Input class="border-0" type="text" placeholder="someone@mail.com" />
										<span class="input-label">To</span>
									</div>
									<div class="form-group positon-relative">
										<input
											type="text"
											class="form-control-lg"
											name="mail-to"
											placeholder="Subject"
										/>
									</div>
									<div class="form-group">
										<Editor />
									</div>
								</div>
							</div>

							<div
								class="dm-mailCompose__footer d-flex justify-content-between align-items-center"
							>
								<div class="footer-left d-flex align-items-center">
									<button class="btn btn-md btn-primary">Send</button>
									<a href={'#'}> <InlineSVG src={'/img/svg/paperclip.svg'} /></a>
									<a href={'#'}> <InlineSVG src={'/img/svg/smile.svg'} /></a>
								</div>
								<div class="footer-right">
									<a href={'#'} class="btn-remove"> <InlineSVG src={'/img/svg/trash-2.svg'} /></a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</div>
<style lang="scss">
	:global{
		@import "../../../../../src/assets/sass/mixins/media-queries";
		@import "../../../../../src/assets/sass/mixins/functions";
		@import "../../../../../src/assets/sass/components/email";
	}
</style>