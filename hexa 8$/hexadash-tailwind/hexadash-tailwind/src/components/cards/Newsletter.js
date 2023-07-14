import React from 'react';
import { Button } from '../buttons/buttons';

function Newsletter() {
  return (
    <div className="flex items-center justify-between sm:flex-col bg-white dark:bg-white10 ltr:pr-0 rtl:pl-0 rounded-[10px]">
      <figcaption className="px-[25px] py-[25px] sm:text-center">
        <form action="">
          <h4 className="text-xl text-dark dark:text-white87 leading-none font-semibold mb-2.5">
            Subscribe To Our Newsletter
          </h4>
          <p className="text-body dark:text-white60 text-[15px] mb-0">We notify you once any post is published</p>
          <Button size="small" type="primary" className="mt-[14px] h-[38px] px-5 text-sm font-semibold">
            Subscribe
          </Button>
        </form>
      </figcaption>
      <img className="max-w-[150px] 3xl:max-w-[100px]" src={require('../../static/img/new-message.png')} alt="" />
    </div>
  );
}

export default Newsletter;
