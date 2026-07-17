import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import ShopContextProvider from "./Context/ShopContext";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory category="men" />} />
            <Route path="/women" element={<ShopCategory category="women" />} />
            <Route path="/kids" element={<ShopCategory category="kid" />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
