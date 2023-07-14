import Styled from 'vue3-styled-components';

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
const Span = Styled.span``;

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

const TrafficTableWrapper = Styled.div`
    ${({ theme }) => (theme.topMenu ? 'min-height: 515px' : 'min-height: 270px')};
    @media only screen and (max-width: 1599px){
        min-height: 260px;
    }
    @media only screen and (max-width: 1199px){
        min-height: 100%;
    }
    .ant-table {
      background-color: unset;
    }
    .ant-table-content{
        .ant-table-cell{
            white-space: normal !important;
            @media only screen and (max-width: 991px){
                white-space: nowrap !important;
            }
        }
        .ninjadash-social-channel{
          font-size: 15px;
          font-weight: 500;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .ninjadash-traffic{
          font-size: 14px;
          font-weight: 500;
          min-width: 120px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    .table-bordered {
      table{
        thead{
            tr{
                th{
                    background: #fff;
                    color: ${({ theme }) => theme['dark-color']}
                    padding: 16px 25px;
                    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                    &:first-child, &:nth-child(5){
                        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
                    }
                }
            }
        }
        tbody{
            tr{
              &.ant-table-row{
                &:hover{
                  td{
                      background-color: transparent !important;
                  }
                }
              }
              &:first-child{
                td{
                  padding-top: 0;
                }
              }
              td{
                  padding: 10px 15px;
                  border: 0 none;
                  color: ${({ theme }) => theme['gray-color']};
                  text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                  &:first-child,
                  &:nth-child(5){
                      text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
                  }
              }
            }
        }
        tr{
          th,
          td{
            &:first-child{
              padding-left: 0;
            }
            &:last-child{
              padding-right: 0;
            }
          }
        }
      }
    }
`;

const RecentSellerStyle = Styled.div`
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
`;

export { MarketingCampaignStyle, Span, TeamListStyle, TrafficTableWrapper, RecentSellerStyle };
