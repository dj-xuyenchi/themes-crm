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
				<div class="custom-upload">
					<div class="custom-upload__button">
						<a href={'#'} class="btn btn-lg btn-outline-light btn-upload">
							<img class="svg" alt="" src={'/img/svg/upload.svg'} />
							Click to Upload
						</a>
						<input type="file" name="upload-1" class="upload-one" id="upload-1" />
					</div>
					<div class="custom-upload__file">
						<ul />
					</div>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Avatar</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-tag-wrap">
				<div class="custom-upload">
					<div class="custom-upload-avatar">
						<img class="avatrSrc" src="/img/upload.png" alt="Avatar Upload" />
					</div>
					<div class="avatar-up">
						<input type="file" name="upload-avatar-input" class="upload-avatar-input" />
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Complete Control</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-tag-wrap">
				<div class="custom-upload">
					<div class="custom-upload__button">
						<a href={'#'} class="btn btn-lg btn-outline-light btn-upload">
							<img class="svg" alt="" src={'/img/svg/upload.svg'} />
							Upload
						</a>
						<input type="file" name="upload-2" class="upload-one" id="upload-2" />
					</div>
					<div class="custom-upload__file">
						<ul>
							<li>
								<a href={'#'} class="file-name"
									><i class="las la-paperclip" /> <span class="name-text">xxx.png<span /></span></a
								>
								<a href={'#'} class="btn-delete"><i class="la la-trash" /></a>
							</li>

							<li>
								<a href={'#'} class="file-name"
									><i class="las la-paperclip" /> <span class="name-text">yyy.jpg<span /></span></a
								>
								<a href={'#'} class="btn-delete"><i class="la la-trash" /></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Upload Default</h6>
		</CardHeader>
		<CardBody>
			<div class="custom-tag-wrap">
				<div class="custom-upload">
					<div class="custom-upload__button">
						<a href={'#'} class="btn btn-lg btn-outline-light btn-upload">
							<img class="svg" alt="" src={'/img/svg/upload.svg'} />
							Upload
						</a>
						<input type="file" name="upload-3" class="upload-one" id="upload-3" />
					</div>
					<div class="custom-upload__file">
						<ul>
							<li>
								<a href={'#'} class="file-name"
									><i class="las la-paperclip" /> <span class="name-text">xxx.png<span /></span></a
								>
								<a href={'#'} class="btn-delete"><i class="la la-trash" /></a>
							</li>

							<li>
								<a href={'#'} class="file-name"
									><i class="las la-paperclip" /> <span class="name-text">yyy.jpg<span /></span></a
								>
								<a href={'#'} class="btn-delete"><i class="la la-trash" /></a>
							</li>

							<li class="danger">
								<a href={'#'} class="file-name"
									><i class="las la-paperclip" /> <span class="name-text">zzz.jpg<span /></span></a
								>
								<a href={'#'} class="btn-delete"><i class="la la-trash" /></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>
