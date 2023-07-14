import Styled from 'vue3-styled-components';

const NoteStyleCard = Styled.div`
    .ant-card{
        border-radius: 15px !important;
    }
    .ant-card .ant-card-body{
        border-radius: 15px !important;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        padding-bottom: 20px !important;
        padding-top: 20px !important;
        transition: .35s;
        h4{
            display: flex;
            align-items: center;
            font-size: 16px;
            margin-bottom: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            justify-content: space-between;
            svg{
                fill: #5A5F7D !important;
                cursor: move;
            }
            .status-bullet{
                position: relative;
                bottom: 2px;
                min-width: 7px;
                height: 7px;
                display: inline-block;
                border-radius: 50%;
               ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')} : 8px;
               &.personal{
                background: #5F63F2;
               }
               &.work{
                background: #01B81A;
               }
               &.social{
                background: #FA8B0C;
               }
               &.important{
                background: #2C99FF;
               }
            }
        }
        .actions{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 18px;
            .star{
                svg,
                i,
                span{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']}  !important;
                    fill: ${({ theme }) => theme[theme.mainContent]['gray-text']}  !important;
                }
                &.active{
                    svg,
                    i,
                    span{
                        color: ${({ theme }) => theme['warning-color']} !important;
                        fill: ${({ theme }) => theme['warning-color']} !important;
                    }
                }
            }
            span{
                display: inline-block;
                margin: -5px;
                a {
                    margin: 5px;
                    svg,
                    i,
                    span{
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
                        fill: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
                    }
                }
            }
            .ant-dropdown-trigger{
                svg{
                    fill: #868EAE;
                }
            }
        }
    }
    &.personal .ant-card .ant-card-body{
        background: #5F63F240;
        &:hover{
            background: #5F63F290;
        }
    }
    &.work .ant-card .ant-card-body{
        background: #01B81A40;
        &:hover{
            background: #01B81A90;
        }
    }
    &.social .ant-card .ant-card-body{
        background: #FA8B0C40;
        &:hover{
            background: #FA8B0C90;
        }
    }
    &.important .ant-card .ant-card-body{
        background: #2C99FF40;
        &:hover{
            background: #2C99FF90;
        }
    }
`;

const Bullet = Styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
    &.personal{
        background: #5F63F2;
    }
    &.work{
        background: #01B81A;
    }
    &.social{
        background: #FA8B0C;
    }
    &.important{
        background: #2C99FF;
    }
`;

export { NoteStyleCard, Bullet };
