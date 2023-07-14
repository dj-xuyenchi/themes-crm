<script>
	import { Col, Card, CardHeader, CardBody, Button } from 'sveltestrap';
	import ModalTemplate from './modal-elements/ModalTemplate.svelte';

	let open = false;
	let modalBg;

	const basicModal = {
		header: true,
		headerContent: 'Basic Title',
		modalContent: '',
		footer: true,
		icon: '',
		buttonOne: 'primary',
		buttonOneText: 'Save Changes',
		buttonTwo: 'secondary',
		buttonTwoText: 'Close'
	};

	const basicModalTwo = {
		header: false,
		borderless: 'card-borderless',
		modalContent: `<span>Some contents...</span>`,
		footer: true,
		buttonOne: '',
		buttonTwo: 'primary',
		buttonTwoText: 'Ok'
	};

	let modalContents = {};
	const toggle = () => {
		modalContents = {
			header: true,
			headerContent: 'Basic Title',
			modalContent: '',
			footer: true,
			icon: '',
			buttonOne: 'primary',
			buttonOneText: 'Save Changes',
			buttonTwo: 'secondary',
			buttonTwoText: 'Close'
		};
		open = !open;
		modalBg = 'modal-bg-normal';
	};

	const modalConfirm = () => {
		modalContents = {
			header: true,
			borderless: 'card-borderless',
			headerContent: 'Do you Want to delete these items?',
			modalContent: 'Some Contents',
			footer: true,
			icon: '',
			buttonOne: 'light',
			buttonOneText: 'Cancel',
			buttonTwo: 'info',
			buttonTwoText: 'Ok'
		};
		open = !open;
		modalBg = 'modal-bg-normal';
	};

	const modalDelete = () => {
		modalContents = {
			header: true,
			borderless: 'card-borderless',
			headerContent: 'Do you Want to delete these items?',
			modalContent: 'Some contents',
			footer: true,
			icon: '',
			buttonOne: 'danger',
			buttonOneText: 'No',
			buttonTwo: 'success',
			buttonTwoText: 'Yes'
		};
		open = !open;
		modalBg = 'modal-bg-normal';
	};

	const modalPrimary = () => {
		modalContents = basicModal;
		modalBg = 'modal-bg-primary';
		open = !open;
	};
	const modalSuccess = () => {
		modalContents = basicModal;
		modalBg = 'modal-bg-success';
		open = !open;
	};
	const modalDanger = () => {
		modalContents = basicModal;
		modalBg = 'modal-bg-danger';
		open = !open;
	};
	const modalWarning = () => {
		modalContents = basicModal;
		modalBg = 'modal-bg-warning';
		open = !open;
	};

	let infoType;
	let icon;
	const modalInfoOne = () => {
		icon = 'info-circle';
		modalContents = { icon, ...basicModalTwo };
		infoType = 'modal-type-info';
		open = !open;
		modalBg = 'modal-bg-normal';
	};
	const modalInfoTwo = () => {
		icon = 'check-circle';
		modalContents = { icon, ...basicModalTwo };
		infoType = 'modal-type-success';
		open = !open;
		modalBg = 'modal-bg-normal';
	};
	const modalInfoThree = () => {
		icon = 'exclamation-octagon';
		modalContents = { icon, ...basicModalTwo };
		infoType = 'modal-type-error';
		open = !open;
		modalBg = 'modal-bg-normal';
	};
	const modalInfoFour = () => {
		icon = 'exclamation-triangle';
		modalContents = { icon, ...basicModalTwo };
		infoType = 'modal-type-warning';
		open = !open;
		modalBg = 'modal-bg-normal';
	};
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<Button color="primary" on:click={toggle}>Open Modal</Button>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Confirmation modal dialog</h6>
		</CardHeader>
		<CardBody>
			<div
				class="modal-btn-group d-flex align-items-center justify-content-sm-start justify-content-center"
			>
				<Button color="light" outline class="btn-outline-lighten__height" on:click={modalConfirm}
					>Confirm</Button
				>
				<Button color="light" outline class="btn-outline-lighten__height" on:click={modalDelete}
					>Delete</Button
				>
			</div>
		</CardBody>
	</Card>
</Col>

<ModalTemplate isOpen={open} {toggle} {...modalContents} {modalBg} />

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Color Modal</h6>
		</CardHeader>
		<CardBody>
			<div
				class="modal-btn-group d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center"
			>
				<Button color="primary" size="sm" on:click={modalPrimary}>Primary</Button>
				<Button color="success" size="sm" on:click={modalSuccess}>Success</Button>
				<Button color="danger" size="sm" on:click={modalDanger}>Danger</Button>
				<Button color="warning" size="sm" on:click={modalWarning}>Warning</Button>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Info Modal</h6>
		</CardHeader>
		<CardBody>
			<div
				class="modal-btn-group d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center"
			>
				<Button color="light" outline class="btn-outline-lighten__height" on:click={modalInfoOne}
					>Info</Button
				>
				<Button color="light" outline class="btn-outline-lighten__height" on:click={modalInfoTwo}
					>Success</Button
				>
				<Button color="light" outline class="btn-outline-lighten__height" on:click={modalInfoThree}
					>Error</Button
				>
				<Button color="light" outline class="btn-outline-lighten__height" on:click={modalInfoFour}
					>Warning</Button
				>
			</div>
		</CardBody>
	</Card>
</Col>

<style lang="scss">
	:global {
		@import '../../assets/sass/mixins/media-queries';
		.modal-btn-group {
			button {
				margin: 5px;
			}
		}

		.btn-outline-lighten__height {
			height: 36px;
		}
		.modal-header {
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: space-between;
			padding: 1.125rem 1.75rem;
			border-bottom: 1px solid var(--border-color);
			border-top-left-radius: calc(0.3rem - 1px);
			border-top-right-radius: calc(0.3rem - 1px);
		}

		.modal-footer {
			border-top: 1px solid var(--border-color);
		}
		.modal-body {
			padding: 1.75rem;
		}
		@include cms3(576px) {
			.modal-dialog {
				max-width: 620px;
				margin: 1.75rem auto;
			}
			.modal-content {
				box-shadow: 0 3px 6px -4px rgba(var(--color-dark-rgba), 0.12),
					0 6px 16px 0 rgba(var(--color-dark-rgba), 0.08),
					0 9px 28px 8px rgba(var(--color-dark-rgba), 0.05);
			}
		}

		.modal-bg {
			&-primary {
				.modal-content {
					background-color: #7450ef;
				}
			}
			&-success {
				.modal-content {
					background-color: #00bb45;
				}
			}
			&-danger {
				.modal-content {
					background-color: #ef1f1f;
				}
			}
			&-warning {
				.modal-content {
					background-color: #f98106;
				}
			}
			&-info {
				.modal-content {
					background-color: #0090fd;
				}
			}
		}
	}
</style>
