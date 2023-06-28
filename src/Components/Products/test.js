import "./Products.css";
import "./ResProducts.css";
import { AiOutlineHeart, AiFillEye } from "react-icons/ai";
import { MdSort } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { connect } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
import Filter from "../FilterAndSort/Filter";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
function Products(props) {
    // const productsFeature = [
    //     { id: 1, text: "15%", backgroundColor: 'red' },
    //     { id: 3, text: "Stock ", backgroundColor: 'black' },
    //     { id: 4, text: "New", backgroundColor: 'aqua' },
    //     { id: 5, text: "Sale", backgroundColor: 'teal' },
    // ];

    let { category } = useParams();
    let { pathname } = useLocation()
    let [activePage] = props.state.PageListCount;
    let [products, setProducts] = useState(
        [...props.state.products]
        // .sort((a, b) => a.price - b.price ? 1 : -1)
    )
    const FilterAndSortActive = () => {
        props.dispatch({
            type: "OpenFilter",
        });
    };
    let location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location, activePage]);
    const onFilterValueChanged = (e) => {
        if (e.target.value === "FirstExpensive") {
            let f = products;
            f.sort((a, b) => b.price - a.price)
            setProducts([...f]);
            return
        }
        if (e.target.value === "FirstCheap") {
            let f = products;
            f.sort((a, b) => a.price - b.price);
            setProducts([...f]);
            return
        }
        // if (e.target.value === "PopularFirst") {
        //     let f = products;
        //     console.log(f);
        //     return
        // }
        // if (e.target.value === "PopularEnd") {
        //     return
        // }
        if (e.target.value === "name") {
            let f = products
            f.sort((a, b) => (a.name - b.name))
            setProducts([...f])
            return
        }
    }

    return (
        <>
            <div className="Products">
                <p className="pathName">{pathname}</p>
                <h2>Products</h2>
                <div className="ProductsInner">
                    <div className="ProHeader">
                        <div className="SortProducts">
                            Sort by:
                            <select className="SelectProducts" onChange={(e) => onFilterValueChanged(e)}>
                                <option value="name">Ada görə</option>
                                <option value="PopularEnd">Populyar Məhsullar sonda</option>option
                                <option value="PopularFirst">Populyar Məhsullar əvvəlcə</option>option
                                <option value="FirstCheap">Əvvəlvə ucuz</option>
                                <option value="FirstExpensive">Əvvəlvə baha</option>
                            </select>
                        </div>
                        <div className="SortAndFilter" onClick={(e) => FilterAndSortActive(e)}>
                            <div>
                                <MdSort />
                            </div>
                            <div>Filter and Sort</div>
                        </div>
                        <div>290 Products</div>
                    </div>

                    <div className="ProBody">
                        {products
                            ?.filter((item) => (category ? item.category === category : item))
                            .slice(12 * (activePage - 1), 12 * (activePage - 1) + 12)
                            .map((item) => {
                                // let i = Math.floor(Math.random() * 4) + 1;
                                // let t = [];
                                // for (let y = 0; y < i; y++) {
                                //     t.push(productsFeature[Math.floor(Math.random() * 4)])
                                // }
                                // t = [...new Set([...t])];
                                return (
                                    <div className="Product" key={item.id}>
                                        <div className="ProCompany">
                                            {/* {products
                                                .map((item, index) => (
                                                    <span style={{ background: item.backgroundColor }} key={item.id}>{item.text}</span>
                                                ))} */}
                                            <div>
                                                <AiOutlineHeart className="HeartIcons" />
                                            </div>
                                        </div>
                                        <div className="ItemImage">
                                            <img src={item.image} alt=""></img>
                                        </div>
                                        <div className={`DetailBtn`}>
                                            <button>
                                                <AiFillEye className="Eyeİcon" />
                                            </button>
                                            <button>
                                                <FiSettings className="Detailİcon" />
                                            </button>
                                        </div>
                                        <div className="ProductFoot">
                                            <span>{item.name}</span>
                                            <span>{item.price} azn</span>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <div className="FooterProducts">
                    <Pagination />
                </div>
            </div>
            <Filter />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};
export default connect(mapStateToProps)(Products);
