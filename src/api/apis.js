import { child, get, ref, set } from "firebase/database";
import { db } from "./firebase";

export async function getProduct(id) {
  const dbRef = ref(db);
  return get(child(dbRef, id ? `/list/${id}` : `/list`))
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
      alert("상품등록 완료");
    })
    .catch((error) => {
      console.error(error);
    });
}
