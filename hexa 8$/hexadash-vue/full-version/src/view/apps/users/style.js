import Styled from 'vue3-styled-components';

const UsercardWrapper = Styled.nav`
.user-card-pagination{
  margin: 15px 0 40px 0;
  text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
  @media only screen and (max-width: 991px){
    text-align: center;
  }
}
`;

const usersListTable = Styled.div`
	.ant-table{
		padding: 25px;
	}
`;

const UserCarrdTop = Styled.div`
  .ant-page-header-heading-extra{
		display: flex;
		align-items: center;
    .btn-add_new{
      margin-right: 15px;
      @media only screen and (max-width: 575px){
        margin-right: 6px;
      }
			svg{
				fill: #fff;
				margin-right: 5px;
			}
    }
    .action-btn{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: ${({ theme }) => theme['light-color']};
      @media only screen and (max-width: 575px){
        height: 30px;
        width: 30px;
      }
			svg{
				fill: ${({ theme }) => theme['light-color']};
			}
      &.active{
        background-color: #fff;
        color: ${({ theme }) => theme['primary-color']};
				svg{
					fill: ${({ theme }) => theme['primary-color']};
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
    margin-top: 0 !important;
    padding-top: 30px;
    @media only screen and (max-width: 991px){
      text-align: center;
      justify-content: center;
    }
  }
  .contact-table{
    table{
      tr{
        th,
        td{
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
          width: 32px;
          height: 32px;
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

const AddUser = Styled.div`
  .ant-card-head-title{
    padding: 0 !important;
  }
  .form-title{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 36px;
    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
  }
  .info h1 {
    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
  }
  .social-form {
    .ant-input-affix-wrapper {
      background-color: unset;
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};

      input {
        background-color: unset;
      }

      .ant-input-prefix span {
        color: #ffffff;
      }
    }

  }
  .ant-form-item:not(:last-child){
    margin-bottom: 11px !important;
  }
  .ant-form-item-label{
    line-height: 35px;
  }
  .work-status{
    .ant-form-item-control{
      line-height: 0;
    }
  }
  .ant-form-item-control{
    line-height: 0;
  }
  .add-user-wrap{
   $:
  }
  .add-user-bottom{
    margin-top: 20px;
    button{
      height: 44px;
    }
    button + button{
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
    }
    .ant-btn-light{
      background: ${({ theme }) => theme['bg-color-light']};
      border: 1px solid #F1F2F6;
    }
    &.text-right{
      @media only screen and (max-width: 767px){
        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')} !important;
      }
    }
  }
  .card-nav{
    ul{
      flex-wrap: wrap;
      margin-bottom: -4px -12px;
      @media only screen and (max-width: 575px){
        justify-content: center;
      }
      li{
        margin: 4px 12px !important;
        &:not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 26px;
          @media only screen and (max-width: 575px){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
          }
        }
        a{
          position: relative;
          padding: 22px 0;
          font-size: 14px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          @media only screen and (max-width: 575px){
            padding: 0;
          }
					svg{
						fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
					}
          &:after{
            position: absolute;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
            bottom: -4px;
            width: 100%;
            height: 2px;
            border-radius: 4px;
            content: '';
            opacity: 0;
            visibility: hidden;
            background-color: ${({ theme }) => theme['primary-color']};
            @media only screen and (max-width: 575px){
              display: none;
            }
          }
          &.active{
            color: ${({ theme }) => theme['primary-color']};
            &:after{
              opacity: 1;
              visibility: visible;
            }
            svg,
            img,
            i,
            span{
              color: ${({ theme }) => theme['primary-color']};
            }
						svg{
							fill: ${({ theme }) => theme['primary-color']};
						}
          }
          svg,
          img,
          i,
          span{
            color: ${({ theme }) => theme['light-color']};
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
          i svg{
            margin-right: 0;
          }
        }
      }
    }
  }

  /* // Photo Upload */
  .photo-upload{
    position: relative;
    max-width: 260px;
    margin-bottom: 30px;
    .ant-upload-select{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      position: absolute;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 85px;
      bottom: 5px;
      z-index: 10;
      background-color: ${({ theme }) => theme['white-color']};
      span{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        z-index: -1;
        background-color: ${({ theme }) => theme['primary-color']};
      }
      svg,
      i,
      span{
        color: ${({ theme }) => theme['white-color']};
      }
			svg{
				fill: ${({ theme }) => theme['white-color']};
			}
      a{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    img{
      border-radius: 50%;
    }
    .info{
      background-color: transparent;
    }
    figcaption{
      ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
      .info{
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }

  .user-work-form{
    .ant-picker{
      padding: 0 15px 0 0;
    }
  }
  .user-info-form{
    .ant-select-single .ant-select-selector .ant-select-selection-item{
      color: ${({ theme }) => theme['gray-color']};
    }
  }
  .social-form{
    .ant-form-item-control{
      .ant-input-prefix{
        width: 46px;
        height: 46px;
        border-radius: 4px;
      }
      .ant-input-affix-wrapper{
          padding-top: 0 !important;
          padding-bottom: 0 !important;
					padding-left: 10px;
      }
    }
    .ant-form-item-control-input{
      height: 44px;
      .ant-input-affix-wrapper{
        &:hover,
        &:focus,
        &.ant-input-affix-wrapper-focused{
          border-color: #E3E6EF;
        }
        .ant-input{
          height: 42px;
          ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
        }
      }
    }
    .ant-input-affix-wrapper{
      padding-top: 0;
      padding-bottom: 0;
    }
    .ant-input-prefix{
      position: relative;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -11px;
      ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 0;
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme['primary-color']};
        i,
        span.fa{
          color: #fff !important;
          font-size: 16px;
        }
				svg,
				i svg{
					fill: #fff !important;
					width: 16px;
				}
        &.facebook{
          background-color: #3B5998;
        }
        &.twitter{
          background-color: #38B8FF;
        }
        &.linkedin{
          background-color: #2CAAE1;
        }
        &.instagram{
          background-color: #FF0300;
        }
        &.github{
          background-color: #292929;
        }
        &.youtube{
          background-color: #FE0909;
        }
      }
    }
  }
`;

export { UsercardWrapper, UserCarrdTop, UserTableStyleWrapper, AddUser, usersListTable };
