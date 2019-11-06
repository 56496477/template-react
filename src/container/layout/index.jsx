import styled from 'styled-components';

const YjContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0px;
    max-width: 750px;
    min-width: 320px;
    margin: 0 auto;
    background:#f6f6f8;
`;

const OrderContainer = styled.div`
    width: 100%;
    height: 100%;
    background:#f6f6f8;
    .am-list-body {
        background:#f6f6f8 !important;
    }
`;

const OrderItem = styled.div`
    width: 100%;
    height: 140px;
    background:#fff;
    margin-bottom: 10px;
    position: relative;
    .order-header {
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e5e5e5;
        .order-header-right {
            color: #666666;
        }
    }
    .order-body {
        padding: 10px;
        .order-body-one {
            font-size: 13px;
            color: #666666;
            font-weight: 400;
            display: flex;
            .one-img, .one-img > img {
                width: 78px;
                height: 78px;
            }
            > div {
                vertical-align:top; 
                /* display: inline-block; */
            }
            .one-info {
                flex: 1;
                margin-left: 8px;
                > div {
                    word-break:keep-all;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis; 
                    line-height: 20px;
                }
                .ccc {
                    display: flex;
                    justify-content: space-between;
                    .two-button {
                        border-radius: 3px;
                        width: 60px;
                        height: 22px;
                        text-align: center;
                        line-height: 22px;
                        font-size: 12px;
                        border: 1px solid #e5e5e5;
                        color: #666666;
                    }
                }
            }
        }
        .order-body-two {
            
            .two-button {
                position: absolute;
                top: -45px;
                right: 11px;
                border-radius: 3px;
                width: 60px;
                height: 25px;
                text-align: center;
                line-height: 22px;
                font-size: 12px;
                border: 1px solid #e5e5e5;
            }
        }
        > div {
            vertical-align: bottom; 
            display: inline-block;
        }
    }
`;

const BuyContainer = styled.div`
    width: 100%;
    padding-bottom: 30px;
    > div {
        overflow: hidden;
        overflow: auto;
    }
    .banner {
        overflow: hidden;
        overflow-y: auto;
    }
    .banner::-webkit-scrollbar {
        width: 0;
    }
    .banner, .banner > a, .banner-imgs {
        width: 100%;
        height: 150px;
        display: block;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .pay-container-fixed {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 5px;
    }
    .pay-container {
        /* position: absolute;
        bottom: 5px; */
        background: #fff;
        padding-bottom: 15px;
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        font-weight: 300;
        .pay {
            display: flex;
            height: 44px;
            justify-content: space-between;
            .pay-button {
                width: 80px;
                text-align: center;
                color: #fff;
                font-size: 15px;
                font-weight: 400;
                border-radius: 0 5px 5px 0;
                background-image:linear-gradient(40deg, #f15887 0%, #fe9b86 100%);
            }
            .pay-info {
                white-space:nowrap;
                .activeColor {
                    margin-right: 5px;
                }
                .pay-info-money {
                    margin-left: 15px;
                }
            }
        }
    }
    .buy-container {
        background: #fff;
        padding-bottom: 15px;
        margin-bottom: 10px;
        position: relative;
        width: 100%;
        .buy {
            .buy-title {
                h3{
                    font-size: 15px;
                    font-weight: 400;
                    padding: 3px 10px;
                    margin: 0;
                    line-height: 35px;
                }
                span{
                    font-size: 12px;
                }
                img{
                    margin-left: 2px;
                    width: 14px;
                    height: 14px;
                    vertical-align: middle;
                }
                
                border-bottom: 1px solid #e5e5e5;
            }
            .buy-con {
                padding: 15px 0;
                .buy-con-button{
                    display: flex;
                    justify-content: center;
                    .buy-button, .buy-button-active{
                        margin-left: 4px;
                        padding: 6px;
                        > div {
                            line-height: 17px;
                            /* margin-top: 5px; */
                        }
                    }
                    .buy-button:nth-of-type(1), .buy-button-active:nth-of-type(1) {
                        margin-left: 0px;
                    }
                }
                .buy-show {
                    width: 230px;
                    text-align: center;
                    padding: 12px 8px;
                    font-size: 13px;
                    position: absolute;
                    background: rgba(0,0,0,0.6);
                    color: #fff;
                    border-radius: 4px;
                    margin-top: -30px;
                    margin-left: -115px;
                    left: 50%;
                }
                .buy-con-slider{
                    margin-top: 30px;
                }
                .buy-con-slider-value {
                    position: absolute;
                    right: 30px;
                    font-size: 13px;
                    margin-top: -6px;
                }
            }
        }
    }
    .descript-container {
        background-color: #fff;
        position: relative;
        height: 100px;
        width: 100%;
        .descript {
            display: flex;
            padding: 10px;
            .descript-left, .descript-left > img {
                width: 80px;
                height: 80px;
            }
            .descript-right {
                padding-left: 12px;
                .marginLeft20 {
                    margin-left: 20px;
                }
                h3 {
                    font-size: 16px;
                    font-weight: 600;
                    padding: 0;
                    margin: 0;
                    line-height: 19px;
                    padding-bottom: 0px;
                }
                .two {
                    display: flex;
                }
                .descript-right-item {
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                    margin-top: 5px;
                    white-space:nowrap;
                    img{
                        width: 15px;
                        height: 15px;
                        margin-right: 3px;
                    }
                    span {
                        margin-left: 5px;
                    }
                }
                
            }
            .logo {
                width: 20px;
                height: 26px;
                position: absolute;
                right: 12px;
                margin-top: -5px;
            }
        }
    }

`;

export {
    OrderItem,
    YjContainer,
    BuyContainer,
    OrderContainer
};