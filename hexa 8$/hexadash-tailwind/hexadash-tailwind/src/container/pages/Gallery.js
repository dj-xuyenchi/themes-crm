import React, { useState, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Spin, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

import { PageHeader } from '../../components/page-headers/page-headers';
import { galleryFilter } from '../../redux/gallary/actionCreator';

const GalleryCards = lazy(() => import('./overview/GalleryCard'));

function Gallery() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Gallery',
    },
  ];

  const dispatch = useDispatch();
  const { gallery, isLoading } = useSelector((state) => {
    return {
      gallery: state.gallery.data,
      isLoading: state.gallery.loading,
    };
  });

  const [state, setState] = useState({
    activeClass: '',
  });

  const handleChange = (value) => {
    dispatch(galleryFilter('category', value));
    setState({
      ...state,
      activeClass: value,
    });
  };

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Gallery"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={25}>
          <Col xs={24}>
            <div className="px-4 mb-5 bg-white dark:bg-white10 rounded-10">
              <ul className="flex flex-wrap items-center">
                <li>
                  <Link
                    className={
                      state.activeClass === ''
                        ? 'relative inline-flex px-3 py-4 text-primary after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:rounded-10'
                        : 'inline-flex px-3 py-4 text-light dark:text-white60'
                    }
                    onClick={() => handleChange('')}
                    to="#"
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      state.activeClass === 'webDesign'
                        ? 'relative inline-flex px-3 py-4 text-primary after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:rounded-10'
                        : 'inline-flex px-3 py-4 text-light dark:text-white60'
                    }
                    onClick={() => handleChange('webDesign')}
                    to="#"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      state.activeClass === 'uiDesign'
                        ? 'relative inline-flex px-3 py-4 text-primary after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:rounded-10'
                        : 'inline-flex px-3 py-4 text-light dark:text-white60'
                    }
                    onClick={() => handleChange('uiDesign')}
                    to="#"
                  >
                    UI Design
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      state.activeClass === 'wireframe'
                        ? 'relative inline-flex px-3 py-4 text-primary after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:rounded-10'
                        : 'inline-flex px-3 py-4 text-light dark:text-white60'
                    }
                    onClick={() => handleChange('wireframe')}
                    to="#"
                  >
                    Wireframe
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      state.activeClass === 'Presentation'
                        ? 'relative inline-flex px-3 py-4 text-primary after:absolute ltr:after:left-0 rtl:after:right-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:rounded-10'
                        : 'inline-flex px-3 py-4 text-light dark:text-white60'
                    }
                    onClick={() => handleChange('Presentation')}
                    to="#"
                  >
                    Presentation
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          {isLoading ? (
            <Col xs={24}>
              <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
                <Spin />
              </div>
            </Col>
          ) : (
            gallery.map((item) => {
              const { id } = item;
              return (
                <Col key={id} xxl={6} lg={8} sm={12} xs={24}>
                  <Suspense
                    fallback={
                      <div className="bg-white dark:bg-white10 p-[25px] mb-[25px] rounded-4">
                        <Skeleton active />
                      </div>
                    }
                  >
                    <GalleryCards item={item} />
                  </Suspense>
                </Col>
              );
            })
          )}
        </Row>
      </main>
    </>
  );
}

export default Gallery;
