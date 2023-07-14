import React, { lazy, Suspense, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';

import { cartGetData } from '../../redux/cart/actionCreator';

const CartTable = lazy(() => import('./overview/CartTable'));
const Ordersummary = lazy(() => import('./overview/Ordersummary'));

function ShoppingCart() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Shopping Cart',
    },
  ];
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => {
    return {
      cartData: state.cart.data,
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  let subtotal = 0;

  if (cartData !== null) {
    cartData.map((data) => {
      const { quantity, price } = data;
      subtotal += parseInt(quantity, 10) * parseInt(price, 10);
      return subtotal;
    });
  }

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Shopping Cart"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <div className="">
          <Row gutter={15}>
            <Col md={24}>
              <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                <Row gutter={30}>
                  <Col xxl={17} xs={24}>
                    <Suspense
                      fallback={
                        <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                          <Skeleton className="w-full" paragraph={{ rows: 10 }} active />
                        </div>
                      }
                    >
                      <Routes>
                        <Route index element={<CartTable />} />
                      </Routes>
                    </Suspense>
                  </Col>
                  <Col xxl={7} xs={24}>
                    <Suspense
                      fallback={
                        <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                          <Skeleton paragraph={{ rows: 10 }} active />
                        </div>
                      }
                    >
                      <Ordersummary subtotal={subtotal} checkout={false} />
                    </Suspense>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
}

export default ShoppingCart;
