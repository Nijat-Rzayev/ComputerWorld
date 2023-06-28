import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { BsBasket3 } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineLogin, AiOutlineLeft } from "react-icons/ai";
import "./Navbar.css";
import "./ResponsNav.css";
import Aze from "../../Assest/azerbaijan-flag-round-icon-256.webp";
import Liked from "../../Assest/Liked.png";
import Ru from "../../Assest/russia-flag-round-icon-256.webp";
import CloseMenu from "../../Assest/CloseMenu.webp";
import company from "../../Assest/company.webp";
import gray_heart from "../../Assest/gray-heart.webp";
import gray_menu_new from "../../Assest/gray-menu-new.webp";
import store from "../../Assest/store.webp";
import Teknotik from "../../Assest/Mobile.webp";
import Menu from "../../Assest/app-menu.svg";
import SearchIcon from "../../Assest/SearchIcon.svg";
import CloseIcon from "../../Assest/icons8-close-24.png";
import notİmage from "../../Assest/notİmage.jpg";

function Navbar(props) {
  const İmg = useRef(null);
  const [isSticyk, setISticky] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [subMenu, setSubMenu] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [HamburgerMenu, setHamburgerMenu] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [popularProducts, setpopularProducts] = useState([...props.state.products])
  const [data, setData] = useState([...props.state.products]);
  const [categories, setCategories] = useState([])
  const [brandss, setBrandss] = useState([]);
  const [selectedAccor, setSelectedAccor] = useState(null)

  const ResSearchInp = (e) => {
    setValue(e.target.value);
  }

  const ToggleMenu = () => {
    setToggle(!toggle);
  };
  const Fixed = () => {
    if (window.scrollY >= 100) {
      setISticky(true);
      return;
    }
    setISticky(false);
  };
  window.addEventListener(`scroll`, Fixed);

  const OpenHamburgerMenu = () => {
    setHamburgerMenu(!HamburgerMenu);
    // HamburgerMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll";
  };
  const windowScreenZero = () => {
    window.scrollTo(0, 0)
  }
  const SearchShow = (e) => {
    setSearchActive(true);
    setValue(e.target.value);
    if (e.target.value.trim().length < 1) {
      setSearchActive(false);
    }
  };

  const ShowSearchContainer = () => {
    setSearchBox(!searchBox);
  };
  useEffect(() => {
    const SearchContainerActive = document.querySelector(".SearchContainer");
    document.addEventListener("click", (e) => {
      if (!e.composedPath().includes(SearchContainerActive)) {
        setSearchActive(false);
      }
    });
  }, [searchActive]);
  useEffect(() => {
    setSearchData(
      data.filter((val) => {
        if (val.name?.toLowerCase().includes(value.toLowerCase())) {
          return val.name
        }
        if (val.category?.toLowerCase().includes(value.toLowerCase())) {
          return val.category
        }
      }
      )
    );
  }, [value]);

  const SubMenuOpen = (e, c) => {
    setSubMenu(!subMenu);

  }

  useEffect(() => {
    let cat = []
    data.map((d) => {
      if (!cat.includes(d.class)) {
        cat.push(d.class)
      }
    })
    setCategories(cat)
  }, [data]);

  const brandShow = (e, category) => {
    let checkbtn = e.target
    let brands = [checkbtn.innerText];
    let categoryItem = data.filter((d) => d.class === category);
    categoryItem.map((c) => {
      if (!brands.includes(c.brand)) {
        brands.push(c.brand)
      }
    })
    setBrandss(brands);
  }
  const [checkedBrands, setcheckedBrands] = useState([])
  const brandShowInner = (item, zeroIndex) => {
    let checked = data.filter((x) => x.brand === item && x.class === zeroIndex);
    setcheckedBrands(checked)
    //  checkedBrands içini selected false olanda boşaltmalıyam ??
  }

  const Accordion = (index) => {
    if (selectedAccor === index) {
      return setSelectedAccor(null)
    }
    setSelectedAccor(index)
  }
  return (
    <>
      <div className="Navbar">
        <div className="NavDesktop">
          <div className="NavTop">
            <div>
              <ul>
                <li>
                  <NavLink to="/corporative">Korporativ satışlar</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Mağazalar</NavLink>
                </li>
                <li>
                  <NavLink to="/faq">Tez-tez verilən suallar</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="MonthlyPayment">Aylıq Ödəniş</li>
                <li className="WatchListSection">
                  <NavLink to="/watchlist">
                    <img src={Liked} alt="" />
                  </NavLink>
                  <span className="LikedValue">0</span>
                </li>
                <li>
                  <NavLink to="/">
                    <img src={Aze} alt="" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <img src={Ru} alt="" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className={`NavBody ${isSticyk ? "FIxedNav" : ""}`}>
            <div>
              <div>
                <NavLink to="/">
                  <img className="Teknotikİmage" src={Teknotik} alt="" />
                  <span>Teknotik</span>
                </NavLink>
              </div>
              <div className="Section_Menu">
                <img src={Menu} className="MenuIconSvg" alt="" />
                <p>Menyu</p>
              </div>
            </div>
            <div className="Search">
              <div className="SearchInner">
                <input
                  value={value}
                  onChange={(e) => {
                    SearchShow(e);
                  }}
                  placeholder="Axtarış..."
                  type="text"
                />
                <div className="SearchIcon">
                  <img src={SearchIcon} alt="" />
                </div>
              </div>
              <div className={`SearchContainer ${searchActive ? "Active" : ""}`}>
                <div className="SearchProductsInner">
                  <div className="SearchSidebar">
                    <h3>
                      {/* Populyar */}
                      Kateqoriyalar</h3>
                    <hr />
                    <ul className="SidebarInnerUl">
                      <li>
                        <NavLink to="/">Kompyuterlər/Laptop/Acer</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Kompyuterlər/Laptop/Hp</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Kompyuterlər/Laptop/Lenovo</NavLink>
                      </li>
                    </ul>
                    <h3>Populyar Brendlər</h3>
                    <hr />
                    <ul className="SidebarInnerUl">
                      <li>
                        <NavLink to="/">Hp</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Acer</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Intel®</NavLink>
                      </li>
                    </ul>
                    <h3>Populyar Axtarışlar</h3>
                    <hr />
                    <ul className="SidebarInnerUl">
                      <li>
                        <NavLink to="/">Hp</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Msi</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Gigabyte</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="SearchResults">
                    <h3>
                      <NavLink to="/">Kompyuterlər/Laptop/Acer</NavLink>
                    </h3>
                    <hr />
                    <ul className="SearchResultsUl">
                      {searchData?.map((val, index) => (
                        <li key={index} onClick={() => setSearchBox(false)} >
                          <NavLink
                            to={`/${val.name}`}
                          >
                            <div >
                              <img
                                className="ProductsSearchImg"
                                src={val.image}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = notİmage
                                }}
                                alt=""
                              />
                            </div>
                            <div className="SearchDetailsBox">
                              <div>{val.class}</div>
                              <div className="ProductsNameSearchBox">
                                {val.name?.split("-")[0]}
                              </div>
                              <span>{val.price} ₼ </span>
                              <span className="DiscountItem">
                                {val.price - 100} ₼
                              </span>
                            </div>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="LoginAndBasket">
              <div>
                <NavLink to="/Login" >
                  <AiOutlineLogin className="Loginİcon" />
                  <p>Daxil ol</p>
                </NavLink>
              </div>
              <div>
                <NavLink to="/basket">
                  <BsBasket3 className="Basketİcon" />
                  <p>Səbət</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="ResponsNavbar">
          <div className="ResNavİnner">
            <div>
              <BiMenu className="BiMenu" onClick={OpenHamburgerMenu} />
              <div>
                <NavLink to="/">
                  <img className="TeknotikResImg" src={Teknotik} alt="" />
                  <p>Teknotik</p>
                </NavLink>
              </div>
            </div>
            <div className="ResNavRightSection">
              <p className="Lang">Az</p>
              <AiOutlineSearch className="SearchResIcon" onClick={ShowSearchContainer} />
              <NavLink to="/basket">
                <BsBasket3 className="BasketResIcon" />
              </NavLink>

            </div>
          </div>
          <div className={`SearchResContainer ${searchBox ? "Active" : ""}`}>
            <div className="SearchResInner">

              <div className="FixedNavSearch">
                <img src={SearchIcon} alt="" />
                <div className="Box">
                  <input
                    value={value}
                    onChange={ResSearchInp}
                    type="text"
                    className="SearchResInput" />
                  <img
                    src={CloseIcon}
                    ref={İmg}
                    className="CloseImgRes"
                    alt=""
                  />
                </div>
                <AiOutlineLeft
                  onClick={() => setSearchBox(false)}
                  className="SearchLineLeftArrow"
                />
              </div>

              <div className="BodySearch">

                <h4>{value.trim() ? " Məhsullar" : "Populyar Məhsullar"}</h4>
                <hr />
                <ul className="ResSearchTable">
                  {!value.trim() && popularProducts
                    .sort((a, b) => b.price - a.price).slice(0, 6)
                    .map((item) => (
                      < li key={item.id} className="ResSearchTableLi" onClick={() => setSearchBox(false)}>
                        <NavLink to={`/${item.name}`} >
                          <div className="ProductsImgSearch">
                            <img
                              src={item.image}
                              alt=""
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = notİmage
                              }}
                            />
                          </div>
                          <div className="SearchProductsDetails">
                            <div> {item.class} </div>
                            <div className="">{item.name} </div>
                            <span> {item.price}  ₼ </span>
                            <span className="">{item.brand} </span>
                          </div>
                        </NavLink>
                      </li>
                    ))
                  }

                  {value && searchData?.map((val, index) => (
                    <li key={index} className="ResSearchTableLi" onClick={() => setSearchBox(false)}>
                      <NavLink
                        to={`/${val.name}`}
                      >
                        <div className="ProductsImgSearch">
                          <img
                            src={val.image}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = notİmage
                            }}
                            alt=""
                          />
                        </div>
                        <div className="SearchProductsDetails">
                          <div>{val.class}</div>
                          <div >{val.name?.split(" ")[0] + " " + val.name?.split(" ")[1]}</div>
                          <span>{val.price} ₼ </span>
                          <span>{val.price - 100} ₼</span>
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={`HamburgerMenu ${HamburgerMenu ? "Active" : ""} `}>
          <div className="Menu-Body">
            <div className="Category-menu-header">
              <div className={`divImg`} >
                {subMenu ? "" : <img src={Teknotik} alt="" />}
                <p >{subMenu ? <button className="BackSubMenu" onClick={SubMenuOpen}> <AiOutlineLeft className="LeftArrorBackSubMenuIcon" /> Geri</button> : "Teknotik"} </p>
              </div>

              <button className="Menu-Icon-close">
                <img
                  src={CloseMenu}
                  onClick={() => { OpenHamburgerMenu(); setSubMenu(false) }}
                  className="CloseMenuImg"
                  alt=""
                />
              </button>
            </div>
            <section className="all-category-menu">
              <button className="MenuBtn" onClick={ToggleMenu}>

                <p>Bütün kateqoriyalar</p>
                <AiOutlineLeft
                  className={`LeftArrow ${toggle ? "" : "Active"}`}
                />
              </button>
              <div className={`CategoryMenu ${toggle ? "" : "Active"}`}>
                <ul className="product-menu">
                  {categories.map((category, index) => (
                    <li key={index} className="product-menu-child" >
                      <button onClick={(e) => { SubMenuOpen(); brandShow(e, category); windowScreenZero(); setSelectedAccor(null) }}>
                        <p>{category} </p>
                        <AiOutlineLeft className='LeftArrow' />
                      </button>
                      <div className={`SubMenu ${subMenu ? "Active" : ""}`}>
                        <ul className="dropdown">
                          {
                            brandss.map((item, index) => (
                              <li onClick={() => { Accordion(index); brandShowInner(item, brandss[0]) }} key={index}>
                                {item}
                                <ul className={`brandrssInner ${selectedAccor == index ? "active" : ""}`} >
                                  {checkedBrands.map((item) => (
                                    <NavLink key={item.id} to={`/${item.name}`}>
                                      <li onClick={() => { setHamburgerMenu(false); setSubMenu(false) }} >{item.name} </li>
                                    </NavLink>
                                  ))}
                                </ul>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </li>

                  ))
                  }
                </ul>
              </div>
              <div className={`category-select ${subMenu ? "Hide" : ""}`}>
                <ul>
                  <li onClick={() => { setHamburgerMenu(false); windowScreenZero() }}>
                    <Link to="/Blog">
                      <div className="CategoryMenuIcons">
                        <img src={company} alt="" />
                      </div>
                      <p>Kampaniyalar</p>
                    </Link>
                  </li>
                  <li onClick={() => { setHamburgerMenu(false); windowScreenZero() }}>
                    <Link to="/watchlist">
                      <div className="CategoryMenuIcons">
                        <img src={gray_heart} alt="" />
                      </div>
                      <p>Seçilmişlər</p>
                    </Link>
                  </li>
                  <li onClick={() => { setHamburgerMenu(false); windowScreenZero() }}>
                    <Link to="/shop">
                      <div className="CategoryMenuIcons">
                        <img src={store} alt="" />
                      </div>
                      <p>Mağazalar</p>
                    </Link>
                  </li>
                  <li onClick={() => { setHamburgerMenu(false); windowScreenZero() }}>
                    <Link to="/compare">
                      <div className="CategoryMenuIcons">
                        <img src={gray_menu_new} alt="" />
                      </div>
                      <p>Müqayisə</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div >
      </div >
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(Navbar);
