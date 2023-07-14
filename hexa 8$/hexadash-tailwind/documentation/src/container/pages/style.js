import Styled from 'styled-components';

const PricingCard = Styled.div`
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 10px;
  box-shadow: 0px 5px 20px #9299B830;
  padding: 30px;
  .pricing-badge{
    height: 32px;
    padding: 6px 22.6px;
  }
  .price-amount{
    font-size: 36px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    .currency{
      font-size: 16px;
      font-weight: 600;
      top: -12px;
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 2px;
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
    }
    .pricing-validity{
      font-size: 13px;
      font-weight: 400;
      bottom: 0;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -2px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
  }
  .package-user-type{
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
  .pricing-title{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }
  button{
    padding: 0px 29.32px;
    height: 44px;
    border-radius: 6px;
    &.ant-btn-white{
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
      span{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      &:hover{
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
      }
    }
  }
`;

const DocumentationStyleWrap = Styled.div`
  .ninjadash-template-documentation{
    h2{
      font-size: 24px;
      font-weight: 600;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
      font-weight: 600;
    }
    p{
      font-size: 18px;
      line-height: 1.75;
      margin-bottom: 30px;
    }
    strong{
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    ul{
      margin-bottom: 30px;
      li{
        position: relative;
        padding-left: 20px;
        font-size: 18px;
        &:after{
          position: absolute;
          left: 0;
          top: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          content: '';
          background-color: #8231D3;
        }
        &:not(:last-child){
          margin-bottom: 6px;
        }
      }
    }
    .ant-alert-with-description{
      p{
        font-size: 16px;
        margin-bottom: 0;
      }
    }
    code{
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme['primary-color']};
    }
    .docs-highlighter{
      code{
        font-weight: 500;
        font-size: 16px;
      }
    }
    img{
      width: 100%;
    }
  }
  .card-table{
    .table-responsive{
      display: block;
      width: 100%;
      overflow-x: auto;
    }
  }
  table{
    width: 100%;
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    thead{
      tr{
        th{
          text-align: left;
          font-weight: 600;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
          border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
      }
    }
    tbody{
      tr{
        &:not(:last-child){
          td{
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
          }
        }
      }
    }
    tr{
      th,
      td{
        font-size: 16px;
        padding: 10px 15px;
        &:not(:last-child){
          border-right: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
      }
    }
  }
`;

const PageScroller = Styled.div`
  
`;

const SiteMapWrap = Styled.div`
  // Ninjadash sitemap
.ninjadash-sitemap { 
    a {
        /* color: var(--#{$variable-prefix}body-color); */
        display: block;
    }
    .ninjadash-sitemap__parent-title {
        a {
            padding-left: 0;

            &:before {
                display: none;
            }
        }

        &:before {
            display: none;
        }
    }
    .ninjadash-sitemap__first-list {
        position: relative;
        padding-top: 10px;
        &:before {
            content: "";
            border-left: 2px dashed ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            position: absolute;
            top: 0;
            height: 100%;
            bottom: 0;
            left: 0;
        }
        .ninjadash-sitemap__list-wrap, li {
            a {
                position: relative;
                padding: 10px 16px 4px 76px;
                &::before {
                    content: "";
                    width: 64px;
                    border-top: 2px dashed ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                }
            }
        }
        .ninjadash-sitemap__second-list, .ninjadash-sitemap_ninjadash-sitemap__third-list {
            margin-left: 62px;
            
        }

        .ninjadash-sitemap_ninjadash-sitemap__third-list, .ninjadash-sitemap__second-list {
            position: relative;
            li {
                position: relative;
                &:before {
                    content: "";
                    height: 100%;
                    border-left: 2px dashed ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin: 0px auto;
                }
                &:last-child {
                    &::before {
                        height: 13px;
                    }
                }
            }
        }
        
        &:last-child {
            &::before {
                height: 25px;
            }
        }
    }
}
`;

const ListGroup = Styled.div`
  margin: 28px 0 15px;
  min-height: 210px;
  .list-single{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    &:not(:last-child){
      margin-bottom: 12px;
    }
    .icon{
      display: inline-block;
      margin: ${({ theme }) => (theme.rtl ? '0px 0 -4px 10px' : '0px 10px -4px 0')};
    }
  }
`;

const Badge = Styled.span`
  display: inline-block;
  margin-bottom: 32px;
  padding: 5px 20px;
  border-radius: 16px;
  background: ${({ type, theme }) => theme[`${type}-color`]}10;
  color: ${({ type, theme }) => theme[`${type}-color`]};
  font-size: 13px;
  font-weight: 500;
  &.badge-dark{
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
  }
`;

const GalleryNav = Styled.nav`
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  margin-bottom: 25px;
  border-radius: 10px;
  padding: 0px 16px;
  @media only screen and (max-width: 767px){
    padding: 0 12px;
  }
  @media only screen and (max-width: 575px){
    text-align: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      display: inline-block;
      a {
        position: relative;
        display: block;
        padding: 15px 0;
        margin: 0 12px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        @media only screen and (max-width: 767px){
          margin: 0 10px;
        }
        &:after{
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          border-radius: 10px;
          opacity: 0;
          visibility: hidden;
          background: ${({ theme }) => theme[theme.mainContent]['menu-active']};
          content: "";
        }
        &.active{
          color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
          &:after{
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
  }
`;

const GalleryCard = Styled.nav`
  border-radius: 10px;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};;
  box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}03;
  figure{
    margin-bottom: 0;
  }
  .gallery-single-content{
    padding: 18px 25px 20px;
    .gallery-single-title{
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 2px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    p{
      font-size: 13px;
      margin-bottom: 0px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
  }
`;

const UsercardWrapper = Styled.nav`
  .user-card-pagination{
    margin: 15px 0 40px 0;
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
    @media only screen and (max-width: 991px){
      text-align: center;
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
    border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    margin-top: 0 !important;
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      text-align: center;
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

const UserCard = Styled.div`
  text-align: center;
  .user-card{
    &.theme-list{
      .ant-card-body{
        padding: 30px 25px 30px 30px !important;
        @media only screen and (max-width: 479px){
          padding: 25px 20px 25px 20px !important;
        }
      }
      figure{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media only screen and (max-width: 479px){
          flex-flow: column;
        }
        img{
          max-width: 80px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}:20px;
          @media only screen and (max-width: 479px){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}:0px;
          }
        }
      }
      figcaption{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
        width: 100%;
        @media only screen and (max-width: 379px){
          flex-flow: column;
        }
      }
      .card__content{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        p{
          max-width: 400px;
          font-size: 15px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .card__designation{
            font-size: 13px;
            margin-bottom: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        .card-text{
          margin-bottom: 12px;
        }
        .card-info{
          margin-bottom: 0;
          .user-meta{
            font-size: 14px;
            strong{
              font-weight: 600;
              color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
          }
          .user-meta + .user-meta{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
          }
        }
      }
      .card__actions{
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        @media only screen and (max-width: 379px){
          margin-top: 15px;
        }
        button{
          padding: 0px 19.05px;
          min-width: 114px;
        }
      }
    }
    &.theme-grid-2{
      .ant-card-body{
        padding: 0 !important;
      }
      figure{
        position: relative;
      }
      .user-card__img{
        margin-bottom: 0;
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 132px;
        height: 132px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        z-index: 22;
        img{
          position: relative;
          top: 6px;
        }
      }
      .user-card__bg{
        background-size: cover !important;
        background-position: center !important;
        border-radius: 10px 10px 0 0;
      }
      .card__bottom{
        position: relative;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        top: -26px;
        padding-top: 102px;
        border-radius: 30px 30px 10px 10px;
      }
      .card__actions{
        @media only screen and (max-width: 1499px){
          flex-direction: row;
        }
      }
    }
    &.theme-grid-3{
      .ant-card{
        text-align: left;
      }
      .ant-card-body{
        padding: 0 !important;
      }
      .card__top,
      .card__content,
      .card__info{
        padding: 0 30px;
      }
      .card__top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 30px;
        margin-bottom: 10px;
        .user-card__img{
          margin-right: 12px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
          img{
            max-width: 70px;
          }
        }
        .user-card__info{
          width: 100%;
          position: relative;
          .action-more{
            position: absolute;
            right: 0;
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
            top: 0;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
          }
          .card__designation{
            margin-bottom: 0;
          }
        }
      }
      .card__content{
        p{
          font-size: 15px;
          margin-bottom: 26px;
        }
        .image-group{
          margin: -3px;
        }
        img{
          max-width: 34px;
          margin: 3px;
        }
      }
      .card__info{
        padding-bottom: 30px;
        padding-top: 18px;
        .ant-progress-inner{
          position: relative !important;
        }
        p{
          font-size: 12px;
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
        h2{
          font-size: 14px;
          font-weight: 500;
          margin-top: 4px;
          margin-bottom: 16px;
        }
        .info-line{
          display: flex;
          justify-content: space-between;
          .success{
            color: ${({ theme }) => theme['success-color']};
          }
        }
        .completed-count{
          margin-top: 4px;
        }
        .project-progress{
          display: flex;
          justify-content: space-between;
          .progress-percentage{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
            span{
              font-size: 12px;
              color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
          }
        }
      }
    }
  }
  .card{
    position: relative;
    box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}03;
    .ant-card-body{
      padding: 25px !important;
      @media only screen and (max-width: 575px){
        padding: 15px !important;
      }
      div{
        position: static;
      }
    }
    figure{
      margin-bottom: 0;
      img{
        margin-bottom: 20px;
        width: 100%;
        border-radius: 50%;
        max-width: 150px;
      }      
    }
    .card__more_actions{
      position: absolute;
      ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 24px;
      top: 20px;
      line-height: .5;
      padding: 5px 3px;
      border-radius: 10px;
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      svg,
      img{
        width: 20px;
      }
    }
    .card__name{
      font-size: 16px;
      margin-bottom: 6px;
      font-weight: 500;
      a{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        &:hover{
          color: ${({ theme }) => theme['primary-color']};
        }
      }
    }
    .card__designation{
      font-size: 13px;
      margin-bottom: 25px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
    .card__social{
      margin-top: 16px;
      a{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        &:not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        }
        &.facebook span.fa{
          color: #3B5998;
        }
        &.twitter span.fa{
          color: #1DA1F2;
        }
        &.dribble span.fa{
          color: #C2185B;
        }
        &.instagram span.fa{
          color: #FF0300;
        }
      }
    }
  }

  .user-card{
    .ant-card-body{
      padding: 30px 25px 18px 25px !important;
      @media only screen and (max-width: 1599px){
        padding: 20px  20px 20px !important;
      }
      @media only screen and (max-width: 767px){
        padding: 15px  15px 15px !important;
      }
    }
    figure{
      img{
        margin-bottom: 18px;
        max-width: 120px;
      }      
    }
    .card__actions{
      margin: -5px;
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 1499px){
        flex-direction: column;
      }
      .ant-btn-white{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        &:hover{
          border: 1px solid ${({ theme }) => theme['primary-color']};
        }
      }
      button{
        font-size: 13px;
        padding: 0px 22.7px;
        height: 38px;
        border-radius: 6px;
        box-shadow: 0px 3px 5px ${({ theme }) => theme[theme.mainContent]['light-text']}05;
        margin: 5px;
        &:hover{
          color: #fff !important;
          background-color: ${({ theme }) => theme['primary-color']} !important;
          svg,
          i{
            color: #fff;
          }
        }
        svg,
        i{
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
      }
    }
    .card__info{
      padding-top: 20px;
      margin-top: 18px;
      border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      .info-single{
        text-align: center;
      }
      .info-single__title{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 4px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      p{
        margin-bottom: 0;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
    }
  }
`;

const FaqCategoryBox = Styled.div`
  .faq-badge{
    font-weight: 400;
    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
  }
  ul{
    li{
      a{
        width: 100%;
        display: inline-block;
        font-weight: 500;
        position: relative;
        padding: ${({ theme }) => (!theme.rtl ? '12px 0 12px 20px' : '12px 20px 12px 0')};
        transition: all .3s ease;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        &.active{
          padding-left: 28px;
          &:before{
            opacity: 1;
            visibility: visible;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -15px;
          }
          &:after{
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 5px;
          }
          &.primary{
            &:after{
              background: ${({ theme }) => theme['primary-color']};
            }
          }
          &.secondary{
            &:after{
              background: ${({ theme }) => theme['secondary-color']};
            }
          }
          &.success{
            &:after{
              background: ${({ theme }) => theme['success-color']};
            }
          }
          &.warning{
            &:after{
              background: ${({ theme }) => theme['warning-color']};
            }
          }
          &.info{
            &:after{
              background: ${({ theme }) => theme['info-color']};
            }
          }
          &.danger{
            &:after{
              background: ${({ theme }) => theme['danger-color']}5;
            }
          }
        }
        &:before{
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -25px;
          top: 0;
          height: 100%;
          width: 2px;
          border-radius: 10px;
          opacity: 0;
          visibility: hidden;
          content: '';
          background: ${({ theme }) => theme['primary-color']};
          transition: all .3s ease;
        }
        &:after{
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
          top: 50%;
          transform: translatey(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          content: '';
          background: ${({ theme }) => theme['primary-color']}50;
          transition: all .3s ease;
        }
        &.secondary{
          &:after{
            background: ${({ theme }) => theme['secondary-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['secondary-color']};
          }
        }
        &.success{
          &:after{
            background: ${({ theme }) => theme['success-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['success-color']};
          }
        }
        &.warning{
          &:after{
            background: ${({ theme }) => theme['warning-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['warning-color']};
          }
        }
        &.info{
          &:after{
            background: ${({ theme }) => theme['info-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['info-color']};
          }
        }
        &.danger{
          &:after{
            background: ${({ theme }) => theme['danger-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['danger-color']};
          }
        }
      }
    }
  }
`;

const FaqSupportBox = Styled.div`
  text-align: center;
  .ant-card-body{
    padding: 30px 50px 40px 50px !important;
    @media only screen and (max-width: 1599px){
      padding: 25px !important;
    }
    @media only screen and (max-width: 991px){
      padding: 25px !important;
    }
    @media only screen and (max-width: 575px){
      padding: 15px !important;
    }
  }
  figure{
    margin-bottom: 30px;
    img{
      width: 100%;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }
  button{
    padding: 0 30px;
    border-radius: 6px;
    height: 44px;
  }
`;

const FaqWrapper = Styled.div`
  .ant-card{
    .ant-card-body{
      h1{
        font-weight: 500;
      }
    }
  }
  .ant-collapse{
    margin-top: 25px;
    &.ant-collapse-borderless{
      background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    &.ant-collapse-icon-position-left{
      .ant-collapse-header{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']} !important;
      }
    }
  }
  .ant-collapse{
    .ant-collapse-item{
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      &.ant-collapse-item-active{
        box-shadow: 0px 15px 40px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
      }
      .ant-collapse-header{
        font-weight: 500;
        font-size: 15px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        padding: 18px 25px !important;
        border-radius: 5px !important;
        @media only screen and (max-width: 575px){        
          padding: ${({ theme }) => (!theme.rtl ? '15px 45px 15px 15px' : '15px 15px 15px 45px')} !important;
        }
        .ant-collapse-arrow{
          position: inherit;
          width: 16px;
          height: 16px;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: auto !important;
          ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 25px !important;
          top: 22px !important;
          transform: translateY(0) !important;
        }
      }
    }
  }
  

  .ant-collapse-content{
    box-shadow: 0 15px 40px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
    .ant-collapse-content-box{
      border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
      padding: 20px 25px 30px !important;
      P{
        font-size: 15px;
        margin-bottom: 35px;
        line-height: 1.667;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 12px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      .panel-actions{
        button{
          height: 36px;
          padding: 0 15px;
          &:not(:last-child){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
      }
    }
  }
`;

const SearchResultWrapper = Styled.div`
  .ant-select{
    border-radius: 100px;
    background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
    @media only screen and (max-width: 575px){
      width: 100% !important;
    }
  }
  .ant-select-selector{
    height: 50px !important;
    .ant-select-selection-search{
      height: 50px;
      width: 100% !important;
      input{
        height: 46px !important;
        border-radius: 100px;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
      }
    }
    .ant-input-affix-wrapper{
      border: 0 none;
      background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
    }
    .ant-select-selection-search-input {
      border-radius: 100px;
    }
  }
  .search-filter-menu{
    margin: 22px 0 20px;
    @media only screen and (max-width: 575px){
      text-align: center;
    }
    ul{
      li{
        display: inline-block;
        margin-bottom: 10px;
        &:not(:last-child){
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        }
        a{
          font-size: 13px;
          font-weight: 500;
          display: block;
          padding: 5px 15px;
          border-radius: 5px;
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
          box-shadow: 0 3px 6px ${({ theme }) => theme[theme.mainContent]['light-text']}05;
          background: #fff;
          &.active{
            color: #fff;
            background: ${({ theme }) => theme['primary-color']};
          }
        }
      }
    }
  }
`;

const ResultList = Styled.div`
  .result-list-top{
    max-width: 1000px;
    border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    margin-bottom: 20px;
    padding-bottom: 24px;
  }
  .search-found-text{
    font-size: 16px;
    margin-bottom: 0;
    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    .result-count{
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
    }
    .result-keyword{
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
    }
    .result-count,
    .result-keyword{
      font-weight: 600;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
  }
  .result-limit{
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
    margin-bottom: 0;
    color: ${({ theme }) => theme['light-color']};
    @media only screen and (max-width: 767px){
      text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
      margin-top: 10px;
    }
  }
  .result-list-content{
    border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    padding-bottom: 14px;
    margin-bottom: 30px;
    ul{
      li{
        &:not(:last-child){
          margin-bottom: 35px;
        }
        .result-list-title{
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 10px;
          .search-keyword{
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
          }
        }
        p{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
    }
  }
  .ant-pagination{
    @media only screen and (max-width: 575px){
      text-align: center;
    }
  }
`;

const MaintananceWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  img{
    margin-bottom: 72px;
    max-width: 400px;
    width: 100%;
    @media only screen and (max-width: 575px){
      margin-bottom: 30px;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }
  p{
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
`;

const ErrorWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  img{
    margin-bottom: 100px;
    max-width: 400px;
    width: 100%;
    @media only screen and (max-width: 575px){
      margin-bottom: 30px;
    }
  }
  .error-text{
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 35px;
    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
  }
  p{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 26px;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
  button{
    height: 44px;
  }
`;

const ComingsoonStyleWrapper = Styled.div`
  text-align: center;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 10px;
  padding: 75px 0 30px;
  margin-bottom: 30px;
  @media only screen and (max-width: 1150px){
    padding: 50px 0 6px;
  }
  @media only screen and (max-width: 991px){
    padding: 20px 0 0px;
  }
  @media only screen and (max-width: 575px){
    margin-top: 10px;
  }
  .ninjaDash-logo{
    margin-bottom: 35px;
    @media only screen and (max-width: 1150px){
      margin-bottom: 30px;
    }
    @media only screen and (max-width: 767px){
      margin-bottom: 25px;
    }
    img{
      max-width: 170px;
    }
  }
  >.ant-card{
    box-shadow: 0 0;
  }
  .coming-soon-content{
    h1{
      font-size: 58px;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 25px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 1299px){
        font-size: 48px;
        margin-bottom: 15px;
      }
      @media only screen and (max-width: 991px){
        font-size: 40px;
        line-height: 1.45;
      }
      @media only screen and (max-width: 479px){
        font-size: 30px;
      }
      @media only screen and (max-width: 375px){
        font-size: 20px;
      }
    }
    p{
      font-size: 17px;
      max-width: 580px;
      margin: 0 auto 25px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      @media only screen and (max-width: 991px){
        margin-bottom: 15px;
      }
      @media only screen and (max-width: 767px){
        font-size: 16px;
      }
      @media only screen and (max-width: 375px){
        font-size: 15px;
      }
    }
  }
  .countdwon-data{
    display: flex;
    justify-content: center;
    >span{
      &:not(:last-child){
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 50px;
        @media only screen and (max-width: 575px){
          margin-right: 20px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        }
      }
    }
  }
  .strikingDash-countdown{
    .countdown-time{
      font-size: 42px;
      font-weight: 600;
      line-height: 1.45;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 991px){
        font-size: 32px;
      }
      @media only screen and (max-width: 575px){
        font-size: 26px;
      }
      @media only screen and (max-width: 375px){
        font-size: 20px;
      }
    }
    .countdown-title{
      font-size: 16px;
      font-weight: 400;
      display: block;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      @media only screen and (max-width: 375px){
        font-size: 15px;
      }
    }
  }
  .subscription-form{
    margin-top: 40px;
    @media only screen and (max-width: 991px){
      margin-top: 25px;
    }
    @media only screen and (max-width: 1150px){
      margin-top: 35px;
    }
    .subscription-form-inner{
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 375px){
        flex-flow: column;
        margin-bottom: 20px;
      }
      .ant-form-item-control-input{
        margin-right: 20px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        @media only screen and (max-width: 375px){
          margin-right: 0;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
        .ant-input{
          min-width: 320px;
          padding: 12px 20px;
          @media only screen and (max-width: 767px){
            min-width: 100%;
          }
          &::placeholder{
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
          }
        }
      }
      button{
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }
  .coming-soon-social{
    margin-top: 50px;
    @media only screen and (max-width: 1150px){
      margin-top: 25px;
    }
    @media only screen and (max-width: 767px){
      margin-top: 30px;
    }
    ul{
      margin-bottom: 30px;
      li{
        display: inline-block;
        &:not(:last-child){
          margin-right: 15px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          i,
          span,
          svg{
            color: #fff;
          }
          &.facebook{
            background-color: #3B5998;
          }
          &.twitter{
            background-color: #1DA1F2;
          }
          &.globe{
            background-color: #DD3E7C;
          }
          &.github{
            background-color: #23282D;
          }
        }
      }
    }
    p{
      font-size: 14px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
  }
`;

const AddUser = Styled.div`
  .form-title{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 36px;
  }
  .add-user-bottom{
    margin-top: 20px;
    button + button{
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
    }
    .ant-btn.ant-btn-light{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    &.text-right{
      @media only screen and (max-width: 767px){
        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')} !important;
      }
    }
  }
  .card-nav{
    ul{
      display: flex;
      flex-wrap: wrap;
      margin: 0px -10px;
      @media only screen and (max-width: 575px){
        justify-content: center;
      }
      li{
        margin: 4px 10px !important;
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
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          @media only screen and (max-width: 575px){
            padding: 0;
          }
          &:after{
            position: absolute;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
            bottom: -3px;
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
          }
          svg,
          img,
          i,
          span{
            width: 16px;
            height: 16px;
            position: relative;
            top: 4px;
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
      }
    }
  }

  /* Photo Upload */
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
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
  .social-form{
    .ant-form-item-control-input-content{
      .ant-input-prefix{
        width: 44px;
        height: 44px;
        border-radius: 4px;
      }
    }
    .ant-form-item-control-input{
      height: 44px;
      .ant-input-affix-wrapper{
        &:hover,
        &:focus,
        &.ant-input-affix-wrapper-focused{
          border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
        .ant-input{
          height: 42px;
          ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
        }
      }
    }
    .ant-form-item {
      .ant-form-item-control-input {
        .ant-input-affix-wrapper{
          padding: 0 20px 0 10px;
        }
      }
    }
    .ant-input-prefix{
      position: relative;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -11px;
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme['primary-color']};
        i,
        svg,
        span.fa{
          color: #fff;
          font-size: 16px;
        }
        .fa-facebook{
          background-color: #3B5998;
        }
        .fa-twitter{
          background-color: #38B8FF;
        }
        .fa-linkedin{
          background-color: #2CAAE1;
        }
        .fa-instagram{
          background-color: #FF0300;
        }
        .fa-github{
          background-color: #292929;
        }
        .fa-youtube{
          background-color: #FE0909;
        }
      }
    }
  }
`;
const ChangelogWrapper = Styled.div`
   .ant-card-head{
     .ant-card-head-title{
       .v-num{
        $: 0;
         font-size: 18px;
         color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
       }
       .sign{
         font-size: 18px;
         color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
         display: inline-block;
         margin: 0 8px;
       }
       .rl-date{
        $: 0;
         font-weight: 400;
         font-size: 16px;
       }
     }
   }
  .version-list{
    .version-list__single{
      &:not(:last-child){
        margin-bottom: 30px;
      }
      ul{
        li{
          position: relative;
          ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
          font-size: 16px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          &:not(:last-child){
            margin-bottom: 12px;
          }
          &:after{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            content: "";
          }
        }
        &.version-primary{
          li{
            &:after{
              background-color: ${({ theme }) => theme['primary-color']};
            }
          }
        }
        &.version-success{
          li{
            &:after{
              background-color: ${({ theme }) => theme['success-color']};
            }
          }
        }
        &.version-info{
          li{
            &:after{
              background-color: ${({ theme }) => theme['info-color']};
            }
          }
        }
      }
    }
    .version-list__top{
      .badge{
        font-size: 12px;
        line-height: 1.2;
        letter-spacing: 1.4px;
        font-weight: 500;
        display: inline-block;
        padding: 5px 8px;
        height: auto;
        border-radius: 4px;
        margin-bottom: 14px;
        color: #fff;
        &.badge-primary{
          background-color: ${({ theme }) => theme['primary-color']};
        }
        &.badge-info{
          background-color: ${({ theme }) => theme['info-color']};
        }
        &.badge-success{
          background-color: ${({ theme }) => theme['success-color']};
        }
      }
    }
  }

  .changelog-accordion{
    margin-top: 30px;
    .ant-collapse{
      background-color: transparent;
      border: 0 none;
    }
    .ant-collapse-item{
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
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
      @media only screen and (max-width: 575px){
        padding: 16px 20px 14px 20px !important;
      }
      .ant-collapse-arrow{
        position: static;
        top: 0 !important;
        svg,
        img{
          width: 14px;
        }
      }
      .v-num{
        font-size: 18px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        @media only screen and (max-width: 575px){
          font-size: 16px;
        }
      }
      .rl-date{
        font-size: 16px;
        font-weight: 400;
        @media only screen and (max-width: 575px){
          font-size: 14px;
        }
      }
    }
    .ant-collapse-content{
      border-radius: 0 0 6px 6px;
      > .ant-collapse-content-box{
        padding: 30px 30px 25px;
      }
    }
  }
`;
const VersionHistoryList = Styled.div`
  .history-title{
    font-size: 11px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme['light-gray-color']};
  }
  .v-history-list{
    li{
      display: flex;
      justify-content: space-between;
      &:not(:last-child){
        margin-bottom: 24px;
      }
      .version-name{
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme['dark-color']};
      }
      .version-date{
        font-size: 14px;
        color: ${({ theme }) => theme['light-gray-color']};
      }
    }
  }
`;

const TestimonialWrapper = Styled.div`
  position: relative;
  padding: 0 150px;
  .button-group {
      width: 100%;   
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      left: 0;
  }
`;

const TestimonialStyleWrapper = Styled.div`
  .ant-card{
    direction: ltr;
  }
  .ant-card-body{
    padding: 0 !important;
  }
  .testimonial-title{
    text-align: center;
  }
`;

const UserCarrdTop = Styled.div`
  .ant-page-header-heading-extra{
    .btn-add_new{
      margin-right: 15px;
      @media only screen and (max-width: 575px){
        margin-right: 6px;
      }
    }
    .action-btn{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      @media only screen and (max-width: 575px){
        height: 30px;
        width: 30px;
      }
      @media only screen and (max-width: 375px){
        height: 28px;
        width: 28px;
      }
      &.active{
        background-color: #fff;
        color: ${({ theme }) => theme['primary-color']};
      }
      svg{
        width: 14px;
        height: 14px;
      }
    }
  }
`;

const SupportTopWrap = Styled.div`
  background-color: ${({ theme }) => theme['bg-color-light']};
  border-radius: 10px;
  box-shadow: 0 5px 20px #9299B810;
  margin-bottom: 50px;
  .ninjadash-support-container{
    max-width: 1110px;
    margin: 0 auto;
    @media only screen and (max-width: 1599px){
      max-width: 990px;
    }
    @media only screen and (max-width: 1399px){
      max-width: 790px;
    }
    @media only screen and (max-width: 1150px){
      max-width: 100%;
      padding: 30px
    }
  }
  .ninjadash_support-content{
    .ninjadash_support-content__title{
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 10px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 767px){
        font-size: 26px;
      }
    }
    p{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .btn-ticket{
      margin-top: 15px;
      height: 46px;
      font-size: 14px;
      font-weight: 500;
      @media only screen and (max-width: 575px){
        margin-top: 0;
      }
    }
  }
  .ninjadash_support-img{
    margin-top: 50px;
    @media only screen and (max-width: 1150px){
      margin-top: 0;
    }
    img{
      width: 100%;
      @media only screen and (max-width: 575px){
        margin-top: 30px;
      }
    }
  }
`;

const SupportContentWrap = Styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 20px #9299B810;
  padding: 100px 0 50px 0;
  @media only screen and (max-width: 1599px){
    padding: 50px 0 20px 0;
  }
  @media only screen and (max-width: 1199px){
    margin-bottom: 30px;
  }
  .ninjadash-support-container{
    max-width: 1110px;
    margin: 0 auto;
    @media only screen and (max-width: 1599px){
      max-width: 990px;
    }
    @media only screen and (max-width: 1399px){
      max-width: 790px;
    }
    @media only screen and (max-width: 1150px){
      max-width: 100%;
      padding: 30px
    }
  }
  .ninjadash-support-link-item{
    max-width: 350px;
    margin: 0 auto 30px;
    padding: 30px;
    text-align: center;
    border-radius: 6px;
    transiiton: .35s;
    border: 1px solid ${({ theme }) => theme['border-color-light']};
    &:hover{
      box-shadow: 0 15px 25px #9299BB15;
      border-color: #fff;
    }
    .ninjadash-support-link-item__icon{
      height: 80px;
      width: 80px;
      margin: 0 auto 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &.primary{
        background-color: ${({ theme }) => theme['primary-color']};
      }
      &.success{
        background-color: ${({ theme }) => theme['success-color']};
      }
      &.info{
        background-color: ${({ theme }) => theme['info-color']};
      }
    }
    .ninjadash-support-link-item__title{
      font-size: 20px;
      font-weight: 500;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .ninjadash-support-link-item__content{
      .btn-link{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        background-color: #EFEFFE;
        border-radius: 20px; 
        margin: 36px auto 0;
        font-size: 15px;
        padding: 0 24.5px;
        width: fit-content;
      }
    }
  }
  .ninjadash_faq-block{
    margin-top: 70px;
    @media only screen and (max-width: 1150px){
      margin-top: 20px;
    }
    .ant-card{
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      .ant-card-body{
        h1{
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
      }
    }
    .ant-collapse-item {
      &.ant-collapse-item-active{
        box-shadow: 0 0;
      }
      .ant-collapse-header{
        background-color: #fff !important;
        padding: 19.5px 25px !important
        .ant-collapse-arrow{
          color: #9299B8;
        }
      }
      .ant-collapse-content{
        box-shadow: 0 0;
      }
    }
  }
`;

const TermsConditionsStyle = Styled.div`
  margin-bottom: 30px;
  @media only screen and (max-width: 575px){
    margin-top: 10px;
  }
  .ninjadash-term-condition-top{
    min-height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme[theme.mainContent]['primary-transparent']};
    @media only screen and (max-width: 991px){
      min-height: 240px;
    }
    @media only screen and (max-width: 475px){
      min-height: 140px;
    }
    .ninjadash-term-condition-top__title{
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 110px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 991px){
        font-size: 36px;
        margin-bottom: 100px;
      }
      @media only screen and (max-width: 767px){
        font-size: 30px;
        margin-bottom: 0;
      }
    }
  }
  .ninjadash-term-condition-content{
    padding: 1px 50px 50px;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    box-shadow: 0 10px 50px rgba(173,181,217,.20);
    max-width: 770px;
    border-radius: 10px;
    margin: -125px auto auto;
    @media only screen and (max-width: 767px){
      max-width: 560px;
      margin: 30px auto auto;
    }
    @media only screen and (max-width: 575px){
      padding: 1px 30px 30px;
    }
    h3{
      font-size: 30px;
      font-weight: 600;
      margin: 50px 0 30px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 991px){
        font-size: 26px;
        margin: 40px 0 20px;
      }
      @media only screen and (max-width: 575px){
        font-size: 26px;
        margin: 30px 0 15px;
      }
    }
    p{
      font-size: 16px;
      line-height: 1.69;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
`;

export {
  TestimonialWrapper,
  DocumentationStyleWrap,
  PageScroller,
  SiteMapWrap,
  PricingCard,
  ListGroup,
  Badge,
  GalleryNav,
  UserCard,
  GalleryCard,
  UsercardWrapper,
  UserTableStyleWrapper,
  FaqCategoryBox,
  FaqSupportBox,
  FaqWrapper,
  SearchResultWrapper,
  ResultList,
  MaintananceWrapper,
  ErrorWrapper,
  ComingsoonStyleWrapper,
  AddUser,
  ChangelogWrapper,
  VersionHistoryList,
  TestimonialStyleWrapper,
  UserCarrdTop,
  SupportTopWrap,
  SupportContentWrap,
  TermsConditionsStyle,
};

