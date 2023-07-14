<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import StarRatting from '@ernane/svelte-star-rating';
	const config = {
		readOnly: false,
		countStars: 5,
		range: { min: 0, max: 5, step: 0.5 },
		score: 2,
		showScore: false,
		starConfig: {
			size: 12,
			fillColor: 'var(--color-warning)',
			strokeColor: 'var(--color-warning)'
		}
	};
	const halfStar = {
		readOnly: false,
		countStars: 5,
		range: { min: 0, max: 5, step: 0.5 },
		score: 2.5,
		showScore: false,
		starConfig: {
			size: 12,
			fillColor: 'var(--color-warning)',
			strokeColor: 'var(--color-warning)'
		}
	};
	const readOnly = {
		readOnly: true,
		countStars: 5,
		range: { min: 0, max: 5, step: 0.5 },
		score: 3,
		showScore: false,
		starConfig: {
			size: 12,
			fillColor: 'var(--color-warning)',
			strokeColor: 'var(--color-warning)'
		}
	};
	const rater = {
		readOnly: false,
		countStars: 5,
		range: { min: 0, max: 5, step: 0.5 },
		score: 3,
		showScore: true,
		starConfig: {
			size: 12,
			fillColor: 'var(--color-warning)',
			strokeColor: 'var(--color-warning)'
		}
	};
	$: raterScore = rater.score;
</script>

<Col lg={6}>
	<Card class="mb-4">
		<CardHeader>
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="star-rating-wrapper">
				<StarRatting {config} />
			</div>
		</CardBody>
	</Card>
	<Card class="mb-4">
		<CardHeader>
			<h6>Half Star</h6>
		</CardHeader>
		<CardBody>
			<div class="star-rating-wrapper">
				<StarRatting config={halfStar} />
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="mb-4">
		<CardHeader>
			<h6>Read Only</h6>
		</CardHeader>
		<CardBody>
			<div class="star-rating-wrapper">
				<StarRatting config={readOnly} />
			</div>
		</CardBody>
	</Card>
	<Card class="mb-4">
		<CardHeader>
			<h6>Rater</h6>
		</CardHeader>
		<CardBody>
			<div class="star-rating-wrapper">
				<StarRatting config={rater} />
			</div>
		</CardBody>
	</Card>
</Col>
