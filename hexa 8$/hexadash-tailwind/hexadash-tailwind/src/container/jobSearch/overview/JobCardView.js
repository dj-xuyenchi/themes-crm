/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Heading from '../../../components/heading/heading';

function JobCardView({ job }) {
  const { id, title, deadline, location, jobType, salary, icon } = job;

  return (
    <>
      <div className="bg-white dark:bg-white10 flex items-center justify-between flex-wrap gap-[15px] pt-[30px] pb-[26px] px-[25px] shadow_0px_5px_20px_rgba(173, 181, 217, 0.05) rounded-10">
        <div>
          <div className="flex items-center gap-[20px] mb-[15px]">
            <div>
              <img src={require(`../../../${icon}`)} alt="" />
            </div>
            <div>
              <Heading className="text-[16px] font-medium mb-[6px] leading-[24px] text-dark dark:text-white87" as="h4">
                <Link className="text-current" to={`/admin/app/jobDetails/${id}`}>
                  {title}
                </Link>
              </Heading>
              <p className="text-[15px] m-0 text-theme-gray dark:text-white60">{location}</p>
            </div>
          </div>
          <ul className="flex flex-col mb-0">
            <li className="mb-[8px] inline-flex items-center gap-[20px]">
              <span className="inline-block font-medium min-w-[62px] text-theme-gray dark:text-white60 text-[15px]">
                Deadline:
              </span>
              <span className="font-normal text-theme-gray dark:text-white60 text-[15px]">{deadline}</span>
            </li>
            <li className="mb-[8px] inline-flex items-center gap-[20px]">
              <span className="inline-block font-medium min-w-[62px] text-theme-gray dark:text-white60 text-[15px]">
                Job Type:
              </span>
              <span className="font-normal text-theme-gray dark:text-white60 text-[15px]">{jobType}</span>
            </li>
            <li className=" inline-flex items-center gap-[20px]">
              <span className="inline-block font-medium min-w-[62px] text-theme-gray dark:text-white60 text-[15px]">
                Salary:
              </span>
              <span className="font-normal text-theme-gray dark:text-white60 text-[15px]">{salary}</span>
            </li>
          </ul>
        </div>
        <div>
          <Link
            className="flex items-center text-[14px] text-dark dark:text-white60 h-[38px] px-[20.15px] rounded-[24px] transition duration-300 bg-[#eff0f3] dark:bg-white10 hover:bg-primary hover:text-white"
            to={`/admin/app/jobDetails/${id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}

JobCardView.propTypes = {
  job: PropTypes.object,
};

export default JobCardView;
