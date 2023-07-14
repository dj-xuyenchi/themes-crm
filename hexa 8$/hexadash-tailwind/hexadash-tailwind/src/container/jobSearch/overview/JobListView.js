import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';

const JobListView = React.memo(({ job }) => {
  const { title, id, deadline, location, jobType, salary, icon } = job;

  return (
    <>
      <div className="bg-white dark:bg-white10 flex items-center justify-between gap-[15px] pt-[30px] pb-[26px] px-[25px] shadow_0px_5px_20px_rgba(173, 181, 217, 0.05) rounded-10 w-full">
        <Row gutter={15} className="w-full">
          <Col lg={8} md={10} xs={24} className="md:mb-[15px]">
            <div className="flex items-center mb-0 gap-[20px]">
              <div>
                <img className="max-w-[46px]" src={require(`../../../${icon}`)} alt="" />
              </div>
              <div className="hexadash-media__body">
                <Heading
                  as="h4"
                  className="text-[16px] font-medium mb-[6px] leading-[24px] text-dark dark:text-white87"
                >
                  <Link className="text-current" to={`/admin/app/jobDetails/${id}`}>
                    {title}
                  </Link>
                </Heading>
                <p className="text-[15px] m-0 text-theme-gray dark:text-white60">{location}</p>
              </div>
            </div>
          </Col>
          <Col xxl={11} md={14} lg={16} xs={24} className="md:mb-[15px]">
            <ul className="flex justify-between mb-0 ssm:flex-col ssm:gap-[10px]">
              <li className="mb-[8px]">
                <span className="font-normal text-theme-gray dark:text-white60 text-[15px] ">Job Type:</span>
                <span className="block font-medium min-w-[62px] text-theme-gray dark:text-white60 text-[15px]">
                  {jobType}
                </span>
              </li>
              <li className="mb-[8px]">
                <span className="font-normal text-theme-gray dark:text-white60 text-[15px]">Deadline:</span>
                <span className=" block font-medium min-w-[62px] text-theme-gray dark:text-white60 text-[15px]">
                  {deadline}
                </span>
              </li>
              <li>
                <span className="font-normal text-theme-gray dark:text-white60 text-[15px]">Salary:</span>
                <span className=" block font-medium min-w-[62px] text-theme-gray dark:text-white60 text-[15px]">
                  {salary}
                </span>
              </li>
            </ul>
          </Col>
          <Col xxl={5} xs={24}>
            <div className="flex min-md:justify-end">
              <Button
                className="flex items-center text-[14px] text-dark dark:text-white60 h-[38px] px-[20.15px] rounded-[24px] transition duration-300 bg-[#eff0f3] dark:bg-white10 hover:bg-primary hover:text-white font-semibold border-none"
                size="small"
                type="light"
                shape="round"
                to={`/admin/app/jobDetails/${id}`}
              >
                View Details
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
});

JobListView.propTypes = {
  job: PropTypes.object,
};

export default JobListView;
