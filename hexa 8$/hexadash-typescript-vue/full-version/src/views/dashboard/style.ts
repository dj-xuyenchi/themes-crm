import Styled from 'vue3-styled-components';

const EChartCard = Styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    .card-chunk{
        width: 50%;
        flex: 0 0 50%;
        h1{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    @media only screen and (max-width: 379px){
        .card-chunk{
            width: 100%;
            flex: 0 0 100%;
            h1{
                margin-bottom: 0;
            }
            p{
                margin: 5px 0 20px 0;
            }
        }
    }
    .chartjs-tooltip {
        min-width: 132px !important;
    }
`;

const OverviewDataStyleWrap = Styled.div`
    &.card-mesh-wrap{
        justify-content: space-between;
		flex-wrap: wrap;
        margin-bottom: 25px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        @media only screen and (max-width: 991px){
            flex-wrap: wrap;
        }
        @media only screen and (max-width: 1399px){
            justify-content: flex-start;
        }
        .ninjadash-overview-card-single{
            flex: 0 0 auto;
            margin-bottom: 0;
            @media only screen and (max-width: 991px){
                flex: 0 0 50%;
            }
            @media only screen and (max-width: 575px){
                flex: 0 0 100%;
            }
        }
        &.card-mesh-wrap--two{
            border-radius: 10px;
            .ninjadash-overview-card-single{
                .ninjadash-overview-card{
                    align-items: center;
                }
            }
            .ninjadash-overview-card-single::after{
                content: none;
            }
            .ninjadash-overview-card .ninjadash-overview-card__left .ninjadash-overview-card__left--icon{
                border-radius: 50%;
                svg path{
                    fill: #fff !important;
                }
                &.ninjadash-primary{
                    background-color: ${({ theme }) => theme['primary-color']};
                }
                &.ninjadash-secondary{
                    background-color: ${({ theme }) => theme['secondary-color']};
                }
                &.ninjadash-success{
                    background-color: ${({ theme }) => theme['success-color']};
                }
                &.ninjadash-warning{
                    background-color: ${({ theme }) => theme['warning-color']};
                }
            }
        }
    }
`;

const NewProductWrapper = Styled.div`
    .ant-table-content{
        .ninjadash-product-price{
            font-weight: 500;
        }
    }
`;

const DemoFourStyle = Styled.div`
    .ninjadash-congratulation-banner{
        @media only screen and (max-width: 991px){
            margin-bottom: 25px;
        }
        .ant-card{
            margin-bottom: 0 !important;
        }
        .ant-card-body{
            min-height: 360px !important;
        }
        .ninjadash-congratulation-banner-content{
            img{
                bottom: -155px;
            }
        }
        figcaption{
            h2{
                font-size: 30px;
                @media only screen and (max-width: 475px){
                    font-size: 24px
                }
            }
            p{
                margin-bottom: 22px;
            }
        }
        &.congratulation-banner--two{
            .ant-card-body{
                position: relative;
                padding: 55px 30px;
            }
            .ninjadash-congratulation-banner-content{
                position: static;
                img{
                    bottom: 0;
                    right: 0;
                    width: 245px;
                    max-width: 245px;
                    height: 245px;
                }
                .banner-feature-btn{
                    color: #fff !important;
                    height: 44px;
                    border-radius: 6px;
                    font-size: 15px;
                    font-weight: 500;
                    background: ${({ theme }) => theme['dark-hover']};
                    &:focus{
                        color: ${({ theme }) => theme['dark-color']} !important;
                    }
                }
                figcaption{
                    padding: 25px 5px;
                    p{
                        font-size: 16px;
                    }
                }
            }
        }
    }

`;

const TotalChartStyleWrap = Styled.div`
    .ant-card-head{
        border: 0 none;
        .ant-card-head-title{
            padding-bottom: 0;
        }
    }
    .ant-card{
        .ant-card-body{
            padding: 20px 20px !important;
            @media only screen and (max-width: 991px){
                padding: 20px 10px !important;
            }
            @media only screen and (max-width: 767px){
                min-height: auto;
            }
        }
    }
`;

const SalesOverviewStyleWrap = Styled.div`
    .ninjadash-sales-inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .ninjadash-sales-content{
        justify-content: center;
        text-align: center;
        margin-top: 20px -5px -5px;
        @media only screen and (max-width: 1499px){
            flex-wrap: wrap;
        }
        @media only screen and (max-width: 575px){
            flex-wrap: wrap;
            flex-direction: column;
        }
    }
    .ant-card{
        min-height: 430px;
    }
    .ant-progress{
        .ant-progress-text{
            font-size: 46px;
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
        }
        .ant-progress-circle{
            top: 0;
        }
    }

    .ninjadash-sales-content__item{
        min-width: 200px;
        margin: 5px;
        @media only screen and (max-width: 575px){
            min-width: auto;
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
        .ninjadash-sales-content__item--label{
            display: inline-block;
            font-size: 16px;
            margin-bottom: 6px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ninjadash-sales-content__item--total{
            font-size: 24px;
            font-weight: 600;
            margin: 0;
            line-height: 1;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
`;

const DashboardBaseStyleWrap = Styled.div`
    .ninjadash-configuration-box{
        display: flex;
        margin: -5px;
        .ninjadash-configuration-box__item{
            margin: 5px;
            text-align: center;
            flex-wrap: wrap;
            .ninjadah-color-code{
                display: block;
                margin-top: 5px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    /* Button Hover Color Style */
    .ninjadash-configuration-box {
        &.ninjadash-configuration-box-button-hover{
            .ninjadash-configuration-box__item{
                .ant-btn-primary{
                    background-color: ${({ theme }) => theme['primary-hover']};
                }
                .ant-btn-secondary{
                    background-color: ${({ theme }) => theme['secondary-hover']};
                }
                .ant-btn-success{
                    background-color: ${({ theme }) => theme['success-hover']};
                }
                .ant-btn-info{
                    background-color: ${({ theme }) => theme['info-hover']};
                }
                .ant-btn-warning{
                    background-color: ${({ theme }) => theme['warning-hover']};
                }
                .ant-btn-danger{
                    background-color: ${({ theme }) => theme['danger-hover']};
                }
                .ant-btn-dark{
                    background-color: ${({ theme }) => theme['dark-hover']};
                }
                .ant-btn-gray{
                    background-color: ${({ theme }) => theme['gray-hover']};
                }
            }
        }
    }
    .ninjadash-heading-typography{
        p{
            margin-bottom: 0;
        }
    }
    .ninjadash-body-typography{
        margin-bottom: 20px;
        h1{
            margin-bottom: 0;
        }
        .ninjadash-typo-list{
            display: flex;
            align-items: center;
            margin: -10px;
            color: ${({ theme }) => theme['primary-color']};
            li{
                margin: 10px;
            }
        }
        .ninjadash-body-typography__text{
            margin-top: 14px;
        }
        &.typo-small{
            p{
                font-size: 14px;
                line-height: 1.57;
            }
        }
        &.typo-big{
            p{
                font-size: 16px;
                line-height: 1.69;
            }
        }
    }
    h1{
        margin-bottom: 15px;
    }
    .ant-card .ant-card-body{
        >h1{
            margin-bottom: 30px;
        }
    }
    .ant-row{
        margin: -5px 0;
    }
    .ant-col{
        margin: 5px 0;
    }
`;

const CardBarChart = Styled.div`
    >div{
        @media only screen and (max-width: 575px) {
            flex-flow: column;
            align-items: flex-start !important;
            ul{
                margin: 0 0 15px;
            }
        }
    }
    .card-bar-top{
        &.flex-grid{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: -20px;
            @media only screen and (max-width: 575px) {
                flex-flow: column;
                align-items: center;
            }
            h1{
                font-size: 24px;
                margin-bottom: 22px;
                @media only screen and (max-width: 1199px) {
                    font-size: 20px;
                }
            }
        }
        .flex-grid-child{
            padding: 0 20px;
        }
        p{
            font-size: 14px;
            margin-bottom: 8px;
            color: ${({ theme }) => theme['light-color']};
        }
        h1{
            margin-bottom: 18px;
            sub{
                bottom: 0;
                font-size: 14px;
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
                color: ${({ theme }) => theme['success-color']};
                svg{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                }
            }
        }
        .profitGrowth-list{
            text-align: center;
            .custom-label{
                font-size: 14px
            }
        }
    }
    .ninjadash-chartdata-list{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
        li{
            display: inline-flex;
            align-items: center;
            font-size: 14px;
            text-transform: capitalize;
            color: ${({ theme }) => theme['extra-light-color']};
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
            }
        }
    }
    .chartjs-tooltip{
        min-width: 140px !important;
        @media only screen and (max-width: 1199px){
            min-width: 115px !important;
        }
    }
    .deals-barChart{
        display: flex;
        .card-bar-top{
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            }
        }
        h4{
            font-weight: 400;
            color: ${({ theme }) => theme['light-gray-color']};
            p{
                &.growth-down{
                    .deal-percentage{
                        color: ${({ theme }) => theme['danger-color']};
                    }
                }
                &.growth-up{
                    .deal-percentage{
                        color: ${({ theme }) => theme['success-color']};
                    }
                }
                .deal-percentage{
                    svg,
                    img,
                    i{
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 3px;
                    }
                }
                .deal-value{
                    font-size: 22px;
                    font-weight: 600;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
                    color: ${({ theme }) => theme['dark-color']};
                }
            }
        }
    }
    .deals-list{
        .custom-label{
            font-size: 14px;
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            }
        }
    }
`;

const UserOverviewStyle = Styled.div`
    .ant-card{

        @media only screen and (max-width: 1599px){
            min-height: auto;
        }
    }
    .ninjadash-chart-container{
        @media only screen and (max-width: 1399px){
            height: auto !important;
        }
    }
    .label-detailed {
        display: flex;
        justify-content: center;
        margin: 0 -12px 0;
        flex-wrap: wrap;
        .label-detailed__single {
            padding: 5px 8px;
            margin-bottom: 11px;
            display: flex;
            align-items: center;
            .label-detailed__total {
                font-size: 22px;
                font-weight: 600;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                padding: 0 5px;
            }
            .label-detailed__status {
                display: inline-flex;
                align-items: center;
                line-height: normal;
            }
            .label-detailed__status strong {
                padding: 0;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
`;

const LocationTableWrap = Styled.div`
    max-height: 300px;
    margin-bottom: 30px;
    border: 1px solid ${({ theme }) => theme[theme.mainContent]['light-border']};
		@media only screen and (max-width: 1199px){
			max-height: none;
		}
    .ant-table {
        background: transparent !important;
    }
    table{
        tr{
            &:first-child{
                td{
                    padding-top: 15px;
                }
            }
            &:last-child{
                td{
                    padding-bottom: 15px;
                }
            }
            th{
                font-size: 12px;
                font-weight: 500;
                text-transform: uppercase;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                border-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                padding: 10.5px 20px;
            }
            td{
                font-size: 15px;
                border: 0 none;
                padding: 10.5px 20px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};

                &:first-child{
                    font-weight: 500;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
            }
            th,
            td{
                &:last-child{
                    padding-right: 40px;
                    text-align: right;
                }
            }
        }
    }

`;
const SaleLocationMap = Styled.div`
    text-align: center;
    height: 100%;
    .svgMap-wrapper{
        height: 100%;
        .svgMap-container,
        .svgMap-map-container,
        .svgMap-map-wrapper,
        .svgMap-map-image{
            height: 100%;
        }
        .svgMap-map-wrapper{
            position: relative;
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
        }
    }
    .__react_component_tooltip {
        background: ${({ theme }) => theme['dark-color']};
        border-radius: 3px;
        box-shadow: 0 10px 15px ${({ theme }) => theme['light-color']}15;
    }
    >div{
        width: 100%;
        height: 250px;
        overflow: hidden;
        @media only screen and (max-width: 479px){
            height: 200px;
        }
    }
    svg{
        width: 450px;
        @media only screen and (max-width: 479px){
            height: 180px;
        }
        @media only screen and (max-width: 440px){
            width: 310px;
        }
        @media only screen and (max-width: 320px){
            width: 280px;
        }
    }
    .svgMap-map-controls-wrapper{
        position: absolute;
        right: 20px;
        left: auto !important;
        bottom: 10px;
        box-shadow: none !important;
        .svgMap-map-controls-zoom{
            display: flex;
            flex-direction: column;
        }
        button{
            display: inline-block;
            width: 27px;
            height: 27px;
            background: none;
            color: #5a5f7d;
            border: 1px solid #f1f2f6;
            padding: 0;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            cursor: pointer;
            margin: 0 !important;
            &.svgMap-zoom-in-button{
                &:before{
                    width: 8px !important;
                    height: 1px !important;
                }
                &:after{
                    width: 1px !important;
                    height: 8px !important;
                }
            }
            &.svgMap-zoom-out-button{
                &:before{
                    width: 8px !important;
                    height: 1px !important;
                }
            }
            &:first-child{
                border-radius: 6px 6px 0 0;
            }
            &:last-child{
                border-radius: 0 0 6px 6px;
            }
            &:focus{
                outline: none;
            }
            svg{
                width: 10px;
            }
        }
        button + button{
            border-top: 0 none;
        }
    }
`;

const SalesRevenueWrapper = Styled.div`
    .ninjadash-sales-revenue{
        margin-bottom: 0 !important;
    }
    .ninjadash-sales-revenue-lineChart{
        margin-top: 10px;
        margin-left: -4px;
        margin: 10px 0 0 -4px;
    }
    .ninjadash-chart-container{
        min-height: 290px;
        margin-right: -14px;
        @media only screen and (max-width: 1199px){
            min-height: auto;
        }
    }
    .ninjadash-sales-revenue-loading{
        min-height: 290px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const SalesReportWrapper = Styled.div`
    .ninjadash-sales-revenue{
        margin-bottom: 0 !important;
    }
    .ninjadash-sales-revenue-lineChart{
        margin-top: 10px;
        margin-left: -4px;
        margin: 10px 0 0 -4px;
    }
    .ninjadash-chart-container{
        min-height: 260px;
        margin-right: -14px;
        @media only screen and (max-width: 1199px){
            min-height: auto;
        }
        @media only screen and (max-width: 1399px){
            min-height: auto;
        }
    }
    .ninjadash-sales-revenue-loading{
        min-height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .label-detailed {
        display: flex;
        justify-content: center;
        margin: -16px -12px -5px;
        flex-wrap: wrap;
        .label-detailed__single {
            padding: 5px 8px;
            margin-bottom: 11px;
            display: flex;
            align-items: center;
            .label-detailed__type {
                font-size: 14px;
                font-weight: 400;
                display: inline-flex;
                align-items: center;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                padding: 0 5px;
                &::before{
                    content: "";
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #eee;
                    display: inline-block;
                    margin-right: 5px;
                }
            }
            .label-detailed__type--primary:before {
                background: ${({ theme }) => theme['primary-color']};
            }
            .label-detailed__type--info:before {
                background: ${({ theme }) => theme['info-color']};
            }
            .label-detailed__total {
                font-size: 22px;
                font-weight: 600;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                padding: 0 5px;
            }
            .label-detailed__status {
                display: inline-flex;
                align-items: center;
                line-height: normal;
            }
            .label-detailed__status strong {
                padding: 0;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
`;
const SalesOverviewStyleWrap2 = Styled.div`
    .ninjadash-overview-percentage{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 12px;
        .ninjadash-overview-percentage__item{
            display: flex;
            align-items: center;
            margin: 15px;
        }
        .ninjadash-overview-percentage__point{
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
            background-color: ${({ theme }) => theme['primary-color']};
        }
        .ninjadash-overview-percentage__text{
            font-size: 15px;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-card-body{
        padding: 30px 25px !important;
    }
    .ninjadash-overview-wrap{
        color: #333;
        canvas{
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }
        &__inner{
            @media only screen and (max-width: 480px){
                height: 150px !important;
            }
        }
    }
    .ninjadash-overview-box{
        margin-top: 10px;
        padding: 16.65px 32px;
        border-radius: 8px;
        background: ${({ theme }) => theme[theme.mainContent]['light-background']};
        .ninjadash-overview-box-item{
            text-align: center;
            h4{
                font-size: 18px;
                line-height: 1;
                font-weight: 600;
                margin-bottom: 6px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
            p{
                margin-bottom: 0;
                font-size: 15px;
                line-height: 1.25;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }

`;

const RevenueGeneratedWrapper = Styled.div`
    .ninjadash-revenue-company{
        .ninjadash-revenue-company__icon{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            height: 32px;
            width: 32px;
            &.ninjadash-revenue-company__icon-google{
                background-color: #F1433610;
                color: #F14336
            }
            &.ninjadash-revenue-company__icon-facebook{
                background-color: #1976D210;
                color: #1976D2;
            }
            &.ninjadash-revenue-company__icon-twitter{
                background-color: #03A9F410;
                color: #03A9F4;
            }
            &.ninjadash-revenue-company__icon-linkedin{
                background-color: #007AB910;
                color: #007AB9;
            }
            &.ninjadash-revenue-company__icon-instagram{
                background-color: #D1208F10;
                color: #D1208F;
            }
        }
        .ninjadash-revenue-company__content{
            span{
                font-size: 15px;
                font-weight: 500;
                text-transform: capitalize;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .ant-table-content{
        table{
            tr{
                th{
                    &:first-child,
                    &:last-child{
                        text-align: left !important;
                    }
                }
                th,
                td{
                    padding-right: 0;
                    text-align: right;
                }
                td{

                    padding: 9.5px 15px !important;
                    &:first-child{
                        padding-left: 0 !important;
                    }
                    &:last-child{
                        padding-right: 0px !important;
                    }
                    .ninjadash-trend-progress{
                        min-width: 80px;

                        .ninjadash-trend-percentage{
                            font-size: 14px;
                            font-weight: 400;
                            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 14px;
                            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        }
                        .ant-progress-inner{
                            background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
                        }
                        .ant-progress-bg{
                            border-radius: 30px;
                        }
                        &.ninjadash-trend-progress-google{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['primary-color']};
                            }
                        }
                        &.ninjadash-trend-progress-facebook{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['info-color']};
                            }
                        }
                        &.ninjadash-trend-progress-twitter{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['success-color']};
                            }
                        }
                        &.ninjadash-trend-progress-linkedin{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['secondary-color']};
                            }
                        }
                        &.ninjadash-trend-progress-instagram{
                            .ant-progress-bg{
                                background-color: ${({ theme }) => theme['warning-color']};
                            }
                        }
                    }
                }
            }
        }
    }
    .table-responsive{
        .ant-table-content{
            table{
                tr{
                    th,
                    td{
                        white-space: normal;
                    }
                }
            }
        }
    }
    .ant-table-content .ant-table-thead >tr >th.ant-table-cell:last-child{
        text-align: left !important;
    }
`;
const CardBarChart2 = Styled.div`
    @media only screen and (max-width: 379px){
        text-align: center
    }
    h1{
        margin-bottom: 5px;
    }
    @media only screen and (max-width: 1500px){
        h1{
            font-size: 22px;
        }
    }
    & > span{
        font-size: 14px;
        color: ${({ theme }) => theme['light-gray-color']};
    }
    p{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 21px 0 -6px 0;
        @media only screen and (max-width: 379px){
            justify-content: center;
        }
        .growth-upward, .growth-downward{
            display: inline-flex;
            align-items: center;
            ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
            font-weight: 600;

            svg{
                width: 15px;
            }
        }
        .growth-upward{
            color: ${({ theme }) => theme['success-color']};
            svg{
                fill: ${({ theme }) => theme['success-color']};
            }
        }
        .growth-downward{
            color: ${({ theme }) => theme['danger-color']};
            svg{
                fill: ${({ theme }) => theme['danger-color']};
            }
        }
        span{
            color: ${({ theme }) => theme['light-gray-color']};
            font-size: 14px;
            display: inline-block;
        }
    }
`;

const ChartContainer = Styled.div`
    display: block;
    font-family: 'Jost', sans-serif;
    .chart-divider {
        display: block;
        width: 100%;
        height: 100px;
    }
    .chartjs-tooltip {
        opacity: 1;
        position: absolute;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        box-shadow: 0 3px 16px ${({ theme }) => theme[theme.mainContent]['border-color-default']}50;
        padding: 8px 6px !important;
        border-radius: 5px;
        min-width: 80px;
        transition: all 0.5s ease;
        pointer-events: none;
        transform: translate(-50%, 5%);
        z-index: 222;
        top: 0;
        left: 0;
        @media only screen and (max-width: 991px){
            transform: translate(-60%, 5%);
        }
        &:before {
            position: absolute;
            content: '';
            border-top: 5px solid ${({ theme }) => theme[theme.mainContent]['white-background']};
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            bottom: -5px;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 50%;
            transform: translateX(-50%);
        }
        table td{
            padding: 0;
        }
    }
    .chartjs-tooltip-key {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: "pink";
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')} : 5px;
    }
    .tooltip-title {
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        font-size: 12px;
        line-height: 1;
        font-weight: 500 !important;
        font-family: 'Jost', sans-serif;;
        text-transform: capitalize;
        margin-bottom: 4px;
    }
    .tooltip-value {
        color: #63b963;
        font-size: 22px;
        font-weight: 600 !important;
        font-family: 'Jost', sans-serif;;
    }
    .tooltip-value sup {
        font-size: 12px;
        @media only screen and (max-width: 1199px){
            font-size: 11px;
        }
    }
    table{
        tbody{
            td{
                font-size: 12px;
                font-weight: 500;
                padding-bottom: 3px;
                color: ${({ theme }) => theme['extra-light-color']};
                .data-label{
                    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 3px;
                    color: ${({ theme }) => theme['light-gray-color']};
                }
            }
        }
    }
`;

const UpcomingEventsStyleWrap = Styled.div`
    .ninjadash-event-details{
        .ninjadash-event-details__date{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: ${({ theme }) => theme['white-color']};
            min-width: 60px;
            min-height: 60px;
            padding: 0 10px;
            border-radius: 6px;
            &.ninjadash-event-primary{
                background-color: ${({ theme }) => theme['primary-color']};
            }
            &.ninjadash-event-info{
                background-color: ${({ theme }) => theme['info-color']};
            }
            &.ninjadash-event-secondary{
                background-color: ${({ theme }) => theme['secondary-color']};
            }
            &.ninjadash-event-warning{
                background-color: ${({ theme }) => theme['warning-color']};
            }
            span{
                font-size: 15px;
                font-weight: 500;

            }
        }
        .ninjadash-event-details__content{
            margin:  ${({ theme }) => (theme.rtl ? '-1px 15px 0 0' : '-1px 0 0 15px')};
            .ninjadash-event-details__title{
                font-size: 15px;
                font-weight: 400;
                margin-bottom: 2px;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
            .ninjadash-event-details__time{
                line-height: 1;
                margin-bottom: 0;
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
        }
    }
    .ant-table-content{
        .ant-table-tbody {
            >tr >td.ant-table-cell:last-child{
                padding-right: 0;
            }
            >tr:first-child >td.ant-table-cell{
                padding-top: 6px !important;
            }
        }
    }
    .ninjadash-event-details-action{
        display: flex;
        align-items: center;
        margin: -12px;
        justify-content: flex-end;
        a{
            display: block;
            margin: 12px;
            svg{
                fill: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
            @media only screen and (max-width: 575px){
                margin: 0 5px;
            }
        }
        .ninjadash-event-details-action__edit{
            &:hover{
                svg{
                    fill: ${({ theme }) => theme['info-color']};
                }
            }

        }
        .ninjadash-event-details-action__delete{
            &:hover{
                svg{
                    fill: ${({ theme }) => theme['danger-color']};
                }
            }
        }
    }
`;

const KnowledgeBaseCardWrap = Styled.div`
    @media only screen and (max-width: 1599px){
        min-height: 360px;
    }
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    .ninjadash-knowledgebase-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        min-height: 310px;
        .ninjadash-knowledgebase-card__text{
            text-align: center;
            margin-top: 18px;
        }
        .ninjadash-knowledgebase-card__title{
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 8px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
            font-size: 16px;
            line-height: 1.75;
            margin-bottom: 26px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .ninjadash-knowledgebase-card__action{
        font-weight: 500;
        height: 38px;
    }
`;

const TimelineStyleWrap = Styled.div`
    .ant-timeline{
        margin-top: 5px;
        .ant-timeline-item-content{
            p{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 500;
                span{
                    color: ${({ theme }) => theme[theme.mainContent]['dark-light']};
                    &.ninjadash-time{
                        font-size: 13px;
                        font-weight: 400;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    }
                }
            }
        }
    }
    .ant-card {
        @media only screen and (max-width: 1199px){
            min-height: 410px;
        }
        @media only screen and (max-width: 991px){
            min-height: auto;
        }
        .ant-card-body{
            padding-bottom: 32px !important;
        }
    }
`;

const InboxListStyleWrap = Styled.div`
    .ant-list {
        padding-top: 5px;
        .ant-list-items{
            padding-top: 0;
            li{
                &:not(:last-child){
                    margin-bottom: 18px;
                }
            }
            .ant-list-item{
                padding: 0;
                border: 0 none;
                .ant-list-item-meta{
                    padding: 0;
                    border: 0 none;
                }
                .ninjadash-mail-time{
                    font-size: 13px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                }
                .ant-list-item-meta-avatar{
                    width: 34px;
                    height: 34px;
                    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 16px;
                }
            }
            .ant-list-item-meta-content{
                margin-top: -4px;
                .ant-list-item-meta-title{
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 0;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
										a{
											color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
										}
                }
                .ant-list-item-meta-description{
                    font-size: 12px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
    }
    .ant-card{
        @media only screen and (max-width: 1199px){
            min-height: 446px;
        }
        @media only screen and (max-width: 991px){
            min-height: auto;
        }
    }
`;

const TopSellerWrap = Styled.div`
    .ant-table {
        background: transparent !important;
    }
    .top-seller-table {
        min-height: auto;
        .product-info{
            max-width: 280px;
            .product-img{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            }
            .product-name{
                text-transform: capitalize;
                font-size: 15px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']}
            }
        }
        .ant-table-thead {
            th {
                background: ${({ theme }) => theme[theme.mainContent]['light-background']};
            }
        }
        .ant-table-row {
            .ant-table-cell{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                &:not(first-child){
                    text-align: right;
                }

            }
        }
    }
`;

const BrowserStateWrap = Styled.div`
    .ant-table {
        min-height: 310px;
        background: transparent !important;

        .ant-table-thead {
            th {
                background: ${({ theme }) => theme[theme.mainContent]['light-background']};
                &:not(:first-child){
                    text-align: right;
                }
            }
        }
        .ant-table-tbody >tr >td.ant-table-cell{
            padding-top: 20px;
        }
        .ant-table-row {
            .ant-table-cell{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                &:not(first-child){
                    text-align: right;
                }
            }
        }
    }
    .ninjadash-product-info{
        .ninjadash-product-img{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            img{
                max-width: 31px;
            }
        }
        .ninjadash-product-name{
            font-size: 15px;
            text-transform: capitalize;
            font-weight: 500;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']}
        }
    }
`;

const PerfomanceOverviewStyle = Styled.div`
    margin-top: 26px;
    .doughnutchart-inner-label{
        display: inline-block;
        margin-top: 6px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .ninjadash-chartpoint{
        margin-top: 34px !important;
        margin-bottom: 10px !important;
    }
    .ninjadash-chartpoint-graph{
        @media only screen and (max-width: 480px){
            height: 150px !important;
            width: auto !important;
        }
    }
    .performance-chart-wrap{
        display: flex;
		align-items: center;
        @media only screen and (max-width: 991px){
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    }
    .performance-chart-labels{
        margin-left: 38px;
		ul {
			li {
				font-size: 15px;
				font-weight: 400;
				display: flex;
				align-items: center;
				&:not(:last-child) {
					margin-bottom: 12px;
				}
				&::before {
					content: '';
					width: 7px;
					height: 7px;
					border-radius: 50%;
					background: #ccc;
					margin-right: 7px;
				}
				&.label-target {
					color: ${({ theme }) => theme[theme.mainContent]['gray-color']};
					&::before {
						background: ${({ theme }) => theme['primary-color']};
					}
				}
				&.label-completed {
					&::before {
						background: ${({ theme }) => theme['info-color']};
					}
				}
				&.label-in-progress {
					&::before {
						background: ${({ theme }) => theme['warning-color']};
					}
				}
			}
		}
        @media only screen and (max-width: 991px){
            margin: 0 !important;
            ul{
                display: flex;
                align-items: center;
                gap: 20px;
                margin-top: 15px;
                li{
                    margin: 0 !important;
                }
            }
        }
        @media only screen and (max-width: 479px){
            ul{
                flex-wrap: wrap;
                justify-content: center
            }
        }
    }
	.performance-chart {
		width: 285px;
		height: 297px;
		margin: -25px;
	}
`;

const PerformanceChartWrapper = Styled.div`
    @media only screen and (max-width: 1599px){
        /* min-height: 524px; */
        /* background: #fff; */
        border-radius: 10px;
    }
    .performance-lineChart{
        margin-top: 20px;
        .chart-label{
            display: none;
        }
        ul{
            margin-top: 16px;
            li{
                &:not(:last-child){
                    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 25px;
                }
            }
        }
    }
    .chartjs-tooltip{
        min-width: 175px !important;
        @media only screen and (max-width: 767px){
            min-width: 150px !important;
        }
    }
`;
const RevenueSourceStyle = Styled.div`
    padding: 25px 25px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 1366px){
        padding-bottom: 0;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    @media only screen and (max-width: 767px){
        flex-wrap: wrap;
    }
    @media only screen and (min-width: 767px){
        &.revenuePieChart--wrapper{
            .revenuePieChart{
                margin-left: -21px;
            }
            .chart-content__details{
                margin-left: 30px;
            }
        }
    }
    .ninjadash-chart-container{
        position: relative;
        .chartjs-tooltip{
            position: absolute;
            background: #000;
            color: #fff;
            padding: 10px 15px;
            border-radius: 6px;
            table td{
                padding: 0;
            }
        }
    }
    .pieChart{
        width: 250px !important;
        height: 250px !important;
        @media only screen and (max-width: 1366px){
            width: 170px !important;
            height: 170px !important;
        }
    }
    .chart-content__details {
        display: flex;
        align-items: center;
        @media only screen and (max-width: 767px){
            flex-wrap: wrap;
            justify-content: center;
        }
    }
    .chart-content__single {
        text-align: center;
        span {
            display: block;
            &.icon {
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 22px 22px 0;
                border-radius: 10px;
                @media only screen and (max-width: 1366px){
                    width: 60px;
                    height: 60px;
                }
                @media only screen and (max-width: 479px){
                    width:60px;
                    height: 60px;
                    margin: 15px 15px 0;
                }
                svg {
                    width: 30px;
                }
                span,
                i{
                    font-size: 30px;
                }
                &.color-facebook {
                    background: rgba(130, 49, 211, 0.2);
                    svg{
                        fill: #8231D3;
                    }
                }
                &.color-google {
                    background: rgba(88, 64, 255, 0.2);
                }
                &.color-twitter {
                    background: rgba(0, 170, 255, 0.2);
                    svg{
                        fill: #00aaff;
                    }
                }
            }
            &.label {
                font-weight: 500;
                font-size: 15px;
                margin-top: 7px;
                color: var(--color-dark);
            }
            &.data {
                font-weight: 500;
                font-size: 14px;
                margin-top: 2px;
                color: var(--color-gray);
            }
        }
    }
`;

export {
  PerformanceChartWrapper,
  OverviewDataStyleWrap,
  NewProductWrapper,
  TotalChartStyleWrap,
  SalesOverviewStyleWrap,
  ChartContainer,
  DashboardBaseStyleWrap,
  EChartCard,
  CardBarChart,
  SaleLocationMap,
  UserOverviewStyle,
  LocationTableWrap,
  CardBarChart2,
  SalesRevenueWrapper,
  RevenueGeneratedWrapper,
  SalesOverviewStyleWrap2,
  TopSellerWrap,
  BrowserStateWrap,
  PerfomanceOverviewStyle,
  DemoFourStyle,
  UpcomingEventsStyleWrap,
  KnowledgeBaseCardWrap,
  TimelineStyleWrap,
  InboxListStyleWrap,
  SalesReportWrapper,
  RevenueSourceStyle,
};
