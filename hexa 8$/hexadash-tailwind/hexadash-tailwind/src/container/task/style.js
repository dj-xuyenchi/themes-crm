import Styled from 'styled-components';

const FixedSidebar = Styled.div`
    position: fixed;
    top: 0;
    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
    width: 280px;
    height: 100vh;
    z-index: 9999;
    overflow-y: auto;
    transition: all .3s ease;
    &.show{
        transform: translateX(0px);
    }
    &.hide{
        transform: translateX(-280px);
    }
    .trigger-close{
        float: right;
        margin-top: 15px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        svg,
        i{
            color: ${({ theme }) => theme['danger-color']}; 
        }
    }
    .hexadash-taskApp-sidebar{
        padding-top: 60px;
    }
`;

export { FixedSidebar };
