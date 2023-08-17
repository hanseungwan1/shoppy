import React, { useEffect, useState } from "react";
import { getProduct } from "../api/apis";

export default function ProductsPage() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getList();
  }, []);

  function getList() {
    getProduct()
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

  if (loading) return <div>로딩중입니다 </div>;
  return (
    <main className="my-3 w-full grid grid-cols-4 gap-2">
      {list.map((el) => {
        return (
          <div
            key={el.id}
            className="rounded-lg shadow-md shadow-gray-400 overflow-hidden"
          >
            <img className="" src={`img/${el.img}.webp`} alt="" />
            <div className="mb-1 p-1">
              <div className="text-xs flex justify-between py-1">
                <p>{el.name}</p>
                <p>{el.price}</p>
              </div>
              <p className="text-xs text-gray-500">{el.sex}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
