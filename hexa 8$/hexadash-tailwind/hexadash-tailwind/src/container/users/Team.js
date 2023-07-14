import React, { lazy, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton, Button, Input } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { PageHeader } from '../../components/page-headers/page-headers';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Cards } from '../../components/cards/frame/cards-frame';

function Team() {
  const { searchData, team } = useSelector((state) => {
    return {
      searchData: state.headerSearchData,
      team: state.team.data,
    };
  });

  const [state, setState] = useState({
    notData: searchData,
  });

  const { notData } = state;
  const handleSearch = (searchText) => {
    const data = searchData.filter((item) => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      ...state,
      notData: data,
    });
  };

  const actions = (
    <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
      <Link
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm gap-[6px]"
        to="#"
      >
        <UilEye className="w-[14px] h-[14px]" />
        <span>View</span>
      </Link>
      <Link
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm  gap-[6px]"
        to="#"
      >
        <UilEdit className="w-[14px] h-[14px]" />
        <span>Edit</span>
      </Link>
      <Link
        className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm gap-[6px]"
        to="#"
      >
        <UilTrashAlt className="w-[14px] h-[14px]" />
        <span>Delete</span>
      </Link>
    </div>
  );

  return (
    <>
      <PageHeader
        className="pt-[29px] px-[30px] pb-[31px] bg-[#f4f5f7] dark:bg-transparent flex items-start justify-between [&>div]:flex-1 [&>div]:flex [&>div]:items-center min-md:[&>div]:justify-between [&>div]:justify-center md:[&>div]:flex-col [&>div>div>span+span]:mt-0 md:[&>div]:gap-[15px] md:[&>div>div]:flex-warp md:[&>div>div]:flex-col md:[&>div>div]:gap-[15px]"
        backIcon={false}
        title={
          <>
            <span className="text-[22px] font-semibold text-dark dark:text-white87 relative min-md:ltr:pr-[24px] min-md:ltr:mr-[24px] min-md:rtl:pl-[24px] min-md:rtl:ml-[24px] capitalize leading-[32px] after:absolute ltr:after:right-0 rtl:after:left-0 after:top-0 after:h-full after:w-[1px] after:content-[''] after:bg-normal dark:after:bg-white10 md:after:hidden">
              Team Members
            </span>
          </>
        }
        subTitle={
          <div className="flex items-center font-medium text-theme-gray dark:text-white60 min-md:gap-[25px] gap-[15px]">
            <span className="title-counter">274 Users</span>
            <div className="flex items-center [&>div>div]:h-[46px] [&>.ant-select>.ant-select-selector>span>input]:!h-[46px] [&>.ant-select>.ant-select-selector>span>input]:bg-transparent [&>div>div]:rounded-[20px] min-lg:[&>div>div]:w-[305px] [&>div>div]:bg-transparent [&>div>div]:border-none [&>div>div]:shadow-none bg-white dark:bg-white10 rounded-[20px]">
              <AutoComplete
                dropdownMatchSelectWidth={false}
                onSearch={handleSearch}
                dataSource={notData}
                width="100%"
                placeholder="Search by Name"
              >
                <Input className="bg-transparent px-5 border border-regular dark:border-white10 shadow-none rounded-[100px] [&>input]:!bg-transparent dark:[&>input]:!bg-transparent h-[38px]" />
              </AutoComplete>
              <Button className="h-[46px] rounded-tl-none rounded-bl-none bg-transparent border-none shadow-none">
                <SearchOutlined className="flex text-light-extra dark:text-white87 [&>svg]:text-light-extra dark:[&>svg]:text-white87" />
              </Button>
            </div>
          </div>
        }
        buttons={[
          <Link
            to="/admin/users/add-user/info"
            className="px-[14px] text-[14px] font-semibold text-sm rounded-md h-[40px] bg-primary text-white flex items-center justify-center gap-[5px]"
            key="1"
          >
            <UilPlus className="w-[15px] h-[15px]" /> Add New Member
          </Link>,
        ]}
      />
      <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent hexadash-calendar-wrap">
        <Row gutter={25}>
          {team.map((user) => {
            const TeamCard = lazy(() => import('../pages/overview/TeamCard'));
            const { id } = user;
            return (
              <Col key={id} xxl={6} lg={8} sm={12} xs={24} className="mb-[25px]">
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton avatar active />
                    </Cards>
                  }
                >
                  <TeamCard actions={actions} user={user} />
                </Suspense>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

AutoComplete.defaultProps = {
  width: '200px',
  placeholder: 'Input here',
};

AutoComplete.propTypes = {
  patternButtons: PropTypes.bool,
};

export default Team;
