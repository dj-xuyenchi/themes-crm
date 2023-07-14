import { Col, Row } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { HorizontalForm } from './overview/HorizontalForm';
import { HorizontalIconForm } from './overview/HorizontalIconForm';

const FormLayout = () => {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Form Layouts',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Form Layouts" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <HorizontalForm />
          </Col>
          <Col xs={24}>
            <HorizontalIconForm />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default FormLayout;
