import React from 'react';
import { floatDiv, floatMul } from 'utils/utils';
// import shop from 'assets/images/shop.png';
import icon from 'assets/images/icon.png';
// import logo from 'assets/images/logo3.png';
import dushu from 'assets/images/dushu.png';
import chandi from 'assets/images/chandi.png';
import xiangxing from 'assets/images/xiangxing.png';


export default function BuyDescript (props) {
    const datas = props.datas;
    return (
        <div className="descript-container">
            <div className="descript">
                <div className="descript-left">
                    <img src={datas.skuImageUrl} />
                </div>
                <div className="descript-right">
                    <h3>{datas.skuName || ''}</h3>
                    <div className="descript-right-item">
                        <img src={chandi}/>
                        <span className="titleColor">产地:</span>
                        <span className="infoColor">{datas.habitat}</span>
                    </div>
                    <div className="two">
                        <div className="descript-right-item">
                            <img src={xiangxing}/>
                            <span className="titleColor">香型:</span>
                            <span className="infoColor">{datas.scent}</span>
                        </div>
                        <div className="descript-right-item marginLeft20">
                            <img src={dushu}/>
                            <span className="titleColor">度数:</span>
                            <span className="infoColor">{datas.alcohol}℃</span>
                        </div>
                    </div>
                    <div className="descript-right-item">
                        <img src={icon}/>
                        <span className="titleColor">价格:</span>
                        <span className="infoColor"><span className="activeColor">{floatDiv(datas.unitPrice || 0, 1000)}</span>元/毫升(<span className="activeColor">{floatMul(floatDiv(datas.unitPrice || 0, 1000), 50)}</span>元/两)</span>
                    </div>
                </div>
                <img src={datas.brandLogoData.logoUrl} className="logo"/>
            </div>
        </div>
    );
}