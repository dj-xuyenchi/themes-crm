<script>
	import { Col, Card, CardHeader, CardBody } from 'sveltestrap';
	import InlineSVG from 'svelte-inline-svg';
	const commentSingle = {
		authorImg: '1.jpg',
		authorName: 'David Benner',
		textContent:
			'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
	};
	const commentData = [
		{
			authorImg: '1.jpg',
			authorName: 'David Benner',
			textContent:
				'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
		},
		{
			authorImg: '2.jpg',
			authorName: 'Erik Thompson',
			textContent:
				'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
		}
	];
</script>

<Col lg={12}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Basic comment</h6>
		</CardHeader>
		<CardBody class="pb-10">
			<div class="custom-comment-box media">
				<div class="custom-comment-box__author">
					<figure>
						<img
							src="/img/author/{commentSingle.authorImg}"
							class="bg-opacity-primary d-flex"
							alt="Admin Autor"
						/>
					</figure>
				</div>

				<div class="custom-comment-box__content media-body">
					<div class="comment-content-inner cci">
						<span class="cci__author-info">{commentSingle.authorName}</span>
						<p class="cci__comment-text">
							{commentSingle.textContent}
						</p>
						<div class="cci__comment-actions">
							<a href={'#'} class="btn-like">
								<InlineSVG src={'/img/svg/thumbs-up.svg'} />
								<span class="line-count">0</span>
							</a>
							<a href={'#'} class="btn-dislike">
								<InlineSVG src={'/img/svg/thumbs-down.svg'} />
								<span class="line-count">0</span>
							</a>

							<a href={'#'} class="btn-reply">
								<span>Reply</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Usage with list</h6>
		</CardHeader>
		<div class="card-body">
			<div class="comment-list">
				<div class="comment-list__title">
					<h6>Reply To</h6>
				</div>
				<ul class="comment-list__content">
					{#each commentData as data}
						<li class="mb-20">
							<div class="custom-comment-box media">
								<div class="custom-comment-box__author">
									<figure>
										<img
											src="/img/author/{data.authorImg}"
											class="bg-opacity-primary d-flex"
											alt="Admin Autor"
										/>
									</figure>
								</div>

								<div class="custom-comment-box__content media-body">
									<div class="comment-content-inner cci">
										<span class="cci__author-info">{data.authorName}</span>
										<p class="cci__comment-text">
											{data.textContent}
										</p>
										<div class="cci__comment-actions">
											<a href={'#'} class="btn-like">
												<InlineSVG src={'/img/svg/thumbs-up.svg'} />
												<span class="line-count">0</span>
											</a>
											<a href={'#'} class="btn-dislike">
												<InlineSVG src={'/img/svg/thumbs-down.svg'} />
												<span class="line-count">0</span>
											</a>

											<a href={'#'} class="btn-reply">
												<span>Reply</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Nested comments</h6>
		</CardHeader>
		<div class="card-body">
			<div class="comment-list">
				<div class="comment-list__title">
					<h6>Reply To</h6>
				</div>
				<ul class="comment-list__ul">
					<li class="mb-20">
						<div class="custom-comment-box media">
							<div class="custom-comment-box__author">
								<figure>
									<img
										src="/img/author/{commentSingle.authorImg}"
										class="bg-opacity-primary d-flex"
										alt="Admin Autor"
									/>
								</figure>
							</div>
							<div class="custom-comment-box__content media-body">
								<div class="comment-content-inner cci">
									<span class="cci__author-info">{commentSingle.authorName}</span>
									<p class="cci__comment-text">
										{commentSingle.textContent}
									</p>
									<div class="cci__comment-actions">
										<a href={'#'} class="btn-reply">
											<span>Reply</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="custom-comment-box media">
							<div class="custom-comment-box__author">
								<figure>
									<img
										src="/img/author/{commentSingle.authorImg}"
										class="bg-opacity-primary d-flex"
										alt="Admin Autor"
									/>
								</figure>
							</div>
							<div class="custom-comment-box__content media-body">
								<div class="comment-content-inner cci">
									<span class="cci__author-info">{commentSingle.authorName}</span>
									<p class="cci__comment-text">
										{commentSingle.textContent}
									</p>
									<div class="cci__comment-actions">
										<a href={'#'} class="btn-reply">
											<span>Reply</span>
										</a>
									</div>
								</div>
							</div>
						</div>

						<ul class="comment-list__ul">
							<li class="mt-4">
								<div class="custom-comment-box media">
									<div class="custom-comment-box__author">
										<figure>
											<img
												src="/img/author/{commentSingle.authorImg}"
												class="bg-opacity-primary d-flex"
												alt="Admin Autor"
											/>
										</figure>
									</div>
									<div class="custom-comment-box__content media-body">
										<div class="comment-content-inner cci">
											<span class="cci__author-info">{commentSingle.authorName}</span>
											<p class="cci__comment-text">
												{commentSingle.textContent}
											</p>
											<div class="cci__comment-actions">
												<a href={'#'} class="btn-reply">
													<span>Reply</span>
												</a>
											</div>
										</div>
									</div>
								</div>

								<ul class="comment-list__ul">
									{#each commentData as data}
										<li class="mb-20  mt-4">
											<div class="custom-comment-box media">
												<div class="custom-comment-box__author">
													<figure>
														<img
															src="/img/author/{data.authorImg}"
															class="bg-opacity-primary d-flex"
															alt="Admin Autor"
														/>
													</figure>
												</div>

												<div class="custom-comment-box__content media-body">
													<div class="comment-content-inner cci">
														<span class="cci__author-info">{data.authorName}</span>
														<p class="cci__comment-text">
															{data.textContent}
														</p>
														<div class="cci__comment-actions">
															<a href={'#'} class="btn-reply">
																<span>Reply</span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</li>
									{/each}
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</Card>
</Col>

<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader class="py-20">
			<h6>Comment Reply</h6>
		</CardHeader>
		<CardBody class="py-25">
			<div class="reply-editor media">
				<div class="reply-editor__author">
					<img
						src="/img/author/1.jpg"
						class="bg-opacity-primary d-flex"
						alt="Reply Editor Author"
					/>
				</div>

				<div class="reply-editor__form media-body">
					<form action="$">
						<div class="form-group">
							<textarea name="reply-text" class="form-control mb-4" />
							<button class="btn btn-primary btn-lg btn-squared btn-shadow-primary fw-400"
								>Add Comment</button
							>
						</div>
					</form>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>
