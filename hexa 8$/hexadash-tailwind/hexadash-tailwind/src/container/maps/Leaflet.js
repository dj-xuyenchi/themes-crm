import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import Heading from '../../components/heading/heading';
import { GlobalUtilityStyle } from '../styled';
import {
  LeafletMapBasic,
  LeafletMapMultipleIcon,
  LeafletMapCustomIcon,
  LeafletMarkerCluster,
} from '../../components/maps/leaflet';

const place = [
  {
    id: 1,
    position: [50.797897, -1.077641],
  },
  {
    id: 2,
    position: [50.798897, -1.013641],
  },
  {
    id: 3,
    position: [50.7997799, -1.100641],
  },
];

function OsMap() {
  return (
    <>
      <PageHeader
        title="Openstreet Maps (Leaflet)"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] flex-1 px-8 pb-[20px] bg-transparent">
          <Row gutter={25}>
            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                <div className="py-[16px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <Heading as="h4" className="text-lg font-medium mb-0">
                    Leaflet Basic Map
                  </Heading>
                </div>
                <div className="p-[25px]">
                  <LeafletMapBasic latitude={50.797897} longitude={-1.077641} width="100%" height="600px" zoom={15} />
                </div>
              </div>
            </Col>

            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                <div className="py-[16px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <Heading as="h4" className="text-lg font-medium mb-0">
                    Leaflet Multiple Icon
                  </Heading>
                </div>
                <div className="p-[25px]">
                  <LeafletMapMultipleIcon
                    data={place}
                    latitude={50.797897}
                    longitude={-1.077641}
                    width="100%"
                    height="600px"
                    zoom={12}
                  />
                </div>
              </div>
            </Col>

            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                <div className="py-[16px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <Heading as="h4" className="text-lg font-medium mb-0">
                    Leaflet Custom Icon
                  </Heading>
                </div>
                <div className="p-[25px]">
                  <LeafletMapCustomIcon
                    faIcon="fa fa-thumb-tack fa-3x"
                    data={place}
                    latitude={50.797897}
                    longitude={-1.077641}
                    width="100%"
                    height="600px"
                    zoom={12}
                  />
                </div>
              </div>
            </Col>

            <Col md={12} xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                <div className="py-[16px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <Heading as="h4" className="text-lg font-medium mb-0">
                    Leaflet Cluster Map
                  </Heading>
                </div>
                <div className="p-[25px]">
                  <LeafletMarkerCluster
                    faIcon="fa fa-thumb-tack fa-3x"
                    data={place}
                    latitude={50.797897}
                    longitude={-1.077641}
                    width="100%"
                    height="600px"
                    zoom={12}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default OsMap;
