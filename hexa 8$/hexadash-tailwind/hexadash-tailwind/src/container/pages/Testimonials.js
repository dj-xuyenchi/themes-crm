/* eslint-disable import/no-unresolved */
import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Swiper from 'react-id-swiper';
import { PageHeader } from '../../components/page-headers/page-headers';
import { TestimonialStyleWrapper } from '../styled';

import 'swiper/scss';
import 'swiper/scss/pagination';

SwiperCore.use([Navigation, Pagination]);
function Testimonials() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Testimonials',
    },
  ];
  const { users } = useSelector((state) => {
    return {
      users: state.users,
    };
  });

  const paramsOne = {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  const paramsTwo = {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  const galleryParams = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="inline-block w-auto h-auto my-1 mx-0 opacity-40 ${className} pagination-thumb"><img class="max-w-[70px] lg:max-w-[40px] ssm:max-w-[25px]" src="${require(`../../${users[index].img}`)}" alt="" /></span>`;
      },
    },
  };
  const paramsThree = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Testimonials"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] ssm:px-[25px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <TestimonialStyleWrapper>
              <div className="testimonial-custom-style">
                <div className="theme-1 bg-white dark:bg-white10 pt-16 px-24 lg:px-14 md:px-10 sm:px-[30px] ssm:px-[20px] xs:px-[15px] pb-[75px] lg:pb-[50px] rounded-tl-[10px] rounded-tr-[10px]">
                  <h2 className="mb-0 text-center text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
                    Testimonial 1
                  </h2>
                  <Swiper {...paramsOne}>
                    {users.map((user, index) => {
                      return (
                        <div key={index + 1} className="p-10 text-center bg-white rounded-lg sm:px-5 dark:bg-white10">
                          <figure className="mb-0">
                            <img
                              className="mx-auto mb-3 sm:max-w-[100px] ssm:max-w-[70px]"
                              src={require(`../../${user.img}`)}
                              alt=""
                            />
                            <figcaption>
                              <h2 className="mb-1 font-medium text-dark dark:text-white87 text-15">{user.name}</h2>
                              <p className="mb-6 font-normal text-body dark:text-white60 text-13 opacity-70">
                                {user.designation}
                              </p>
                              <p className="mb-0 text-base leading-7 text-body dark:text-white60">{user.content}</p>
                            </figcaption>
                          </figure>
                        </div>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="px-24 lg:px-14 md:px-10 sm:px-[15px] xs:px-0 theme-2 pt-16 pb-[75px] lg:pb-[50px]">
                  <h2 className="mb-14 text-center text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
                    Testimonial 2
                  </h2>
                  <Swiper {...paramsTwo}>
                    {users.map((user, index) => {
                      return (
                        <div key={index + 1} className="p-10 text-center bg-white rounded-lg sm:px-5 dark:bg-white10">
                          <span className="absolute ltr:right-10 rtl:left-10 top-10">
                            <img
                              className="sm:max-w-[50px] ssm:max-w-[30px]"
                              src={require(`../../static/img/icon/quote.png`)}
                              alt=""
                            />
                          </span>
                          <div className="flex items-center mb-5 gap-[20px] rtl-true">
                            <img className="max-w-[70px] sm:max-w-[50px]" src={require(`../../${user.img}`)} alt="" />
                            <div className="">
                              <h2 className="mb-1 font-medium text-dark dark:text-white87 text-15">{user.name}</h2>
                              <p className="mb-0 font-normal text-body dark:text-white60 text-13 opacity-70">
                                {user.designation}
                              </p>
                            </div>
                          </div>
                          <div className="ltr:text-left rtl:text-right">
                            <p className="mb-0 text-base leading-7 text-body dark:text-white60">
                              It is a long established fact that a reader will page when looking at its was layout. The
                              point of be distracted by the readable will page when looking at its was layout will page
                              when looking.
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="px-24 lg:px-14 md:px-10 sm:px-[15px] xs:px-0 bg-white theme-3 dark:bg-white10 py-24 lg:py-14 md:py-10">
                  <h2 className="mb-0 text-center text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
                    Testimonial 3
                  </h2>
                  <Swiper {...galleryParams}>
                    {users.map((user, index) => {
                      return (
                        <div key={index + 1} className="px-5 pt-36 lg:pt-32 ssm:pt-28">
                          <div className="mx-auto text-center max-w-[770px]">
                            <div className="testimonial-block__review">
                              <p className="mb-1 text-base leading-7 text-body dark:text-white60">
                                It is a long established fact that a reader will page when looking at its was layout.
                                The point of be distracted by the readable will page when looking at its was layout will
                                page when looking.
                              </p>
                            </div>
                            <div className="">
                              <div className="mt-2">
                                <h2 className="mb-1 text-base font-medium text-dark dark:text-white87">{user.name}</h2>
                                <p className="mb-0 text-sm text-body dark:text-white60 opacity-70">
                                  {user.designation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="px-24 lg:px-14 md:px-10 sm:px-[15px] xs:px-0 theme-4 pt-16 pb-[75px] lg:pb-[50px]">
                  <h2 className="mb-14 text-center text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
                    Testimonial 4
                  </h2>
                  <Swiper {...paramsThree}>
                    {users.map((user, index) => {
                      return (
                        <div key={index + 1}>
                          <div className="max-w-[1000px] 3xl:max-w-[570px] lg:max-w-[450px] p-12 sm:px-5 mx-auto text-center bg-white rounded-lg shadow-lg dark:bg-white10">
                            <div>
                              <img className="mx-auto mb-6 max-w-100" src={require(`../../${user.img}`)} alt="" />
                            </div>
                            <div>
                              <p className="mb-0 text-base leading-7 text-body dark:text-white60">
                                It is a long established fact that a reader will page when looking at its was layout.
                                The point of be distracted by the readable will page when looking at its was layout will
                                page when looking.
                              </p>
                            </div>
                            <div className="mt-4">
                              <h2 className="mb-1 font-medium text-dark dark:text-white87 text-15">{user.name}</h2>
                              <p className="mb-0 font-normal text-body dark:text-white60 text-13 opacity-70">
                                {user.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </TestimonialStyleWrapper>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Testimonials;
