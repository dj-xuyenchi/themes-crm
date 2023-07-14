import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Row, Col, Pagination, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
import Heading from '../../../components/heading/heading';
import { PaginationStyle } from '../../styled';

const GridCard = lazy(() => import('./GridCard'));

function Grid() {
  const project = useSelector((state) => state.projects.data);
  const [state, setState] = useState({
    projects: project,
    current: 0,
    pageSize: 0,
  });
  const { projects } = state;

  useEffect(() => {
    if (project) {
      setState({
        projects: project,
      });
    }
  }, [project]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  return (
    <Row gutter={25}>
      {projects.length ? (
        projects.map((value) => {
          return (
            <Col key={value.id} xl={8} md={12} xs={24} className="mb-[25px]">
              <Suspense
                fallback={
                  <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                    <Skeleton active />
                  </div>
                }
              >
                <GridCard value={value} />
              </Suspense>
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
            <Heading>Data Not Found!</Heading>
          </div>
        </Col>
      )}
      <Col xs={24} className="pb-30">
        <PaginationStyle>
          <div className="ant-pagination-custom-style mb-[34px] text-end">
            {projects.length ? (
              <Pagination
                onChange={onHandleChange}
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                pageSize={10}
                defaultCurrent={1}
                total={40}
              />
            ) : null}
          </div>
        </PaginationStyle>
      </Col>
    </Row>
  );
}

export default Grid;
