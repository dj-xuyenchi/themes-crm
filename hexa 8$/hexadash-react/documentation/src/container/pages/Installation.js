import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import Prism from "prismjs";
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import Alert from '../../components/alerts/alerts';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const Installation = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Installation',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Installation" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <p className='mb-5'>Welcome to React! React helps you build modern applications for the web, mobile, or desktop.</p>
                    <p>For getting started an React application you needs two things as Prerequisites.</p>
                    <h2>Prerequisites</h2>
                    <p>Before you begin, make sure your development environment includes Node and an npm package manager.</p>
                    <h3>Node.js</h3>
                    <p className='mb-0'>Download latest version of node.js from nodejs.org.</p>
                    <p className='mb-0'>Install Node.js using downloaded file</p>
                    <p>To check your node version, run node -v in a terminal/console window.</p>
                    <h3>Yarn package manager</h3>
                    <p>React CLI, and React apps depend on features and functionality provided by libraries that are available as yarn packages. To download and install yarn packages, you must have an yarn package manager. This Quick Start uses the yarn client command line interface, which is need install by using npm, npm default with nodejs. To install yarn, run <strong>npm install -g yarn</strong> To check that you have the yarn client installed, run yarn -v in a terminal/console window.</p>
                    <p>For better understanding we suggest you to once go through official documentation of React from <strong className="text-primary">Reactjs.org</strong></p>
                    <h2>Downloaded Files</h2>
                    <p>After extract the main zip file, go to HexaDash folder and you will get three separate project folder there. Use one which fits your needs.</p>
                    <h2>Installation</h2>
                    <ul>
                        <li>For starter we need to setup node js, go to https://nodejs.org/en/download/ & download appropriate version for your os.</li>
                        <li>After download setup nodejs</li>
                        <li>Run npm install -g yarn, wait a bit</li>
                        <li>Run yarn install, wait a bit</li>
                        <li>Now run yarn start, it should open up http://localhost:3000 on your browser</li>
                    </ul>
                    <Alert
                        closable
                        message=""
                        description="Make sure you are not running any other react project in local if so then use new generated port from terminal with label called app running at:"
                        type="warning"
                    />
                    <Alert
                        closable
                        message=""
                        description={
                        <>
                            <h4>Some Common solution if you do not run project successfully</h4>
                            <p>Use Latest Version of node.js</p>
                            <p>Remove node_module and package-lock.json and yarn-lock file and again do <strong>yarn install</strong> </p>
                            <p>You can again download theme from themeforst and then again run </p>
                            <p>Then also if you don't solve issue you can generate a ticket.</p>
                        </>}
                        type="success"
                    />
                    <p className='mt-35 mb-0'>HexaDash is developed using <strong>create-react-app</strong> and <strong>customize-cra</strong> used to extend CRA configuration.</p>
                    <p className="mb-0">you can find more about them visit:</p>
                    <p className="mb-0">CRA: <a href="https://create-react-app.dev/">https://create-react-app.dev/</a></p>
                    <p>customize-cra: <a href="https://github.com/arackaf/customize-cra">https://github.com/arackaf/customize-cra</a></p>
                    <h2>Build Application</h2>
                    <p className="mb-0">Change Homepage path before build from package.json</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
"homepage": "/YOUR_PATH",
`
}
                            </code>
                        </pre>
                    </div>
                    <p className="mb-0">Build you application for host on server using below command:</p>
                    <code>yarn build</code>
                    <p className="mb-0">Wait a bit, it will Compile, optimize, minify and uglify all source files</p>
                    <p className="mb-0">It will create one dist file in your theme folder. Make zip of dist folder. so here you are ready to upload your theme on server.</p>
                    <Alert
                        closable
                        message=""
                        description={
                        <>
                            <p>If you’re using <strong>Apache HTTP Server</strong> , you need to create a <strong>.htaccess</strong>  file in the public folder by pastng below code</p>
                        </>}
                        type="info"
                    />
                    <div className="docs-highlighter mt-35">
                        <pre>
                            <code className="language-javascript">
{
`
Options -MultiViews
RewriteEngine On
RewriteCond  !-f
RewriteRule ^ index.html [QSA,L]
`
}
                            </code>
                        </pre>
                    </div>
                    <code>

                    </code>
                </div>
              </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>

      </Main>
    </>
  );
};

export default Installation;
