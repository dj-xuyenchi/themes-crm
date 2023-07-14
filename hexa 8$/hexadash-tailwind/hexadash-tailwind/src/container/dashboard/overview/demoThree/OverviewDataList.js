import React from 'react';
import { Row, Col } from 'antd';
import OverviewCardMesh from '../../../../components/cards/OverviewCardMesh';

import OverviewData from '../../../../demoData/overviewMeshData.json';

const OverviewDataList = React.memo(() => {
  return (
    <Row>
      <Col xs={24}>
        <div className="flex justify-between flex-wrap sm:flex-col gap-[25px] 3xl:gap-[15px] bg-white dark:bg-white10 p-0 text-theme-gray dark:text-white60 text-[15px] rounded-10">
          {OverviewData.map((item, i) => {
            return <OverviewCardMesh data={item} key={i} circleIcon />;
          })}
        </div>
      </Col>
    </Row>
  );
});

export default OverviewDataList;
