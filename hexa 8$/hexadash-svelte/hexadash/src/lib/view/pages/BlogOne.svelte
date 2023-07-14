<script>
	import { Col, Pagination, PaginationItem, PaginationLink } from 'sveltestrap';

	import blogData from '@data/blogData.json';
</script>

{#each blogData as data}
	<Col xl={4} sm={6} class="mb-25">
		<div class="blog-card">
			<div class="blog-card__thumbnail">
				<a href={'#'}>
					<img src="/img/{data.img}" alt="" />
				</a>
			</div>
			<div class="blog-card__details">
				<div class="blog-card__content">
					<div class="blog-card__title--top">{data.date}</div>
					<h4 class="blog-card__title">
						<a href={'#'} class="entry-title" rel="bookmark">{data.title}</a>
					</h4>
					<p>
						{data.excerpt}
					</p>
				</div>
				<div class="blog-card__meta">
					<div class="blog-card__meta-profile">
						<img src="/img/alex-suprun.png" alt="" />
						<span>Machel Bold</span>
					</div>
					<div class="blog-card__meta-count">
						<ul>
							<li>
								<div class="blog-card__meta-reaction">
									<img class="svg" alt="" src={'/img/svg/heart.svg'} />
									<span class="blog-card__meta-reaction-like">15 K</span>
								</div>
							</li>
							<li>
								<div class="blog-card__meta-doc-wrapper">
									<img class="svg" alt="" src={'/img/svg/file-text.svg'} />
									<span class="blog-card__meta-doc">75</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</Col>
{/each}
<Col lg={12}>
	<Pagination ariaLabel="Page navigation example">
		<PaginationItem disabled>
			<PaginationLink first href="#" />
		</PaginationItem>
		<PaginationItem disabled>
			<PaginationLink previous href="#" />
		</PaginationItem>
		<PaginationItem active>
			<PaginationLink href="#">1</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink href="#">2</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink href="#">3</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink href="#">4</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink href="#">5</PaginationLink>
		</PaginationItem>
		<PaginationItem>
			<PaginationLink next href="#" />
		</PaginationItem>
		<PaginationItem>
			<PaginationLink last href="#" />
		</PaginationItem>
	</Pagination>
</Col>
