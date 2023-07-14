import React from 'react';
import { Row, Col } from 'antd';
import OverviewCard from '../../../../components/cards/OverviewCard';

import OverviewData from '../../../../demoData/overviewData.json';

const OverviewDataList = React.memo(() => {
  const OverviewDataSorted = OverviewData.slice(Math.max(OverviewData.length - 4, 1));

  return (
    <Row gutter={25}>
      {OverviewDataSorted.map((item, i) => {
        return (
          <Col xxl={6} sm={12} xs={24} key={i} className="mb-[25px]">
            <OverviewCard data={item} />
          </Col>
        );
      })}
    </Row>
  );
});

export default OverviewDataList;
