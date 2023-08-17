import React from "react";

import CartItem from "../components/CartItem";

export default function CartPage() {
  return (
    <main className="w-full ">
      <div className="border-b-2 w-full text-center mb-3">
        <h2 className="my-3 font-bold">내 장바구니</h2>
      </div>
      <CartItem />
      <footer>
        <div className="flex justify-between p-5 items-center">
          <div className="text-center">
            <p>상품 총액</p>
            <p>$5000</p>
          </div>
          <p>+</p>
          <div className="text-center">
            <p>배송비</p>
            <p>$300</p>
          </div>
          <p>=</p>
          <div className="text-center">
            <p>총가격</p>
            <p>$5500</p>
          </div>
        </div>
        <button className="w-full bg-pink-600 text-white p-1 my-3">
          주문 하기
        </button>
      </footer>
    </main>
  );
}
