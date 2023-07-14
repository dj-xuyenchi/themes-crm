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
        breadcrumbName: 'Redux',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Redux" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Redux Setup</h2>
                    <p className="mb-0"> HexaDash provide you a ready setup for REDUX store manage. The configuration for <strong>Store</strong> is located at <code>src/redux</code> folder</p>
                    <p>The store is created from <code>src/redux/store.js</code> and all the reduces exported from <code>src/redux/rootReducers.js</code></p>
                    <h2>To setup a new redux store module , please follow the below steps:</h2>
                    <p className="mb-0">1. Create a folder named with your module at <code>src/store</code>folder and then add actionCreate.js,action.js,reducers.js those file to your created folder.</p>
                    <p className="mb-0">2. Then we create action to actionCreate.js file. E.g. </p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
import actions from './actions';

const { readBegin, readSuccess, readErr } = actions;

const contactGetData = () => {
  return async dispatch => {
    try {
      dispatch(readBegin());
      dispatch(readSuccess(initialState));
    } catch (err) {
      dispatch(readErr(err));
    }
  };
};
export { contactGetData };
`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0">2. Then Define action type to <code>src/redux/YOUR_MODULE/action.js</code> </p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
const actions = {
    CONTACT_READ_BEGIN: 'CONTACT_READ_BEGIN',
    CONTACT_READ_SUCCESS: 'CONTACT_READ_SUCCESS',
    CONTACT_READ_ERR: 'CONTACT_READ_ERR',

    readBegin: () => {
      return {
        type: actions.CONTACT_READ_BEGIN,
      };
    },

    readSuccess: data => {
      return {
        type: actions.CONTACT_READ_SUCCESS,
        data,
      };
    },

    readErr: err => {
      return {
        type: actions.CONTACT_READ_ERR,
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
                    <p className="mb-0">3. Add your action to <code>src/redux/YOUR_MODULE/reducer.js</code> as well. E.g. </p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
import actions from './actions';
import toData from '../../demoData/contact.json';

const initialState = {
  data: toData,
  loading: false,
  error: null,
};

const {
  CONTACT_READ_BEGIN,
  CONTACT_READ_SUCCESS,
  CONTACT_READ_ERR,
} = actions;

const ContactReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CONTACT_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_READ_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case CONTACT_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default ContactReducer;
`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Redux Actions & Reducers</h2>
                    <ul>
                        <li>
                            <h3>Theme Layout:</h3>
                            <p>This store modules is made for Theme Layout actions, it handles layout  customization. You can find actions, reducer files in <code>src/redux/themeLayout</code> folder.</p>
                        </li>
                        <li>
                            <h3>Authentication:</h3>
                            <p>This store modules is made for Authentication actions, it handles authentication functionalities. You can find actions, reducer files in <code>src/redux/authentication</code> folder.</p>
                        </li>
                        <li>
                            <h3>Calendar:</h3>
                            <p>This store modules is made for Calendar actions. You can find actions, reducer files in <code>src/redux/calendar</code> folder.</p>
                        </li>
                        <li>
                            <h3>Cart:</h3>
                            <p>This store modules is made for Cart actions. You can find actions, reducer files in <code>src/redux/cart</code> folder.</p>
                        </li>
                        <li>
                            <h3>Crud:</h3>
                            <p>This store modules is made for Crud actions. You can find actions, reducer files in <code>src/redux/crud</code> folder.</p>
                        </li>
                        <li>
                            <h3>Data Filter:</h3>
                            <p>This store modules is made for Data FIlter actions. You can find actions, reducer files in <code>src/redux/data-filter</code> folder.</p>
                        </li>
                        <li>
                            <h3>Email:</h3>
                            <p>This store modules is made for Email actions. You can find actions, reducer files in <code>src/redux/email</code> folder.</p>
                        </li>
                        <li>
                            <h3>Firebase:</h3>
                            <p>This store modules is made for Firebase actions. You can find actions, reducer files in <code>src/redux/firebase</code> folder.</p>
                        </li>
                        <li>
                            <h3>Gallery:</h3>
                            <p>This store modules is made for Gallery actions. You can find actions, reducer files in <code>src/redux/gallery</code> folder.</p>
                        </li>
                        <li>
                            <h3>Header Search:</h3>
                            <p>This store modules is made for Header Search actions. You can find actions, reducer files in <code>src/redux/headerSearch</code> folder.</p>
                        </li>
                        <li>
                            <h3>Jobs:</h3>
                            <p>This store modules is made for Jobs actions. You can find actions, reducer files in <code>src/redux/jobs</code> folder.</p>
                        </li>
                        <li>
                            <h3>Kanban:</h3>
                            <p>This store modules is made for Calendar actions. You can find actions, reducer files in <code>src/redux/kanban</code> folder.</p>
                        </li>
                        <li>
                            <h3>Message:</h3>
                            <p>This store modules is made for Calendar actions. You can find actions, reducer files in <code>src/redux/message</code> folder.</p>
                        </li>
                        <li>
                            <h3>Note:</h3>
                            <p>This store modules is made for Calendar actions. You can find actions, reducer files in <code>src/redux/note</code> folder.</p>
                        </li>
                        <li>
                            <h3>Notification:</h3>
                            <p>This store modules is made for Notification actions. You can find actions, reducer files in <code>src/redux/notification</code> folder.</p>
                        </li>
                        <li>
                            <h3>Orders:</h3>
                            <p>This store modules is made for Orders actions. You can find actions, reducer files in <code>src/redux/orders</code> folder.</p>
                        </li>
                        <li>
                            <h3>Product:</h3>
                            <p>This store modules is made for Product actions. You can find actions, reducer files in <code>src/redux/product</code> folder.</p>
                        </li>
                        <li>
                            <h3>Profile:</h3>
                            <p>This store modules is made for Profile actions. You can find actions, reducer files in <code>src/redux/profile</code> folder.</p>
                        </li>
                        <li>
                            <h3>Sellers:</h3>
                            <p>This store modules is made for Calendar actions. You can find actions, reducer files in <code>src/redux/sellers</code> folder.</p>
                        </li>
                        <li>
                            <h3>Task:</h3>
                            <p>This store modules is made for Task actions. You can find actions, reducer files in <code>src/redux/task</code> folder.</p>
                        </li>
                        <li>
                            <h3>Team:</h3>
                            <p>This store modules is made for Calendar actions. You can find actions, reducer files in <code>src/redux/team</code> folder.</p>
                        </li>
                        <li>
                            <h3>Support Ticket:</h3>
                            <p>This store modules is made for Support Ticket actions. You can find actions, reducer files in <code>src/redux/supportTickets</code> folder.</p>
                        </li>
                        <li>
                            <h3>Theme Users:</h3>
                            <p>This store modules is made for Theme Users actions. You can find actions, reducer files in <code>src/redux/themeUsers</code> folder.</p>
                        </li>
                        <li>
                            <h3>To Do:</h3>
                            <p>This store modules is made for To do actions. You can find actions, reducer files in <code>src/redux/todo</code> folder.</p>
                        </li>
                        <li>
                            <h3>Uses:</h3>
                            <p>This store modules is made for Users actions. You can find actions, reducer files in <code>src/redux/users</code> folder.</p>
                        </li>
                    </ul>
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
