import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { PageHeader } from '../../components/page-headers/page-headers';
import { galleryFilter } from '../../redux/gallary/actionCreator';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

function GalleryTwo() {
  const dispatch = useDispatch();
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
        title="Gallery"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <UilPlus />
              Add New
            </Button>
          </div>,
        ]}
      />
      <main className="min-h-[715px] lg:min-h-[580px]">
        <Row gutter={25}>
          <Col xs={24}>
            <ul>
              <li>
                <Link
                  className={state.activeClass === '' ? 'active' : 'deactivate'}
                  onClick={() => handleChange('')}
                  to="#"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  className={state.activeClass === 'webDesign' ? 'active' : 'deactivate'}
                  onClick={() => handleChange('webDesign')}
                  to="#"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  className={state.activeClass === 'uiDesign' ? 'active' : 'deactivate'}
                  onClick={() => handleChange('uiDesign')}
                  to="#"
                >
                  UI Design
                </Link>
              </li>
              <li>
                <Link
                  className={state.activeClass === 'wireframe' ? 'active' : 'deactivate'}
                  onClick={() => handleChange('wireframe')}
                  to="#"
                >
                  Wireframe
                </Link>
              </li>
              <li>
                <Link
                  className={state.activeClass === 'Presentation' ? 'active' : 'deactivate'}
                  onClick={() => handleChange('Presentation')}
                  to="#"
                >
                  Presentation
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default GalleryTwo;
