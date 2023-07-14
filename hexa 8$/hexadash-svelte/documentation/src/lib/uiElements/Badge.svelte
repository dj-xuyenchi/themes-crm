<script>
	import { Row, Col, Card, CardHeader, CardBody, Badge } from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';

	const badgeText = ['99', '90+', '15+', '999+'];
	const badgeColor = ['success', 'danger', 'default', 'info', 'warning'];

	function dynamicBadgeInc() {
		let dynamicBadge = this.closest('.dynamic-badge-block').querySelector('.badge-dynamic-count');
		let total = dynamicBadge.innerText;
		if (total >= 0) {
			total++;
			dynamicBadge.innerText = total;
		}
	}

	function dynamicBadgeDec() {
		let dynamicBadge = this.closest('.dynamic-badge-block').querySelector('.badge-dynamic-count');
		let total = dynamicBadge.innerText;
		if (total > 0) {
			total--;
			dynamicBadge.innerText = total;
		}
	}

	let badgeEnabled = true;

	function dynamicBadgeSwitch() {
		badgeEnabled ? (badgeEnabled = false) : (badgeEnabled = true);
	}
</script>

<Row>
	<Col lg={6}>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Basic</h6>
				</CardHeader>
				<CardBody>
					<div class="avatars-list d-flex align-items-center">
						<span class="avatar avatar-light avatar-md avatar-square">
							<span class="avatar-badge-wrap">
								<Badge color="danger" class="badge-sm">5</Badge>
							</span>
						</span>

						<span class="avatar avatar-light avatar-md avatar-square">
							<span class="avatar-badge-wrap">
								<Badge color="danger" class="badge-sm">0</Badge>
							</span>
						</span>

						<span class="avatar avatar-light avatar-md avatar-square">
							<span class="avatar-badge-wrap avatar-badge-icon">
								<InlineSVG src={'/img/svg/clock.svg'} class="badge-icon badge-icon-danger" />
							</span>
						</span>
					</div>
				</CardBody>
			</Card>
		</div>

		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Overflow Count</h6>
				</CardHeader>
				<CardBody>
					<div class="avatars-list d-flex align-items-center">
						{#each badgeText as text}
							<span class="avatar avatar-light avatar-md avatar-square">
								<span class="avatar-badge-wrap">
									<Badge color="danger" pill class="badge-md">{text}</Badge>
								</span>
							</span>
						{/each}
					</div>
				</CardBody>
			</Card>
		</div>

		<div class="col-12">
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Clickable</h6>
				</CardHeader>
				<CardBody>
					<div class="avatars-list d-flex align-items-center">
						<a href={'#'}>
							<span class="avatar avatar-light avatar-md avatar-square avatar-badge-round">
								<span class="avatar-badge-wrap">
									<Badge color="danger" pill class="badge-md">99</Badge>
								</span>
							</span>
						</a>
					</div>
				</CardBody>
			</Card>
		</div>

		<div class="col-12">
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Status</h6>
				</CardHeader>
				<CardBody>
					<div class="status-list-inline d-flex mb-3">
						{#each badgeColor as color}
							<span class="badge-dot dot-{color}" />
						{/each}
					</div>
					<div class="status-list-inrow d-flex flex-column">
						{#each badgeColor as color}
							<div class="badge-text-wrapper">
								<span class="badge-dot dot-{color}" />
								<span>{color.toUpperCase()}</span>
							</div>
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
					<h6>Standalone</h6>
				</CardHeader>
				<CardBody>
					<div class="badge-list-wrapper d-flex align-items-center">
						<Badge color="danger" pill class="badge-lg">25</Badge>
						<Badge color="transprent" pill class="badge-lg badge-outlined badge-light">4</Badge>
						<Badge color="success" pill class="badge-lg">99+</Badge>
					</div>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Red badge</h6>
				</CardHeader>
				<CardBody>
					<div class="badge-list-wrapper d-flex align-items-center">
						<Badge color="red" class="badge-red color-dark">
							<InlineSVG src={'/img/svg/bell.svg'} />
							<div class="badge-dot-wrap">
								<span class="badge-dot dot-danger" />
							</div>
						</Badge>

						<Badge color="red" class="badge-red color-dark">
							<InlineSVG src={'/img/svg/bell.svg'} />
						</Badge>

						<Badge color="red" class="badge-red color-dark badge-text">
							<a href={'#'} class="color-info">Link something</a>
							<div class="badge-dot-wrap">
								<span class="badge-dot dot-danger" />
							</div>
						</Badge>
					</div>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card class="card-default card-md mb-4">
				<CardHeader>
					<h6>Dynamic</h6>
				</CardHeader>
				<CardBody>
					<div class="dynamic-badge-block mb-4">
						<span class="avatar avatar-light avatar-md avatar-square">
							<span class="avatar-badge-wrap">
								<Badge color="danger" pill class="badge-sm badge-dynamic-count">5</Badge>
							</span>
						</span>

						<div class="btn-group button-group-wrapper btn-group-normal ms-3">
							<button
								class="btn btn-icon btn-light btn-square btn-outlined btn-inc"
								on:click|preventDefault={dynamicBadgeInc}
							>
								<InlineSVG src={'/img/svg/plus.svg'} />
							</button>
							<button
								class="btn btn-icon btn-light btn-square btn-outlined btn-dec"
								on:click|preventDefault={dynamicBadgeDec}
							>
								<InlineSVG src={'/img/svg/minus.svg'} />
							</button>
						</div>
					</div>
					<div class="dynamic-badge-block dynamic-badge-switch">
						<span class="avatar avatar-light avatar-md avatar-square">
							{#if badgeEnabled}
								<span class="badge-dot-wrap">
									<span class="badge-dot dot-danger" />
								</span>
							{/if}
						</span>

						<div class="form-check form-switch form-switch-info form-switch-md">
							<input
								type="checkbox"
								class="form-check-input"
								id="switch-dynamic-badge"
								checked
								on:change={dynamicBadgeSwitch}
							/>
							<label class="form-check-label" for="switch-dynamic-badge" />
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	</Col>
</Row>

<style lang="scss">
	:global {
		.dynamic-badge-block .button-group-wrapper .btn-icon svg {
			width: 20px;
			height: 20px;
			color: var(--color-dark);
		}
		.badge-list-wrapper .badge {
			margin: 5px 6px;
		}

		.badge-list-wrapper .badge-text {
			background: transparent;
		}
	}
	.avatars-list {
		margin: 0 -10px;
	}
	.avatars-list:not(:last-child) {
		margin-bottom: 20px;
	}
	.badge-text-wrapper {
		font-size: 10px;
		color: var(--color-light);
	}

	.badge-text-wrapper:not(:last-child) {
		margin-bottom: 6px;
	}

	.badge-text-wrapper .badge-dot {
		display: inline-block;
		margin-right: 10px;
	}
	.status-list-inline .badge-dot {
		margin-right: 10px;
	}

	.dynamic-badge-block {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
	}

	.dynamic-badge-block .button-group-wrapper {
		-webkit-border-radius: 3px;
		border-radius: 3px;
		border: 1px solid var(--border-light);
	}

	.dynamic-badge-block .button-group-wrapper .btn-icon {
		padding: 0 0.922rem;
		height: 32px;
		border-width: 0;
		border-right-width: 1px;
	}

	.dynamic-badge-block .button-group-wrapper .btn-dec {
		border-right: 0;
	}

	.dynamic-badge-block .button-group-wrapper .btn-dec {
		border-left: 1px solid var(--border-color);
	}

	.dynamic-badge-block .form-switch {
		margin: 8px 0 0 16px;
	}

	.badge-list-wrapper {
		margin: -5px -6px;
	}
	// Switch Css
	.custom-switch-wrap {
		flex-wrap: wrap;
		.form-switch {
			margin-right: 10px;
		}
	}
	.form-check-input {
		clear: left;
	}

	.form-switch {
		.form-check-input {
			width: 1.8rem;
			height: 0.9rem;
			border-radius: 2rem;
		}
		&.form-switch-sm .form-check-input {
			width: 2.188rem;
			height: 1.25rem;
			border-radius: 2rem;
		}

		&.form-switch-md .form-check-input {
			height: 1.5rem;
			width: calc(2rem + 0.75rem);
			border-radius: 3rem;
		}

		&.form-switch-lg .form-check-input {
			height: 2rem;
			width: calc(3rem + 0.75rem);
			border-radius: 4rem;
		}

		&.form-switch-xl .form-check-input {
			height: 2.5rem;
			width: calc(4rem + 0.75rem);
			border-radius: 5rem;
		}
	}

	.form-check-input:checked {
		background-color: var(--color-primary);
		border-color: var(--color-primary);
	}
</style>
