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
        breadcrumbName: 'Routing',
    },
  ];
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Routing" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col md={18} xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                    <p>Left sidebar Cutomization is very easy. If you want add, remove or edit manu item form sidebar, please follow below instructions.  </p>
                    <h2>How add item to Sidebar ?</h2>
                    <div className="docs-highlighter">
                        <p className="mb-5">For Sidebar wee need to update our menu object from <code>src/layout/MenuItems.js</code></p>
                        <pre>
                            <code className="language-javascript">
{
`
const items = [
  getItem(
    <NavLink onClick={toggleCollapsed} to={"PATH"}>
      MENU LABEL
    </NavLink>, 
    'MENU ID', 
    !topMenu && <ICON />),
];
`
}
                            </code>
                        </pre>
                    </div>
                    <div className="docs-highlighter">
                        <p className="mb-5">Then assign the items to Menu component</p>
                        <pre>
                            <code className="language-javascript">
{
`
import { Menu } from 'antd';
const MenuItems = () => {
  return (
    <Menu
      mode='inline'
      overflowedIndicator={<ICON />}
      items={items}
    />
  );
};

export default MenuItems;
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
