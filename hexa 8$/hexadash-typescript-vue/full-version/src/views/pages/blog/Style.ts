import Styled from 'vue3-styled-components';

const BlogDetailsStyle = Styled.div`
    .ninjadash-blog-details{
        margin-bottom: 80px;
        img{
            width: 100%;
        }
        .ninjadash-blog-content-box{
            padding: 0 100px;
            @media only screen and (max-width: 1499px){
                padding: 0 50px;
            }
            @media only screen and (max-width: 575px){
                padding: 0 15px;
            }
        }
        .ninjadash-blog-content{
            .ninjadash-blog-title{
                font-size: 30px;
                font-weight: 600;
                line-height: 1.267;
                margin: 40px 0 26px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
            .ninjadash-blog-meta{
                display: flex;
                align-items: center;
                margin-bottom: 44px;
                @media only screen and (max-width: 575px){
                    flex-wrap: wrap;
                }
                li{
                    position: relative;
                    margin: 4px;
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    &:before{
                        position: absolute;
                        ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 4px;
                        height: 4px;
                        border-radius: 50%;
                        background-color: ${({ theme }) => theme['extra-light-color']};
                    }
                    &:not(:first-child){
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 10px;
                        &:before{
                            content: '';
                        }
                    }
                    a{
                        color: ${({ theme }) => theme['secondary-color']};
                    }
                }
                .ninjadash-blog-meta__author{
                    @media only screen and (max-width: 575px){
                        flex: 0 0 100%;
                    }
                    img{
                        max-width: 50px;
                    }
                    .ninjadash-blog-authorname{
                        font-size: 16px;
                        font-weight: 500;
                        display: inline-block;
                        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    }
                }
            }
            h1,
            h2,
            h3,
            h4,
            h5{
                font-weight: 600;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                margin: 40px 0 16px;
            }
            h2{
                font-size: 30px;
            }
            h3{
                font-size: 24px;
            }
            h4{
                font-size: 22px;
            }
            h5{
                font-size: 20px;
            }
            p{
                font-size: 18px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            .ninjadash-blog-list{
                li{
                    font-size: 18px;
                    position: relative;
                    ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 18px;
					color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    &:not(:last-child){
                        margin-bottom: 14px;
                    }
                    &:before{
                        position: absolute;
                        ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
                        top: 10px;
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        content: '';
                        background-color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    }
                    .ninjadash-blog-list__item--label{
                        display: inline-block;
                        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 4px;
                        font-weight: 500;
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    }
                }
            }
        }
        .ninjadash-category-list{
            display: flex;
            align-items: center;
            margin: 30px -4px -4px;
						@media only screen and (max-width: 575px){
							flex-wrap: wrap;
						}
            .ninjadash-category-list__item{
                margin: 4px;
                a{
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    padding: 0 10px;
                    border-radius: 5px;
                    min-height: 34px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                    &:hover{
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
        .ninjadash-social-links{
            display: flex;
            align-items: center;
            margin: 30px -5px -5px;
						@media only screen and (max-width: 575px){
							flex-wrap: wrap;
						}
            li{
                margin: 5px;
                &:first-child{
                    font-weight: 500;
                    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 18px;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                &:not(:first-child){
                    a{
                        display: inline-flex;
                        align-items: center;
                        min-height: 36px;
                        border-radius: 5px;
                        padding: 0 14px;
                        transition: .3s;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                        &:hover{
                            color: ${({ theme }) => theme['white-color']};
                            &.ninjadash-facebook{
                                border-color: #3A589B;
                                background-color: #3A589B;
                            }
                            &.ninjadash-twitter{
                                border-color: #1DA1F2;
                                background-color: #1DA1F2;
                            }
                            &.ninjadash-linkedin{
                                border-color: #0077B5;
                                background-color: #0077B5;
                            }
                            &.ninjadash-copy{
                                border-color: #000000;
                                background-color: #000000;
                            }
                            svg{
                                fill: ${({ theme }) => theme['white-color']} !important;
                            }
                        }
                        svg{
                            width: 16px;
                            height: 16px;
                            transition: .3s;
                            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 5px;
                        }
                        span{
                            line-height: 1;
                        }
                        &.ninjadash-facebook{
                            svg{
                                fill: #3A589B;
                            }
                        }
                        &.ninjadash-twitter{
                            svg{
                                fill: #1DA1F2;
                            }
                        }
                        &.ninjadash-linkedin{
                            svg{
                                fill: #0077B5;
                            }
                        }
                        &.ninjadash-copy{
                            svg{
                                fill: #000000;
                            }
                        }
                    }
                }
            }
        }
        .ninjadash-blog-author-box{
            display: flex;
            align-items: flex-start;
            padding: 35px;
            border-radius: 8px;
            margin-top: 50px;
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            box-shadow: 0 10px 40px ${({ theme }) => theme[theme.mainContent]['dark-text']}20;
            .ninjadash-blog-author-img{
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
                img{
                    max-width: 70px;
                }
            }
            .ninjadash-blog-author-info{
                span{
                    font-size: 15px;
                    font-weight: 400;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                .ninjadash-blog-author-name{
                    font-size: 18px;
                    font-weight: 600;
                    display: block;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                p{
                    font-size: 16px;
                    margin: 20px 0 0;
										color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
        .ninjadash-blog-blockquote{
            position: relative;
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 40px;
            max-width: 630px;
            &:before{
                position: absolute;
                ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 8px;
                top: 0;
                width: 2px;
                height: 100%;
                content: '';
                background-color: ${({ theme }) => theme['primary-color']}50;
            }
            p{
                font-size: 20px;
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                position: relative;
                img{
                    max-width: 15px;
                    &.ninjadash-blog-blockquote-icon-left{
                        position: absolute;
                        ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
                        top: 4px;
                    }
                    &.ninjadash-blog-blockquote-icon-right{
                        margin: 0 0 -4px 5px;
                    }
                }
            }
            .ninjadash-blog-quote-author{
                font-size: 18px;
                position: relative;
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 32px;
                display: inline-block;
                &:before{
                    position: absolute;
                    ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
                    top: 50%;
                    width: 20px;
                    height: 2px;
                    content: '';
                    background-color: #C6D0DC;
                }
                strong{
                    display: inline-block;
                    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 4px;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
            }
        }
        .ninjadash-share-links{
            position: fixed;
            top: 0;
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 820px;
            text-align: center;
            transform: translateY(160px);
            opacity: 0;
            visibility: hidden;
            &.show{
                transform: translateY(140px);
                opacity: 1;
                visibility: visible;
            }
            span{
                font-size: 16px;
                font-weight: 500;
            }
            ul{
                li{
                    margin: 10px 0;
                    a{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        box-shadow: 0 2px 15px rgba( 173, 181, 217, .20);
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                        svg{
                            width: 18px;
                            height: 18px;
                        }
                        &.ninjadash-facebook{
                            svg{
                                fill: #3A589B;
                            }
                        }
                        &.ninjadash-twitter{
                            svg{
                                fill: #1DA1F2;
                            }
                        }
                        &.ninjadash-linkedin{
                            svg{
                                fill: #0077B5;
                            }
                        }
                        &.ninjadash-copy{
                            svg{
                                fill: #000000;
                            }
                        }
                    }
                }
            }
        }
    }
`;
export {
    BlogDetailsStyle,
};