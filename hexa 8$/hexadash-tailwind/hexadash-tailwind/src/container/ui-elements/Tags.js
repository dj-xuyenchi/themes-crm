import { Col, Row } from 'antd';
import { useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Tag } from '../../components/tags/tags';

function Tags() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Tags',
    },
  ];
  const [state, setstate] = useState({
    checke: null,
  });
  const log = () => {
    // console.log(e);
  };

  const checked = (checke) => {
    setstate({ ...state, checke });
  };

  const preventDefault = () => {
    // console.log('Clicked! But prevent default.');
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Tags"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={25}>
          <Col md={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Basic
                </h1>
              </div>
              <div className="taglist-wrap p-[25px] [&>.ant-tag]:inline-flex [&>.ant-tag]:items-center">
                <Tag>Tag 1</Tag>
                <Tag>
                  <a href="https://demo.dashboardmarket.com/hexadash-react">Link</a>
                </Tag>
                <Tag closable onClose={log}>
                  Tag 2
                </Tag>
                <Tag closable onClose={preventDefault}>
                  Prevent Default
                </Tag>
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Hot tag
                </h1>
              </div>
              <div className="p-[25px] [&>.ant-tag]:inline-flex [&>.ant-tag]:items-center [&>.ant-tag]:bg-regular dark:[&>.ant-tag]:bg-white30 [&>.ant-tag.ant-tag-checkable-checked]:bg-primary">
                <Tag hottags onChange={checked} data={['Movies', 'Books', 'Music', 'Sports']} />
              </div>
            </div>
          </Col>
          <Col md={12} xs={24}>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Colorful tag
                </h1>
              </div>
              <div className=" p-[25px]">
                <h4 style={{ marginBottom: 16 }}>Presets:</h4>
                <div className="flex items-center flex-wrap gap-[8px] [&>span]:m-0">
                  <Tag color="magenta">magenta</Tag>
                  <Tag color="red">red</Tag>
                  <Tag color="volcano">volcano</Tag>
                  <Tag color="orange">orange</Tag>
                  <Tag color="gold">gold</Tag>
                  <Tag color="lime">lime</Tag>
                  <Tag color="green">green</Tag>
                  <Tag color="cyan">cyan</Tag>
                  <Tag color="blue">blue</Tag>
                  <Tag color="geekblue">geekblue</Tag>
                  <Tag color="purple">purple</Tag>
                </div>
                <h4 style={{ margin: '16px 0' }}>Custom:</h4>
                <div className="taglist-wrap">
                  <Tag color="#f50">#f50</Tag>
                  <Tag color="#2db7f5">#2db7f5</Tag>
                  <Tag color="#87d068">#87d068</Tag>
                  <Tag color="#108ee9">#108ee9</Tag>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
              <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                  Animated Tag
                </h1>
              </div>
              <div className="taglist-wrap p-[25px] [&>div>div>span>.ant-tag]:inline-flex [&>div>div>span>.ant-tag]:items-center [&>div>div>span>span]:m-0 [&>div>div]:flex [&>div>div]:items-center [&>div>div]:flex-wrap [&>div>div]:gap-[8px]">
                <Tag animate onChange={checked} data={['Movies', 'Books', 'Music', 'Sports']} />
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Tags;
