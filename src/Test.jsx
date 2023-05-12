import { collection, doc } from "firebase/firestore";
import React from "react";
import { database } from "../firebase";

function Test() {
  const query = collection(
    database,
    "todos",
    "psgnhealth@gmail.com",
    "userTodo"
  );
  const docs = doc(query);
  let arr = [];
  return (
    <div>
      <h1>Hello this is a normal page. Go and check the console</h1>
    </div>
  );
}

export default Test;
