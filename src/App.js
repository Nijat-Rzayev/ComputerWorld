import { Route, Routes, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Basket from "./Components/Basket/Basket";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Footer from "./Components/Footer/Footer";
import Liked from "./Components/Liked/Liked";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Corporative from "./Components/Corporative/Corporative";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import AboutUs from "./Components/About/AboutUs";
import Faq from "./Components/Faq/Faq";
import Payment from "./Components/PaymentConditions/Payment";
import Complaint from "./Components/Complaint/Complaint";
import Terms from "./Components/Terms/Terms";
import Vacancies from "./Components/vacancies/Vacancies";
import BreadCrumbs from "./Components/breadCrumbs/BreadCrumbs";
import Compare from "./Components/Compare/Compare";
import LiveChats from "./Components/LiveChats/LiveChats";
import ProtectedRoute from "./ProtectedRoute.js/ProtectedRoute";
import "./App.css";
import "./ResApp.css";
import Item from "./Components/Item/Item";
import ModalGlobal from "./Components/ModalGlobal/ModalGlobal"
import { useEffect } from "react";
import ProductsList from "./Components/ProductsList/ProductsList";
import TableFiltr from "./Components/ProductsList/TableFiltr";
function App(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="BodyBox">
      <Navbar />
      <BreadCrumbs />
      <div className="Mr">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Item />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/Corporative" element={<Corporative />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/watchlist" element={<Liked />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/complaint" element={<Complaint />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/vacancies" element={<Vacancies />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="/:class/:name" element={<ProductsList />}></Route>
          <Route path="/:class" element={<ProductsList />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
      {/* <LiveChats /> */}
      <ModalGlobal />

    </div>
  );
}
const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps)(App);



