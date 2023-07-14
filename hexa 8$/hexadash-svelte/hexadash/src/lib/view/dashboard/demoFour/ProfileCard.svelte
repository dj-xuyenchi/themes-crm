<script>
	let image = 'profile_bg_2.png';
	let bgImage = 'profile_bg.png';
	let title = 'Robert Clinton';
	let tagline = 'Best Seller of the last month';
	let socialLinks = true;
	export { image, bgImage, title, tagline, socialLinks };
</script>

<div class="feature-profile">
	<div class="feature-profile__bg">
		<img src="/img/{bgImage}" alt="" />
	</div>
	<div class="feature-profile_content">
		<img src="/img/{image}" alt="" />
		<h6>{title}</h6>
		<p>{tagline}</p>
		{#if socialLinks}
			<ul class="profile-feature__social">
				<li>
					<a href={'#'} class="bg-primary">
						<i class="lab la-facebook-f" />
					</a>
				</li>
				<li>
					<a href={'#'} class="bg-secondary">
						<i class="lab la-twitter" />
					</a>
				</li>
				<li>
					<a href={'#'} class="bg-info">
						<i class="lab la-dribbble" />
					</a>
				</li>
			</ul>
		{/if}
	</div>
</div>

<style lang="scss">
	.feature-profile {
		border-radius: 10px;
		background-color: var(--color-white);
		display: flex;
		flex-direction: column;
		box-shadow: 0 5px 20px rgba(var(--light-gray-rgba), 0.05);
		.feature-profile__bg {
			max-height: 170px;
			height: 170px;
			overflow: hidden;
			img {
				border-radius: 10px 10px 0 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.feature-profile_content {
			text-align: center;
			padding-bottom: 45px;
			img {
				width: 110px;
				height: 110px;
				border-radius: 50%;
				border: 7px solid var(--color-white);
				object-fit: cover;
				margin-top: -73px;
			}
			h6 {
				font-size: 18px;
				font-weight: 600;
				color: var(--color-dark);
				margin-top: 10px;
				margin-bottom: 5px;
			}
			p {
				font-size: 14px;
				font-weight: 400;
				color: var(--color-light);
				margin-bottom: 0;
			}
			.profile-feature__social {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content: center;
				margin-top: 19px;
				li {
					&:not(:last-child) {
						margin-right: 10px;
					}
					a {
						width: 32px;
						height: 32px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 6px;
						color: var(--color-white);
						font-size: 18px;
						&:hover {
							opacity: 0.8;
						}
					}
				}
			}
		}
	}
</style>
