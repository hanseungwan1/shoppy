import React from "react";

export default function DetailPage() {
  return (
    <main className="w-full">
      <p className="my-2 text-xs">남성</p>
      <div className="flex gap-4">
        <img src="img/1.webp" alt="" className="w-72" />
        <div>
          <h2 className="font-extrabold">프린트 코튼 스웻 셔츠</h2>
          <h5 className="font-extrabold border-b-2 my-2">$5000</h5>
          <p className="text-xs mb-3">너무좋은 셔츠 입니다 ㅎㅎ 바로 사세여</p>
          <div className="flex mb-3 justify-between items-center">
            <p className="text-xs text-pink-400 font-extrabold">옵션:</p>
            <input className="border-dotted border-2 w-3/4" type="text" />
          </div>
          <div className="w-full text-center">
            <button className="w-3/4 bg-pink-500 text-white p-1 font-bold mx-auto">
              장바구니에 추가
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
