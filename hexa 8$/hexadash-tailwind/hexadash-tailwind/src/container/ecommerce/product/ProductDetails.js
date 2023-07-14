import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { PageHeader } from '../../../components/page-headers/page-headers';

import { filterSinglePage } from '../../../redux/product/actionCreator';

const DetailsRight = lazy(() => import('./overview/DetailsRight'));

function ProductDetails() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Product Details',
    },
  ];
  const dispatch = useDispatch();
  const params = useParams();

  const { products, product } = useSelector((state) => {
    return {
      product: state.product.data,
      products: state.products.data,
    };
  });

  useEffect(() => {
    if (filterSinglePage) {
      dispatch(filterSinglePage(parseInt(params.id, 10), products));
    }
  }, [params.id, dispatch, products]);

  const { img, category } = product[0];

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Product Details"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
          <div className="p-[15px] md:px-0">
            <Row gutter={30}>
              <Col xs={24} lg={10}>
                <figure className="mb-0">
                  <img className="w-full rounded-[10px]" src={require(`../../../${img}`)} alt="" />
                </figure>
                <div className="mt-[15px] md:mb-[15px]">
                  <div className="gap-[15px] flex items-center flex-wrap">
                    {products.length
                      ? products
                          .filter((value) => {
                            return value.category === category;
                          })
                          .map((value, index) => {
                            return (
                              index <= 3 && (
                                <figure className="mb-0 flex-[0_0_15%]">
                                  <Link to={`/admin/ecommerce/productDetails/${value.id}`}>
                                    <img
                                      className="w-full min-w-[90px] md:min-w-[60px] rounded-10 md:rounded-4"
                                      src={require(`../../../${value.img}`)}
                                      alt=""
                                    />
                                  </Link>
                                </figure>
                              )
                            );
                          })
                      : null}
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={14}>
                <Suspense
                  fallback={
                    <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                      <Skeleton active />
                    </div>
                  }
                >
                  <DetailsRight product={product[0]} />
                </Suspense>
              </Col>
            </Row>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetails;
