<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	let value;

	const options = {
		enableTime: true,
		noCalendar: true,
		dateFormat: 'H:i'
	};
</script>

<Col lg={6}>
	<Card>
		<CardHeader>
			<h6>Time Picker</h6>
		</CardHeader>
		<CardBody>
			<div class="time-picker-wrap">
				<Flatpickr
					{options}
					bind:value
					name="time"
					class="form-control form-control-lg bg-transparent"
				/>
				<span class="uil uil-clock" />
			</div>
		</CardBody>
	</Card>
</Col>
