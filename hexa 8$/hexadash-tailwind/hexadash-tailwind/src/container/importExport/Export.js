import React, { useState } from 'react';
import { Row, Col, Table, Modal, Form, Input, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CSVLink } from 'react-csv';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Button } from '../../components/buttons/buttons';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { contactSearchData } from '../../redux/contact/actionCreator';
import { alertModal } from '../../components/modals/antd-modals';
import { GlobalUtilityStyle, PaginationStyle } from '../styled';

function Import() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Export',
    },
  ];
  const dispatch = useDispatch();
  const { users } = useSelector((state) => {
    return {
      users: state.Contact.data,
    };
  });
  const [state, setState] = useState({
    isModalVisible: false,
    fileName: 'strikingDash',
    convertedTo: 'csv',
    selectedRowKeys: 0,
    selectedRows: [],
  });

  const showModal = () => {
    setState({
      ...state,
      isModalVisible: true,
    });
  };
  const handleCancel = () => {
    setState({
      ...state,
      isModalVisible: false,
    });
  };

  const handleSearch = (searchText) => {
    dispatch(contactSearchData(searchText));
  };

  const usersTableData = [];
  const csvData = [['id', 'name', 'email', 'company', 'position']];

  users
    .sort((a, b) => {
      return b.time - a.time;
    })
    .map((user) => {
      const { id, name, designation, email, company } = user;
      return usersTableData.push({
        key: id,
        user: <span className="text-body dark:text-white60 text-[15px]">{name}</span>,
        email: <span className="text-body dark:text-white60 text-[15px]">{email}</span>,
        company: <span className="text-body dark:text-white60 text-[15px]">{company}</span>,
        position: <span className="text-body dark:text-white60 text-[15px]">{designation}</span>,
      });
    });

  const usersTableColumns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setState({ ...state, selectedRowKeys, selectedRows });
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  state.selectedRows.map((member) => {
    const { key, user, position, email, company } = member;
    return csvData.push([key, user, email, company, position]);
  });

  const { isModalVisible } = state;

  const warning = () => {
    alertModal.warning({
      title: 'Please Select your Required Rows!',
    });
  };

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const xlsxExtension = '.xlsx';

  const exportToXLSX = (inputData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(inputData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + xlsxExtension);
    setState({
      ...state,
      isModalVisible: false,
    });
  };

  const updateFileName = (e) => {
    setState({
      ...state,
      fileName: e.target.value,
    });
  };
  const updateFileType = (value) => {
    setState({
      ...state,
      convertedTo: value,
    });
  };
  const { Option } = Select;
  const { fileName, convertedTo } = state;
  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Export"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 text-theme-gray dark:text-white60 text-[15px] rounded-10 relative p-[25px]">
              <div className="flex flex-wrap items-center justify-between gap-[15px] sm:justify-center mb-[30px]">
                {state.selectedRows.length ? (
                  <>
                    <Button className="h-11 px-5" onClick={showModal} type="primary">
                      Export
                    </Button>
                    <Modal
                      title="Export File"
                      wrapClassName="hexadash_export-wrap"
                      visible={isModalVisible}
                      footer={null}
                      onCancel={handleCancel}
                    >
                      <Form name="contact">
                        <Form.Item name="f_name">
                          <Input placeholder="File Name" value={fileName} onChange={updateFileName} />
                        </Form.Item>
                        <Form.Item initialValue="CSV" name="f_type">
                          <Select onChange={updateFileType}>
                            <Option value="csv">CSV</Option>
                            <Option value="xlxs">xlxs</Option>
                          </Select>
                        </Form.Item>
                        <div className="flex items-center gap-2.5">
                          {convertedTo === 'csv' ? (
                            <CSVLink filename={`${fileName}.csv`} data={csvData}>
                              <Button onClick={handleCancel} className="h-11 px-5" type="primary">
                                Export
                              </Button>
                            </CSVLink>
                          ) : (
                            <Button
                              className="h-11 px-5"
                              onClick={() => exportToXLSX(csvData, fileName)}
                              type="primary"
                            >
                              Eport
                            </Button>
                          )}
                          <Button
                            htmlType="submit"
                            onClick={handleCancel}
                            className="h-11 px-5"
                            size="default"
                            type="white"
                            outlined
                          >
                            Cancel
                          </Button>
                        </div>
                      </Form>
                    </Modal>
                  </>
                ) : (
                  <Button className="h-11 px-5" onClick={warning} type="primary">
                    Export
                  </Button>
                )}

                <AutoComplete
                  onSearch={handleSearch}
                  // dataSource={notData}
                  placeholder="Search by Name"
                  // width="100%"
                  patterns
                />
              </div>
              <GlobalUtilityStyle>
                <PaginationStyle>
                  <div className="table-responsive hover-tr-none table-th-shape-none table-tr-selected-background-transparent table-last-th-text-right table-th-border-none table-head-rounded table-td-border-none ant-pagination-custom-style [&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:px-6 [&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:px-6 ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-l-[10px] rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-r-[10px] rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:first-child]:rounded-none ltr:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-r-[10px] rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-l-[10px] rtl:[&>div>div>div>div>div>.ant-table-content>table>thead>tr>th:last-child]:rounded-none dark-border-row [&>div>div>div>div>div>.ant-table-content>table>tbody>tr>td:last-child]:px-6 [&>div>div>div>div>div>.ant-table-content>table>tbody>tr>td:first-child]:px-6 [&>div>div>div>div>div>.ant-table-content>table>tbody>tr>td:last-child]:text-end">
                    <Table
                      rowSelection={rowSelection}
                      dataSource={usersTableData}
                      columns={usersTableColumns}
                      pagination={{
                        defaultPageSize: 7,
                        total: usersTableData.length,
                        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                      }}
                    />
                  </div>
                </PaginationStyle>
              </GlobalUtilityStyle>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Import;
