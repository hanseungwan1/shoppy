import React from "react";

export default function AdminPage() {
  return (
    <main className="w-full text-center ">
      <h3 className="my-3 font-bold ">새로운 제품 등록</h3>
      <div className="w-full">
        <div className="p-3 border flex gap-2 my-3">
          <button className="border rounded-lg text-xs p-1 bg-gray-400 text-white">
            Choose File
          </button>
          <p>w1050.webp</p>
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <p>짱이쁜 자켓</p>
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <p>80000</p>
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <p>여성</p>
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <p>대조적인 가죽 트리밍 디테일</p>
        </div>
        <div className="p-3 border flex gap-2 my-3">
          <input className="w-full" type="text" />
        </div>
      </div>
      <button className="text-center w-full bg-pink-600 text-white p-1">
        제품 등록하기
      </button>
    </main>
  );
}
