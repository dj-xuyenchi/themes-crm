import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { Col, Row, Table } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GlobalUtilityStyle } from '../../../styled';
import salesLocations from '../../../../demoData/table-data.json';

const { salesLocation } = salesLocations;

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
const moreContent = (
  <div className="block bg-white dark:bg-[#1b1e2b] shadow-regular dark:shadow-[0_5px_30px_rgba(1,4,19,.60)] rounded-4">
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilPrint className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>Printer</span>
    </NavLink>
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilBookOpen className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>PDF</span>
    </NavLink>
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilFileAlt className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>Google Sheets</span>
    </NavLink>
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilTimes className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>Excel (XLSX)</span>
    </NavLink>
    <NavLink
      className="flex items-center text-theme-gray dark:text-white60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white10 px-3 py-1.5 text-sm active"
      to="#"
    >
      <UilFile className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2" />
      <span>CSV</span>
    </NavLink>
  </div>
);

const regionColumns = [
  {
    title: 'Top Region',
    dataIndex: 'region',
    key: 'region',
    className: 'px-4 py-2.5 last:text-end text-dark dark:text-white87 text-15 font-medium border-none before:hidden',
  },
  {
    title: 'Order',
    dataIndex: 'order',
    key: 'order',
    className: 'px-4 py-2.5 last:text-end text-body dark:text-white60 border-none before:hidden',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
    className: 'px-4 py-2.5 min-3xl:last:text-center text-body dark:text-white60 border-none before:hidden',
  },
];

const SaleByLocation = React.memo(() => {
  const { rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });
  function renderThumb({ style }) {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} />;
  }
  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      [rtl ? 'left' : 'right']: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div className="[&>div]:bg-regular dark:[&>div]:bg-[#32333f]" style={thumbStyle} />;
  };
  function renderView({ style }) {
    const customStyle = {
      marginRight: rtl && 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div style={{ ...style, ...customStyle }} />;
  }
  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };
  renderView.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };
  // Initialize Default Sales Location
  const [state, setState] = useState({
    locationTab: 'today',
  });

  /* State destructuring */
  const { locationTab } = state;
  const handleChangeLocation = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      locationTab: value,
    });
  };

  // Make Data Array for Table
  const saleLocationData = [];
  if (salesLocation !== null)
    salesLocation[locationTab].map((item, key) => {
      return saleLocationData.push({
        key: key + 1,
        region: item[0],
        order: item[1],
        revenue: item[2],
      });
    });

  // Map Configuration
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [content, setContent] = useState('');
  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = () => {
    setPosition(position);
  };

  return (
    <GlobalUtilityStyle className="h-full">
      <Cards
        isbutton={
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  locationTab === 'today'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 hover:text-primary text-13'
                }
                onClick={(e) => handleChangeLocation('today', e)}
                to="#"
              >
                Today
              </Link>
            </li>
            <li>
              <Link
                className={
                  locationTab === 'week'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleChangeLocation('week', e)}
                to="#"
              >
                Week
              </Link>
            </li>
            <li>
              <Link
                className={
                  locationTab === 'month'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white10 px-3 h-8 text-primary dark:text-white87 text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md'
                }
                onClick={(e) => handleChangeLocation('month', e)}
                to="#"
              >
                Month
              </Link>
            </li>
          </ul>
        }
        title="Sales by Location"
        size="large"
        more={moreContent}
        className="h-full [&>.ant-card-body]:pb-[30px] [&>.ant-card-body]:pt-[25px] [&>.ant-card-body]:px-[25px] ant-card-head-px-25 ant-card-head-title-base border-none"
      >
        <Row>
          <Col xxl={12} md={13} xs={24}>
            <div className="border-1 border-solid border-regular dark:border-white10 dark:border-none rounded-[4px]">
              <Scrollbars
                autoHeight
                autoHeightMin={280}
                autoHide
                renderThumbVertical={renderThumb}
                renderView={renderView}
                renderTrackVertical={renderTrackVertical}
                renderTrackHorizontal={(props) => (
                  <div {...props} style={{ display: 'none' }} className="track-horizontal" />
                )}
              >
                <div className="table-responsive dark:[&>div>div>div>.ant-table]:border-white10 dark:[&>div>div>div>.ant-table]:border-1  border-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-4 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
                  <Table columns={regionColumns} dataSource={saleLocationData} pagination={false} />
                </div>
              </Scrollbars>
            </div>
          </Col>
          <Col xxl={12} md={11} xs={24} className="px-[25px]">
            <div className="min-ssm:h-full h-[250px] overflow-hidden">
              <ReactTooltip>{content}</ReactTooltip>
              <ComposableMap
                className="h-full"
                data-tip=""
                data-html
                projectionConfig={{
                  scale: window.innerWidth <= 440 ? 160 : 160,
                }}
                viewBox="110, 50, 800, 350"
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
                          strokeWidth={0.4}
                          style={{
                            default: {
                              fill: '#DBE1E8',
                              outline: 'none',
                            },
                            hover: {
                              fill: '#8231D3',
                              outline: 'none',
                              fillOpacity: 1,
                            },
                            pressed: {
                              fill: '#8231D3',
                              outline: 'none',
                            },
                            markerStyle: {
                              initial: {
                                fill: '#8231D3',
                                stroke: '#8231D3',
                                strokeWidth: 4,
                              },
                            },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
              <div className="absolute flex flex-col items-center right-5 bottom-5">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="flex justify-center bg-white rounded-md rounded-b-none dark:bg-white10 border-regular border-1 dark:border-white30 w-7 h-7 dark:text-white87"
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
                  className="flex justify-center bg-white rounded-md rounded-t-none dark:bg-white10 border-regular border-1 dark:border-white30 border-t-none w-7 h-7 dark:text-white87"
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
          </Col>
        </Row>
      </Cards>
    </GlobalUtilityStyle>
  );
});

SaleByLocation.propTypes = {
  rtl: PropTypes.bool,
};

export default SaleByLocation;
