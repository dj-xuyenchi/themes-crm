import Styled from 'styled-components';
import { Alert, AutoComplete } from 'antd';

const GlobalUtilityStyle = Styled.div`
  .ant-card-body-p-25{
    .ant-card-body {
      padding: 25px!important;
    }
  }
  .ant-card-body-px-0{
    .ant-card-body {
      padding-left: 0!important;
      padding-right: 0!important;
    }
  }

  .ant-card-body-py-25{
    .ant-card-body {
      padding-top: 25px!important;
      padding-bottom: 25px!important;
    }
  }

  .ant-card-body-p-0{
    .ant-card-body {
      padding: 0!important;
    }
  }

  .ant-card-body-pt-0{
    .ant-card-body {
      padding-top: 0!important;
    }
  }

  .ant-card-body-pb-0{
    .ant-card-body {
      padding-bottom: 0!important;
    }
  }

  .ant-card-head-px-25{
    .ant-card-head {
      padding-left: 25px!important;
      padding-right: 25px!important;
    }
  }
  .ant-card-head-mb-0{
    .ant-card-head {
      margin-bottom: 0 !important;
    }
  }

  .ant-card-body-center{
    .ant-card-body {
      display: flex;
      justify-content: center;
    }
  }
  .ant-card-body-align-center{
    .ant-card-body {
      text-align: center;
    }
  }

  .bg-regularBG-header-bg{
    .ant-card-head{
      background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
    }
  }

  .ant-card-title-bb-default{··
    .ant-card-head{
      border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
  }

  .ant-card-head-b-none{
    .ant-card-head {
      border:none !important;
    }
  }

  .ant-card-head-title-base{
    .ant-card-head {
      .ant-card-head-title {
        padding: 18px 0;
        font-size: 18px;
        font-weight: 600;
        color: ${({ theme }) => theme[theme.mainContent]['text-dark']};
        @media only screen and (max-width: 575px){
          padding-bottom: 5px;
        }
      }
    }
  }
  .ant-card-title-mb-22 {
    .ant-card-body {
      h1 {
        margin-bottom: 22px;
      }
    }
  }
  
  .ant-card-extra{
    .ant-dropdown-trigger{
      >svg,>img{
        color:${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        width: 24px;
        height: 24px;
      }
    }
  }

  .ant-dropdown{
    a i, a svg, a img {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
    }
    a {
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

      background-color:${({ theme }) => theme[theme.mainContent]['white-background']};
      border: 0;
      border-radius: 5px;
      box-shadow: 0 5px 20px #9299b820;
      padding:4px 0;
      >a{
          display:flex;
          align-items:center;
          font-weight:400;
          font-size:14px;
          padding:6px 12px;
          color:${({ theme }) => theme[theme.mainContent]['gray-text']};
          transition:0.3s;
          svg{
              color:${({ theme }) => theme[theme.mainContent]['gray-light-text']};
              width: 14px;
              height: 14px;
              margin-right: 8px;
              transition:0.3s;
          }
          &:hover{
              background: rgba(${({ theme }) => theme[theme.mainContent]['primary-color-rgb']},.10);
              color:${({ theme }) => theme[theme.mainContent].primary};
              svg{
                  color:currentColor;
              }
          }
      }
  }

  .table-responsive {
    .ant-table-tbody > tr > td {
      &.ant-table-column-sort {
        background: transparent;
      }
    }
    .ant-table-thead > tr > th {
      background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
      border-color: ${({ theme }) => theme[theme.mainContent]['light-border']};
      background:transparent;
    }
    .ant-table-tbody > tr:hover > td {
      background-color: transparent !important;
    }
  }

  .table-bg-transparent {
    .ant-table-wrapper {
      .ant-table {
        background: transparent;
      }
    }
  }

  .table-pl-0{
    tbody{
      tr{
        td{
          &:first-child{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
          }
        }
      }
    }
  }

  .table-pr-0{
    tbody{
      tr{
        td{
          &:last-child{
            padding-right: 0 !important;
          }
        }
      }
    }
  }

  .table-pt-15{
    tbody{
      tr{
        &:first-child{
          td{
            padding-top: 15px !important;
          }
        }
      }
    }
  }

  .table-pt-8{
    tbody{
      tr{
        &:first-child{
          td{
            padding-top: 8px !important;
          }
        }
      }
    }
  }

  .table-head-none {
    table {
      thead {
        display: none;
      }
    }
  }

  .table-head-rounded {
    table {
      thead {
        > tr {
          &:first-child {
            th {
              &:first-child {
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
              }
              &:last-child {
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
              }
            }
          }
        }
      }
    }
  }

  .table-th-border-none {
    thead {
      tr {
        th {
          border: none;
        }
      }
    }
  }

  .table-th-shape-none {
    thead {
      th {
        &:before {
          display: none;
        }
      }
    }
  }

  .table-th-text-light {
    thead {
      th {
        color: ${({ theme }) => theme['light-color']};
      }
    }
  }

  .table-last-th-text-right {
    thead {
      th {
        &:last-child {
          text-align: right;
        }
      }
    }
  }

  .table-tr-px-30 {
    table {
      tr {
        th,
        td {
          &:first-child {
            padding-left: 30px !important;
          }
          &:last-child {
            padding-right: 30px !important;
          }
        }
      }
    }
  }
  .table-border-b-none{
    tbody{
      tr{
        &:last-child{
          td{
            border-bottom: none;
          }
        }
      }
    }
  }

  .table-td-border-none {
    tbody {
      tr {
        td {
          border: none;
        }
      }
    }
  }

  .table-td-text-body dark:text-white60 {
    tbody {
      tr {
        td {
          color: ${({ theme }) => theme['gray-color']};
        }
      }
    }
  }

  .table-last-td-text-right {
    tbody {
      tr {
        td {
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }

  .table-selection-col-pl-25 {
    table {
      tr {
        .ant-table-selection-column {
          padding-left: 25px;
        }
      }
    }
  }

  .table-tr-selected-background-transparent {
    tbody {
      tr.ant-table-row-selected {
        td {
          background: transparent;
        }
      }
    }
  }

  .table-tr-hover-shadow {
    tbody {
      tr {
        &:hover {
          box-shadow: 0px 10px 15px rgba(116,116,116,0.08);
        }
      }
    }
  }

  .svg-w-h-10{
    svg{
      width: 10px;
      height: 10px;
    }
  }

  .svg-w-full{
    svg{
      width: 100%;
      height: 100%;
    }
  }

  .inside-flex-align-center{
    >div{
      display:flex;
      align-items:center;
    }
  }

  .ant-btn-loading-icon{
    .ant-btn-loading-icon{
      display:flex;
      align-items:center;
    }
  }

  .anticon svg {
    color: ${({ theme }) => theme[theme.mainContent]['white-color']};
  }

  .ant-progress-status-success {
    .anticon svg {
      color: ${({ theme }) => theme['success-color']};
    }
  }

  .progress-text-body dark:text-white60 {
    .ant-progress-text {
      color: ${({ theme }) => theme['gray-color']};
    }
  }

  .custom-radio-group {
    .ant-radio-checked {
      .ant-radio-inner {
        border-width: 4px;
        &:after {
          background: ${({ theme }) => theme['white-color']};
        }
      }
    }
  }

  .form-label-w-full {
    .ant-form-item-row {
      flex-direction: column;
    }
  }

  .form-label-text-left {
    .ant-form-item-label {
      text-align: left;
    }
  }

  .form-label-text-dark {
    .ant-form-item-label label {
      color: ${({ theme }) => theme['dark-color']};
    }
  }

  .form-label-text-semibold {
    .ant-form-item-label label {
      font-weight: 600;
    }
  }

  .checkbox-label-w-full {
    label {
      margin-right: 0;
      span {
        &:not(:first-child){
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
        }
      }
    }
  }

  .custom-filter-rating {
    .ant-checkbox-wrapper {
      align-items: center;
      .ant-rate {
        margin-right: 10px;
        li {
          margin-right: 2px;
          svg {
            color: ${({ theme }) => theme['warning-color']};
          }
        }
      }
    }
  }

`;

const TestimonialStyleWrapper = Styled.div`
  .testimonial-custom-style {
    direction: ltr;
    .swiper-button-prev,
    .swiper-button-next{
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-80%);
      z-index: 22;
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    .swiper-button-prev{
      left: 0;
      &:before{
        font-family: 'Jost', sans-serif;
        content: url('${require('../static/img/icon/arrow-left.png')}');
      }
    }
    .swiper-button-next{
      right: 0;
      &:before{
        font-family: 'Jost', sans-serif;
        content: url('${require('../static/img/icon/arrow-right.png')}');
      }
    }
    .theme-1 {
      .swiper-container {
        padding: 40px 19px 60px;
        .swiper-slide {
          box-shadow: rgb(116 116 116 / 6%) 0px 10px 20px;
          &.swiper-slide-active {
            box-shadow: rgb(116 116 116 / 13%) 0px 20px 50px;
          }
        }
      }
    }
  
    .theme-3 {
      .swiper-pagination {
        position: absolute;
        height: fit-content;
        top: 45px;
        left: 50%;
        transform: translateX(-50%);
      }
  
      .swiper-pagination {
        .pagination-thumb {
          &.swiper-pagination-bullet-active {
            position: relative;
            z-index: 22;
            opacity: 1 !important;
            img {
              transform: scale(1.4);
            }
          }
        }
      }
    }

    .theme-4 {
      .swiper-button-prev {
        left: 100px;
      }
      .swiper-button-next {
        right: 100px;
      }
    }
    
    .swiper-container {
      list-style: none;
      margin-left: auto;
      margin-right: auto;
      padding: 0 20px;
      margin: 0 -20px;
      overflow: hidden;
      position: relative;
      z-index: 1;
    }
    
    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: rgb(220, 221, 250);
        opacity: 1;
        &.swiper-pagination-bullet-active {
          background-color: rgb(130, 49, 211);
        }
      }
    }
  
    .swiper-button-prev,
    .swiper-button-next {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      box-shadow: rgb(10 10 10 / 9%) 0px 3px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-80%);
      z-index: 22;
      background-color: ${({ theme }) => theme[theme.mainContent]['white-color']} ;
    }
    .swiper-button-next {
      right: 10px;
    }
  }
  
`;

const FaqWrapper = Styled.div`
  .ant-card-custom-style {
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['light-border']} !important;
    .ant-collapse-header {
      padding: 18px 20px !important;
      background-color:${({ theme }) => theme[theme.mainContent]['white-color']};
      svg {
        width: 16px;
        height: 16px;
      }
    }
    .ant-collapse-content {
      .ant-collapse-content-box {
        padding-top: 0;
      }
    }
  }
`;

const PaginationStyle = Styled.div`
  .ant-pagination-custom-style {
    .ant-pagination {
      li {
        a {
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .ant-pagination-item-link {
          display: flex;
          align-items: center;
          justify-content: center;  
          border:none;
          .anticon svg {
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
          }
        }
        &.ant-pagination-item-active {
          background: ${({ theme }) => theme[theme.mainContent].primary};
          a {
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
          }
        }
        &.ant-pagination-options{
          display: inline-flex;
          align-items: center;
          border: none;
          .ant-select-selection-item{
            display: inline-flex;
            align-items: center;
          }
        }
      }
    }
    .ant-pagination-options {
      .ant-select-selection-item,
      .ant-select-arrow span svg {
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      .ant-select-selector {
        padding: 0 7px;
        height: 32px;
        .ant-select-selection-item {
          font-size: 13px;
          line-height: 32px;
        }
      }
      .ant-select-arrow {
        span {
          line-height: 10px;
          svg {
            width: 10px;
          }
        }
      }
    }
    .ant-select-item-dropdown-option-dark {
      .ant-select-item-option-content {
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      .ant-select-item.ant-select-item-option-selected {
        background-color: ${({ theme }) => theme[theme.mainContent].primary}06;
        .ant-select-item-option-content {
          color: ${({ theme }) => theme[theme.mainContent].primary};
          font-weight: 500;
          padding-left: 10px;
        }
      }
    }
  }
`;

const KnowledgebaseTopWrap = Styled.div`
    .custom-knowledgebadge-search-form{
        .ant-select {
            min-width: 160px;
            .ant-select-selector {
                .ant-select-selection-search {
                    right: 35px;
                    .ant-select-selection-search-input {
                        height: 54px;
                    }
                }
            }
        }

        .ant-form-item-control-input {
            font-size: 15px;
            color: rgb(134, 142, 174);
            height: 54px;
            .ant-input {
                line-height: 2;
                background-color: rgb(255, 255, 255);
            }
        }

        .hexadash-knowledgetop__formInner{
            .ant-form-item{
                margin-bottom: 0;
                @media only screen and (max-width: 575px){
                    width: 100%;
                }
            }
            .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
                height: 54px !important;
                border: 0 none;
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-radius: 6px 0 0 6px !important;
                @media only screen and (max-width: 575px){
                    border-radius: 6px !important;
                }
            }
            .ant-select{
                min-width: 160px;
                .ant-select-arrow{
                    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 30px;
                    @media only screen and (max-width: 575px){
                        top: 40%;
                    }
                }
            }
            .ant-select-selector{
                @media only screen and (max-width: 575px){
                    width: calc(100% - 22px);
                    position: relative;
                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 11px;
                    border-radius: 4px;
                    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']} !important;
                    margin-bottom: 15px;
                }
                .ant-select-selection-search{
                    
                    .ant-select-selection-search-input{
                        height: 54px;
                    }
                }
                .ant-select-selection-item{
                    font-size: 15px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
                    line-height: 54px !important;
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']};
                    @media only screen and (max-width: 575px){
                        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']};
                    }
                }
            }
            .hexadash-search-input{
                width: 100%;
                .ant-form-item-control{
                    @media only screen and (max-width: 575px){
                        padding: 0 11px;
                    }
                }
                .ant-form-item-control-input{
                    font-size: 15px;
                    color: #868EAE;
                    height: 54px;
                    @media only screen and (max-width: 575px){
                        border-radius: 4px;
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                        margin-bottom: 15px;
                    }
                    @media only screen and (max-width: 575px){
                        border: 0 none;
                    }
                }
                .ant-input{
                    line-height: 2;
                    border: 0 none;
                    border-radius: 0px;
                    background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                    @media only screen and (max-width: 575px){
                        border-radius: 6px;
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                    }
                    &:focus{
                        outline: none;
                        box-shadow: 0 0;
                    }
                }
            }
            .btn-search{
                font-size: 15px;
                height: 54px;
                border-radius: 0 6px 6px 0;
                border-radius: ${({ theme }) => (theme.rtl ? '4px 0 0 4px' : '0 4px 4px 0')};
                padding: 6.4px 27.7px;
                @media only screen and (max-width: 575px){
                    border-radius: 4px;
                }
            }
        }
    }
    .hexadash-knowledgetop__popular--topics{
        margin-top: 22px;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin: -6px 0;
        }
        li{
            margin: 6px 0;
            @media only screen and (max-width: 379px){
                flex: 100%;
                width: 100%;
            }
            &:first-child{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 25px !important;
                @media only screen and (max-width: 379px){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0px !important;
                }
                
            }
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
                @media only screen and (max-width: 379px){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0px;
                }
            }
            a,
            span{
                font-size: 14px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            a{
                color: ${({ theme }) => theme[theme.mainContent]['light-gray-color']} !important;
                transition: .35s;
                &:hover{
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    text-decoration: underline;
                }
            }
        }
    }
`;

const ChangelogWrapper = Styled.div`
  .changelog-accordion{
    .ant-collapse-item{
      &:not(:last-child){
        margin-bottom: 20px;
      }
      &:last-child{
        border-radius: 6px;
        .ant-collapse-header{
          border-radius: 6px;
        }
      }
    }
    .ant-collapse-header{
      border-radius: 6px;
      padding: 20px 30px 18px 30px !important;
      @media only screen and (max-width: 480px){
        padding: 20px 15px 18px 15px !important;
      }
      .ant-collapse-arrow{
        position: static;
        top: 0 !important;
        svg,
        img{
          width: 8px;
          font-size: 8px;
        }
      }
    }
    .ant-collapse-content{
      border-radius: 0 0 6px 6px;
      border-color: ${({ theme }) => theme[theme.mainContent]['light-border']};
      > .ant-collapse-content-box{
        padding: 30px 30px 25px;
        @media only screen and (max-width: 480px){
          padding: 30px 15px 25px;
        }
      }
    }
  }
`;

const CollapseStyle = Styled.div`
/* Ant Collapse */
  .ant-collapse{
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    border-radius: 5px;
  }
  .ant-collapse.ant-collapse-icon-position-left .ant-collapse-header{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      padding: 12px 16px 10px 45px;
      background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
  }
  .ant-collapse-content p{
      color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      margin-bottom: 0;
  }
  .ant-collapse-content > .ant-collapse-content-box {
      padding: 20px 20px 12px;
  }
  .ant-collapse-content > .ant-collapse-content-box .ant-collapse-content-box{
      padding: 10.5px 20px;
  }
  .ant-collapse > .ant-collapse-item,
  .ant-collapse .ant-collapse-content{
      border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
  }
  .ant-collapse > .ant-collapse-item.ant-collapse-item-disabled .ant-collapse-header{
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']} !important;
  }
  .ant-collapse > .ant-collapse-item .ant-collapse-header{
    align-items: center;
  }
  .ant-collapse > .ant-collapse-item .ant-collapse-header .ant-collapse-arrow{
      font-size: 8px;
  }

  .ant-collapse .ant-collapse {
      border: 0 none;
      background: ${({ theme }) => theme[theme.mainContent]['white-text']};
  }

  .ant-collapse .ant-collapse > .ant-collapse-item {
      border-bottom: 0;
  }
  .ant-collapse .ant-collapse .ant-collapse-header{
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
      background: ${({ theme }) => theme[theme.mainContent]['light-background']};
  }
  .ant-collapse .ant-collapse .ant-collapse-content{
      margin: 20px 0 10px 0;
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
      border-radius: 0;
  }
  .ant-collapse{
    .ant-collapse-item{
      &:last-child{
        &.ant-collapse-item-disabled{
          background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
        }
      }
      .ant-collapse-item{
        &:last-child{
          background-color:transparent;
        }
        .ant-collapse-header{
          border-radius: 6px;
          border-color: ${({ theme }) => theme[theme.mainContent]['light-border']};
          background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
        }
        .ant-collapse-content{
          border-color: ${({ theme }) => theme[theme.mainContent]['light-border']};
        }
      }
    }
    .ant-collapse-expand-icon{
      display: flex;
      svg{
        width: 12px;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      }
    }
  }
  
`;

const CommentStyle = Styled.div`
  /* Ant Comment */
  .ant-comment-inner{
      padding: 0;
  }
  .ant-comment-content-detail p{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
  .ant-list-items{
      padding-top: 22px;
  }
  .ant-list-items li:not(:last-child){
      margin-bottom: 22px;
  }
  .ant-comment:not(:last-child){
      margin-bottom: 22px;
  }
  .ant-comment-nested{
      margin-top: 22px;
  }
  .ant-comment-actions li span{
    color: ${({ theme }) => theme[theme.mainContent]['extra-light']};
   + span{
    padding-inline-start: 6px !important;
    padding-inline-end: 0 !important;
   }
  }
  .ant-comment-content-detail textarea{
      resize: none;
      min-height: 170px;
      border-radius: 5px;
  }
  .ant-comment-content-author-time{
    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
  }
  // Ant comment action
  .ant-comment-actions{
      li{
          position: relative;
          &:not(:last-child){
              margin-inline-end: 8px;
              padding-inline-end: 8px;
              &:after{
                  position: absolute;
                  inset-inline-end:0;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 1px;
                  height: 12px;
                  background-color: ${({ theme }) => theme[theme.mainContent]['border-color-deep']};
                  content: '';
              }
          }
          .com-time{
              cursor: default;
          }
          span{
            margin-inline-end: 0;
          }
      }
  }
  .ant-list-split .ant-list-header {
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    border-color: ${({ theme }) => theme[theme.mainContent]['light-border']};
  }
  .ant-comment-actions li {
      margin-bottom: 0!important;
  }
  .ant-comment-actions>li {
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    display: inline-block;
}
`;

const AlertWrap = Styled(Alert)`
  border-radius: ${({ shape }) => (!shape ? '4px' : '40px')} !important;
  border-width: 0 !important;
  margin: 0!important;
  padding: 16.5px 20px!important;
  .ant-alert-message{
    line-height: 1.8;
    margin-bottom: 0 !important;
    font-size: 16px !important;
    font-weight: 500 !important;
  }
  &.ant-alert-with-description{
    .ant-alert-content{
      line-height: 1;
    }
    .ant-alert-message{
      margin-bottom: 10px !important;
      line-height: 1;
    }
    .ant-alert-description{
      font-size: 15px;
      line-height: 1.35;
    }
  }
  &.ant-alert-closable {
    .ant-alert-message{
      display: block;
    }
  }
  .ant-alert-message, 
  .ant-alert-description {
    color: ${({ type, theme }) => theme[`${type}-color`]};
  }
  &.ant-alert-with-description{
    .ant-alert-message{
      color: ${({ type, theme }) => theme[`${type}-color`]};
    }
  }
  .ant-alert-close-text{
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
  }

  ${({ showIcon, theme }) =>
    showIcon &&
    `padding: 16px 20px 20px!important;
    alert-empty-message{
      padding: 11px 40px 11px!important;
    }
    .ant-alert-icon{
      top: 20px !important;
      ${theme.rtl ? 'right' : 'left'}: 15px !important;
    }
    .ant-alert-message{
      margin-top: -2px;
    }
    i.ant-alert-icon {
      color: ${({ type }) => theme[`${type}-color`]} !important;
      background: #ffffff80 !important;
      height: 100%;
      width: 50px;
      position: absolute;
      top: 0;
      ${theme.rtl ? 'right' : 'left'}: 0;
    }`}


  .ant-alert-close-icon {
    top: 12px !important;
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 20px !important;
    svg,
    span,
    img,
    i{
      width: 8px;
      height: 8px;
    }
  }
`;

const AutoCompleteStyled = Styled(AutoComplete)`
    display: block !important;
    .ant-select-selection-placeholder{
        padding: 0 20px !important;
        text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 2px !important;
    }
    &.ant-select{
        .ant-select-selector{
            display: flex;
            align-items: center;
            height: 37px;
            border-radius: 4px;
            padding: 0 !important;
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
            .ant-select-selection-search{
                .ant-input-affix-wrapper{
                    padding: 0 20px;
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                    input{
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
                .ant-input-suffix{
                    svg,
                    i{
                        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                    }
                }
            }
            textarea{
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
    }
    
    .ant-select-selector input{
        height: 33px !important;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }
    .ant-select-selection-search{
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 20px;
        width: auto;
        @media only screen and (max-width: 575px){
            width: 100% !important;
        }
        textarea.ant-input{
            padding: 12px 20px;
        }
    }
    .ant-input-affix-wrapper{
        padding: 0 20px;
        input{
            height: 38px !important;
        }
        .ant-input-suffix{
            height: auto;
            border-radius: ${({ theme }) => (theme.rtl ? '4px 0 0 4px' : '0 4px 4px 0')}; 
            svg,
            i{
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            }
            .search-btn{
                height: 38px;
                border-radius: 0px 4px 4px 0px;
                svg,
                i{
                    color: ${({ theme }) => theme[theme.mainContent]['white-color']} !important;
                }
            }
        }
    }
`;

const CalendarWrapperPage = Styled.div`
    .hexadash-calendar-with-head{
      .react-calendar{
        padding: 0;
        margin-bottom: 0;
      }
    }
    .hexadash-calendar-wrap{
      .react-calendar{
        padding: 30px 25px 20px;
      }
      .react-calendar__month-view__days .react-calendar__tile{
        height: 46px !important;
        @media only screen and (max-width: 767px){
          height: 42px !important;
        }
      }
      .ninjadasgcaled {
        @media only screen and (max-width: 1199px){
          min-height: 750px;
        }
      }
    }
    .react-calendar{
        font-family: 'Jost', sans-serif;
        width: 100%;
        border-radius: 10px;
        border: 0 none;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        margin-bottom: 25px;
        box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}03;
        @media only screen and (max-width: 1599px){
            padding: 40px 35px 50px;
        }
        @media only screen and (max-width: 575px){
            padding: 15px;
        }
        .react-calendar__viewContainer{
            .react-calendar__year-view__months__month {
                &:hover{
                    background-color: transparent;
                }
                &.react-calendar__tile--hasActive{
                    background-color: transparent;
                    color: ${({ theme }) => theme['primary-color']}
                }
            }
        }
    }
    .react-calendar__navigation{
        justify-content: center;
        margin-bottom: 22px;
        height: auto;
        button{
          background-color: transparent !important;
          color: color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .react-calendar__navigation__arrow{
            font-size: 20px;
            min-width: auto;
            color: color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .react-calendar__navigation__label{
            flex-grow: 0 !important;
            font-size: 16px;
            font-weight: 500;
            margin: 0 15px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            &:hover{
              background-color: transparent
            }
        }
    }
    .react-calendar__month-view__weekdays{
        .react-calendar__month-view__weekdays__weekday{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .8rem .5rem;
            abbr{
                font-size: 13px;
                font-weight: 500;
                text-decoration: none;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                @media only screen and (max-width: 1300px){
                    font-size: 11px;
                }
            }
        }
    }
    .react-calendar__year-view__months,
    .react-calendar__month-view__days{
        .react-calendar__tile{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 64px !important;
            padding: 1em 0.5em;
            @media only screen and (max-width: 1599px){
              height: auto !important;
            }
            &:hover{
                background-color: transparent;
                font-weight: 500;
                color: color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
            &.react-calendar__month-view__days__day--neighboringMonth{
                abbr{
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
            }
            abbr{
                font-size: 12px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &.react-calendar__tile--now{
                padding: 0.929em 0.5em;
                background-color: transparent;
                border-radius: 6px;
                border: 1px solid ${({ theme }) => theme['primary-color']};
            }
            &.react-calendar__tile--active{
                border-radius: 6px;
                border-color:#8e1dce;
                background-color: #8e1dce;
                abbr{
                    color: #ffffff;
                }
            }
        }
    }
    .calendar-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        @media only screen and (max-width: 1599px){
            flex-flow: column;
        }
        .calendar-header__left{
            display: flex;
            align-items: center;
            position: relative;
            @media only screen and (max-width: 1599px){
                margin-bottom: 20px;
            }
            @media only screen and (max-width: 479px){
                flex-flow: column;
            }
            .btn-today{
                font-size: 14px;
                font-weight: 500;
                height: 34px;
                padding: 0 15px;
                border-radius: 4px;
                text-transform: capitalize;
                cursor: pointer;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                @media only screen and (max-width: 479px){
                    margin-bottom: 15px;
                }
            }
            .react-calendar{
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 30px;
                padding: 0;
                border: none;
                .react-calendar__navigation{
                    align-items: center;
                    margin: 0;
                    border: none;
                    .react-calendar__navigation__label{
                        padding: 0 20px;
                    }
                    .react-calendar__navigation__arrow {
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                        border-radius: 5px;
                        width: 34px;
                        height: 34px;
                        svg,
                        img{
                            width: 14px;
                        }
                    }
                }
                .react-calendar__viewContainer{
                    position: absolute;
                    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    z-index: 999;
                    border: 1px solid #ddd;
                    display: none;
                    &.show{
                        display: block;
                    }
                }
            }
            .calender-head__navigation{
                display: flex;
                align-items: center;
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 30px;
                @media only screen and (max-width: 479px){
                    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 0px;
                }
                .btn-navigate{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 34px;
                    height: 34px;
                    padding: 0;
                    cursor: pointer;
                    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    i,
                    svg{
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                }
                .date-label{
                    display: inline-block;
                    margin: 0 20px;
                    font-size: 16px;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    @media only screen and (max-width: 575px){
                      font-size: 12px;
                    }
                }
            }
        }
        .calendar-header__right{
            display: flex;
            @media only screen and (max-width: 479px){
                flex-flow: column;
                align-items: center;
            }
            svg{
                width: 14px;
            }
            ul{
                margin-bottom: 0;
                li{
                    display: inline-block;
                    &:first-child{
                        ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                    }
                    &:not(:first-child){
                        a{
                            ${({ theme }) => (theme.rtl ? 'border-top-right-radius' : 'border-top-left-radius')}: 0px;
                            ${({ theme }) =>
                              theme.rtl ? 'border-bottom-right-radius' : 'border-bottom-left-radius'}: 0px;
                        }
                    }
                    &:not(:last-child){
                        a{
                            ${({ theme }) => (theme.rtl ? 'border-top-left-radius' : 'border-top-right-radius')}: 0px;
                            ${({ theme }) =>
                              theme.rtl ? 'border-bottom-left-radius' : 'border-bottom-right-radius'}: 0px;
                        }
                    }
                    a{
                        font-size: 13px;
                        font-weight: 500;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                        ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 0px;
                        display: block;
                        border-radius: 4px;
                        padding: 6px 13.24px;
                        &.active{
                            color: #fff;
                            border-color: ${({ theme }) => theme['primary-color']};
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
            }
            .schedule-list{
                margin-left: 20px;
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
                display: flex;
                align-items: center;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                @media only screen and (max-width: 479px){
                    margin: 15px 0 0 0;
                }
                svg,
                img,
                i{
                    margin-right: 6px;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
                    color: ${({ theme }) => theme['primary-color']};
                }
                &.active{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }

    .table-event{
        
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        &.table-responsive{
            @media only screen and (max-width: 1599px){
                display: block;
                width: 100%;
                overflow-x: auto;
            }
        }
        tr{
            th,
            td{
                padding: 16px 0;
                border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                &:first-child{
                    min-width: 75px;
                    padding: 16px 18px 16px 18px;
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid color: ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                    
                }
            }
        }
        thead{
            th{
                padding: 0 22px;
                background-color: ${({ theme }) => theme['bg-color-light']};
                p{
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 0;
                }
            }
        }
        tbody{
            td{
                padding: 0 10px;
                font-size: 12px;
                min-width: 140px;
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                .currentTime{
                    width: calc(100% + 20px);
                    height: 1px;
                    display: block;
                    position: relative;
                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -10px;
                    z-index: 222;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
                        top: -6px;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        content: '';
                        background-color: ${({ theme }) => theme['secondary-color']};
                    }
                }
                .day-event-item{
                    width: 100%;
                    display: block;
                    border-radius: 3px 6px 6px 3px;
                    padding: 6px 12px;
                    margin: 2px 0;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
                        bottom: 0;
                        width: 2px;
                        height: 100%;
                        border-radius: 6px 0 0 6px;
                        content: '';
                    }
                    &.primary{
                        background-color: #EFEFFE;
                        color: ${({ theme }) => theme['primary-color']};
                        &:hover{
                            color: ${({ theme }) => theme['primary-color']};
                        }
                        &:after{
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                    &.secondary{
                        background-color: #FFF0F6;
                        color: ${({ theme }) => theme['secondary-color']};
                        &:hover{
                            color: ${({ theme }) => theme['secondary-color']};
                        }
                        &:after{
                            background-color: ${({ theme }) => theme['secondary-color']};
                        }
                    }
                    &.success{
                        background-color: #E8FAF4;
                        color: ${({ theme }) => theme['success-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    &.warning{
                        background-color: #FFF3E6;
                        color: ${({ theme }) => theme['warning-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['warning-color']};
                        }
                    }
                    &.info{
                        background-color: ${({ theme }) => theme['info-color']}10;
                        color: ${({ theme }) => theme['info-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['info-color']};
                        }
                    }
                    .event-title{
                        display: block;
                        font-size: 13px;
                        font-weight: 500;
                        margin-bottom: 4px;
                    }
                }
            }
            
        }
    }

    .emptyData{
        min-height: 110px;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
    }

    .event-week{
        tr{
            th,
            td{
                &:not(:last-child){
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid color: ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                }
            }
        }
        thead{
            tr{
                th{
                    text-align: center;
                    .week-dayName{
                        font-size: 13px;
                        font-weight: 400;
                        margin-bottom: 2px;
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                    .week-date{
                        display: inline-block;
                        line-height: 1.45;
                        border-radius: 9px;
                        font-size: 13px;
                        &.primary{
                            padding: 0 10px;
                        }
                    }
                }
            }
        }
        tbody{
            .ant-dropdown-trigger{
                display: inline-block;
            }
        }
    }

    .schedule-event{
        tr{
            &:hover{
                box-shadow: 0 15px 40px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
                td{
                    border-color: #fff;
                }
            }
            td{
                padding: 10px 20px !important;
                vertical-align: top;
                font-size: 14px;
                &:first-child{
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                }
                &.schedule-time{
                    direction: ltr;
                    min-width: 100px;
                    width: 130px;
                }
                .ant-row{
                    &:not(:last-child){
                        margin-bottom: 10px;
                    }
                }
                .schedule-date{
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                .schedule-date-name{
                    margin-left: 10px;
                }
                .event-title{
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    @media only screen and (max-width: 575px){
                        display: inline-block;
                        margin-top: 6px; 
                    }
                }
                .schedule-time{
                    font-size: 13px;
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                }
            }
        }
    }

    .events{
        li{
            position: relative;
            min-height: 35px;
            a{
                position: absolute;
                top: 0;
                left: 0;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                padding: 5px 12px;
                z-index: 1;
                border-radius: 4px;
                font-size: 13px;
                &:hover{
                    color: #fff;
                }
            }
        }
    }

    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content {
        overflow-y: unset;
        overflow-x: auto;
    }  
    .rbc-btn {
        color: inherit;
        font: inherit;
        margin: 0;
      }
      button.rbc-btn {
        overflow: visible;
        text-transform: none;
        -webkit-appearance: button;
        cursor: pointer;
      }
      button[disabled].rbc-btn {
        cursor: not-allowed;
      }
      button.rbc-input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      .rbc-calendar {
        box-sizing: border-box;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 25px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        @media only screen and (max-width: 575px){
          padding: 10px;
        }
      }
      .rbc-calendar *,
      .rbc-calendar *:before,
      .rbc-calendar *:after {
        box-sizing: inherit;
      }
      .rbc-abs-full,
      .rbc-row-bg {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .rbc-ellipsis,
      .rbc-event-label,
      .rbc-row-segment .rbc-event-content,
      .rbc-show-more {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .rbc-rtl {
        direction: rtl;
      }
      .rbc-header {
        overflow: hidden;
        flex: 1 0 0%;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 16px 20px;
        text-align: center;
        vertical-align: middle;
        font-size: 15px;
        min-height: 0;
        background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
        @media only screen and (max-width: 575px){
          padding: 10px;
        }
        &:first-child{
          border-radius: 10px 0 0 0;
        }
        &:last-child{
          border-radius: 0 10px 0 0;
        }
        span{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          @media only screen and (max-width: 575px){
            font-size: 12px;
          }
        }
      }
      .rbc-rtl .rbc-header + .rbc-header {
        border-left-width: 0;
        border-right: 1px solid #ddd;
      }
      .rbc-header > a,
      .rbc-header > a:active,
      .rbc-header > a:visited {
        color: inherit;
        text-decoration: none;
        display: inline-block;
        padding-bottom: 7px;
      }
      .rbc-row-content {
        position: relative;
        user-select: none;
        z-index: 4;
        .rbc-row{
          &+.rbc-row{
            margin-top: 6px;
          }
        }
      }

      .rbc-event {
        border: none;
        box-shadow: none;
        margin: 0;
        padding: 3px 15px;
        color: #fff;
        cursor: pointer;
        width: 100%;
        text-align: left;
        border-radius: 4px;
        @media only screen and (max-width: 575px){
          font-size: 12px;
        }
        &.primary{
          background-color: ${({ theme }) => theme['primary-color']};
        }
        &.secondary{
          background-color: ${({ theme }) => theme['secondary-color']};
        }
        &.info{
          background-color: ${({ theme }) => theme['info-color']};
        }
        &.warning{
          background-color: ${({ theme }) => theme['warning-color']};
        }
        &.success{
          background-color: ${({ theme }) => theme['success-color']};
        }
      }
      .rbc-slot-selecting .rbc-event {
        cursor: inherit;
        pointer-events: none;
      }
      .rbc-event-label {
        font-size: 80%;
      }
      .rbc-event-overlaps {
        box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);
      }
      .rbc-event-continues-prior {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .rbc-event-continues-after {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .rbc-event-continues-earlier {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      .rbc-event-continues-later {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .rbc-row {
        display: flex;
        flex-direction: row;
      }
      .rbc-row-segment {
        padding: 0 1px 1px 1px;
      }
      .rbc-selected-cell {
        background-color: rgba(0, 0, 0, 0.1);
      }
      .rbc-show-more {
        background-color: rgba(255, 255, 255, 0.3);
        z-index: 4;
        font-weight: bold;
        font-size: 85%;
        height: auto;
        line-height: normal;
        white-space: nowrap;
      }
      .rbc-month-view {
        position: relative;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        display: flex;
        flex-direction: column;
        flex: 1 0 0;
        width: 100%;
        user-select: none;
        height: 100%;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 10px;
      }
      .rbc-month-row{
        &:not(:last-child){
          .rbc-day-bg {
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
          }
        }
      }
      .rbc-date-cell{
        &.rbc-off-range{
          .rbc-button-link{
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
          }
        }
        .rbc-button-link{
          margin-top: 5px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          @media only screen and (max-width: 575px){
            font-size: 12px;
          }
        }
      }
      .rbc-month-header {
        display: flex;
        flex-direction: row;
      }
      .rbc-month-row {
        display: flex;
        position: relative;
        flex-direction: column;
        flex: 1 0 0;
        flex-basis: 0px;
        overflow: hidden;
        height: 100%;
      }
      .rbc-month-row + .rbc-month-row {
      }
      .rbc-date-cell {
        flex: 1 1 0;
        min-width: 0;
        padding-right: 5px;
        text-align: right;
      }
      .rbc-date-cell.rbc-now {
        font-weight: bold;
      }
      .rbc-date-cell > a,
      .rbc-date-cell > a:active,
      .rbc-date-cell > a:visited {
        color: inherit;
        text-decoration: none;
      }
      .rbc-row-bg {
        display: flex;
        flex-direction: row;
        flex: 1 0 0;
        overflow: hidden;
      }
      .rbc-day-bg {
        flex: 1 0 0%;
        &:not(:last-child){
          border-right: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        &.rbc-today{
          position: relative;
          background-color: ${({ theme }) => theme['primary-color']}15;
          &:after{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 2px;
            content: '';
            background-color: ${({ theme }) => theme['primary-color']};
          }
        }
      }
      .rbc-day-bg + .rbc-day-bg {
      }
      .rbc-rtl .rbc-day-bg + .rbc-day-bg {
        border-left-width: 0;
      }
      .rbc-overlay {
        position: absolute;
        z-index: 5;
        border: 1px solid #e5e5e5;
        background-color: #fff;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
        padding: 10px;
      }
      .rbc-overlay > * + * {
        margin-top: 1px;
      }
      .rbc-overlay-header {
        border-bottom: 1px solid #e5e5e5;
        margin: -10px -10px 5px -10px;
        padding: 10px;
      }
      .rbc-agenda-view {
        display: flex;
        flex-direction: column;
        flex: 1 0 0;
        overflow: auto;
        .rbc-agenda-table{
          .primary,
          .secondary,
          .info,
          .success,
          .danger,
          .warning,
          .secondary{
            background-color: transparent;
          }
          td{
            &:first-child{
              border-radius: 10px 0 0 0;
            }
          }
        }
      }
      .rbc-agenda-view table.rbc-agenda-table {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      }
      .rbc-agenda-view table.rbc-agenda-table{
        thead{
          display: none;
        }
        tbody{
          >tr{
            &:not(:last-child){
              border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
            &:hover{
              box-shadow: 0 15px 40px rgba(146,153,184,.08);
              border-bottom-color: transparent;
            }
            
            >td{
              font-size: 14px;
              padding: 15px 20px;
              vertical-align: top;
            }
            .rbc-agenda-date-cell,
            .rbc-agenda-event-cell{
              font-weight: 500;
              color: ${({ theme }) => theme[theme.mainContent]['dark-text']}
            }
            .rbc-agenda-time-cell{
              span{
                font-size: 13px;
                position: relative;
                padding-left: 20px;
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                &:after{
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  left: 0;
                  width: 10px;
                  height: 10px;
                  content: '';
                  border-radius: 50%;
                }
              }
            }
            &.primary{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${({ theme }) => theme['primary-color']};
                  }
                }
              }
            }
            &.secondary{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${({ theme }) => theme['secondary-color']};
                  }
                }
              }
            }
            &.info{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${({ theme }) => theme['info-color']};
                  }
                }
              }
            }
            &.success{
              .rbc-agenda-time-cell{
                span{
                  &:after{
                    background-color: ${({ theme }) => theme['success-color']};
                  }
                }
              }
            }
          }
        }
        .rbc-agenda-time-cell{
          padding-left: 15px;
          padding-right: 15px;
          text-transform: lowercase;
        }
      }
      .rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {
        border-left-width: 0;
      }
      .rbc-agenda-time-cell {
        text-transform: lowercase;
      }
      .rbc-agenda-time-cell .rbc-continues-after:after {
        content: ' »';
      }
      .rbc-agenda-time-cell .rbc-continues-prior:before {
        content: '« ';
      }
      .rbc-agenda-date-cell,
      .rbc-agenda-time-cell {
        white-space: nowrap;
        font-size: 12px;
      }
      .rbc-agenda-event-cell {
        width: 100%;
        font-size: 12px;
      }
      .rbc-time-column {
        display: flex;
        flex-direction: column;
        min-height: 100%;

      }
      .rbc-time-column .rbc-timeslot-group {
        flex: 1;
      }
      .rbc-timeslot-group {
        min-height: 40px;
        display: flex;
        flex-flow: nowrap;
      }
      .rbc-time-gutter,
      .rbc-header-gutter {
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
      }
      .rbc-label {
        padding: 0 20px;
      }
      .rbc-day-slot {
        position: relative;
      }
      .rbc-day-slot .rbc-events-container {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        margin-right: 10px;
        top: 0;
        .rbc-addons-dnd-resizable{
          display: flex;
          flex-direction: column;
          padding-top: 8px;
          .rbc-event-content{
            order: -1;
            font-weight: 500;
          }
        }
      }
      .rbc-day-slot .rbc-events-container.rbc-is-rtl {
        left: 10px;
        right: 0;
      }
      .rbc-day-slot .rbc-event {
        display: flex;
        max-height: 100%;
        -webkit-flex-flow: column wrap;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        overflow: hidden;
        position: absolute;
      }
      .rbc-day-slot .rbc-event-label {
        flex: none;
        padding-right: 5px;
        width: auto;
      }
      .rbc-day-slot .rbc-event-content {
        width: 100%;
        flex: 1 1 0;
        word-wrap: break-word;
        line-height: 1;
        height: 100%;
        min-height: 1em;
      }
      .rbc-day-slot .rbc-time-slot {
        border-top: 1px solid transparent;
      }
      .rbc-time-view-resources .rbc-time-gutter,
      .rbc-time-view-resources .rbc-time-header-gutter {
        position: -webkit-sticky;
        position: sticky;
        left: 0;
        background-color: white;
        border-right: 1px solid #ddd;
        z-index: 10;
        margin-right: -1px;
      }
      .rbc-time-view-resources .rbc-time-header {
        overflow: hidden;
      }
      .rbc-time-view-resources .rbc-time-header-content {
        min-width: auto;
        flex: 1 0 0;
        flex-basis: 0px;
      }
      .rbc-time-view-resources .rbc-time-header-cell-single-day {
        display: none;
      }
      .rbc-time-view-resources .rbc-day-slot {
        min-width: 140px;
      }
      .rbc-time-view-resources .rbc-header,
      .rbc-time-view-resources .rbc-day-bg {
        width: 140px;
        -webkit-flex: 1 1 0;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex-basis: 0 px;
        -ms-flex-preferred-size: 0 px;
        flex-basis: 0 px;
      }
      .rbc-time-header-content + .rbc-time-header-content {
        margin-left: -1px;
      }
      .rbc-time-slot {
        -webkit-flex: 1 0 0;
        -ms-flex: 1 0 0px;
        flex: 1 0 0;
      }
      .rbc-time-slot.rbc-now {
        font-weight: bold;
      }
      .rbc-day-header {
        text-align: center;
      }
      .rbc-slot-selection {
        z-index: 10;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 75%;
        width: 100%;
        padding: 3px;
      }
      .rbc-slot-selecting {
        cursor: move;
      }
      .rbc-time-view {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        min-height: 0;
        border-radius: 10px;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        .rbc-time-header{
          .rbc-label{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
          }
          .rbc-header{
            border-left: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
          }
          
          .rbc-event{
            position: relative;
            padding: 3px 10px;
            &:after{
              position: absolute;
              left: 0;
              top: 0;
              width: 2px;
              height: 100%;
              border-radius: 3px 0 0 3px;
              content: "";
            }
            &.primary{
              background-color: ${({ theme }) => theme['primary-color']}15;
              color: ${({ theme }) => theme['primary-color']};
              &:after{
                background-color: ${({ theme }) => theme['primary-color']};
              }
            }
            &.secondary{
              background-color: ${({ theme }) => theme['secondary-color']}15;
              color: ${({ theme }) => theme['secondary-color']};
              &:after{
                background-color: ${({ theme }) => theme['secondary-color']};
              }
            }
            &.info{
              background-color: ${({ theme }) => theme['info-color']}15;
              color: ${({ theme }) => theme['info-color']};
              &:after{
                background-color: ${({ theme }) => theme['info-color']};
              }
            }
            &.warning{
              background-color: ${({ theme }) => theme['warning-color']}15;
              color: ${({ theme }) => theme['warning-color']};
              &:after{
                background-color: ${({ theme }) => theme['warning-color']};
              }
            }
            &.success{
              background-color: ${({ theme }) => theme['success-color']}15;
              color: ${({ theme }) => theme['success-color']};
              &:after{
                background-color: ${({ theme }) => theme['success-color']};
              }
            }
          }
        }
        .rbc-time-content{
          .rbc-time-column{
            .rbc-timeslot-group{
              align-items: center;
              justify-content: center;
              border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
              .rbc-time-slot{
                span{
                  font-size: 14px;
                  display: inline-block;
                  color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
              }
            }
          }
          .rbc-day-slot {
            border-left: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
          }
          .rbc-event{
            position: relative;
            padding: 3px 10px;
            &:after{
              position: absolute;
              left: 0;
              top: 0;
              width: 2px;
              height: 100%;
              border-radius: 3px 0 0 3px;
              content: "";
            }
            &.primary{
              background-color: ${({ theme }) => theme['primary-color']}15;
              color: ${({ theme }) => theme['primary-color']};
              &:after{
                background-color: ${({ theme }) => theme['primary-color']};
              }
            }
            &.secondary{
              background-color: ${({ theme }) => theme['secondary-color']}15;
              color: ${({ theme }) => theme['secondary-color']};
              &:after{
                background-color: ${({ theme }) => theme['secondary-color']};
              }
            }
            &.info{
              background-color: ${({ theme }) => theme['info-color']}15;
              color: ${({ theme }) => theme['info-color']};
              &:after{
                background-color: ${({ theme }) => theme['info-color']};
              }
            }
            &.warning{
              background-color: ${({ theme }) => theme['warning-color']}15;
              color: ${({ theme }) => theme['warning-color']};
              &:after{
                background-color: ${({ theme }) => theme['warning-color']};
              }
            }
            &.success{
              background-color: ${({ theme }) => theme['success-color']}15;
              color: ${({ theme }) => theme['success-color']};
              &:after{
                background-color: ${({ theme }) => theme['success-color']};
              }
            }
            .rbc-event-content{
              font-size: 13px;
              margin-bottom: 4px;
            }
          }
        }
      }
      .rbc-time-view .rbc-time-gutter {
        white-space: nowrap;
      }
      .rbc-time-view .rbc-allday-cell {
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        position: relative;
      }
      .rbc-time-view .rbc-allday-cell + .rbc-allday-cell {
        border-left: 1px solid #ddd;
      }
      .rbc-time-view .rbc-allday-events {
        position: relative;
        z-index: 4;
      }
      .rbc-time-view .rbc-row {
        box-sizing: border-box;
      }
      .rbc-time-header {
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        border-radius: 10px 10px 0 0;
        .rbc-time-header-gutter{
          border-radius: 10px 0 0 0;
        }
        .rbc-row-bg{
          .rbc-day-bg{
            &:first-child{
              border-left: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};;
            }
          }
        }
      }
      .rbc-time-header.rbc-overflowing {
      }
      .rbc-rtl .rbc-time-header.rbc-overflowing {
        border-right-width: 0;
      }
      .rbc-time-header > .rbc-row:first-child {
      }
      .rbc-time-header > .rbc-row.rbc-row-resource {
      }
      .rbc-time-header-cell-single-day {
        display: none;
      }
      .rbc-time-header-content {
        flex: 1;
        display: flex;
        min-width: 0;
        flex-direction: column;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .rbc-header{
          border-radius: 0px;
          &:last-child{
            border-radius: 0 10px 0 0;
          }
        }
        .rbc-row{
          background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
      }
      .rbc-rtl .rbc-time-header-content {
        border-left-width: 0;
      }
      .rbc-time-content {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1 0 0%;
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        width: 100%;
        overflow-y: auto;
        position: relative;
      }
      .rbc-time-content > .rbc-time-gutter {
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
      }
      .rbc-time-content > * + * > * {
      }
      .rbc-rtl .rbc-time-content > * + * > * {
        border-left-width: 0;
      }
      .rbc-time-content > .rbc-day-slot {
        width: 100%;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-select: none;
      }
      .rbc-current-time-indicator {
        position: absolute;
        z-index: 3;
        left: 0;
        right: 0;
        height: 1px;
        pointer-events: none;
      }
      button.rbc-button-link{
          border: 0 none;
          background-color: transparent;
      }
`;

const DatePickerWrapper = Styled.div`
.ant-picker{
  padding: 6px 11px 6px;
  width: 100%;
  border-color:${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
  border-radius: 5px;
}
.ant-picker-input > input{
  color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
}
.ant-picker-range .ant-picker-input > input{
  text-align: center;
  font-weight: 500;
}
.ant-picker-range-separator .ant-picker-separator{
  display: flex;
}
`;

const ItemWraper = Styled.div`
    display: flex;
    flex-direction: column;
    .rdrDateDisplay, .rdrMonthAndYearPickers{
        display: none;
    }
    .rdrInputRange {
        padding: 5px 10px;
    }
    .rdrMonth {
        position: relative;
        max-width: 272px;
    }
    .rdrMonthName {
        text-align: center;
        font-size: 18px;
        position: absolute;
        top: -50px;
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 100px;
        font-weight: 400;
        @media only screen and (max-width: 767px) {
          top: -30px;
        }
    }
    .rdrDefinedRangesWrapper{
        .rdrStaticRanges{
            .rdrStaticRange{
                border-bottom: 0 none;
                &:hover,
                &.rdrStaticRangeSelected{
                    span{
                        font-weight: 400;
                        color: ${({ theme }) => theme['primary-color']};
                        background-color: rgba(${({ theme }) => theme[theme.mainContent]['primary-color-rgb']},.10);
                    }
                }
                .rdrStaticRangeLabel{
                    padding: 9px 10px;
                }
            }
        }
    }
    .rdrCalendarWrapper{
      overflow-y: auto;
        .rdrPprevButton,
        .rdrNextButton{
            padding: 0;
            background: transparent;
        }
        .rdrMonthsHorizontal{
            .rdrMonth{
                .rdrMonthName{
                    font-size: 13px;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-color']};
                }
            }
            .rdrDays{
                .rdrSelected, 
                .rdrInRange{                    
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-color']};
                    left: 0 !important;
                    right: 0 !important;
                }
                .rdrStartEdge{
                    right: 0 !important;
                    left: 0 !important;
                }
                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{
                    border-radius: 0px;
                }
                
                .rdrDayEndOfWeek .rdrDayStartPreview,
                .rdrDayEndOfWeek .rdrDayInPreview,
                .rdrDayEndOfMonth .rdrDayStartPreview,
                .rdrDayEndOfMonth .rdrDayInPreview,
                .rdrDayEndOfMonth .rdrInRange, 
                .rdrDayEndOfWeek .rdrInRange, 
                .rdrDayEndOfWeek .rdrStartEdge
                .rdrDayStartOfMonth .rdrInRange, 
                .rdrDayStartOfWeek .rdrInRange{
                    border-radius: 0;
                }

                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{
                    border-radius: 1.042em;
                    color: ${({ theme }) => theme[theme.mainContent]['white-color']} !important;
                }
                
                .rdrDayEndPreview,
                .rdrDayStartPreview,
                .rdrDayInPreview{
                    border: 0 none;
                    background-color: #EFEFFE;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-color']} !important;
                    top: 0;
                    bottom: 0;
                }
                
                .rdrStartEdge, 
                .rdrEndEdge,
                .rdrDayStartPreview,
                .rdrDayEndPreview{
                    background-color: ${({ theme }) => theme['primary-color']};
                }

                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme[theme.mainContent]['dark-color']} !important;
                }
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme[theme.mainContent]['white-color']} !important;
                }
                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme[theme.mainContent]['white-color']};
                }
                .rdrDay{
                    margin-bottom: 3px;
                    .rdrSelected, 
                    .rdrInRange, 
                    .rdrStartEdge, 
                    .rdrEndEdge{
                        top: 0;
                        bottom: 0;

                    }
                    .rdrDayNumber{
                        z-index: 10;
                    }
                    &.rdrDayToday{
                        background-color: ${({ theme }) => theme['primary-color']};
                        color: ${({ theme }) => theme[theme.mainContent]['white-color']};
                        border-radius: 50%;
                        .rdrDayNumber{
                            span{
                                color: ${({ theme }) => theme[theme.mainContent]['white-color']};
                                &:after{
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const BannerCardStyleWrap = Styled.div`
  .ant-carousel{
    .slick-dots{
        &.slick-dots-bottom{
            bottom: -10px;
        }
        li{
            width: auto;
            &.slick-active{
                width: auto;
            }
            button{
                width: 5px;
                height: 5px;
                border-radius: 50%;
            }
        }
    }
  }
`;

const ArticleListWrap = Styled.div`
  .custom-collapse-style {
    .ant-collapse-item{
        border: 0 none;
    }
    .ant-collapse-header{
        display: flex;
        padding: 0 0 0 18px !important;
        padding: ${({ theme }) => (theme.rtl ? '0 18px 0 0' : '0 0 0 18px')} !important;
        background-color: transparent;
        .ant-collapse-expand-icon{
            display: flex;
        }
        .ant-collapse-arrow{
            font-size: 10px;
            margin-right: 8px;
            margin-top: 7px;
            top: 6px;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
        }
    }
    .ant-collapse-content {
        border: 0 none;
        background: transparent;
        .ant-collapse-content-box{
            padding: 0;
        }
    }
  }
    
`;

const BorderLessHeading = Styled.div`

`;
const CardStyle = Styled.div`

`;
const ChartPointHorizontal = Styled.div`
    
`;
const TableDefaultStyle = Styled.div`

`;
const ButtonsGroupWrapper = Styled.div`
    
`;
const BlockButtonsWrapper = Styled.div`
    
`;
const ButtonSizeWrapper = Styled.div`
    
`;
const BtnWithIcon = Styled.div`
    
`;
const AlertList = Styled.div`
    
`;
const AutoCompleteWrapper = Styled.div`
    
`;
const NotificationListWrapper = Styled.div`
    
`;
const TagInput = Styled.div`
    
`;
const PageHeaderWrapper = Styled.div`
    
`;
const MessageStyleWrapper = Styled.div`
    
`;
const BasicFormWrapper = Styled.div`
    
`;
const CardToolbox = Styled.div`
    
`;
const FormGroupWrapper = Styled.div`
    
`;
const FileCardWrapper = Styled.div`
    
`;
const TableWrapper = Styled.div`
    
`;
const DragDropStyle = Styled.div`
    
`;
const ImportStyleWrap = Styled.div`
    
`;
const ExportStyleWrap = Styled.div`
    
`;
const CollapseStyleWrap = Styled.div`
    
`;
const TopToolBox = Styled.div`
    
`;

const KnowledgeDetailsWrap = Styled.div`
  .knowledge-details-custom-collapse {
    border: 0 none;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    > .ant-collapse-item .ant-collapse-header .ant-collapse-arrow{
        top: ${({ theme }) => (!theme.rtl ? '-3px' : '15px')};
    }
    .ant-collapse-item{
      border: 0 none;
      .ant-collapse-header{
        position: relative;
        padding: 0;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .anticon{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #fff;
          box-shadow: 0 2px 2px #92949F30;
          &.anticon-right{
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: auto;
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
          }
          svg,
          img,
          i{
            min-width: 14px;
            color: ${({ theme }) => theme['primary-color']};
          } 
        }
      }
      .ant-collapse-content {
        border: 0 none;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .ant-collapse-content-box{
          padding: 0;
        }
      }
    }
  }
`;

const SocialMediaWrapper = Styled.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`;
const CardChartStyle = Styled.div`
  .cashflow-wrap{
    .ant-card{
        min-height: 500px;
        @media only screen and (max-width: 1599px){
          min-height: 440px;
        }
        @media only screen and (max-width: 1450px){
          min-height: 410px;
        }
    }
  }
  .youtube-subscriber-wrap{
      .ant-card{
          min-height: 470px;
      }
  }
  .hexadash-sales-inner{
    padding-bottom: 48px;
  }
`;
const MixedCardWrap = Styled.div`
  .location-map >div{
    @media only screen and (max-width: 767px){
      height: 100%;
    }
  }
`;

const OverviewCard = Styled.div`
    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    border-radius: 10px;
    padding: 25px 25px 20px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 30px;
    ${({ theme }) => (theme.topMenu ? 'min-height: 595px' : 'min-height: auto')};
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 215px;
        background:linear-gradient(45deg, ${({ theme }) => theme['secondary-color']}, ${({ theme }) =>
  theme['warning-color']});
  ${({ theme }) => (theme.rtl ? 'right' : 'left')}:0;
        top: 0;
        z-index:-1;
    }
    .overview-box{
        .ant-card-body{
            padding: 22px 25px 14px !important;
        }
        .ant-progress{
            margin-bottom: 15px;
        }
        .ant-progress-bg{
            height: 6px !important;
        }
        .overview-box-single{
            h1{
                margin-bottom: 0;
            }
            p{
                color: ${({ theme }) => theme['light-color']};
            }
        }
        .growth-downward,
        .growth-upward{
            span{
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
            }
        }
        .overview-box-percentage{
            font-weight: 500;
        }
    }
    .ant-card{
        box-shadow: 0 10px 30px rgba(146,153,184,0.15);
        .growth-upward{
            color: ${({ theme }) => theme['success-color']};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${({ theme }) => theme['light-gray-color']};
                font-weight: 400;
                font-size: 13px;
            }
        }
        .growth-downward{
            color: ${({ theme }) => theme['danger-color']};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${({ theme }) => theme['light-gray-color']};
                font-weight: 400;
                font-size: 13px;
            }
        }
    }
    .overview-head{
        margin-bottom: 70px;
        h1{
            font-size: 16px;
            font-weight: 500;
            color: #fff;
        }
        .ant-btn-default{
            font-size: 12px;
            background: rgba(255,255,255,0.1);
            padding: 0px 11px;
            border: 0 none;
            color: #fff;
            svg,
            img,
            i{
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
            }
        }
    }
`;

const ProjectHeader = Styled.div`
    margin: 20px 0 10px;
    @media (max-width: 991px){
        margin: 5px 0 5px;
    }
    @media (max-width: 767px){
        margin: 10px 0 10px;
    }
    .ant-page-header.hexadash-page-header-main{
        padding: 18px 30px 15px;
    }
    .ant-page-header-heading{
        .ant-page-header-heading-title{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            @media only screen and (max-width: 767px){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            }
        }
    }
    .ant-page-header-heading-sub-title{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        position: relative;
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
        font-weight: 500;
        &:before{
            position: absolute;
            content: '';
            width: 1px;
            height: 24px;
            background: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
            top:0;
        }
    }
`;

const ProjectSorting = Styled.div`
    margin-bottom: 25px;
    .project-sort-bar{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 -10px;
        @media only screen and (max-width: 1299px){
            // flex-direction: column;
            justify-content: space-between;
        }
        .project-sort-group{
            @media only screen and (max-width: 1150px){
                flex: 0 0 100%;
                display: flex;
                justify-content: center;
            }
        }
        .project-sort-nav,
        .project-sort-search,
        .project-sort-group{
            padding: 0 10px;
        }
        .project-sort-nav{
            @media only screen and (max-width: 1150px){
                margin: 0 auto;
            }
        }

        .project-sort-group{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: auto;
            @media only screen and (max-width: 1299px){
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 0;
            }
            @media only screen and (max-width: 1199px){
                margin: 15px 0 0;
            }
        }
        .project-sort-search{
            @media only screen and (max-width: 1299px){
                margin: 15px 0;
            }
            @media only screen and (max-width: 1199px){
                margin: 0 0 15px;
            }
            .ant-select-selection-search{
                width: 100% !important;
            }
        }
        nav{
            ul{
                li{
                    
                    a{
                        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                        &:hover{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 1500px){
        .project-sort-search{
            .ant-select{
                width: 237px !important;
            }
        }
        .project-sort-group .sort-group{
            .ant-select{
                min-width: 180px;
            }
        }
    }
    @media (min-width: 1201px) and (max-width: 1300px) {
        .project-sort-search{
            .ant-select{
                width: 170px !important;
            }
        }
        .project-sort-group{
            padding: 0 5px;
            
        }
        .project-sort-group .sort-group .layout-style a{
            width: 35px;
            height: 35px;
        }
        .project-sort-group .sort-group .ant-select {
            min-width: 170px;
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 5px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
        }
    }
    @media (max-width: 1199px){
        .project-sort-search{
            flex: 0 0 100%;
            order: 0;
            margin-bottom: 25px;
            display: flex;
            justify-content: center;
            .ant-select{
                width: 350px !important;
            }
        }
        .project-sort-nav{
            order: 1;
            margin: 0 auto;
        }
        .project-sort-group{
            order: 2;
        }
    }
    @media (max-width: 991px){
        .project-sort-group{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: unset;
            flex: 0 0 100%;
            margin-top: 15px;
            .sort-group{
                justify-content: flex-start;
                .layout-style{
                    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: auto;
                }
            }
        }
    }
    @media (max-width: 575px){
        .project-sort-group{
            .sort-group{
                > span{
                    display: none;
                }
            }
        }
    }

    nav{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 5px;
        padding: 9px 20px;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 12px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 11px;
                ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
                &:last-child{
                    ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                }
                a{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    font-weight: 400;
                }
                &.active{
                    a{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
    }
    .ant-select-selection-search-input{
        border: 0 none;
        border-radius: 23px;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        input{
            height: 40px !important;
            border-radius: 23px;
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        }
        .ant-input-suffix{
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
        }
    }
    .ant-select-arrow{
        right: auto;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 11px !important;
        svg{
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
    }
    
    .sort-group{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        display: flex;
        align-items: center;
        justify-content: flex-end;

               
        .ant-select{
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 10px;
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            @media only screen and (max-width: 575px){
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0px;
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
            }
            min-width: 260px;
            .ant-select-selector{
                border: 0 none;
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                .ant-select-selection-item{                    
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                
            }
        }
        .layout-style{
            display: flex;
            align-items: center;
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
            a{
                display: flex;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                &:hover,
                &.active{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                }
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    @media (max-width: 400px){
        .sort-group .ant-select{
            min-width: 200px;
        }
        .project-sort-search{
            .ant-select-auto-complete{
                width: 100% !important;
            }
        }
        .project-sort-nav{
            nav{
                padding: 10px;
            }
            nav ul{
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: -5px;
                li{
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                    margin-bottom: 5px;
                }
            }
        }
    }
`;

const ProjectCard = Styled.div`
    .ant-card-body{
        padding: 0px !important;
    }
    .project-top{
        padding:30px 30px 0px;
    }
    .project-bottom{
        .project-assignees{
            padding: 16px 30px 25px;
        }
    }
    .project-title{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        h1{
            font-size: 16px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: -2px;
            a{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 11px !important;
            }
            a,
            .ant-tag{
                margin: 2px;
            }
            .ant-tag{
                text-transform: uppercase;
                font-size: 10px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                line-height: 18px;
                background: red;
                color: #fff;
                border: 0 none;
                &.early{
                    background: ${({ theme }) => theme['primary-color']};
                }
                &.progress{
                    background: #FF4D4F;
                }
                &.late{
                    background: ${({ theme }) => theme['warning-color']};
                }
                &.complete{
                    background: ${({ theme }) => theme['success-color']};
                }
            }
        }
        .ant-dropdown-trigger{
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
            }
        }
    }
    .project-desc{
        margin: 7px 0 25px 0;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .project-timing{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        div{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            &:last-child{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
            }
            span, strong{
                display: block;
            }
            span{
                font-size: 12px;
                margin-bottom: 2px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            strong{
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .project-progress{
        p{
            margin: 2px 0 0 0;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            font-size: 12px;
        }
        .ant-progress-text{
            font-size: 12px;
            font-weight: 500;
        }
    }
    .ant-progress{
        &.ant-progress-status-success{
            .ant-progress-text{
                svg{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
        }
    }
    .project-assignees{
        border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        margin-top: 17px;
        padding-top: 16px;
        p{
            font-size: 14px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        ul{
            margin: -3px;
            padding: 0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            li{
                list-style: none;
                padding: 3px;
                img{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
        }
    }
`;

const ProjectPagination = Styled.div`
    .ant-pagination{
        display: flex;
        justify-content: flex-end;
        @media only screen and (max-width: 767px) {
            justify-content: center;
        }
    }
`;

const ProjectListTitle = Styled.div`
    h1{
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 5px;
        a{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    p{
        margin: 0;
        font-size: 12px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
`;

const ProjectListAssignees = Styled.div`
    ul{
        margin: -3px;
        padding: 0;
        display: flex;
        align-items: center;
        li{
            list-style: none;
            padding: 3px;
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }
`;

const ProjectList = Styled.div`

    .project-list-progress{
        p{
            margin: 4px 0 0 0;
            font-size: 13px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .date-started,
    .date-finished{
        font-weight: 500;
    }
    .ant-table{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .ant-table-thead{
            tr{
                th{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                    border-bottom-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                }
            }
        }
        .ant-table-tbody{
            tr{
                &:hover{
                    td{
                        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
                .ant-tag{
                    &.progress{
                        background-color: #FF4D4F;
                    }
                    &.late{
                        background-color: ${({ theme }) => theme['warning-color']};
                    }
                    &.complete{
                        background-color: ${({ theme }) => theme['success-color']};
                    }
                }
                td{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    border-bottom-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                }
            }
            .ant-progress{
                &.ant-progress-status-success{
                    .ant-progress-text{
                        svg{
                           color: ${({ theme }) => theme['success-color']};
                        }
                    }
                }
            }
            .ant-dropdown-trigger {
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    .ant-table-container table > thead > tr th{
        font-weight: 400;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    .ant-table-container table > thead > tr th:first-child{
        border-radius: ${({ theme }) => (theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
        ${({ theme }) => (!theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
    }
    .ant-table-container table > thead > tr th:last-child{
        border-radius: ${({ theme }) => (!theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
    }
    .ant-dropdown-trigger{
        svg{
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
    }
`;

const ProjectDetailsWrapper = Styled.div`
    .ant-page-header{
        padding-top: 30px;
    }
    .project-header{
        display: flex;
        align-items: center;
        margin: 8px 0 16px;
        @media only screen and (max-width: 800px) {
            flex-wrap: wrap;
        }
        @media only screen and (max-width: 575px) {
            flex-flow: column;
            button{
                margin: 15px 0 0;
            }
        }
        h1{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
            margin-bottom: 0;
            font-size: 20px;
            @media only screen and (max-width: 800px) {
                margin-bottom: 10px;
            }
            @media only screen and (max-width: 575px) {
                margin: 0;
            }
        }
        button{
            font-size: 12px;
            font-weight: 500;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            height: 35px;
            padding: 0px 13.5px;
            &.btn-markComplete{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                transition: .25s;
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-deep']};
                &:hover{
                    color: ${({ theme }) => theme['primary-color']};
                    svg{
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
    }
    .project-action{
        .project-edit,
        .project-remove{
            border-radius: 6px;
            background: #fff;
            height: 35px;
            padding: 0 15px;
            font-size: 12px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 5px;
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            box-shadow: 0 3px 5px ${({ theme }) => theme[theme.mainContent]['gray-text']}05;
            svg,
            img{
                width: 14px;
                height: 14px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
            }
        }
        .project-edit{
            color: ${({ theme }) => theme['primary-color']};
        }
        .project-remove{
            color: ${({ theme }) => theme['danger-color']};
        }
    }
    .project-progress{
        border-radius: 10px;
        background: ${({ theme }) => theme['success-color']};
        padding: 20px 25px 20px;
        margin-bottom: 25px;
        h3{
            color: #fff;
        }
        
        .ant-progress{
            .ant-progress-inner{
                background: rgba(255,255,255, 0.2);
            }
            .ant-progress-bg{
                background: rgb(255, 255, 255);
            }
            .ant-progress-text{
                color: #fff;
                font-weight: 500;
            }
        }
    }
    .about-project-wrapper{
        min-height: 485px;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 10px;
        margin-bottom: 25px;
        @media only screen and (max-width: 1199px) {
            min-height: auto;
        }
    }
    .state-single{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        &:last-child{
            margin-bottom: 0;
        }
        > div{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        }
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 12px;
            background: rgba(95,99,242,0.1);
            svg{
                width: 25px;
                height: 25px;
            }
        }
        h1{
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 3px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            margin: 0;
        }
        .color-primary{
            a{
                background: rgba(251,53,34,0.1);
                svg{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
        .color-secondary{
            a{
                background: rgba(95,99,242,0.1);
                svg{
                    color: ${({ theme }) => theme['secondary-color']};
                }
            }
        }
        .color-success{
            a{
                background: rgba(32,201,151,0.1);
                svg{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
        }
        .color-warning{
            a{
                background: rgba(250,139,12,0.1);
                svg{
                    color: ${({ theme }) => theme['warning-color']};
                }
            }
        }
    }
    .about-content{
        p{
            font-size: 15px;
            line-height: 25px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .about-project{
        margin: 42px -40px 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        @media only screen and (max-width: 991px) {
            margin: 42px -25px 0;
        }
        @media only screen and (max-width: 575px) {
            margin: 42px -15px 0;
        }
        div{
            margin: 0 40px;
            @media only screen and (max-width: 991px) {
                margin: 0 25px;
            }
            @media only screen and (max-width: 575px) {
                flex: 0 0 38%;
                margin: 0 15px;
            }
            span{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                font-size: 13px;
                display: block;
                margin-bottom: 3px;
            }
            p{
                font-weight: 500;
            }
            .color-primary{
                color: ${({ theme }) => theme['primary-color']};
            }
            .color-danger{
                color: ${({ theme }) => theme['danger-color']};
            }
        }
    }
    .project-users-wrapper{
        .btn-addUser{
            padding: 0px 12.6px;
            font-size: 12px;
            font-weight: 500;
            transition: .25s;
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            &:hover{
                svg{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
        i +span, svg +span, img +span {
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
        }
    }
    .project-users{
        min-height: 368px;
        .porject-user-single{
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            &:last-child{
                margin-bottom: 0;
            }
            & > div{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            }
            div{
                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    object-fit: cover;
                    display: block;
                }
                h1{
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 2px;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                p{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    margin: 0;
                }
            }
        }
    }

    .file-list{
        min-height: 385px;
        .file-list__single{
            justify-content: space-between;
            align-items: center;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                display: block;
                font-size: 12px;
                line-height: 1.42;
                &.file-name{
                    font-size: 14px;
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                &.file-size{
                    margin: 2px 0;;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                &.file-content-action{
                    a{
                        font-weight: 500;
                        color: ${({ theme }) => theme['primary-color']};
                    }
                    a + a{
                        margin-left: 8px;
                    }
                }
            }
        }
        .file-single-info{
            width: 50%;
            align-items: center;
            .file-single-logo{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
                img{
                    max-width: 42px;
                }
            }
        }
        .file-single-action{
            .ant-dropdown-trigger {
                color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                svg{
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }

    .dropdown-more{
        a{
            font-size: 13px;
            svg,
            i.
            img{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
            }
        }
    }
`;

const TaskLists = Styled.div`
    .ant-card{
        .ant-card-head{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            margin-bottom: 0;
        }
        .ant-card-body{
            padding: 0 !important;
        }
    }
    nav{
        a{
            font-size: 14px;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            position: relative;
            padding: 20px 0px;
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 18px;
            }
            &:before{
                position: absolute;
                content: '';
                width: 100%;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                bottom: -1px;
                height: 1px;

            }
            &.active{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                &:before{
                    background: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
        }
    }
    .ant-table{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    table{
        margin-top: 15px;
        .ant-checkbox.ant-checkbox-checked{
            .ant-checkbox-inner{
                background: ${({ theme }) => theme['success-color']};
                border-color: ${({ theme }) => theme['success-color']};
            }
            &:after{
                border-color: ${({ theme }) => theme['success-color']};
            }
        }
        thead{
            display: none;
        }
        tr{
            th{
                background: #fff;
                border-bottom: 0;
                padding: 10px;
                &:first-child{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 25px;
                }
                .ant-checkbox-indeterminate {
                    .ant-checkbox-inner{
                        &:after{
                            background: ${({ theme }) => theme['success-color']};
                        }
                    }
                }
            }
            &:hover{
                td{
                    background: #fff;
                }
            }
        }
        .ant-table-tbody{
            > tr.ant-table-row{
                &.ant-table-row-selected{
                    > td{
                        background: #fff;
                    }
                    .task-title{
                        text-decoration: line-through;
                    }
                }
                > td{
                    padding: 10px;
                    border-bottom: 0;
                    text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
                    &:first-child{
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 25px;
                    }
                    &:last-child{
                        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 25px;
                    }
                    .task-title{
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    }
                    .task-created{
                        font-size: 12px;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    }
                    .ant-checkbox{
                        &:hover{
                            .ant-checkbox-inner{
                                border-color: ${({ theme }) => theme['success-color']};
                            }
                        }
                    }
                }
                &:hover{
                    box-shadow: 0 15px 50px ${({ theme }) => theme[theme.mainContent]['gray-text']}20;
                    > td{
                        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
                    }
                }
            }
        }
    }

    .tasklist-action{
        margin: 18px 25px 25px;
        button{
            width: 100%;
            text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
            justify-content: flex-start;
            font-size: 12px;
            font-weight: 500;
            &.ant-btn-primary{
                border-radius: 6px;
                background: ${({ theme }) => theme['primary-color']}10;
            }
        }
    }
`;

const TasklistAction = Styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 -10px;
    span, img, div{
        display: block;
        margin: 0 10px;
        line-height: normal;
    }
    span, a{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .task-created{
        color: #9299b8 !important;
    }
    .task-move{
        svg,
        i{
            width: 16px;
            height: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
    }
    .task-action{
        svg,
        i{
            width: 16px;
            height: 16px;
        }
    }
`;

const ActivitiesWrapper = Styled.div`
    padding: 25px;
    min-height: 435px;
    .activity-block{
        &:not(:last-child){
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
    }
    .activity-dateMeta{
        height: 100%;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        @media only screen and (max-width: 575px) {
            height: auto;
            padding: 30px 0px;
            margin-bottom: 25px;
        }
        h1{
            font-size: 18px;
            margin-bottom: 0px;
        }
        .activity-month{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    .activity-single{
        &:not(:last-child){
            margin-bottom: 25px;
        }
        .activity-single__figure{
            min-width: 76px;
        }
        .activity-icon{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            margin: ${({ theme }) => (theme.rtl ? '4px 0 0 10px' : '4px 10px 0 0')};
            &.bg-primary{
                background: ${({ theme }) => theme['primary-color']}15;
                color: ${({ theme }) => theme['primary-color']};
            }
            &.bg-secondary{
                background: ${({ theme }) => theme['secondary-color']}15;
                color: ${({ theme }) => theme['secondary-color']};
            }
            &.bg-success{
                background: ${({ theme }) => theme['success-color']}15;
                color: ${({ theme }) => theme['success-color']};
            }
            svg{
                width: 16px;
                height: 16px;
            }
        }
        img{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
        }
        .activity-title{
            font-size: 14px;
            font-weight: 500;
            margin: -4px 0 0;
            span{
                font-weight: 400;
                margin: 0 2px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        .activity-timeMeta{
            font-size: 12px;
            margin-bottom: 0;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
    }
`;

const WizardWrapper = Styled.div`
    color:#eee;
    &.hexadash-wizard-page{
        padding: 25px 15px;
    }
    &.bordered-wizard{
        padding: 0;
    }
    .steps-action button.btn-next svg {
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .steps-action button.btn-prev svg {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .ant-steps-vertical > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail{
        @media only screen and (max-width: 575px) {
            display: none;
        }
    }
    .ant-steps {
        @media only screen and (max-width: 767px) {
            flex-flow: column;
            align-items: center;
        }
    }
    .ant-steps-item-container{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 50%;
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
        @media only screen and (max-width: 991px) {
            width: 100%;
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
        }
        @media only screen and (max-width: 767px) {
            font-size: 15px;
        }
        .ant-steps-item-tail{
            @media only screen and (max-width: 480px) {
                background: #C5CAE1;
                top: 35px !important;
                padding: 20px 0 8px !important;
            }
        }
        .ant-steps-item-content{
            @media only screen and (max-width: 480px) {
                min-height: auto !important;
            }
        }
    }
    .steps-content{
        margin-top: 72px !important;
        @media only screen and (max-width: 1599px) {
            min-height: 252px !important;
        }
        @media only screen and (max-width: 1199px) {
            margin-top: 45px !important;
        }
        @media only screen and (max-width: 575px) {
            margin-top: 30px !important;
        }
    }
    .ant-steps-item-container{
        position: relative;
        &:after{
            position: absolute;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 100%;
            top: 35px;
            color: #333;
            background-image: url(${require('../static/img/progress.png')});
            width: 110%;
            height: 6px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-color: transparent !important;
            content: '';
            @media only screen and (max-width: 1399px) {
                width: 120%;
            }
            @media only screen and (max-width: 991px) {
                display: none;
            }
        }
        .ant-steps-item-tail{
            &:after{
                height: 80%;
            }
        }
    }
    .wizard-step-item{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../static/img/progress.png')});
            }
        }
    }
    .wizard-steps-item-active{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../static/img/progress-active.png')});
            }
        }
    }
    .success-step-item,
    .ant-steps-item-finish{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../static/img/progress-success.png')});
            }
        }
    }
    .ant-steps-item{
        padding: ${({ theme }) => (theme.rtl ? '0 0 0 25px !important' : '0 25px 0 0 !important')} ;
        @media only screen and (max-width: 767px) {
            padding: 0 !important;
            &:not(:last-child){
                margin-bottom: 20px;
            }
        }
        &:last-child{
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px !important;
            @media only screen and (max-width: 767px) {
                padding: 0 !important;
            }
            .ant-steps-item-container{
                &:after{
                    display: none;
                }
            }
        }
        &:last-child{
            @media only screen and (max-width: 991px) {
                flex: 1 1;
            }
        }
        .ant-steps-item-title{
            font-size: 15px;
            font-weight: 500;
            margin-top: 8px;
            padding: ${({ theme }) => (theme.rtl ? '0 10px 0 0' : '0 0 0 10px')};
            
            color: ${({ theme }) => theme[theme.mainContent]['light-text']}!important;
            @media only screen and (max-width: 1210px) {
                padding: ${({ theme }) => (!theme.rtl ? '0 0 0 20px' : '0 20px 0 0')};
            }
            @media only screen and (max-width: 767px) {
                padding: 0;
            }
            &:after{
                display: none;
                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
        }
        .ant-steps-item-icon{
            width: 50px;
            height: 50px;
            line-height: 50px;
            border: 0 none;
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            box-shadow: 10px 0 20px ${({ theme }) => theme[theme.mainContent]['gray-text']}15;
            @media only screen and (max-width: 767px) {
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                width: 35px;
                height: 35px;
                line-height: 35px;
            }
            .ant-steps-icon{
                font-size: 16px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                @media only screen and (max-width: 767px) {
                    font-size: 15px;
                }
            }
        }
        &.ant-steps-item-active{
            .ant-steps-item-icon{
                background-color: ${({ theme }) => theme['primary-color']};
                .ant-steps-icon{
                    color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                }
                svg{
                    color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                }
            }
            .ant-steps-item-title{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']} !important;
            }
            &.ant-steps-item-finish{
                .ant-steps-item-title{
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']}; !important;
                }
            }
        }
        &.ant-steps-item-finish{
            .ant-steps-item-icon{
                background: ${({ theme }) => theme['success-color']} !important;
                .ant-steps-icon{
                    color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                }
                .ant-steps-finish-icon{
                    svg{
                        color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                    }
                }
                
            }
        }
    }
    .basic-form-inner{
        width: 580px;
        @media only screen and (max-width: 575px){
            width: 100%
        }
        .ant-form-item{
            .ant-input-password.ant-input-affix-wrapper{
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
            }
        }
        .ant-form-item-label{
            label{
                font-weight: 400;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
        .ant-form-item-control-input{
            .ant-input{
                padding: 12px 20px;
            }
        }
    }
    .steps-action{
        .btn-next{
            &:focus{
                background-color: ${({ theme }) => theme['primary-color']};
            }
        }
        button.ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &:hover{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
    }
    .atbd-form-checkout{
        .ant-input-affix-wrapper-rtl{
            input[type="password"]{
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
            }
        }
       h1{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 46px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            @media only screen and (max-width: 991px){
                font-size: 18px;
                margin-bottom: 22px;
            }
            @media only screen and (max-width: 479px){
                font-size: 16px;
            }
       }
       .ant-form-item-label{
           label{
               font-size: 15px;
           }
       }
       input::placeholder{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
       }
       .input-message{
           margin-top: -6px;
           display: inline-block;
           font-size: 13px;
           color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
       }
       .shipping-selection{
           > .ant-card{
               .ant-card-body{
                    border: 1px solid ${({ theme }) => theme['border-color-light']};
               }
           }
           .ant-card{
               .ant-card{
                   margin-bottom: 0 !important;
               }
           }
           .ant-radio-group {
               .ant-radio-wrapper{
                    display: flex;
                    align-items: flex-start;
                    span + span{
                        width: 100%;
                    }
                   .ant-radio{
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                    }
               }
           }
           .ant-form-item-control-input-content{
                input{
                    @media only screen and (max-width: 479px) {
                        width: 100% !important;
                        margin-bottom: 6px;
                    }
                }
               .input-leftText{
                   ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                   @media only screen and (max-width: 479px) {
                        display: block;
                        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0px;
                    }
               }
           }
           .shipping-selection__card{
               .ant-card .ant-card{
                   border: 0 none;
                   border-radius: 20px;
                   box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
               }
               .ant-radio-wrapper{
                    .ant-radio{
                        margin-top: 30px;
                    }
                    span + span{
                        padding: 0;
                    }
               }
               .cvv-wrap{
                   input{
                       max-width: 120px;
                   }
                   .input-leftText{
                       color: ${({ theme }) => theme['color-info']};
                   }
               }
            }
           .shipping-selection__paypal{
               margin-bottom: 20px;
               .ant-radio-wrapper{
                   span + span{
                       display: flex;
                       justify-content: space-between;
                       @media only screen and (max-width: 375px){
                            img{
                                display: none;
                            }
                        }
                   }
               }
           }
           .shipping-selection__paypal,
           .shipping-selection__cash{
                .ant-radio-wrapper{
                    align-items: center;
                    span + span{
                        font-size: 15px;
                        font-weight: 500;
                        padding: 0 25px;
                        display: flex;
                        align-items: center;
                        border-radius: 10px;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                    }
                }
           }
           .supported-card{
               align-items: center;
               justify-content: space-between;
               margin-bottom: 20px;
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
                span{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
               .supported-card_logos{
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                   img + img{
                       ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                   }
               }
           }
       }
   }
   .profile-hints{
       p{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
           font-size: 15px;
           span{
               color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
           }
       }
   }
   .atbd-finish-order{
       max-width: 540px;
       margin: 0 auto;
       padding: 30px;
       min-height: 248px;
       border-radius: 6px;
       border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
       h1,
       h2,
       h3,
       h4,
       h5,
       h6{
            margin-bottom: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
       }
       .ant-checkbox{
           &:hover{
               .ant-checkbox-inner{
                    border-color: ${({ theme }) => theme['success-color']};
               }
           }
       }
       .ant-checkbox-checked{
           &:after{
                border-color: ${({ theme }) => theme['success-color']};
           }
           .ant-checkbox-inner{
                background-color: ${({ theme }) => theme['success-color']};
                border-color: ${({ theme }) => theme['success-color']};
           }
       }
       .ant-checkbox-input{
           &:focus + .ant-checkbox-inner{
            border-color: ${({ theme }) => theme['success-color']};
           }
       }
       .checkbox-label{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
            font-size: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
       }
   }
   .atbd-review-order{
       > .ant-card{
           > .ant-card-body{
               border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
           }
       }
       h1{
           font-size: 20px;
           font-weight: 500;
           margin-bottom: 45px;
           color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
           @media only screen and (max-width: 479px) {
                font-size: 16px;
                margin-bottom: 25px;
            }
       }
       .atbd-review-order__single{
           .ant-card{
               .ant-card-body{
                   background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
               }
           }
           .ant-radio-wrapper{
                display: flex;
                align-items: flex-start;
            }
            .ant-card{
                .ant-card-body{
                    padding: 25px !important;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px ${({ theme }) => theme['gray-solid']}10;
                }
            }
            h1{
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 30px;
            }
            .method-info{
                margin-top: -2px;
                font-weight: 500;
                color: color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                img{
                    margin-top: -4px;
                    max-width: 40px;
                }
            }
            .btn-addCard{
                font-weight: 500
                display: inline-block;
                font-size: 13px;
                margin-top: 20px;
                color: ${({ theme }) => theme['info-color']};
            }
            
            .cart-single{
                .cart-single__info{
                    h1{
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        margin-bottom: 8px;
                    }
                }
            }
       }
        .atbd-review-order__shippingTitle{
            h1{
                display: flex;
                margin-bottom: 30px;
                justify-content: space-between;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
                a{
                    font-size: 14px;
                    display: inline-flex;
                    align-items: center;
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                    svg{
                        width: 14px;
                        height: 14px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                    }
                }
            }
        }
        .atbd-review-order__shippingInfo{
            .shipping-info-text{
                margin: -4px 12px 0;
                h1{
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                p{
                    font-size: 15px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            .btn-addNew{
                font-size: 13px;
                font-weight: 500;
                color: ${({ theme }) => theme['info-color']};
            }
        }
   }
   .invoice-summary-inner{
        .summary-total{
            margin-bottom: 0;
        }
   }
   .summary-list{
        margin: 20px 0 10px !important;
        .summary-list-text{
            font-size: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
   }
   .checkout-successful{
       text-align: center;
        .ant-card {
            box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
            .ant-card{
                padding: 25px;
                    margin-bottom: 0 !important;
            }
        }
        .icon-success{
            width: 34px;
            height: 34px;
            margin: 0 auto 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
            background: ${({ theme }) => theme['success-color']};
            svg{
                width: 18px;
            }
        }
        h1{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
            margin-bottom: 0;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
   }
`;

const FormComponentsWrap = Styled.div`
    .sDash_datepicker-list{
        .ant-picker.ant-picker-range{
            width: 100%;
        }
    }
    .sDash_editor{
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        border-radius: 4px;
        .EditorToolbar__root___3_Aqz{
            padding: 12px 20px 0;
        }
        .DraftEditor-root{
            min-height: 100px;
            .public-DraftEditorPlaceholder-root{
                padding: 12px 20px 0;
            }
        }
        select{
            margin-top: -4px;
        }
        .Dropdown__value___34Py9{
            &:after,
            &:before{
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: auto;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px;
            }
        }
    }
    .sDash_slider-list{
        margin: -25px 0;
        .ant-slider{
            margin: 25px 0;
        }
    }
`;

const RevenueGeneratedWrapper = Styled.div`
    .custom-progress {
    .progress-bg-primary{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme['primary-color']};
        }
    }
    .progress-bg-info{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme['info-color']};
        }
    }
    .progress-bg-success{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme['success-color']};
        }
    }
    .progress-bg-violet{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme['secondary-color']};
        }
    }
    .progress-bg-warning{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme['warning-color']};
        }
    }
    .progress-bg-google{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme['primary-color']};
        }
    }
    .progress-bg-facebook{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme[theme.mainContent].info};
        }
    }
    .progress-bg-twitter{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme[theme.mainContent].success};
        }
    }
    .progress-bg-linkedin{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme[theme.mainContent].secondary};
        }
    }
    .progress-bg-instagram{
        .ant-progress-bg{
            background-color: ${({ theme }) => theme[theme.mainContent].warning};
        }
    }
    }
  
`;

const TaskListStyle = Styled.div`
    .hexadash-tassklist-wrap{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 10px;
        min-height: 220px;
    }
    .hexadash-tasklist-head{
        .hexadash-tasklist-head__title{
            font-size: 16px;
            font-weight: 500;
            padding: 15px 30px;
            margin-bottom: 0;
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
    }
    .hexadash-tasklist-body{
        .hexadash-tasklist{
            .hexadash-tasklist-item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 7.5px 0;
                @media only screen and (max-width: 575px){
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 7.5px 0 20px;
                }
                .hexadash-tasklist-item__content{
                    margin-right: 10px;
                }
            }
            .hexadash-tasklist-item__title{
                font-size: 16px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                .ant-checkbox + span{
                    position: relative;
                    top: -2px;
                    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
                }
                .ant-checkbox-wrapper{
                    &:hover{
                        .ant-checkbox-inner{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    span{
                        font-size: 15px;
                        font-weight: 400;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    }
                    .ant-checkbox-input{
                        &:focus + .ant-checkbox-inner{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    .ant-checkbox-inner{
                        width: 18px;
                        height: 18px;
                        &:after{
                            width: 5px;
                            height: 9px;
                            top: 48%;
                            left: 25.5%;
                        }
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                        .ant-checkbox-inner{
                            background-color: ${({ theme }) => theme['success-color']};
                            border-color: ${({ theme }) => theme['success-color']};
                            &:after{
                                border-color: #fff;
                            }
                        }
                    }
                }
            }
            .hexadash-tasklist-item__text{
                padding-left: 30px;
                p{
                    font-size: 14px;
                    font-weight: 400;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
            .hexadash-tasklist-item__action{
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 20px;
                @media only screen and (max-width: 575px){
                    margin-top: 20px;
                    margin-left: -10px;
                    padding-left: 30px;
                }
                svg,
                i{
                    width: 16px;
                    height: 16px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                }
                .task-favourite{
                    line-height: 1;
                    &.active{
                        svg,
                        i{
                            color: ${({ theme }) => theme['warning-color']}; 
                        }
                    }
                    svg,
                    img{
                        position: relative;
                        top: -2px;
                        width: 16px;
                        height: 16px;
                    }
                }
                .ant-dropdown-trigger {
                    line-height: 1;
                }
                .task-favourite{
                    cursor: pointer;
                }
                a {
                    display: inline-flex;
                    align-items: center;
                    margin: 0 10px;
                }
                .hexadash-edit{
                    &:hover{
                        svg,
                        i{
                            color: ${({ theme }) => theme['info-color']}; 
                        }
                    }
                }
                .hexadash-delete{
                    &:hover{
                        svg,
                        i{
                            color: ${({ theme }) => theme['danger-color']}; 
                        } 
                    }
                }
            }
        }
        .hexadash-tasklist-empty{
            min-height: 215px;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                font-size: 18px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            }
        }
    }
    .hexadash-modal-actions{
        display: flex;
        justify-content: flex-end;
        button{
            margin: 5px;
        }
    }
`;

const GmapWraper = Styled.div`
    width: ${(props) => props.width}; 
    height: ${(props) => props.height};
    position: relative;
    .leaflet-container {
        width: ${(props) => props.width}; 
        height: ${(props) => props.height};
    }
    .leaflet-bar{
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
        a,
        a:hover{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        
    }
`;
export {
  GlobalUtilityStyle,
  TestimonialStyleWrapper,
  FaqWrapper,
  PaginationStyle,
  CollapseStyle,
  CommentStyle,
  ItemWraper,
  KnowledgebaseTopWrap,
  BorderLessHeading,
  TableDefaultStyle,
  ButtonsGroupWrapper,
  BlockButtonsWrapper,
  ButtonSizeWrapper,
  BtnWithIcon,
  AlertWrap,
  AlertList,
  AutoCompleteStyled,
  AutoCompleteWrapper,
  CalendarWrapperPage,
  DatePickerWrapper,
  NotificationListWrapper,
  TagInput,
  PageHeaderWrapper,
  MessageStyleWrapper,
  BasicFormWrapper,
  CardToolbox,
  FormGroupWrapper,
  DragDropStyle,
  BannerCardStyleWrap,
  FileCardWrapper,
  TableWrapper,
  ImportStyleWrap,
  ExportStyleWrap,
  CardStyle,
  ChartPointHorizontal,
  CollapseStyleWrap,
  TopToolBox,
  ChangelogWrapper,
  ArticleListWrap,
  KnowledgeDetailsWrap,
  SocialMediaWrapper,
  CardChartStyle,
  MixedCardWrap,
  OverviewCard,
  ProjectHeader,
  ProjectSorting,
  ProjectCard,
  ProjectPagination,
  ProjectListTitle,
  ProjectListAssignees,
  ProjectList,
  ProjectDetailsWrapper,
  TaskLists,
  TasklistAction,
  ActivitiesWrapper,
  WizardWrapper,
  FormComponentsWrap,
  RevenueGeneratedWrapper,
  TaskListStyle,
  GmapWraper,
};
