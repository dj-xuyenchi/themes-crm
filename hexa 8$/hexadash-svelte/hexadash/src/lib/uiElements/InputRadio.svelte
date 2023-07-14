<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="radio-theme-default custom-radio">
				<input class="radio" type="radio" name="radio-default" value="0" id="radio-1" />
				<label for="radio-1">
					<span class="radio-text">Radio</span>
				</label>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Disabled</h6>
		</CardHeader>
		<CardBody>
			<div class="radio-vertical-list">
				<div class="radio-theme-default custom-radio disabled ">
					<input class="radio" type="radio" name="radio-default" value="0" id="radio-2" />
					<label for="radio-2">
						<span class="radio-text">Disabled</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio disabled ">
					<input class="radio" type="radio" name="radio-default" value="0" id="radio-3" checked />
					<label for="radio-3">
						<span class="radio-text">Disabled</span>
					</label>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Vertical Radio</h6>
		</CardHeader>
		<CardBody>
			<div class="radio-vertical-list">
				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-vertical" value="0" id="radio-vl5" />
					<label for="radio-vl5">
						<span class="radio-text">A</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-vertical" value="0" id="radio-vl6" />
					<label for="radio-vl6">
						<span class="radio-text">B</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-vertical" value="0" id="radio-vl7" />
					<label for="radio-vl7">
						<span class="radio-text">C</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-vertical" value="0" id="radio-vl8" />
					<label for="radio-vl8">
						<span class="radio-text">D</span>
					</label>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Optional Radio</h6>
		</CardHeader>
		<CardBody>
			<div class="radio-horizontal-list d-flex">
				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl1" />
					<label for="radio-hl1">
						<span class="radio-text">Apple</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl2" />
					<label for="radio-hl2">
						<span class="radio-text">Pear</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl3" />
					<label for="radio-hl3">
						<span class="radio-text">Orange</span>
					</label>
				</div>
			</div>
			<div class="radio-horizontal-list d-flex">
				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl4" />
					<label for="radio-hl4">
						<span class="radio-text">Apple</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl5" />
					<label for="radio-hl5">
						<span class="radio-text">Pear</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl6" />
					<label for="radio-hl6">
						<span class="radio-text">Orange</span>
					</label>
				</div>
			</div>
			<div class="radio-horizontal-list d-flex">
				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl7" />
					<label for="radio-hl7">
						<span class="radio-text">Apple</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl8" />
					<label for="radio-hl8">
						<span class="radio-text">Pear</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-optional" value="0" id="radio-hl9" />
					<label for="radio-hl9">
						<span class="radio-text">Orange</span>
					</label>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Horizontal Radio</h6>
		</CardHeader>
		<CardBody>
			<div class="radio-horizontal-list d-flex">
				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-horizontal" value="0" id="radio-vl1" />
					<label for="radio-vl1">
						<span class="radio-text">A</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-horizontal" value="0" id="radio-vl2" />
					<label for="radio-vl2">
						<span class="radio-text">B</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-horizontal" value="0" id="radio-vl3" />
					<label for="radio-vl3">
						<span class="radio-text">C</span>
					</label>
				</div>

				<div class="radio-theme-default custom-radio ">
					<input class="radio" type="radio" name="radio-horizontal" value="0" id="radio-vl4" />
					<label for="radio-vl4">
						<span class="radio-text">D</span>
					</label>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>
