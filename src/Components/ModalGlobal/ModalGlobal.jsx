import React, { useEffect, useRef } from 'react'
import "./Modal.css"
import { connect } from 'react-redux';
import OneBuyCash from '../ModalComponents/OneBuyCash/OneBuyCash';
import DrawTheOrder from '../ModalComponents/DrawTheOrder/DrawTheOrder';
import BuyInstallments from '../ModalComponents/BuyInstallments/BuyInstallments';
import TableFiltr from '../ProductsList/TableFiltr';
import CloseBtn from "../../Assest/x_Closse.webp"

function ModalGlobal(props) {
    const { Modal, buttonType } = props.Modal;
    const ModalRef = useRef()
    // useEffect(() => {
    //     const closeModal = (e) => {
    //         if (e.target == ModalRef.current) {
    //             props.dispatch({ type: "ModalFalse" })
    //         }
    //     }
    //     document.addEventListener("click", closeModal)
    //     return () => {
    //         document.removeEventListener("click", closeModal)
    //     }
    // }, [])
    const ModalFalse = () => {
        props.dispatch({ type: "ModalFalse" })
    }
    return (
        <>
            <div className={`Modal ${Modal ? "active" : ""}`} ref={ModalRef} >
                {buttonType == "OneBuyCash" && <OneBuyCash />}
                {buttonType == "DrawTheOrder" && <DrawTheOrder />}
                {buttonType == "BuyInstallments" && <BuyInstallments />}
                {buttonType == "TableFiltr" && <div className="TableFiltr">
                    <button onClick={ModalFalse}><img src={CloseBtn} alt="" /></button>
                    <TableFiltr />
                </div>}

            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        Modal: state.Modal
    }
}
export default connect(mapStateToProps)(ModalGlobal)