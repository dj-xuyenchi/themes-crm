import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const Navigation = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Axios Integration',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Axios Integration" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Axios CRUD Integration</h2>
                    <p> HexaDash provide you a ready setup for Axios CRUD integration using REST API </p>
                    <h2>Update API Base URL</h2>
                    <p className="mb-0">From <code>.env</code> file you can update the base URL</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
REACT_APP_BASE_URL = "YOUR_API_BASE_URL"
`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Axios Setup</h2>
                    <p>Then we create Axios Instance. we can find the instancees for <strong>GET,</strong> <strong>POST,</strong> <strong>PATCH,</strong> <strong>PUT</strong> at <code>src/config/dataService/dataService.js</code>.</p>
                    <h2>Redux Setup</h2>
                    <p className="mb-0">After the avobe setup we will do our redux setup.</p>
                    <p className="mb-0">At first create actio to <code>/src/redux/crud/axios/actionCreator.js</code>.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';

const {
  axiosAddBegin,
  axiosAddSuccess,
  axiosAddErr
} = actions;
const axiosDataSubmit = data => {
  return async dispatch => {
    try {
      await dispatch(axiosAddBegin());
      const response = await DataService.post('/store', data);
      await dispatch(axiosAddSuccess(response.data.data));
      await addNotificationSuccess();
    } catch (err) {
      await dispatch(axiosAddErr(err));
      await addNotificationError(err);
    }
  };
};
export {
  axiosDataSubmit,
};
`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0">Then we add action at <code>/src/redux/crud/axios/action.js</code>.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
const actions = {
  AXIOS_ADD_BEGIN: 'AXIOS_ADD_BEGIN',
  AXIOS_ADD_SUCCESS: 'AXIOS_ADD_SUCCESS',
  AXIOS_ADD_ERR: 'AXIOS_ADD_ERR',

  axiosAddBegin: () => {
    return {
      type: actions.AXIOS_ADD_BEGIN,
    };
  },

  axiosAddSuccess: data => {
    return {
      type: actions.AXIOS_ADD_SUCCESS,
      data,
    };
  },

  axiosAddErr: err => {
    return {
      type: actions.AXIOS_ADD_ERR,
      err,
    };
  },
};

export default actions;

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0">Then we add reducer at <code>/src/redux/crud/axios/reducers.js</code>.</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
import actions from './actions';

const {
  AXIOS_ADD_BEGIN,
  AXIOS_ADD_SUCCESS,
  AXIOS_ADD_ERR,
} = actions;

const initialState = {
  data: [],
  url: null,
  fileLoading: false,
  loading: false,
  error: null,
};

const initialStateSingle = {
  data: null,
  loading: false,
  error: null,
};

const axiosCrudReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case AXIOS_ADD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case AXIOS_ADD_SUCCESS:
      return {
        ...state,
        data,
        error: false,
        loading: false,
      };

    case AXIOS_ADD_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export { axiosCrudReducer };

`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0">After configuring redux you just need to call the action your component</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosDataSubmit } from '../../../redux/crud/axios/actionCreator';

const AddNew = () => {
  const dispatch = useDispatch();
  const { isLoading, url, isFileLoading } = useSelector(state => {
    return {
      url: state.AxiosCrud.url,
    };
  });
  const {pathname} = useLocation();
  const [form] = Form.useForm();

  const [state, setState] = useState({
    join: '',
  });

  const handleSubmit = values => {
    dispatch(
      axiosDataSubmit({
        ...values,
        image: url,
        join: state.join,
        id: new Date().getTime(),
      }),
    );
    form.resetFields();
    dispatch(axiosFileClear());
  };

`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>

      </Main>
    </>
  );
};

export default Navigation;
