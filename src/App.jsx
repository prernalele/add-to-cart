import { useState } from "react";
import Dessert from "./components/Dessert.jsx";
import CartDisplay from "./components/CartDisplay.jsx";
import OrderConfirmationForm from "./components/OrderConfirmationForm.jsx";
import data from "../data.json";

function App() {
  const updatedData = data.map((eachData, index) => {
    return { ...eachData, ["key"]: index + 1, ["quantity"]: 0 };
  });
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  // const [dessertsData, setDessertsData] = useState(updatedData);
  const [showOrderConfirmed, setShowOrderConfirmed] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div className="flex md:justify-evenly  md:flex-row flex-col place-items-center md:place-items-start">
        <div className="flex flex-col pt-5 font-display">
          <h1 className="font-bold text-3xl  p-4 ">Desserts</h1>
          <Dessert
            data={updatedData}
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
            totalItemsInCart={totalItemsInCart}
            setTotalItemsInCart={setTotalItemsInCart}
          />
        </div>
        <CartDisplay
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          totalItemsInCart={totalItemsInCart}
          setTotalItemsInCart={setTotalItemsInCart}
          setShowOrderConfirmed={setShowOrderConfirmed}
        />
      </div>
      {showOrderConfirmed && (
        <OrderConfirmationForm
          setShowOrderConfirmed={setShowOrderConfirmed}
          itemsInCart={itemsInCart}
        />
      )}
    </div>
  );
}

export default App;
