import Styled from 'styled-components';

const CreatePost = Styled.div`
    position: relative;
    z-index: 21;
    .ant-card-body{
        padding: 20px 25px 15px!important;
        .postBody{
            display: flex;
            position: relative;
            .post-author{
                max-width: 46px;
                border-radius: 50%;
                position: absolute;
                top: 5px;
                z-index: 22;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            }
            textarea{
                border: 0 none;
                padding-${({ theme }) => (theme.rtl ? 'right' : 'left')}: 70px;
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                min-height: 55px;
                resize: none;
                &:focus{
                    outline: none;
                    box-shadow: 0 0 0 0px rgba(95, 99, 242, 0.2);
                }
            }
        }
        .postFooter{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
            border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            padding-top: 15px;
            .ant-upload{
                margin-${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 8px;
                .ant-btn{
                    height: 30px;
                    font-size: 12px;
                    font-weight: 500;
                    border-radius: 16px;
                    padding: 0 14.5px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            .btn-more{
                padding: 0 16px;
            }
            .postFooter_left{
                display: flex;
                .ant-btn-light{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    background-color: ${({ theme }) => theme['bg-color-normal']};
                }
            }
            .btn-post{
                height: 35px;
            }
        }
    }    
`;

const BackShadow = Styled.div`
    width: 100%;
    height: 100%;
    background: #11121760;
    position: fixed;
    top: 0;
    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
    z-index: -0;
`;
const BackShadowEmoji = Styled.div`
    width: 100%;
    height: 100%;
    background: #11121760;
    position: fixed;
    top: 0;
    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
    z-index: 998;
`;

const AllPosts = Styled.div`
    
`;

const Title = Styled.div`
    
`;

export { CreatePost, BackShadow, AllPosts, Title, BackShadowEmoji };
