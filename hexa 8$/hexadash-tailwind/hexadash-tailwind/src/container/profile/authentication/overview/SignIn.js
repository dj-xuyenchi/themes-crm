import React, { useState, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from 'react-svg';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import UilGithub from '@iconscout/react-unicons/icons/uil-github';
import { Auth0Lock } from 'auth0-lock';
import { login } from '../../../../redux/authentication/actionCreator';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { auth0options } from '../../../../config/auth0';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function SignIn() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });

  const lock = new Auth0Lock(clientId, domain, auth0options);

  const handleSubmit = useCallback(
    (values) => {
      dispatch(login(values, () => history('/admin')));
    },
    [history, dispatch],
  );

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  lock.on('authenticated', (authResult) => {
    lock.getUserInfo(authResult.accessToken, (error) => {
      if (error) {
        return;
      }

      handleSubmit();
      lock.hide();
    });
  });

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <div className="mt-6 bg-white rounded-md dark:bg-white10 shadow-regular dark:shadow-none">
          <div className="px-5 py-4 text-center border-b border-gray-200 dark:border-white10">
            <h2 className="mb-0 text-xl font-semibold text-dark dark:text-white87">Sign in HexaDash</h2>
          </div>
          <div className="px-10 pt-8 pb-6">
            <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item
                name="email"
                rules={[{ message: 'Please input your username or Email!', required: true }]}
                initialValue="hexadash@dm.com"
                label="Username or Email Address"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
              >
                <Input placeholder="name@example.com" />
              </Form.Item>
              <Form.Item
                name="password"
                initialValue="123456"
                label="Password"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white60 [&>div>div>label]:font-medium"
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <div className="flex flex-wrap items-center justify-between gap-[10px]">
                <Checkbox onChange={onChange} checked={state.checked} className="text-xs text-light dark:text-white60">
                  Keep me logged in
                </Checkbox>
                <NavLink className=" text-primary text-13" to="/forgotPassword">
                  Forgot password?
                </NavLink>
              </div>
              <Form.Item>
                <Button
                  className="w-full h-12 p-0 my-6 text-sm font-medium"
                  htmlType="submit"
                  type="primary"
                  size="large"
                >
                  {isLoading ? 'Loading...' : 'Sign In'}
                </Button>
              </Form.Item>
              <p className="relative text-body dark:text-white60 -mt-2.5 mb-6 text-center text-13 font-medium before:absolute before:w-full before:h-px ltr:before:left-0 rtl:before:right-0 before:top-1/2 before:-translate-y-1/2 before:z-10 before:bg-gray-200 dark:before:bg-white10">
                <span className="relative z-20 px-4 bg-white dark:bg-[#1b1d2a]">Or</span>
              </p>
              <ul className="flex items-center justify-center mb-0">
                <li className="px-1.5 pt-3 pb-2.5">
                  <Link
                    to="#"
                    className="flex items-center justify-center h-12 px-4 rounded-md google-social group bg-google-plus-transparent hover:bg-google-plus text-google-plus hover:text-white"
                  >
                    <ReactSVG
                      className="[&>div>svg>path]:fill-google-plus group-hover:[&>div>svg>path]:fill-white"
                      src={require(`../../../../static/img/icon/google-plus.svg`).default}
                    />
                  </Link>
                </li>
                <li className="px-1.5 pt-3 pb-2.5">
                  <Link
                    to="#"
                    className="flex items-center justify-center h-12 px-4 rounded-md facebook-social bg-facebook-transparent hover:bg-facebook text-facebook hover:text-white"
                  >
                    <UilFacebook />
                  </Link>
                </li>
                <li className="px-1.5 pt-3 pb-2.5">
                  <Link
                    to="#"
                    className="flex items-center justify-center h-12 px-4 rounded-md twitter-social bg-twitter-transparent hover:bg-twitter text-twitter hover:text-white"
                  >
                    <UilTwitter />
                  </Link>
                </li>
                <li className="px-1.5 pt-3 pb-2.5">
                  <Link
                    to="#"
                    className="flex items-center justify-center h-12 px-4 rounded-md github-social bg-github-transparent hover:bg-github text-github hover:text-white"
                  >
                    <UilGithub />
                  </Link>
                </li>
              </ul>
              <div className="flex flex-wrap justify-center">
                <Link
                  to="#"
                  className="inline-flex items-center bg-gray-100 dark:bg-white10 text-gray-500 dark:text-white87 h-12 px-6 m-1.5 font-medium rounded-md"
                  onClick={() => lock.show()}
                >
                  Sign In with Auth0
                </Link>
              </div>
            </Form>
          </div>
          <div className="p-6 text-center bg-gray-100 dark:bg-white10 rounded-b-md">
            <p className="mb-0 text-sm font-medium text-body dark:text-white60">
              Don`t have an account?
              <Link to="/register" className="ltr:ml-1.5 rtl:mr-1.5 text-info hover:text-primary">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SignIn;
