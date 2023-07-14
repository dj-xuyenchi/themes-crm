<script>
	import { Col, Card, CardHeader, CardBody, Button } from 'sveltestrap';
	import Slider from '@bulatdashiev/svelte-slider';

	let value = [10, 100];
	let range = [20, 70];
	let range2 = [30, 40];
</script>

<Col lg={6}>
	<Card class="mb-4">
		<CardHeader>
			<h6>Basic Slider</h6>
		</CardHeader>
		<CardBody>
			<div class="slider-one custom-range-slider">
				<span>value: {value[0]}</span>
				<Slider bind:value />
			</div>
		</CardBody>
	</Card>

	<Card class="mb-4">
		<CardHeader>
			<h6>Custom Slot</h6>
		</CardHeader>
		<CardBody>
			<div class="slider-two custom-range-slider">
				<span>Custom slot: left: {range[0]}</span>
				<span>right: {range[1]}</span>
				<div>
					<Slider bind:value={range} range>
						<span slot="left" style="font-size: 20px;">&#128078;</span>
						<span slot="right" style="font-size: 20px;">&#128077;</span>
					</Slider>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>
<Col lg={6}>
	<Card class="mb-4">
		<CardHeader>
			<h6>Custom Thumb</h6>
		</CardHeader>
		<CardBody>
			<div class="slider-three custom-range-slider">
				<span>Thumb order: left: {range2[0]}</span>
				<span>right: {range2[1]}</span>
				<Slider max="200" step="10" bind:value={range2} range order />
			</div>
		</CardBody>
	</Card>

	<Card class="mb-4">
		<CardHeader>
			<h6>Slider in Form</h6>
		</CardHeader>
		<CardBody>
			<div class="slider-four custom-range-slider">
				<span>Using in form</span>
				<form>
					<Slider name={['input-1', 'input-2']} range />
					<Button color="primary" size="sm">Submit</Button>
				</form>
			</div>
		</CardBody>
	</Card>
</Col>

<style>
	div {
		--thumb-bg: transparent;
		--progress-bg: #ff9355;
		--track-bg: #deffd7;
	}
</style>
