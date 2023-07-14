<script>
	import { getNotificationsContext } from 'svelte-notifications';
	import { Col, Card, CardHeader, CardBody, Button } from 'sveltestrap';
	const { addNotification } = getNotificationsContext();

	const messageNormal = () => {
		addNotification({
			position: 'top-center',
			heading: 'This is a default message',
			type: 'success',
			icon: 'check',
			description: 'This is a default message',
			removeAfter: 4000
		});
	};

	const messageSuccess = () => {
		addNotification({
			position: 'top-center',
			heading: 'This is a default message',
			type: 'success',
			icon: 'check',
			description: 'This is a default message',
			removeAfter: 4000
		});
	};

	const messageWarning = () => {
		addNotification({
			position: 'top-center',
			heading: 'This is a default message',
			type: 'warning',
			icon: 'exclamation-triangle',
			description: 'This is a default message',
			removeAfter: 4000
		});
	};

	const messageError = () => {
		addNotification({
			position: 'top-center',
			heading: 'This is a default message',
			type: 'error',
			icon: 'exclamation-octagon',
			description: 'This is a default message',
			removeAfter: 4000
		});
	};

	const messageCustomDuration = () => {
		addNotification({
			position: 'top-center',
			heading: 'This message will disappear after 6 seconds',
			type: 'success',
			icon: 'check',
			description: 'This message will disappear after 6 seconds',
			removeAfter: 6000
		});
	};
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<Button
				color="primary"
				size="lg"
				class="btn-squired btn-shadow-primary btn-message"
				on:click={messageNormal}>Display Normal Message</Button
			>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Other types of message</h6>
		</CardHeader>
		<CardBody>
			<div class="button-group flex-wrap justify-content-sm-start justify-content-center">
				<Button
					color="light"
					size="lg"
					outline
					class="btn-squired btn-message"
					on:click={messageSuccess}>Success</Button
				>
				<Button
					color="light"
					size="lg"
					outline
					class="btn-squired btn-message"
					on:click={messageWarning}>Warning</Button
				>
				<Button
					color="light"
					size="lg"
					outline
					class="btn-squired btn-message"
					on:click={messageError}>Error</Button
				>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Customize</h6>
		</CardHeader>
		<CardBody>
			<div class="d-flex flex-wrap justify-content-sm-start justify-content-center">
				<Button
					color="light"
					size="lg"
					outline
					class="btn-squired btn-message"
					on:click={messageCustomDuration}>Customize display Duration</Button
				>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Loading</h6>
		</CardHeader>
		<CardBody>
			<div class="d-flex flex-wrap justify-content-sm-start justify-content-center">
				<Button
					color="light"
					size="lg"
					outline
					class="btn-squired btn-message"
					on:click={messageSuccess}>Display a loading indicator</Button
				>
			</div>
		</CardBody>
	</Card>
</Col>
