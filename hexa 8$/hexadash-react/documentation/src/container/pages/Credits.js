import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const License = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Credit',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Credit" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                  <h2>Credits/Plugins</h2>
                  <p>Here is the list of plugin with the official documentation. <strong>HexaDash</strong> won't be easy to build without using them and we are thankful to them.</p>
                  <div className="card-table table-responsive">
                      <table className="table">
                          <thead>
                              <tr>
                                  <th>Plugins</th>
                                  <th>Url</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Create React App</td>
                                  <td><a href="">https://reactjs.org/docs/create-a-new-react-app.html</a></td>
                              </tr>
                              <tr>
                                  <td>React</td>
                                  <td><a href="">https://reactjs.org/</a></td>
                              </tr>
                              <tr>
                                  <td>React Hooks</td>
                                  <td><a href="">https://reactjs.org/docs/hooks-intro.html</a></td>
                              </tr>
                              <tr>
                                  <td>React Router Dom</td>
                                  <td><a href="">https://reactrouter.com/web/guides/quick-start</a></td>
                              </tr>
                              <tr>
                                  <td>Redux</td>
                                  <td><a href="">https://redux.js.org/</a></td>
                              </tr>
                              <tr>
                                  <td>Redux-thunk</td>
                                  <td><a href="">https://github.com/reduxjs/redux-thunk</a></td>
                              </tr>
                              <tr>
                                  <td>Webpack 3</td>
                                  <td><a href="">https://webpack.js.org/</a></td>
                              </tr>
                              <tr>
                                  <td>Ant Design</td>
                                  <td><a href="">https://ant.design/</a></td>
                              </tr>
                              <tr>
                                  <td>Style Component</td>
                                  <td><a href="https://www.npmjs.com/package/style-components">https://www.npmjs.com/package/style-components</a></td>
                              </tr>
                              <tr>
                                  <td>React i18next</td>
                                  <td><a href="https://react.i18next.com/">https://react.i18next.com//</a></td>
                              </tr>
                              <tr>
                                  <td>Moment js</td>
                                  <td><a href="">https://momentjs.com/</a></td>
                              </tr>
                              <tr>
                                  <td>Styled Components</td>
                                  <td><a href="">https://styled-components.com/</a></td>
                              </tr>
                              <tr>
                                  <td>Prop Types</td>
                                  <td><a href="">https://www.npmjs.com/package/prop-types</a></td>
                              </tr>
                              <tr>
                                  <td>Axios</td>
                                  <td><a href="">https://github.com/axios/axios</a></td>
                              </tr>
                              <tr>
                                  <td>Firebase</td>
                                  <td><a href="https://firebase.google.com/">https://firebase.google.com/</a></td>
                              </tr>
                              <tr>
                                  <td>Chart js</td>
                                  <td><a href="https://www.npmjs.com/package/chartjs-react">https://www.npmjs.com/package/chartjs-react</a></td>
                              </tr>
                              <tr>
                                  <td>Rechart js</td>
                                  <td><a href="https://www.npmjs.com/package/recharts">https://www.npmjs.com/package/recharts</a></td>
                              </tr>
                              <tr>
                                  <td>Google Chart js</td>
                                  <td><a href="https://www.npmjs.com/package/react-google-charts">https://www.npmjs.com/package/react-google-charts</a></td>
                              </tr>
                              <tr>
                                  <td>Peity Chart js</td>
                                  <td><a href="https://benpickles.github.io/peity/">https://benpickles.github.io/peity/</a></td>
                              </tr>
                              <tr>
                                  <td>Font Awesome</td>
                                  <td><a href="https://fontawesome.com/">https://fontawesome.com/</a></td>
                              </tr>
                              <tr>
                                  <td>Unicons</td>
                                  <td><a href="https://www.npmjs.com/package/@iconscout/react-unicons">https://www.npmjs.com/package/@iconscout/react-unicons</a></td>
                              </tr>
                              <tr>
                                  <td>React Custom Scroll</td>
                                  <td><a href="https://www.npmjs.com/search?q=react-custom-scroll">https://www.npmjs.com/search?q=react-custom-scroll</a></td>
                              </tr>
                              <tr>
                                  <td>Swiper</td>
                                  <td><a href="https://www.npmjs.com/package/swiper">https://www.npmjs.com/package/swiper</a></td>
                              </tr>
                              <tr>
                                  <td>React Masonry Css</td>
                                  <td><a href="https://www.npmjs.com/package/react-masonry-css">https://www.npmjs.com/package/react-masonry-css</a></td>
                              </tr>
                              <tr>
                                  <td>React Responsive Masonry</td>
                                  <td><a href="https://www.npmjs.com/package/react-responsive-masonry">https://www.npmjs.com/package/react-responsive-masonry</a></td>
                              </tr>
                          </tbody>
                      </table>
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

export default License;