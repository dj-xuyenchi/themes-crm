import React, { useEffect } from 'react';
import { Row, Col, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import Prism from "prismjs";

const Tables = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <PageHeader ghost title="Table" />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <Cards title="Basic Usage">
              <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
              <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import React from 'react';
import { Main } from '../styled';
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
const Tables = () => {
  return (
    <Main>
      <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
    </Main>
  );
};

export default Tables;
`
}
                            </code>
                        </pre>
                    </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Tables;
