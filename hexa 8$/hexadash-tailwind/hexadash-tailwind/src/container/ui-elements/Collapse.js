import React, { useState } from 'react';
import { Row, Col, Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle, CollapseStyle } from '../styled';

const { Panel } = Collapse;
function Collapses() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Collapse',
    },
  ];
  const [state, setstate] = useState({
    key: 0,
  });
  const callback = (key) => {
    setstate({ ...state, key });
  };

  const customPanelStyle = {
    marginBottom: 20,
    border: 0,
    overflow: 'hidden',
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Collapse"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <CollapseStyle>
            <Row gutter={25}>
              <Col md={12}>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Basic
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <Collapse defaultActiveKey={['1']} onChange={callback}>
                      <Panel header="This is panel header 1" key="1">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel header="This is panel header 2" key="2">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel header="This is panel header 3" key="3" collapsible="disabled">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Nested panel
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <Collapse onChange={callback}>
                      <Panel header="This is panel header 1" key="1">
                        <Collapse defaultActiveKey="1">
                          <Panel header="This is panel nest panel" key="1">
                            <p>
                              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                              found as a welcome guest in many households across the world.
                            </p>
                          </Panel>
                        </Collapse>
                      </Panel>
                      <Panel header="This is panel header 2" key="2">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel header="This is panel header 3" key="3">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      No Arrow
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <Collapse defaultActiveKey={['1']} onChange={callback}>
                      <Panel header="This is panel header 1" key="1">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel showArrow={false} header="This is panel header 2" key="2">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Accordion
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <Collapse defaultActiveKey={['1']} accordion>
                      <Panel header="This is panel header 1" key="1">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel header="This is panel header 2" key="2">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel header="This is panel header 3" key="3">
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Borderless
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <Collapse defaultActiveKey={['1']} bordered="false">
                      <Panel header="This is panel header 1" key="1">
                        <p style={{ paddingLeft: '24px' }}>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel header="This is panel header 2" key="2">
                        <p style={{ paddingLeft: '24px' }}>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel header="This is panel header 3" key="3">
                        <p style={{ paddingLeft: '24px' }}>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
                <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                  <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                    <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                      Custom Panel
                    </h1>
                  </div>
                  <div className="p-[25px]">
                    <Collapse
                      bordered="false"
                      defaultActiveKey={['1']}
                      expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />}
                    >
                      <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                      <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
                          found as a welcome guest in many households across the world.
                        </p>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
              </Col>
            </Row>
          </CollapseStyle>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Collapses;
