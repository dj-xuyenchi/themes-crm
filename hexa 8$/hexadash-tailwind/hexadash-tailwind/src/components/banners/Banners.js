import { Carousel, Col, Row } from 'antd';
import React from 'react';
import propTypes from 'prop-types';
import { Button } from '../buttons/buttons';
import { Cards } from '../cards/frame/cards-frame';
import { BannerCardStyleWrap } from '../../container/styled';

function Banner1() {
  return (
    <div className="mb-[72px]">
      <div className="relative bg-white dark:bg-white10 min-h-[270px] pt-10 px-[30px] pb-[70px] rounded-[10px]">
        <h2 className="mb-3 text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
          15 Days Free Trail
        </h2>
        <p className="mb-4 font-normal text-body dark:text-white60 text-15">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        </p>
        <Button size="small" type="primary" className="px-5 bg-transparent text-primary h-9">
          Start
        </Button>
      </div>
    </div>
  );
}

function Banner2() {
  return (
    <div className="mb-[72px]">
      <div className="relative bg-[#5f63f2] min-h-[270px] pt-11 px-[25px] pb-[55px] rounded-10">
        <div className="mb-0">
          <img
            className="absolute bottom-2.5 ltr:right-6 rtl:left-6 3xl:max-w-[150px]"
            src={require('../../static/img/banner/1.png')}
            alt=""
          />
          <figcaption>
            <h2 className="mb-3 text-white dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
              Upgrade your plan
            </h2>
            <p className="mb-4 font-normal text-white dark:text-white87 opacity-70 text-15">
              Lorem ipsum dolor sit amet
            </p>
            <Button
              size="large"
              type="white"
              className="px-5 mt-6 text-sm font-semibold border-white text-primary dark:text-white hover:border-white dark:border-dark hover:dark:border-dark h-11"
            >
              Upgrade
            </Button>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

function Banner3() {
  return (
    <div className="mb-[72px]">
      <div className="relative bg-[#5f63f2] min-h-[270px] pt-10 px-[30px] pb-[70px] rounded-[10px]">
        <div>
          <img
            className="absolute bottom-2.5 ltr:right-6 rtl:left-6 3xl:max-w-[150px]"
            src={require('../../static/img/banner/2.png')}
            alt=""
          />
          <figcaption>
            <h2 className="mb-3 text-white dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
              Earn More Money
            </h2>
            <Button
              size="large"
              ype="white"
              className="px-5 mt-6 text-sm font-semibold border-none dark:bg-dark text-primary dark:text-white h-11"
            >
              Learn More
            </Button>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

function Banner4() {
  return (
    <div className="mb-[72px]">
      <div className="relative bg-[#272b41] dark:bg-white10 min-h-[270px] pt-10 px-[30px] pb-[70px] rounded-[10px]">
        <div>
          <img
            className="absolute bottom-2.5 ltr:right-0 rtl:left-0 3xl:max-w-[150px]"
            src={require('../../static/img/banner/3.png')}
            alt=""
          />
          <figcaption>
            <h2 className="mb-3 text-white dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
              Win Your Bonus
            </h2>
            <p className="mb-4 font-normal text-white dark:text-white87 opacity-70 text-15">Weekly performance bonus</p>
            <Button
              size="large"
              type="white"
              className="px-5 mt-6 text-sm font-semibold border-white text-primary dark:text-white hover:border-white dark:border-dark hover:dark:border-dark h-11"
            >
              Learn More
            </Button>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

function Banner5() {
  return (
    <div className="mb-[72px]">
      <div className="relative bg-[#5f63f2] min-h-[270px] pt-10 px-[30px] pb-[70px] rounded-[10px]">
        <div>
          <img
            className="absolute ltr:right-0 rtl:left-0 bottom-5 3xl:max-w-[150px]"
            src={require('../../static/img/banner/4.png')}
            alt=""
          />
          <figcaption>
            <h2 className="mb-3 text-2xl font-semibold text-white dark:text-white87">Congratulations Jhon!</h2>
            <p className="mb-4 font-normal text-white dark:text-white87 opacity-70 text-15">
              Best Seller on the last month.
            </p>
            <Button
              size="large"
              type="white"
              className="px-5 mt-6 text-sm font-semibold border-white text-primary dark:text-white hover:border-white dark:border-dark hover:dark:border-dark h-11"
            >
              Learn More
            </Button>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

function Banner8() {
  return (
    <div className="relative bg-dark dark:bg-white10 min-h-[360px] p-[25px] rounded-[10px]">
      <img
        className="absolute ltr:right-0 rtl:left-0 bottom-0 w-[200px] 3xl:max-w-[150px]"
        src={require('../../static/img/banner/10.png')}
        alt=""
      />
      <figcaption>
        <h2 className="mb-3 text-3xl font-bold text-white dark:text-white87">Congratulations Jhon!</h2>
        <p className="mb-4 font-normal text-white dark:text-white87 opacity-70 text-15">
          Best Seller on the last month.
        </p>
        <Button
          size="small"
          type="white"
          className="px-5 text-[15px] font-semibold bg-body hover:bg-light text-white h-11 border-none"
        >
          Learn More
        </Button>
      </figcaption>
    </div>
  );
}

function Banner9() {
  return (
    <div className="relative bg-gradient-to-tr from-[#5840ff] via-[#0082ff] to-[#00caff] min-h-[350px] pt-10 px-[30px] pb-[70px] rounded-[10px]">
      <div className="">
        <img
          className="absolute ltr:right-0 rtl:left-0 bottom-0 w-[200px] 3xl:max-w-[150px]"
          src={require('../../static/img/trophy-2.png')}
          alt=""
        />
        <figcaption>
          <h2 className="mb-3 text-3xl font-bold text-white dark:text-white87">Congratulations Jhon!</h2>
          <p className="mb-4 font-normal text-white dark:text-white87 opacity-70 text-15">
            Best Seller on the last month.
          </p>
          <Button
            size="large"
            type="white"
            className="px-5 text-[15px] font-semibold bg-white hover:bg-white60 text-primary h-11 border-none"
          >
            Learn More
          </Button>
        </figcaption>
      </div>
    </div>
  );
}

function Banner6() {
  return (
    <div className="mb-[72px]">
      <Cards
        bodyStyle={{
          background: `url(${require('../../static/img/banner/5.png')})`,
          backgroundSize: 'cover',
          borderRadius: '10px',
          minHeight: '270px',
          display: 'flex',
          direction: 'ltr',
          alignItems: 'center',
          backgroundPosition: 'center bottom',
        }}
        headless
      >
        <div>
          <img src={require('../../static/img/banner/badge.svg')} alt="" />
          <figcaption className="pb-8 pt-9 px-7">
            <h2 className="mb-3 text-2xl font-semibold text-white dark:text-white87">Up to 50 OFF</h2>
            <Button
              size="small"
              type="primary"
              className="px-5 text-sm font-semibold bg-transparent text-danger h-9 border-danger"
            >
              Buy Now
            </Button>
          </figcaption>
        </div>
      </Cards>
    </div>
  );
}

function Banner7() {
  return (
    <div className="mb-[72px]">
      <div className="relative bg-white dark:bg-white10 min-h-[270px] pt-10 px-[30px] sm:px-[15px] pb-[70px] rounded-[10px]">
        <div className="flex items-center gap-4 mb-0 sm:flex-col">
          <img src={require('../../static/img/banner/6.png')} alt="" />
          <figcaption className="sm:text-center">
            <h2 className="mb-2.5 text-dark dark:text-white87 text-2xl font-semibold">Subscribe to our newsletter</h2>
            <p className="mb-4 font-normal text-body dark:text-white60 text-15">
              Lorem ipsum dolor sit amet, consetetur{' '}
            </p>
            <Button
              size="small"
              type="secondary"
              className="px-5 text-sm font-semibold bg-transparent text-secondary h-11 border-secondary"
            >
              Subscribe Now
            </Button>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

function BannerCarousel() {
  return (
    <BannerCardStyleWrap>
      <div className="relative pb-16 mb-8 bg-primary pt-14 rounded-10">
        <Carousel autoplay>
          <div className="flex flex-col items-center justify-center">
            <div className="banner-single__img">
              <img src={require('../../static/img/banner/8.png')} alt="" />
            </div>
            <div className="text-center mt-7">
              <h3 className="mb-2 text-2xl font-semibold text-white dark:text-white87">Achievements</h3>
              <p className="mb-10 font-normal text-white dark:text-white87 text-15">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
          {/* End of /.banner-signle */}
          <div className="flex flex-col items-center justify-center">
            <div className="banner-single__img">
              <img src={require('../../static/img/banner/8.png')} alt="" />
            </div>
            <div className="text-center mt-7">
              <h3 className="mb-2 text-2xl font-semibold text-white dark:text-white87">Achievements</h3>
              <p className="mb-10 font-normal text-white dark:text-white87 text-15">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
          {/* End of /.banner-signle */}
          <div className="flex flex-col items-center justify-center">
            <div className="banner-single__img">
              <img src={require('../../static/img/banner/8.png')} alt="" />
            </div>
            <div className="text-center mt-7">
              <h3 className="mb-2 text-2xl font-semibold text-white dark:text-white87">Achievements</h3>
              <p className="mb-10 font-normal text-white dark:text-white87 text-15">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
          {/* End of /.banner-signle */}
        </Carousel>
      </div>
    </BannerCardStyleWrap>
  );
}

function BannerLong() {
  return (
    <div className="mb-8">
      <div className="px-5 py-8 text-center bg-white dark:bg-white10 rounded-10">
        <h2 className="font-semibold mb-7 text-dark dark:text-white87 text-22">Up To Date </h2>
        <img className="mx-auto" src={require('../../static/img/banner/9.png')} alt="" />
      </div>
    </div>
  );
}

function BannerCard() {
  return (
    <div className="mb-8">
      <div
        className="pt-9 px-10 pb-10 rounded-[10px]"
        style={{
          backgroundImage: `url("${require('../../static/img/banner/card-banner-1.png')}")`,
          minHeight: '450px',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <h2 className="mb-5 text-white dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
          Need More Space?
        </h2>
        <Button
          size="large"
          type="white"
          className="px-5 text-sm font-semibold bg-white border border-white rounded dark:bg-dark hover:border-white dark:border-dark hover:dark:border-dark text-primary dark:text-white h-11"
        >
          Buy Storage
        </Button>
      </div>
    </div>
  );
}

function BannerCard2() {
  return (
    <div className="mb-8">
      <div
        className="pt-9 px-10 pb-10 rounded-[10px]"
        style={{
          backgroundImage: `url("${require('../../static/img/banner/card-banner-2.png')}")`,
          minHeight: '450px',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <h2 className="mb-5 text-white dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
          Create Sale Report
        </h2>
        <p className="mb-5 font-normal text-white dark:text-white87 text-15 opacity-70">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        </p>
        <Button
          size="large"
          type="white"
          className="px-5 text-sm font-semibold bg-white border border-white rounded dark:bg-dark hover:border-white dark:border-dark hover:dark:border-dark text-primary dark:text-white h-11"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

function BannerCta() {
  return (
    <div className="mb-8 rounded-10">
      <div
        className="flex justify-end items-center text-center min-h-[270px] bg-cover rounded-[10px]"
        style={{
          backgroundImage: `url("${require('../../static/img/banner/cta-banner-1.png')}")`,
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="py-8 ltr:pr-8 rtl:pl-8">
          <h2 className="mb-3 text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
            Dedicated Support
          </h2>
          <Button
            size="large"
            type="white"
            className="px-5 mt-6 text-sm font-semibold text-white border rounded bg-primary dark:text-white87 h-11 border-primary"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

function BannerCta2() {
  return (
    <div className="mb-8 rounded-10">
      <div
        className="flex items-center min-h-[270px] bg-cover rounded-[10px]"
        style={{ backgroundImage: `url("${require('../../static/img/banner/cta-banner-2.png')}")` }}
      >
        <div className="py-8 ltr:pl-8 rtl:pr-8">
          <h2 className="mb-3 text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
            Welcome Back Garry Sobars!
          </h2>
          <p className="text-white/70 dark:text-white60">
            Lorem ipsum dolor amet, consetetur sadipscing elitr sed diam{' '}
          </p>
          <Button
            size="large"
            type="dark"
            className="px-5 mt-6 text-sm font-semibold bg-white border border-white rounded hover:border-white dark:border-dark hover:dark:border-dark dark:bg-dark text-dark dark:text-white h-11"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

function PageHeaderBanner({ type, title, subtitle }) {
  return (
    <div
      className={type === 'corporate' ? 'bg-white dark:bg-white10 rounded-10' : 'bg-white dark:bg-white10 rounded-10'}
    >
      <div>
        <Row gutter={25} className="items-center">
          <Col xs={24} sm={24} md={24} lg={24} xl={10}>
            <figcaption className="p-[40px] ssm:px-[25px]">
              <h2 className="text-dark dark:text-white87 text-[30px] sm:text-[26px] font-semibold mb-[12px]">
                {title}
              </h2>
              <p className="text-dark dark:text-white87 text-[16px] mb-[25px]">{subtitle}</p>
              <Button
                size="large"
                type="primary"
                className="bg-primary text-white h-[50px] inline-flex items-center justify-center px-[28px] font-normal text-[15px]"
              >
                Learn More
              </Button>
            </figcaption>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={14} className="flex justify-center">
            {type === 'corporate' ? (
              <img src={require('../../static/img/corporate.png')} alt="HexaDash Admin Template" />
            ) : (
              <img src={require('../../static/img/banner/header-banner.png')} alt="HexaDash Admin Template" />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

PageHeaderBanner.propTypes = {
  type: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
};

PageHeaderBanner.defaultProps = {
  type: '',
  title: 'Welcome To Demo Dashboard',
  subtitle:
    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
};

export {
  PageHeaderBanner,
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7,
  Banner8,
  Banner9,
  BannerCarousel,
  BannerLong,
  BannerCard,
  BannerCard2,
  BannerCta,
  BannerCta2,
};
