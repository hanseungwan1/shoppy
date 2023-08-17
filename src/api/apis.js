import { child, get, ref, remove, set, update } from "firebase/database";
import { db } from "./firebase";

export async function getListData(url, id) {
  const dbRef = ref(db);
  return get(child(dbRef, id ? `/${url}/${id}` : `/${url}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function setProduct(url, setInfo) {
  return set(ref(db, `${url}/` + setInfo.id), setInfo)
    .then(() => {
      if (url === "cart") {
        alert("장바구니에 담았습니다.");
        return;
      }
      alert("상품등록 완료");
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function updateListData(url, id, updateItem) {
  return update(ref(db, `/${url}/${id}`), updateItem);
}

export async function deleteListData(url, id) {
  return remove(ref(db, `/${url}/${id}`));
}
