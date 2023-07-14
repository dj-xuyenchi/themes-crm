<script lang="tsx">
import {
  BannerNormal,
  BannerWrapper,
  Figure2,
  Figure3,
  Figure6,
  Figure7,
  Figure8,
  BannerCarouselWrap,
  BannerLongWrap,
  BannerCardWrap,
  BannerCtaWrap,
  PageHeader,
} from './Style';
import { defineComponent } from 'vue';

export const Banner1 = defineComponent({
  name: 'Banner1',
  render() {
    return (
      <BannerNormal>
        <sdCards headless bodyStyle={{ minHeight: '270px' }}>
          <h2>15 Days Free Trail</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
          <sdButton class="btn-outlined" size="sm" outlined type="primary">
            Start
          </sdButton>
        </sdCards>
      </BannerNormal>
    );
  },
});

export const Banner2 = () => {
  return (
    <BannerWrapper>
      <sdCards
        class="mb-70"
        bodyStyle={{
          background: '#5F63F2',
          borderRadius: '10px',
          minHeight: '270px',
        }}
        headless
      >
        <Figure2>
          <img src={'/src/assets/img/banner/1.png'} alt="" />
          <figcaption>
            <h2>Upgrade your plan</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <sdButton size="lg" type="white">
              Upgrade
            </sdButton>
          </figcaption>
        </Figure2>
      </sdCards>
    </BannerWrapper>
  );
};

export const Banner3 = () => {
  return (
    <BannerWrapper>
      <sdCards
        bodyStyle={{
          borderRadius: '10px',
          minHeight: '270px',
          background: '#5F63F2',
        }}
        headless
      >
        <Figure3>
          <img src={'/src/assets/img/banner/2.png'} alt="" />
          <figcaption>
            <h2>Earn More Money</h2>
            <sdButton size="lg" type="white">
              Learn More
            </sdButton>
          </figcaption>
        </Figure3>
      </sdCards>
    </BannerWrapper>
  );
};

export const Banner4 = () => {
  return (
    <BannerWrapper>
      <sdCards
        bodyStyle={{
          background: '#272B41',
          borderRadius: '10px',
          minHeight: '270px',
        }}
        headless
      >
        <Figure3 class="theme-3">
          <img src={'/src/assets/img/banner/3.png'} alt="" />
          <figcaption>
            <h2>Win Your Bonus</h2>
            <p>Weekly performance bonus</p>
            <sdButton size="lg" type="white">
              Learn More
            </sdButton>
          </figcaption>
        </Figure3>
      </sdCards>
    </BannerWrapper>
  );
};

export const Banner5 = () => {
  return (
    <BannerWrapper>
      <sdCards
        bodyStyle={{
          background: '#5F63F2',
          borderRadius: '10px',
          minHeight: '265px',
          display: 'flex',
          alignItems: 'center',
        }}
        headless
      >
        <Figure3 class="theme-wide">
          <img src={'/src/assets/img/banner/4.png'} alt="" />
          <figcaption>
            <h2>Congratulations Jhon!</h2>
            <p>Best Seller on the last month.</p>
            <sdButton size="lg" type="white">
              Learn More
            </sdButton>
          </figcaption>
        </Figure3>
      </sdCards>
    </BannerWrapper>
  );
};

export const Banner6 = () => {
  return (
    <BannerWrapper>
      <sdCards
        bodyStyle={{
          background: `url(${'/src/assets/img/banner/5.png'})`,
          backgroundSize: 'cover',
          borderRadius: '10px',
          minHeight: '265px',
          display: 'flex',
          direction: 'ltr',
          alignItems: 'center',
        }}
        headless
      >
        <Figure6>
          <img src={'/src/assets/img/banner/badge.svg'} alt="" />
          <figcaption>
            <h2>Up to 50 OFF</h2>
            <sdButton class="btn-outlined" size="sm" outlined type="danger">
              Buy Now
            </sdButton>
          </figcaption>
        </Figure6>
      </sdCards>
    </BannerWrapper>
  );
};

export const Banner7 = () => {
  return (
    <BannerNormal class="theme-wide">
      <sdCards headless>
        <Figure7>
          <img src={'/src/assets/img/banner/6.png'} alt="" />
          <figcaption>
            <h2>Subscribe to our newsletter</h2>
            <p>Lorem ipsum dolor sit amet, consetetur </p>
            <sdButton class="btn-outlined ant-btn-lg" outlined type="primary">
              Subscribe Now
            </sdButton>
          </figcaption>
        </Figure7>
      </sdCards>
    </BannerNormal>
  );
};

export const BannerCarousel = defineComponent({
  name: 'BannerCarousel',
  render() {
    return (
      <BannerCarouselWrap>
        <a-carousel autoplay>
          <div class="banner-signle">
            <div class="banner-single__img">
              <img src={'/src/assets/img/banner/8.png'} alt="" />
            </div>
            <div class="banner-single__content">
              <h3>Achievements</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
          {/* End of /.banner-signle */}
          <div class="banner-signle">
            <div class="banner-single__img">
              <img src={'/src/assets/img/banner/8.png'} alt="" />
            </div>
            <div class="banner-single__content">
              <h3>Achievements</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
          {/* End of /.banner-signle */}
          <div class="banner-signle">
            <div class="banner-single__img">
              <img src={'/src/assets/img/banner/8.png'} alt="" />
            </div>
            <div class="banner-single__content">
              <h3>Achievements</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
          {/* End of /.banner-signle */}
        </a-carousel>
      </BannerCarouselWrap>
    );
  },
});

export const BannerLong = () => {
  return (
    <BannerLongWrap>
      <div class="banner-long-inner">
        <h2>Up To Date </h2>
        <img src={'/src/assets/img/banner/9.png'} alt="" />
      </div>
    </BannerLongWrap>
  );
};

export const BannerCard = () => {
  return (
    <BannerCardWrap>
      <div
        class="banner-card-inner"
        style={{
          backgroundImage: `url("${'/src/assets/img/banner/card-banner-1.png'}")`,
        }}
      >
        <h2>Need More Space?</h2>
        <sdButton size="lg" type="white">
          Buy Storage
        </sdButton>
      </div>
    </BannerCardWrap>
  );
};

export const BannerCard2 = () => {
  return (
    <BannerCardWrap>
      <div
        class="banner-card-inner theme-2"
        style={{
          backgroundImage: `url("${'/src/assets/img/banner/card-banner-2.png'}")`,
        }}
      >
        <h2>Create Sale Report</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
        <sdButton size="lg" type="white">
          Learn More
        </sdButton>
      </div>
    </BannerCardWrap>
  );
};

export const BannerCta = () => {
  return (
    <BannerCtaWrap>
      <div
        class="banner-cta align-center-v"
        style={{
          backgroundImage: `url("${'/src/assets/img/banner/cta-banner-1.png'}")`,
        }}
      >
        <div class="banner-cta__content">
          <h2>Dedicated Support</h2>
          <sdButton size="lg" type="primary">
            Learn More
          </sdButton>
        </div>
      </div>
    </BannerCtaWrap>
  );
};

export const BannerCta2 = () => {
  return (
    <BannerCtaWrap>
      <div
        class="banner-cta align-center-v theme-2"
        style={{
          backgroundImage: `url("${'/src/assets/img/banner/cta-banner-2.png'}")`,
        }}
      >
        <div class="banner-cta__content">
          <h2>Welcome Back Garry Sobars!</h2>
          <p>Lorem ipsum dolor amet, consetetur sadipscing elitr sed diam </p>
          <sdButton size="lg" type="white">
            Learn More
          </sdButton>
        </div>
      </div>
    </BannerCtaWrap>
  );
};

export const Banner8 = () => {
  return (
    <BannerWrapper class="ninjadash-congratulation-banner banner8">
      <sdCards
        bodyStyle={{
          backgroundImage: 'linear-gradient(45deg, #5840FF, #00E4EC)',
          borderRadius: '10px',
          minHeight: '265px',
          display: 'flex',
          alignItems: 'start',
        }}
        headless={true}
      >
        <Figure8 class="ninjadash-congratulation-banner-content theme-wide">
          <img src={'/src/assets/img/banner/4.png'} alt="" />
          <figcaption>
            <h2>Congratulations Jhon!</h2>
            <p>Best Seller on the last month.</p>
            <sdButton size="lg" type="white">
              Learn More
            </sdButton>
          </figcaption>
        </Figure8>
      </sdCards>
    </BannerWrapper>
  );
};

export const Banner9 = () => {
  return (
    <BannerWrapper class="ninjadash-congratulation-banner congratulation-banner--two banner9">
      <sdCards
        bodyStyle={{
          background: '#0A0A0A',
          borderRadius: '10px',
          minHeight: '265px',
          display: 'flex',
          alignItems: 'start',
        }}
        headless={true}
      >
        <Figure8 class="ninjadash-congratulation-banner-content theme-wide">
          <img src={'/src/assets/img/glass-trophy.png'} alt="" />
          <figcaption>
            <h1>Congratulations Danial!</h1>
            <p>Best Seller on the last month.</p>
            <sdButton size="lg" class="banner-feature-btn">
              Learn More
            </sdButton>
          </figcaption>
        </Figure8>
      </sdCards>
    </BannerWrapper>
  );
};

export const PageHeaderBanner = () => {
  return (
    <BannerWrapper class="ninjadash-top-banner">
      <sdCards headless>
        <PageHeader class="theme-wide">
          <div class="banner-feature__content">
            <h2 class="ninjadash-top-banner__title">Hey Danial! Welcome to the Dashboard</h2>
            <p class="ninjadash-top-banner__text">
              There are many variations of passages of Lorem Ipsum available, ut the majority have suffered passages of
              Lorem Ipsum available alteration in some form
            </p>
            <sdButton class="ninjadash-top-banner__action" size="lg" type="primary">
              Learn More
            </sdButton>
          </div>
          <div class="banner-feature__shape">
            <img src={'/src/assets/img/banner-img.png'} alt="" />
          </div>
        </PageHeader>
      </sdCards>
    </BannerWrapper>
  );
};

export default Banner1;
</script>
