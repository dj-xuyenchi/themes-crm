import { Button, Form, Input } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';
import { VerticalFormStyleWrap } from './Style';

const VerticalForm = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <BasicFormWrapper>
      <VerticalFormStyleWrap>
        <Cards title="Vertical Form">
          <Form name="ninjadash-vertical-form" layout="vertical">
            <Form.Item name="name" initialValue="Duran Clayton" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="email" initialValue="username@email.com" label="Email Address">
              <Input placeholder="Enter Email" />
            </Form.Item>
            <Form.Item name="password" initialValue="1234567" label="Password">
              <Input.Password />
            </Form.Item>
            <div className="ninjadash-form-action">
              <Button className="btn-signin" htmlType="submit" type="light" size="large">
                Cancel
              </Button>
              <Button className="btn-signin" type="primary" size="large">
                Save
              </Button>
            </div>
          </Form>
          <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
import { Form, Input, Button } from 'antd';
import { VerticalFormStyleWrap } from './Style';
import { BasicFormWrapper } from '../../styled';

const VerticalForm = () => {
  return (
    <Form name="ninjadash-vertical-form" layout="vertical">
      <Form.Item name="name" initialValue="Duran Clayton" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="email" 
        initialValue="username@email.com" 
        label="Email Address">
        <Input placeholder="Enter Email" />
      </Form.Item>
      <Form.Item name="password" initialValue="1234567" label="Password">
        <Input.Password />
      </Form.Item>
      <div className="ninjadash-form-action">
        <Button className="btn-signin" htmlType="submit" type="light" size="large">
          Cancel
        </Button>
        <Button className="btn-signin" type="primary" size="large">
          Save
        </Button>
      </div>
    </Form>
  );
};
export { VerticalForm };
`
}
                            </code>
                        </pre>
                    </div>
        </Cards>
      </VerticalFormStyleWrap>
    </BasicFormWrapper>
  );
};

export { VerticalForm };

