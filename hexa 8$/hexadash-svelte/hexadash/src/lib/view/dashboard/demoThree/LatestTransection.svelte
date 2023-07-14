<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import transecData from '@data/transections.json';
	let period = 'today';
	let currentTab = 'today';
	let dataPeriod = transecData[period];
	function changeData(data) {
		dataPeriod = transecData[data];
		currentTab = data;
	}
</script>

<Card class="border-0 h-100">
	<CardHeader>
		<h6>Latest Transections</h6>

		<div class="card-extra">
			<ul class="card-tab-links nav">
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('today');
						}}
						href={'#'}
						class={currentTab === 'today' ? 'active' : ''}>Today</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('week');
						}}
						href={'#'}
						class={currentTab === 'week' ? 'active' : ''}>Week</a
					>
				</li>
				<li>
					<a
						on:click|preventDefault={() => {
							changeData('month');
						}}
						href={'#'}
						class={currentTab === 'month' ? 'active' : ''}>year</a
					>
				</li>
			</ul>
		</div>
	</CardHeader>
	<CardBody class="py-30">
		<div class="transection-list">
			{#each dataPeriod as data}
				<div class="transection-single">
					<div class="transection-single__details">
						<span class="transection-single__icon transection-single__icon--{data.style}">
							<i class="uil uil-{data.icon}" />
						</span>
						<span class="transection-single__info">
							<strong>{data.paymentMethod}</strong>
							<span>{data.duration}</span>
						</span>
					</div>

					{#if data.paymentType === 'credit'}
						<div
							class="transection-single__amount transection-single__amount--{data.paymentType +
								'ed'}"
						>
							<span>+{data.amount}</span>
						</div>
					{:else}
						<div
							class="transection-single__amount transection-single__amount--{data.paymentType +
								'ed'}"
						>
							<span>-{data.amount}</span>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</CardBody>
</Card>

<style lang="scss">
	.transection-list {
		.transection-single {
			display: flex;
			align-items: center;
			justify-content: space-between;
			&:not(:last-child) {
				margin-bottom: 25px;
			}
			&__details {
				display: flex;
				align-items: center;
				margin: 0 -8px;
			}
			&__icon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
				height: 44px;
				border-radius: 6px;
				margin: 0 8px;
				font-size: 20px;
				&--primary {
					background: rgba(var(--color-primary-rgba), 0.2);
					color: var(--color-primary);
				}
				&--info {
					background: rgba(var(--color-info-rgba), 0.2);
					color: var(--color-info);
				}
				&--success {
					background: rgba(var(--color-success-rgba), 0.2);
					color: var(--color-success);
				}
				&--warning {
					background: rgba(var(--color-warning-rgba), 0.2);
					color: var(--color-warning);
				}
				&--secondary {
					background: rgba(var(--color-secondary-rgba), 0.2);
					color: var(--color-secondary);
				}
			}
			&__info {
				margin: 0 8px;
				strong {
					font-size: 15px;
					font-weight: 500;
					display: block;
				}
				span {
					font-size: 15px;
					font-weight: 400;
					display: block;
					color: var(--color-light);
				}
			}
			&__amount {
				font-size: 14px;
				font-weight: 500;
				&--credited {
					color: var(--color-success);
				}
				&--debited {
					color: var(--color-danger);
				}
			}
		}
	}
</style>
