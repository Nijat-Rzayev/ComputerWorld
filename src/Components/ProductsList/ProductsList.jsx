import React, { useState } from 'react'
import "./ProductsList.css"
import viewEye from "../../Assest/viewEye.webp";
import SliderItem from '../Home/SliderItem/SliderItem'
import { connect } from 'react-redux';
import filtrTransfer from "../../Assest/transfer.webp"
import TableFiltr from './TableFiltr';
function ProductsList(props) {
    const [test, setTest] = useState(props.state.ProductsList);
    const ModalShow = (e) => {
        props.dispatch({ type: "ModalTrue", payload: e.target.getAttribute("data-typeof") })
    }
    const ProductName = test.map((item) => {
        return item.class
    })
    const [sortedByPrice, setSortedByPrice] = useState(false);

    const cheapToExpensive = () => {
        setSortedByPrice(!sortedByPrice)
    };
    const buttonLabel = sortedByPrice ? "Bahadan Ucuza" : "Ucuzdan bahaya"
    return (
        <>
            <div className="ProductsList">
                <div className="prodductsListInner">
                    <h1>{ProductName[0]}</h1>
                    <div className="listTable">
                        <div className="listSectionFirst">
                            <TableFiltr />
                        </div>
                        <div className="listSectionLast">
                            <div className="productsListHeader">
                                <div className='CashOrMonthly'>
                                    <button>Nağd</button>
                                    <button>Aylıq</button>
                                </div>
                                <div className='filtrSections'>
                                    <ul className='filtrSectionsUl'>
                                        <li>
                                            <label htmlFor="Name">Ada görə</label>
                                            <input type="checkbox" name="filtrInp" id="Name" />
                                        </li>
                                        <li>
                                            <label htmlFor="expensiveToCheap" onClick={cheapToExpensive}>{buttonLabel}</label>
                                            <input type="checkbox" name="filtrInp" id="expensiveToCheap" />
                                        </li>
                                        <li>
                                            <label htmlFor="NewProducts">Yeni məhsul</label>
                                            <input type="checkbox" name="filtrInp" id="NewProducts" />
                                        </li>
                                    </ul>
                                    <div className="ListFiltrCount">
                                        <img src={viewEye} alt="" />
                                        <button>16</button>
                                        <button>48</button>
                                        <button>72</button>
                                        <button>96</button>
                                    </div>
                                </div>
                                <div className="ResFiltrSection">
                                    <button>
                                        <img src={filtrTransfer} alt="" />
                                        <p>Ucuzdan-Bahaya</p>
                                    </button>
                                    <button onClick={(e) => { ModalShow(e) }} data-typeof="TableFiltr" className='TableFiltrBtn'>
                                        <img src={filtrTransfer} alt="" />
                                        <p>Filtr</p>
                                    </button>
                                </div>
                            </div>
                            <div className="productsListBody">
                                {test.map((item, index) => (
                                    <div className="productsListItem" key={index}>
                                        <SliderItem item={item}  />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToPRops = (state) => {
    return {
        state
    }
}
export default connect(mapStateToPRops)(ProductsList)