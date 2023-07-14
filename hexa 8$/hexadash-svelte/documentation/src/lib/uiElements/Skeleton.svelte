<script>
	import { Card, CardHeader, CardBody } from 'sveltestrap';
</script>

<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Skeleton</h6>
	</CardHeader>
	<CardBody>
		<div class="custom-skeleton">
			<div class="h6 custom-skeleton__title shimmer-effect" />
			<ul class="custom-skeleton__list">
				<li class="shimmer-effect" />
				<li class="shimmer-effect" />
				<li class="shimmer-effect" />
			</ul>
		</div>
	</CardBody>
</Card>
