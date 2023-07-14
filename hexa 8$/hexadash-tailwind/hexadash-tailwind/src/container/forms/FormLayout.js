import React from 'react';
import { Row, Col } from 'antd';
import { HorizontalForm } from './overview/HorizontalForm';
import { HorizontalIconForm } from './overview/HorizontalIconForm';
import { VerticalForm } from './overview/VerticalForm';
import { VerticalIconForm } from './overview/VerticalIconForm';
import { MultiColumnForm } from './overview/MultiColumnForm';

import { PageHeader } from '../../components/page-headers/page-headers';

function FormLayout() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Form Layouts',
    },
  ];
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Form Layouts"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col lg={12} xs={24} className="mb-[25px]">
            <HorizontalForm />
          </Col>
          <Col lg={12} xs={24} className="mb-[25px]">
            <HorizontalIconForm />
          </Col>
          <Col lg={12} xs={24} className="mb-[25px]">
            <VerticalForm />
          </Col>
          <Col lg={12} xs={24} className="mb-[25px]">
            <VerticalIconForm />
          </Col>
          <Col xs={24}>
            <MultiColumnForm />
          </Col>
        </Row>
      </main>
    </>
  );
}

export default FormLayout;
