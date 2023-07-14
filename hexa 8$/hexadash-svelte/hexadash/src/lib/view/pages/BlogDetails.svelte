<script>
	import { onMount } from 'svelte';
	import { Row, Col } from 'sveltestrap';

	onMount(() => {
		window.addEventListener('scroll', function (e) {
			let blogContainer = document.querySelector('.blog-details'),
				shareGroup = document.querySelector('.blog-share-top');
			if (blogContainer != null && shareGroup != null) {
				window.pageYOffset <= blogContainer.offsetTop
					? shareGroup.classList.remove('show')
					: window.pageYOffset >= blogContainer.offsetTop &&
					  window.pageYOffset <= blogContainer.offsetTop + blogContainer.clientHeight - 700
					? shareGroup.classList.add('show')
					: shareGroup.classList.remove('show');
			}
		});
	});
</script>

<Row class="justify-content-center">
	<Col xxl={8} lg={10}>
		<div class="blog-details-thumbnail">
			<img src="/img/blog-details.png" alt="" />
		</div>
		<article class="blog-details">
			<div class="blog-details-content">
				<h1 class="main-title mb-30">Know More About Time Management System on your Daily Works</h1>
				<ul class="blog-details-meta">
					<li class="blog-author">
						<a href={'#'}>
							<img src="/img/tm4.png" alt="" />
						</a>
						<a href={'#'}>
							<span>Rabbi Islam Rony</span>
						</a>
					</li>
					<li class="author-name">
						<a href={'#'} rel="bookmark">
							<time class="entry-date published updated" datetime="2022-01-25T10:55:00+06:00"
								>January 25, 2022</time
							>
						</a>
					</li>
					<li class="blog-category">
						<a href={'#'} rel="category tag">Development</a>
					</li>
					<li class="blog-read-time">8 mins read</li>
				</ul>
				<div class="blog-body">
					<p class="mb-20">
						”Time management” is the process of organizing and planning how to divide your time
						between specific activities. Good time management enables you to work smarter – not
						harder – so that you get more done in less time, even when time is tight and pressures
						are high. Failing to manage your time damages your effectiveness and causes stress.
					</p>

					<p class="mb-50">
						”Time management” is the process of organizing and planning how to divide your time
						between specific activities. Good time management enables you to work smarter – not
						harder – so that you get more done enables you to work smarter.
					</p>

					<h1 class="mb-20">What is Time Management?</h1>
					<p class="mb-30">
						”Time management” is the process of organizing and planning how to divide your time
						between specific activities. Good time management enables you to work smarter – not
						harder – so that you get more done in less time, even when time is tight and pressures
						are high. Failing to manage your time damages your effectiveness and causes stress.
					</p>
					<div class="blog-block-image mb-30 pb-10">
						<figure>
							<img class="img-fluid" src="/img/blog-details.png" alt="blog_details" />
						</figure>
					</div>
					<h2 class="mb-20">How Can you Use your Time Properly?</h2>
					<p class="mb-30">
						”Time management” is the process of organizing and planning how to divide your time
						between specific activities. Good time management enables you to work smarter – not
						harder – so that you get more done in less time, even when time is tight and pressures
						are high
					</p>
					<blockquote class="blog-block-quote">
						<div class="blog-block-quote__wrapper">
							<div class="top-icon">
								<img class="svg" alt="" src={'/img/svg/topSemicolon.svg'} />
							</div>
							<p>
								Investig ationes demons trave runt lectores legere liusry quod was legunt saepius
								claritas Investig tones haretra dui, nec tincidunt ante mauris eu diam. Phasellus
								verra nisl vitae cursus aei uismod supen dise saepius claritas.
							</p>
						</div>
						<cite>Daniel Brownspan,<span>Founder of Company</span></cite>
					</blockquote>
					<h3 class="mb-20">Value of Time Management</h3>
					<p class="mb-25">
						Time management” is the process of organizing and planning how to divide your time
						between specific activities. Good time management enables you to work smarter.
					</p>
					<ul class="mb-50">
						<li>
							<strong>Trim transparent pixels on exports:</strong> Usability design is to improve the
							usability of a product, which is an important.
						</li>
						<li>
							<strong>Crash and bug fixes:</strong> Usability design is to improve the usability of a
							product, which is an important part to guide.
						</li>
					</ul>
					<h4 class="mb-20">How Can you Benefit from Time Management System?</h4>
					<p class="mb-25">
						”Time management” is the process of organizing and planning how to divide your time
						between specific activities. Good time management enables you to work smarter.
					</p>
					<ul class="mb-50">
						<li>Only be run by an explicit user action</li>
						<li>Show UI in a single plugin-specific dialog</li>
						<li>
							Make a technology change (described in the next section) that avoided the
							privately-disclosed vulnerabilities.
						</li>
					</ul>
					<h5 class="mb-20">Help Users Fill in Forms</h5>
					<p class="mb-25">
						”Time management” is the process of organizing and planning how to divide your time
						between specific activities. Good time management enables you to work smarter.
					</p>
					<ol class="mb-50">
						<li>Only be run by an explicit user action</li>
						<li>Show UI in a single plugin-specific dialog</li>
						<li>
							Make a technology change (described in the next section) that avoided the
							privately-disclosed vulnerabilities.
						</li>
					</ol>
				</div>
				<div class="blog-tags">
					<ul>
						<li><a href={'#'}>Design Process</a></li>
						<li><a href={'#'}>Prototype</a></li>
						<li><a href={'#'}>Design Process</a></li>
						<li><a href={'#'}>Prototype</a></li>
					</ul>
				</div>
				<div class="blog-share">
					<span>Share this article:</span>
					<ul>
						<li>
							<a href={'#'} class="facebook">
								<i class="uil uil-facebook-f" />
								share
							</a>
						</li>
						<li>
							<a href={'#'} class="twitter">
								<i class="uil uil-twitter" />
								tweet
							</a>
						</li>
						<li>
							<a href={'#'} class="pinterest">
								<i class="lab la-pinterest" />
								share
							</a>
						</li>
						<li>
							<a href={'#'} class="linkedin">
								<i class="uil uil-linkedin" />
								share
							</a>
						</li>
						<li>
							<a href={'#'} class="link copy-to-clickboard">
								<i class="uil uil-copy" />
								copy
							</a>
						</li>
					</ul>
				</div>
				<div class="blog-author-box media">
					<div class="auth-img">
						<img class="w-70" src="/img/author-nav.png" alt="" />
					</div>
					<div class="auth-details media-body">
						<span>Written by</span>
						<h2>Rabbi Islam Rony</h2>
						<p>
							Rabbi Islam Rony is a British writer and social media manager specializing in dynamic
							branding, campaign strategy and content engagement.
						</p>
					</div>
				</div>
			</div>
			<div class="blog-share-top">
				<div class="blog-share-fixed">
					<span>share</span>
					<ul>
						<li>
							<a href={'#'} class="facebook">
								<i class="uil uil-facebook-f" />
							</a>
						</li>
						<li>
							<a href={'#'} class="twitter">
								<i class="uil uil-twitter" />
							</a>
						</li>
						<li>
							<a href={'#'} class="pinterest">
								<i class="lab la-pinterest" />
							</a>
						</li>
						<li>
							<a href={'#'} class="linkedin">
								<i class="uil uil-linkedin" />
							</a>
						</li>
						<li>
							<a href={'#'} class="link copy-to-clickboard">
								<i class="uil uil-copy" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</article>
	</Col>
</Row>
