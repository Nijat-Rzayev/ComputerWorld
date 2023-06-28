import React, { useRef, useEffect, useState } from 'react'
import "./DrawTheOrder.css"
import "./DrawTheOrderRes.css"
import { connect } from 'react-redux'
import manat from "../../../Assest/manat.png"
import Close from "../../../Assest/x_Closse.webp"
import BasketCard from '../../Basket/BasketCard'
function DrawTheOrder(props) {
    const { Modal } = props.state;
    const ModalHidden = () => {
        props.dispatch({ type: "ModalFalse" })
    };
    const [TotalPriceChanged, setTotalPriceChanged] = useState(props.state.Basket)
    const TotalPrice = TotalPriceChanged.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalPriceDraw = (TotalPrice * 2) / 100
    return (
        <div className={`DrawInner ${Modal ? "active" : ""}`}  >
            <div className="BasketInnerModal">
                <div className="modalHeader">
                    <h2>Səbət</h2>
                    <button onClick={ModalHidden}>
                        <img src={Close} className='ManatMoneyImg' alt="" />
                    </button>
                </div>
                <div className="modalContent">
                    <BasketCard />
                </div>
                <div className="modalPriceInfo">
                    <div>
                        <p>Məhsulun qiyməti</p>
                        <p>{TotalPrice} <img src={manat} alt="" className='ManatMoneyImg' /></p>
                    </div>
                    <div>
                        <p>Nağd alış endirimi</p>
                        <p>-{Math.round(totalPriceDraw)} <img src={manat} className='ManatMoneyImg' alt="" /></p>
                    </div>
                    <div className="totalPriceModal">
                        <p>Yekun məbləğ</p>
                        <p>{Math.round(TotalPrice - totalPriceDraw)} <img src={manat} className='ManatMoneyImg' alt="" /></p>
                    </div>
                </div>
                <div className="modalFooter">
                    <button onClick={ModalHidden}>Alış verişə dəvam et</button>
                    <button>Sifarişi rəsmiləşdir</button>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(DrawTheOrder);
