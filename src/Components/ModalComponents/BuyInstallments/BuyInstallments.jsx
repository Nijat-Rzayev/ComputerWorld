import React from 'react'
import BasketCard from "../../Basket/BasketCard"
import "./BuyInstallments.css"
import rightArrow from "../../../Assest/rightArrow.png"
import manat from "../../../Assest/manat.png"
import Close from "../../../Assest/x_Closse.webp"
import { connect } from 'react-redux'
function BuyInstallments(props) {
    const img = "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-2303_711225e9359b84be2fac77480ccf59a8_w_png.webp";
    const ModalHidden = () => {
        props.dispatch({ type: "ModalFalse" })
        console.log("sad");
    };
    return (
        <div className='BuyInstallments'>
            <div className="BuyInstallmentsCloseBtn">
                <button onClick={ModalHidden} className='closeModal'>
                    <img src={Close} alt="" />
                </button>
            </div>
            <div className="BuyInstallmentsInner">
                <h1>Hissə-hissə ödəniş</h1>
                <div className="buyInstallmentsCard">
                    <div className="buyInstallmentsCardInner">
                        <img src={img} className="buyInstallmentsImg" />
                        <div className="buyInsName">Xiaomi Poco F5 Pro 12/256 GB Black</div>
                        <div className="buyCounter">
                            <p>Miqdar</p>
                            <div className="counter">
                                <button>-</button>
                                <input type="number" value={1} readOnly />
                                <button>+</button>
                            </div>
                        </div>
                        <div className="buyInsPrice">
                            1499.55
                            <img src={manat} className='ManatMoney' alt="" />
                        </div>
                    </div>
                </div>
                <div className="Calculator">
                    <div className="MyRange">
                        <ul className='RangeInnerUl'>
                            <li data-period="6">6</li>
                            <li data-period="9">9</li>
                            <li data-period="12">12</li>
                            <li data-period="15">15</li>
                            <li data-period="18">18</li>
                        </ul>
                    </div>
                    <div className="rangeDetails">
                        <ul>
                            <li>
                                <p>Müddət:</p>
                                <h4>18 ay</h4>
                            </li>
                            <li>
                                <p>İlkin ödəniş:</p>
                                <h4>0 M</h4>
                            </li>
                            <li>
                                <p>Aylıq ödəniş:</p>
                                <h4>89.6 M</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dravTheOrderBtn">
                    <button >Sifarişi rəsmləşdir <img src={rightArrow} alt="" className='rightArrowImg' /></button>
                </div>
                <div className="BuyInstallmentsBottom">
                    <p>*İlkin ödəniş məbləği ümumi dövriyyə və ödəniş tarixçəsindən asılı olaraq dəyişə bilər.</p>
                    <p>**</p>
                    <p>**Bu məhsulu endirimli qiymətlə (endirim olduqda) BirKart vasitəsilə ala bilərsniz.</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(BuyInstallments)