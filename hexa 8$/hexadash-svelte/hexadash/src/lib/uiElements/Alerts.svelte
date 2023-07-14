<script>
	import { Row, Col, Card, CardHeader, CardBody, Button, Alert } from 'sveltestrap';

	const alertContent = [
		{
			color: 'success',
			title: '',
			content: 'Success Tips',
			size: 'default'
		},
		{
			color: 'info',
			title: '',
			content: 'Informational Notes',
			size: 'default'
		},
		{
			color: 'warning',
			title: '',
			content: 'Warning',
			size: 'default'
		},
		{
			color: 'danger',
			title: '',
			content: 'Error',
			size: 'default'
		},
		{
			color: 'success',
			title: 'Success Tips',
			content: 'Detailed description and advice about successful copywriting.',
			size: 'lg'
		},
		{
			color: 'info',
			title: 'Informational Notes',
			content: 'Additional description and information about copywriting.',
			size: 'lg'
		},
		{
			color: 'warning',
			title: 'Warning',
			content: 'This is a warning notice about copywriting.',
			size: 'lg'
		},
		{
			color: 'danger',
			title: 'Error',
			content: 'This is an error message about copywriting.',
			size: 'lg'
		}
	];

	let alertVisible = true;
	let alertVisible2 = true;
	let alertVisible3 = true;
	let alertVisible4 = true;
</script>

<Row>
	<Col lg={6}>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader class="py-20">
					<h6>Basic</h6>
				</CardHeader>
				<CardBody>
					<Alert color="success">
						<div class="alert-content">
							<p>Success Text</p>
						</div>
					</Alert>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader class="py-20">
					<h6>Closable</h6>
				</CardHeader>
				<CardBody>
					<Alert color="warning" isOpen={alertVisible} toggle={() => (alertVisible = false)}>
						<div class="alert-content">
							<p>
								Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning
								Text
							</p>
							<button
								type="button"
								class="btn-close text-capitalize"
								on:click={() => (alertVisible = !alertVisible)}
							>
								<img class="svg" alt="" src={'/img/svg/x.svg'} />
							</button>
						</div>
					</Alert>

					<Alert
						color="danger"
						class="alert-big"
						isOpen={alertVisible2}
						toggle={() => (alertVisible2 = false)}
					>
						<div class="alert-content">
							<h6 class="alert-heading">Error Text</h6>

							<p>
								Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning
								Text
							</p>

							<button
								type="button"
								class="btn-close text-capitalize"
								on:click={() => (alertVisible2 = !alertVisible2)}
							>
								<img class="svg" alt="" src={'/img/svg/x.svg'} />
							</button>
						</div>
					</Alert>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader class="py-20">
					<h6>Icon</h6>
				</CardHeader>
				<CardBody>
					{#each alertContent as item}
						<Alert color={item.color} class="alert-icon-area alert-icon-{item.size}">
							<div class="alert-icon">
								<img class="svg" alt="" src={'/img/svg/layers.svg'} />
							</div>
							<div class="alert-content">
								{#if item.title !== ''}
									<h6 class="alert-heading">{item.title}</h6>
								{/if}
								<p>{item.content}</p>
							</div>
						</Alert>
					{/each}
				</CardBody>
			</Card>
		</div>
	</Col>

	<Col lg={6}>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader class="py-20">
					<h6>More Types</h6>
				</CardHeader>
				<CardBody>
					<Alert color="success">
						<div class="alert-content">
							<p>Success Text</p>
						</div>
					</Alert>

					<Alert color="info">
						<div class="alert-content">
							<p>Info Text</p>
						</div>
					</Alert>

					<Alert color="warning">
						<div class="alert-content">
							<p>Warning Text</p>
						</div>
					</Alert>

					<Alert color="danger">
						<div class="alert-content">
							<p>Error Text</p>
						</div>
					</Alert>
				</CardBody>
			</Card>
		</div>

		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader class="py-20">
					<h6>Description</h6>
				</CardHeader>
				<CardBody>
					<Alert color="success" class="alert-lg">
						<div class="alert-content">
							<h6 class="alert-heading">Success Text</h6>
							<p>Detailed description and advice about successful copywriting.</p>
						</div>
					</Alert>

					<Alert color="info" class="alert-lg">
						<div class="alert-content">
							<h6 class="alert-heading">Info Text</h6>
							<p>Additional description and information about copywriting.</p>
						</div>
					</Alert>

					<Alert color="warning" class="alert-lg">
						<div class="alert-content">
							<h6 class="alert-heading">Warning Text</h6>
							<p>This is a warning notice about copywriting.</p>
						</div>
					</Alert>

					<Alert color="danger" class="alert-lg">
						<div class="alert-content">
							<h6 class="alert-heading">Error Text</h6>
							<p>This is an error message about copywriting.</p>
						</div>
					</Alert>
				</CardBody>
			</Card>
		</div>

		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader class="py-20">
					<h6>Customized Close Text</h6>
				</CardHeader>
				<CardBody>
					<Alert color="info" isOpen={alertVisible4} toggle={() => (alertVisible4 = false)}>
						<div class="alert-content">
							<p>Info Text</p>
							<button
								type="button"
								class="btn-close text-capitalize"
								on:click={() => (alertVisible4 = !alertVisible4)}
							>
								<span>close now</span>
							</button>
						</div>
					</Alert>
				</CardBody>
			</Card>
		</div>

		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader class="py-20">
					<h6>Smoothly Unmount</h6>
				</CardHeader>
				<CardBody>
					<Alert color="success" isOpen={alertVisible3} toggle={() => (alertVisible3 = false)}>
						<div class="alert-content">
							<p>Alert Message Text</p>
							<button
								type="button"
								class="btn-close text-capitalize"
								on:click={() => (alertVisible3 = !alertVisible3)}
							>
								<img class="svg" alt="" src={'/img/svg/x.svg'} />
							</button>
						</div>
					</Alert>
				</CardBody>
			</Card>
		</div>
	</Col>
</Row>
