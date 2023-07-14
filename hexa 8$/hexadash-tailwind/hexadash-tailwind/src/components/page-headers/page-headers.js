import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { HeaderWrapper, PageHeaderStyle } from './style';

function PageHeader(props) {
  const { title, subTitle, routes, buttons, ghost, bgColor, className } = props;
  const breadcrumb = routes ? (
    <Breadcrumb
      className="flex order-2 relative top-1.5"
      separator={<span className="inline-flex bg-light-extra relative -top-0.5 w-1 h-1 rounded-full" />}
    >
      {routes.map((route, index) =>
        index + 1 === routes.length ? (
          <Breadcrumb.Item key={index} className="text-breadcrumbs dark:text-white30 text-15">
            {route.breadcrumbName}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={index} className="inline-flex items-start">
            <ReactSVG
              className="relative top-0.5 ltr:mr-2 rtl:ml-2 [&>div>svg]:text-[#8c90a4] dark:[&>div>svg]:text-white60 "
              src={require(`../../static/img/icon/home.svg`).default}
            />{' '}
            <Link
              to={route.path}
              className="text-light hover:text-primary dark:text-[#a4a5aa] dark:hover:text-white87 text-sm"
            >
              {route.breadcrumbName}
            </Link>
          </Breadcrumb.Item>
        ),
      )}
    </Breadcrumb>
  ) : (
    ''
  );
  return (
    <HeaderWrapper bgColor={bgColor}>
      <PageHeaderStyle
        className={`${className}`}
        title={title}
        subTitle={subTitle}
        breadcrumb={breadcrumb}
        extra={buttons}
        ghost={ghost}
      />
    </HeaderWrapper>
  );
}

PageHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bgColor: PropTypes.string,
  className: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  buttons: PropTypes.array,
  ghost: PropTypes.bool,
};

export { PageHeader };
