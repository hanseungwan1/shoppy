import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getListData } from "../api/apis";

export default function MainPage() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getList();
  }, []);

  function getList() {
    getListData("list")
      .then((res) => {
        const listData = res;
        let arr = [];
        for (let keys in listData) {
          arr.push(listData[keys]);
        }
        setList(arr);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function goDetailHandler(id) {
    navigate(`/detail/${id}`);
  }

  return (
    <main className="flex flex-col justify-center w-full">
      <div className="relative mb-4">
        <img src="img/main.jpg" alt="" className="h-56 w-full " />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-4xl text-red-600 ">
          50% SALE
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-3 items-center">
        {loading ? (
          <div>죄송합니다 로딩중입니다. </div>
        ) : (
          list.map((el) => {
            return (
              <img
                key={el.id}
                src={`img/${el.img}.webp`}
                alt=""
                className="w-full cursor-pointer"
                onClick={() => {
                  goDetailHandler(el.id);
                }}
              />
            );
          })
        )}
      </div>
    </main>
  );
}
