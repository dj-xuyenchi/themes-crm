import Styled from 'vue3-styled-components';
import { Alert } from 'ant-design-vue';

const alerts: any = Alert;
const props = ['type', 'icon', 'message', 'description', 'showIcon', 'outlined', 'closable', 'closeText'];

const outline = (theme: any, type: any) => {
  return `
    border: 1px solid ${theme[`${type}-color`]} !important;
    background: #fff !important;
    &:hover, &:focus, &:active {
      .ant-alert-message, .ant-alert-message{
        color: #fff;
      }
    }
    .ant-alert-message, .ant-alert-message {
      color: ${theme[`${type}-color`]}
    }
  `;
};

const Style = Styled(alerts, props)`
  border-radius: ${({ shape }: any) => (!shape ? '4px' : '40px')} !important;
  border-width: 0px !important;
  margin: 15px 0 0 0!important;
  padding: 11px 20px!important;
  .ant-alert-message{
    line-height: 1.8;
    margin-bottom: 0 !important;
    font-size: 15px !important;
    font-weight: 500 !important;
  }
  &.ant-alert-with-description{
    .ant-alert-icon {
      ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
    }
    .ant-alert-message{
      margin-bottom: 5px !important;
    }
  }
  &.ant-alert-closable {
    .ant-alert-message{
      display: block;
    }
  }
  .ant-alert-message, .ant-alert-description {
    color: ${({ type, theme }: any) => theme[`${type}-color`]} !important;
  }
  .ant-alert-close-text{
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: #9299B8;
  }

  ${({ outlined, theme, type }: any) => outlined && outline(theme, type)}

  ${({ showIcon, theme }: any) =>
    showIcon &&
    `padding: 16px 15px 20px!important;
    .alert-empty-message{
      padding: 11px 40px 11px!important;
    }
    .ant-alert-icon{
      top: 5px !important;
      ${theme.rtl ? 'right' : 'left'}: 0px !important;
    }
    .ant-alert-message{
      margin-top: -2px;
    }
    i.ant-alert-icon {
      color: ${({ type }: any) => theme[`${type}-color`]} !important;
      background: #ffffff00 !important;
      height: 100%;
      width: 50px;
      position: absolute;
      top: 0;
      font-size: 15px;
      ${theme.rtl ? 'right' : 'left'}: 0 !important;
    }`}


  .ant-alert-close-icon {
    top: 12px !important;
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 20px !important;
    svg,
    span,
    img,
    i{
      width: 8px;
      height: 8px;
    }
		svg{
			fill: ${({ theme }) => theme['light-color']};
		}
  }
`;

export { Style };
