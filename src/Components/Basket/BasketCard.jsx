import React, { useState, useEffect } from 'react'
import "./BasketCard.css"
import manat from "../../Assest/manat.png"
import ReyclerBin from "../../Assest/ReyclerBin.webp"
import { connect } from 'react-redux'
function BasketCard(props) {
    const INCREMENT_QUANTITYBtn = (itemId) => {
        props.dispatch({ type: "INCREMENT_QUANTITY", payload: itemId })
    };
    const DECREMENT_QUANTITYBtn = (itemId) => {
        props.dispatch({ type: "DECREMENT_QUANTITY", payload: itemId })
    };
    const RemoveToBasket = (itemId) => {
        props.dispatch({ type: "REMOVE_BASKET", payload: itemId })
    }
    return (

        <>
            {props.state.Basket && props.state.Basket.map((item) => (
                <div className="BasketCard" key={item.id}>
                    <div className="basketCardInner">
                        <div className="cardDetails">
                            <div className="checkItem">
                                <input type="checkbox" />
                            </div>
                            <div className="cardImg">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="cardName">
                                <p> {item.name}</p>
                                <div className='discountCard'>
                                    <p>18 ay </p>
                                    <p>Faizsiz</p>
                                </div>
                            </div>
                            <div className="itemCounter">
                                <p>Miqdar</p>
                                <div className="counter">
                                    <button onClick={() => DECREMENT_QUANTITYBtn(item.id)}>-</button>
                                    <input type="number" value={item.quantity} readOnly />
                                    <button onClick={() => INCREMENT_QUANTITYBtn(item.id)}>+</button>
                                </div>
                            </div>
                            <div className="cardPrice">
                                <p>{item.price} <img src={manat} className='ManatMoney' alt="" /></p>
                                {/* <p>{item.price} <img src={manat} className='ManatMoney' alt="" /></p> */}
                            </div>
                            <div className="reycelrBin">
                                <button onClick={() => RemoveToBasket(item.id)}><img src={ReyclerBin} alt="" /></button>
                            </div>
                        </div>

                    </div>
                </div>
            ))
            }

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps)(BasketCard)