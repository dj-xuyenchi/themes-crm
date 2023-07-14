import Styled from 'styled-components';

const WizardTwo = Styled.div`
    .ant-steps:not(.ant-steps-vertical) .ant-steps-item-custom .ant-steps-item-icon {
        width: 60px;  
        box-shadow: none;
        svg{
            width: 60px;
            height: 60px;
            color: ${({ theme }) => theme[theme.mainContent]['light-text']} !important;
        } 
    }    
    .ant-steps-item-icon .ant-steps-icon span{
        color: #000;
        font-size: 20px;
    }
    .ant-steps-item {
        &.ant-steps-item-active{
            .ant-steps-item-icon{
                background-color: transparent;
                .ant-steps-icon{
                    background-color: transparent;
                    svg path,
                    i{
                        fill: ${({ theme }) => theme['primary-color']};
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
        &.ant-steps-item-finish {
            .ant-steps-item-icon{
                background-color: transparent !important;
                .ant-steps-icon{
                    svg path,
                    i{
                        fill: ${({ theme }) => theme['success-color']};
                        color: ${({ theme }) => theme['success-color']};
                    }
                }
            }
        }
        .ant-steps-item-container{
            .ant-steps-item-tail{
                @media only screen and (max-width: 479px) {
                    display: none !important;
                }
            }
            .ant-steps-item-icon{
                margin-bottom: 15px;
                svg,
                img{
                    @media only screen and (max-width: 479px) {
                        width: 40px;
                    }
                }
            }
        }
    }
`;

const WizardThree = Styled.div`
    .ant-steps-item-container{
        .ant-steps-item-icon{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
        .ant-steps-item-title{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
        }
    }
`;

const WizardFour = Styled.div`
    .steps-content{
        margin-top: 0 !important;
    }
    .step-action-wrap .step-action-inner{
        padding:0 !important;
        @media only screen and (max-width: 767px){
            padding:0 25px !important;
        }
    }
    .steps-action{
        @media only screen and (max-width: 575px){
           gap: 15px;
        } 
    }
    .ant-steps-item-container{
        position: relative
        display: flex;
        flex-flow: row;
        width: 100%;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
        @media (max-width: 767px){
            flex-flow: column;
        }
        &:after{
            display: none;
        }
        .ant-steps-item-tail{
            display: none !important;
            &:after{
                display: none;
            }
        }
    }
    .ant-steps-item:last-child {
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }
    .ant-steps {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
        min-width: 300px;
        flex-direction: column;
        @media (max-width: 991px){
            min-width: auto;
            margin: 0 0 25px 0;
        }
        @media (max-width: 575px){
            align-items: flex-start;
        }
        
        &.ant-steps-vertical{
            flex: 1;
            padding: 30px;
            border-radius: 6px;
            border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            max-width: 300px;
            .ant-steps-item-icon{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0 !important;
            }
            .ant-steps-item {
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0;
                &:not(:last-child){
                    margin-bottom: 30px;
                    @media (max-width: 767px){
                        margin-bottom: 15px;
                    }
                }
                &.ant-steps-item-wait{
                    .ant-steps-item-icon{
                        background-color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']}50;
                        box-shadow: 0 0;
                        .ant-steps-icon{
                            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                        }
                        svg{
                            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                        }
                    }
                }
            }
            .ant-steps-item-content{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0 !important;
            }
        }
    }
`;

const WizardFive = Styled.div`
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width: 991px) {
        flex-flow: column;
    }
    .steps-wrapper{
        @media only screen and (max-width: 991px) {
            width: 100%;
            ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 0 !important;
        }
    }
    .ant-steps{
        &.ant-steps-vertical{
            padding: 50px;
            @media only screen and (max-width:1399px) {
                padding: 25px;
            }
            + .steps-wrapper{
                padding: 50px;
                @media only screen and (max-width:1399px) {
                    padding: 25px;
                }
                ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']};
            }
        }
       
    }
    .basic-form-inner{
        width: 100%;
        @media only screen and (max-width: 1599px) {
            width: 100%;
        }
    }
    .ant-steps-item-container {
        position: relative;
        width: 100% !important;
        align-items: flex-start !important;
        @media only screen and (max-width: 1399px) {
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
        }
        .ant-steps-item-tail{
            display: none !important;
        }
    }
    .ant-steps-item:last-child {
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }
    .ant-steps {
        flex: 1;
        position: relative;
        min-width: 450px;
        flex-direction: column;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
        @media only screen and (max-width: 1599px) {
            min-width: auto;
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 50px !important;
        }
        @media only screen and (max-width: 1399px) {
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 25px !important;
        }
        @media only screen and (max-width: 767px) {
            align-items: flex-start;
        }
        .ant-steps-item-container:after {
            display: none;
        }
        .ant-steps-item {
            border-radius: 5px;
            padding: 16px 30px 18px 30px !important;
            @media only screen and (max-width: 1599px) {
                min-width: 200px;
            }
            @media only screen and (max-width:575px) {
                min-width:100%;
            }
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
        .ant-steps-item-content{
            .ant-steps-item-title{
                margin-top: 0px;
                line-height: 1.4;
                ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
                h2{
                    font-size: 16px;
                    margin-bottom: .35rem;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
                p{
                    font-size: 13px;
                    font-weight: 400;
                    margin-bottom: 0;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
    }
    .steps-content{
        margin-top: 0 !important;
        .basic-form-inner{
            &.theme-light{
                .ant-input,
                .ant-select-selector,
                .ant-input-password{
                    border: 0 none;
                    background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
                }
            }
            .ant-form-item-label{
                white-space: break-spaces;
            }
            .shipping-form,
            .payment-method-form {
                min-width: 530px;
                @media only screen and (max-width: 767px) {
                    min-width: 100%;
                }
            }
        }
    }
    .ant-steps:not(.ant-steps-dot):not(.ant-steps-navigation) .ant-steps-item .ant-steps-item-icon {        
        display: none;
    }
    .ant-steps-item.ant-steps-item-process.ant-steps-item-active {
        background: ${({ theme }) => theme[theme.mainContent]['general-background']};
    }
    .step-action-wrap{
        border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        margin-top: 30px;
        .step-action-inner{
            width: 100% !important;
            padding: 0 !important;
            @media only screen and (max-width: 1399px) {
                width: 100%;
            }
        }
        .steps-action{
            margin-top: 40px;
        }
    }
    .atbd-review-order{
        >.ant-card{
            margin-bottom: 0 !important;
        }
        &.theme-light{

            > .ant-card > .ant-card-body{
                border: 0 none;
                padding: 0 !important;
            }
            .atbd-review-order__single{
                &:last-child{
                    .ant-card{
                        margin-bottom: 0 !important;
                    }
                }
                .ant-card-body{
                    background-color: ${({ theme }) => theme[theme.mainContent]['general-background']};
                    box-shadow: 0 0;
                }
                .ant-table{
                    background-color: transparent;
                }
                .table-cart {
                    @media only screen and (max-width: 1799px) {
                        max-width: 560px;
                    }
                    @media only screen and (max-width: 1699px) {
                        max-width: 500px;
                    }
                    @media only screen and (max-width: 1599px) {
                        max-width: 100%;
                    }
                    @media only screen and (max-width: 1399px) {
                        max-width: 410px;
                    }
                    .ant-table-tbody .ant-table-row:hover td{
                        background-color: transparent !important;
                    }
                    .cart-single-quantity{
                        button{
                            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                        }
                    }
                }
            }
        }
    }
    .shipping-selection__card{
        .ant-card{
            margin-bottom: 0 !important;
        }
        .ant-card-body{
            padding: 0 !important;
        }
    }
    .ex-date-year-wrap{
        .ex-date{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
            flex: 0 0 48%
        }
        .ex-year{
            flex: 0 0 48%
        }
    }
`;

const WizardSix = Styled.div`
    position: relative;
    display: flex;
    min-height: 620px;
    @media only screen and (max-width: 991px) {
        flex-flow: column;
    }
    .ant-steps{
        &.ant-steps-horizontal{
            padding: 50px;
            @media only screen and (max-width:1399px) {
                padding: 25px;
            }
            + .steps-wrapper{
                padding: 50px;
                @media only screen and (max-width:1399px) {
                    padding: 25px;
                }
                ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']};
            }
        }
       
    }
    .ant-steps{
        justify-content: center;
        position: relative;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
        max-width: 450px;
        @media only screen and (max-width: 991px) {
            justify-content: flex-start !important;
        }
        @media only screen and (max-width: 767px) {
            flex-flow: row;
        }
        &.ant-steps-horizontal.ant-steps-label-horizontal{
            @media only screen and (max-width: 480px) {
                flex-direction: row !important;
            }
        }
        .ant-steps-item-tail{
            @media only screen and (max-width: 480px) {
                display: none !important;
            }
        }
    }
    .step-action-wrap{
        justify-content: flex-end !important;
        .step-action-inner{
            padding: 0 !important;
        }
    }
    .ant-steps-item-icon{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0px;
    }
    .ant-steps-item{
        padding: 0 !important;
        overflow: visible;
        flex: none;
        position: static !important;
        &:last-child{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
            @media only screen and (max-width: 991px) {
                flex: none;
            }
        }
        &:not(:last-child){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            @media only screen and (max-width: 767px) {
                margin-bottom: 0;
            }
        }
        .wizard-item{
            max-width: 290px;
            @media only screen and (max-width: 480px) {
                margin-top: 30px;
                max-width: 100%;
            }
        }
    }
    .ant-steps-item-title{
        position: static;
    }
    .ant-steps-item-container{
        position: static;
        width: 100%;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
    }
    .table-cart{
        .ant-table-content{
            @media only screen and (max-width: 1850px) {
                max-width: 550px;
            }
            @media only screen and (max-width: 1599px) {
                max-width: 450px;
            }
            @media only screen and (max-width: 1299px) {
                max-width: 350px;
            }
        }
    }
    .wizard-item {
        display: none;
        .none{
            display: none;
        }
        &.block{
            display: block;
        }
        text-align: center;
        position: absolute;
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 44%;
        transform: ${({ theme }) => (theme.rtl ? 'translateX(50%);' : 'translateX(-50%)')};
        margin-top: 20px;
        @media only screen and (max-width: 991px) {
            text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
            left: 0;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            transform: translateX(0%);
        }
        h2{
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 26px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            @media only screen and (max-width: 991px) {
                margin-bottom: 15px;
            }
        }
        p{
            font-weight: 400;
            margin-bottom: 45px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            @media only screen and (max-width: 991px) {
                margin-bottom: 25px;
            }
        }
        img{
            max-width: 280px;
            @media only screen and (max-width: 480px) {
                max-width: 100%;
            }
        }
    }
    .steps-content{
        position: relative;
        margin-top: 0 !important;
    }
    .atbd-review-order{
        position: relative;
        .atbd-review-order__single .ant-card .ant-card-body{
            @media only screen and (max-width: 767px) {
                padding: 15px  !important;
            }
        }
    }
    .step-action-wrap{
        .step-action-inner{
            width: 100% !important;
        }
    }
    .ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item{
        white-space: normal;
    }
    .ant-steps-item.ant-steps-item-process.ant-steps-item-active .wizard-item{
        display: block;
    }
    .ant-steps-item-container:after{
        display: none;
    }
    .steps-wrapper{
        width: 100%;
        @media only screen and (max-width: 991px) {
            padding-top: 450px !important;
            border-left: 0 none !important;
            ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 0 none !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
    }
    .basic-form-inner{
        width: 100%;
        min-width: 380px;
        @media only screen and (max-width: 479px) {
            min-width: 100%;
        }
    }
    
`;

const WizardBlock = Styled.div`
    
    >.ant-card{
        .ant-card-body{
            padding: 50px 0 !important;
        }
        .steps-content{
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px) {
                    padding: 15px !important;
                }
            }
        }
    }
    
`;

export { WizardTwo, WizardThree, WizardFour, WizardFive, WizardSix, WizardBlock };
