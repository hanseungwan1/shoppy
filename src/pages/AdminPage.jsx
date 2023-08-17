import React from "react";
import { uid } from "uid";
import { setProduct } from "../api/apis";

export default function AdminPage() {
  function submitHandler(e) {
    e.preventDefault();
    for (let i = 1; i < 7; i++) {
      if (e.target[i].value.trim() === "") {
        alert("모든 내용을 입력하시오.");
        return;
      }
    }
    const size = JSON.stringify(e.target[6].value.toUpperCase().split(","));
    const sendData = {
      id: uid(),
      img: e.target[1].value,
      name: e.target[2].value,
      des: e.target[3].value,
      price: e.target[4].value,
      sex: e.target[5].value,
      size,
    };
    setProduct("list", sendData);
  }

  return (
    <form onSubmit={submitHandler} className="w-full text-center ">
      <h3 className="my-3 font-bold ">새로운 제품 등록</h3>
      <div className="w-full">
        <div className="p-3 border flex gap-2 my-3">
          <button className="border rounded-lg text-xs p-1 bg-gray-400 text-white">
            Choose File
          </button>
          <p>w1050.webp</p>
          <input
            className="w-15 outline-none"
            type="text"
            placeholder="이미지 num"
          />
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="제품명"
          />
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="제품 설명"
          />
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="가격"
          />
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="성별"
          />
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <input className="w-full" type="text" placeholder="사이즈" />
        </div>
      </div>
      <button className="text-center w-full bg-pink-600 text-white p-1">
        제품 등록하기
      </button>
    </form>
  );
}
