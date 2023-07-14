import Styled from 'styled-components';

const CustomizerWrap = Styled.div`
    
    /* Customizer Style */
    .hexadash-customizer-wrapper{
        position: fixed;
        top: 0;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
        width: 350px;
        transform: translateX(${({ theme }) => (theme.rtl ? '-350px' : '350px')});
        height: 100%;
        overflow-y: auto;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        box-shadow: 0 0 30px #9299B810;
        z-index: 9998;
        transition: all .3s ease;
        @media only screen and (max-width: 479px){
            width: 280px;
            transform: translateX(${({ theme }) => (theme.rtl ? '-280px' : '280px')});
        }
        &.show{
            transform: translateX(0);
        }
    }
    .hexadash-customizer{
        height: 100%;
        .hexadash-customizer__head{
            position: relative;
            padding: 18px 24px;
            border-bottom: 1px solid color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            text-align: left;
            .hexadash-customizer-close{
                position: absolute;
                right: 15px;
                top: 15px;
                svg,
                i{
                    color: #FF4D4F;
                }
            }
            .hexadash-customizer__title{
                font-weight: 600;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                font-size: 16px;
                margin-bottom: 2px;
            }
            hexadash-customizer__sub-title{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        .hexadash-customizer__body{
            padding: 25px;
        }
        .hexadash-customizer__single{
            &:not(:last-child){
                margin-bottom: 35px;
            }
            h4{
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 10px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .hexadash-customizer-list{
        margin: -10px;
        .hexadash-customizer-list__item{
            position: relative;
            display: inline-block;
            min-height: 60px;
            background-size: cover;
            margin: 10px;
            &.top{
                span.fa{
                    top: 35px;
                }
            }
            &:hover{
                span{
                    color: #5F63F2;
                }
            }
            a{
                position: relative;
                display: block;
                &.active{
                    span.fa{
                        display: block;
                    }
                }
                span.fa{
                    display: none;
                    font-size: 16px;
                    margin-top: 0;
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    color: ${({ theme }) => theme['success-color']};
                }
            }
            img{
                width: 100%;
            }
            span{
                display: inline-block;
                margin-top: 15px;
                color: #272B41;
            }
        }
    }
`;

export { CustomizerWrap };
