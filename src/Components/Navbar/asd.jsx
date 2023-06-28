import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from "../../Assest/Mobile.webp"
import "./Navbar.css"
import "./ResponsNav.css"
import { BiHeart, BiMenu } from "react-icons/bi"
import { BsBasket3 } from "react-icons/bs"
import { AiOutlineSearch, AiOutlineLogin, AiOutlineDoubleLeft, AiOutlineLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { connect } from 'react-redux'
import Search from '../Search/Search.jsx'
function Navbar(props) {
    const [login, setlogin] = useState(true);
    const [AccessTwo, setAccessTwo] = useState(true);
    const [ToggleHamburgerMenu, setToggleHamburgerMenu] = useState(true);
    const showLogin = () => {
        if (window.scrollY <= 200) {
            setlogin(true)
        } else {
            setlogin(false)
        }
    }
    window.addEventListener("scroll", showLogin);


    const IsOpenhamburger = () => {
        setToggleHamburgerMenu(false)
    }
    const isCLoseHamburger = () => {
        setToggleHamburgerMenu(true)
    }
    const OpenSearch = () => {
        props.dispatch({
            type: "OpenSearchComp"
        })
    }
    const AksesuarMenutwo = () => {
        setAccessTwo(!AccessTwo)
    }
    return (
        <div className='Navbar' >
            <div className="Navbar-container df">
                <div className='df' >
                    <BiMenu className='navMenu' onClick={IsOpenhamburger} />
                    <NavLink to="/" className="df" >
                        <img className="Logo" src={Logo} alt="" />
                    </NavLink>
                </div>
                <div className="Navbar-Items">
                    <ul className='df'>
                        <li>
                            <Link className='cool-link' to="/" >Teknotik</Link>
                        </li>
                        <li>
                            <NavLink className='cool-link' to="/products" type=""  >Məhsullar</NavLink>
                        </li>
                        <li>
                            <NavLink className='cool-link' to="/shop" >Mağazalar</NavLink>
                        </li>
                        <li className="categoryPages">
                            <span className='cool-link'
                            >Kataloq</span>
                            zzzzz
                        </li>
                        <li>
                            <NavLink className='cool-link' to="/blog" > Bloq</NavLink>

                        </li>
                    </ul>
                </div>
                <div className={`HamburgerMenu ${ToggleHamburgerMenu ? "" : "activeHambur"}`}>
                    <div className="InnerHamburger">
                        <div className='HambugerClosebtn'>
                            <GrClose onClick={isCLoseHamburger} />
                        </div>
                        <div className={`CategoryMenu`}>
                            <ul>
                                <li>
                                    <NavLink onClick={isCLoseHamburger} to="/" >Teknotik</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products" onClick={isCLoseHamburger} >Məhsullar</NavLink>
                                </li>
                                <li>
                                    <p onClick={AksesuarMenutwo} >Kataloq</p>
                                    <ul className={`AccsMenuInner ${AccessTwo ? "" : "AvtiveAccsMenuInner"}`}>
                                        <div className='HambugerClosebtn'>
                                            <AiOutlineDoubleLeft onClick={AksesuarMenutwo} />
                                        </div>
                                        <li className="has-child">
                                            <NavLink to="/category/pc">
                                                <p>Masaüstü Kompüter</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/pc/acer">Acer PC</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/pc/gigabyte">Gigabyte PC</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/pc/lenovo">Lenovo PC</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/pc/hp">HP PC</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/laptop">
                                                <p>Noutbuklar</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/laptop/apple">Apple Macbook</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/laptop/acer">Acer</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/laptop/dell">Dell</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/laptop/msi">Msi</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/laptop/microsoft">
                                                        MicroSoft noutbukları
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/monitor">
                                                <p>Monitorlar</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/monitor/acer">Acer Monitorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/aoc">AOC Monitorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/asus">Asus Monitorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/benq">Benq Monitorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/dell">Dell Monitorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/hp">HP Monitorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/lenovo">
                                                        Lenovo Monitorlar
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/lg">LG Monitorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/msi">Msi Monitorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/samsung">
                                                        Samsung Monitorlar
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/monitor/rampage">
                                                        Rampage Monitorlar
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/mainboard">
                                                <p>Ana Platalar</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/mainboard/asrock">
                                                        ASRock Plataları
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/mainboard/asus">Asus Plataları</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/mainboard/biostar">
                                                        Biostar Plataları
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/mainboard/msi">MSI Plataları</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/mainboard/gigabyte">
                                                        Gigabyte Plataları
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/cpu">
                                                <p>Prosessorlar</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/cpu/intel">Intel Prosessorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cpu/amd">AMD Prosessorlar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cpu/cooler">Soyuducu qurğular</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/cooler">
                                                <p>Soyuducu qurğular</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/cooler/deepcool">DeepCool</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cooler/rampage">Rampage</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cooler/evga">EVGA</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cooler/thermaltake">Thermaltake</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cooler/asus">ASUS</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cooler/arctic">ARCTIC</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cooler/aerocool">AeroCool</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cooler/aerdeepcool">AerDeepCool</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cooler/be quiet">Be Quiet</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/cooler/nzxt">NZXT</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/ram">
                                                <p>Operativ yaddaş</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/ram/crucial">Crucial</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/ram/g.skill">G.SKILL</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/ram/klevv">Klevv</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/ram/lexar">Lexar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/ram/kingston">Kingston</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/ram/corsair">Corsair</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/ram/adata">Adata</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/storage">
                                                <p>Yaddaş qurğuları</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/storage/hdd toshiba">
                                                        HDD
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/storage/ssd">
                                                        SSD yaddaş qurğuları
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/storage">USB fləşkartlar</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/vga">
                                                <p>Videokartlar</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/vga/asus">Asus videokartları</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/vga/galaxy">GALAXY videokartları</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/vga/msi">MSI videokartları</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/vga/nvidia">NVidia videokartları</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/vga/zotac">Zotac videokartları</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/optic">
                                                <p>Optik qurğular</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/optic/dwd-rw">DWD-RW</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/mouse">
                                                <p>Kompüter siçanları</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/mouse/a4tech">A4tech</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/mouse/apple">Apple</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/mouse/logitech">Logitech</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/mouse/razer">Razer</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/keyboard">
                                                <p>Klaviaturalar</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/keyboard/a4tech">A4tech</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/keyboard/corsair">Corsair</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/keyboard/gigabyte">Gigabyte</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/keyboard/razer">Razer</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/speaker">
                                                <p>Səs ucaldıcılar</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/speaker/edifier">Edifier</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/speaker/mikado">Mikado</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/speaker/rampage">Rampage</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-child">
                                            <NavLink to="category/headphones">
                                                <p>Qulaqlıqlar</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/headphones/steelseries">SteelSeries</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/headphones/rampage">Rampage</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/headphones/razer">Razer</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/headphones/Hyperx">HyperX</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/headphones/gamenote">Gamenote</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* <li className="has-child">
                                            <i className="fa-solid fa-chevron-down"></i>
                                            <NavLink to="category/cables">
                                                <p>Kabel və ucluqlar</p>
                                            </NavLink>
                                        </li> */}

                                        <li className="has-child">
                                            <i className="fa-solid fa-chevron-down"></i>
                                            <NavLink to="category/office">
                                                <p>Ofis avadanlıqları</p>
                                            </NavLink>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to="category/office/canon">Canon</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="category/office/epson">Epsoncd </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/shop" onClick={isCLoseHamburger} >Mağazalar</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" onClick={isCLoseHamburger} >Bloq</NavLink>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <ul>
                                <li>
                                    <AiOutlineLogin className='icon' />
                                    <NavLink to="/Login">Hesab</NavLink>
                                </li>
                                <li>
                                    <BiHeart className='icon' />
                                    <NavLink to="/Wishlist">Bəyəndim</NavLink>
                                </li>
                                <li>
                                    <BsBasket3 className='icon' />
                                    <NavLink to="">Səbət</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Navbar-Login">
                    <ul className='df'>
                        <li>
                            {login ? (
                                <NavLink to="/login" className="login" >Hesab</NavLink>
                            ) : (
                                <NavLink to="/login" className="login" >
                                    <AiOutlineLogin className='loginIcon' />
                                </NavLink>
                            )}
                        </li>
                        <li>
                            <NavLink to="/" >
                                <AiOutlineSearch onClick={OpenSearch} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/liked" ><BiHeart /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/basket" ><BsBasket3 /></NavLink>
                        </li>
                    </ul>
                </div>
                <Search />
            </div >
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        statusSearch: state.OpenSearch,
        state
    }
}
export default connect(mapStateToProps)(Navbar)
