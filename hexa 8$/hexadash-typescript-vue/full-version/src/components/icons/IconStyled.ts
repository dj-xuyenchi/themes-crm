import Styled from 'vue3-styled-components';

const Icon = Styled.div`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    word-break: break-all;
    span {
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
				color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
		svg{
			fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
		}
`;

const AnIcon = Styled.div`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    span {
      ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
			color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
		svg{
			fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
		}
`;

const IconWrapper = Styled.div`
    .ant-card{
        .ant-card-body{
            padding: 15px 10px 10px 10px !important;
        }
    }

    .icon-single{
        span{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
						color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        span.fa,
        svg,
        i{
            font-size: 18px;
            min-width: 20px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        }
				svg{
					fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
				}
    }
`;

export { Icon, AnIcon, IconWrapper };
