import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { GlobalUtilityStyle } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { Modal, alertModal } from '../../components/modals/antd-modals';

const info = () => {
  alertModal.info({
    title: 'This is a notification message',
    content: (
      <div className="dark:text-white60">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    ),
    onOk() {},
  });
};

const success = () => {
  alertModal.success({
    content: 'some messages...some messages...',
  });
};

const error = () => {
  alertModal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
};

const warning = () => {
  alertModal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};

const selfDestroyed = () => {
  let secondsToGo = 5;
  const modal = alertModal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });

  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};

const showConfirm = () => {
  alertModal.confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => {});
    },
    onCancel() {},
  });
};

function Modals() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Modals',
    },
  ];
  const [state, setState] = useState({ visible: false, modalType: 'primary', colorModal: false });

  const showModal = (type) => {
    setState({
      visible: true,
      modalType: type,
    });
  };

  const showColorModal = (type) => {
    setState({
      colorModal: true,
      modalType: type,
    });
  };

  const handleOk = () => {
    setState({
      visible: false,
      colorModal: false,
    });
  };

  const handleCancel = () => {
    setState({
      visible: false,
      colorModal: false,
    });
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="Modals"
        routes={PageRoutes}
      />
      <GlobalUtilityStyle>
        <div className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row gutter={15}>
            <Col md={12}>
              <Modal
                type={state.modalType}
                title="Basic Modal"
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="dark:text-white60">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </div>
              </Modal>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Default Modal
                  </h1>
                </div>
                <div className="p-[25px]">
                  <p>
                    When requiring users to interact with the application, but without jumping to a new page and
                    interrupting the user&apos;s workflow, you can use Modal to create a new floating layer over the
                    current page to get user feedback or display information. Additionally
                  </p>
                  <div className="flex flex-wrap items-center gap-[10px]">
                    <Button
                      onClick={() => showModal('primary')}
                      type="primary"
                      className="dark:hover:bg-primary dark:hover:border-primary dark:hover:text-white"
                    >
                      Primary
                    </Button>
                    <Button
                      onClick={() => showModal('success')}
                      type="success"
                      className="text-white bg-success border-success dark:hover:bg-success dark:hover:border-success dark:hover:text-white"
                    >
                      Success
                    </Button>
                    <Button
                      onClick={() => showModal('danger')}
                      type="danger"
                      className="text-white bg-danger border-danger dark:hover:bg-danger dark:hover:border-danger dark:hover:text-white"
                    >
                      Danger
                    </Button>
                    <Button
                      onClick={() => showModal('warning')}
                      type="warning"
                      className="text-white bg-warning border-warning dark:hover:bg-warning dark:hover:border-warning dark:hover:text-white"
                    >
                      Warning
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <Modal
                type={state.modalType}
                color
                title="Basic Modal"
                visible={state.colorModal}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="dark:text-white60">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </div>
              </Modal>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Color Modal
                  </h1>
                </div>
                <div className="p-[25px]">
                  <p>
                    When requiring users to interact with the application, but without jumping to a new page and
                    interrupting the user&apos;s workflow, you can use Modal to create a new floating layer over the
                    current page to get user feedback or display information. Additionally
                  </p>
                  <div className="flex flex-wrap items-center gap-[10px]">
                    <Button
                      onClick={() => showColorModal('primary')}
                      type="primary"
                      className="text-white bg-primary border-primary dark:hover:bg-primary dark:hover:border-primary dark:hover:text-white"
                    >
                      Primary
                    </Button>
                    <Button
                      onClick={() => showColorModal('success')}
                      type="success"
                      className="text-white bg-success border-success dark:hover:bg-success dark:hover:border-success dark:hover:text-white"
                    >
                      Success
                    </Button>
                    <Button
                      onClick={() => showColorModal('danger')}
                      type="danger"
                      className="text-white bg-danger border-danger dark:hover:bg-danger dark:hover:border-danger dark:hover:text-white"
                    >
                      Danger
                    </Button>
                    <Button
                      onClick={() => showColorModal('warning')}
                      type="warning"
                      className="text-white bg-warning border-warning dark:hover:bg-warning dark:hover:border-warning dark:hover:text-white"
                    >
                      Warning
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">
                <div className="h-[60px] px-[25px] text-dark dark:text-white87 font-medium text-[17px] border-regular dark:border-white10 border-b">
                  <h1 className="mb-0 inline-block py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold">
                    Information Modal
                  </h1>
                </div>
                <div className="p-[25px]">
                  <p>
                    When requiring users to interact with the application, but without jumping to a new page and
                    interrupting the user&apos;s workflow, you can use Modal to create a new floating layer over the
                    current page to get user feedback or display information. Additionally
                  </p>
                  <div className="flex flex-wrap items-center gap-[10px]">
                    <Button
                      onClick={success}
                      type="success"
                      className="text-white bg-primary border-primary dark:hover:bg-success dark:hover:border-success dark:hover:text-white"
                    >
                      Success
                    </Button>
                    <Button
                      onClick={error}
                      type="error"
                      className="text-white bg-danger border-danger dark:hover:bg-danger dark:hover:border-danger dark:hover:text-white"
                    >
                      Error
                    </Button>
                    <Button
                      onClick={warning}
                      type="warning"
                      className="text-white bg-warning border-warning dark:hover:bg-warning dark:hover:border-warning dark:hover:text-white"
                    >
                      Warning
                    </Button>
                    <Button
                      onClick={info}
                      type="info"
                      className="text-white bg-info border-info dark:hover:bg-info dark:hover:border-info dark:hover:text-white"
                    >
                      Info
                    </Button>
                    <Button onClick={selfDestroyed} type="primary">
                      Modal Self Destroyed
                    </Button>
                    <Button onClick={showConfirm} type="primary">
                      Confirm
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Modals;
