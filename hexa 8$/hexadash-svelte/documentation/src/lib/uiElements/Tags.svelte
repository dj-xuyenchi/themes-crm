<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
</script>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Basic</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-tag-wrap">
				<div class="tag-box">
					<span class="custom-tag tag-light ">Tag 1</span>

					<span><a class="custom-tag tag-light" href={'#'}>Tag 2</a></span>

					<span class="custom-tag tag-light"
						>Tag 3 <a href={'#'} class="tag-closable"><i class="la la-times" /></a></span
					>

					<span class="custom-tag tag-light"
						>Prevent Default <a href={'#'} class="tag-closable"><i class="la la-times" /></a></span
					>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Color Tag</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-tag-wrap mb-25">
				<h6>Preset:</h6>
				<div class="tag-box">
					<span class="custom-tag tag-primary tag-transparented">Primary</span>

					<span class="custom-tag tag-secondary tag-transparented">Secondary</span>

					<span class="custom-tag tag-success tag-transparented">Success</span>

					<span class="custom-tag tag-warning tag-transparented">Warning</span>

					<span class="custom-tag tag-info tag-transparented">Info</span>

					<span class="custom-tag tag-danger tag-transparented">Danger</span>
				</div>
			</div>
			<div class="custom-tag-wrap">
				<h6>Custom:</h6>
				<div class="tag-box">
					<span class="custom-tag tag-primary ">#f50</span>

					<span class="custom-tag tag-secondary ">#2db7f5</span>

					<span class="custom-tag tag-success ">#87d068</span>

					<span class="custom-tag tag-warning ">#108ee9</span>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Dynamic</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-tag-wrap">
				<div class="tag-box">
					<span class="custom-tag tag-light ">Tag 1</span>

					<span><a class="custom-tag tag-light" href={'#'}>Tag 2</a></span>

					<span class="custom-tag tag-light"
						>Tag 3 <a href={'#'} class="tag-closable"><i class="la la-times" /></a></span
					>

					<span class="custom-tag tag-light"
						>Prevent Default <a href={'#'} class="tag-closable"><i class="la la-times" /></a></span
					>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>
