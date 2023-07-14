<script>
	import { Col, Card, CardHeader, CardBody, Spinner } from 'sveltestrap';
	const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
</script>

<Col lg={6}>
	<Card class="mb-4">
		<CardHeader>
			<h6>Colors</h6>
		</CardHeader>
		<CardBody>
			{#each colors as color}
				<Spinner {color} />
			{/each}
		</CardBody>
	</Card>

	<Card class="mb-4">
		<CardHeader>
			<h6>Types</h6>
		</CardHeader>
		<CardBody>
			<div>
				{#each colors as color}
					<Spinner {color} type="border" />
				{/each}
			</div>

			<div>
				{#each colors as color}
					<Spinner {color} type="grow" />
				{/each}
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="mb-4">
		<CardHeader>
			<h6>Size</h6>
		</CardHeader>
		<CardBody>
			<Spinner size="lg" />
			<Spinner size="lg" type="grow" />
			<Spinner size="sm" />
			<Spinner size="sm" type="grow" />
		</CardBody>
	</Card>
</Col>
