import React, { useState } from 'react'
import "./item.css"
import { connect } from 'react-redux'
import Liked from "../../Assest/Liked.png"
import comparisonnew from "../../Assest/comparisonnew.webp"
import birbank from "../../Assest/birbank.webp"
import manat from "../../Assest/manat.png"
import Range from './Range'
import Feature from './Feature'
import UserFeedback from './UserFeedback'
import "./resItem.css";
import SliderBox from '../Home/SliderBox/SliderBox'

function Item(props) {
    const feature = "https://kontakt.az/wp-content/themes/kontakt8/ktn-assets/assets/icons/online.png"
    const [calc, setCalc] = useState(false)
    const [product, setProduct] = useState(props.state.Item)
    const [page, setPage] = useState(false)
    const [Item, setItem] = useState(props.state.Item)
    const ToogleCalculator = () => {
        setCalc(!calc)
    }
    const { CalculatorAnswery } = props.state;
    let value = 2299

    const ModalShow = (e) => {
        props.dispatch({ type: "ModalTrue", payload: e.target.getAttribute("data-typeof") })
    }
    return (
        <>
            {Item.map((item) => (
                <div className="itemContainer" key={item.id}>
                    <div className="itemHeader">
                        <div className="itemHeaderContent">
                            <div className="itemSucces">
                                <p >Məhsul mövcuddur</p>
                                <p >{item.brand}</p>
                            </div>
                            <div className="itemFeedBack">
                                <img src={Liked} alt="" />
                                <img src={comparisonnew} alt="" />
                            </div>
                        </div>
                        <div className="CardİtemDetails">
                            <div className="cardItemImg">
                                <div className="itemNameRes">
                                    <h2> {item.name}</h2>
                                </div>
                                <img src="https://kontakt.az/wp-content/uploads/2023/04/New-Project-2023-04-28T093446.454_png.webp" alt="" />
                            </div>
                            <div className='itemİnformation'>
                                <div className="itemTitle">
                                    <div className="itemName">
                                        <h2> {item.name}</h2>
                                    </div>
                                    <div className="feature">
                                        <img src={feature} alt="" />
                                        <img src={feature} alt="" />
                                        <img src={feature} alt="" />
                                        <img src={feature} alt="" />
                                    </div>
                                    <div className="CalculatorAnswerPrice">
                                        <p className='itemPriceTitle'>qiymət</p>
                                        <div className='disCountPrice'>
                                            <p>{item.price}</p>
                                            <img src={manat} className='ManatMoney' alt="" />
                                        </div>
                                        <div className='itemPrice'>
                                            <p>{item.price}</p>
                                            <img src={manat} className='ManatMoney' alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="itemCalculator">
                                    <div className="Calculator">
                                        <h2>Kredit Kalkulyatoru</h2>
                                        <Range />
                                    </div>
                                    <div className="BirBank">
                                        <div className="birkartImg">
                                            <img src={birbank} alt="" />
                                            <div>
                                                <p>18 ay 127</p>
                                                <img src={manat} className='ManatMoney' alt="" /> <span>dan</span>
                                            </div>
                                        </div>
                                        <div className="birkartCredit">
                                            <div className="initalPayment">
                                                <p>İlkin ödəniş</p>
                                                <div>
                                                    <p>0</p>
                                                    <img src={manat} className='ManatMoney' alt="" />
                                                </div>
                                            </div>
                                            <div className="monthlyPayment">
                                                <p>Aylıq <br /> ödəniş</p>
                                                <div>
                                                    <p>{Math.floor(value / CalculatorAnswery)}</p>
                                                    <img src={manat} className='ManatMoney' alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`CalculatorAccord ${calc ? "active" : ""}`}>
                                    <Range />
                                    <div className="ResBirBank">

                                        <div className="birkartCredit">
                                            <div className="initalPayment">
                                                <p>İlkin ödəniş</p>
                                                <div>
                                                    <p>0</p>
                                                    <img src={manat} className='ManatMoney' alt="" />
                                                </div>
                                            </div>
                                            <div className="monthlyPayment">
                                                <p>Aylıq <br /> ödəniş</p>
                                                <div>
                                                    <p>{Math.floor(value / CalculatorAnswery)}</p>
                                                    <img src={manat} className='ManatMoney' alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="itemCalculator singleButton">
                                    <button onClick={ToogleCalculator} className='openCalc'>Kredit Kalkulyatoru</button>
                                </div>
                                <div className="itemCardBtns">
                                    <button className='' onClick={(e) => { ModalShow(e) }} data-typeof='OneBuyCash'>Bir kliklə al</button>
                                    <button className='' onClick={(e) => { ModalShow(e) }} data-typeof='DrawTheOrder'>Nağd al</button>
                                    <button className='' onClick={(e) => { ModalShow(e) }} data-typeof='BuyInstallments'>Hissə-hissə al</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tableItem">
                        <div className="ChangedPageBtns" >
                            <button className={`${page ? "" : "active"}`} onClick={() => { setPage(false) }}>Xüsusiyyətlər</button>
                            <button className={`${page ? "active" : ""}`} onClick={() => { setPage(true) }}>İstifədəçi rəyi</button>
                        </div>
                        <div className="Pages">
                            {page ?
                                <UserFeedback /> :
                                <Feature />
                            }
                        </div>

                    </div>
                </div >
            ))}
            <div className="similarProductSlider">
                <SliderBox data={props.state.randomData.items.slice(0, 40)} />
            </div>
        </>
    )
}
const mapStateToPRops = (state) => {
    return {
        state
    }
}
export default connect(mapStateToPRops)(Item)