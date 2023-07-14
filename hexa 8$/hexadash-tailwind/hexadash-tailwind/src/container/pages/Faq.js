import { React, useState } from 'react';
import { Row, Col, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import UilSmile from '@iconscout/react-unicons/icons/uil-smile';
import UilFrown from '@iconscout/react-unicons/icons/uil-frown';
import { PageHeader } from '../../components/page-headers/page-headers';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { GlobalUtilityStyle, FaqWrapper } from '../styled';

const { Panel } = Collapse;

function Faq() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Faqs',
    },
  ];

  const [activeValue, setActiveValue] = useState('application');

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Faqs"
        className="flex justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <div className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} sm={11}>
            <Row>
              <Col xs={24}>
                <div className="mb-6">
                  <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                    <span
                      className="bg-regularBG dark:bg-regularBGdark text-light dark:text-white60 px-5 py-1 text-[13px] rounded-2xl"
                      type="light"
                    >
                      Browse by Topic
                    </span>
                    <ul className="mt-8 mb-0">
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            setActiveValue('application');
                          }}
                          className={`relative inline-block w-full py-3 ltr:pl-7 rtl:pr-7 text-body dark:text-white60 text-[15px] font-medium before:absolute before:w-0.5 before:h-full before:rounded-10 before:bg-primary before:top-0 after:absolute after:w-2 after:h-2 after:top-1/2 after:-translate-y-2/4 after:rounded-full after:bg-primary ${
                            activeValue === 'application'
                              ? 'before:opacity-1 ltr:before:-left-4 rtl:before:-right-4 after:bg-opacity-1 ltr:after:left-[5px] rtl:after:right-[5px]'
                              : 'before:opacity-0 ltr:before:-left-6 rtl:before:-right-6 after:bg-opacity-[0.314] ltr:after:left-0 rtl:after:right-0'
                          }`}
                        >
                          Using Applications
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            setActiveValue('element');
                          }}
                          className={`relative inline-block w-full py-3 ltr:pl-7 rtl:pr-7 text-body dark:text-white60 text-[15px] font-medium before:absolute before:w-0.5 before:h-full before:rounded-10 before:bg-secondary before:top-0 after:absolute after:w-2 after:h-2 after:top-1/2 after:-translate-y-2/4 after:rounded-full after:bg-secondary ${
                            activeValue === 'element'
                              ? 'before:opacity-1 ltr:before:-left-4 rtl:before:-right-4 after:bg-opacity-1 ltr:after:left-[5px] rtl:after:right-[5px]'
                              : 'before:opacity-0 ltr:before:-left-6 rtl:before:-right-6 after:bg-opacity-[0.314] ltr:after:left-0 rtl:after:right-0'
                          }`}
                        >
                          UI Elements
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            setActiveValue('component');
                          }}
                          className={`relative inline-block w-full py-3 ltr:pl-7 rtl:pr-7 text-body dark:text-white60 text-[15px] font-medium before:absolute before:w-0.5 before:h-full before:rounded-10 before:bg-success before:top-0 after:absolute after:w-2 after:h-2 after:top-1/2 after:-translate-y-2/4 after:rounded-full after:bg-success ${
                            activeValue === 'component'
                              ? 'before:opacity-1 ltr:before:-left-4 rtl:before:-right-4 after:bg-opacity-1 ltr:after:left-[5px] rtl:after:right-[5px]'
                              : 'before:opacity-0 ltr:before:-left-6 rtl:before:-right-6 after:bg-opacity-[0.314] ltr:after:left-0 rtl:after:right-0'
                          }`}
                        >
                          Components
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            setActiveValue('process');
                          }}
                          className={`relative inline-block w-full py-3 ltr:pl-7 rtl:pr-7 text-body dark:text-white60 text-[15px] font-medium before:absolute before:w-0.5 before:h-full before:rounded-10 before:bg-warning before:top-0 after:absolute after:w-2 after:h-2 after:top-1/2 after:-translate-y-2/4 after:rounded-full after:bg-warning ${
                            activeValue === 'process'
                              ? 'before:opacity-1 ltr:before:-left-4 rtl:before:-right-4 after:bg-opacity-1 ltr:after:left-[5px] rtl:after:right-[5px]'
                              : 'before:opacity-0 ltr:before:-left-6 rtl:before:-right-6 after:bg-opacity-[0.314] ltr:after:left-0 rtl:after:right-0'
                          }`}
                        >
                          Build Process
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            setActiveValue('policy');
                          }}
                          className={`relative inline-block w-full py-3 ltr:pl-7 rtl:pr-7 text-body dark:text-white60 text-[15px] font-medium before:absolute before:w-0.5 before:h-full before:rounded-10 before:bg-info before:top-0 after:absolute after:w-2 after:h-2 after:top-1/2 after:-translate-y-2/4 after:rounded-full after:bg-info ${
                            activeValue === 'policy'
                              ? 'before:opacity-1 ltr:before:-left-4 rtl:before:-right-4 after:bg-opacity-1 ltr:after:left-[5px] rtl:after:right-[5px]'
                              : 'before:opacity-0 ltr:before:-left-6 rtl:before:-right-6 after:bg-opacity-[0.314] ltr:after:left-0 rtl:after:right-0'
                          }`}
                        >
                          Support Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            setActiveValue('billing');
                          }}
                          className={`relative inline-block w-full py-3 ltr:pl-7 rtl:pr-7 text-body dark:text-white60 text-[15px] font-medium before:absolute before:w-0.5 before:h-full before:rounded-10 before:bg-danger before:top-0 after:absolute after:w-2 after:h-2 after:top-1/2 after:-translate-y-2/4 after:rounded-full after:bg-danger ${
                            activeValue === 'billing'
                              ? 'before:opacity-1 ltr:before:-left-4 rtl:before:-right-4 after:bg-opacity-1 ltr:after:left-[5px] rtl:after:right-[5px]'
                              : 'before:opacity-0 ltr:before:-left-6 rtl:before:-right-6 after:bg-opacity-[0.314] ltr:after:left-0 rtl:after:right-0'
                          }`}
                        >
                          Accounts & Billing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col xs={24}>
                <div>
                  <div className="bg-white dark:bg-white10 p-[25px] sm:mb-[25px] rounded-[10px]">
                    <figure className="mx-auto mb-7">
                      <img className="w-full" src={require('../../static/img/pages/support.svg').default} alt="" />
                    </figure>
                    <figcaption className="text-center">
                      <Heading as="h5" className="mb-4 text-lg font-medium text-dark dark:text-white87">
                        Not finding the help you need?
                      </Heading>
                      <Button size="default" type="primary" className="text-sm font-semibold h-11 px-7 rounded-6">
                        Contact Support
                      </Button>
                    </figcaption>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xxl={18} lg={16} md={14} sm={13}>
            <GlobalUtilityStyle>
              <FaqWrapper>
                <div className="bg-white dark:bg-white10 p-[25px] text-xl rounded-[10px]">
                  <Heading as="h5" className="mb-6 text-xl font-medium text-dark dark:text-white87">
                    Using Applications
                  </Heading>
                  <Collapse
                    bordered="false"
                    defaultActiveKey={['1']}
                    className="bg-transparent border-none"
                    expandIcon={({ isActive }) => (isActive ? <UilMinus /> : <UilPlus />)}
                  >
                    <Panel
                      header="How long does it take to download updates?"
                      key="1"
                      className="mb-1 font-medium ant-card-custom-style text-dark dark:text-white87 text-15 border-regular dark:border-white10 rounded-6 [&>.ant-collapse-content]:border-none"
                    >
                      <div className="-mx-4 -mb-4 px-6 pt-5 pb-[30px] border-t dark:border-white10">
                        <p className="font-normal mb-9 text-body dark:text-white60 text-15">
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.Brunch
                          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                          shoreditch et.
                        </p>
                        <Heading as="h4" className="mb-3 text-sm font-medium">
                          Was this article helpful?
                        </Heading>
                        <div>
                          <Button
                            outlined
                            type="success"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-success border border-success bg-transparent"
                          >
                            <UilSmile className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            Yes
                          </Button>
                          <Button
                            outlined
                            type="warning"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-warning border border-warning bg-transparent"
                          >
                            <UilFrown className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            No
                          </Button>
                        </div>
                      </div>
                    </Panel>
                    <Panel
                      header="How to use SCSS variables to build custom color?"
                      key="2"
                      className="mb-1 font-medium ant-card-custom-style text-dark dark:text-white87 text-15 border-regular dark:border-white10 rounded-6 [&>.ant-collapse-content]:border-none"
                    >
                      <div className="-mx-4 -mb-4 px-6 pt-5 pb-[30px] border-t dark:border-white10">
                        <p className="font-normal mb-9 text-body dark:text-white60 text-15">
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.Brunch
                          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                          shoreditch et.
                        </p>
                        <Heading as="h4" className="mb-3 text-sm font-medium">
                          Was this article helpful?
                        </Heading>
                        <div className="mb-3.5">
                          <Button
                            outlined
                            type="success"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-success border border-success bg-transparent"
                          >
                            <UilSmile className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            Yes
                          </Button>
                          <Button
                            outlined
                            type="warning"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-warning border border-warning bg-transparent"
                          >
                            <UilFrown className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            No
                          </Button>
                        </div>
                      </div>
                    </Panel>
                    <Panel
                      header="How long does it take to download complete?"
                      key="4"
                      className="mb-1 font-medium ant-card-custom-style text-dark dark:text-white87 text-15 border-regular dark:border-white10 rounded-6 [&>.ant-collapse-content]:border-none"
                    >
                      <div className="-mx-4 -mb-4 px-6 pt-5 pb-[30px] border-t dark:border-white10">
                        <p className="font-normal mb-9 text-body dark:text-white60 text-15">
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.Brunch
                          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                          shoreditch et.
                        </p>
                        <Heading as="h4" className="mb-3 text-sm font-medium">
                          Was this article helpful?
                        </Heading>
                        <div className="mb-3.5">
                          <Button
                            outlined
                            type="success"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-success border border-success bg-transparent"
                          >
                            <UilSmile className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            Yes
                          </Button>
                          <Button
                            outlined
                            type="warning"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-warning border border-warning bg-transparent"
                          >
                            <UilFrown className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            No
                          </Button>
                        </div>
                      </div>
                    </Panel>
                    <Panel
                      header="What is the flex layout?"
                      key="4"
                      className="mb-1 font-medium ant-card-custom-style text-dark dark:text-white87 text-15 border-regular dark:border-white10 rounded-6 [&>.ant-collapse-content]:border-none"
                    >
                      <div className="-mx-4 -mb-4 px-6 pt-5 pb-[30px] border-t dark:border-white10">
                        <p className="font-normal mb-9 text-body dark:text-white60 text-15">
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.Brunch
                          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                          shoreditch et.
                        </p>
                        <Heading as="h4" className="mb-3 text-sm font-medium">
                          Was this article helpful?
                        </Heading>
                        <div className="mb-3.5">
                          <Button
                            outlined
                            type="success"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-success border border-success bg-transparent"
                          >
                            <UilSmile className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            Yes
                          </Button>
                          <Button
                            outlined
                            type="warning"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-warning border border-warning bg-transparent"
                          >
                            <UilFrown className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            No
                          </Button>
                        </div>
                      </div>
                    </Panel>
                    <Panel
                      header="How long does it take to download updates?"
                      key="5"
                      className="mb-1 font-medium ant-card-custom-style text-dark dark:text-white87 text-15 border-regular dark:border-white10 rounded-6 [&>.ant-collapse-content]:border-none"
                    >
                      <div className="-mx-4 -mb-4 px-6 pt-5 pb-[30px] border-t dark:border-white10">
                        <p className="font-normal mb-9 text-body dark:text-white60 text-15">
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.Brunch
                          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                          shoreditch et.
                        </p>
                        <Heading as="h4" className="mb-3 text-sm font-medium">
                          Was this article helpful?
                        </Heading>
                        <div className="mb-3.5">
                          <Button
                            outlined
                            type="success"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-success border border-success bg-transparent"
                          >
                            <UilSmile className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            Yes
                          </Button>
                          <Button
                            outlined
                            type="warning"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-warning border border-warning bg-transparent"
                          >
                            <UilFrown className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            No
                          </Button>
                        </div>
                      </div>
                    </Panel>
                    <Panel
                      header="Where to buy this UI dashboard?"
                      key="6"
                      className="mb-1 font-medium ant-card-custom-style text-dark dark:text-white87 text-15 border-regular dark:border-white10 rounded-6 [&>.ant-collapse-content]:border-none"
                    >
                      <div className="-mx-4 -mb-4 px-6 pt-5 pb-[30px] border-t dark:border-white10">
                        <p className="font-normal mb-9 text-body dark:text-white60 text-15">
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.Brunch
                          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                          shoreditch et.
                        </p>
                        <Heading as="h4" className="mb-3 text-sm font-medium">
                          Was this article helpful?
                        </Heading>
                        <div className="mb-3.5">
                          <Button
                            outlined
                            type="success"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-success border border-success bg-transparent"
                          >
                            <UilSmile className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            Yes
                          </Button>
                          <Button
                            outlined
                            type="warning"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-warning border border-warning bg-transparent"
                          >
                            <UilFrown className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            No
                          </Button>
                        </div>
                      </div>
                    </Panel>
                    <Panel
                      header="How long does it take to download updates?"
                      key="7"
                      className="mb-1 font-medium ant-faq-item-border-regular ant-card-custom-style text-dark dark:text-white87 text-15 rounded-6"
                    >
                      <div className="-mx-4 -mb-4 px-6 pt-5 pb-[30px] border-t dark:border-white10">
                        <p className="font-normal mb-9 text-body dark:text-white60 text-15">
                          Many support queries and technical questions will already be answered in supporting
                          documentation such as FAQ&rsquo;s and comments from previous buyers. Anim pariatur cliche
                          reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.Brunch
                          3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                          shoreditch et.
                        </p>
                        <Heading as="h4" className="mb-3 text-sm font-medium">
                          Was this article helpful?
                        </Heading>
                        <div className="mb-3.5">
                          <Button
                            outlined
                            type="success"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-success border border-success bg-transparent"
                          >
                            <UilSmile className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            Yes
                          </Button>
                          <Button
                            outlined
                            type="warning"
                            className="inline-flex items-center justify-center h-9 px-4 ltr:mr-2.5 rtl:ml-2.5 text-warning border border-warning bg-transparent"
                          >
                            <UilFrown className="w-[14px] h-[14px] ltr:mr-1.5 rtl:ml-1.5" />
                            No
                          </Button>
                        </div>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </FaqWrapper>
            </GlobalUtilityStyle>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Faq;
