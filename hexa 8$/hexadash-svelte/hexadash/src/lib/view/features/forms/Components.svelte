<script>
	import { onMount } from 'svelte';
	import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label } from 'sveltestrap';

	import DatePicker from '@beyonk/svelte-datepicker/src/components/DatePicker.svelte';
	import Editor from 'cl-editor/src/Editor.svelte';
	import Slider from '@bulatdashiev/svelte-slider';

	onMount(() => {
		const closableTags = document.querySelectorAll('.tag-close');
		closableTags.forEach((elm) => {
			elm.addEventListener('click', () => {
				elm.closest('.tag-closable').remove();
			});
		});
	});
	let value = [10, 100];
	let range = [20, 70];
</script>

<div class="form-element">
	<Row>
		<Col lg={6}>
			<Row>
				<Col lg={12}>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Input Groups</h6>
						</CardHeader>
						<CardBody class="py-md-30">
							<Form>
								<Row class="mb-n25">
									<Col md={6} class="mb-25">
										<div class="with-icon">
											<span class="uil uil-user color-light" />
											<Input
												type="text"
												class="form-control  ih-medium ip-lightradius-xs b-light"
												id="inputNameIcon1"
												placeholder="Duran Clayton"
											/>
										</div>
									</Col>
									<Col md={6} class="mb-25">
										<div class="with-icon">
											<span class="uil uil-envelope color-light" />
											<Input
												type="text"
												class="form-control  ih-medium ip-lightradius-xs b-light"
												id="inputNameIcon2"
												placeholder="Email"
											/>
										</div>
									</Col>
									<Col md={6} class="mb-25">
										<div class="with-icon">
											<span class="uil uil-map-marker color-light" />
											<Input
												type="text"
												class="form-control  ih-medium ip-lightradius-xs b-light"
												id="inputNameIcon3"
												placeholder="Location"
											/>
										</div>
									</Col>
									<Col md={6} class="mb-25">
										<div class="with-icon">
											<span class="uil uil-lock color-light" />
											<Input
												type="text"
												class="form-control  ih-medium ip-lightradius-xs b-light"
												id="inputNameIcon4"
												placeholder="Password"
											/>
										</div>
									</Col>
									<Col md={6} class="mb-25">
										<div class="with-icon">
											<span class="uil uil-credit-card color-light" />
											<Input
												type="text"
												class="form-control  ih-medium ip-lightradius-xs b-light"
												id="inputNameIcon5"
												placeholder="Payment Method"
											/>
										</div>
									</Col>
									<Col md={6} class="mb-25">
										<div class="with-icon">
											<span class="uil uil-phone color-light" />
											<Input
												type="text"
												class="form-control  ih-medium ip-lightradius-xs b-light"
												id="inputNameIcon6"
												placeholder="Phone Number"
											/>
										</div>
									</Col>
								</Row>
							</Form>
						</CardBody>
					</Card>
				</Col>
				<Col lg={12}>
					<Card class="card-horizontal card-default card-md mb-4">
						<CardHeader>
							<h6>HTML5 Inputs</h6>
						</CardHeader>
						<CardBody class="py-md-30">
							<div class="mb-25 select-style2">
								<div class="dm-select">
									<select name="select-alerts2" id="select-alerts2" class="form-control ih-medium">
										<option value="01">Option 1</option>
										<option value="02">Option 2</option>
										<option value="03">Option 3</option>
										<option value="04">Option 4</option>
										<option value="05">Option 5</option>
									</select>
								</div>
							</div>
							<div class="select-style2">
								<div class="dm-select">
									<select name="select-option2" id="select-option2" class="form-control ih-medium">
										<option value="01">Option 1</option>
										<option value="02">Option 2</option>
										<option value="03">Option 3</option>
										<option value="04">Option 4</option>
										<option value="05">Option 5</option>
									</select>
								</div>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col lg={12}>
					<Card class="card-horizontal card-default card-md mb-4">
						<CardHeader>
							<h6>Datepicker</h6>
						</CardHeader>
						<CardBody class="py-md-30">
							<Row>
								<Col md={6} class="mb-15">
									<div class="custom-date-picker">
										<div class="form-group mb-0 form-group-calender">
											<div class="position-relative">
												<DatePicker format="MMMM DD, YYYY" />
												<a href={'#'}>
													<img class="svg" alt="" src={'/img/svg/calendar.svg'} />
												</a>
											</div>
										</div>
									</div>
								</Col>
								<Col md={12}>
									<div class="custom-date-ranger position-relative d-flex align-items-center">
										<div class="form-group mb-0">
											<DatePicker format="MMMM DD, YYYY" />
										</div>
										<span class="divider">-</span>
										<div class="form-group mb-0">
											<DatePicker format="MMMM DD, YYYY" />
										</div>
										<a href={'#'}>
											<img class="svg" alt="" src={'/img/svg/calendar.svg'} />
										</a>
									</div>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</Col>
				<Col lg={12}>
					<Card class="card-horizontal card-default card-md mb-4">
						<CardHeader>
							<h6>Text Editor</h6>
						</CardHeader>
						<CardBody class="py-md-30">
							<FormGroup class="formElement-editor mb-0">
								<Editor />
							</FormGroup>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Col>
		<Col lg={6}>
			<Row>
				<Col lg={12}>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Tags</h6>
						</CardHeader>
						<CardBody class="py-md-30">
							<div class="custom-tag-wrap">
								<div class="tag-box">
									<span class="custom-tag tag-light">Tag 1</span>

									<span>
										<a class="custom-tag tag-light" href={'#'}>Tag 2</a>
									</span>

									<span class="custom-tag tag-closable tag-light"
										>Tag 3 <a href={'#'} class="tag-close"><i class="uil uil-times" /></a></span
									>

									<span class="custom-tag tag-light tag-closable"
										>Prevent Default <a href={'#'} class="tag-close"><i class="uil uil-times" /></a
										></span
									>
								</div>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col lg={12}>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Toggle buttons</h6>
						</CardHeader>
						<CardBody class="py-md-30">
							<Input type="switch" id="switch-s1" checked />
						</CardBody>
					</Card>
				</Col>
				<Col lg={12}>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Sliders</h6>
						</CardHeader>
						<CardBody class="py-md-30">
							<div class="slider-one custom-range-slider">
								<span>value: {value[0]}</span>
								<Slider bind:value />
							</div>
							<div class="slider-three custom-range-slider">
								<span>Thumb order: left: {range[0]}</span>
								<span>right: {range[1]}</span>
								<Slider max="200" step="10" bind:value={range} range order />
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col lg={12}>
					<Card class="card-default card-md mb-4">
						<CardHeader>
							<h6>Dropzone</h6>
						</CardHeader>
						<CardBody class="py-md-30">
							<div class="custom-upload mb-25">
								<div class="custom-upload-avatar media-import mb-25 dropzone-lg-s">
									<p class="color-light mt-0 fs-15">Drop files here to upload</p>
								</div>
								<div class="avatar-up">
									<Input type="file" name="upload-avatar-input" class="upload-avatar-input" />
								</div>
							</div>
							<div class="custom-upload">
								<div class="custom-upload-avatar media-import dropzone-md-s">
									<p class="color-light mt-0 fs-14">Drop files here to upload</p>
								</div>
								<div class="avatar-up">
									<Input type="file" name="upload-avatar-input" class="upload-avatar-input" />
								</div>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Col>
	</Row>
</div>
