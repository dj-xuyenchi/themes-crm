import Styled from 'vue3-styled-components';

const Span = Styled.span`
    &.active{
        color: ${({ theme }) => theme['primary-color']};
        text-decoration: line-through;
    }
`;

const TodoStyleWrapper = Styled.div`
    .ant-card-body{
        padding: 15px 0 25px !important
    }
    .ant-table{
        thead{
            display: none;
        }
        tbody{
            tr{
                position: relative;
                &:hover{
                    box-shadow: 0 15px 50px ${({ theme }) => theme['light-color']}20;
                    .ant-table-cell{
                        background-color: #fff;
                    }
                }
                td{
                    font-size: 14px;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    line-height: .75;
                    padding: 0;
                    &:first-child{
                        padding-left: 25px;
                    }
                    &:last-child{
                        padding-right: 25px;
                    }
                    .ant-checkbox-wrapper{
                        padding-top: 0;
                        &:hover{
                            &:after{
                                border-color: ${({ theme }) => theme['success-color']};
                            }
                            .ant-checkbox-inner{
                                border-color: ${({ theme }) => theme['success-color']};
                            }
                        }
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    .ant-checkbox-checked .ant-checkbox-inner{
                        background-color: ${({ theme }) => theme['success-color']};
                        border-color: ${({ theme }) => theme['success-color']};
                    }
                    .todo-title{
                        min-width: 150px;
                        line-height: 1.5;
                    }
                }
            }
            .todos-action{
                min-width: 100px;
                text-align: right;
                svg,
                i,
                span{
                    color: #D8DCEB !important;
                }
								svg{
									fill: #D8DCEB !important;
								}
                svg.feather-trash-2{
                    fill: ${({ theme }) => theme['gray-color']}
                }
                .star{
                    margin: 0 20px;
                    &.active{
                        svg{
                            fill: ${({ theme }) => theme['warning-color']} !important;
                        }
                    }
                }
            }

        }
    }

    .new-todo-wrap{
        padding: 16px 25px 0;
        .btn-toDoAdd{
            font-size: 12px;
            font-weight: 500;
            height: 50px;
            padding: 0px 23.23px;
        }
    }

    .ninjadash-tassklist-wrap{
        margin-top: 2px;
        min-height: 308px;
    }
    .ninjadash-tasklist-empty{
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ninjadash-tasklist-body{
        .ninjadash-tasklist{
            padding: 0 25px;
            margin: -10px 0 0 0;
            .ninjadash-tasklist-item {
                @media only screen and (max-width: 575px){
                    padding: 7.5px 0 !important;
                    flex-direction: row !important;
                    align-items: center !important;
                }
                .ninjadash-tasklist-item__action{
                    @media only screen and (max-width: 575px){
                        margin: 0;
                    }
                }
            }
        }
    }
`;
export { Span, TodoStyleWrapper };
