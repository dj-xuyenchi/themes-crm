import { Col, Row } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { DocumentationStyleWrap } from './style';

const Overview = () => {
  const PageRoutes = [
    {
        path: 'index',
        breadcrumbName: 'Docs',
    },
    {
        path: '',
        breadcrumbName: 'Overview Page',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Introduction" routes={PageRoutes} />
      <Main>
        <DocumentationStyleWrap>
          <Row gutter={25}>
            <Col xs={24}>
              <Cards headless>
                <div className="ninjadash-template-documentation">
                  <h2>
                    Welcome
                  </h2>
                  <p>HexaDash is a feature-filled React admin template and component library that ships with hundreds of ready-to-use components. The limitless possibilities come in your hand with its rich component library. The theme features a beautiful dashboard, many ready-to-use hand-crafted components, widgets, pages, and so on. The cool thing is that you can use these components on any page with the utmost possible ease. The theme fits any device just because of its improved responsiveness. This powerful and amazingly flexible theme suits the best for many web applications including CRM, CMS, Admin Panels, Dashboards, etc. What makes it stand out, you know? Our developer team has implemented the theory of modularity while hammering out this amazing theme which will eventually help you to reduce the development cost and time.</p>
                  <p><strong>HexaDash</strong> has 5 Unique demo pages and 15 apps. It is a perfect solution for any kind of custom project like E-commerce, Project Management, Support, Educational Dashboard, CRM, Marketing Dashboard, and so on...</p>
                  <p><strong>HexaDash</strong> 150+ pages, 100+ components, 60+ Charts, and 100+ widgets developed with a mobile-first design approach. </p>
                  <h2>Featured App</h2>
                  <ul>
                    <li>Email</li>
                    <li>Chat</li>
                    <li>Ecomerce</li>
                    <li>Social App</li>
                    <li>Project</li>
                    <li>Calendar</li>
                    <li>Users</li>
                    <li>Contact</li>
                    <li>Note</li>
                    <li>To do</li>
                    <li>Kanban Board</li>
                    <li>Import Export</li>
                    <li>Task</li>
                    <li>Support</li>
                    <li>Learning App</li>
                    <li>Job Search</li>
                  </ul>
                  <h2>Key Feature</h2>
                  <p>HexaDash contains increadible features listed below.</p>
                  <ul>
                    <li>Build with <strong>React 18.0.0</strong></li>
                    <li>Modern Design</li>
                    <li>Fully Responsive Design</li>
                    <li>Styled Components</li>
                    <li>Create React App Supported</li>
                    <li><strong>Antd 4.18.8</strong> compatible</li>
                    <li><strong>Firebase</strong>  Authentication & CRUD with APIs</li>
                    <li><strong>Axios</strong> CRUD with <strong>Rest APIs</strong> </li>
                    <li><strong>React Hooks</strong> </li>
                    <li><strong>Redux-thunk</strong></li>
                    <li><strong>Multi-language</strong> support with i18n ( JSON object )</li>
                    <li>Multiple Layouts</li>
                    <li>React Library Based components<strong> (No Jquery)</strong></li>
                    <li>Easy to Customized with <strong>Ant Design</strong> variables</li>
                    <li>Email, eCommerce, Calendar, Projects, Tasks, Supports, Learning, Note, Contact, Calendar & many more apps.</li>
                    <li>Profile, Settings, Gallery, Pricing, Banners, Testimonail, Faqs, Maintanance , 404, Terms & Comditions, Coming Soon and many more pages.</li>
                    <li>Clean Code</li>
                    <li>Async Loading</li>
                    <li>Code Spliting</li>
                  </ul>
                  <h2>Layout Features</h2>
                  <ul>
                    <li>Light & Dark Mode Supported</li>
                    <li>Sidebar & Top menu supported</li>
                    <li>LTR & RTL Supported</li>
                  </ul>
                  <h2>Dependancies</h2>
                  <ul>
                    <li>React</li>
                    <li>Antd</li>
                    <li>React Hook</li>
                    <li>React Router DOM</li>
                    <li>Redux</li>
                    <li>Styled Component</li>
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

export default Overview;
