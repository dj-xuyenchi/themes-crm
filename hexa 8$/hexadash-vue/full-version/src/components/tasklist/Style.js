import Styled from 'vue3-styled-components';

const TaskListStyle = Styled.div`
    .ninjadash-tassklist-wrap{
        /* background-color: #fff; */
        border-radius: 10px;
        min-height: 220px;
    }
    .ninjadash-tasklist-head{
        .ninjadash-tasklist-head__title{
            font-size: 16px;
            font-weight: 500;
            padding: 15px 30px;
            margin-bottom: 0;
            border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
        }
    }
    .ninjadash-tasklist-body{
        .ninjadash-tasklist{
            .ninjadash-tasklist-item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 7.5px 0;
                @media only screen and (max-width: 575px){
                    padding: 15px 0;
                }
            }
            .ninjadash-tasklist-item__title{
                font-size: 16px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                .ant-checkbox + span{
                    ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 6px;
                }
                .ant-checkbox-wrapper{
                    &:hover{
                        .ant-checkbox-inner{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    span{
                        font-size: 15px;
                        font-weight: 500;
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    }
                    .ant-checkbox-input{
                        &:focus + .ant-checkbox-inner{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    .ant-checkbox-inner{
                        width: 18px;
                        height: 18px;
                        &:after{
                            width: 5px;
                            height: 9px;
                            top: 48%;
                            left: 25.5%;
                        }
                    }
                    .ant-checkbox-inner {
                        background: transparent;
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                        .ant-checkbox-inner{
                            background-color: ${({ theme }) => theme['success-color']};
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                }
            }
            .ninjadash-tasklist-item__text{
                p{
                    font-size: 14px;
                    font-weight: 400;
                    color: ${({ theme }) => theme['gray-color']};
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
            .ninjadash-tasklist-item__action{
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 20px;
                @media only screen and (max-width: 575px){
                    margin-top: 0;
                }
                svg{
                  fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                }
                .ninjadash-delete{
                    svg{
                        fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                        width: 14px;
                        height: auto;
                        &:hover{
                            fill: ${({ theme }) => theme['danger-color']};
                        }
                    }
                }
                .task-favourite{
                    line-height: 1;
                    svg{
                        fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    }
                    &.task-favorite--active{
                        svg{
                            fill: ${({ theme }) => theme['warning-color']};
                        }
                    }
                    svg,
                    img{
                        position: relative;
                        top: -2px;
                        width: 16px;
                        height: 16px;
                    }
                }
				a {
                    display: inline-block;
                    margin: 0 10px;
                    @media only screen and (max-width: 575px){
                        margin: 0 3px;
                    }
                    @media only screen and (max-width: 499px){
                        &:first-child{
                            margin-left: 0;
                        }
                    }
                }
                .ant-dropdown-trigger {
                    line-height: 1;
                }
                .task-favourite{
                    cursor: pointer;
                }
                a {
                    display: inline-block;
                    margin: 0 10px;
                }
                .ninjadash-edit{
                    &:hover{
                        svg{
                            fill: ${({ theme }) => theme['info-color']};
                        }
                    }
                }
                .ninjadash-delete{
                    &:hover{
                        svg{
                            fill: ${({ theme }) => theme['danger-color']};
                        }
                    }
                }
            }
        }
        .ninjadash-tasklist-empty{
            min-height: 215px;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                font-size: 18px;
                font-weight: 500;
                color: ${({ theme }) => theme['light-color']};
            }
        }
    }
    .ninjadash-modal-actions{
        display: flex;
        justify-content: flex-end;
        button {
            margin: 5px;
        }
    }
`;

export { TaskListStyle };
