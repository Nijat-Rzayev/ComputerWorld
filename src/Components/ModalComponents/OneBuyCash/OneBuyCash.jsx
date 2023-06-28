import React from 'react'
import { connect } from 'react-redux';
import "./OneBuyCash.css"
import CloseBtn from "../../../Assest/x_Closse.webp"
function OneBuyCash(props) {
    const { Modal } = props.state
    const ModalFalse = () => {
        props.dispatch({ type: "ModalFalse" })
    }
    return (
        <div className="OneBuyCash">
            <div className="OneBuyCashInner">
                <div>
                    <button onClick={ModalFalse} className='CloseBtnModal'>
                        < img src={CloseBtn} alt="" />
                    </button>
                </div>
                <form action="">
                    <div className="Phone">
                        <label htmlFor="phoneNumber">Mobil telefon numaranızı girin:</label>
                        <input type="text" id="phoneNumber" className="inpPhone" />
                    </div>
                    <div className="OrderForm">
                        <label htmlFor="" className='payment'> Sipariş formunu seçin:</label>
                        <div className='radio-item'>
                            <input type="radio" id="paymentMethod" name='payment' />
                            <label htmlFor="paymentMethod" > <span className='cirlceSpan'> </span>Nağd al</label>
                        </div>
                        <div className='radio-item'>
                            <input type="radio" id="installment" name='payment' />
                            <label htmlFor="installment" >Hisse-hisse ödeme</label>
                        </div>
                    </div>
                    <div className="orderbutton">
                        <button type="submit">Siparişi gönder</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(OneBuyCash);
