import { useState } from "react";
import Dessert from "./components/Dessert";
import CartDisplay from "./components/CartDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-around">
      <div className="flex flex-col pt-10 font-display">
        <h1 className="font-bold text-3xl">Desserts</h1>
        <Dessert />
      </div>
      <CartDisplay />
    </div>
  );
}

export default App;
