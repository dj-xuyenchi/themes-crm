import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import Prism from "prismjs";
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const NewPage = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Theme Configuration',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Theme Configuration" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <p>For customizing theme go to <code>config/theme/themeVariable.js</code> and customize the variables according to your necessity. HexaDash is based on antd. For additional changes, here is the list of available variable for customization <a href="https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less">https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less</a>. <strong>Using theme variables in the app.</strong></p>

                    <h2>Change font</h2>
                    <p>Simplest way to change font is to go to google fonts, select fonts, click embed copy the link. Now go to <code>public/index.html</code> and paste the link in head tag. Please remove the links of any unused fonts from the head.</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
<!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <meta http-equiv="X-UA-Compatible" content="chrome=1" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    + <link
      href="YOUR_FONT"
      rel="stylesheet"
    />
`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Changing Light & Dark Mode</h2>
                    <p>To change layout mode to dark, go to <code>src/config/config.js</code> and just set the <strong>mainTemplate</strong> to <strong>darkMode</strong>. Else set <strong>lightMode</strong> to keep the white background</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
import { themeColor } from './theme/themeVariables';

const config = {
  topMenu: false,
  rtl: false,
  mainTemplate: 'lightMode',
  themeColor,
};

export default config;
`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Side Navbar & Top Navbar Layout</h2>
                    <p>To change the Navbar side to top, go to <code>src/config/config.js</code> and just set the topMenu to true. Else set false to keep Navbar on Sidebar. You can update your menu item from <code>src/layout/TopMenu.js</code> For Top Navbar and <code>src/layout/MenuItem.js</code> for Side Navbar</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
import { themeColor } from './theme/themeVariables';

const config = {
  topMenu: false,
  rtl: false,
  mainTemplate: 'lightMode',
  themeColor,
};

export default config;
`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>Change Logo</h2>
                    <p>To change both dark and light logo, go to <code>src/layout/withAdminLayout.js</code> and change source of the logo image</p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
<Link to="/admin">
  <img
    className="w-full max-w-[120px] xs:max-w-[100px]"
    src={
      layoutMode === 'lightMode'
        ? require("../static/img/logo_dark.svg").default
        : require("../static/img/logo_white.svg").default
    }
    alt=""
  />
</Link>
`
}
                            </code>
                        </pre>
                    </div>
                </div>
              </Cards>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <h2>RTL Setup</h2>
                    <p>To change the layout to RTL set the <strong>rtl</strong> to <strong>true</strong> and change the <code>dir</code> to <strong>rtl</strong> from <code>public/index.html</code></p>
                    <div className="docs-highlighter">
                        <pre>
                            <code className="language-javascript">
{
`
import { themeColor } from './theme/themeVariables';

const config = {
  topMenu: false,
  rtl: false,
  mainTemplate: 'lightMode',
  themeColor,
};

export default config;
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

export default NewPage;
