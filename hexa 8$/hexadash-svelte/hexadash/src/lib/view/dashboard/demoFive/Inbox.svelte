<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '@components/cards/CardExtra.svelte';

	const inboxData = [
		{
			id: 1,
			user: {
				fName: 'Shane',
				lName: 'Watson',
				msg: 'We are looking a full stack developer',
				img: '/img/inbox-1.png'
			},
			time: '9:00 AM'
		},
		{
			id: 2,
			user: {
				fName: 'Chris',
				lName: 'Dohan',
				msg: 'Well done, great work ',
				img: '/img/inbox-2.png'
			},
			time: '9:30 AM'
		},
		{
			id: 3,
			user: {
				fName: 'Robert',
				lName: 'Clinton',
				msg: 'Tonight we are going to submit new...',
				img: '/img/inbox-3.png'
			},
			time: '9:30 AM'
		},
		{
			id: 4,
			user: {
				fName: 'Daniel',
				lName: 'White',
				msg: 'Please send me final file',
				img: '/img/inbox-1.png'
			},
			time: '9:30 AM'
		},
		{
			id: 5,
			user: {
				fName: 'Black',
				lName: 'Smith',
				msg: 'Good luck Tom',
				img: '/img/inbox-2.png'
			},
			time: '9:30 AM'
		}
	];
</script>

<Card class="border-0 card-inbox">
	<CardHeader class="border-0">
		<h6>Inbox</h6>
		<CardExtra />
	</CardHeader>
	<CardBody class="pb-40 pt-0">
		<div class="card-inbox-members">
			<ul>
				{#each inboxData as item}
					<li>
						<div class="card-inbox-members__left">
							<img class="rounded-circle" src={item.user.img} alt="" />
							<div class="card-inbox-members__title">
								<h6>{item.user.fName} {item.user.lName}</h6>
								<div class="card-inbox-members__title--online">
									{item.user.msg}
								</div>
							</div>
						</div>
						<div class="card-inbox-member__right">
							<div class="card-inbox-member__time">
								<span>{item.time}</span>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</CardBody>
</Card>

<style lang="scss">
	/* inbox */
	@import '../../../../assets/sass/mixins/media-queries';
	.card-inbox {
		.card-inbox-members {
			ul {
				li {
					display: flex;
					align-items: center;
					justify-content: space-between;

					&:not(:last-child) {
						margin-bottom: 15px;
					}

					.card-inbox-members__left {
						display: flex;
						align-items: center;

						img {
							margin-right: 12px;
							width: 34px;
							height: 34px;
						}

						.card-inbox-members__title {
							h6 {
								font-size: 15px;
								font-weight: 500;
								color: var(--color-gray);
							}

							.card-inbox-members__title--online {
								font-size: 14px;
								font-weight: 400;
								color: var(--color-light);
								margin-top: 2px;
							}
						}
					}

					.card-inbox-member__time {
						span {
							font-size: 14px;
							font-weight: 400;
							color: var(--color-light);
							@include ssm {
								font-size: 12px;
							}
						}
					}
				}
			}
		}
	}
</style>
