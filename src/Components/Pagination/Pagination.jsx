import { useState, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
function Pagination(props) {
    const { pathname } = useLocation();
    const search =
        pathname.split("/").at(-1) === "products" ? "" : pathname.split("/").at(-1);
    const productPerPage = 12;
    const [productCount, setProductCount] = useState(
        props.state.products.filter((a) => a.category.includes(search)).length
    );
    const [pageCount, setPageCount] = useState(
        Math.ceil(productCount / productPerPage)
    );
    const numberOfPages = [];
    for (let i = 1; i <= pageCount; i++) {
        numberOfPages.push(i);
    }
    const [CurrentButton, setCurrentButton] = useState(1);
    useEffect(() => {
        setCurrentButton(1);
        setProductCount(
            props.state.products.filter((a) => a.category.includes(search)).length
        );
    }, [pathname]);
    useEffect(() => {
        setPageCount(Math.ceil(productCount / productPerPage));
    }, [productCount]);
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
    const Increment = () => {
        setCurrentButton((prev) => (prev === 1 ? prev : prev - 1));
    };
    const decrement = () => {
        setCurrentButton((prev) =>
            prev === numberOfPages.length ? prev : prev + 1
        );
    };
    useEffect(() => {
        props.dispatch({
            type: "CurrentButton",
            value: CurrentButton,
        });
        let tempNumberOfPages = [...arrOfCurrButtons];
        let dotsInitial = "...";
        let dotsLeft = "... ";
        let dotsRight = " ...";
        if (numberOfPages.length < 6) {
            tempNumberOfPages = numberOfPages;
        } else if (CurrentButton >= 1 && CurrentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
        } else if (CurrentButton === 4) {
            const sliced = numberOfPages.slice(0, 5);
            tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
        } else if (CurrentButton > 4 && CurrentButton < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(CurrentButton - 2, CurrentButton); // sliced1 (5-2, 5) -> [4,5]
            const sliced2 = numberOfPages.slice(CurrentButton, CurrentButton + 1); // sliced1 (5, 5+1) -> [6]
            tempNumberOfPages = [
                1,
                dotsLeft,
                ...sliced1,
                ...sliced2,
                dotsRight,
                numberOfPages.length,
            ];
        } else if (CurrentButton > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4);
            tempNumberOfPages = [1, dotsLeft, ...sliced];
        } else if (CurrentButton === dotsInitial) {
            setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
        } else if (CurrentButton === dotsRight) {
            setCurrentButton(arrOfCurrButtons[3] + 2);
        } else if (CurrentButton === dotsLeft) {
            setCurrentButton(arrOfCurrButtons[3] - 2);
        }
        setArrOfCurrButtons(tempNumberOfPages);
    }, [CurrentButton, pageCount]);
    return (
        <>
            <div
                onClick={Increment}
                className={`IconsPagination ${CurrentButton === 1 ? "disabled" : ""}`}
            >
                <GrFormPrevious /> PREV
            </div>
            <div className="PaginationpageCount">
                <div>
                    <span>1</span> - <span>12</span>
                    product(s) of 12
                </div>
                <ul className="LiPage">
                    {arrOfCurrButtons.map((page, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setCurrentButton(page)}
                                className={` ${CurrentButton === page ? "activePage" : ""}`}
                            >
                                {page}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div
                onClick={decrement}
                className={`IconsPagination ${CurrentButton === numberOfPages.length ? "disabled" : ""
                    }`}
            >
                NEXT <GrFormNext />
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        state,
    };
};
export default connect(mapStateToProps)(Pagination);
