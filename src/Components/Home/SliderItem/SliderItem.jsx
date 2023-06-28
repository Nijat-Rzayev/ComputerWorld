import React, { useEffect } from 'react'
import "../SliderBox/SliderBox.css"
import manat from "../../../Assest/manat.png"
import LikedImg from "../../../Assest/Liked.png"
import Comparison from "../../../Assest/comparisonnew.webp"
import "../SliderBox/SliderBox.css"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
function SliderItem(props) {
    const addToBasket = (item, e) => {
        const target = e.currentTarget;
        let isActive = target.classList.contains("active");
        if (!isActive) {
            target.classList.add("active");
            props.dispatch({ type: "AddToBasket", payload: item })
        } else {
            target.classList.remove("active");
            props.dispatch({ type: "REMOVE_BASKET", payload: item })
        }
    }
    const ModalShow = (e) => {
        props.dispatch({ type: "ModalTrue", payload: e.target.getAttribute("data-typeof") })
    }
    const AddToWatchList = (item, e) => {
        const target = e.currentTarget;
        let isActive = target.classList.contains("active");
        if (!isActive) {
            target.classList.add("active");
            props.dispatch({ type: "AddWatchList", payload: item });
        } else {
            target.classList.remove("active");
            props.dispatch({ type: "RemoveWatchList", payload: item.id })
        }
    };
    const addItem = (item) => {
        props.dispatch({ type: "addItem", payload: item })
    }

    return (
        <>
            <div className="item" >
                <div className="itemCompany">
                    <p style={{ border: `1px solid ${props.item.reandomColor}`, color: `${props.item.randomColor}` }}>{props.item.randomItemValue.item}</p>
                    <p style={{ border: "1px solid #8B0000" }}>{props.item.randomItemValue.item2}</p>
                </div>
                <div className="itemHeader">
                    <div className="itemImg">
                        <Link to={`/${props.item.name}`} onClick={() => addItem(props.item)}>
                            <img src={props.item?.image} alt={props.item?.title} />
                        </Link>
                        <div className="itemName">
                            {<p>{props.item.name?.length > 30 ? props.item.name?.slice(0, 30) + "..." : props.item?.name}</p>}
                            {/* {<p>{props.item.name?.split(" ")[0] + " " + props.item.name?.split(" ")[1]}</p>} */}
                        </div>
                    </div>
                    <div className="itemDetails">
                        <p>{props.item?.class}</p>
                        <p>{props.item?.model}</p>
                    </div>
                </div>
                <div className="itemBtns">
                    <button className='LikedButtonSlider' onClick={(e) => { AddToWatchList(props.item, e) }}>
                        <img src={LikedImg} className="LikedImg" alt="" />
                        <p>Seçilmiş et </p>
                    </button>
                    <button className='LikedButtonSlider'  >
                        <img src={Comparison} className="LikedImg" alt="" />
                        <p>MÜqayisə et</p>
                    </button>
                </div>
                <div className="itemPrices">
                    <div className="itemPrice">
                        <div>
                            <p >{props.item.price}</p>
                            <img src={manat} className='manat' alt="" />
                        </div>
                        <div>
                            <p>{props.item.price}</p>
                            <img src={manat} className='manat' alt="" />
                        </div>
                    </div>
                    <div>
                        <button className="addBtnBasketSlider" data-typeof='DrawTheOrder' onClick={(e) => { addToBasket(props.item, e); ModalShow(e) }}>
                            Səbətə at
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return { state };
};
export default connect(mapStateToProps)(SliderItem);

