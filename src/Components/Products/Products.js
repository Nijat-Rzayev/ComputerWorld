import "./Products.css";
import "./ResProducts.css";
import { AiOutlineHeart, AiFillEye } from "react-icons/ai";
import { MdSort } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { connect } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
function Products(props) {

    return (
        <>
            Store
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};
export default connect(mapStateToProps)(Products);
