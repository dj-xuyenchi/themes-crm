import styled from 'vue3-styled-components';

export const TicketBox = styled.div`
  .header,
  .filter-zone {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 575px){
      flex-wrap: wrap;
    }
    h1 {
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
		button{
			svg{
				fill: #fff;
				margin-right: 5px;
			}
		}
  }

  .filter-zone {
    padding: 20px 0 25px;
    .left {
      display: inline-flex;
      width: 100%;
      align-items: center;

      div.filterInput {
        padding-right: 20px;
        span.label {
          padding: 0 8px;
        }
				.ant-input{
					height: 38px;
          background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
          border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
          border-radius: 6px;
				}
        .ant-select-selector {
          background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
          border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']} !important;
          border-radius: 6px;
          display: flex;
          justify-content: center;
        }
      }
    }
		.right{
			min-width: 280px;
      @media only screen and (max-width: 575px){
        margin-top: 15px;
      }
			span.ant-input-affix-wrapper{
				padding-top: 0;
				padding-bottom: 0;
			}
			.ant-input{
				height: 38px;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
			}
      .ant-input-affix-wrapper {
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        border-radius: 6px;
      }
		}
  }
	.ant-table-container{
		table > thead th:before{
			content: none !important;
		}
		.table-actions{
			a{
					svg{
							width: 16px;
							fill: ${({ theme }) => theme['extra-light-color']};
					}
					&.edit{
						&:hover{
							svg{
									fill: ${({ theme }) => theme['info-color']};
							}
						}
					}
					&.delete{
						&:hover{
							svg{
									fill: ${({ theme }) => theme['danger-color']};
							}
						}
					}
			}
		}
		.ninjadash-support-status {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      padding: 0 8px;
      min-height: 24px;
      border-radius: 4px;
      text-transform: capitalize;
      &.ninjadash-support-status-open{
      color: ${({ theme }) => theme['success-color']};
        background-color: ${({ theme }) => theme['success-color']}15;
      }
      &.ninjadash-support-status-closed{
      color: ${({ theme }) => theme['primary-color']};
        background-color: ${({ theme }) => theme['primary-color']}15;
      }
      &.ninjadash-support-status-pending{
      color: ${({ theme }) => theme['warning-color']};
        background-color: ${({ theme }) => theme['warning-color']}15;
      }
    }
	}
  .requestedBy {
    display: flex;
    width: 100%;
    align-items: center;

    img {
      width: 30px;
      ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
    }
    p {
      margin: 0;
    }
  }
`;

export const Footer = styled.div`
  padding: 0 25px;
  .chatbox-reply-form {
    position: relative;
    margin-top: 20px;
    align-items: center;
    @media only screen and (max-width: 575px) {
      flex-flow: column;
    }
    .smile-icon {
      position: relative;
      position: absolute;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 25px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      z-index: 997;
      @media only screen and (max-width: 575px) {
        top: 26px;
      }
      aside {
        position: absolute;
        z-index: 999999999;
        bottom: 0;
        .emoji-search {
          padding: 8px;
          height: auto;
          border-radius: 5px;
        }
      }
      .ant-dropdown-trigger {
        display: flex;
        align-items: center;
      }
      a {
        display: flex;
      }
      svg{
        fill: ${({ theme }) => theme['extra-light-color']};
      }
    }
    &.hasFile {
      .ant-upload-list {
        &.ant-upload-list-text {
          padding: 15px;
        }
      }
    }
    .ant-upload-list {
      display: flex;
      position: absolute;
      top: -70px;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
    }
    .chatbox-reply-input {
      width: 100%;
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
      input {
        padding: ${({ theme }) => (theme.rtl ? '0 70px 0 25px' : '0 25px 0 70px')};
        height: 70px;
        border: 0 none;
        border-radius: 35px;
        background: ${({ theme }) => theme['bg-color-normal']};
        &::placeholder {
          font-size: 14px;
          color: ${({ theme }) => theme['light-color']};
        }
        &:focus {
          border: 0 none;
          outline: none;
        }
        @media only screen and (max-width: 575px) {
          height: 50px;
          margin-bottom: 20px;
        }
      }
    }
    input,
    span {
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
    }
    .chatbox-reply-action {
      align-items: center;
      a {
        span {
          display: block;
        }
      }
      .btn-send {
        box-shadow: 0 8px 13px #5f63f220;
      }
      .ant-upload-select,
      button {
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        span {
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
          color: #fff;
        }
      }
      .ant-upload-select {
        background: ${({ theme }) => theme['bg-color-normal']};
        .ant-upload {
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
          svg {
            margin-top: 8px;
            fill: ${({ theme }) => theme['light-color']};
          }
        }
      }
      button {
        padding: 0;
        background: ${({ theme }) => theme['primary-color']};
      }
    }

    .ant-upload-select-picture-card {
      margin: 0;
      width: 50px;
      border-radius: 50% !important;
      border: 0 none;
      background-color: ${({ theme }) => theme['bg-color-normal']} !important;
      svg,
      i {
        margin-top: 7px !important;
      }
    }
    .ant-upload-list {
      &.ant-upload-list-text {
        display: block;
        top: auto;
        bottom: 136px;
        background: #fff;
        padding: 0;
        border-radius: 5px;
        box-shadow: 0 5px 20px #9299b803;
        > div {
          display: block;
        }
        .ant-upload-list-item {
          height: 24px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme['bg-color-normal']};
          button {
            width: auto;
            height: auto;
            min-width: auto;
            background-color: ${({ theme }) => theme['bg-color-normal']};
            svg {
              fill: ${({ theme }) => theme['info-color']};
            }
          }
        }
        .ant-upload-list-item-info {
          > span {
            display: flex;
            align-items: center;
          }
          .ant-upload-list-item-name {
            font-size: 13px;
          }
          .anticon,
          .ant-upload-list-item-name {
            color: ${({ theme }) => theme['info-color']};
          }
        }
      }
      &.ant-upload-list-picture-card {
        .ant-upload-list-picture-card-container {
          width: 60px;
          height: 50px;
        }
        .ant-upload-list-item {
          width: 60px;
          height: 50px;
          padding: 3px;
          .ant-upload-list-item-actions {
            .anticon-eye {
              display: none;
            }
            .anticon {
              margin: 0;
            }
          }
          .ant-upload-list-item-card-actions-btn {
            width: 25px;
            height: 25px;
            min-width: 25px;
          }
          .ant-upload-list-item-thumbnail {
            font-size: 11px;
          }
          .ant-upload-list-item-name {
            display: none;
          }
        }
      }
    }
  }
`;

export const BackShadowEmoji = styled.div`
    width: 100%;
    height: 100%;
    background: #11121760;
    position: fixed;
    top: 0;
    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
    z-index: 1;
`;

export const TicketDetailsBox = styled.div`
  .ninjadash-back-btn{
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 22px;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    @media only screen and (max-width: 767px){
      width: 100%;
      justify-content: center;
    }
    svg{
      margin-right: 4px;
      fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    &:hover{
      color: ${({ theme }) => theme['primary-color']};
      svg{
        fill: ${({ theme }) => theme['primary-color']};
      }
    }
  }
  .ninjadash-ticket-details{
    .ant-card{
      h1{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 25px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
    }
    .ninjadash-ticket-details__top-title{
      font-size: 14px;
      color: ${({ theme }) => theme[theme.mainContent]['light-text']};
    }
    h4{
      margin-bottom: 12px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .ant-select-selector {
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
    }
    .ninjadash-ticket-author{
      @media only screen and (max-width: 767px){
        margin-bottom: 20px;
      }
      .ninjadash-ticket-author__info{
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        img{
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
        }
        .ninjadash-ticket-author__name{
          font-size: 14px;
          font-weight: 500;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
      .ant-select{
        @media only screen and (max-width: 1399px){
          width: auto !important;
        }
        @media only screen and (max-width: 767px){
          width: 100% !important;
        }
      }
    }
    .ninjadash-ticket-date-info{
      @media only screen and (max-width: 991px){
        &.ticket-date-updated{
          margin-top: 20px;
        }
      }
      @media only screen and (max-width: 767px){
        margin-bottom: 20px;
      }
      .ninjadash-ticket-date-info__text{
        margin-bottom: 34px;
        .ninjadash-ticket-details__top-title{
          margin-bottom: 12px;
        }
        span{
          font-size: 14px;
          font-weight: 500;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
      .ant-select{
        @media only screen and (max-width: 1399px){
          width: auto !important;
        }
        @media only screen and (max-width: 767px){
          width: 100% !important;
        }
      }
    }
  }
  .ninjadash-ticket-overview{
    margin-top: 30px;
    @media only screen and (max-width: 767px){
      margin-top: 0;
    }
    .ninjadash-ticket-overview__title{
      font-size: 20px;
      font-weight: 600;
      line-height: 1;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    p{
      font-size: 16px;
      margin-bottom: 0;
    }
  }
  .ninjadash-ticket-file-system{
    .ant-card-head{
      border-bottom: 0 none;
      .ant-card-head-title{
        padding: 20px 0;
      }
    }
    .ant-card-body{
      padding: 0 25px 30px 25px !important;
    }
  }
  .ninjadash-ticket-file-item {
    align-items: flex-start;
    justify-content: space-between;
    &:not(:last-child){
      margin-bottom: 22px;
    }
    .ninjadash-ticket-file-item__logo{
      ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
    }
    .ninjadash-file-item__content{
      .ninjadash-ticket-file-name{
        font-size: 15px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      .ninjadash-ticket-file-size{
        display: block;
        font-size: 15px;
        font-weight: 400;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      }
    }
    .ninjadash-ticket-file-item__action{
      svg{
        width: 16px;
        height: 16px;
      }
    }
  }
`;
export const ClientConversation = styled.div`
  .chatbox-reply-form-wrap{
    padding: 0;
    .chatbox-reply-form{
      margin-top: 30px;
    }
  }
  .ant-card-body {
    h1 {
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
  }
  .ninjadash-client-conversation-list{
    .ant-list-items{
      padding-top: 12px;
    }
    .ant-list-item{
      padding: 0;
      border: 0 none;
      &:not(:last-child){
        margin-bottom: 28px;
      }
      .ant-list-item-meta{
        padding: 0;
        border: 0 none;
      }
      .ant-list-item-meta-avatar{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 16px;
        img{
          max-width: 30px;
        }
      }
      .ant-list-item-meta-title{
        font-size: 14px;
        font-weight: 500;
        a {
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
      }
      .ant-list-item-meta-description{
        font-size: 16px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
    }
    .ninjadash-conversation-time{
      font-size: 14px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
  .chatbox-reply-form {
    position: relative;
    margin-top: 20px;
    align-items: center;
    @media only screen and (max-width: 575px) {
      flex-flow: column;
    }
    .smile-icon {
      position: relative;
      position: absolute;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 25px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      z-index: 997;
      @media only screen and (max-width: 575px) {
        top: 26px;
      }
      aside {
        position: absolute;
        z-index: 999;
        bottom: 0;
        .emoji-search {
          padding: 8px;
          height: auto;
          border-radius: 5px;
        }
      }
      .ant-dropdown-trigger {
        display: flex;
        align-items: center;
      }
      a {
        display: flex;
      }
      svg{
        fill: ${({ theme }) => theme['extra-light-color']};
      }
    }
    &.hasFile {
      .ant-upload-list {
        &.ant-upload-list-text {
          padding: 15px;
        }
      }
    }
    .ant-upload-list {
      display: flex;
      position: absolute;
      top: -70px;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
    }
    .chatbox-reply-input {
      width: 100%;
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
      input {
        padding: ${({ theme }) => (theme.rtl ? '0 70px 0 25px' : '0 25px 0 70px')};
        height: 70px;
        border: 0 none;
        border-radius: 35px;
        background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        &::placeholder {
          font-size: 14px;
          color: ${({ theme }) => theme['light-color']};
        }
        &:focus {
          border: 0 none;
          outline: none;
        }
        @media only screen and (max-width: 575px) {
          height: 50px;
          margin-bottom: 20px;
        }
      }
    }
    input,
    span {
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
    }
    .chatbox-reply-action {
      align-items: center;
      a {
        span {
          display: block;
        }
      }
      .btn-send {
        box-shadow: 0 8px 13px #5f63f220;
      }
      .ant-upload-select,
      button {
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        span {
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
          color: #fff;
        }
      }
      .ant-upload-select {
        background: ${({ theme }) => theme['bg-color-normal']};
        .ant-upload {
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
          svg {
            margin-top: 8px;
            fill: ${({ theme }) => theme['light-color']};
          }
        }
      }
      button {
        padding: 0;
        background: ${({ theme }) => theme['primary-color']};
				svg{
					fill: #fff;
				}
      }
    }

    .ant-upload-select-picture-card {
      margin: 0;
      width: 50px;
      border-radius: 50% !important;
      border: 0 none;
      background-color: ${({ theme }) => theme['bg-color-normal']} !important;
      svg,
      i {
        margin-top: 7px !important;
      }
    }
    .ant-upload-list {
      &.ant-upload-list-text {
        display: block;
        top: auto;
        bottom: 136px;
        background: #fff;
        padding: 0;
        border-radius: 5px;
        box-shadow: 0 5px 20px #9299b803;
        > div {
          display: block;
        }
        .ant-upload-list-item {
          height: 24px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme['bg-color-normal']};
          button {
            width: auto;
            height: auto;
            min-width: auto;
            background-color: ${({ theme }) => theme['bg-color-normal']};
            svg {
              fill: ${({ theme }) => theme['info-color']};
            }
          }
        }
        .ant-upload-list-item-info {
          > span {
            display: flex;
            align-items: center;
          }
          .ant-upload-list-item-name {
            font-size: 13px;
          }
          .anticon,
          .ant-upload-list-item-name {
            color: ${({ theme }) => theme['info-color']};
          }
        }
      }
      &.ant-upload-list-picture-card {
        .ant-upload-list-picture-card-container {
          width: 60px;
          height: 50px;
        }
        .ant-upload-list-item {
          width: 60px;
          height: 50px;
          padding: 3px;
          .ant-upload-list-item-actions {
            .anticon-eye {
              display: none;
            }
            .anticon {
              margin: 0;
            }
          }
          .ant-upload-list-item-card-actions-btn {
            width: 25px;
            height: 25px;
            min-width: 25px;
          }
          .ant-upload-list-item-thumbnail {
            font-size: 11px;
          }
          .ant-upload-list-item-name {
            display: none;
          }
        }
      }
    }
  }
`;