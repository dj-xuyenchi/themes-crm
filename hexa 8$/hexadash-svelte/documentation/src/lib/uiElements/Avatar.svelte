<script>
	import { Row, Col, Card, CardHeader, CardBody, Button, Alert } from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';

	const avatarSize = ['avatar-xs', 'avatar-sm', 'avatar-md', 'avatar-lg'];
</script>

<Row>
	<Col lg={6}>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Basic</h6>
				</CardHeader>
				<CardBody>
					<div class="d-flex align-items-center mb-20">
						{#each avatarSize.reverse() as size}
							<span class="{size} avatar avatar-light avatar-circle">
								<InlineSVG src={'/img/svg/user.svg'} class="avatar-icon" />
							</span>
						{/each}
					</div>
					<div class="d-flex align-items-center">
						{#each avatarSize as size}
							<span class="{size} avatar avatar-light avatar-square">
								<InlineSVG src={'/img/svg/user.svg'} class="avatar-icon" />
							</span>
						{/each}
					</div>
				</CardBody>
			</Card>
		</div>
	</Col>
	<Col lg={6}>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Type</h6>
				</CardHeader>
				<CardBody>
					<div class="d-flex align-items-center">
						<span class="avatar avatar-light avatar-sm avatar-circle">
							<InlineSVG src={'/img/svg/user.svg'} class="avatar-icon" />
						</span>

						<span class="avatar avatar-light avatar-sm avatar-circle">
							<span class="avatar-letter">U</span>
						</span>

						<span class="avatar avatar-light avatar-sm avatar-circle">
							<span class="avatar-text">user</span>
						</span>

						<span class="avatar avatar-light avatar-sm avatar-circle">
							<img class="avatar-img rounded-circle" src="/img/author/1.jpg" alt="" />
						</span>

						<span class="avatar avatar-warning avatar-sm avatar-circle avatar-transparent ">
							<span class="avatar-letter">U</span>
						</span>

						<span class="avatar avatar-success avatar-sm avatar-circle">
							<InlineSVG src={'/img/svg/user.svg'} class="avatar-icon" />
						</span>
					</div>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>With Badge</h6>
				</CardHeader>
				<CardBody>
					<div class="d-flex align-items-center">
						<span class="avatar avatar-light avatar-sm avatar-square">
							<InlineSVG src={'/img/svg/user.svg'} class="avatar-icon" />
							<span class="avatar-badge-wrap">
								<span class="badge badge-danger badge- badge-sm">2</span>
							</span>
						</span>

						<span class="avatar avatar-light avatar-sm avatar-square">
							<InlineSVG src={'/img/svg/user.svg'} class="avatar-icon" />
							<span class="badge-dot-wrap">
								<span class="badge-dot dot-danger" />
							</span>
						</span>
					</div>
				</CardBody>
			</Card>
		</div>
	</Col>
</Row>
