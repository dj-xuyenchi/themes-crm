import Styled from 'vue3-styled-components';

const SocialTrafficWrapper = Styled.div`
  min-height: 230px;
  .ant-table-content{
    .ant-table-tbody {
      >tr:first-child {
        >td.ant-table-cell{
          padding-top: 8px !important;
        }
      }
    }
  }
  .ant-table-tbody{
    tr{
      &:first-child{
        .social-media-img{
          margin-top: 12px;
        }
      }
      td{
        text-align: right;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        &:first-child,
        &:last-child{
          text-align: left;
        }
      }
    }
  }
  .social-media-img{
    .social-media-icon{
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      margin-right: 14px;
      background-color: ${({ theme }) => theme['dark-text']}2d;
      padding: 0 !important;
      &.bg-primary-10{
        background-color: ${({ theme }) => theme['primary-color']}1d;
        svg{
          fill: ${({ theme }) => theme['primary-color']};
        }
      }
      &.bg-secondary-10{
        background-color: ${({ theme }) => theme['secondary-color']}1d;
        svg{
          fill: ${({ theme }) => theme['secondary-color']};
        }
      }
      &.bg-info-10{
        background-color: ${({ theme }) => theme['info-color']}1d;
        svg{
          fill: ${({ theme }) => theme['info-color']};
        }
      }
      &.bg-warning-10{
        background-color: ${({ theme }) => theme['warning-color']}1d;
        svg{
          fill: ${({ theme }) => theme['warning-color']};
        }
      }
      &.bg-danger-10{
        background-color: ${({ theme }) => theme['danger-color']}1d;
        svg{
          fill: ${({ theme }) => theme['danger-color']};
        }
      }
      svg{
        width: 16px;
      }
    }
    .social-media-title{
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      font-weight: 500;
      font-size: 15px;
    }
  }
`;

export { SocialTrafficWrapper };
