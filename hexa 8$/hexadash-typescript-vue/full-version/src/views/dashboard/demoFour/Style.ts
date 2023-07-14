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

const MarketingCampaignStyle = Styled.div`
  .ninjadash-info-element {
    img {
      max-width: 25px !important;
    }
  }
  .ant-table-content {
    tr {
      &:first-child {
        td {
          padding-top: 0 !important;
        }
      }
      .ant-table-cell {
        padding: 7px 15px 9px;
      }
      td.ant-table-cell {
        &:last-child {
          padding-right: 0 !important;
        }
      }
    }
    .ant-progress-inner:not(.ant-progress-circle-gradient) {
      .ant-progress-circle-path{
        stroke: ${({ theme }) => theme['primary-color']};
      }
    }
    .ant-progress-circle-trail{
      stroke: ${({ theme }) => theme['primary-color']}15;
    }
  }
`;

const TeamListStyle = Styled.div`
  min-height: 300px;
  .ant-list-split {
    .ant-list-item,
    .ant-list-item-meta {
      border-bottom: 0 none;
      padding: 0;
    }
    .ant-list-item-meta {
      .ant-list-item-meta-title {
        font-size: 15px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        line-height: 1.25;
      }
      .ant-list-item-meta-description {
        font-size: 12px;
        line-height: 1;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 12px;
				color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        position: relative;
        &:before {
          position: absolute;
          ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transform: translateY(-50%);
          content: '';
          background-color: ${({ theme }) => theme['success-color']};
        }
      }
    }
    .ant-list-items{
      padding-top: 0;
    }
    .ant-list-item-meta-avatar {
      ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 16px;
      img {
        border-radius: 5px;
      }
    }
  }
  .ant-list-item {
    &:not(:last-child) {
      margin-bottom: 14px !important;
    }
    .ant-btn {
      font-size: 13px;
      font-weight: 600;
      border-radius: 3px;
      padding: 0 12px;
      color: ${({ theme }) => theme['primary-color']};
      background-color: #8231D310;
      height: 32px;
      &:hover {
        color: #fff;
        background-color: ${({ theme }) => theme['primary-color']};
      }
    }
  }
  .teamlist-two{
    .ant-avatar-image{
      img{
        border-radius: 50%;
      }
    }
    .ant-list-item-meta{
      align-items: center;
      h4{
        margin-bottom: 0;
      }
    }
  }
`;

export { SocialTrafficWrapper, MarketingCampaignStyle, TeamListStyle };
