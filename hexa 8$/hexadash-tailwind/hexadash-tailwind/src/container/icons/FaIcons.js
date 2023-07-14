import React from 'react';
import { Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { PageHeader } from '../../components/page-headers/page-headers';
import Heading from '../../components/heading/heading';
import { GlobalUtilityStyle } from '../styled';
import icons from '../../config/icon/icon.json';

const { faIcons } = icons;

function FaIcons() {
  let key = 0;
  return (
    <>
      <PageHeader
        title="Font Awesome Icons"
        className="flex justify-between items-center bg-transparent pt-[15px] px-8 pb-6"
      />
      <div className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={15}>
          <Col md={24}>
            <GlobalUtilityStyle>
              <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                <div className="py-[16px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <Heading as="h4" className="mb-0 text-lg font-medium">
                    Simply beautiful open source icons
                  </Heading>
                </div>
                <div className="p-[25px]">
                  <Row gutter={25}>
                    {faIcons.map((icon) => {
                      key += 1;
                      return (
                        <Col lg={6} md={12} xs={24} key={key}>
                          <div className="flex items-center mb-[15px]">
                            <FontAwesome
                              className="text-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white60"
                              name={icon}
                              size="2x"
                              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                            <span className="text-body dark:text-white60">{icon}</span>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </GlobalUtilityStyle>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FaIcons;
