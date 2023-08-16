import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import AdminPage from "./pages/AdminPage";
import ProductsPage from "./pages/ProductsPage";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
