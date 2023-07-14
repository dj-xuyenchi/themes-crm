import React from 'react';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilArrow from '@iconscout/react-unicons/icons/uil-arrow';
import UilUserPlus from '@iconscout/react-unicons/icons/uil-user-plus';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';
import { Col, Row } from 'antd';
import Heading from '../../../components/heading/heading';

function Activities() {
  return (
    <div className="min-h-[435px] w-full p-[25px]">
      <div className="pb-5 mb-5 border-b border-regular dark:border-white10">
        <Row gutter={15}>
          <Col xxl={3} lg={5} md={4} sm={5} xs={24}>
            <div className="flex items-center justify-center flex-col bg-regularBG dark:bg-white10 h-full border dark:border-white10 rounded-[10px]">
              <Heading as="h4" className="mb-0 text-lg font-semibold text-dark dark:text-white60">
                22
              </Heading>
              <span className="text-body dark:text-white60">December</span>
            </div>
          </Col>
          <Col xxl={21} lg={19} md={20} sm={19} xs={24}>
            <div className="flex mb-[25px]">
              <div className="flex min-w-[76px] gap-x-[10px]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-transparent text-primary">
                  <UilPlus className="w-4 h-4" />
                </span>
                <img className="w-[30px] h-[30px]" src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div>
                <Heading className="mb-0 -mt-1 text-sm font-medium text-dark dark:text-white60" as="h5">
                  Mumtahin <span className="mx-0.5 text-body dark:text-white60 font-normal">add new task</span>{' '}
                  Dashboard Project
                </Heading>
                <p className="mb-0 text-xs text-light-extra dark:text-white60">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
            <div className="flex mb-[25px]">
              <div className="flex min-w-[76px] gap-x-[10px]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary-transparent text-secondary">
                  <UilArrow className="w-4 h-4" />
                </span>
                <img className="w-[30px] h-[30px]" src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div>
                <Heading className="mb-0 -mt-1 text-sm font-medium text-dark dark:text-white60" as="h5">
                  Mike Greene <span className="mx-0.5 text-body dark:text-white60 font-normal">pushed commit</span>
                  #652364
                </Heading>
                <p className="mb-0 text-xs text-light-extra dark:text-white60">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
            <div className="flex">
              <div className="flex min-w-[76px] gap-x-[10px]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-success-transparent text-success">
                  <UilPlus className="w-4 h-4" />
                </span>
                <img className="w-[30px] h-[30px]" src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div>
                <Heading className="mb-0 -mt-1 text-sm font-medium text-dark dark:text-white60" as="h5">
                  Tomlinson <span className="mx-0.5 text-body dark:text-white60 font-normal">completed task</span>
                  Invoice template
                </Heading>
                <p className="mb-0 text-xs text-light-extra dark:text-white60">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
          </Col>
        </Row>
      </div>
      {/* End of .activity-block */}
      <div>
        <Row gutter={15}>
          <Col xxl={3} lg={5} md={4} sm={5} xs={24}>
            <div className="flex items-center justify-center flex-col bg-regularBG dark:bg-white10 h-full border dark:border-white10 rounded-[10px]">
              <Heading as="h4" className="mb-0 text-lg font-semibold text-dark dark:text-white60">
                22
              </Heading>
              <span className="text-body dark:text-white60">December</span>
            </div>
          </Col>
          <Col xxl={21} lg={19} md={20} sm={19} xs={24}>
            <div className="flex mb-[25px]">
              <div className="flex min-w-[76px] gap-x-[10px]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-transparent text-primary">
                  <UilUserPlus className="w-4 h-4" />
                </span>
                <img className="w-[30px] h-[30px]" src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div>
                <Heading className="mb-0 -mt-1 text-sm font-medium text-dark dark:text-white60" as="h5">
                  Mumtahin <span className="mx-0.5 text-body dark:text-white60 font-normal">add new task</span>{' '}
                  Dashboard Project
                </Heading>
                <p className="mb-0 text-xs text-light-extra dark:text-white60">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
            <div className="flex mb-[25px]">
              <div className="flex min-w-[76px] gap-x-[10px]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary-transparent text-secondary">
                  <UilArrow className="w-4 h-4" />
                </span>
                <img className="w-[30px] h-[30px]" src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div>
                <Heading className="mb-0 -mt-1 text-sm font-medium dark:text-white60 text-dark" as="h5">
                  Mike Greene <span className="mx-0.5 text-body dark:text-white60 font-normal">pushed commit</span>
                  #652364
                </Heading>
                <p className="mb-0 text-xs text-light-extra dark:text-white60">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
            <div className="flex">
              <div className="flex min-w-[76px] gap-x-[10px]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-success-transparent text-success">
                  <UilUpload className="w-4 h-4" />
                </span>
                <img className="w-[30px] h-[30px]" src={require('../../../static/img/users/1.png')} alt="" />
              </div>
              <div>
                <Heading className="mb-0 -mt-1 text-sm font-medium text-dark dark:text-white60" as="h5">
                  Tomlinson <span className="mx-0.5 text-body dark:text-white60 font-normal">completed task</span>
                  Invoice template
                </Heading>
                <p className="mb-0 text-xs text-light-extra dark:text-white60">3:30 PM</p>
              </div>
            </div>
            {/* End of .activity-single */}
          </Col>
        </Row>
      </div>
      {/* End of .activity-block */}
    </div>
  );
}

export default Activities;
