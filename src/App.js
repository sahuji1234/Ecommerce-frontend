import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/navigation/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import HomePage from "./customer/pages/HomePage/HomePage";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CusteomerRouters from "./Routers/CusteomerRouters";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CusteomerRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
