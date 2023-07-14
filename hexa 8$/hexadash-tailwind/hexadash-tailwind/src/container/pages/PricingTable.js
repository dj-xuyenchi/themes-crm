import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';

import Heading from '../../components/heading/heading';
import { List } from '../../components/pricing/pricing';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

function PricingTable() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Pricing Table',
    },
  ];
  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Pricing Table"
        className="flex justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={25}>
          <Col xxl={6} lg={8} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 p-7 mb-7 shadow-pricing dark:shadow-none rounded-10">
              <span
                className="inline-block bg-deepBG dark:bg-white10 h-8 px-6 py-1.5 mb-8 text-dark dark:text-white87 text-13 font-medium rounded-2xl"
                type="dark"
              >
                Free Forever
              </span>
              <Heading as="h3" className="mb-2 text-2xl font-semibold text-dark dark:text-white87">
                Free
              </Heading>
              <span className="font-medium text-body dark:text-white60 text-13">For Individuals</span>
              <div className="mt-6 mb-4 min-h-[210px]">
                <List text="100MB File Space" />
                <List text="2 Active Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
              </div>
              <Button
                size="default"
                type="white"
                className="text-sm font-semibold bg-white rounded-md dark:text-white87 dark:bg-white10 h-11 px-7 border-regular dark:border-white10 dark:hover:border-transparent"
              >
                Current Plan
              </Button>
            </div>
          </Col>
          <Col xxl={6} lg={8} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 p-7 mb-7 shadow-pricing dark:shadow-none rounded-10">
              <span
                className="inline-block bg-primary-transparent h-8 px-6 py-1.5 mb-8 text-primary text-13 font-medium rounded-2xl"
                type="primary"
              >
                Business
              </span>
              <Heading as="h3" className="relative bottom-1.5 mb-0 text-dark dark:text-white87 text-4xl font-semibold">
                <sup className="relative text-base font-semibold text-gray-400 -top-3">$</sup>19
                <sub className="relative bottom-0 ml-2.5 text-light dark:text-white60 text-13 font-normal">
                  Per month
                </sub>
              </Heading>
              <span className="font-medium text-body dark:text-white60 text-13">For 2 Users</span>
              <div className="mt-6 mb-4 min-h-[210px]">
                <List text="100GB File Space" />
                <List text="300 Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
                <List text="Custom Post Types" />
              </div>
              <Button
                size="default"
                type="primary"
                className="font-semibold rounded-md bg-primary hover:bg-primary-hover dark:hover:border-transparent h-11 px-7"
              >
                Get Started
              </Button>
            </div>
          </Col>
          <Col xxl={6} lg={8} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 p-7 mb-7 shadow-pricing dark:shadow-none rounded-10">
              <span
                className="inline-block bg-secondary-transparent h-8 px-6 py-1.5 mb-8 text-secondary text-13 font-medium rounded-2xl"
                type="secondary"
              >
                Basic Plan
              </span>
              <Heading as="h3" className="relative bottom-1.5 mb-0 text-dark dark:text-white87 text-4xl font-semibold">
                <sup className="relative text-base font-semibold text-gray-400 -top-3">$</sup>39
                <sub className="relative bottom-0 ml-2.5 text-light dark:text-white60 text-13 font-normal">
                  Per month
                </sub>
              </Heading>
              <span className="font-medium text-body dark:text-white60 text-13">For 10 Users</span>
              <div className="mt-6 mb-4 min-h-[210px]">
                <List text="100GB File Space" />
                <List text="300 Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
                <List text="Custom Post Types" />
                <List text="Subtasks" />
              </div>
              <Button
                size="default"
                type="secondary"
                className="font-semibold text-white rounded-md bg-secondary dark:border-secondary hover:bg-secondary-hover dark:hover:border-transparent dark:text-white87 h-11 px-7"
              >
                Get Started
              </Button>
            </div>
          </Col>
          <Col xxl={6} lg={8} sm={12} xs={24}>
            <div className="bg-white dark:bg-white10 p-7 mb-7 shadow-pricing dark:shadow-none rounded-10">
              <span
                className="inline-block bg-success-transparent h-8 px-6 py-1.5 mb-8 text-success text-13 font-medium rounded-2xl"
                type="success"
              >
                Enterprise
              </span>
              <Heading as="h3" className="relative bottom-1.5 mb-0 text-dark dark:text-white87 text-4xl font-semibold">
                <sup className="relative text-base font-semibold text-gray-400 -top-3">$</sup>79
                <sub className="relative bottom-0 ml-2.5 text-light dark:text-white60 text-13 font-normal">
                  Per month
                </sub>
              </Heading>
              <span className="font-medium text-body dark:text-white60 text-13">For 50 Users</span>
              <div className="mt-6 mb-4 min-h-[210px]">
                <List text="100GB File Space" />
                <List text="300 Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
                <List text="Custom Post Types" />
                <List text="Subtasks" />
              </div>
              <Button
                size="default"
                type="success"
                className="font-semibold text-white rounded-md bg-success dark:border-success hover:bg-secondary-hover dark:hover:border-transparent dark:text-white87 h-11 px-7"
              >
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xs={24}>
            <Cards headless className="pt-3 pb-8 ltr:pl-3 rtl:pr-3">
              <Row gutter={25}>
                <Col xxl={6} lg={8} sm={12} xs={24}>
                  <div className="bg-white dark:bg-white10 p-7 mb-7 shadow-pricing dark:shadow-none rounded-10">
                    <span
                      className="inline-block bg-deepBG dark:bg-white10 h-8 px-6 py-1.5 mb-8 text-dark dark:text-white87 text-13 font-medium rounded-2xl"
                      type="dark"
                    >
                      Free Forever
                    </span>
                    <Heading as="h3" className="mb-2 text-2xl font-semibold text-dark dark:text-white87">
                      Free
                    </Heading>
                    <span className="font-medium text-body dark:text-white60 text-13">For Individuals</span>
                    <div className="mt-6 mb-4 min-h-[210px]">
                      <List text="100MB File Space" />
                      <List text="2 Active Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                    </div>
                    <Button
                      size="default"
                      type="white"
                      className="font-semibold bg-white rounded-md dark:bg-white10 dark:text-white87 h-11 px-7 dark:border-white10 dark:hover:border-transparent"
                    >
                      Current Plan
                    </Button>
                  </div>
                </Col>
                <Col xxl={6} lg={8} sm={12} xs={24}>
                  <div className="bg-white dark:bg-white10 p-7 mb-7 shadow-pricing dark:shadow-none rounded-10">
                    <span
                      className="inline-block bg-primary-transparent h-8 px-6 py-1.5 mb-8 text-primary text-13 font-medium rounded-2xl"
                      type="primary"
                    >
                      Business
                    </span>
                    <Heading
                      as="h3"
                      className="relative bottom-1.5 mb-0 text-dark dark:text-white87 text-4xl font-semibold"
                    >
                      <sup className="relative text-base font-semibold text-gray-400 -top-3">$</sup>19
                      <sub className="relative bottom-0 ml-2.5 text-light dark:text-white60 text-13 font-normal">
                        Per month
                      </sub>
                    </Heading>
                    <span className="font-medium text-body dark:text-white60 text-13">For 2 Users</span>
                    <div className="mt-6 mb-4 min-h-[210px]">
                      <List text="100GB File Space" />
                      <List text="300 Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                      <List text="Custom Post Types" />
                    </div>
                    <Button
                      size="default"
                      type="primary"
                      className="font-semibold rounded-md bg-primary hover:bg-primary-hover dark:hover:border-transparent h-11 px-7"
                    >
                      Get Started
                    </Button>
                  </div>
                </Col>
                <Col xxl={6} lg={8} sm={12} xs={24}>
                  <div className="bg-white dark:bg-white10 p-7 mb-7 shadow-pricing dark:shadow-none rounded-10">
                    <span
                      className="inline-block bg-secondary-transparent h-8 px-6 py-1.5 mb-8 text-secondary text-13 font-medium rounded-2xl"
                      type="secondary"
                    >
                      Basic Plan
                    </span>
                    <Heading
                      as="h3"
                      className="relative bottom-1.5 mb-0 text-dark dark:text-white87 text-4xl font-semibold"
                    >
                      <sup className="relative text-base font-semibold text-gray-400 -top-3">$</sup>39
                      <sub className="relative bottom-0 ml-2.5 text-light dark:text-white60 text-13 font-normal">
                        Per month
                      </sub>
                    </Heading>
                    <span className="font-medium text-body dark:text-white60 text-13">For 10 Users</span>
                    <div className="mt-6 mb-4 min-h-[210px]">
                      <List text="100GB File Space" />
                      <List text="300 Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                      <List text="Custom Post Types" />
                      <List text="Subtasks" />
                    </div>
                    <Button
                      size="default"
                      type="secondary"
                      className="font-semibold text-white rounded-md bg-secondary dark:border-secondary hover:bg-secondary-hover dark:hover:border-transparent dark:text-white87 h-11 px-7"
                    >
                      Get Started
                    </Button>
                  </div>
                </Col>
                <Col xxl={6} lg={8} sm={12} xs={24}>
                  <div className="bg-white dark:bg-white10 p-7 mb-7 shadow-pricing dark:shadow-none rounded-10">
                    <span
                      className="inline-block bg-success-transparent h-8 px-6 py-1.5 mb-8 text-success text-13 font-medium rounded-2xl"
                      type="success"
                    >
                      Enterprise
                    </span>
                    <Heading
                      as="h3"
                      className="relative bottom-1.5 mb-0 text-dark dark:text-white87 text-4xl font-semibold"
                    >
                      <sup className="relative text-base font-semibold text-gray-400 -top-3">$</sup>79
                      <sub className="relative bottom-0 ml-2.5 text-light dark:text-white60 text-13 font-normal">
                        Per month
                      </sub>
                    </Heading>
                    <span className="font-medium text-body dark:text-white60 text-13">For 50 Users</span>
                    <div className="mt-6 mb-4 min-h-[210px]">
                      <List text="100GB File Space" />
                      <List text="300 Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                      <List text="Custom Post Types" />
                      <List text="Subtasks" />
                    </div>
                    <Button
                      size="default"
                      type="success"
                      className="font-semibold text-white rounded-md bg-success dark:border-success hover:bg-success-hover dark:hover:border-transparent dark:text-white87 h-11 px-7"
                    >
                      Get Started
                    </Button>
                  </div>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default PricingTable;
