import Styled from 'vue3-styled-components';

const Action = Styled.div`
  .active{
    color: #FA8B0C;
  }
`;
const ContactPageheaderStyle = Styled.div`
  .ant-page-header-heading-sub-title .ant-input-affix-wrapper{
    border: 0 none;
  }
	.ant-page-header-heading{
		flex: 1;
	}
  .ant-page-header-heading-title{
    margin-right: 0;
    padding-right: 0;
    padding-left: 0 !important;
    margin-left: 0 !important;
    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
    &:after{
      display: none;
    }
  }

  .ant-page-header-heading-sub-title{
    .ant-input-affix-wrapper{
      display: inline-flex;
      width: 250px;
      padding: 10px 14px;
      border-radius: 30px;

      .ant-input-suffix {
        svg {
          fill: ${({ theme }) => theme[theme.mainContent]['light-text']} !important;
        }
      }

      &:focus {
        outline: 0;
        box-shadow: none;
      }
    }
  }
  .ant-select .ant-select-selection-search-input{
    border-radius: 6px;
  }

  .ant-page-header-heading-extra{
    // margin: ${({ theme }) => (theme.rtl ? '4px auto 4px 0 !important' : '4px 0 4px auto !important')};
    @media only screen and (max-width: 991px){
      margin: 15px 0 0 0 !important;
    }
  }
`;

const ContactCardWrapper = Styled.div`
  position: relative;
  button{
    position: absolute;
    background: transparent !important;
    top: -10px;
    right: 0;
    padding: 0;
    svg {
      fill: ${({ theme }) => theme[theme.mainContent]['light-text']} !important;
      width: 18px;
      height: 18px;
    }
  }
  .contact-card{
    figure{
      text-align: center;
      margin: 0;
      img{
        border-radius: 50%;
      }
      figcaption{
        margin-top: 20px;
        h3{
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 0;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        span{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
    }
    .user-info{
      margin-top: 20px;
      border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      padding-top: 25px;
      ul{
        li{
          display: flex;
          align-items: center;
          color: #8288A4;
          &:not(:last-child){
            margin-bottom: 14px;
          }
          svg{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            fill: #8288A4;
          }
        }
      }
    }
  }
`;

const UserTableStyleWrapper = Styled.nav`
  table{
    tbody{
      td{
        .user-info{
          .user-name{
            font-size: 14px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
          }
        }
        span.status-text{
          font-size: 12px;
          padding: 0 12.41px;
          line-height: 1.9;
          font-weight: 500;
          border-radius: 12px;
          text-transform: capitalize;
          display: inline-block !important;
          background: #ddd;
          &.active{
            background-color: ${({ theme }) => theme['success-color']}15;
            color: ${({ theme }) => theme['success-color']};
          }
          &.deactivate{
            background-color: ${({ theme }) => theme['warning-color']}15;
            color: ${({ theme }) => theme['warning-color']};
          }
          &.blocked{
            background-color: ${({ theme }) => theme['danger-color']}15;
            color: ${({ theme }) => theme['danger-color']};
          }
        }
      }
    }
  }
  .ant-table-pagination.ant-pagination{
    width: 100%;
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
    border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};;
    margin-top: 0 !important;
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      text-align: center;
    }
  }
  .contact-table{
    table{
      tr{
        th{
          &:first-child{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
          }
          &:last-child{
            ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
          }
        }
      }
      .table-actions{
        button{
          width: auto;
          height: auto;
          padding: 0;
          background-color: transparent;
          &:hover{
            background-color: transparent;
          }
          &.ant-btn-primary{
            &:hover{
              color: #ADB4D2;
            }
          }
        }
      }
      tbody >tr.ant-table-row-selected >td{
        background-color: ${({ theme }) => theme['primary-color']}10;
      }
    }
  }
`;
export { Action, ContactPageheaderStyle, ContactCardWrapper, UserTableStyleWrapper };
