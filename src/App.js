import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/notFound/NotFound";
import Product from "./pages/product/Product";
import ContactUS from "./pages/contact/ContactUS";
import ProductDetailPage from "./pages/productDetail/ProductDetailPage";
import CartPage from "./pages/cart/CartPage";
import Signin from "./pages/signin/Signin";
import RegisterPage from "./pages/register/RegisterPage";
import PaymentPage from "./pages/payment/PaymentPage";
import Thanks from "./pages/thanks/Thanks";

function App() {
  return (
    <div>
      {/* <AppProvider> */}
        <Router>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/web_ThanhLi/" element={<Home />}></Route>
            <Route path="/web_ThanhLi/home" element={<Home />}></Route>
            <Route path="/web_ThanhLi/product" element={<Product />}></Route>
            <Route path="/web_ThanhLi/detail/:id" element={<ProductDetailPage />}></Route>
            <Route path="/web_ThanhLi/register" element={<RegisterPage />}></Route>
            <Route path="/web_ThanhLi/signin" element={<Signin />}></Route>
            <Route path="/web_ThanhLi/cart" element={<CartPage />}></Route>
            <Route path="/web_ThanhLi/contact" element={<ContactUS />}></Route>
            <Route path="/web_ThanhLi/payment" element={<PaymentPage />}></Route>
            <Route path="/web_ThanhLi/thanks" element={<Thanks />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      {/* </AppProvider> */}
    </div>
  );
}

export default App;
