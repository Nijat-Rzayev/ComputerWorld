import React, { useState } from 'react'
import manat from "../../Assest/manat.png"
import deleteItem from "../../Assest/deleteItem.webp"
import BasketCard from './BasketCard'
import { connect } from "react-redux";

import "./Basket.css"
function Basket(props) {
    const [TotalPrice, setTotalPrice] = useState(props.state.Basket)
    const totalPrice = TotalPrice.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const calculatedPrice = (totalPrice * 2) / 100
    return (
        <>
            <div className='Basket'>
                <h1>Səbət</h1>
                <div className="BasketInner">
                    <div className="sectionLeft">
                        <div className="sectionLeftHeader">
                            <div>
                                <input type="checkbox" id="html" name="fav_language" value="HTML" />
                                <label htmlFor="html">Hamısını seç</label>
                            </div>
                            <div>
                                <button>
                                    <img src={deleteItem} alt="" />
                                    <p>Seçilənləri sil</p>
                                </button>
                            </div>
                        </div>
                        <div className="BasketCard">
                            <BasketCard />
                        </div>
                    </div>

                    <div className="sectionRight">

                        <div className="basketItems">
                            <div>
                                <h5>Səbətdəki məhsullar</h5>
                            </div>
                            <div className='BasketPriceDetails'>
                                <div>
                                    <p>Məhsullar</p>
                                    <p>{totalPrice}<img className='ManatMoneyImg' src={manat} alt="" /></p>
                                </div>
                                <div>
                                    <p>Nağd alış endirimi</p>
                                    <p className='discountPriceBasket'>2% <img className='ManatMoneyImg' src={manat} alt="" /></p>
                                </div>
                            </div>
                            <div className='totalPrice'>
                                <p>{totalPrice - calculatedPrice}</p>
                                <img src={manat} className='ManatMoneyImg' alt="" />
                            </div>
                        </div>

                        <div className="ConfirmOrder">
                            <button className="ConfirmOrderBtn" >
                                Sifarişi rəsmiləşdir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps)(Basket)