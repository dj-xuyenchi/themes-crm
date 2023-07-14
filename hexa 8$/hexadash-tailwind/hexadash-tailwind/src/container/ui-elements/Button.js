import React from 'react';
import { Row, Col } from 'antd';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import UilLayers from '@iconscout/react-unicons/icons/uil-layers';
import { PageHeader } from '../../components/page-headers/page-headers';
import { ButtonsGroupWrapper, BtnWithIcon, GlobalUtilityStyle } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button, BtnGroup } from '../../components/buttons/buttons';
import { Dropdown } from '../../components/dropdown/dropdown';
import Heading from '../../components/heading/heading';

function Buttons() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Buttons',
    },
  ];
  return (
    <>
      <GlobalUtilityStyle>
        <PageHeader
          routes={PageRoutes}
          title="Buttons"
          className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col md:flex-row"
        />
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={12}>
              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Basic
                </Heading>
                <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <Button className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Primary
                  </Button>
                  <Button className="bg-secondary hover:bg-hbr-secondary border-solid border-1 border-secondary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Secondary
                  </Button>
                  <Button className="bg-success hover:bg-hbr-success border-solid border-1 border-success text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Success
                  </Button>
                  <Button className="bg-info hover:bg-hbr-info border-solid border-1 border-info text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Info
                  </Button>
                  <Button className="bg-warning hover:bg-hbr-warning border-solid border-1 border-warning text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Warning
                  </Button>
                  <Button className="bg-danger hover:bg-hbr-danger border-solid border-1 border-danger text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Danger
                  </Button>
                  <Button className="bg-dark hover:bg-hbr-dark border-solid border-1 border-dark text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Dark
                  </Button>
                  <Button className="bg-theme-gray hover:bg-hbr-gray border-solid border-1 border-theme-gray text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Gray
                  </Button>
                  <Button className="bg-light hover:bg-hbr-light border-solid border-1 border-light text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Light
                  </Button>
                  <Button className="bg-light-extra hover:bg-hbr-light-extra border-solid border-1 border-light-extra text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Extra Light
                  </Button>
                </div>
              </Cards>
              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Light Color
                </Heading>
                <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <Button className="bg-primary-transparent hover:bg-hbr-primary border-none text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Primary
                  </Button>
                  <Button className="bg-secondary-transparent hover:bg-hbr-secondary border-none text-secondary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Secondary
                  </Button>
                  <Button className="bg-success-transparent hover:bg-hbr-success border-none text-success hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Success
                  </Button>
                  <Button className="bg-info-transparent hover:bg-hbr-info border-none text-info hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Info
                  </Button>
                  <Button className="bg-warning-transparent hover:bg-hbr-warning border-none text-warning hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Warning
                  </Button>
                  <Button className="bg-danger-transparent hover:bg-hbr-danger border-none text-danger hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Danger
                  </Button>
                  <Button className="bg-dark-transparent dark:bg-white10 hover:bg-hbr-dark border-none text-dark dark:text-white87 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Dark
                  </Button>
                  <Button className="bg-theme-gray-transparent dark:bg-white30 hover:bg-hbr-gray dark:hover:bg-white10 border-none text-theme-gray dark:text-white60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Gray
                  </Button>
                </div>
              </Cards>
              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Rounded
                </Heading>
                <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <Button className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Primary
                  </Button>
                  <Button className="bg-secondary hover:bg-hbr-secondary border-solid border-1 border-secondary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Secondary
                  </Button>
                  <Button className="bg-success hover:bg-hbr-success border-solid border-1 border-success text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Success
                  </Button>
                  <Button className="bg-info hover:bg-hbr-info border-solid border-1 border-info text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Info
                  </Button>
                  <Button className="bg-warning hover:bg-hbr-warning border-solid border-1 border-warning text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Warning
                  </Button>
                  <Button className="bg-danger hover:bg-hbr-danger border-solid border-1 border-danger text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Danger
                  </Button>
                  <Button className="bg-dark hover:bg-hbr-dark border-solid border-1 border-dark text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Dark
                  </Button>
                  <Button className="bg-theme-gray hover:bg-hbr-gray border-solid border-1 border-theme-gray text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Gray
                  </Button>
                  <Button className="bg-light hover:bg-hbr-light border-solid border-1 border-light text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Light
                  </Button>
                  <Button className="bg-light-extra hover:bg-hbr-light-extra border-solid border-1 border-light-extra text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Extra Light
                  </Button>
                </div>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Icon
                </Heading>
                <div className=" flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                    <Button
                      size="default"
                      className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] "
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className="bg-primary-transparent hover:bg-hbr-primary border-none text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-primary dark:hover:text-white dark:hover:border-white10"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className="hover:bg-hbr-primary border-1 border-style border-primary text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-primary dark:bg-transparent"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className=" text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white87 dark:hover:text-primary dark:bg-transparent"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className="bg-light hover:bg-hbr-light border-solid border-1 border-light text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className=" text-[14px] font-semibold border-none leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-dark dark:hover:text-dark dark:hover:border-white10"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                    <Button
                      size="default"
                      className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                    <Button
                      size="default"
                      className="bg-primary-transparent hover:bg-hbr-primary border-none text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-primary dark:hover:text-white"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                    <Button
                      size="default"
                      className="bg-transparent hover:bg-hbr-primary border-1 border-style border-primary text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                    <Button
                      size="default"
                      className="bg-transparent text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white87 dark:hover:text-primary"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                    <Button
                      size="default"
                      className="bg-light hover:bg-hbr-light border-solid border-1 border-light text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                  </div>
                </div>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Size
                </Heading>
                <Row>
                  <div className="flex flex-wrap gap-y-[15px]">
                    <div className="flex flex-wrap items-center gap-x-[10px] md:gap-y-[40px] gap-y-[20px] w-full">
                      <Button
                        className="bg-warning hover:bg-hbr-warning border-solid border-1 border-warning text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[50px]"
                        raised
                      >
                        Large Button
                      </Button>
                      <Button
                        className="bg-success hover:bg-hbr-success border-solid border-1 border-success text-white dark:hover:border-white10 dark:hover:text-dark dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                        raised
                      >
                        Default
                      </Button>
                      <Button
                        className="bg-secondary hover:bg-hbr-secondary border-solid border-1 border-secondary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[38px]"
                        raised
                      >
                        Small
                      </Button>
                      <Button className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[32px]">
                        Extra Small
                      </Button>
                    </div>
                  </div>
                </Row>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Multiple Buttons
                </Heading>
                <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
                  <Button className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Primary
                  </Button>

                  <Button className="bg-secondary hover:bg-hbr-secondary border-solid border-1 border-secondary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Secondary
                  </Button>

                  <Dropdown placement="topLeft">
                    <BtnWithIcon>
                      <Button className=" border-solid border-1 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] dark:text-white87 dark:hover:text-primary dark:bg-white10 dark:border-white87 dark:hover:border-primary">
                        Actions
                        <DownOutlined className="svg-w-h-10 text-light dark:text-white30" />
                      </Button>
                    </BtnWithIcon>
                  </Dropdown>
                </div>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Group Buttons
                </Heading>
                <ButtonsGroupWrapper>
                  <div className="mb-[15px]">
                    <h4 className="text-dark dark:text-white87 text-[15px] leading-[24px] mb-[10px]">Basic</h4>
                    <Row className="gap-x-[15px] gap-y-[10px]">
                      <BtnGroup>
                        <Button className="text-white  text-[13px] font-semibold bg-primary border-primary px-[8px]">
                          Today
                        </Button>
                        <Button className="text-[13px] font-semibold px-[8px]">Week</Button>
                        <Button className="text-[13px] font-semibold px-[8px]">Month</Button>
                        <Button className="text-[13px] font-semibold px-[8px]">Year</Button>
                      </BtnGroup>
                      <BtnGroup>
                        <Button className="text-[13px] font-semibold px-[8px]">Cancel</Button>
                        <Button className="text-[13px] font-semibold px-[8px]">Ok</Button>
                      </BtnGroup>
                      <BtnGroup>
                        <Button className="text-[13px] font-semibold px-[8px]">Left</Button>
                        <Button className="text-[13px] font-semibold px-[8px]">Middle</Button>
                        <Button className="text-[13px] font-semibold px-[8px]">Right</Button>
                      </BtnGroup>
                    </Row>
                  </div>

                  <div className="button-group-single">
                    <h4 className="text-dark dark:text-white87 text-[15px] leading-[24px] mb-[10px]">With Icon</h4>
                    <Row>
                      <BtnWithIcon>
                        <BtnGroup>
                          <Button className="active text-white dark:text-white87 text-[13px] font-semibold bg-primary border-primary px-[8px]  inline-flex items-center">
                            <LeftOutlined className="inline-flex svg-w-h-10" />
                            Go Back
                          </Button>
                          <Button className="text-[13px] font-semibold px-[8px] inline-flex items-center">
                            Go Forward
                            <RightOutlined className="inline-flex svg-w-h-10 dark:[&>svg]:!text-dark" />
                          </Button>
                        </BtnGroup>
                      </BtnWithIcon>
                    </Row>
                  </div>
                </ButtonsGroupWrapper>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Block
                </Heading>
                <Row className="gap-x-[15px] gap-y-[10px] flex flex-wrap flex-col">
                  <Button className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] flex items-center justify-center rounded-[4px] px-[20px] h-[50px]">
                    Large Button
                  </Button>
                  <Button className="bg-secondary hover:bg-hbr-secondary border-solid border-1 border-secondary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Default
                  </Button>
                  <Button className="bg-success hover:bg-hbr-success border-solid border-1 border-success text-white dark:text-white87 text-[14px] font-semibold leading-[22px] flex items-center justify-center rounded-[4px] px-[20px] h-[38px]">
                    Small
                  </Button>
                  <Button className="bg-warning hover:bg-hbr-warning border-solid border-1 border-warning text-white dark:text-white87 text-[14px] font-semibold leading-[22px] flex items-center justify-center rounded-[4px] px-[20px] h-[32px]">
                    Extra Small
                  </Button>
                </Row>
              </Cards>
            </Col>

            <Col md={12}>
              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Outline
                </Heading>
                <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <Button className=" hover:bg-hbr-primary border-solid border-1 border-primary text-primary bg-transparent hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Primary
                  </Button>
                  <Button className=" hover:bg-hbr-secondary border-solid border-1 border-secondary text-secondary bg-transparent  hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Secondary
                  </Button>
                  <Button className=" hover:bg-hbr-success border-solid border-1 border-success text-success bg-transparent  hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Success
                  </Button>
                  <Button className=" hover:bg-hbr-info border-solid border-1 border-info text-info bg-transparent  hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Info
                  </Button>
                  <Button className=" hover:bg-hbr-warning border-solid border-1 border-warning text-warning bg-transparent  hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Warning
                  </Button>
                  <Button className=" hover:bg-hbr-danger border-solid border-1 border-danger text-danger bg-transparent  hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Danger
                  </Button>
                  <Button className=" hover:bg-hbr-dark border-solid border-1 border-dark dark:border-white87 text-dark dark:text-white87 bg-transparent  hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] dark:hover:bg-white dark:hover:text-dark ">
                    Dark
                  </Button>
                  <Button className="hover:bg-hbr-gray border-solid border-1 border-theme-gray text-theme-gray bg-transparent  dark:text-white60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Gray
                  </Button>
                  <Button className=" hover:bg-hbr-light border-solid border-1 border-light text-light bg-transparent  dark:text-white60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Light
                  </Button>
                  <Button className=" border-dashed border-1 border-light-extra text-[14px] text-dark bg-transparent dark:hover:bg-white  dark:text-white87 dark:hover:text-dark dark:hover:border-white10 hover:text-dark font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Dashed
                  </Button>
                </div>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Raised
                </Heading>
                <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <Button className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn">
                    Primary
                  </Button>
                  <Button className="bg-secondary hover:bg-hbr-secondary border-solid border-1 border-secondary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn">
                    Secondary
                  </Button>
                  <Button className="bg-success hover:bg-hbr-success border-solid border-1 border-success text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn">
                    Success
                  </Button>
                  <Button className="bg-info hover:bg-hbr-info border-solid border-1 border-info text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn">
                    Info
                  </Button>
                  <Button className="bg-warning hover:bg-hbr-warning border-solid border-1 border-warning text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn">
                    Warning
                  </Button>
                  <Button className="bg-danger hover:bg-hbr-danger border-solid border-1 border-danger text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn">
                    Danger
                  </Button>
                  <Button className="bg-dark hover:bg-hbr-dark border-solid border-1 border-dark text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn">
                    Dark
                  </Button>
                  <Button className="bg-theme-gray hover:bg-hbr-gray border-solid border-1 border-theme-gray text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-btn">
                    Gray
                  </Button>
                  <Button className="border-none text-dark dark:hover:text-dark dark:hover:border-white10 dark:text-dark text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] shadow-regular dark:shadow-none">
                    White
                  </Button>
                </div>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Rounded Outline
                </Heading>
                <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <Button className=" dark:bg-transparent hover:bg-hbr-primary border-solid border-1 border-primary text-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Primary
                  </Button>
                  <Button className=" dark:bg-transparent hover:bg-hbr-secondary border-solid border-1 border-secondary text-secondary  text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Secondary
                  </Button>
                  <Button className=" dark:bg-transparent hover:bg-hbr-success border-solid border-1 border-success text-success  text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Success
                  </Button>
                  <Button className=" dark:bg-transparent hover:bg-hbr-info border-solid border-1 border-info text-info  text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Info
                  </Button>
                  <Button className=" dark:bg-transparent hover:bg-hbr-warning border-solid border-1 border-warning text-warning text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Warning
                  </Button>
                  <Button className=" dark:bg-transparent hover:bg-hbr-danger border-solid border-1 border-danger text-danger  text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Danger
                  </Button>
                  <Button className=" dark:bg-transparent hover:bg-hbr-dark border-solid border-1 border-dark dark:border-white87 text-dark dark:text-white87  text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Dark
                  </Button>
                  <Button className=" dark:bg-transparent hover:bg-hbr-gray border-solid border-1 border-theme-gray text-theme-gray dark:text-white60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Gray
                  </Button>
                  <Button className=" dark:bg-transparent hover:bg-hbr-light border-solid border-1 border-light text-light dark:text-white60 hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Light
                  </Button>
                  <Button className=" dark:bg-transparent dark:hover:bg-white border-dashed border-1 border-light-extra text-[14px] text-dark dark:hover:text-dark dark:hover:border-white10 dark:text-white87 hover:text-dark font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]">
                    Dashed
                  </Button>
                </div>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Rounded With Icon
                </Heading>
                <div className=" flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                    <Button
                      size="default"
                      className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className="bg-primary-transparent hover:bg-hbr-primary border-none text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className="hover:bg-hbr-primary border-1 border-style border-primary text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-primary dark:bg-transparent"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className=" text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px] bg-transparent dark:hover:text-primary dark:text-white87"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className="bg-light hover:bg-hbr-light dark:bg-transparent border-solid border-1 border-light text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                    <Button
                      size="default"
                      className=" text-[14px] font-semibold border-none leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-dark dark:hover:text-dark dark:hover:border-white10"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                      Default
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                    <Button
                      size="default"
                      className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                    <Button
                      size="default"
                      className="bg-primary-transparent hover:bg-hbr-primary border-none text-primary hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                    <Button
                      size="default"
                      className="hover:bg-hbr-primary dark:bg-transparent border-1 border-style border-primary text-primary hover:text-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                    <Button
                      size="default"
                      className=" text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px] dark:text-white dark:hover:text-primary bg-transparent"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                    <Button
                      size="default"
                      className="bg-light hover:bg-hbr-light border-solid border-1 border-light text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] shadow-btn gap-[8px]"
                    >
                      <UilLayers className="w-[14px] h-[14px]" />
                    </Button>
                  </div>
                </div>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Disabled
                </Heading>
                <Row className="flex flex-wrap gap-x-[10px] gap-y-[10px] mb-[15px]">
                  <Button className="bg-primary hover:bg-hbr-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]">
                    Primary
                  </Button>
                  <Button
                    className="bg-primary/[.60] border-solid border-1 border-transparent text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                    disabled
                  >
                    Primary(Disabled)
                  </Button>
                </Row>
                <Row className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <Button className=" text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] dark:text-dark dark:hover:text-dark dark:hover:border-white10">
                    Default
                  </Button>
                  <Button
                    className=" text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                    disabled
                  >
                    Default(Disabled)
                  </Button>
                </Row>
              </Cards>

              <Cards headless size="large" className="mb-[25px] ant-card-body-p-25">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px]">
                  Loading
                </Heading>
                <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                  <Button
                    className="w-auto bg-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]  ant-btn-loading-icon [&>span>span>svg]:text-white"
                    loading
                  >
                    Default
                  </Button>
                  <Button
                    className="w-auto bg-primary-transparent  border-none text-primary  text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]  ant-btn-loading-icon"
                    loading
                  >
                    Default
                  </Button>
                  <Button
                    className=" w-auto border-solid border-1 border-primary text-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]  ant-btn-loading-icon bg-transparent"
                    loading
                  >
                    Default
                  </Button>
                  <Button
                    className="w-auto text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] dark:text-white87  ant-btn-loading-icon bg-transparent"
                    loading
                  >
                    Default
                  </Button>
                  <Button
                    className="w-auto bg-light border-solid border-1 border-light text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]  ant-btn-loading-icon [&>span>span>svg]:text-white"
                    loading
                  >
                    Default
                  </Button>
                  <Button
                    className="w-auto text-[14px] font-semibold border-none shadow-btn leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] ant-btn-loading-icon dark:bg-dark dark:text-white87"
                    loading
                  >
                    Default
                  </Button>
                  <Button
                    className="w-auto bg-primary border-solid border-1 border-primary text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]  ant-btn-loading-icon [&>span>span>svg]:text-white"
                    loading
                  />
                  <Button
                    className="w-auto border-solid border-1 border-primary text-primary text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]  ant-btn-loading-icon bg-transparent"
                    loading
                  />
                  <Button
                    className="w-auto text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px]  ant-btn-loading-icon bg-transparent"
                    loading
                  />
                  <Button
                    className="w-auto bg-light border-solid border-1 border-light text-white dark:text-white87 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[40px] px-[20px] h-[44px] [&>span>span>svg]:text-white"
                    loading
                  />
                </div>
              </Cards>

              <Cards headless size="large" className="mb-[25px] p-0 ant-card-body-p-0">
                <Heading className="text-dark dark:text-white87 font-semibold text-[20px] leading-[24px] mb-[15px] px-[25px] pt-[25px]">
                  Ghost
                </Heading>
                <div className="flex flex-wrap gap-x-[10px] gap-y-[10px] bg-gradient-to-r from-primary to-secondary p-[25px] rounded-b-[10px]">
                  <Button
                    className="hover:bg-white/40 text-white dark:text-white87 hover:border-white/40 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                    ghost
                  >
                    Primary
                  </Button>
                  <Button
                    className="hover:bg-white/40 text-white dark:text-white87 hover:border-white/40 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                    ghost
                  >
                    Secondary
                  </Button>
                  <Button
                    className="hover:bg-white/40 text-white dark:text-white87 hover:border-white/40 text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                    ghost
                  >
                    Default
                  </Button>
                </div>
              </Cards>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Buttons;
