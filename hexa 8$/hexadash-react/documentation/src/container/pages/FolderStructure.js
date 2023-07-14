import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import Alert from '../../components/alerts/alerts';
import { Main } from '../styled';
import { DocumentationStyleWrap, SiteMapWrap } from './style';

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
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Installation" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <SiteMapWrap>
                    <div className="ninjadash-sitemap">
                        <ul className="list-unstyled mb-0">
                            <li className="p-0 ninjadash-sitemap__parent-title"><Link to="javascript: void(0);" className="fw-medium fs-14">hexadash</Link>
                            </li>
                            <li>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="javascript: void(0);" className="fw-medium text-primary"><i className=" ri-folder-2-line me-1 align-bottom"></i>src</Link>
                                    </div>
                                    <ul className="ninjadash-sitemap__second-list list-unstyled">
                                        <li>
                                            <Link to="javascript: void(0);" className="fw-medium text-primary"><i className=" ri-folder-2-line me-1 align-bottom"></i>componenets</Link>
                                            <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>alerts</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>autoComplete</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>banners</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>buttons</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>cards</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>checkbox</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>color-palette</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>comments</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>datePicker</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>drawer</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>dropdown</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>header</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>maps</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>modals</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>note</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>page-headers</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>popup</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>pricing</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>slider</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>social-media</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>steps</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>table</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>tabs</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>tags</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>tasklist</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>todo</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>config</Link>
                                            <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>api</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>dataService</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>icon</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>map</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>theme</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>auth0.js</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>config.js</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>container</Link>
                                            <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>calendar</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>charts</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>chat</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>contact</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>course</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>crud</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>dashboard</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>email</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>form</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>icons</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>importExport</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>jobSearch</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>kanban</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>maps</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>note</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>pages</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>profile</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>project</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>supportTicket</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>table</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>task</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>todo</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>ui-elements</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>users</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-folder-2-line me-1 align-bottom"></i>widgets</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>styled.js</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>demoData</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>i18n</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>layout</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>redux</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>routes</Link>
                                            <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>Admin</Link>
                                                </li>
                                                <li>
                                                    <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>auth.js</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>static</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-folder-2-line me-1 align-bottom"></i>utility</Link>
                                                <ul className="ninjadash-sitemap__second-list list-unstyled">
                                                    <li>
                                                        <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>localStorageControl.js</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="javascript: void(0);"><i className="ri-file-2-line me-1 align-bottom"></i>utility.js</Link>
                                                    </li>
                                                </ul>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-file-2-line me-1 align-bottom"></i>App.js</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-file-2-line me-1 align-bottom"></i>index.js</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-file-2-line me-1 align-bottom"></i>reportWebVitals.js</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript: void(0);"><i className=" ri-file-2-line me-1 align-bottom"></i>setupTests.js</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="javascript: void(0);" className="fw-medium text-primary"><i className="ri-file-2-line me-1 align-bottom"></i>.env</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="javascript: void(0);" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>.gitignore</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="javascript: void(0);" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>craco.config.js</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="javascript: void(0);" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>customize-cra-config.js</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="javascript: void(0);" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>package.json</Link>
                                    </div>
                                </div>
                                <div className="ninjadash-sitemap__first-list">
                                    <div className="ninjadash-sitemap__list-wrap">
                                        <Link to="javascript: void(0);" className="fw-medium text-primary"><i className="ri-folder-2-line me-1 align-bottom"></i>README.md</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </SiteMapWrap>
              </Cards>
            </Col>
          </Row>
        </DocumentationStyleWrap>

      </Main>
    </>
  );
};

export default Installation;
