<script>
	import { Card, CardHeader, CardBody, Button } from 'sveltestrap';
</script>

<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Basic</h6>
	</CardHeader>
	<CardBody>
		<div class="page-title-block">
			<div class="page-title-wrap wrapper-bordered">
				<div class="page-title d-flex justify-content-between">
					<div class="page-title__left">
						<a href={'#'}><i class="las la-arrow-left" /></a>
						<span class="title-text">Title</span>
						<span class="sub-title">This is a subtitle</span>
					</div>
				</div>
			</div>
		</div>
	</CardBody>
</Card>

<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>White background mode</h6>
	</CardHeader>
	<CardBody>
		<div class="page-title-block bg-lighter bg-container">
			<div class="page-title-bg">
				<div class="page-title-wrap ">
					<div class="page-title d-flex justify-content-between">
						<div class="page-title__left">
							<a href={'#'}><i class="las la-arrow-left" /></a>
							<span class="title-text">Title</span>
							<span class="sub-title">This is a subtitle</span>
						</div>

						<div class="page-title__right">
							<div class="page-top-action d-flex">
								<Button color="light" outline size="xs">Operation</Button>
								<Button color="light" outline size="xs">Operation</Button>
								<Button color="primary" size="xs">Primary</Button>
							</div>
						</div>
					</div>
				</div>

				<div class="page-info d-flex">
					<div class="page-info__item">
						<div class="page-info__single">
							<span class="info-title">Created :</span>
							<span class="info-text">David Miller</span>
						</div>
						<div class="page-info__single">
							<span class="info-title">Effective Time :</span>
							<span class="info-text">2017-10-10</span>
						</div>
					</div>
					<div class="page-info__item">
						<div class="page-info__single">
							<span class="info-title">Association :</span>
							<span class="info-text color-primary">421421</span>
						</div>
						<div class="page-info__single">
							<span class="info-title">Remarks :</span>
							<span class="info-list">
								<span>Gonghu Road,</span>
								<span>Xihu District, </span>
								<span> Hangzhou,</span>
								<span>Zhejiang,</span>
								<span>China</span>
							</span>
						</div>
					</div>
					<div class="page-info__item">
						<div class="page-info__single">
							<span class="info-title">Creation Time :</span>
							<span class="info-text">2017-10-10</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</CardBody>
</Card>

<Card class="card-default card-md mb-4">
	<CardHeader class="py-20">
		<h6>Use with breadcrumbs</h6>
	</CardHeader>
	<CardBody>
		<div class="page-title-block">
			<div class="page-title-wrap wrapper-bordered">
				<ul class="custom-breadcrumb nav">
					<li class="custom-breadcrumb__item">
						<a href={'#'}> First Level Menu </a>
						<span class="breadcrumb__seperator">
							<span class="la la-slash" />
						</span>
					</li>
					<li class="custom-breadcrumb__item">
						<a href={'#'}>Second Level Menu</a>
						<span class="breadcrumb__seperator">
							<span class="la la-slash" />
						</span>
					</li>

					<li class="custom-breadcrumb__item">
						<span>Third Level Menu</span>
					</li>
				</ul>

				<div class="page-title d-flex justify-content-between">
					<div class="page-title__left">
						<a href={'#'}><i class="las la-arrow-left" /></a>
						<span class="title-text">Title</span>
						<span class="sub-title">This is a subtitle</span>
					</div>
				</div>
			</div>
		</div>
	</CardBody>
</Card>

<style lang="scss">
</style>
