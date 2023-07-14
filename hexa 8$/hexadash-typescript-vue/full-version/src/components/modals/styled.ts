import Styled from 'vue3-styled-components';
import { Modal } from 'ant-design-vue';

const modals: any = Modal;
const ModalStyledColord = (type: any, theme: any) => `
  .ant-modal-content,
	.ant-modal-header {
    background-color: ${type !== 'default' && theme[`${type}-color`]} !important;
  }
  .ant-modal-title,
	.ant-modal-body {
    color: #fff;
  }
  .ant-modal-footer button {
    background: #fff;
    color: #999;
    border: 1px solid #ffff;
  }
`;

const darkModeModal = (theme: any) => `
  .ant-modal-content, .ant-modal-header {
    background-color: ${theme[theme.mainContent]['white-background']};
  }
  .ant-modal-header {
    border-bottom: 1px solid ${theme[theme.mainContent]['border-color-default']};
  }
  .ant-modal-title {
    color: ${theme[theme.mainContent]['dark-text']} !important;
  }
  .ant-modal-content .ant-checkbox-inner, .ant-modal-content .ant-picker {
    background-color: ${theme[theme.mainContent]['dark-background']};
    border: none !important;
  }

  .ant-modal-content .ant-picker .ant-picker-suffix svg {
    color: ${theme[theme.mainContent]['dark-text']};
  }
  .ant-modal-footer button {
    background: #fff;
    color: #999;
    border: 1px solid ${theme[theme.mainContent]['border-color-default']} !important;
  }
`;

const props = ['type'];
const ModalStyled = Styled(modals, props)`
  ${({ theme }) => theme.darkMode && darkModeModal(theme)}
  ${({ theme, type }: any) => type && ModalStyledColord(type, theme)}
`;

export { ModalStyled, ModalStyledColord };
