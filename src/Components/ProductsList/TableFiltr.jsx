import React from 'react'
import { connect } from 'react-redux'
function TableFiltr(props) {
    const ModalFalse = () => {
        props.dispatch({ type: "ModalFalse" })
    }
    return (
        <div className="listSectionFirstInner">
            <button className='buttonfiltr'>
                <input type="checkbox" name="filtrbtn" id="price" />
                <label htmlFor="price">Qiymət</label>
            </button>
            <div className='subMenuFiltr'>
                <div>
                    <input type="checkbox" name="filtrbtn" id="c" />
                    <label htmlFor="c">Kişilər üçün</label>
                </div>
                <div>
                    <input type="checkbox" name="sd" id="a" />
                    <label htmlFor="a">Kişilər üçün</label>
                </div>
                <div>
                    <input type="checkbox" name="sd" id="b" />
                    <label htmlFor="b">Kişilər üçün</label>
                </div>
            </div>
            <button className="Apply" onClick={ModalFalse}>Tətbiq et</button>
        </div>

    )
}

const mapStateToPRops = (state) => {
    return {
        state
    }
}
export default connect(mapStateToPRops)(TableFiltr)