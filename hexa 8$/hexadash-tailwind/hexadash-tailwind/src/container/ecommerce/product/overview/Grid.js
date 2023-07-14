import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination, Spin } from 'antd';
import { useSelector } from 'react-redux';
import ProductCards from './ProductCards';
import Heading from '../../../../components/heading/heading';
import { PaginationStyle } from '../../../styled';

function Grid() {
  const { productsAll, isLoader } = useSelector((state) => {
    return {
      productsAll: state.products.data,
      isLoader: state.products.loading,
    };
  });

  const [state, setState] = useState({
    products: productsAll,
    current: 0,
    pageSize: 0,
  });

  const { products } = state;

  useEffect(() => {
    if (productsAll) {
      setState({
        products: productsAll,
      });
    }
  }, [productsAll]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  return (
    <Row gutter={30}>
      {isLoader ? (
        <Col xs={24}>
          <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
            <Spin />
          </div>
        </Col>
      ) : products.length ? (
        products.map(({ id, name, rate, price, oldPrice, popular, img }) => {
          return (
            <Col xxl={6} lg={12} xs={24} key={id}>
              <ProductCards product={{ id, name, rate, price, oldPrice, popular, img }} />
            </Col>
          );
        })
      ) : (
        <Col md={24}>
          <>
            <Heading as="h1">Data Not Found</Heading>
          </>
        </Col>
      )}
      <Col xs={24} className="pb-30">
        <PaginationStyle style={{ marginTop: 10 }}>
          {products.length ? (
            <div className="ant-pagination-custom-style text-end">
              <Pagination
                onChange={onHandleChange}
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                pageSize={10}
                defaultCurrent={1}
                total={40}
              />
            </div>
          ) : null}
        </PaginationStyle>
      </Col>
    </Row>
  );
}

export default Grid;
