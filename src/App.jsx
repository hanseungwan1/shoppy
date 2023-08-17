import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import AdminPage from "./pages/AdminPage";
import ProductsPage from "./pages/ProductsPage";
import PageLayout from "./components/PageLayout";
import { useEffect, useState } from "react";
import { getListData } from "./api/apis";

function App() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getCartData();
  }, []);
  console.log(cartList);
  function getCartData() {
    getListData("cart")
      .then((res) => {
        const listData = res;
        let arr = [];
        for (let keys in listData) {
          arr.push(listData[keys]);
        }
        setCartList(arr);
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
