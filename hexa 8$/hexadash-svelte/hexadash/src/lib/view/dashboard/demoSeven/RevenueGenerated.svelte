<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '@components/cards/CardExtra.svelte';
	import Chartjs from '@components/utilities/Chartjs.svelte';

	let height = 250;
	let scales = {
		y: {
			display: false
		},
		x: {
			display: false
		}
	};
	let options = {
		hoverOffset: 3,
		maintainAspectRatio: false,
		responsive: false,
		borderColor: '#fff',
		plugins: {
			legend: {
				display: false
			},
			labels: {
				display: false
			}
		},
		animation: {
			animateScale: true,
			animateRotate: true
		}
	};
	let dataStats = [
		{
			icons: ['facebook'],
			labels: ['Facebook'],
			revenue: [4621],
			color: '#8231D3'
		},
		{
			icons: ['twitter'],
			labels: ['Twitter'],
			revenue: [4245],
			color: '#00AAFF'
		},
		{
			icons: ['google'],
			labels: ['Google'],
			revenue: [12112],
			color: '#5840FF'
		}
	];
	let labels = [];
	let revenues = [];
	let colors = [];
	dataStats.forEach((elm) => {
		labels.push(elm.labels);
		revenues.push(elm.revenue);
		colors.push(elm.color);
	});

	let chartData = [
		{
			label: 'Revenue Generated',
			data: revenues,
			backgroundColor: colors
		}
	];

	let tooltip = {
		backgroundColor: '#FFF',
		titleFontSize: 16,
		titleFontColor: '#0066ff',
		bodyFontColor: '#000',
		bodyFontSize: 14,
		displayColors: false,

		callbacks: {
			title(t) {
				console.log(t);
			}
		}
	};
</script>

<Card class="border-0 px-25 h-100">
	<CardHeader class="px-0 border-0 pb-md-20 pb-0">
		<h6>Source Of Revenue Generated</h6>
		<CardExtra />
	</CardHeader>
	<CardBody class="p-0">
		<div class="chart-content revenuePieChart--wrapper px-0">
			<Chartjs
				type="pie"
				className="revenuePieChart"
				id="revenuePieChart"
				{labels}
				{options}
				{scales}
				datasets={chartData}
				{tooltip}
				{height}
			/>
			<div class="chart-content__details">
				{#each dataStats as { icons, labels, revenue }}
					<div class="chart-content__single">
						{#each icons as icon}
							<span class="icon color-{icon}">
								{#if icon === 'facebook'}
									<span class="uil uil-facebook-f" />
								{:else if icon === 'twitter'}
									<span class="uil uil-twitter" />
								{:else if icon === 'google'}
									<img class="svg" alt="" src={'/img/svg/google-customIcon.svg'} />
								{/if}
							</span>
						{/each}
						{#each labels as label}
							<span class="label">{label}</span>
						{/each}
						{#each revenue as data}
							<span class="data">${data}</span>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</CardBody>
</Card>

<style lang="scss">
	:global {
		@import '../../../../..//src/assets/sass/mixins/media-queries';
		.chart-content {
			padding: 25px 25px 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			@include sm {
				flex-wrap: wrap;
			}
			@include MinSm {
				&.revenuePieChart--wrapper {
					.revenuePieChart {
						margin-left: -21px;
					}
					.chart-content__details {
						margin-left: 30px;
					}
				}
			}
			.chart-content__details {
				display: flex;
				align-items: center;
				@include sm {
					flex-wrap: wrap;
					justify-content: center;
				}
			}
			.chart-content__single {
				text-align: center;
				span {
					display: block;
					&.icon {
						width: 80px;
						height: 80px;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 22px 22px 0;
						border-radius: 10px;
						@include xs {
							width: 60px;
							height: 60px;
							margin: 15px 15px 0;
						}
						svg {
							width: 30px;
						}
						span,
						i {
							font-size: 30px;
						}
						&.color-facebook {
							background: rgba(var(--color-primary-rgba), 0.2);
							color: var(--color-primary);
						}
						&.color-google {
							background: #5840ff20;
						}
						&.color-twitter {
							background: #00aaff20;
						}
					}
					&.label {
						font-weight: 500;
						font-size: 15px;
						margin-top: 7px;
						color: var(--color-dark);
					}
					&.data {
						font-weight: 500;
						font-size: 14px;
						margin-top: 2px;
						color: var(--color-gray);
					}
				}
			}
		}
	}
</style>
