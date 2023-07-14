import Styled from 'vue3-styled-components';
import { AutoComplete } from 'ant-design-vue';

const autoComplete: any = AutoComplete;
const props = ['customComponent', 'patterns', 'patternButtons', 'width', 'onSearch', 'dataSource', 'placeholder'];

const AutoCompleteStyled = Styled(autoComplete, props)`
    display: block !important;
    .ant-select-selection-placeholder{
        padding: 0 20px !important;
        text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 2px !important;
    }
    .ant-select-selector{
        display: flex;
        align-items: center;
        padding: 0 !important;
        border-color: #E3E6EF !important;
        .ant-select-selection-search{
            .ant-input-affix-wrapper{
                padding: 0 20px;
                background: ${({ theme }) => theme[theme.mainContent]['light-background']} !important;
                .ant-input{
                    background: ${({ theme }) => theme[theme.mainContent]['light-background']} !important;
                }
            }
            .ant-input-suffix{
                svg,
                i{
                    position: relative;
                    /* top: 1.5px; */
                    color: ${({ theme }) => theme['extra-light-color']};
                }
                svg{
                    fill: ${({ theme }) => theme['extra-light-color']};
                    width: 18px;
                }
            }
        }
    }
    .ant-select-selector input{
        height: 35px !important;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
        &::placeholder{
            color: ${({ theme }) => theme['extra-light-color']} !important;
        }
    }
    .ant-select-selection-search{
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 20px;
        width: auto !important;
        @media only screen and (max-width: 575px){
            width: 100% !important;
        }
    }
    .ant-select-selection-search textarea.ant-input{
        padding: 12px 20px;
        height: 50px;
    }
    .ant-input-affix-wrapper{
        padding: 0 20px;
    }
    .ant-input-affix-wrapper input{
        height: 38px !important;
    }
    .ant-input-affix-wrapper .ant-input-suffix .search-btn{
        height: 38px;
        border-radius: ${({ theme }) => (theme.rtl ? '4px 0 0 4px' : '0 4px 4px 0')};
        svg{
            fill: #fff;
        }
    }
`;

export { AutoCompleteStyled };
