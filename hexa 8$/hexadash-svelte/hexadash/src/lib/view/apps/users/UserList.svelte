<script>
	import { Col, Button } from 'sveltestrap';
	import teamData from '@data/teamData.json';
</script>

{#each teamData as item}
	<Col md={6} class="mb-25">
		<div class="media py-30 ps-sm-30 ps-20 pe-20 bg-white radius-xl users-list">
			<img
				class="me-20 rounded-circle wh-80 bg-opacity-primary"
				src="/img/{item.img}"
				alt="GenericImage"
			/>
			<div class="media-body d-xl-flex users-list-body">
				<div class="flex-1 pe-xl-30 users-list-body__title">
					<h6 class="mt-0 fw-500">{item.name}</h6>
					<span>{item.designation}</span>
					<p class="mb-0">
						Lorem ipsum dolor amet, consetetur sadipscing elitr sed diam nonumy eirmod.
					</p>
					<div class="users-list-body__bottom">
						<span><span class="fw-600">$25/</span>hr</span>
						<span class="ms-15"><span class="fw-600">$88K </span>earned</span>
					</div>
				</div>
				<div class="users-list__button mt-xl-0 mt-15">
					<Button
						color="primary"
						size="default"
						class="btn-squared text-capitalize px-20 mb-10 global-shadow"
						>view profile
					</Button>

					<Button
						color="light"
						outline
						class="border text-capitalize px-25 color-gray transparent shadow2 follow my-xl-0 radius-md"
					>
						message</Button
					>
				</div>
			</div>
		</div>
	</Col>
{/each}
