import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.min.css";
import Home from "./Components/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import PageNotFound from "./Pages/PageNotFound";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ThankYouPage from "./Pages/ThankYouPage";
import BestLaptopForWork from "./Pages/BestLaptopForWork";
import Top5Smartphones from "./Pages/Top5Smartphones";
import FutureOfWearableTech from "./Pages/FutureOfWearableTech";
import SingleProduct from "./Pages/SingleProduct";
import FavoriteProducts from "./Pages/FavoriteProducts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/FavoriteProducts" element={<FavoriteProducts/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/BestLaptopForWork" element={<BestLaptopForWork />} />
          <Route path="/Top5Smartphones" element={<Top5Smartphones />} />
          <Route
            path="/FutureOfWearableTech"
            element={<FutureOfWearableTech />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ThankYouPage" element={<ThankYouPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster /> {/* لإظهار التنبيهات باستخدام react-hot-toast */}
      </div>
    </BrowserRouter>
  );
}

export default App;
