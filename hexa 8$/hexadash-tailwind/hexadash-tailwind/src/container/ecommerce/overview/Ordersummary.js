/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import UilAngleLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import UilAngleRight from '@iconscout/react-unicons/icons/uil-angle-right';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { cartGetData } from '../../../redux/cart/actionCreator';

function Ordersummary({ subtotal, checkout }) {
  const dispatch = useDispatch();
  const { rtl } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  const [form] = Form.useForm();
  const [state, setState] = useState({
    coupon: 0,
    promo: 0,
    current: 0,
  });

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  const submitPromo = (values) => {
    setState({ ...state, promo: values });
  };

  const { Option } = Select;

  const onSubmit = () => {
    document.querySelectorAll('button span').forEach((item) => {
      if (item.innerHTML === 'Done') {
        item.click();
      }
    });
  };

  return (
    <div className="bg-regularBG dark:bg-[#3b3f49] p-[25px] sm:p-[15px] rounded-10">
      <div>
        <Heading className="mb-6 text-xl font-semibold" as="h4">
          Order Summary
        </Heading>
        <div className="bg-white dark:bg-[#202531] p-[25px] shadow-[0_10px_30px_rgba(10,10,10,0.06)] rounded-10">
          <div className="pb-[5px]">
            <ul className="mb-0">
              <li className="flex items-center justify-between mb-[18px]">
                <span className="font-medium text-body dark:text-white60">Subtotal :</span>
                <span className="font-medium text-dark dark:text-white87">{`$${subtotal}`}</span>
              </li>
              <li className="flex items-center justify-between mb-[18px]">
                <span className="font-medium text-body dark:text-white60">Discount :</span>
                <span className="font-medium text-dark dark:text-white87">{`$${-20}`}</span>
              </li>
              <li className="flex items-center justify-between mb-[18px]">
                <span className="font-medium text-body dark:text-white60">Shipping Charge :</span>
                <span className="font-medium text-dark dark:text-white87">{`$${30}`}</span>
              </li>
            </ul>
            <Form form={form} name="promo" onFinish={submitPromo}>
              <Form.Item name="couponType" initialValue="" label="" className="mb-0">
                <Select className="w-full  [&>.ant-select-selector]:pl-0 [&>.ant-select-selector]:border-none [&>.ant-select-selector]:shadow-none [&>.ant-select-selector]:right-0 [&>.ant-select-arrow]:text-body dark:[&>.ant-select-arrow]:text-white60 dark:text-white60 [&>.ant-select-arrow]:right-0 [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center [&>div>.ant-select-selection-item]:text-body dark:[&>div>.ant-select-selection-item]:text-white60 [&>div>.ant-select-selection-item]:font-medium ltr:[&>div>.ant-select-selection-item>img]:h-[14px] [&>div>.ant-select-selection-item>img]:mr-[5px] rtl:[&>div>.ant-select-selection-item>img]:h-[14px] [&>div>.ant-select-selection-item>img]:ml-[5px] [&>div]:bg-transparent dark:[&>div]:bg-transparent">
                  <Option value="">
                    <img src={require('../../../static/img/Subtraction1.png')} alt="" /> Select Coupon
                  </Option>
                  <Option value="one">
                    <img src={require('../../../static/img/Subtraction1.png')} alt="" /> Coupon one
                  </Option>
                  <Option value="tow">
                    <img src={require('../../../static/img/Subtraction1.png')} alt="" /> Coupon tow
                  </Option>
                </Select>
              </Form.Item>
              <div className="flex items-end sm:flex-wrap mt-0 mb-[18px] sm:gap-[10px]">
                <Form.Item
                  className="[&>.ant-row]:flex-col [&>.ant-row]:items-start mb-0 text-body dark:text-white60 dark:[&>div>div>label]:text-white87"
                  name="promoCode"
                  label="Promo Code"
                >
                  <Input
                    placeholder="Promo Code"
                    className="max-w-[180px] bg-white dark:bg-white10 h-10 ltr:mr-1.5 rtl:ml-1.5 ltr:pl-5 rtl:pr-5 text-body dark:text-white60 border border-normal dark:border-white10 rounded-md"
                  />
                </Form.Item>
                <Form.Item className="mb-0">
                  <Button
                    htmlType="submit"
                    size="default"
                    type="success"
                    outlined
                    className="h-10 px-5 text-sm font-semibold bg-transparent rounded text-success border-success"
                  >
                    Apply
                  </Button>
                </Form.Item>
              </div>
            </Form>
            <Heading className="inline-flex items-center justify-between w-full" as="h4">
              <span className="text-base font-semibold text-dark dark:text-white87">Total : </span>
              <span className="text-lg font-semibold text-primary">{`$${subtotal + 30 - 20}`}</span>
            </Heading>
            {!checkout && (
              <Button
                className="bg-primary w-full h-[50px] mt-[22px] text-[15px] font-medium rounded-lg border-primary"
                type="secondary"
                size="large"
              >
                <Link to="/admin/ecommerce/checkout" className="flex items-center justify-center text-white">
                  Proceed To Checkout
                  {!rtl ? (
                    <UilAngleRight className="w-4 h-4 ltr:ml-1.5 rtl:mr-1.5" />
                  ) : (
                    <UilAngleLeft className="w-4 h-4 ltr:mr-1.5 rtl:ml-1.5" />
                  )}
                </Link>
              </Button>
            )}
            {state.current === 3 && (
              <Button onClick={onSubmit} className="btn-proceed" type="secondary" size="large">
                <Link to="#">Place Order</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ordersummary;
