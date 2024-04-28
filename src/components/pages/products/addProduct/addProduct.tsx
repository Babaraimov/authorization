import Header from "../../../header/header";
import "./addProduct.css";
import { addDoc } from "firebase/firestore";
import FireBaseInit from "../../../../firebase/config";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

function AddProduct() {
  const db = FireBaseInit().db;
  async function createProduct() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada11",
        last: "Lovelace1111",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(() => {
    async function getNews() {
      try {
        const ref = collection(db, "users");
        const snapShot = await getDocs(ref);
        console.log(
          "ssss",
          snapShot.docs.map((doc) => doc.data())
        );
        return snapShot.docs.map((doc) => doc.data());
      } catch (error) {
        console.log("e", error);
      }
    }
    getNews();
  }, []);
  return (
    <div>
      добавление
      <Header />
      <center className="mt-[5pc]">
        <div className="flex flex-col items-start w-[650px]">
          <h1>NAME</h1>
          <input type="text" name="" id="" placeholder="name" />
          <h1>description</h1>
          <input type="text" name="" id="" placeholder="description" />
          <h1>gigagite</h1>
          <input type="text" name="" id="" placeholder="gigagite" />
          <div className="flex flex-col items-start w-full m-[20px]">
            <h1>IMAGE GROUP</h1>
            <input type="text" name="" id="" placeholder="iamge" />
            <input type="text" name="" id="" placeholder="iamge2" />
            <input type="text" name="" id="" placeholder="iamge3" />
            <input type="text" name="" id="" placeholder="iamge4" />
          </div>
          <h1>rating</h1>
          <input type="text" name="" id="" placeholder="rating" />
          <h1>Батарея</h1>
          <input type="text" name="" id="" placeholder="Батарея" />
          <h1>Камера</h1>
          <input type="text" name="" id="" placeholder="Камера" />
          <div className="flex justify-between items-center w-[280px] mt-[3pc]">
            <h1>color</h1>
            <select>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="white">white</option>
              <option value="black">black</option>
            </select>
          </div>
        </div>
        <button
          onClick={createProduct}
          className="p-[20px] bg-red-500 rounded-xl"
        >
          create product
        </button>
      </center>
    </div>
  );
}

export default AddProduct;
