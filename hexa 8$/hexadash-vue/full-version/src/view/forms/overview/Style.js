import Styled from 'vue3-styled-components';

const HorizontalFormStyleWrap = Styled.div`
    .ant-card{
        margin-bottom: 25px
    }
    .ant-form-horizontal{
        .ant-form-item-label{
            text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')}
        }
    }
    .ant-form-horizontal,
		.ant-form-vertical{
        .ant-form-item .ant-form-item-label{
            label{
                display: inline-block;
                font-weight: 500;
                margin-bottom: 0;
                @media only screen and (max-width: 767px) {
                    margin-bottom: 0;
                }
            }
        }

        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-input-affix-wrapper .ant-input-prefix svg{
            fill: ${({ theme }) => theme['gray-color']};
        }
        .ninjadash_form-action{
            margin: -7.5px;
            button{
                font-size: 14px;
                font-weight: 500;
                border-radius: 6px;
                margin: 7.5px;
                padding: 6.4px 19px;
                &.ninjadash_form-action__btn{
                    height: 44px;
                    padding: 6.4px 20px;
                }
                &.ant-btn-light{
                    background-color: transparent;
                    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
					color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                &.ninjadash_form-action__btn{
                    height: 44px;
                }
            }
            .ant-btn-light{
                background-color: #F8F9FB;
				color: #0A0A0A;
            }
        }
    }
    &.ninjadash_input-form{
        .ant-picker{
            width: 100%;
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
        }
    }
    ant-picker-input{
        &::placeholder{
            color: #9299B8 !important;
        }
    }
`;

const VerticalFormStyleWrap = Styled.div`
    .ant-card{
        margin-bottom: 25px
    }

    .ant-input-affix-wrapper .ant-input-prefix svg{
        fill: ${({ theme }) => theme['gray-color']};
    }
    .ninjadash_form-action{
        margin: -7.5px;
        button{
            font-size: 14px;
            font-weight: 500;
            border-radius: 6px;
            margin: 7.5px;
            padding: 6.4px 19px;
            &.ant-btn-light{
                height: 44px;
                background-color: #F1F2F6;
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
        .ant-form-item{
            margin-bottom: 25px !important;
        }
        .ant-btn-light{
            background-color: #F8F9FB;
			color: #0A0A0A;
        }
    }
    .ant-form-item{
        padding-bottom: 0;
    }
`;

const CheckListWrap = Styled.div`
    .ninjadash_check-list-wrap{
        display: flex;
        justify-content: space-between;
        .ninjadash_check-list{
            li{
                &:not(:last-child){
                    margin-bottom: 20px;
                }
            }
        }
    }
`;

const DropDownListComponents = Styled.div`
    .ninjadash_dropdown-list{
        .ant-dropdown-trigger{
            font-size: 14px;
            font-weight: 400;
            color: #9299B8;
            width: 100%;
            justify-content: flex-start;
            &:not(:last-child){
                margin-bottom: 25px;
            }
        }
    }
`;

const FormComponentsWrap = Styled.div`
    .ninjadash_datepicker-list{
        .ant-picker.ant-picker-range{
            width: 100%;
        }
    }
    .ninjadash_editor{
        border-radius: 4px;
        .EditorToolbar__root___3_Aqz{
            padding: 12px 20px 0;
        }
        .DraftEditor-root{
            min-height: 100px;
            .public-DraftEditorPlaceholder-root{
                padding: 12px 20px 0;
            }
        }
        select{
            margin-top: -4px;
        }
        .Dropdown__value___34Py9{
            &:after,
            &:before{
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: auto;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px;
            }
        }
    }
    .ninjadash_slider-list{
        margin: -25px 0;
        .ant-slider{
            margin: 25px 0;
        }
    }
`;

const FormValidationWrap = Styled.div`
    .ant-card-body{
        padding: 30px 25px 50px 25px !important;
    }
    .ant-form-item .has-error{
        .ant-form-explain{
            font-size: 13px;
        }
    }
    .ninjadash_agree-check{
        .ant-form-item-control-input{
            min-height: auto;
        }
        .ant-form-item .has-error{
            .ant-checkbox-wrapper{
                span{
                    font-size: 13px;
                }
                .ant-checkbox{
                    border-color: ${({ theme }) => theme['danger-color']}30;
                    &.ant-checkbox-checked{
                        border-color: ${({ theme }) => theme['danger-color']}30;
                        &:after{
                            border-color: ${({ theme }) => theme['danger-color']}30;
                        }
                        .ant-checkbox-inner{
                            &:after{
                                border-color: ${({ theme }) => theme['danger-color']};
                            }
                        }
                    }
                    .ant-checkbox-inner{
                        border-color: ${({ theme }) => theme['danger-color']}30;
                        background-color: ${({ theme }) => theme['danger-color']}30;
                    }
                }
            }
        }
        .ant-form-item-explain{
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 25px;
            font-size: 13px;
        }
    }
    .ninjadash_form-action{
        button{
            border-radius: 4px;
            padding: 6.4px 29.2px;
            height: 44px;
        }
    }
`;

export {
  HorizontalFormStyleWrap,
  VerticalFormStyleWrap,
  CheckListWrap,
  DropDownListComponents,
  FormComponentsWrap,
  FormValidationWrap,
};
