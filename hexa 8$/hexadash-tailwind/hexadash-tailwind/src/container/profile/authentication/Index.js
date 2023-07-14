import { Spin } from 'antd';
import React, { Suspense } from 'react';

const AuthLayout = (WraperContent) => {
  return function () {
    return (
      <Suspense
        fallback={
          <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
            <Spin />
          </div>
        }
      >
        <div
          style={{ backgroundImage: `url("${require('../../../static/img/admin-bg-light.png')}")` }}
          className="bg-top bg-no-repeat"
        >
          <div className="py-[120px] 2xl:py-[80px] px-[15px]">
            <div className="flex justify-center">
              <img className="dark:hidden" src={require(`../../../static/img/logo_dark.svg`).default} alt="" />
              <img className="hidden dark:block" src={require(`../../../static/img/logo_white.svg`).default} alt="" />
            </div>
            <WraperContent />
          </div>
        </div>
      </Suspense>
    );
  };
};

export default AuthLayout;
