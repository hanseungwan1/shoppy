import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header({ cartList }) {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  function goCart() {
    navigate("/cart");
  }

  function goAdmin() {
    navigate("/admin");
  }

  function goProducts() {
    navigate("/products");
  }
  return (
    <header className="bg-slate-600 w-full h-7 sticky top-0 m-auto flex justify-between px-3 py-5 text-white z-10">
      <button
        className="flex items-center cursor-pointer font-bold"
        onClick={goHome}
      >
        채영몰
      </button>
      <div className="flex items-center gap-4 ">
        <button>
          <h3 className="font-thin" onClick={goProducts}>
            Products
          </h3>
        </button>
        <div className="relative cursor-pointer" onClick={goCart}>
          <AiOutlineShoppingCart />
          {cartList.length ? (
            <div className="absolute bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center left-2 top-2">
              <p className="text-xs">{cartList.length}</p>
            </div>
          ) : null}
        </div>
        <BsPencil className="cursor-pointer" onClick={goAdmin} />
        <img
          src="/img/KakaoTalk_20230730_231838535.jpg"
          alt="profile_img"
          className="w-5 h-5 rounded-full cursor-pointer"
        />
        <button className="cursor-pointer font-thin">Logout</button>
      </div>
    </header>
  );
}
