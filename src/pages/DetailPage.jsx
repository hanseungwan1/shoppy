import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getListData, setProduct } from "../api/apis";

export default function DetailPage({ cartList, setCartList }) {
  const [itemInfo, setItemInfo] = useState({ size: [] });
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("S");
  const param = useParams();

  useEffect(() => {
    setLoading(true);

    async function getDataHandler() {
      return getListData("list", param.id)
        .then((res) => {
          res.size = JSON.parse(res.size);
          setItemInfo(res);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    getDataHandler();
  }, [param]);

  function clickHandler() {
    const sendData = {
      id: param.id,
      count: 1,
      img: itemInfo.img,
      name: itemInfo.name,
      price: itemInfo.price,
      size,
    };
    setProduct("cart", sendData).then(() => {
      setCartList([...cartList, sendData]);
    });
  }

  function changeHandler(e) {
    setSize(e.target.value);
  }

  if (loading) return <>로딩중</>;
  return (
    <main className="w-full">
      <p className="my-2 text-xs">{itemInfo.sex}</p>
      <div className="flex gap-4">
        <img src={`/img/${itemInfo.img}.webp`} alt="" className="w-1/2" />
        <div className="w-1/2">
          <h2 className="font-extrabold">{itemInfo.name}</h2>
          <h5 className="font-extrabold border-b-2 my-2">${itemInfo.price}</h5>
          <p className="text-xs mb-3">{itemInfo.des}</p>
          <div className="flex mb-3 justify-between items-center">
            <p className="text-xs text-pink-400 font-extrabold">옵션:</p>
            <select
              onChange={changeHandler}
              className="border-dotted border-2 w-3/4"
            >
              {itemInfo.size.map((el, i) => {
                return (
                  <option key={i} value={el}>
                    {el}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-full text-center">
            <button
              onClick={clickHandler}
              className="w-3/4 bg-pink-500 text-white p-1 font-bold mx-auto"
            >
              장바구니에 추가
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
