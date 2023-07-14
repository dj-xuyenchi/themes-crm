import React, { useState } from 'react';
import { Row, Col, Input, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../components/modals/antd-modals';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { ToDoAddData } from '../../redux/todo/actionCreator';
import ToDos from '../../components/todo/Todo';

function ToDo() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'To Do',
    },
  ];
  const todoData = useSelector((state) => state.Todo.data);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    inputData: '',
    selectedRowKeys: [],
  });
  const { inputData } = state;

  const [form] = Form.useForm();

  const onInputChange = (e) => {
    setState({
      ...state,
      inputData: e.target.value,
    });
  };

  const onSubmitHandler = () => {
    const arrayData = [];
    todoData.map((data) => {
      return arrayData.push(data.key);
    });
    const max = Math.max(...arrayData);
    if (inputData !== '') {
      dispatch(
        ToDoAddData([
          ...todoData,
          {
            key: max + 1,
            item: inputData,
            time: new Date().getTime(),
            favorite: false,
          },
        ]),
      );
      setState({
        ...state,
        inputData: '',
        visible: false,
      });
    } else {
      alert('Please Give a Task Title...');
    }
  };

  const showModal = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <PageHeader
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
        title="To Do"
        routes={PageRoutes}
      />
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={30}>
          <Col xs={24}>
            <>
              <ToDos isApp todoData={todoData} showModal={showModal} />
            </>
          </Col>
        </Row>
        <Modal
          type={state.modalType}
          title="Add New Todo"
          visible={state.visible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="">
            <>
              <Form className="" name="todoAdd" form={form} onFinish={onSubmitHandler}>
                <Input value={inputData} onChange={onInputChange} placeholder="Input Item Name......." />
                <br />
                <br />

                <Button
                  onClick={showModal}
                  htmlType="submit"
                  className="h-[50px] px-5 text-sm font-semibold"
                  type="primary"
                  size="large"
                >
                  Add New
                </Button>
              </Form>
            </>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default ToDo;
