import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';

function BlankPage() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Blank Page',
    },
  ];
  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Blank Page"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 pb-12">
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
              <div className="p-[25px]">
                <h1 className="mb-0 text-lg text-dark dark:text-white60">Skeleton Page</h1>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default BlankPage;
