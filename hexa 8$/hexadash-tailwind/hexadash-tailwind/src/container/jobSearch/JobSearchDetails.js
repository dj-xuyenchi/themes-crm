import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Col, Row, Spin } from 'antd';
import UilArrowLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { singlePageReade } from '../../redux/jobs/actionCreator';
import { Button } from '../../components/buttons/buttons';

const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'app',
    breadcrumbName: 'Apps',
  },
  {
    path: 'first',
    breadcrumbName: 'Tickets',
  },
];

function JobSearchDetails() {
  const { dataState } = useSelector((state) => {
    return {
      dataState: state.jobs.job,
    };
  });

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (dispatch) {
      dispatch(singlePageReade(params.id));
    }
  }, [dispatch, params.id]);

  const navigate = useNavigate();

  const navigateToApply = () => {
    navigate('/admin/app/job/apply');
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title={
          <>
            <h4 className="mb-0 font-semibold text-dark dark:text-white87">Job Details</h4>
            <span className="inline-block mt-[10px] text-[14px] font-medium">
              <Link
                className="flex items-center text-theme-gray hover:text-primary dark:text-white60"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                to="#"
              >
                <UilArrowLeft />
                Go back
              </Link>
            </span>
          </>
        }
        routes={PageRoutes}
      />
      <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
        {dataState.length ? (
          <Row gutter={15} className="mt-sm-10">
            <Col xxl={18} lg={16} xs={24} className="mb-[25px]">
              <Cards headless>
                <div className="mb-[24px] flex items-center gap-[20px]">
                  <div>
                    <img src={require(`../../${dataState[0].icon}`)} alt="" />
                  </div>
                  <div>
                    <Heading className="text-[22px] font-semibold mb-[6px] text-dark dark:text-white87" as="h4">
                      {dataState[0].title}
                    </Heading>
                    <p className="text-[15px] m-0 text-theme-gray dark:text-white60">{dataState[0].location}</p>
                  </div>
                </div>

                <article className="mb-[20px]">
                  <h2 className="text-dark dark:text-white87 text-[20px] font-semibold mb-[12px]">Job Description</h2>
                  <p className="text-theme-gray dark:text-white60 text-[16px] leading-[1.69]">
                    There are have a many variations of passages of Lorem Ipsum available, but the randomised words
                    which don`t look even slightly believable. If you are going to sdsss embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                    necessary, making which don`t first true generator on the Internet.
                  </p>
                </article>
                <article className="mb-[20px]">
                  <h2 className="text-dark dark:text-white87 text-[20px] font-semibold mb-[12px]">Requirements</h2>
                  <ul>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      At least 3+ years of working experience in PHP/WordPress.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Solid PHP knowledge and a good understanding of advanced PSP concepts eg. OOP, Namespace, Taits
                      ,etc
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      HTMl/CSS
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Intermediate to Advanced JavaScript knowledge.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Solid understanding of WordPress core features eg. action/hooks,restAPI,post type,taxonomies,post
                      meta, database stuctures,etc.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Good understanding of PHP/WordPress coding standard
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Must be able to write quality code following the coding standards and best practice.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Ability to work without supervision.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      must be polite and should have good interpersonal communication skills.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Fast learner, self motivated , eager to learn new technologies.
                    </li>
                  </ul>
                </article>
                <article className="mb-[20px]">
                  <h2 className="text-dark dark:text-white87 text-[20px] font-semibold mb-[12px]">Preferable Skills</h2>
                  <ul>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Fluency in English.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Experience in other PHP framework.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      HTMl/CSS
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Knowledge in Software design patterns.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      Experience in Vue / React.
                    </li>
                    <li className="mb-[12px] last:mb-0 text-[16px] relative text-theme-gray dark:text-white60 ltr:pl-[22px] rtl:pr-[22px] after:absolute after:content-[''] ltr:after:left-0 rtl:after:right-0 after:top-[50%] after:w-[6px] after:h-[6px] after:rounded-full after:bg-theme-gray dark:after:bg-white10">
                      VPS/Server knowledge.
                    </li>
                  </ul>
                </article>
              </Cards>
            </Col>
            <Col xxl={6} lg={8} xs={24} className="mb-[25px]">
              <div className="w-full bg-white rounded-[10px] shadow_0px_5px_10px_rgba(173,181,217,.05) dark:bg-white10">
                <div className="p-[25px] relative">
                  <h2 className="text-[20px] font-semibold mb-[18px] text-dark dark:text-white87">Information</h2>
                  <ul className="mb-[25px]">
                    <li className="flex items-center gap-[20px] mb-[12px] last:mb-0">
                      <span className="inline-block min-w-[76px] font-medium text-dark dark:text-white87 text-[15px]">
                        Job Type:
                      </span>
                      <span className="text-theme-gray dark:text-white60 text-[15px]">{dataState[0].jobType}</span>
                    </li>
                    <li className="flex items-center gap-[20px] mb-[12px] last:mb-0">
                      <span className="inline-block min-w-[76px] font-medium text-dark dark:text-white87 text-[15px]">
                        Industry:
                      </span>
                      <span className="text-theme-gray dark:text-white60 text-[15px]">Development</span>
                    </li>
                    <li className="flex items-center gap-[20px] mb-[12px] last:mb-0">
                      <span className="inline-block min-w-[76px] font-medium text-dark dark:text-white87 text-[15px]">
                        Salary:
                      </span>
                      <span className="text-theme-gray dark:text-white60 text-[15px]">{dataState[0].salary}</span>
                    </li>
                    <li className="flex items-center gap-[20px] mb-[12px] last:mb-0">
                      <span className="inline-block min-w-[76px] font-medium text-dark dark:text-white87 text-[15px]">
                        Location:
                      </span>
                      <span className="text-theme-gray dark:text-white60 text-[15px]">{dataState[0].location}</span>
                    </li>
                    <li className="flex items-center gap-[20px] mb-[12px] last:mb-0">
                      <span className="inline-block min-w-[76px] font-medium text-dark dark:text-white87 text-[15px]">
                        Deadline:
                      </span>
                      <span className="text-theme-gray dark:text-white60 text-[15px]">{dataState[0].deadline}</span>
                    </li>
                  </ul>
                  <Button
                    className="flex items-center justify-start text-center text-[14px] rounded-[4px] h-[44px] font-semibold px-[20.5px] [&>span]:flex [&>span]:w-full [&>span]:justify-center"
                    onClick={navigateToApply}
                    size="default"
                    type="primary"
                    block
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Cards headless>
            <Spin />
          </Cards>
        )}
      </div>
    </>
  );
}

export default JobSearchDetails;
