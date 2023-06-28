import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import "./HomeTop.css"
import "./ResHomeTop.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImgOne from "../../../Assest/Partners/Delongi_png.webp"

import DeliveryImgOne from "../../../Assest/1.webp"
import DeliveryImgTwo from "../../../Assest/2.webp"
import DeliveryImgOThree from "../../../Assest/3.webp"
import storyModelPng from "../../../Assest/story-model-mpg.png"
import DecrementClock from '../../../DecrementClock/DecrementClock';
function HomeTop(props) {
  const [data, setData] = useState([...props.state.products]);
  const [categories, setCategories] = useState([])
  const [showProducts, setShowProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const productsShow = useRef();
  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.classList.add("active");
  //   } else {
  //     document.body.classList.remove("active");
  //   }

  //   return () => {
  //     document.body.classList.remove("active")
  //   }
  // }, [menuOpen]);
  let body = document.querySelector("body");

  const [x, setX] = useState({ category: "", showProducts: [] })
  const handleMouseLeave = (e, category) => {
    setTimeout(() => {
      setMenuOpen(true)
    }, 250);
    const filteredProducts = data.filter((item) => {
      return item.class === e.target.innerText
    });
    const uniqueBrands = new Set(); // Benzersiz markaları saklamak için bir Set oluşturulur
    const checkedFilterProducts = filteredProducts.filter((item) => {
      if (uniqueBrands.has(item.brand)) {
        return false
      } else {
        uniqueBrands.add(item.brand)
        return true
      }
    })
    setX({ category: category, showProducts: checkedFilterProducts });
  }
  useEffect(() => {
    const handleClick = (e) => {
      if (productsShow.current && !e.composedPath().includes(productsShow.current)) {
        productsShow.current.addEventListener("mouseleave", () => {
          setMenuOpen(false)
        });
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [productsShow]);

  useEffect(() => {
    let cat = []
    data.map((d) => {
      if (!cat.includes(d.class)) {
        cat.push(d.class)
      }
    })
    setCategories(cat)
  }, [data]);
  let timeout = null;

  const AddToProducList = (e) => {
    const FilterBrand = data.filter((item) => {
      if (item.class.includes(x.category)) {
        return item.brand === e.target.innerText
      }
    });
    props.dispatch({ type: "CheckedBrand", payload: FilterBrand });
  }
  const AllAddProducList = (a) => {
    const AllProductsList = data.filter((item) => {
      if (item.class.includes(a)) {
        return item
      }
    })
    props.dispatch({ type: "CheckedBrand", payload: AllProductsList });
  }
  return (
    <>
      <div className="HomeTop">
        <div className="HomeContainer">

          <div className="miniCategories">
            <div className="categoriesInner">
              <ul>
                {categories && categories.map((category, index) => (
                  < li key={index} onMouseEnter={(e) => { handleMouseLeave(e, category); }} onMouseOut={() => {
                    timeout = setTimeout(() => {
                      setMenuOpen(false)
                    }, 250)
                  }} >
                    {category}
                  </li>
                ))}
                <div ref={productsShow}
                  onMouseEnter={() => clearTimeout(timeout)}
                  className={`menu-open ${menuOpen ? "active" : ""}`}
                >
                  <ul className='productsShow'  >
                    <NavLink to={`/${x.category}`} onClick={() => { AllAddProducList(x.category) }}>
                      <li className=''>
                        <p>Bütün {x.category}</p>
                      </li>

                    </NavLink>
                    {x.showProducts.map((item, index) => (
                      <NavLink to={`/${item.class}/${item.name}`} key={index}>
                        <li className='ProductsInnerShow' onClick={(e) => AddToProducList(e)}>
                          <img src={item.image} alt="" />
                          <p>{item.brand ? item.brand : item.model}</p>
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                  <div className='HomeAdversting'>
                    <div>
                      <img src={storyModelPng} alt="" />
                    </div>
                    <div>
                      <img src={storyModelPng} alt="" />
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div className="HomeBody">

            <div className="advertising">
              <div className="HomeWrapper">
                <div className="ImgSliderBlock">
                  <Swiper
                    className="mySwiper"
                    navigation={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={0}
                    pagination={{
                      clickable: true,
                    }}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                  >
                    <SwiperSlide><img src={ImgOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ImgOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ImgOne} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ImgOne} alt="" /></SwiperSlide>
                  </Swiper>
                </div>
                <div className="DeliveryInfo">
                  <div>
                    <img src={DeliveryImgOne} className="deliveryImg" alt="" />
                    <p><strong>Qapıda rəsmiləşdirmə</strong></p>
                    <p>Nağd, hissə-hissə və ya kartla
                      <span>ödəmə imkanı ilə</span></p>
                  </div>
                  <div>
                    <img src={DeliveryImgTwo} className="deliveryImg" alt="" />
                    <p><strong>Rəsmi Zəmanət</strong></p>
                    <p>3 ilədək rəsmi zəmanət</p>
                  </div>
                  <div>
                    <img src={DeliveryImgOThree} className="deliveryImg" alt="" />
                    <p><strong>Pulsuz çatdırılma</strong></p>
                    <p>Sürətli, təhlükəsiz və təmassız
                    </p>
                  </div>
                </div>
              </div>
              <div className="RightAdversting">
                <div className='RightAdverstingTop'>
                  <h1>Teknotik </h1>
                  <ul className="time">
                    <DecrementClock hour={0} minutes={0} second={0} day={19} mounth={`May`} />
                  </ul>
                </div>
                <div className='RightSwiper'>
                  <Swiper
                    className="mySwiper"
                    navigation={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                  >
                    <SwiperSlide>
                      <div className="SliderDiscount">
                        <div className="SliderDIscountTop">
                          <img src={ImgOne} alt="" />
                        </div>
                        <div className="SliderContent">
                          <div>
                            <p>329m</p>
                            <p>329m</p>
                          </div>
                          <button>
                            Səbətə at
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="SliderDiscount">
                        <div className="SliderDIscountTop">
                          <img src={ImgOne} alt="" />
                        </div>
                        <div className="SliderContent">
                          <div>
                            <p>329m</p>
                            <p>329m</p>
                          </div>
                          <button>
                            Səbətə at
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="SliderDiscount">
                        <div className="SliderDIscountTop">
                          <img src={ImgOne} alt="" />
                        </div>
                        <div className="SliderContent">
                          <div>
                            <p>329m</p>
                            <p>329m</p>
                          </div>
                          <button>
                            Səbətə at
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="SliderDiscount">
                        <div className="SliderDIscountTop">
                          <img src={ImgOne} alt="" />
                        </div>
                        <div className="SliderContent">
                          <div>
                            <p>329m</p>
                            <p>329m</p>
                          </div>
                          <button>
                            Səbətə at
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className='Showoffers'>
                  <button>
                    Bütün təklifləri gör
                  </button>
                </div>
              </div>
            </div>

            <div className="asement">
              <div>
                <img src={ImgOne} alt="" />
              </div>
              <div>
                <img src={ImgOne} alt="" />
              </div>
            </div>
            <div className="bottomSwiper">
              <div className="bottomHeader">
                <p>Teknotik sevindirir</p>
                <ul className='time'>
                  <DecrementClock hour={0} minutes={0} second={0} day={19} mounth={`May`} />
                </ul>
              </div>
              <Swiper
                className="mySwiper"
                navigation={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                pagination={{
                  clickable: true,
                }}
              >
                <SwiperSlide>
                  <div className="bottomContainer">
                    <div className="bottomImg">
                      <img src={ImgOne} alt="" />
                    </div>
                    <div className="bottomContent">
                      <div>
                        <p>329m</p>
                        <p>329m</p>
                      </div>
                      <button>
                        Səbətə at
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bottomContainer">
                    <div className="bottomImg">
                      <img src={ImgOne} alt="" />
                    </div>
                    <div className="bottomContent">
                      <div>
                        <p>329m</p>
                        <p>329m</p>
                      </div>
                      <button>
                        Səbətə at
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bottomContainer">
                    <div className="bottomImg">
                      <img src={ImgOne} alt="" />
                    </div>
                    <div className="bottomContent">
                      <div>
                        <p>329m</p>
                        <p>329m</p>
                      </div>
                      <button>
                        Səbətə at
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bottomContainer">
                    <div className="bottomImg">
                      <img src={ImgOne} alt="" />
                    </div>
                    <div className="bottomContent">
                      <div>
                        <p>329m</p>
                        <p>329m</p>
                      </div>
                      <button>
                        Səbətə at
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className='Showoffers'>
                <button>
                  Bütün təklifləri gör
                </button>
              </div>
            </div>
          </div>

        </div >
      </div >
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    statusSearch: state.OpenSearch,
    state,
  };
};
export default connect(mapStateToProps)(HomeTop);
