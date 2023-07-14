import Styled from 'vue3-styled-components';
import { Card } from 'ant-design-vue';

const BtnWraper = (theme: any) => `
    .ant-card-head {
      display: flex;
      justify-content: space-evenly;
      .ant-card-head-wrapper{
        width: 100%;
      }
      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{
        width: 100%;
        display: block;
      }
      .ant-tabs-nav-scroll {
        display: flex;
        justify-content: flex-end;
      }
      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
        display: none !important;
      }
      .ant-tabs-nav .ant-tabs-tab {
        border-radius: 2px;
        height: 30px;
        margin: 0px;
        ${theme.rtl ? 'margin-right' : 'margin-left'}: -1px;
        display: inline-flex;
        align-items: center;
        border: 1px solid ${theme['border-color-base']};
        background: #fff;
        span svg {
          ${theme.rtl ? 'padding-right' : 'padding-left'}: 5px !important;
          ${theme.rtl ? 'padding-left' : 'padding-right'}: 5px !important;
        }
      }
      .ant-tabs-nav .ant-tabs-tab-active {
        font-weight: 500;
        border: 1px solid ${theme['primary-color']};
        background: ${theme['primary-color']};
        color: #fff;
        border-radius: 2px;
        height: 30px;
        margin: 0px;
        display: inline-flex;
        align-items: center;
      }
      .ant-tabs-bar {
        border: none;
      }
      .ant-tabs-nav-wrap {
        margin-bottom: 0px;
        overflow: hidden;
    }
    }
    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {
      width: 100%;
      display: block;
      justify-content: flex-end;
      height: 73px;
      padding-top: 8px;
  }
`;

const CardFrame = Styled(Card)`

  ${({ isbutton, theme }: any) => isbutton && BtnWraper(theme)}
  margin-bottom: 25px !important;
  background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
  .ant-card-head{
    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    .ant-card-head-title{
      padding: 18px 0;
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
  }
  .ant-card-body{
    padding: ${({ bodypadding }: any) => (bodypadding ? `${bodypadding} !important` : '25px !important')};
    @media only screen and (max-width: 575px){
      padding: ${({ bodypadding }: any) => (bodypadding ? `${bodypadding} !important` : '15px !important')};
    }
		h1,
		h2,
		h3,
		h4,
		h5,
		h6{
			color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
		}
    table{
      .ant-tag{
        line-height: 18px;
        border: 0 none;
        text-transform: uppercase;
        font-size: 10px;
        color: #fff;
        &.early{
          background: ${({ theme }) => theme['primary-color']}
        }
        &.late{
          background: ${({ theme }) => theme[theme.mainContent].Warning}
        }
        &.complete{
          background: ${({ theme }) => theme[theme.mainContent].success}
        }
        &.progress{
          background: ${({ theme }) => theme[theme.mainContent].danger}
        }
      }
    }
  }
  .ant-card-head-title .ant-page-header-heading-title{
    font-weight: 500;
  }
  .ant-card.ant-card-bordered {
      border-radius: 5px;
      overflow: hidden;
      border: none;
  }
  .custom-label {
    font-size: 13px;
    color: #868eae;
    display: inline-flex;
    align-items: center;
  }
  .custom-label:not(:last-child) {
    ${({ theme }) => (theme.rtl ? ' margin-left' : ' margin-right')} : 20px;
  }

  .custom-label span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    ${({ theme }) => (theme.rtl ? ' margin-left' : ' margin-right')}: 7px;
  }


  .ant-card-extra .ant-dropdown-trigger,
  .ant-card-extra .card-extra-link {
    line-height: 0;
    order: 1;
    ${({ theme }) => (!theme.rtl ? ' margin-left' : ' margin-right')}: 20px;
    @media only screen and (max-width: 575px){
      margin-left: 0;
    }
  }

  .growth-downward h1 sub,
  .growth-upward h1 sub {
    font-size: 14px;
    font-weight: 600;
    bottom: 0;
    ${({ theme }) => (!theme.rtl ? ' left' : ' right')}: 5px;
  }

`;

export { CardFrame };
