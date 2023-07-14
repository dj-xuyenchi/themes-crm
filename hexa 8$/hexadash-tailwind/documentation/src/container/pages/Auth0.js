import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const Auth0 = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Auth0 Integration',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Auth0 Integration" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Auth0 Configuration</h2>
                    <p className="mb-0">To configure Auth0, find the .env file and change the configuration shown in the image below</p>
                    <div className="docs-highlighter mb-35">
                        <pre>
                            <code className="language-javascript">
{
`
import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';
`
}
                            </code>
                        </pre>
                    </div>
                    <p>For more information go to <Link to="/">https://auth0.com/</Link></p>
                </div>
              </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>
        
      </Main>
    </>
  );
};

export default Auth0;
