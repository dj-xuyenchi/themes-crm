import React, { lazy, Suspense, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WizardWrapper } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';

import { Cards } from '../../components/cards/frame/cards-frame';
import { cartGetData } from '../../redux/cart/actionCreator';

const Checkout = lazy(() => import('./overview/CheckoutWizard'));
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
        className="flex justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Shopping Cart"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={15}>
          <Col md={24}>
            <Cards className="[&>.ant-card-body]:p-[40px] xl:[&>.ant-card-body]:px-[15px]" headless>
              <Row gutter={30}>
                <Col xxl={17} xs={24} className="3xl:mb-[50px]">
                  <WizardWrapper>
                    <Suspense
                      fallback={
                        <Cards headless>
                          <Skeleton paragraph={{ rows: 10 }} active />
                        </Cards>
                      }
                    >
                      <Routes>
                        <Route index element={<Checkout />} />
                      </Routes>
                    </Suspense>
                  </WizardWrapper>
                </Col>
                <Col xxl={7} xs={24}>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton paragraph={{ rows: 10 }} active />
                      </Cards>
                    }
                  >
                    <Ordersummary subtotal={subtotal} checkout />
                  </Suspense>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default ShoppingCart;
