<script>
	import { onMount } from 'svelte';
	import { Card, CardHeader, CardBody } from 'sveltestrap';
	import CardExtra from '$lib/components/cards/CardExtra.svelte';
	import teamList from '@data/teamList.json';

	const data = teamList;
	/* onMount(() => {
		data;
	}); */

	/* const handleActive = (e) => {
		e.currentTarget.classList.toggle('active');
	}; */
</script>

<Card class="border-0 teams h-100">
	<CardHeader class="border-0">
		<h6>Team Members</h6>
		<CardExtra />
	</CardHeader>
	<!-- ends: .card-header -->
	<CardBody>
		<div class="team-members">
			<ul>
				{#each data as team}
					<li>
						<div class="team-members__left">
							<img src="/img/team/{team.avatar}" alt="" />
							<div class="team-members__title">
								<h6>{team.title}</h6>
							</div>
						</div>
						<div class="team-members__middle">
							<div class="team-members__title--online d-flex align-items-center">
								<span class="badge-dot dot-success" />Online
							</div>
						</div>
						<div class="team-member__right">
							<div class="team-member__add">
								<button type="button">add</button>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</CardBody>
	<!-- ends: .card-body -->
</Card>

<style lang="scss">
	:global{
		.teams{
			.card-body{
				padding: 6px 25px 40px 25px;
			}
		}
	};
	
	.team-members {

		ul {
			padding: 0;
			margin: 0;
			li {
				display: flex;
				align-items: center;
				justify-content: space-between;
				&:not(:last-child) {
					margin-bottom: 20px;
				}
				.team-members__left {
					flex: 8;
					display: flex;
					align-items: center;
					img {
						width: 34px;
						height: 34px;
						border-radius: 20px;
						+ .team-members__title {
							margin-left: 12px;
						}
					}
					.team-members__title {
						h6 {
							font-size: 15px;
							font-weight: 500;
							color: var(--color-gray);
						}
						.team-members__title--online {
							display: flex;
							align-items: center;
							font-size: 12px;
							font-weight: 400;
							color: var(--color-light);
							span {
								margin-right: 5px;
							}
						}
					}
				}
				.team-member__right {
					flex: 1;
					.team-member__add {
						button {
							background-color: rgba(var(--color-primary-rgba), 0.1);
							border-radius: 3px;
							color: var(--color-primary);
							font-size: 13px;
							font-weight: 600;
							height: 32px;
							display: flex;
							align-items: center;
							justify-content: center;
							box-shadow: none;
							outline: none;
							border: none;
							padding: 0 12px;
							text-transform: capitalize;
							transition: 0.3s ease-in-out;
							&:hover {
								background-color: var(--color-primary);
								color: white;
							}
						}
					}
				}

				.team-members__middle{
					flex: 5;
					.team-members__title--online{
						font-size: 15px;
						font-weight: 400;
						color: var(--color-light);
						.badge-dot{
							margin-right: 6px;
						}
					}
				}
			}
		}
	}
</style>
