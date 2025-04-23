import { useState } from "react";
import Dessert from "./components/Dessert";
import CartDisplay from "./components/CartDisplay";
import data from "../data.json";

function App() {
  const [addedToCart, setAddedToCart] = useState(0);
  const [dessertsData, setDessertsData] = useState(data);

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col pt-10 font-display">
        <h1 className="font-bold text-3xl">Desserts</h1>
        <Dessert data={dessertsData} />
      </div>
      <CartDisplay itemsInCart={addedToCart} setItemsInCart={setAddedToCart} />
    </div>
  );
}

export default App;
