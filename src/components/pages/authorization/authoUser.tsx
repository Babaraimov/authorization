import { getDatabase, push, ref, set } from "firebase/database";

function AuthoUser() {
  function addData() {
    const product = {
      name: "Iphone 11",
      category: "Phone",
    };

    const db = getDatabase();
    const dbRef = ref(db, "products/");
    const newPostRef = push(dbRef);
    set(newPostRef, product).then(() => {
      console.log("added");
    });
  }

  return (
    <div>
      <button onClick={() => addData()}>add</button>
    </div>
  );
}

export default AuthoUser;
