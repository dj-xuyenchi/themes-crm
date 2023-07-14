<script>
	import { Row, Col, Card, CardBody } from 'sveltestrap';
	import { Pagination, Navigation } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import testimonialData from '@data/testimonials.json';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
</script>

<div class="testimonial-section">
	<div class="testimonial-section__padding bg-white">
		<Row class="justify-content-center">
			<Col sm={12}>
				<div class="testimonial-section__title text-center">
					<h1>Testimonial 1</h1>
				</div>
			</Col>
			<Col sm={10}>
				<div class="testimonial-slider1 testimonial-slider-global">
					<Swiper
						class="testimonial-slider--one"
						modules={[Pagination, Navigation]}
						breakpoints={{
							'640': {
								slidesPerView: 1
							},
							'768': {
								slidesPerView: 2
							},
							'1024': {
								slidesPerView: 3,
								centeredSlides: true,
								loop: true
							}
						}}
						pagination={{ el: '.pagination-slide--one', clickable: true }}
						navigation={{ prevEl: '.slide1-prev', nextEl: '.slide1-next' }}
					>
						{#each testimonialData as data}
							<SwiperSlide>
								<Card>
									<CardBody>
										<div class="author-thumb mb-sm-6 mb-xs-3">
											<div class="d-flex justify-content-center">
												<img class="wh-80 rounded-circle" src="/img/{data.img}" alt="" />
											</div>
											<p class="mb-0">{data.name}</p>
											<span class="d-flex justify-content-center">{data.title}</span>
										</div>
										<p class="author-comment">
											{data.content}
										</p>
									</CardBody>
								</Card>
							</SwiperSlide>
						{/each}
					</Swiper>
					<div class="pagination-slide pagination-slide--one" />
					<div class="navigation-wrapper">
						<div class="navigation-slide-prev slide1-prev"><i class="uil uil-arrow-left" /></div>
						<div class="navigation-slide-next slide1-next"><i class="uil uil-arrow-right" /></div>
					</div>
				</div>
			</Col>
		</Row>
	</div>
</div>

<div class="testimonial-section__padding bg-normal">
	<Row class="justify-content-center">
		<Col sm={12}>
			<div class="testimonial-section__title text-center">
				<h1>Testimonial 2</h1>
			</div>
		</Col>
		<Col sm={10}>
			<div class="testimonial-slider2 testimonial-slider-global">
				<Swiper
					class="testimonial-slider-two"
					modules={[Navigation]}
					breakpoints={{
						'640': {
							slidesPerView: 1
						},
						'768': {
							slidesPerView: 2
						},
						'1024': {
							slidesPerView: 2
						}
					}}
					pagination={false}
					navigation={{ prevEl: '.slide2-prev', nextEl: '.slide2-next' }}
				>
					{#each testimonialData as data}
						<SwiperSlide>
							<Card>
								<CardBody>
									<div class="author-thumb mb-sm-6 mb-xs-3 d-flex justify-content-between">
										<div class="d-flex flex-wrap">
											<div class="me-20">
												<img class="wh-70 rounded-circle" src="/img/{data.img}" alt="" />
											</div>
											<div>
												<p class="mb-0">{data.name}</p>
												<span>{data.title}</span>
											</div>
										</div>
										<div class="div">
											<img class="svg" alt="" src={'/img/svg/quote2.svg'} />
										</div>
									</div>
									<p class="author-comment">
										{data.content}
									</p>
								</CardBody>
							</Card>
						</SwiperSlide>
					{/each}
				</Swiper>
				<div class="navigation-wrapper">
					<div class="navigation-slide-prev slide2-prev"><i class="uil uil-arrow-left" /></div>
					<div class="navigation-slide-next slide2-next"><i class="uil uil-arrow-right" /></div>
				</div>
			</div>
		</Col>
	</Row>
</div>

<div class="testimonial-section__padding bg-normal">
	<Row class="justify-content-center">
		<Col sm={12}>
			<div class="testimonial-section__title text-center">
				<h1>Testimonial 3</h1>
			</div>
		</Col>
		<Col md={7} sm={10}>
			<div class="testimonial-slider4 testimonial-slider-global">
				<Swiper
					class="banner-slider"
					modules={[Navigation]}
					slidesPerView={1}
					pagination={false}
					navigation={{ prevEl: '.slide3-prev', nextEl: '.slide3-next' }}
				>
					{#each testimonialData as data}
						<SwiperSlide>
							<Card>
								<CardBody class="text-center">
									<div class="d-flex justify-content-center">
										<img class="wh-100 rounded-circle" src="/img/{data.img}" alt="" />
									</div>
									<p class="author-comment">
										{data.content}
									</p>
									<div class="author-thumb mb-sm-6 mb-xs-3">
										<p class="mb-0">{data.name}</p>
										<span class="d-flex justify-content-center">{data.title}</span>
									</div>
								</CardBody>
							</Card>
						</SwiperSlide>
					{/each}
				</Swiper>
				<div class="navigation-wrapper">
					<div class="navigation-slide-prev slide3-prev"><i class="uil uil-arrow-left" /></div>
					<div class="navigation-slide-next slide3-next"><i class="uil uil-arrow-right" /></div>
				</div>
			</div>
		</Col>
	</Row>
</div>

<style lang="scss">
	:global {
		@import '../../../assets/sass/components/testimonial.scss';
		.testimonial-slider-global {
			position: relative;

			&.testimonial-slider1 {
				@include sm {
					.navigation-slide-prev {
						left: calc(50% + 15px);
					}
					.navigation-slide-next {
						right: calc(50% + 15px);
					}
					.navigation-slide-prev,
					.navigation-slide-next {
						top: 100%;
					}

					.navigation-wrapper {
						margin-top: 25px;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.swiper-pagination-bullets {
						&.swiper-pagination-horizontal {
							bottom: -20px;
						}
					}
				}
			}
			&.testimonial-slider2,
			&.testimonial-slider4 {
				@include ssm {
					.navigation-slide-prev {
						left: calc(50% + 15px);
					}
					.navigation-slide-next {
						right: calc(50% + 15px);
					}
					.navigation-slide-prev,
					.navigation-slide-next {
						top: 100%;
					}

					.swiper-pagination-bullets {
						&.swiper-pagination-horizontal {
							bottom: -20px;
						}
					}
				}
			}
			.pagination-slide--one {
				text-align: center;
			}
			.navigation-slide-prev,
			.navigation-slide-next {
				position: absolute;
				top: 50%;
				margin-top: -18px;
				color: var(--color-lighten);
				font-size: calc(16.2px + 0.15vw);
				cursor: pointer;
				z-index: 10;
				width: 44px;
				height: 44px;
				border-radius: 50%;
				box-shadow: 0 3px 10px rgba(var(--light-gray-rgba), 0.16);
				background-color: #fff;
				font-size: 22px;
				display: flex;
				align-items: center;
				justify-content: center;
				i {
					color: currentColor;
				}
			}
			.navigation-slide-prev {
				left: -60px;
			}
			.navigation-slide-next {
				right: -60px;
			}

			.swiper-pagination-horizontal {
				&.swiper-pagination-bullets {
					.swiper-pagination-bullet {
						margin: 3px !important;
						width: 10px !important;
						height: 10px !important;
						background-color: rgba(var(--color-primary-rgba), 0.7) !important;
						&.swiper-pagination-bullet-active {
							background-color: rgba(var(--color-primary-rgba), 1) !important;
							opacity: 1 !important;
						}
					}
				}
			}
		}
	}
</style>
