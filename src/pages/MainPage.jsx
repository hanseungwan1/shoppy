import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  function goDetailHandler() {
    navigate("/detail");
  }

  return (
    <main className="flex flex-col justify-center w-full">
      <div className="relative">
        <img src="img/main.jpg" alt="" className="h-56 w-full mb-4" />
      </div>
      <div className="grid grid-cols-3 gap-3 items-center">
        <img
          src="img/1.webp"
          alt=""
          className="w-full cursor-pointer"
          onClick={goDetailHandler}
        />
        <img src="img/2.webp" alt="" className="w-full h-50" />
        <img src="img/3.webp" alt="" className="w-full h-50" />
        <img src="img/4.webp" alt="" className="w-full h-50" />
        <img src="img/5.webp" alt="" className="w-full h-50" />
        <img src="img/6.webp" alt="" className="w-full h-50" />
        <img src="img/7.webp" alt="" className="w-full h-50" />
      </div>
    </main>
  );
}
