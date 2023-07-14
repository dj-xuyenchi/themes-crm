import Styled from 'vue3-styled-components';
import { Steps } from 'ant-design-vue';
const StepsStyle = Styled(Steps)`
    .steps-action{
        margin-top: 40px;
        button{
            height: 44px;
        }
    }
`;

const ActionWrapper = Styled.div`
    width: 100%;
    .step-action-wrap{
        display: flex;
        justify-content: center;
        .step-action-inner{
            width: 580px;
            padding: 0 25px;
            @media only screen and (max-width: 575px){
                width: 100%;
                padding: 0;
            }
        }
    }
    .steps-action{
        margin-top: 25px;
        width: 100%;
        float: right
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: 991px){
            margin-top: 25px;
        }
        @media only screen and (max-width: 379px){
            flex-flow: column;
        }
        button{
            display: flex;
            align-items: center;
            height: 44px;
            padding: 0 20px;
            @media only screen and (max-width: 379px){
                justify-content: center;
            }
            &.ant-btn-light{
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                background: none;
                color: ${({ theme }) => theme['gray-color']};
                svg {
                    fill: ${({ theme }) => theme['gray-color']} !important;
                }
            }
            &.btn-next{
                svg{
                    margin-left: 10px;
					fill: #fff;
                }
            }
            &.btn-prev{
                svg{
                    margin-right: 10px;                    
                }
            }
            i{
                width: auto;
            }
        }
        button + button {
            @media only screen and (max-width: 379px){
                margin-top: 15px;
            }
        }
        .btn-next{
            i,
            svg{
                line-height: 0;
            }
        }
    }
`;

export { StepsStyle, ActionWrapper };
