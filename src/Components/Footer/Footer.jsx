import React from 'react'
import Logo from "../../Assest/Mobile.webp"
import "./Footer.css";
import "./FooterRes.css";
import { NavLink } from 'react-router-dom';
import { FiFacebook } from "react-icons/fi"
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillYoutube } from "react-icons/ai"
function Footer() {
    const windowScreenZero = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='Footer '>
            <div className="FooterInner  df">
                <div className="Footerheader">
                    <img src={Logo} className="LogoTekno" alt="" />
                    <p>Computer Shop</p>
                </div>
                <div className='FooterBody df'>
                    <div className='FotNav'>
                        <ul>
                            <li>
                                <NavLink to="/about ">
                                    Haqqımızda
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop ">
                                    Mağazalar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Blog ">
                                    Kampaniyalar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/terms ">
                                    Şərtlərimiz
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <input placeholder='Email address' type="text" />
                        <button className='SubscribeBtn'>SUBSCRIBE</button>
                    </div>
                    <div className='FotNav'>
                        <ul>
                            <li>
                                <NavLink to="/vacancies ">
                                    Vakansiyalar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/corporative ">
                                    Korporativ satışlar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/payment ">
                                    Hissə-hissə ödəniş
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/complaint ">
                                    Şikayət və təkliflər
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="FooterandFooter df">
                    <ul className='df'>
                        <li>
                            <NavLink to="/facebook">
                                <FiFacebook />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/instagram">
                                <AiOutlineInstagram />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/youtube">
                                <AiFillYoutube />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/youtube">
                                <AiOutlineWhatsApp />
                            </NavLink>
                        </li>
                    </ul>
                    <p>XXXX © 2000 - 2022. Bütün hüquqlar qorunur.</p>
                </div>
            </div>

            <div className="FooterRespons">
                <div className='FooterBody az'>
                    <div className='FotNav'>
                        <span>COMPANY</span>
                        <ul>
                            <li onClick={windowScreenZero}>
                                <NavLink to="/about">
                                    Haqqımızda
                                </NavLink>
                            </li>
                            <li onClick={windowScreenZero}>
                                <NavLink to="/shop">
                                    Mağazalar
                                </NavLink>
                            </li>
                            <li onClick={windowScreenZero}>
                                <NavLink to="/Blog">
                                    Kampaniyalar
                                </NavLink>
                            </li>
                            <li onClick={windowScreenZero}>
                                <NavLink to="/terms">
                                    Şərtlərimiz
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='FotNav'>
                        <span>INFORMATION</span>
                        <ul>
                            <li onClick={windowScreenZero}>
                                <NavLink to="/vacancies">
                                    Vakansiyalar
                                </NavLink>
                            </li>
                            <li onClick={windowScreenZero}>
                                <NavLink to="/corporative">
                                    Korporativ satışlar
                                </NavLink>
                            </li >
                            <li onClick={windowScreenZero}>
                                <NavLink to="/payment">
                                    Hissə-hissə ödəniş
                                </NavLink>
                            </li>
                            <li onClick={windowScreenZero}>
                                <NavLink to="/complaint">
                                    Şikayət və təkliflər
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Footerheader">
                    <img src={Logo} alt="" className='LogoTekno' />
                    <p>Computer Shop</p>
                </div>
                <div className="subscribe">
                    <input placeholder='Email address' type="text" />
                    <button className='SubscribeBtn'>SUBSCRIBE</button>
                </div>
                <div className="FooterandFooter df">
                    <ul className='df'>
                        <li>
                            <NavLink to="/facebook">
                                <FiFacebook />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/instagram">
                                <AiOutlineInstagram />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/youtube">
                                <AiFillYoutube />
                            </NavLink>
                        </li>
                    </ul>
                    <p>Copyright © 2022 Mobilex. Powered by Shopify</p>
                </div>
            </div>
        </div >
    )
}

export default Footer