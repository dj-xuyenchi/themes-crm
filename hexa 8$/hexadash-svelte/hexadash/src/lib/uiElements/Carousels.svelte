<script>
	import {
		Row,
		Col,
		Card,
		CardHeader,
		CardBody,
		TabContent,
		TabPane
	} from 'sveltestrap';
	import {
		Pagination,
		Autoplay,
		EffectFade
	} from 'swiper';
	import {
		Swiper,
		SwiperSlide
	} from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/effect-fade';
</script>

<Row>
	<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Basic card</h6>
		</CardHeader>
		<CardBody>
			<div class="position-relative">
				<Swiper class="global-slider" modules={[Pagination]} spaceBetween={50} slidesPerView={1}
					pagination={{ el: '.pagination-slide--one', clickable: true }}>
					<SwiperSlide>
						<div class="slider__single d-flex">
							<p>1</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slider__single d-flex ">
							<p>2</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slider__single d-flex">
							<p>3</p>
						</div>
					</SwiperSlide>
				</Swiper>
				<div class="pagination-slide pagination-slide--one" />
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Scroll automatically</h6>
		</CardHeader>
		<CardBody>
			<div class="position-relative">
				<Swiper class="global-slider" modules={[Pagination, Autoplay]} spaceBetween={50} slidesPerView={1}
					autoplay pagination={{
						el: '.pagination-slide--two',
						clickable: true
					}}>
					<SwiperSlide>
						<div class="slider__single d-flex">
							<p>1</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slider__single d-flex ">
							<p>2</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slider__single d-flex">
							<p>3</p>
						</div>
					</SwiperSlide>
				</Swiper>
				<div class="pagination-slide pagination-slide--two" />
			</div>
		</CardBody>
	</Card>
	</Col>

	<Col lg={6}>
	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Position</h6>
		</CardHeader>
		<CardBody>
			<div class="carousel-position">
				<TabContent>
					<TabPane tabId="top" tab="Top" active>
						<div class="position-relative">
							<Swiper class="global-slider" modules={[Pagination]} spaceBetween={50} slidesPerView={1}
								pagination={{
									el: '.pagination-slide--top',
									clickable: true
								}}>
								<SwiperSlide>
									<div class="slider__single d-flex">
										<p>1</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="slider__single d-flex ">
										<p>2</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="slider__single d-flex">
										<p>3</p>
									</div>
								</SwiperSlide>
							</Swiper>
							<div class="pagination-slide pagination-slide--top" />
						</div>
					</TabPane>
					<TabPane tabId="right" tab="Right">
						<div class="position-relative">
							<Swiper class="global-slider" modules={[Pagination]} spaceBetween={50} slidesPerView={1}
								pagination={{
									el: '.pagination-slide--right',
									clickable: true
								}}>
								<SwiperSlide>
									<div class="slider__single d-flex">
										<p>1</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="slider__single d-flex ">
										<p>2</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="slider__single d-flex">
										<p>3</p>
									</div>
								</SwiperSlide>
							</Swiper>
							<div class="pagination-slide pagination-slide--right" />
						</div>
					</TabPane>
					<TabPane tabId="bottom" tab="Bottom">
						<div class="position-relative">
							<Swiper class="global-slider" modules={[Pagination]} spaceBetween={50} slidesPerView={1}
								pagination={{
									el: '.pagination-slide--bottom',
									clickable: true
								}}>
								<SwiperSlide>
									<div class="slider__single d-flex">
										<p>1</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="slider__single d-flex ">
										<p>2</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="slider__single d-flex">
										<p>3</p>
									</div>
								</SwiperSlide>
							</Swiper>
							<div class="pagination-slide pagination-slide--bottom" />
						</div>
					</TabPane>
					<TabPane tabId="left" tab="Left">
						<div class="position-relative">
							<Swiper class="global-slider" modules={[Pagination]} spaceBetween={50} slidesPerView={1}
								pagination={{
									el: '.pagination-slide--left',
									clickable: true
								}}>
								<SwiperSlide>
									<div class="slider__single d-flex">
										<p>1</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="slider__single d-flex ">
										<p>2</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div class="slider__single d-flex">
										<p>3</p>
									</div>
								</SwiperSlide>
							</Swiper>
							<div class="pagination-slide pagination-slide--left" />
						</div>
					</TabPane>
				</TabContent>
			</div>
		</CardBody>
	</Card>

	<Card class="card-default card-md mb-4">
		<CardHeader>
			<h6>Fade in</h6>
		</CardHeader>
		<CardBody>
			<div class="position-relative">
				<Swiper class="global-slider" modules={[Pagination, EffectFade]} spaceBetween={50} slidesPerView={1}
					effect="fade" pagination={{ el: '.pagination-slide--three', clickable: true }}>
					<SwiperSlide>
						<div class="slider__single d-flex">
							<p>1</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slider__single d-flex ">
							<p>2</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="slider__single d-flex">
							<p>3</p>
						</div>
					</SwiperSlide>
				</Swiper>
				<div class="pagination-slide pagination-slide--three" />
			</div>
		</CardBody>
	</Card>
	</Col>
</Row>

<style lang="scss">
	:global {
		body {
			&:has(.global-slider) {
				.pagination-slide {
					position: absolute;
					left: 50%;
					width: auto;
					bottom: 0;
					margin: 0 0 25px 0;
					transform: translateX(-50%);
					list-style: none;
					padding: 0;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					z-index: 1;
					gap: 4px;
					transition: 0.3s;

					.swiper-pagination-bullet {
						margin: 0;
						border: 0;
						border-radius: 5px;
						width: 15px;
						height: 3px;
						transition: width .3s ease;
						padding: 0;
						text-indent: -9999px;
						background: rgba(var(--color-white-rgba), .7);

						&.swiper-pagination-bullet-active {
							width: 25px;
							background-color: var(--color-white);
						}
					}

					&--top {
						bottom: auto;
						top: 0;
						margin: 25px 0 0 0;
					}

					&--left {
						right: auto;
						left: 0;
						margin: 0 0 0 25px;
						flex-direction: column;
						top: 50%;
						transform: translate(0, -50%);

						.swiper-pagination-bullet {
							width: 3px;
							height: 15px;

							&.swiper-pagination-bullet-active {
								width: 3px;
								height: 25px;
							}
						}
					}

					&--right {
						left: auto;
						right: 0;
						margin: 0 25px 0 0;
						flex-direction: column;
						top: 50%;
						transform: translate(0, -50%);

						.swiper-pagination-bullet {
							width: 3px;
							height: 15px;

							&.swiper-pagination-bullet-active {
								width: 3px;
								height: 25px;
							}
						}
					}
				}

				.nav-tabs {
					margin-bottom: 15px;
				}
			}
		}

		.global-slider {
			border-radius: 3px;

			.swiper-slide {
				.slider__single {
					float: left;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					min-height: 150px;
					background-color: var(--color-gray-x);
					border-radius: 3px;

					p {
						font-size: 18px;
						font-weight: 500;
						color: var(--color-white);
						margin-bottom: 0;
					}
				}
			}
		}

		.carousel-position {
			.nav-tabs {
				display: inline-flex;
				border-radius: 6px;

				li {
					.nav-link {
						position: relative;
						flex: initial;
						line-height: 2.65;
						padding: 0 16.44px;
						border-width: 1px;
						border-radius: 0;
						font-weight: 500;
						min-height: 42px;
						color: var(--color-light);
						border: 1px solid var(--border-color);

						&:hover,
						&:focus {
							color: currentColor;
						}

						&.active {
							border-left: 1px solid var(--color-primary) !important;
							border-color: var(--color-primary);
							color: var(--color-primary);
						}
					}

					&:not(:first-child) {
						.nav-link {
							border-left: 1px solid transparent;
						}
					}

					&:first-child {
						.nav-link {
							border-radius: 6px 0 0 6px;
						}
					}

					&:last-child {
						.nav-link {
							border-radius: 0 6px 6px 0;
						}
					}
				}
			}
		}
	}

	;
</style>