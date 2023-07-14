import React, { useEffect } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilLock from '@iconscout/react-unicons/icons/uil-lock';
import Prism from "prismjs";
import { HorizontalFormStyleWrap } from './Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';

const HorizontalIconForm = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <BasicFormWrapper>
      <HorizontalFormStyleWrap>
        <Cards title="Horizontal Form With Icons">
          <Form name="horizontal-icno-from" layout="horizontal">
            <Row align="middle">
              <Col lg={8} md={9} xs={24}>
                <label htmlFor="name">Name</label>
              </Col>
              <Col lg={16} md={15} xs={24}>
                <Form.Item className="ninjadash-icon-left" name="name" initialValue="Duran Clayton">
                  <Input prefix={<UilUser />} placeholder="Enter Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col lg={8} md={9} xs={24}>
                <label htmlFor="email">Email Address</label>
              </Col>
              <Col lg={16} md={15} xs={24}>
                <Form.Item className="ninjadash-icon-left" name="email" initialValue="username@email.com">
                  <Input prefix={<UilEnvelope />} placeholder="Enter Email" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col lg={8} md={9} xs={24}>
                <label htmlFor="password">Password</label>
              </Col>
              <Col lg={16} md={15} xs={24}>
                <Form.Item name="password" initialValue="1234567">
                  <Input.Password prefix={<UilLock />} placeholder="Enter Password" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 16, offset: 8 }} md={{ span: 15, offset: 9 }} xs={{ span: 24, offset: 0 }}>
                <div className="ninjadash-form-action">
                  <Button className="btn-signin" htmlType="submit" type="light" size="large">
                    Cancel
                  </Button>
                  <Button className="btn-signin" type="primary" size="large">
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
          <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import { Form, Input, Button } from 'antd';
import { HorizontalFormStyleWrap } from './Style';
import { BasicFormWrapper } from '../../styled';

const HorizontalIconForm = () => {
  return (
    <BasicFormWrapper>
      <HorizontalFormStyleWrap>
        <Form name="horizontal-icno-from" layout="horizontal">
          <Row align="middle">
            <Col lg={8} md={9} xs={24}>
              <label htmlFor="name">Name</label>
            </Col>
            <Col lg={16} md={15} xs={24}>
              <Form.Item 
              className="ninjadash-icon-left" 
              name="name" 
              initialValue="Duran Clayton">
                <Input prefix={<UilUser />} placeholder="Enter Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col lg={8} md={9} xs={24}>
              <label htmlFor="email">Email Address</label>
            </Col>
            <Col lg={16} md={15} xs={24}>
              <Form.Item 
              className="ninjadash-icon-left" 
              name="email" 
              initialValue="username@email.com">
                <Input prefix={<UilEnvelope />} placeholder="Enter Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col lg={8} md={9} xs={24}>
              <label htmlFor="password">Password</label>
            </Col>
            <Col lg={16} md={15} xs={24}>
              <Form.Item name="password" initialValue="1234567">
                <Input.Password prefix={<UilLock />} placeholder="Enter Password" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col 
            lg={{ span: 16, offset: 8 }}
            md={{ span: 15, offset: 9 }} 
            xs={{ span: 24, offset: 0 }}
            >
              <div className="ninjadash-form-action">
                <Button className="btn-signin" 
                htmlType="submit" 
                type="light" size="large">
                  Cancel
                </Button>
                <Button className="btn-signin" type="primary" size="large">
                  Save
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </HorizontalFormStyleWrap>
    </BasicFormWrapper>
  );
};
export { HorizontalIconForm };
`
}
                            </code>
                        </pre>
                    </div>
        </Cards>
      </HorizontalFormStyleWrap>
    </BasicFormWrapper>
  );
};

export { HorizontalIconForm };
