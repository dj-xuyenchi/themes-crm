import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';
import { Checkbox } from '../../components/checkbox/checkbox';

function Checkboxs() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Checkbox',
    },
  ];
  const [state, setState] = useState({
    checkData: [],
    checked: false,
  });

  const multipleChange = (childData) => {
    setState({ ...state, checkData: childData });
  };

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Checkbox"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={25}>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Basic
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Checkbox checked={state.checked} onChange={onChange}>
                    Checkbox
                  </Checkbox>
                </div>
              </div>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Check All
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Checkbox
                    multiple
                    onChangeTriger={multipleChange}
                    item={['Apple', 'Pear', 'Orange']}
                    defaultSelect={['Pear']}
                  />
                </div>
              </div>
            </Col>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Disabled
                  </h1>
                </div>
                <div className="p-[25px]">
                  <Checkbox defaultChecked={false} disabled />
                  <br />
                  <Checkbox defaultChecked disabled />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Checkboxs;
