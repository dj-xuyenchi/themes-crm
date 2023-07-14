<script>
	import {
		getNotificationsContext
	} from 'svelte-notifications';
	import {
		Col,
		Card,
		CardHeader,
		CardBody,
		Button
	} from 'sveltestrap';
	const {
		addNotification
	} = getNotificationsContext();

	const notificationNormal = () => {
		addNotification({
			position: 'top-left',
			heading: 'This is a default notification',
			type: 'success',
			icon: '',
			description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
			removeAfter: 4000
		});
	};

	const notificationSuccess = () => {
		addNotification({
			position: 'top-center',
			heading: 'This is a default notification',
			type: 'success',
			icon: 'check-circle',
			description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
			removeAfter: 4000
		});
	};

	const notificationWarning = () => {
		addNotification({
			position: 'top-center',
			heading: 'This is a default notification',
			type: 'warning',
			icon: 'exclamation-triangle',
			description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
			removeAfter: 4000
		});
	};

	const notificationError = () => {
		addNotification({
			position: 'top-center',
			heading: 'This is a default notification',
			type: 'error',
			icon: 'exclamation-circle',
			description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
			removeAfter: 4000
		});
	};

	const notificationInfo = () => {
		addNotification({
			position: 'top-center',
			heading: 'This is a default notification',
			type: 'info',
			icon: 'info-circle',
			description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
			removeAfter: 4000
		});
	};

	const notificationCustomDuration = () => {
		addNotification({
			position: 'top-center',
			heading: 'This notification will disappear after 6 seconds',
			type: 'success',
			icon: 'check',
			description: 'This notification will disappear after 6 seconds',
			removeAfter: 6000
		});
	};

	const positionTopLeft = () => {
		addNotification({
			position: 'top-left',
			heading: 'This is a default notification',
			type: 'success',
			icon: '',
			description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
			removeAfter: 4000
		});
	};
	const positionTopCenter = () => {
		addNotification({
			position: 'top-center',
			heading: 'This is a default notification',
			type: 'success',
			icon: '',
			description: 'This is a default notification',
			removeAfter: 4000
		});
	};
	const positionTopRight = () => {
		addNotification({
			position: 'top-right',
			heading: 'This is a default notification',
			type: 'success',
			icon: '',
			description: 'This is a default notification',
			removeAfter: 4000
		});
	};
	const positionBottomLeft = () => {
		addNotification({
			position: 'bottom-left',
			heading: 'This is a default notification',
			type: 'success',
			icon: '',
			description: 'This is a default notification',
			removeAfter: 4000
		});
	};
	const positionBottomCenter = () => {
		addNotification({
			position: 'bottom-center',
			heading: 'This is a default notification',
			type: 'success',
			icon: '',
			description: 'This is a default notification',
			removeAfter: 4000
		});
	};
	const positionBottomRight = () => {
		addNotification({
			position: 'bottom-right',
			heading: 'This is a default notification',
			type: 'success',
			icon: '',
			description: 'This is a default notification',
			removeAfter: 4000
		});
	};
</script>

<Col lg={6}>
<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Basic</h6>
	</CardHeader>
	<CardBody>
		<Button color="primary" size="sm" class="btn-squired notification-modal-box__btn fw-500"
			on:click={notificationNormal}>Open the Notification Box</Button>
	</CardBody>
</Card>

<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Duration</h6>
	</CardHeader>
	<CardBody>
		<Button color="primary" size="sm" class="btn-squired notification-modal-box__btn fw-500"
			on:click={notificationCustomDuration}>Open the Notification Box</Button>
	</CardBody>
</Card>

<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Custom Close</h6>
	</CardHeader>
	<CardBody>
		<Button color="primary" size="sm" class="btn-squired notification-modal-box__btn fw-500"
			on:click={notificationNormal}>Open the Notification Box</Button>
	</CardBody>
</Card>
</Col>

<Col lg={6}>
<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>With Icon</h6>
	</CardHeader>
	<CardBody>
		<div class="button-group">
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={notificationInfo}>Info</Button>
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={notificationSuccess}>Success</Button>
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={notificationError}>Error</Button>
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={notificationWarning}>Warning</Button>
		</div>
	</CardBody>
</Card>

<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Position</h6>
	</CardHeader>
	<CardBody>
		<div class="button-group d-flex flex-wrap justify-content-sm-start justify-content-center">
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={positionTopLeft}>Top Left</Button>
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={positionTopCenter}>Top Center</Button>
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={positionTopRight}>Top Right</Button>
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={positionBottomLeft}>Bottom Left</Button>
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={positionBottomCenter}>Bottom Center</Button>
			<Button color="light" outline size="sm" class="btn-squired notification-modal-box__btn fw-500"
				on:click={positionBottomRight}>Bottom Right</Button>
		</div>
	</CardBody>
</Card>
</Col>

<style lang="scss">
	:global {
		.notification-wrapper {
			position: relative;
			border-radius: 6px;
			padding: 10px;
			box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
			max-width: 400px;
			width: 400px;
			padding: 25px 25px 10px;
			background-color: var(--color-white);

			&:not(:last-child) {
				margin-bottom: 20px;
			}

			&--info {
				.message-wrapper__icon{

					img,
					svg,
					i {
						color:#0090FD;
					}
				}
			}

			&--success {
				.message-wrapper__icon{
					svg,
					i {
						color: #00BB45;
					}
				}
			}

			&--error,
			&--danger {
				.message-wrapper__icon{

					svg,
					i {
						color: #EF1F1F;
					}
				}
			}

			&--warning {
				.message-wrapper__icon{

					svg,
					i {
						color: #F98106;
					}
				}
			}
		}

		.message-wrapper__content {
			button {
				position: absolute;
				top: 20px;
				right: 20px;
				background-color: transparent;
				border: none;

				i,
				svg,
				img {
					max-width: 20px;
					color: var(--color-dark);
					font-size: calc(16.2px + 0.15vw);
				}
			}

			h6{
				margin-bottom: 15px;
				display: flex;
    			align-items: center;
			}
		}

		.message-wrapper__icon{
			margin-right: 15px;

			i {
				font-size: 24px;
				display: inline-flex;
			}
		}

		.custom-notification-box__text {
			p{
				font-size: 16px;
				font-weight: 400;
				line-height: calc(24px / 16px);
				color:#666d92;
			}
		}
	}
</style>