import Styled from 'vue3-styled-components';
import { Table } from 'ant-design-vue';

const Style = Styled(Table)`
  margin-bottom: 30px;
  .ant-table{
    padding-bottom: 30px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    tr{
      th,
      td{
        border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        &:first-child{
          ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 30px;
        }
        &:last-child{
          ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 30px;
        }
      }
    }
    .ant-table-selection-extra{
      right: 15px;
    }
  }
  .ant-table-thead{
    >tr{
      >th{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        &:first-child{
          ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
          border-top-left-radius: 10px !important;
        }
        &:last-child{
          border-top-right-radius: 10px !important;
        }
        &:before{
          content: none !important;
        }
        .ant-table-selection-extra{
          ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: -25px
        }
        .ant-dropdown-trigger{
          svg{
            width: 20px;
            fill: ${({ theme }) => theme['gray-solid']};
          }
					svg{
						fill: ${({ theme }) => theme['gray-solid']};
					}
        }
        .email-top-search{
          display: flex;
          justify-content: ${({ theme }) => (theme.rtl ? 'flex-start' : 'flex-end')};
          align-items: center;
          min-width: 350px;
          @media only screen and (max-width: 575px){
            display: none;
          }
          .ant-select{
            max-width: 350px;
          }
          .ant-select-selector{
            height: 46px !important;
          }
          .ant-select-selection-search{
            width: 100% !important;
            .ant-select-selection-search-input{
              text-align: right;
              border-radius: 24px;
              background:  ${({ theme }) => theme[theme.mainContent]['general-background']} !important;
              border: 0 none;
              input{
                height: 44px !important;
                border-radius: 6px !important;
                background:  ${({ theme }) => theme[theme.mainContent]['general-background']} !important;
                &::placeholder{
                  color:  ${({ theme }) => theme[theme.mainContent]['extra-light-text']} !important;
                }
              }
              .ant-input-suffix{
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0;
								svg{
									fill: ${({ theme }) => theme['gray-solid']};
									width: 15px;
									height: auto;
								}
								.anticon-search{
                  svg{
                    fill: ${({ theme }) => theme['gray-solid']};
                  }
                }
              }
            }
          }
        }
        .email-top-right{
          justify-content: flex-end;
          .email-extra{
            line-height: 1;
            a{
              color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
              &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 25px;
              }
              svg{
                fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
              }
            }
          }
          .page-number{
            display: inline-block;
            font-size: 14px;
            font-weight: 400;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            @media only screen and (max-width: 575px){
              display: none;
            }
          }
          .pagination-slider{
            margin: ${({ theme }) => (theme.rtl ? '0 15px 0 20px' : '0 20px 0 15px')};
            .btn-paging{
              display: inline-flex;
              height: 30px;
              width: 30px;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
              &:hover{
                background: ${({ theme }) => theme['primary-color']}10;
              }
              svg{
                fill: ${({ theme }) => theme[theme.mainContent]['light-text']};
              }
            }
          }
        }
      }
    }
  }


  .ant-table-tbody{
    .ant-table-cell{
      white-space: normal !important;
      text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
    }
    >tr{
      &:hover{
        box-shadow: 0 15px 40px ${({ theme }) => theme['gray-solid']}20;
        h1{
          font-weight: 600;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
          a{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
          }
        }
        .email-time{
          font-weight: 500;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        >td{
          background: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
          border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
      }
      p{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      h1 a{
        font-weight: 500;
        transition: 0s;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      &.ant-table-row-selected{
        &:hover{
            >td{
              background: ${({ theme }) => theme[theme.mainContent]['white-background']};
            }
        }
        >td{
          background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
      }
      >td{
        padding: 15px 16px;
        &:last-child{
          text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
        }
        .ant-checkbox-wrapper{
          margin-top: 5px;
        }
        .email-time{
          font-size: 13px;
          font-weight: 400;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
    }
  }
  .ant-table-thead > tr > th .ant-table-header-column {
    width: 100%;
  }
  .ant-table-thead > tr:first-child > th:last-child {
    border-top-right-radius: 4px;
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
  }
  .ant-pagination-item {
    display: none;
  }
  .ant-table-pagination.ant-pagination {
    position: absolute;
    z-index: 1;
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 0;
  }

`;

const small = ({ rtl }: any) => {
  return `
    max-width: 600px;
    width: 100%;
    position: fixed;
    height: calc(100vh - 40%);
    bottom: 140px;
    ${!rtl ? 'right' : 'left'}: 15px;
    @media only screen and (max-width: 1450px){
      height: calc(100vh - 50%);
      bottom: 35%;
    }
    @media only screen and (max-width: 575px){
      min-height: 450px;
      bottom: 80px;
    }
`;
};

const big = ({ rtl }: any) => {
  return `
  max-width: 1200px;
  width: 100%;
  position: fixed;
  min-height: 600px;
  bottom: 100px;
  ${!rtl ? 'right' : 'left'}: 100px;
  z-index: 9999;
  `;
};

const MailBox = Styled.div`
  ${({ size, theme }: any) => size === 'small' && small(theme)}
  ${({ size, theme }: any) => size === 'big' && big(theme)}

  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  z-index: 999;
  border-radius: 10px;
  box-shadow: 0 10px 50px #9299B830;
  @media only screen and (max-width: 575px){
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 0;
  }
  .reply-inner{
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
  }
  input{
    border: 0 none;
    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  }
  .tags-input{
    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
    border: 0 none;
    input{
      border: 0 none;
    }
    input::placeholder{
      color: ${({ theme }) => theme[theme.mainContent]['light-text']};
    }
    .tagsinput-tag{
      padding: 5px 16px;
      border: 0 none;
      border-radius: 16px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      background: ${({ theme }) => theme[theme.mainContent]['general-background']};
      display: inline-flex;
      .tags-input-remove {
        display: flex;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 8px;
        svg {
          fill: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
      }
    }
  }
  .ant-upload-list{
    position: absolute;
    bottom: 15%;
    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 25px;
    width: 95%;
  }
  input{
    padding: 15px 0;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    &:focus{
      box-shadow: 0 0;
    }
  }
  input::placeholder{
    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
  }

  .header {
    padding: 20px;
    color: #fff;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme[theme.mainContent]['dark-background2']};
    p {
      margin: 0;
      padding: 0;
    }
    .icon-right {
      svg {
        cursor: pointer;
        opacity: .70;
        fill: #fff;
      }
      svg:first-child {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
      }
    }
  }
  .body {

    .ck-editor__editable {
      background-color: transparent !important;
      border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']} !important;
    }
    @media only screen and (max-width: 1599px){
      height: 450px;
      overflow-y: scroll;
    }
    @media only screen and (max-width: 1450px){
      height: 400px;
    }
    .group {
      padding: 0px 30px;
      position: relative;
      @media only screen and (max-width: 575px){
        padding: 0px 15px;
      }
      > div{
        box-shadow: 0 0;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border: none;
      }
			.ck-editor__top{
				background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
			}
      .mail-cc{
        position: absolute;
        ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 30px;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      }
      .DraftEditor-root{
        font-size: 14px;
        font-family: 'Jost', sans-serif;
      }
      .EditorToolbar__root___3_Aqz{
        font-family: 'Jost', sans-serif;
        border-bottom-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        .public-DraftStyleDefault-block{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          span{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          }
        }
      }
    }
    .public-DraftEditorPlaceholder-root{
      padding-top: 20px;
    }
    .public-DraftEditor-content {
      height: 275px;
      padding-top: 20px;
      @media only screen and (max-width: 1599px){
        height: 220px
      }
      @media only screen and (max-width: 1450px){
        height: 170px
      }
      @media only screen and (max-width: 575px){
        height: 160px
      }
    }
  }
  .footer {
    border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    padding: 20px 0 30px;
    margin: 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      button,
      a{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
        line-height: 1;
        svg{
          fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
      }
      .ant-upload {
        margin-top: 4px;
      }
      .ant-upload-list{
        overflow: hidden;
        .ant-upload-list-item{
          border-radius: 4px;
          height: 25px;
          line-height: 2.5;
          z-index: 10;
          background: ${({ theme }) => theme[theme.mainContent]['general-background']};
          .ant-upload-list-item-name{
            font-size: 13px;
          }
          .ant-upload-list-item-card-actions{
            top: -4px;
          }
        }
      }
    }
    .right{
      line-height: 1;
      a{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
    }
  }
`;

const EmailNav = Styled.nav`
  ul{
    list-style: none;
    margin: 20px 0;
    padding: 0;
    li{
      position: relative;
      &.add-label-btn{
        &:hover{
          background: transparent;
          a{
            background: transparent;
            color: ${({ theme }) => theme['primary-color']} !important;
            svg{
              fill: ${({ theme }) => theme['primary-color']} !important;
            }
          }
        }
        a{
          color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']} !important;
          transition: .3s;
          svg{
            fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']} !important;
          }
          span{
            line-height: 1.5;
          }
          &:hover{
            background: transparent;
            svg,
            i,
            span{
              color: ${({ theme }) => theme['primary-color']};
              fill: ${({ theme }) => theme['primary-color']};
            }
          }
        }
      }
      a{
        padding: 8px 15px;
        display: flex;
        align-items: center;
        transition: 0.3s ease;
        border-radius: 6px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        svg{
          min-width: 18px;
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
          fill: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
        &.active{
          background: ${({ theme }) => theme['primary-color']}10;
          color: ${({ theme }) => theme['primary-color']};
          svg,
          i{
            color: ${({ theme }) => theme['primary-color']};
            fill: ${({ theme }) => theme['primary-color']};
          }
        }
      }

      &:hover{
        a{
          background: ${({ theme }) => theme['primary-color']}10;
          color: ${({ theme }) => theme['primary-color']};
          svg,
          i{
            color: ${({ theme }) => theme['primary-color']};
            fill: ${({ theme }) => theme['primary-color']};
          }
        }
      }
      .nav-text{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .add-label{
        box-shadow: 0 10px 40px rgba(146,153,184,0.2);
        padding: 25px 30px;
        position: absolute;
        width: calc(100% + 60px);
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -30px;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 8px;
        @media only screen and (max-width: 1199px){
          width: calc(100% + 40px);
          padding: 15px;
          ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -20px;
        }
        h1{
          text-align: left;
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 16px;
          font-weight: 500;
          transition: .3s;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        input{
          height: 44px;
          border-radius: 2px;
          background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
          border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        .btn-group{
          margin-top: 15px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px -5px -5px;
          button{
            margin: 5px;
            height: 38px;
          }
          .ant-btn-default{
            padding: 0 12px;
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
          }
          .ant-btn-primary{
            color: #fff;
          }
        }
      }
    }
  }
  .nav-labels{
    margin-top: 35px;
    p{
      font-size: 12px;
      text-align: left;
      margin: 0;
      padding: 0 15px;
      color: #9299b8;
      text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
    }
    ul{
      margin-top: 6px;
      margin-bottom: 0;
    }
  }
`;

const MailDetailsWrapper = Styled.div`
  .ant-card-body{
    padding: 30px 0 !important;
  }
  .ant-card-head-wrapper{
    @media only screen and (max-width: 767px){
      flex-flow: column;
      align-items: center;
    }
  }

  .ant-card-head {
    .ant-card-extra{
      @media only screen and (max-width: 767px){
        width: 100%;
        justify-content: center;
      }
    }
    .ant-card-head-title{
      @media only screen and (max-width: 767px){
        padding: 18px 0 0;
      }
    }
    .ant-card-extra{
      @media only screen and (max-width: 767px){
        padding-bottom: 18px;
      }
    }
  }
`;

const MessageAction = Styled.div`
  display: flex;
  align-items: center;
  margin: 0 -5px;
  @media only screen and (max-width: 575px){
    flex-flow: row !important;
    margin-bottom: 5px;
  }
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin: 0 4px;
    transition: 0.3s ease;
    @media only screen and (max-width: 575px){
      width: 25px;
      height: 25px;
    }
    svg{
      width: 16px;
      fill: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
    }
    &:hover{
      background: rgba(95,99,242,0.05);
      svg{
        fill: ${({ theme }) => theme['primary-color']};
      }
    }
  }
`;

const EmailAuthor = Styled.div`
  display: flex;
  align-items: center;
  svg{
    fill: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
  }
  img{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: inline-block;
    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 16px;
  }
  h1{
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    a{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      transition: .3s;
    }
  }
  i,
  span.fa{
    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
  }
`;

const EmailHeader = Styled.div`
  min-width: 540px;
  @media only screen and (max-width: 575px){
    min-width: 180px;
  }
  h1{
    font-size: 15px;
    font-weight: 500;
    transition: .3s;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    a{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      transition: .3s;
      &:hover{
        color: ${({ theme }) => theme['primary-color']};
      }
    }
  }
  .mail-badge{
    display: inline-block;
    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
    font-size: 12px;
    font-weight: 400;
    height: 22px;
    padding: 0 6.4px;
    border-radius: 3px;
    text-transform: capitalize;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    background: ${({ theme }) => theme[theme.mainContent]['dark-background']};
    @media only screen and (max-width: 575px){
      ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 0px;
    }
    &.primary{
      background: ${({ theme }) => theme[theme.mainContent]['primary-transparent']};
      color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
  }
  p{
    margin: 0;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
  .btn-attachment{
    font-size: 13px;
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    padding: 0 22px;
    border-radius: 15px;
    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    background: ${({ theme }) => theme[theme.mainContent]['general-background']};
    @media only screen and (max-width: 575px){
      display: none;
    }
    i,
    svg{
      ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
    }
  }
  a + a{
    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
  }
`;

const MessageDetails = Styled.div`
  padding: 0 30px;
  .message-box {
    @media only screen and (max-width: 767px){
      flex-flow: column;
      align-items: flex-start;
    }
    @media only screen and (max-width: 575px){
      padding: 0;
    }
  }
  >div{
    &.align-items-center{
      @media only screen and (max-width: 375px){
        align-items: flex-start;
      }
    }
  }
  .message-subject{
    h1{
      display: flex;
      align-items: center;
      font-weight: 500;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 767){
        font-size: 20px;
      }
      @media only screen and (max-width: 375px){
        flex-flow: column;
        align-items: flex-start;
      }
      .mail-badge{
        display: inline-block;
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
        font-size: 12px;
        font-weight: 400;
        height: 20px;
        line-height: 1.6;
        padding: 0 6.4px;
        border-radius: 3px;
        text-transform: capitalize;
        @media only screen and (max-width: 375px){
          margin: 15px 0 0 0;
        }
        background: ${({ theme }) => theme['bg-color-deep']};
        &.primary{
          background: ${({ theme }) => theme[theme.mainContent]['primary-transparent']};
          color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
        }
      }
    }
  }
  .message-action{
    display: flex;
    align-items: center;
    a{
      display: flex;
      align-items:center;
      justify-content: center;
      flex-direction: column;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      transition: 0.3s ease;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      svg{
        margin: -3px 0;
        fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
      &:hover{
        background: rgba(95,99,242,0.05);
      }
    }
  }
  .message-author{
    display: flex;
    align-items: center;
    margin-top: 20px;
    @media only screen and (max-width: 767px){
      margin-top: 14px;
    }
    div{
      ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
      h1{
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 4px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      a{
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        svg {
          fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        svg,
        i{
          ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 5px;
        }
      }
    }

  }
  .message-excerpt{
    display: flex;
    align-items: center;
    margin: 0 -15px;
    @media only screen and (max-width: 767px){
      margin: 18px 0 0;
    }
    span + span{
      font-size: 13px;
      line-height: 1.5;
    }
    span, a{
      display: block;
      padding: 0 15px;
      line-height: 0;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      @media only screen and (max-width: 1199px){
        padding: 0 6px;
      }
    }
    & > span{
      ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
      svg{
        margin-top: 6px;
        fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
    }
    svg{
      width: 16px;
      height: 16px;
      fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
    a{
      i,
      span.fa{
        font-size: 16px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
      &.starDeactivate{
        i:before{
          content: "\f31b";
        }
      }
      &.starActive{
        color: ${({ theme }) => theme['warning-color']};
        i:before,
        span.fa:before{
          content: "\f005";
        }
      }
    }
  }

  .message-body{
    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 82px;
    margin-top: 22px;
    @media only screen and (max-width: 767px){
      ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0px;
      margin-top: 18px;
    }
    .welcome-text{
      font-size: 15px;
      margin-bottom: 40px;
      display: inline-block;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    p{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      font-size: 15px;
      line-height: 1.667;
      margin-bottom: 55px;
    }
    h1{
      font-size: 15px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      font-weight: normal;
      line-height: 30px;
    }
  }
  .message-attachments{
    margin: 44px -5px 0 -5px;
    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 82px;
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 767px){
      margin: 30px 0 0;
      ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0px;
      justify-content: center;
    }
    figure{
      position: relative;
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      border-radius: 10px;
      padding: 10px;
      margin: 0 5px 30px;
      &:hover{
        box-shadow: 0 10px 20px ${({ theme }) => theme['gray-solid']}10;
        .attachment-image{
          &:after{
            height: 100%;
            opacity: 1;
            visibility: visible;
          }
        }
        .attachment-hover{
          opacity: 1;
          visibility: visible
        }
      }
      .attachment-image{
        position: relative;
        &:after{
          position: absolute;
          ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
          top: 0;
          width: 100%;
          height: 0%;
          border-radius: 10px;
          content: '';
          opacity: 0;
          visibility: hidden;
          transition: .3s ease-in;
          background: ${({ theme }) => theme['dark-color']}50;
        }
      }
      .attachment-hover{
        position: absolute;
        top: 80px;
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 50%;
        transform: translateX(-50%);
        opacity: 0;
        visibility: hidden;
        transition: .35s;
        .btn-link{
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          &:after{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #fff;
            opacity: .20;
            content: '';
          }
          svg,
          img{
            width: 14.5px;
            fill: #fff;
          }

        }
        .btn-link + .btn-link{
          ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        }
      }
      figcaption{
        margin-top: 10px;
        h1{
          font-size: 13px;
          margin: 0;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
          font-size: 12px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          margin:0;
        }
      }
    }
  }
  hr{
    margin-bottom: 30px;
    border: 0 none;
    height: 1px;
    background: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  }
`;

const MessageReply = Styled.div`
  padding: 0 30px;
  @media only screen and (max-width: 575px){
    padding: 0 15px;
  }
  nav{
    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 70px;
    margin-bottom: 30px;
    @media only screen and (max-width: 575px){
      ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
    }
    ul{
      display: flex;
      align-items: center;
      list-style:none;
      margin: 0 -5px;
      padding: 0;
      li{
        padding: 0 5px;
        a{
          border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
          line-height: 44px;
          display: inline-block;
          padding: 0 20px;
          font-size: 14px;
          font-weight: 600;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          border-radius: 4px;
          display: flex;
          align-items: center;
          &:hover{
            color: ${({ theme }) => theme['primary-color']};
            svg{
              fill: ${({ theme }) => theme['primary-color']};
            }
          }

          svg{
            margin-right: 5px;
            fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            transition: 0.3s ease;
            &:hover{
              fill: ${({ theme }) => theme['primary-color']};
            }
          }
        }
      }
    }
  }
  .reply-form{
    @media only screen and (max-width: 575px){
      flex-flow: column;
      align-items: center;
    }
    img{
      margin: ${({ theme }) => (theme.rtl ? '10px 0 0 20px' : '10px 20px 0 0')};
      border-radius: 50%;
      @media only screen and (max-width: 575px){
        margin: 0 0 20px;
      }
    }
  }
  .RichTextEditor__root___2QXK-{
    border: 0 none;
    padding: 15px 0px;
    @media only screen and (max-width: 575px){
      padding: 15px 0;
    }
    .public-DraftEditor-content{
      min-height: 120px;
    }
  }
  .reply-box{
    display: flex;
    > div{
      width: 100%;
      z-index: 10;
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    .reply-inner{
      width: 100%
      border-bottom: 1px solid #F1F2F6 !important;
      @media only screen and (max-width: 575px){
        flex-flow: column;
        align-items: flex-start !important;
        padding-top: 15px;
      }
      .react-tagsinput{
        border-bottom: 0 none !important;
      }
    }
    .reply-title{
      ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
      color: ${({ theme }) => theme['light-color']};
    }
    .mail-cc{
      color: ${({ theme }) => theme['light-color']};
    }
    .body{
      .DraftEditor-root{
        >div{
          font-size: 14px;
          font-family: 'Jost', sans-serif;
        }
      }
      .public-DraftEditorPlaceholder-root{
        padding-top: 20px;
      }
      .public-DraftEditor-content {
        height: 155px;
        padding-top: 20px;
        @media only screen and (max-width: 575px){
          height: 140px
        }
      }
    }
    .footer{
      margin: 0 30px 0;
      @media only screen and (max-width: 575px){
        margin: 0 15px 0
      }
    }
  }
`;

const ReplyList = Styled.div`
  box-shadow: 0 15px 40px ${({ theme }) => theme['light-color']}10;
  margin: 0px 0 50px;
  padding-top: 30px;
  .reply-view__single{
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    @media only screen and (max-width: 375px){
      flex-flow: column;
    }
    &:not(:last-child){
      margin-bottom: 30px;
    }
    .reply-view__content{
      @media only screen and (max-width: 575px){
          flex-flow: column;
      }
      img{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
        border-radius: 50%;
        @media only screen and (max-width: 575px){
          margin: 0 0 15px 0;
        }
      }
      figcaption{
        h1{
          font-weight: 500;
          margin-bottom: 12px;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
          font-size: 15px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
    }
    .reply-view__meta{
      @media only screen and (max-width: 375px){
        order: -1;
      }
      span{
        font-size: 13px;
      }
      svg,
      i,
      span{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
      i,
      span.fa{
        font-size: 16px;
      }
      svg,
      img{
        width: 16px;
      }
      .meta-list{
        display: flex;
        align-items: center;
        @media only screen and (max-width: 575px){
            flex-flow: column;
        }
        @media only screen and (max-width: 375px){
            flex-flow: row;
            justify-content: flex-start;
            margin-bottom: 20px;
        }
        a{
          line-height: 1;
        }
        .date-meta{
          min-width: 135px;
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 30px;
          @media only screen and (max-width: 767px){
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
          }
          @media only screen and (max-width: 575px){
            margin: 0 0 15px 0;
          }
          @media only screen and (max-width: 375px){
            margin: ${({ theme }) => (theme.rtl ? '0 0 0 15px' : '0 15px 0 0')};
          }
        }
        a{
          &:not(:last-child){
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 30px;
            @media only screen and (max-width: 767px){
              ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
            }
            @media only screen and (max-width: 575px){
                margin: 0 0 15px 0;
            }
            @media only screen and (max-width: 375px){
              margin: 0 15px 0 0;
            }
          }
        }
      }
    }
  }
`;

const MailRightAction = Styled.div`
  span{
    color: ${({ theme }) => theme['light-color']};
  }
`;

const EmailWrapper = Styled.div`
  position: relative;
  .trigger-close.ant-btn-link{
    margin: 0 !important;
    position: absolute;
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 20px;
    top: 20px;
    z-index: 99;
    padding: 0;
    background: transparent !important;
    svg{
      fill: ${({ theme }) => theme[theme.mainContent]['gray-lighter-text']} !important;
    }
  }
  .trigger-col {
    button{
      svg{
        width: 18px;
        height: 18px;
      }
    }
  }
  .ant-btn-link{
    background: #fff !important;
    margin-bottom: 25px;
    border-radius: 6px;
    color: ${({ theme }) => theme['primary-color']} !important;
    &:focus{
      color: ${({ theme }) => theme['primary-color']} !important;
    }
  }
  .mail-sideabr{
    &.hide{
      transform: translateX(${({ theme }) => (theme.rtl ? '100%' : '-100%')});
      transition: .35s ease-in;
    }
    &.show{
      transform: translateX(0%);
      transition: .35s ease-in;
    }
    @media only screen and (max-width: 991px){
      display: block;
      background: #fff;
      position: fixed;
      ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
      top: 60px;
      width: 280px;
      height: 100%;
      z-index: 99;
    }
    .ant-card{
      min-height: 900px;
      .ant-card-body{
        padding: 0px !important;
      }
    }
  }

  .mail-sidebar-top{
    padding: 30px 30px 0;
    button {
      svg {
        fill: #ffffff;
      }
    }
    @media only screen and (max-width: 991px){
      padding: 60px 30px 0;
    }
  }

  .mail-sidebar-bottom{
    padding: 0 15px 25px 15px;
  }

  table{
    .ant-table-tbody{
      .ant-table-cell{
        vertical-align: top;
      }
    }
  }
`;

const MailSideBar = Styled.div`
  display: ${({ collapsed }: any) => (!collapsed ? 'none' : 'block')}
`;

export {
  Style,
  MailBox,
  EmailNav,
  MessageAction,
  MailSideBar,
  EmailAuthor,
  EmailHeader,
  MailDetailsWrapper,
  MessageDetails,
  MessageReply,
  ReplyList,
  MailRightAction,
  EmailWrapper,
};
