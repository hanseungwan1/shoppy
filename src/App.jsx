import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import AdminPage from "./pages/AdminPage";
import ProductsPage from "./pages/ProductsPage";
import PageLayout from "./components/PageLayout";
import { useState } from "react";

function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout cartList={cartList} />}>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/cart"
            element={<CartPage cartList={cartList} setCartList={setCartList} />}
          />
          <Route
            path="/detail/:id"
            element={
              <DetailPage cartList={cartList} setCartList={setCartList} />
            }
          />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
