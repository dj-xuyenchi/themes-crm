import { Row, Col } from 'antd';
import React from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers';
import BlogCard from '../../../components/cards/BlogCard';
import cardData from '../../../demoData/sampleCards.json';

const { BlogCardData } = cardData;

function BlogThree() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Blog Three',
    },
  ];
  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Blog Three"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-[30px] xl:px-[15px] pb-[25px]">
        <Row gutter={25} className="mt-sm-10">
          {BlogCardData.slice(10, 22).map((blog) => {
            return (
              <Col key={blog.id} xxl={6} sm={12} xs={24} className="mb-[25px]">
                <BlogCard item={blog} theme="style-3" />
              </Col>
            );
          })}
        </Row>
      </main>
    </>
  );
}

export default BlogThree;
