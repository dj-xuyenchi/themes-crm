import React from 'react';
import { Button } from '../../../../components/buttons/buttons';
import { Cards } from '../../../../components/cards/frame/cards-frame';

function KnowledgeBase() {
  return (
    <Cards headless>
      <div>
        <figure className="flex items-center justify-center flex-col m-0 min-h-[310px]">
          <img src={require('../../../../static/img/book-open.png')} alt="" />
          <figcaption className="mt-[23px] text-center">
            <h2 className="mb-3 text-3xl sm:text-2xl xs:text-xl font-semibold text-dark dark:text-white87">
              Knowledge Base
            </h2>
            <p className="text-body dark:text-white60 text-base leading-[28px] mb-[30px]">
              There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
            </p>
            <Button className="h-[38px]" block type="primary">
              Browse Article
            </Button>
          </figcaption>
        </figure>
      </div>
    </Cards>
  );
}

export default KnowledgeBase;
