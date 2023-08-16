import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function CartPage() {
  return (
    <main className="w-full ">
      <div className="border-b-2 w-full text-center mb-3">
        <h2 className="my-3 font-bold">내 장바구니</h2>
      </div>
      <div className="flex justify-between border-b-2 p-3">
        <img className="w-28" src="img/1.webp" alt="" />
        <div className="flex flex-col w-2/3 justify-center p-4">
          <p>핑크옷</p>
          <p className="text-pink-800 font-bold">M</p>
          <p>$50000</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="border-2 w-5 h-5 text-center">-</button>
          <p>1</p>
          <button className="cursor-pointer border-2 h-5 w-5 p-0">+</button>
          <BsFillTrash3Fill className="cursor-pointer" />
        </div>
      </div>
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
