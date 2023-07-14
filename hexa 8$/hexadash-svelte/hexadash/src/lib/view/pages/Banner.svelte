<script>
	import { Col, Card, CardBody, Button } from 'sveltestrap';

	import { Pagination } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/pagination';
</script>

<Col xxl={3} sm={6} class="mb-md-50 mb-30">
	<Card class="banner-feature banner-card-h280">
		<CardBody>
			<h1 class="banner-feature__heading">15 Days Free Trail</h1>
			<p class="banner-feature__para color-gray">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut
			</p>
			<Button size="sm" outline color="primary" class="banner-feature__btn px-20 radius-xs fs-14"
				>Start</Button
			>
		</CardBody>
	</Card>
</Col>
<Col xxl={3} sm={6} class="mb-md-50 mb-30">
	<Card class="banner-feature banner-feature--2 banner-card-h280">
		<div class="banner-feature__shape">
			<img class="svg" alt="" src={'/img/svg/group9010.svg'} />
		</div>
		<div class="d-flex justify-content-center">
			<CardBody>
				<h1 class="banner-feature__heading color-white">Upgrade your plan</h1>
				<p class="banner-feature__para color-white">Lorem ipsum dolor sit amet</p>
				<Button
					size="md"
					color="light"
					class="banner-feature__btn color-primary px-20 bg-white radius-xs fs-15">upgrade</Button
				>
			</CardBody>
		</div>
	</Card>
</Col>
<Col xxl={3} sm={6} class="mb-md-50 mb-30">
	<Card class="banner-feature banner-feature--3 banner-card-h280">
		<div class="banner-feature__shape">
			<img class="svg" alt="" src={'/img/svg/group9060.svg'} />
		</div>
		<div class="d-flex justify-content-center">
			<CardBody>
				<h1 class="banner-feature__heading color-white">Earn More Money</h1>
				<Button
					size="md"
					color="light"
					class="banner-feature__btn color-primary px-20 bg-white radius-xs fs-15 mt-sm-35 mt-15"
					>Learn More</Button
				>
			</CardBody>
		</div>
	</Card>
</Col>
<Col xxl={3} sm={6} class="mb-md-50 mb-30">
	<Card class="banner-feature banner-feature--4 banner-card-h280">
		<div class="banner-feature__shape">
			<img class="svg" alt="" src={'/img/svg/group3503.svg'} />
		</div>
		<div class="d-flex justify-content-center">
			<CardBody>
				<h1 class="banner-feature__heading color-white">Win Your Bonus</h1>
				<p class="banner-feature__para color-white">Weekly performance bonus</p>
				<Button
					size="md"
					color="light"
					class="banner-feature__btn color-primary px-20 bg-white radius-xs fs-15"
					>Learn More</Button
				>
			</CardBody>
		</div>
	</Card>
</Col>
<Col xxl={4} sm={6} class="mb-md-50 mb-30">
	<Card class="banner-feature banner-feature--5 banner-card-h280 ">
		<div class="banner-feature__shape">
			<img class="svg" alt="" src={'/img/svg/group3320.svg'} />
		</div>
		<div class="d-flex justify-content-center">
			<CardBody>
				<h2 class="banner-feature__heading color-white">Congratulations Jhon!</h2>
				<p class="banner-feature__para ">Best Seller on the last month.</p>
				<Button
					size="md"
					color="light"
					class="banner-feature__btn color-primary px-20 bg-white radius-xs fs-15"
					>Learn More</Button
				>
			</CardBody>
		</div>
	</Card>
</Col>
<Col xxl={4} sm={6} class="mb-md-50 mb-30">
	<Card
		class="banner-feature banner-feature--6 banner-card-h280"
		style="background-image: url('/img/rectangle381.png')"
	>
		<div class="d-flex justify-content-center">
			<CardBody>
				<img src="/img/sale.png" alt="img" />
				<h3 class="banner-feature__heading color-danger">Up to 50 OFF</h3>
				<Button size="md" color="danger" outline class="banner-feature__btn px-20 radius-xs fs-15"
					>buy now</Button
				>
			</CardBody>
		</div>
	</Card>
</Col>
<Col xxl={4} class="mb-md-50 mb-30">
	<Card class="banner-feature banner-feature--77 banner-card-h280">
		<div class="d-flex justify-content-center">
			<CardBody>
				<div class="banner-feature__shape me-20">
					<img class="svg" alt="" src={'/img/svg/group9102.svg'} />
				</div>
				<div class="div">
					<h2 class="banner-feature__heading">Subscribe to our newsletter</h2>
					<p class="banner-feature__para ">Lorem ipsum dolor sit amet, consetetur</p>
					<Button
						color="primary"
						outline
						size="md"
						class="banner-feature__btn px-20 radius-xs fs-15">Subscribe Now</Button
					>
				</div>
			</CardBody>
		</div>
	</Card>
</Col>
<Col xxl={3} sm={6} class="mb-md-50 mb-30">
	<Card class="banner-feature--8 banner-card-h450">
		<CardBody>
			<Swiper
				class="banner-slider"
				modules={[Pagination]}
				slidesPerView={1}
				pagination={{ el: '.pagination-slide--one', clickable: true }}
			>
				<SwiperSlide>
					<div class="banner-feature__shape mb-30 content-center">
						<img class="svg" alt="" src={'/img/svg/group3488.svg'} />
					</div>
					<div class="pb-md-0 pb-30">
						<h2 class="banner-feature__heading color-white">Achievements</h2>
						<p class="banner-feature__para ">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="banner-feature__shape mb-30 content-center">
						<img class="svg" alt="" src={'/img/svg/group3488.svg'} />
					</div>
					<div class=" pb-md-0 pb-30">
						<h2 class="banner-feature__heading color-white">Achievements</h2>
						<p class="banner-feature__para ">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="banner-feature__shape mb-30 content-center">
						<img class="svg" alt="" src={'/img/svg/group3488.svg'} />
					</div>
					<div class="pb-md-0 pb-30">
						<h2 class="banner-feature__heading color-white">Achievements</h2>
						<p class="banner-feature__para ">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
			<div class="pagination-slide pagination-slide--one" />
		</CardBody>
	</Card>
</Col>
<Col xxl={3} sm={6} class="mb-md-50 mb-30">
	<Card class="banner-feature--9 banner-card-h450">
		<CardBody>
			<h3 class="banner-feature__heading">Up To Date</h3>
			<div class="banner-feature__shape mt-30">
				<img class="svg" alt="" src={'/img/svg/group3396.svg'} />
			</div>
		</CardBody>
	</Card>
</Col>
<Col xxl={3} sm={6} class="mb-md-50 mb-30">
	<Card class=" banner-feature--10 banner-card-h450">
		<div class="banner-feature__shape">
			<img class="svg w-100" alt="" src={'/img/svg/group93352.svg'} />
		</div>
		<div class="d-flex justify-content-center">
			<CardBody>
				<h1 class="banner-feature__heading color-white">Need More Space?</h1>
				<Button
					size="md"
					color="light"
					class="banner-feature__btn color-primary px-20 bg-white radius-xs fs-15"
					>Buy Storage</Button
				>
			</CardBody>
		</div>
	</Card>
</Col>
<Col xxl={3} sm={6} class="mb-md-50 mb-30">
	<Card class="banner-feature--11 banner-card-h450">
		<div class="banner-feature__shape">
			<img class="svg" alt="" src={'/img/svg/man.svg'} />
		</div>
		<div class="d-flex justify-content-center">
			<CardBody>
				<h1 class="banner-feature__heading color-white">Create Sale Report</h1>
				<p class="banner-feature__para ">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				</p>
				<Button
					size="md"
					color="light"
					class="banner-feature__btn color-primary px-20 bg-white radius-xs fs-15"
					>Learn More</Button
				>
			</CardBody>
		</div>
	</Card>
</Col>
<Col lg={6} class="mb-xxl-45 mb-md-50 mb-30">
	<Card class="banner-feature--12 d-flex banner-card-h225">
		<div class="d-flex flex-sm-nowrap flex-wrap align-items-center text-center">
			<div class="banner-feature__shape">
				<img class="svg" alt="" src={'/img/svg/group3474.svg'} />
			</div>
			<CardBody>
				<h1 class="banner-feature__heading">Dedicated Support</h1>
				<div class="d-flex justify-content-center">
					<Button color="primary" size="md" class="banner-feature__btn px-20 radius-xs fs-15 mt-30"
						>Learn More</Button
					>
				</div>
			</CardBody>
		</div>
	</Card>
</Col>
<Col lg={6} class="mb-xxl-45 mb-md-50 mb-30">
	<Card class="banner-feature--13 d-flex banner-card-h225">
		<div class="d-flex align-items-center flex-sm-nowrap flex-wrap text-sm-start text-center">
			<CardBody>
				<h2 class="banner-feature__heading">Welcome Back Garry Sobars!</h2>
				<p class="banner-feature__para ">
					Lorem ipsum dolor amet, consetetur sadipscing elitr sed diam
				</p>
				<div class="d-flex justify-content-sm-start justify-content-center">
					<Button
						size="md"
						color="light"
						class="banner-feature__btn color-primary px-20 bg-white radius-xs fs-15"
						>Learn More</Button
					>
				</div>
			</CardBody>
			<div class="banner-feature__shape">
				<img class="svg" alt="" src={'/img/svg/objects.svg'} />
			</div>
		</div>
	</Card>
</Col>

<style lang="scss">
	:global {
		@import '../../../../src/assets/sass/mixins/media-queries';
		/* Banner Feature */
		.banner-feature {
			z-index: 1;
			overflow: hidden;
		}

		.banner-card-h225 {
			min-height: 225px;
		}
		.banner-card-h280 {
			min-height: 280px;
		}
		.banner-card-h450 {
			min-height: 450px;
		}

		.banner-feature img,
		.banner-feature svg {
			max-width: 100%;
		}
		.banner-feature--13 .banner-feature .card-body {
			padding: 43px 30px 40px 30px;
		}

		.banner-feature__heading {
			line-height: 1.2666666667;
		}

		.banner-feature__para {
			font-size: 16px;
			line-height: 1.6875;
			font-weight: 400;
			margin: 19px 0 21px 0;
		}

		.banner-feature__btn {
			text-transform: capitalize;
			&.color-primary {
				color: var(--color-primary);
			}
		}

		.banner-feature--2 {
			background-color: var(--color-primary);
		}

		.banner-feature--2 .banner-feature__shape {
			position: absolute;
			bottom: 22px;
			right: 16px;
			z-index: -1;
		}

		.banner-feature--2 .card-body {
			padding: 55px 30px 55px 30px;
		}

		.banner-feature--2 .banner-feature__para {
			margin: 15px 0 36px 0;
		}

		.banner-feature--3 {
			background-color: var(--color-info);
		}

		.banner-feature--3 .banner-feature__shape {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1;
		}

		.banner-feature--3 .card-body {
			padding: 47px 30px 30px 30px;
		}

		.banner-feature--3 .banner-feature__para {
			margin: 15px 0 36px 0;
		}

		.banner-feature--4 {
			background-color: var(--color-dark);
		}

		.banner-feature--4 .banner-feature__shape {
			position: absolute;
			bottom: 10px;
			right: 10px;
			z-index: -1;
		}

		.banner-feature--4 .card-body {
			padding: 29px 30px 30px 30px;
		}

		.banner-feature--4 .banner-feature__para {
			margin: 17px 0 17px 0;
		}

		.banner-feature--5 {
			background-image: -webkit-gradient(
				linear,
				left bottom,
				right top,
				from(#5840ff),
				color-stop(#0082ff),
				color-stop(#00aaff),
				color-stop(#00caff),
				to(#00e4ec)
			);
			background-image: -webkit-linear-gradient(
				left bottom,
				#5840ff,
				#0082ff,
				#00aaff,
				#00caff,
				#00e4ec
			);
			background-image: -o-linear-gradient(
				left bottom,
				#5840ff,
				#0082ff,
				#00aaff,
				#00caff,
				#00e4ec
			);
			background-image: linear-gradient(to right top, #5840ff, #0082ff, #00aaff, #00caff, #00e4ec);
		}

		.banner-feature--5 .banner-feature__shape {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1;
		}

		.banner-feature--5 .card-body {
			padding: 55px 30px 55px 30px;
		}

		.banner-feature--5 .banner-feature__para {
			margin: 14px 0 22px 0;
			color: rgba(var(--color-white-rgba), 0.7);
		}

		.banner-feature--5 .banner-feature__btn:hover {
			color: var(--color-dark);
		}

		.banner-feature--6 {
			background-size: cover;
			background-position: center center;
		}

		.banner-feature--6 .card-body {
			padding: 55px 30px 55px 30px;
		}

		.banner-feature--6 .banner-feature__para {
			margin: 14px 0 18px 0;
			color: rgba(var(--color-white-rgba), 0.7);
		}

		.banner-feature--6 .banner-feature__heading {
			margin: 19px 0 18px 0;
		}

		.banner-feature--7 {
			margin-bottom: 0;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
		}

		.banner-feature--7 .card-body {
			padding: 40px 30px 40px 0;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			@include xs {
				align-items: center;
			}
		}

		.banner-feature--7 .banner-feature__para {
			margin: 9px 0 0 0;
			color: var(--color-gray);
		}

		.banner-feature--77 {
			margin-bottom: 0;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
		}

		.banner-feature--77 .card-body {
			padding: 40px 30px 40px 0;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
		}

		.banner-feature--77 .banner-feature__para {
			margin: 14px 0 18px 0;
			color: var(--color-gray);
		}

		.banner-feature--8 {
			background-color: var(--color-primary);
			text-align: center;
		}

		.banner-feature--8 .slick-slider {
			outline: none;
			border: none;
			-webkit-box-shadow: none;
			box-shadow: none;
		}

		.banner-feature--8 .slick-slider:focus {
			border: none;
			outline: none;
			-webkit-box-shadow: none;
			box-shadow: none;
		}

		.banner-feature--8 .slick-slider .slick-track {
			outline: none;
		}

		.banner-feature--8 .slick-slider .slick-slide {
			outline: none;
		}

		.banner-feature--8 .card-body {
			padding: 60px 20px 30px 20px;
		}

		.banner-feature--8 .banner-feature__shape {
			width: 100%;
		}

		.banner-feature--8 .banner-feature__para {
			margin: 19px 0 60px 0;
			color: rgba(var(--color-white-rgba), 0.7);
		}

		.banner-feature--8 .slick-slider .slick-dots button {
			width: 5px;
			height: 5px;
		}

		.banner-feature--8 .slick-slider .slick-dots li.slick-active button {
			width: 5px;
			background: var(--color-white);
		}

		.banner-feature--8 .slick-slider.slick-dots-bottom .slick-dots {
			margin: 0 0 70px;
		}

		.banner-feature--9 .card-body {
			text-align: center;
			padding: 37px 0 25px 0;
		}

		.banner-feature--10 {
			z-index: 1;
			background-color: var(--color-warning);
		}

		.banner-feature--10 .banner-feature__shape {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1; /*rtl:ignore*/
			padding-left: 40px; /*rtl:ignore*/
		}

		.banner-feature--10 .card-body {
			padding: 39px 25px 44px 40px;
		}

		.banner-feature--10 .banner-feature__btn {
			margin-top: 25px;
		}

		.banner-feature--11 {
			z-index: 1;
			overflow: hidden;
			background-color: var(--color-danger);
		}

		.banner-feature--11 .banner-feature__shape {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1;
		}

		.banner-feature--11 .card-body {
			padding: 39px 25px 44px 40px;
		}

		.banner-feature--11 .banner-feature__para {
			color: rgba(var(--color-white-rgba), 0.7);
			margin: 17px 0 18px 0;
		}

		.banner-feature--12 {
			height: 100%;
			overflow: hidden;
			background-color: rgba(var(--color-warning-rgba), 0.3);
		}

		.banner-feature--12 .card-body {
			padding: 0 25px;
		}

		.banner-feature--13 {
			max-height: 100%;
			overflow: hidden;
			background-color: var(--color-info);
		}

		.banner-feature--13 .banner-feature__para {
			color: rgba(var(--color-dark-rgba), 0.7);
			margin: 15px 0 16px 0;
		}

		.banner-feature--13 .banner-feature__shape {
			max-width: unset;
		}

		.banner-feature--13 .card-body {
			padding: 30px 15px 30px 30px;
		}

		.banner-feature--14 {
			background: var(--bg-white);
		}

		.banner-feature--14 h1 {
			line-height: 1.2;
			margin-bottom: 17px;
		}

		.banner-feature--14 p {
			font-size: 15px;
			line-height: 1.6666666667;
			font-weight: 400;
			color: var(--color-gray-x);
			margin-bottom: 30px;
		}

		.banner-feature--14 button {
			height: 46px;
			font-size: 14px;
			line-height: 1.4285714286;
			font-weight: 500;
			-webkit-box-shadow: 0 5px 10px rgba(var(--color-secondary-rgba), 0.15);
			box-shadow: 0 5px 10px rgba(var(--color-secondary-rgba), 0.15);
			padding: 10px 20px;
		}

		.banner-feature--14 .card-body {
			padding: 0;
		}

		.banner-feature--15 {
			-webkit-border-radius: 6px;
			border-radius: 6px;
			padding: 30px;
			-webkit-transition: var(--transition);
			-o-transition: var(--transition);
			transition: var(--transition);
			border: 1px solid var(--border-color);
		}

		.banner-feature--15:hover {
			-webkit-box-shadow: 0 15px 25px rgba(var(--color-lighten-rgba), 0.15);
			box-shadow: 0 15px 25px rgba(var(--color-lighten-rgba), 0.15);
			border: 1px solid transparent;
		}

		.banner-feature--15 h4 {
			line-height: 1.2;
			font-weight: 500;
			margin-top: 27px;
		}

		.banner-feature--15 p {
			font-size: 15px;
			line-height: 1.6666666667;
			font-weight: 400;
			color: var(--color-gray-x);
			margin-top: 20px;
			margin-bottom: 0;
		}

		.banner-feature--15 button {
			height: 40px;
			padding: 0 30px;
		}

		.banner-feature--16 {
			padding: 100px 0 0 0;
		}

		.banner-feature--17 {
			margin-top: 85px;
		}

		.banner-feature--17 .card-header h4 {
			white-space: normal;
		}

		.banner-feature--18 {
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			min-height: 290px;
		}

		.banner-feature--18 .banner-feature__shape img {
			height: 215px;
			max-height: 215px;
			-o-object-fit: cover;
			object-fit: cover;
		}

		.banner-feature--18 .banner-feature__btn {
			min-height: 50px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			font-size: 15px;
			font-weight: 600;
		}

		.banner-feature__shape img,
		.banner-feature__shape svg {
			max-width: 100%;
		}
	}
</style>
