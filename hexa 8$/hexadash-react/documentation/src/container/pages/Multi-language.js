import { Col, Row } from 'antd';
import Prism from "prismjs";
import { useEffect } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const MultiLanguage = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Multi Language',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Multi Language" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <p>HexaDash Respect every mother language so that we provide you multi-language support through HexaDash admin. <strong>i18n</strong> language translation library used for tranlation.</p>
                    <p className="mb-0"><strong>How to add new language?</strong> </p>
                    <p className="mb-0">Lets add Bengali language: </p>
                    <p className="mb-0">1) Craete a folder at <code>src/i18n/localization</code> named <code>/bn</code>. Then create a file under this folder named <code>/translation.js</code> </p>
                    <p className="mb-0">2) Update the below code in the <code>src/i18n/config.js</code></p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
resources: {
    bn: {
        translations: require('./localization/bn/translation.json')
    }
},

i18n.languages = ['bn'];
`
}
                            </code>
                        </pre>
                    </div>
                    <p>3) Then Update the dropdown from <code>src/components/utilities/auth-info/info.js</code></p>
                    <div className="docs-highlighter">
                        <p className="mb-5">Refer below mentioned code to add language to dropdown:</p>
                        <pre>
                            <code className="language-javascript">
{
`
const country = (
    <NavAuth>
      <Link onClick={(e) => onFlagChangeHandle('en',e)} to="#">
        <img src={require('../../../static/img/flag/en.png')} alt="" />
        <span>English</span>
      </Link>
      <Link onClick={(e) => onFlagChangeHandle('esp',e)} to="#">
        <img src={require('../../../static/img/flag/esp.png')} alt="" />
        <span>Spanish</span>
      </Link>
      <Link onClick={(e) => onFlagChangeHandle('ar',e)} to="#">
        <img src={require('../../../static/img/flag/ar.png')} alt="" />
        <span>Arabic</span>
      </Link>
      <Link onClick={(e) => onFlagChangeHandle('bn',e)} to="#">
        <img src={require('../../../static/img/flag/bengali.png')} alt="" />
        <span>Bengali</span>
      </Link>
    </NavAuth>
  );
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

export default MultiLanguage;