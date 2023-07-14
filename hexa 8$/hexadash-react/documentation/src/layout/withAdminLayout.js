import { Button, Col, Layout, Row } from 'antd';
import propTypes from 'prop-types';
import { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MenueItems from './MenueItems';
import { FooterStyle, LayoutContainer } from './Style';

const { theme } = require('../config/theme/themeVariables');

const { Header, Sider, Content } = Layout;
// const { darkMode } = config;

const ThemeLayout = WrappedComponent => {
  class LayoutComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: false,
        hide: true,
        searchHide: true,
        customizerAction: false,
        activeSearch: false,
      };
      this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
      this.setState({
        collapsed: window.innerWidth <= 1200 && true,
      });
    }

    render() {
      const { collapsed, hide } = this.state;
      const { layoutMode, rtl, topMenu } = this.props;
      
      const left = !rtl ? 'left' : 'right';
      const toggleCollapsed = () => {
        this.setState({
          collapsed: !collapsed,
        });
      };

      const toggleCollapsedMobile = () => {
        if (window.innerWidth <= 990) {
          this.setState({
            collapsed: !collapsed,
          });
        }
      };

      const onShowHide = () => {
        this.setState({
          hide: !hide,
          searchHide: true,
        });
      };

      const SideBarStyle = {
        margin: '63px 0 0 0',
        padding: `${!rtl ? '20px 20px 55px 0': '20px 0 55px 20px'}`,
        overflowY: 'auto',
        height: '100vh',
        position: 'fixed',
        [left]: 0,
        zIndex: 988,
      };

      const renderView = ({ style, ...props }) => {
        const customStyle = {
          marginRight: 'auto',
          [rtl ? 'marginLeft' : 'marginRight']: '-17px',
        };
        return <div {...props} style={{ ...style, ...customStyle }} />;
      };

      const renderThumbVertical = ({ style, ...props }) => {
        const { ChangeLayoutMode } = this.props;
        const thumbStyle = {
          borderRadius: 6,
          backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
          [left]: '2px',
        };
        return <div style={{ ...style, ...thumbStyle }} props={props} />;
      };

      const renderThumbHorizontal = ({ style, ...props }) => {
        const { ChangeLayoutMode } = this.props;
        const thumbStyle = {
          borderRadius: 6,
          backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
        };
        return <div style={{ ...style, ...thumbStyle }} props={props} />;
      };

      return (
        <LayoutContainer>
          <Layout className="layout">
            <Header
              style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                [!rtl ? 'left' : 'right']: 0,
              }}
            >
              <div className="ninjadash-header-content d-flex">
                <div className="ninjadash-header-content__left">
                  <div className="navbar-brand align-cener-v">
                    <Link
                      className={topMenu && window.innerWidth > 991 ? 'ninjadash-logo top-menu' : 'ninjadash-logo'}
                      to="/admin"
                    >
                      <img
                        src={
                          layoutMode === "lightMode" ? require(`../static/img/Logo_Dark.svg`).default : require(`../static/img/Logo_White.svg`).default
                        }
                        alt=""
                      />
                    </Link>
                    {!topMenu || window.innerWidth <= 991 ? (
                      <Button type="link" onClick={toggleCollapsed}>
                        <img
                          src={require(`../static/img/${collapsed ? 'left-bar.svg' : 'left-bar.svg'}`)}
                          alt="menu"
                        />
                      </Button>
                    ) : null}
                  </div>
                </div>
                <div className="ninjadash-header-content__right">
                  <span className="ninjadash-header-label">Documentation</span>
                  <div className="ninjadash-nav-actions">
                    <a href="https://themeforest.net/item/hexadash-svelte-multipurpose-admin-dashboard-template/42355059" target="_blank" className="ant-btn ant-btn-primary ant-btn-lg btn-buy" rel="noreferrer">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </Header>
            <div className="ninjadash-header-more">
              <Row>
                <Col md={0} sm={24} xs={24}>
                  <div className="ninjadash-header-more-inner">
                      
                  </div>
                </Col>
              </Row>
            </div>
            <Layout>
              {!topMenu || window.innerWidth <= 991 ? (
                <ThemeProvider theme={theme}>
                  <Sider width={280} style={SideBarStyle} collapsed={collapsed} theme={layoutMode === "lightMode" ? 'light':'dark'}>
                    <Scrollbars
                      className="custom-scrollbar"
                      autoHide
                      autoHideTimeout={500}
                      autoHideDuration={200}
                      renderThumbHorizontal={renderThumbHorizontal}
                      renderThumbVertical={renderThumbVertical}
                      renderView={renderView}
                      renderTrackVertical={props => <div {...props} className="ninjadash-track-vertical"/>}
                    >
                      <MenueItems
                        topMenu={topMenu}
                        toggleCollapsed={toggleCollapsedMobile}
                      />
                    </Scrollbars>
                  </Sider>
                </ThemeProvider>
              ) : null}
              <Layout className="atbd-main-layout">
                <Content>
                  <WrappedComponent {...this.props} />
                  <FooterStyle className="admin-footer">
                    <Row>
                      <Col md={12} xs={24}>
                        <span className="admin-footer__copyright">
                          © 2023<Link to="https://sovware.com/">SovWare</Link>
                        </span>
                      </Col>
                      <Col md={12} xs={24}>
                        <div className="admin-footer__links">
                          <a target="_blank" href="https://sovware.com/" rel="noreferrer">About</a>
                          <a target="_blank" href="https://sovware.com/" rel="noreferrer">Support</a>
                        </div>
                      </Col>
                    </Row>
                  </FooterStyle>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </LayoutContainer>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      layoutMode: state.ChangeLayoutMode.mode,
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  };

  LayoutComponent.propTypes = {
    layoutMode: propTypes.string,
    rtl: propTypes.bool,
    topMenu: propTypes.bool,
  };

  return connect(mapStateToProps)(LayoutComponent);
};
export default ThemeLayout;
