import React from "react";
import { useMemo } from "react";
import OrderTotal from "./OrderTotal";
import emptyCartIllustration from "/assets/images/illustration-empty-cart.svg";

const CartDisplay = ({
  itemsInCart,
  setItemsInCart,
  totalItemsInCart,
  setTotalItemsInCart,
}) => {
  console.log("itemsInCart in cartDisplay component", itemsInCart);
  console.log("total Items In Cart", totalItemsInCart);

  const orderTotal = useMemo(() => {
    return itemsInCart.reduce((total, item) => {
      console.log("item", item);
      const currentTotal = item.quantity * item.price;
      console.log("current total", currentTotal);
      console.log("total", total);
      return total + currentTotal;
    }, 0);
  }, [itemsInCart]);

  const takeAwayFromCart = (selectedKey) => {
    console.log("selectedKey here", selectedKey);

    setItemsInCart((prev) => {
      /*
      1. Find the key
      2. Decrease one quantity
      3. If the quantity is zero take the item out of the itemsInCart array
      4. return the new prev
      */
      const updatedPrev = prev.map((item) => {
        if (item.key === selectedKey) {
          return {
            ...item,
            ["quantity"]: item.quantity - 1,
          };
        } else return item;
      });
      return updatedPrev.filter((item) => item.quantity !== 0);
    });
    setTotalItemsInCart((prev) => prev - 1);
  };

  return (
    <div className="bg-white w-[23%] max-h-screen min-h-1 px-4 py-4 rounded-md flex flex-col mx-2 mt-10">
      <div className="max-w-xs text-red font-medium my-2">
        Your Cart ({totalItemsInCart ? totalItemsInCart : 0})
      </div>
      {totalItemsInCart === 0 && (
        <div className="flex flex-col justify-around">
          <img src={emptyCartIllustration} className="m-auto p-auto" />
          <div className="text-rose-500">
            Your added items will appear here.
          </div>
        </div>
      )}
      {itemsInCart.length > 0 && (
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            {itemsInCart?.map((item, index) => {
              const { name, quantity, price, key } = item;
              const totalPrice = quantity * price;

              return (
                <div key={key} className="m-2">
                  <div
                    key={key}
                    className="flex flex-row justify-between  border-b-amber-900 border-b-1 py-1"
                  >
                    <div>
                      <div className="text-rose-500 font-semibold">{name}</div>
                      <div className="flex flex-row justify-between">
                        <span className="text-red">{`${quantity}x`}</span>
                        <span className="text-rose-500">{`@${price}`}</span>
                        <span className="text-rose-500">{`$ ${totalPrice}`}</span>
                      </div>
                    </div>
                    <div
                      onClick={() => takeAwayFromCart(key)}
                      className="hover:cursor-pointer"
                    >
                      x
                    </div>
                  </div>
                </div>
              );
            })}
            <br />
            {itemsInCart.length > 0 && <OrderTotal orderTotal={orderTotal} />}
          </div>
          <button className="bg-rose-200 rounded-3xl p-2 m-4 text-lg font-semibold">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
