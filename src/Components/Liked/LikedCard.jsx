import React, { useEffect, useState } from 'react'
import CloseLiked from "../../Assest/close-active.webp"
import CloseFalse from "../../Assest/close-false.webp"
import IphoneTest from "../../Assest/iphoneTest.jpg"
import { BsWhatsapp } from 'react-icons/bs'
import { connect } from "react-redux"
import manat from "../../Assest/manat.png"
function LikedCard(props) {
    const [WatchList, setWatchList] = useState(props.state.Watchlist);
    const src = CloseFalse;
    const hanldeonMouseEnter = (e) => {
        e.target.src = CloseLiked
    };
    const hanldeonMouseLeave = (e) => {
        e.target.src = CloseFalse;
    }
    const ModalShow = (e) => {
        props.dispatch({ type: "ModalTrue", payload: e.target.getAttribute("data-typeof") });
    }

    const addToBasket = (item) => {
        props.dispatch({ type: "AddToBasket", payload: item })
    }
    const RemoveWatchList = (itemId) => {
        props.dispatch({ type: "RemoveWatchList", payload: itemId })
    }
    useEffect(() => {
        setWatchList(props.state.Watchlist)
    }, [props.state.Watchlist])


    return (
        <>
            {WatchList.map((item) => (
                console.log(item.randomItemValue.item),
                <div className="cardItem" key={item.id}>
                    <div className='İtem'>
                        <p>{item.randomItemValue.item}</p>
                        <p>{item.randomItemValue.item2}</p>
                    </div>
                    <div className='LikedItemImg'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='LikedİtemDetails'>
                        <h3>{item.name}</h3>
                        <ul>
                            <li>
                                <p>Brand</p>
                                <p>{item.brand}</p>
                            </li>
                            <li>
                                <p>Model</p>
                                <p>{item.class}</p>
                            </li>

                        </ul>
                    </div>
                    <div>
                        {/* Boşluq */}
                    </div>
                    <div className='LikedPriceContainer'>

                        <div className="LikedPrice">
                            <p>{item.price}</p>
                            <img src={manat} className='ManatMoney' alt="" />
                        </div>
                        <div>
                            <button className='AddBastemLiked' data-typeof='DrawTheOrder' onClick={(e) => { ModalShow(e); addToBasket(item) }}>
                                Səbətə at
                            </button>
                        </div>
                    </div>
                    <div className="CloseBtnLiked" >
                        <img src={src}
                            onMouseEnter={(e) => { hanldeonMouseEnter(e) }}
                            onMouseLeave={(e) => { hanldeonMouseLeave(e) }}
                            onClick={() => { RemoveWatchList(item.id) }}
                            alt="" />
                    </div>
                </div>
            ))}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps)(LikedCard)