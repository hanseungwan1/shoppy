import React, { useEffect, useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { deleteListData, updateListData } from "../api/apis";

export default function CartItem({
  name,
  img,
  price,
  size,
  count,
  id,
  setCartList,
  cartList,
}) {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter(count);
  }, [count]);

  function minusCountHandler() {
    if (counter <= 1) return;
    setCounter((pre) => {
      return pre - 1;
    });
    const updateContent = {
      count: counter - 1,
      id,
      img,
      name,
      price,
      size,
    };
    updateListData("cart", id, { ...updateContent });
  }

  function plusCountHandler() {
    if (counter >= 99) return;
    setCounter((pre) => {
      return pre + 1;
    });
    const updateContent = {
      count: counter + 1,
      id,
      img,
      name,
      price,
      size,
    };
    updateListData("cart", id, { ...updateContent });
  }

  function deleteHandler() {
    deleteListData("cart", id);
    let filtedArr = cartList.filter((el) => {
      if (el.id === id) return false;
      return true;
    });
    setCartList([...filtedArr]);
  }

  return (
    <div className="flex justify-between border-b-2 p-3">
      <img className="w-28" src={`img/${img}.webp`} alt="" />
      <div className="flex flex-col w-2/3 justify-center p-4">
        <p>{name}</p>
        <p className="text-pink-800 font-bold">{size}</p>
        <p>${price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={minusCountHandler}
          className="border-2 w-5 h-5 text-center"
        >
          -
        </button>
        <p>{counter}</p>
        <button
          onClick={plusCountHandler}
          className="cursor-pointer border-2 h-5 w-5 p-0"
        >
          +
        </button>
        <BsFillTrash3Fill onClick={deleteHandler} className="cursor-pointer" />
      </div>
    </div>
  );
}
