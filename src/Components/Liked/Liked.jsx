import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import "./Liked.css"
import "./LikedRes.css"
import LikedCard from './LikedCard'
import LikedIcon from "../../Assest/LikedIcon.png"

function Liked(props) {
    return (
        <>
            <div className='Liked'>
                <div className="infoLiked">
                    <div></div>
                    <div className="infoHeader">
                        <div>
                            <img src={LikedIcon} alt="" />
                            <h2>Faydalı məlumat</h2>
                        </div>
                        <div>
                            <p>
                                Seçilmişlər siyahınızı hər zaman əlçatan etmək üçün daxil olmağınızı, əgər hesabınız yoxdursa qeydiyyatdan keçməyinizi tövsiyyə edirik.
                            </p>
                        </div>
                    </div>
                    <div className="myAccount">
                        <h2>Mənim hesabım</h2>
                        <div className='MyAccountOptions'>
                            <div>
                                <NavLink to="/Login">
                                    Daxil ol    
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/Login">
                                    Sürətli qeydiyyat
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CardItemContainer">
                    <h1>Seçilmişlər</h1>
                    <LikedCard />
                </div>
            </div >
        </>
    )
}
const mapstateToProps = (state) => {
    return { state }
}
export default connect(mapstateToProps)(Liked)