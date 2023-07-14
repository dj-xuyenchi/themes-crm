import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import DataTable from '../../components/table/DataTable';
import { tableReadData } from '../../redux/data-filter/actionCreator';
import { BorderLessHeading, Main } from '../styled';

const DataTables = () => {
  const dispatch = useDispatch();

  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Table',
    },
  ];

  useEffect(() => {
    if (dispatch) {
      dispatch(tableReadData())
    }
    Prism.highlightAll();
  }, [dispatch]);

  const { TableData } = useSelector(state => {
      return {
          TableData: state.dataTable.tableData
      };
  });

  const tableDataScource = [];

  if(TableData.length >0){
    TableData.map(item => {
      const { id, name, country, company, position, status, date } = item;
      return tableDataScource.push({
        key: id,
        id: `#${id}`,
        user: (
          <span className="ninjadash-username">{name}</span>
        ),
        country: (
          <span>{country}</span>
        ),
        company: (
          <span>{company}</span>
        ),
        position,
        date,
        status: (
          <span className={`ninjadash-status ninjadash-status-${status}`}>{status}</span>
        ),
        action: (
          <div className="table-actions">
            <Link className="view" to={`#`}>
              <UilEye />
            </Link>
            <Link className="edit" to="#"><UilEdit /></Link>
            <Link className="delete" to="#">
              <UilTrash />
            </Link>
          </div>
        ),
      });
    });
  }

  const dataTableColumn = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'coutry',
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
    {
      title: 'Join Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ]

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Table" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <BorderLessHeading>
              <Cards title="Data Table">
                <DataTable filterOption filterOnchange={true} tableData={ tableDataScource } columns={dataTableColumn} rowSelection={false}/>
                <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import React from 'react';
import { Main } from '../styled';

const tableDataScource = [];

const dataTableColumn = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'coutry',
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
  {
    title: 'Join Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
    width: '90px',
  },
]

const DataTables = () => {
  return (
    <Main>
      <DataTable filterOption filterOnchange={true} tableData={ tableDataScource } columns={dataTableColumn} rowSelection={true}/>
    </Main>
  );
};

export default DataTables;
`
}
                            </code>
                        </pre>
                    </div>
              </Cards>
            </BorderLessHeading>
          </Col>
          <Col xs={24}>
            <BorderLessHeading>
              <Cards title="Data Table 2">
                <DataTable filterOption filterOnchange={true} tableData={ tableDataScource } columns={dataTableColumn} rowSelection={true}/>
                <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import React from 'react';
import { Main } from '../styled';

const tableDataScource = [];

const dataTableColumn = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'coutry',
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
  {
    title: 'Join Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
    width: '90px',
  },
]

const DataTables = () => {
  return (
    <Main>
      <DataTable filterOption filterOnchange={true} tableData={ tableDataScource } columns={dataTableColumn} rowSelection={true}/>
    </Main>
  );
};

export default DataTables;
`
}
                            </code>
                        </pre>
                    </div>
              </Cards>
            </BorderLessHeading>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default DataTables;
