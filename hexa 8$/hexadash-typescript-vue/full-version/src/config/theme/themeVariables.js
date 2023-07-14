import themes from './themeConfigure';
const { lightMode, blackMode } = themes;
const primaryColor = '#8231D3';
const primaryHover = '#6726A8';
const secondaryColor = '#5840FF';
const secondaryHover = '#3520C8';
const linkColor = '#1890ff';
const linkHover = '#0d79df';
const successColor = '#01B81A';
const successHover = '#0D811D';
const warningColor = '#FA8B0C';
const warningHover = '#D9790A';
const errorColor = '#FF0F0F';
const errorHover = '#CB0000';
const infoColor = '#00AAFF';
const infoHover = '#0787C7';
const darkColor = '#0A0A0A';
const darkHover = '#272525';
const grayColor = '#404040';
const grayHover = '#585858';
const lightColor = '#8C90A4';
const lightHover = '#8C90A4';
const whiteColor = '#ffffff';
const whiteHover = '#ADB5D9';
const dangerColor = '#FF0F0F';
const dangerHover = '#CB0000';
const extraLightColor = '#ADB5D9';
const extraLightHover = '#ADB5D9';
const headingColor = 'rgba(0, 0, 0, 0.85)';
const dashColor = '#E3E6EF';
const borderLight = '#F1F2F6';
const borderNormal = '#E3E6EF';
const borderDeep = '#C6D0DC';
const bgGrayLight = '#F8F9FB';
const bgGrayNormal = '#F4F5F7';
const bgGrayDeep = '#EFF0F3';
const lightGrayColor = '#868EAE';
const sliderRailColor = 'rgba(251,53,134,.20)';
const graySolidColor = '#9299b8';
const pinkColor = '#F63178';
const textColor = '#404040';
const btnlg = '50px';
const btnsm = '38px';
const btnxs = '32px';
const theme = {
    lightMode,
    blackMode,
    'primary-color': primaryColor,
    'primary-hover': primaryHover,
    'secondary-color': secondaryColor,
    'secondary-hover': secondaryHover,
    'link-color': linkColor,
    'link-hover': linkHover,
    'success-color': successColor,
    'success-hover': successHover,
    'warning-color': warningColor,
    'warning-hover': warningHover,
    'error-color': errorColor,
    'error-hover': errorHover,
    'info-color': infoColor,
    'info-hover': infoHover,
    'dark-color': darkColor,
    'dark-hover': darkHover,
    'gray-color': grayColor,
    'gray-hover': grayHover,
    'light-color': lightColor,
    'light-hover': lightHover,
    'white-color': whiteColor,
    'white-hover': whiteHover,
    'danger-color': dangerColor,
    'danger-hover': dangerHover,
    'gray-solid': graySolidColor,
    white: whiteColor,
    black: '#000000',
    pink: pinkColor,
    'dash-color': dashColor,
    'extra-light-color': extraLightColor,
    'extra-light-hover': extraLightHover,
    'font-family': "'Jost', sans-serif",
    'font-size-base': '15px',
    'heading-color': headingColor,
    'text-color': textColor,
    'text-color-secondary': grayColor,
    'disabled-color': 'rgba(0, 0, 0, 0.25)',
    'border-radius-base': '4px',
    'border-color-base': '#d9d9d9',
    'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
    'border-color-light': borderLight,
    'border-color-normal': borderNormal,
    'border-color-deep': borderDeep,
    'bg-color-light': bgGrayLight,
    'bg-color-normal': bgGrayNormal,
    'bg-color-deep': bgGrayDeep,
    'light-gray-color': lightGrayColor,
    'btn-height-lg': btnlg,
    'btn-height-sm': btnsm,
    'btn-height-extra-small': btnxs,
    'btn-default-color': darkColor,
    // cards
    'card-head-background': '#ffffff',
    'card-head-color': darkColor,
    'card-background': '#ffffff',
    'card-head-padding': '16px',
    'card-padding-base': '12px',
    'card-radius': '10px',
    'card-shadow': '0 5px 20px rgba(146,153,184,0.03)',
    // Layout
    'layout-body-background': '#F4F5F7',
    'layout-header-background': '#ffffff',
    'layout-footer-background': '#fafafa',
    'layout-header-height': '64px',
    'layout-header-padding': '0 15px',
    'layout-footer-padding': '24px 15px',
    'layout-sider-background': '#ffffff',
    'layout-trigger-height': '48px',
    'layout-trigger-background': '#002140',
    'layout-trigger-color': '#fff',
    'layout-zero-trigger-width': '36px',
    'layout-zero-trigger-height': '42px',
    // Layout light theme
    'layout-sider-background-light': '#fff',
    'layout-trigger-background-light': '#fff',
    'layout-trigger-color-light': 'rgba(0, 0, 0, 0.65)',
    // PageHeader
    'page-header-padding': '24px',
    'page-header-padding-vertical': '16px',
    'page-header-padding-breadcrumb': '12px',
    'page-header-back-color': '#000',
    'page-header-ghost-bg': 'inherit',
    'page-header-heading-sub-title': '15px',
    // Popover body background color
    'popover-color': darkColor,
    // alert
    'alert-success-border-color': successColor,
    'alert-success-bg-color': successColor + 15,
    'alert-error-bg-color': errorColor + 15,
    'alert-warning-bg-color': warningColor + 15,
    'alert-info-bg-color': infoColor + 15,
    // radio btn
    'radio-button-checked-bg': primaryColor,
    // gutter width
    'grid-gutter-width': 25,
    // skeleton
    'skeleton-color': borderLight,
    // slider
    'slider-rail-background-color': sliderRailColor,
    'slider-rail-background-color-hover': sliderRailColor,
    'slider-track-background-color': primaryColor,
    'slider-track-background-color-hover': primaryColor,
    'slider-handle-color': primaryColor,
    'slider-handle-size': '16px',
    // input
    'input-border-color': borderNormal,
    'input-height-base': '40px',
    'input-height-sm': '30px',
    'input-height-lg': '50px',
    'input-padding-horizontal': '20px',
    'input-padding-horizontal-lg': '20px',
    'input-padding-vertical-base': '12px',
    // rate
    'rate-star-color': warningColor,
    'rate-star-size': '13px',
    // Switch
    'switch-min-width': '35px',
    'switch-sm-min-width': '30px',
    'switch-height': '18px',
    'switch-sm-height': '15px',
    // result
    'result-title-font-size': '20px',
    'result-subtitle-font-size': '12px',
    'result-icon-font-size': '50px',
    // tabs
    'tabs-horizontal-padding': '12px 15px',
    'tabs-horizontal-margin': '0',
    // list
    'list-item-padding': '10px 24px',
    // Tags
    'tag-default-bg': '#EFF0F3',
    'tag-default-color': darkColor,
    'tag-font-size': '11px',
    // Progress
    'progress-default-color': primaryColor,
    'progress-text-font-size': '14px',
};
const themeColor = {
    lightMode,
    blackMode,
    'primary-color': primaryColor,
    'primary-hover': primaryHover,
    'secondary-color': secondaryColor,
    'secondary-hover': secondaryHover,
    'link-color': linkColor,
    'link-hover': linkHover,
    'success-color': successColor,
    'success-hover': successHover,
    'warning-color': warningColor,
    'warning-hover': warningHover,
    'error-color': errorColor,
    'error-hover': errorHover,
    'info-color': infoColor,
    'info-hover': infoHover,
    'dark-color': darkColor,
    'dark-hover': darkHover,
    'gray-color': grayColor,
    'gray-hover': grayHover,
    'light-color': lightColor,
    'light-hover': lightHover,
    'white-color': whiteColor,
    'white-hover': whiteHover,
    'danger-color': dangerColor,
    'danger-hover': dangerHover,
    white: whiteColor,
    black: '#000000',
    pink: pinkColor,
    'dash-color': dashColor,
    'extra-light-color': extraLightColor,
    'extra-light-hover': extraLightHover,
    'heading-color': headingColor,
    'text-color': textColor,
    'text-color-secondary': grayColor,
    'disabled-color': 'rgba(0, 0, 0, 0.25)',
    'border-radius-base': '4px',
    'border-color-base': '#d9d9d9',
    'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
    'border-color-light': borderLight,
    'border-color-normal': borderNormal,
    'border-color-deep': borderDeep,
    'bg-color-light': bgGrayLight,
    'bg-color-normal': bgGrayNormal,
    'bg-color-deep': bgGrayDeep,
    'light-gray-color': lightGrayColor,
    'gray-solid': graySolidColor,
};
export { theme, themeColor };
