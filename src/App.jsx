import { useState } from "react";
import Dessert from "./components/Dessert";
import CartDisplay from "./components/CartDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row bg-red-50 bg-cover">
      <div className="p-6 m-2 font-display">
        <h1 className="text-3xl">Desserts</h1>
        <Dessert />
      </div>
      <CartDisplay />
    </div>
  );
}

export default App;
