import React, { useEffect, useState } from "react";

import CartItem from "../components/CartItem";

export default function CartPage({ cartList, setCartList }) {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(0);
    if (cartList.length !== 0) {
      cartList.forEach((el) => {
        setTotalCost((pre) => {
          return (pre += parseInt(el.price));
        });
      });
    }
  }, [cartList]);

  return (
    <main className="w-full ">
      <div className="border-b-2 w-full text-center mb-3">
        <h2 className="my-3 font-bold">내 장바구니</h2>
      </div>
      {cartList.map((el) => {
        return (
          <CartItem
            key={el.id}
            name={el.name}
            img={el.img}
            price={el.price}
            size={el.size}
            count={el.count}
            id={el.id}
            setCartList={setCartList}
            cartList={cartList}
          />
        );
      })}
      <footer>
        <div className="flex justify-between p-5 items-center">
          <div className="text-center">
            <p>상품 총액</p>
            <p>${totalCost}</p>
          </div>
          <p>+</p>
          <div className="text-center">
            <p>배송비</p>
            <p>$3000</p>
          </div>
          <p>=</p>
          <div className="text-center">
            <p>총가격</p>
            <p>${totalCost + 3000}</p>
          </div>
        </div>
        <button
          onClick={() => {
            alert("주문이 완료됐습니다.");
          }}
          className="w-full bg-pink-600 text-white p-1 my-3"
        >
          주문 하기
        </button>
      </footer>
    </main>
  );
}
