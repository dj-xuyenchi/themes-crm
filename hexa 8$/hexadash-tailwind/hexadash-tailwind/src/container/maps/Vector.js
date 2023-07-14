/* eslint-disable react/jsx-no-bind */
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

function VectorMaps() {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [content, setContent] = useState('');

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(pos) {
    setPosition(pos);
  }
  return (
    <>
      <PageHeader
        title="Vector Map"
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] flex-1 px-8 pb-[20px] bg-transparent">
          <Row gutter={25}>
            <Col xs={24}>
              <div className="bg-white dark:bg-white10 m-0 p-0 mb-[25px] rounded-10 relative">
                <div className="py-[16px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <Heading as="h4" className="text-lg font-medium mb-0">
                    World Map
                  </Heading>
                </div>
                <div className="p-[25px]">
                  <ReactTooltip>{content}</ReactTooltip>
                  <ComposableMap
                    data-tip=""
                    data-html
                    projectionConfig={{
                      scale: window.innerWidth <= 479 ? 190 : 120,
                    }}
                    viewBox={`20, ${window.innerWidth <= 479 ? 20 : 150}, 800, ${window.innerWidth <= 479 ? 500 : 320}`}
                  >
                    <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              onMouseEnter={() => {
                                const { name } = geo.properties;
                                setContent(`${name}`);
                              }}
                              onMouseLeave={() => {
                                setContent('');
                              }}
                              fill="#DBE1E8"
                              stroke="#FFF"
                              strokeWidth={0.5}
                              style={{
                                default: {
                                  fill: '#DBE1E8',
                                  outline: 'none',
                                },
                                hover: {
                                  fill: '#8e1dce',
                                  outline: 'none',
                                },
                                pressed: {
                                  fill: '#8e1dce',
                                  outline: 'none',
                                },
                              }}
                            />
                          ))
                        }
                      </Geographies>
                    </ZoomableGroup>
                  </ComposableMap>
                  <div className="flex items-center flex-col absolute ltr:right-5 rtl:left-5 bottom-5">
                    <button
                      type="button"
                      onClick={handleZoomIn}
                      className="flex justify-center bg-white dark:text-white87 dark:bg-white10 w-7 h-7 border border-regular dark:border-white10 rounded-md rounded-b-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="24"
                        viewBox="0 0 24 24"
                        className="stroke-body dark:stroke-white60"
                        strokeWidth="3"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      className="flex justify-center dark:text-white87 bg-white dark:bg-white10 w-7 h-7 border border-regular dark:border-white10 rounded-md rounded-t-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="24"
                        viewBox="0 0 24 24"
                        className="stroke-body dark:stroke-white60"
                        strokeWidth="3"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default VectorMaps;
