import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';

const RightAside = lazy(() => import('./RightAside'));
const ActivityContent = lazy(() => import('./ActivityContent'));

function Activity() {
  return (
    <Row gutter={25}>
      <Col xxl={16} xs={24} className="mb-[25px]">
        <Suspense
          fallback={
            <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
              <Skeleton active paragraph={{ rows: 10 }} />
            </div>
          }
        >
          <ActivityContent />
        </Suspense>
      </Col>
      <Col xxl={8} xs={24}>
        <Suspense
          fallback={
            <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
              <Skeleton active paragraph={{ rows: 10 }} />
            </div>
          }
        >
          <RightAside />
        </Suspense>
      </Col>
    </Row>
  );
}

export default Activity;
