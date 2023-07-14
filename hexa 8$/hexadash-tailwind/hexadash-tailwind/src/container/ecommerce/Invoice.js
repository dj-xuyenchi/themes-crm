import UilImport from '@iconscout/react-unicons/icons/uil-import';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import { Col, Row, Table } from 'antd';
import { useSelector } from 'react-redux';
import { Button } from '../../components/buttons/buttons';
import Heading from '../../components/heading/heading';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle, PaginationStyle } from '../styled';

function Invoice() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Invoice',
    },
  ];
  const { mainContent, rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
  const invoiceTableData = [
    {
      key: '1',
      row: <span className="text-body dark:text-white60 text-[15px]">1</span>,
      details: (
        <>
          <div className="min-w-[300px]">
            <Heading className="text-dark dark:text-white87 text-[15px] font-medium" as="h6">
              Fiber Base Chair
            </Heading>
            <ul className="flex items-center mb-0 gap-x-2.5">
              <li>
                <span className="ltr:mr-[5px] rtl:ml-[5px] text-dark dark:text-white87 text-[15px] font-medium">
                  Size :
                </span>
                <span className="text-body dark:text-white60 text-[15px]">Large</span>
              </li>
              <li>
                <span className="ltr:mr-[5px] rtl:ml-[5px] text-dark dark:text-white87 text-[15px] font-medium">
                  {' '}
                  Color :
                </span>
                <span className="text-body dark:text-white60 text-[15px">Brown</span>
              </li>
            </ul>
          </div>
        </>
      ),
      unit: <span className="text-body dark:text-white60 text-[15px]">$248.66</span>,
      quantity: <span className="text-body dark:text-white60 text-[15px]">3</span>,
      total: <span className="text-body dark:text-white60 text-[15px]">$943.30</span>,
    },
    {
      key: '2',
      row: <span className="text-body dark:text-white60 text-[15px]">2</span>,
      details: (
        <>
          <div className="min-w-[300px]">
            <Heading className="text-dark dark:text-white87 text-[15px] font-medium" as="h6">
              Panton Tunior Chair
            </Heading>
            <ul className="flex items-center mb-0 gap-x-2.5">
              <li>
                <span className="ltr:mr-[5px] rtl:ml-[5px] text-dark dark:text-white87 text-[15px] font-medium">
                  Size :
                </span>
                <span className="text-body dark:text-white60 text-[15px]">Large</span>
              </li>
              <li>
                <span className="ltr:mr-[5px] rtl:ml-[5px] text-dark dark:text-white60 text-[15px] font-medium">
                  {' '}
                  Color :
                </span>
                <span className="text-body dark:text-white60 text-[15px">Brown</span>
              </li>
            </ul>
          </div>
        </>
      ),
      unit: <span className="text-body dark:text-white60 text-[15px]">$248.66</span>,
      quantity: <span className="text-body dark:text-white60 text-[15px]">2</span>,
      total: <span className="text-body dark:text-white60 text-[15px]">$943.30</span>,
    },
  ];

  const invoiceTableColumns = [
    {
      title: '#',
      dataIndex: 'row',
      key: 'row',
    },
    {
      title: 'Product Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Price Per Unit',
      dataIndex: 'unit',
      key: 'unit',
      className: 'text-end',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      className: 'text-end',
    },
    {
      title: 'Order Total',
      dataIndex: 'total',
      key: 'total',
      className: 'text-end',
    },
  ];

  const printInvoice = () => {
    window.print();
  };

  return (
    <>
      <PageHeader
        routes={PageRoutes}
        title="Invoice"
        className="flex  justify-between items-center px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <div className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
        <Row gutter={15}>
          <Col md={24}>
            <GlobalUtilityStyle className="bg-white dark:bg-white10 p-[25px] rounded-10">
              <div className="my-[50px]">
                <Row>
                  <Col sm={12} xs={24}>
                    <figure className="sm:flex sm:items-center sm:justify-center">
                      {mainContent === 'lightMode' ? (
                        <img src={require('../../static/img/logo_dark.svg').default} alt="" />
                      ) : (
                        <img src={require('../../static/img/logo_white.svg').default} alt="" />
                      )}
                    </figure>
                  </Col>
                  <Col sm={12} xs={24}>
                    <address className="mb-1 font-medium text-end sm:text-center text-body dark:text-white60">
                      Admin Company <br />
                      795 Folsom Ave, Suite 600 <br />
                      San Francisco, CA 94107, USA <br />
                      Reg. number : 245000003513
                    </address>
                  </Col>
                </Row>
              </div>
              <div className="flex items-center justify-around flex-wrap gap-[20px] bg-regularBG dark:bg-regularBGdark pt-[30px] px-[50px] pb-[25px] rounded-[20px]">
                <article>
                  <Heading className="mb-2 text-4xl font-semibold text-dark dark:text-white87" as="h3">
                    Invoice
                  </Heading>
                  <p className="mb-1 text-body dark:text-white60 text-[15px] font-medium">No : #642678</p>
                  <p className="mb-1 text-body dark:text-white60 text-[15px] font-medium">Date : Jan 17, 2020</p>
                </article>
                <div className="max-w-[310px] mx-auto text-center border dark:border-white10 rounded-[10px]">
                  <div className="bg-white dark:bg-white10 p-[25px] rounded-[10px]">
                    {mainContent === 'lightMode' ? (
                      <img style={{ width: '100%' }} src={require('../../static/img/barcode.png')} alt="barcode" />
                    ) : (
                      <img style={{ width: '100%' }} src={require('../../static/img/bar-dark.png')} alt="barcode" />
                    )}
                    <p className="mb-0 text-theme-gray dark:text-white60">8364297359912267</p>
                  </div>
                </div>
                <address className="text-end sm:text-center">
                  <Heading className="mb-[5px] text-dark dark:text-white87 text-[15px] font-medium uppercase" as="h5">
                    Invoice To:
                  </Heading>
                  <p className="mb-0 text-body dark:text-white60 text-[15px]">
                    Stanley Jones <br />
                    795 Folsom Ave, Suite 600 <br />
                    San Francisco, CA 94107, USA
                  </p>
                </address>
              </div>

              <br />
              <br />
              <PaginationStyle>
                <div className="ant-pagination-custom-style table-responsive table-head-rounded table-th-shape-none table-th-border-none table-last-th-text-end hover-tr-none table-last-td-text-end dark:[&>div>div>div>div>div>div>table>tbody>tr>td]:border-white10 ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-10 rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none">
                  <Table dataSource={invoiceTableData} columns={invoiceTableColumns} pagination={false} />
                </div>
              </PaginationStyle>

              <Row justify="end">
                <Col xxl={4} xl={5} sm={8} xs={14} offset={rtl ? 0 : 10}>
                  <div className="max-w-[650px] mx-auto">
                    <ul className="my-[22px]">
                      <li className="flex items-center justify-between w-full">
                        <span className="font-medium text-body dark:text-white60">Subtotal :</span>
                        <span className="font-medium text-dark dark:text-white87">{`$${497.32}`}</span>
                      </li>
                      <li className="flex items-center justify-between w-full">
                        <span className="font-medium text-body dark:text-white60">Discount :</span>
                        <span className="font-medium text-dark dark:text-white87">{`$${-20}`}</span>
                      </li>
                      <li className="flex items-center justify-between w-full">
                        <span className="font-medium text-body dark:text-white60">Shipping Charge :</span>
                        <span className="font-medium text-dark dark:text-white87">{`$${30}`}</span>
                      </li>
                    </ul>
                    <Heading className="flex items-center justify-between w-full" as="h4">
                      <span className="text-base font-medium text-dark dark:text-white87">Total : </span>
                      <span className="text-lg font-semibold text-primary">{`$${507.32}`}</span>
                    </Heading>
                  </div>
                </Col>
              </Row>
              <Row justify="end">
                <Col sm={24} offset={0}>
                  <div className="mt-[90px] sm:mt-[50px] mb-[10px] text-end gap-[10px] flex items-center flex-wrap justify-end">
                    <Button
                      size="default"
                      shape="round"
                      type="default"
                      className="inline-flex items-center bg-regularBG dark:bg-regularBGdark h-11 gap-x-1.5 px-[25px] text-body dark:text-white60 text-sm font-semibold border border-regular dark:border-white10"
                      onClick={() => printInvoice()}
                    >
                      <UilPrint className="w-[14px] h-[14px]" />
                      Print
                    </Button>
                    <Button
                      size="default"
                      shape="round"
                      type="default"
                      className="inline-flex items-center bg-regularBG dark:bg-regularBGdark h-11 gap-x-1.5 px-[25px] text-body dark:text-white60 text-sm font-semibold border border-regular dark:border-white10"
                    >
                      <UilMessage className="w-[14px] h-[14px]" />
                      Send Invoice
                    </Button>
                    <Button
                      size="default"
                      shape="round"
                      type="primary"
                      className="inline-flex items-center bg-primary h-11 gap-x-1.5 px-[25px] text-white dark:text-white87 text-sm font-semibold border border-primary"
                    >
                      <UilImport className="w-[14px] h-[14px]" />
                      Download
                    </Button>
                  </div>
                </Col>
              </Row>
            </GlobalUtilityStyle>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Invoice;
