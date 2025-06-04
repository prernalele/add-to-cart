import { useState } from "react";
import Dessert from "./components/Dessert.jsx";
import CartDisplay from "./components/CartDisplay.jsx";
import data from "../data.json";

function App() {
  const updatedData = data.map((eachData, index) => {
    return { ...eachData, ["key"]: index + 1 };
  });
  const [itemsInCart, setItemsInCart] = useState([]);
  const [dessertsData, setDessertsData] = useState(updatedData);

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col pt-10 font-display">
        <h1 className="font-bold text-3xl">Desserts</h1>
        <Dessert
          data={dessertsData}
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
        />
      </div>
      <CartDisplay itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
    </div>
  );
}

export default App;
