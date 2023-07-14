import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Checkbox } from 'antd';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import { useDispatch } from 'react-redux';
import { WizardWrapper } from '../../../styled';
import { WizardThree } from '../Style';
import { Steps } from '../../../../components/steps/steps';
import Heading from '../../../../components/heading/heading';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { cartGetData } from '../../../../redux/cart/actionCreator';

function WizardsThree() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 1,
    profile: {
      fname: '',
      lname: '',
      email: '',
      address: '',
    },
  });

  const { status, isFinished, current, profile } = state;

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  const next = () => {
    setState({
      ...state,
      status: 'process',
      current: current + 1,
    });
  };

  const prev = () => {
    setState({
      ...state,
      status: 'process',
      current: current - 1,
    });
  };

  const done = () => {
    const confirm = window.confirm('Are sure to submit order?');
    if (confirm) {
      setState({
        ...state,
        status: 'finish',
        isFinished: true,
        current: 0,
      });
    }
  };

  const onHandleProfile = (event) => {
    setState({
      ...state,
      profile: {
        ...profile,
        [event.target.name]: event.target.value,
      },
    });
  };
  return (
    <WizardWrapper className="hexadash-wizard-page">
      <WizardThree>
        <Steps
          isswitch
          current={0}
          status={status}
          steps={[
            {
              title: 'Start',
              content: (
                <div className="w-[580px] sm:px-[25px]">
                  <Row justify="center">
                    <Col sm={22} xs={24}>
                      <Heading as="h4" className="mb-[38px] text-xl md:text-lg ssm:text-base font-semibold">
                        1. Please Create Your Account
                      </Heading>
                      <Form
                        className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 dark:[&>.ant-form-item-row>div>div>div>input]:bg-[#282b36] [&>.ant-form-item-row>div>div>div>input]:rounded-4 dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 [&>.ant-form-item-row]:flex-col [&>div>.ant-form-item-label]:text-start dark:[&>.ant-form-item-row>div>label]:text-white60"
                        form={form}
                        name="account"
                      >
                        <Form.Item
                          className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 dark:[&>.ant-form-item-row>div>div>div>input]:bg-[#282b36] [&>.ant-form-item-row>div>div>div>input]:rounded-4 dark:[&>.ant-form-item-row>div>div>div>input]:text-white60 [&>.ant-form-item-row]:flex-col [&>div>.ant-form-item-label]:text-start dark:[&>.ant-form-item-row>div>label]:text-white60"
                          name="username"
                          label="Username"
                        >
                          <Input placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                          className="[&>div>div>div>div>span>span>svg]:w-[16px] ltr:[&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] rtl:[&>div>div>div>div>span>.ant-input-prefix]:ml-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra dark:[&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-white60 [&>div>div>div>div>span>span>span>svg]:text-light-extra dark:[&>div>div>div>div>span>span>span>svg]:text-white60 [&>div>.ant-form-item-label]:text-start [&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper]:pr-[20px] [&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper]:py-0 dark:[&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper]:bg-[#282b36] dark:[&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper]:border-white10 [&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper>input]:bg-transparent dark:[&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper>input]:bg-transparent dark:[&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper>input]:text-white60 [&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper>input]:py-3 [&>.ant-form-item-row]:flex-col dark:[&>.ant-form-item-row>div>label]:text-white60"
                          name="password"
                          rules={[
                            {
                              min: 6,
                              message: 'Enter a valid password. Min 6 characters long.',
                            },
                          ]}
                          label="Password"
                        >
                          <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Form.Item
                          className="[&>div>div>div>div>span>span>svg]:w-[16px] ltr:[&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] rtl:[&>div>div>div>div>span>.ant-input-prefix]:ml-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra dark:[&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-white60 [&>div>div>div>div>span>span>span>svg]:text-light-extra dark:[&>div>div>div>div>span>span>span>svg]:text-white60 [&>div>.ant-form-item-label]:text-start [&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper]:pr-[20px] [&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper]:py-0 dark:[&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper]:bg-[#282b36] dark:[&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper]:border-white10 [&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper>input]:bg-transparent dark:[&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper>input]:bg-transparent dark:[&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper>input]:text-white60 [&>div>.ant-form-item-control>div>div>.ant-input-affix-wrapper>input]:py-3 [&>.ant-form-item-row]:flex-col dark:[&>.ant-form-item-row>div>label]:text-white60"
                          rules={[
                            {
                              min: 6,
                              message: 'Enter a valid password. Min 6 characters long.',
                            },
                          ]}
                          label="Confirm Password"
                        >
                          <Input.Password placeholder="Confirm Password" />
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </div>
              ),
            },
            {
              title: 'Profile',
              content: (
                <div className="w-[580px] sm:px-[25px]">
                  <Row justify="center">
                    <Col sm={22} xs={24}>
                      <Heading as="h4">2. Please setup your profile</Heading>
                      <Form form={form} name="address">
                        <Form.Item
                          className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div>.ant-form-item-label]:text-start dark:[&>.ant-form-item-row>div>label]:text-white60 [&>.ant-form-item-row]:flex-col"
                          label="First Name"
                        >
                          <Input onChange={onHandleProfile} name="fname" placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                          className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div>.ant-form-item-label]:text-start dark:[&>.ant-form-item-row>div>label]:text-white60 [&>.ant-form-item-row]:flex-col"
                          label="Last Name"
                        >
                          <Input onChange={onHandleProfile} name="lname" placeholder="Last Name" />
                        </Form.Item>
                        <Form.Item
                          className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div>.ant-form-item-label]:text-start dark:[&>.ant-form-item-row>div>label]:text-white60 [&>.ant-form-item-row]:flex-col"
                          rules={[{ type: 'email' }]}
                          label="Email Address"
                        >
                          <Input name="email" onChange={onHandleProfile} placeholder="name@gmail.com" />
                        </Form.Item>
                        <Form.Item
                          className="[&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div>.ant-form-item-label]:text-start dark:[&>.ant-form-item-row>div>label]:text-white60 [&>.ant-form-item-row]:flex-col"
                          label="Address"
                        >
                          <Input name="address" onChange={onHandleProfile} placeholder="Address" />
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </div>
              ),
            },
            {
              title: 'Hints',
              content: (
                <div className="w-[580px] sm:px-[25px]">
                  <Row justify="center">
                    <Col sm={22} xs={24}>
                      <Heading
                        className="text-[20px] font-medium mb-[46px] text-dark dark:text-white87 leading-[24px]"
                        as="h4"
                      >
                        3. Please see your hints
                      </Heading>
                      <p className="text-dark dark:text-white87 text-[15px]">
                        First Name : <span>{profile.fname}</span>
                      </p>
                      <p className="text-dark dark:text-white87 text-[15px]">
                        Last Name : <span>{profile.lname}</span>
                      </p>
                      <p className="text-dark dark:text-white87 text-[15px]">
                        Email Address : <span>{profile.email}</span>
                      </p>
                      <p className="text-dark dark:text-white87 text-[15px]">
                        Address : <span>{profile.address}</span>
                      </p>
                    </Col>
                  </Row>
                </div>
              ),
            },
            {
              title: 'Finish',
              content:
                status !== 'finish' ? (
                  <div className="sm:mx-[25px] w-full">
                    <div className="w-full max-w-[540px] mx-auto p-[30px] min-h-[248px] rounded-6 border-1 border-regular dark:border-white10 atbd-finish-order">
                      <Heading className="mb-[16px] text-dark dark:text-white87" as="h4">
                        4. Let`s Finished
                      </Heading>
                      <Checkbox />{' '}
                      <span className="text-[15px] text-theme-gray dark:text-white60 ltr:ml-[10px] rtl:mr-[10px]">
                        I Agree with the Terms and Conditions.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="sm:mx-[25px] w-full">
                    <Row justify="center" style={{ width: '100%' }}>
                      <Col xl={21} xs={24}>
                        <div className="checkout-successful">
                          <Cards
                            headless
                            bodyStyle={{
                              borderRadius: '20px',
                            }}
                          >
                            <Cards headless>
                              <span className="icon-success">
                                <UilCheck />
                              </span>
                              <Heading as="h3">Thank You</Heading>
                              <p>Your registration completed successfully</p>
                            </Cards>
                          </Cards>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ),
            },
          ]}
          onNext={next}
          onPrev={prev}
          onDone={done}
          isfinished={isFinished}
        />
      </WizardThree>
    </WizardWrapper>
  );
}

export default WizardsThree;
