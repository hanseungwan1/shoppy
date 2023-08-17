import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function CartItem() {
  return (
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
  );
}
