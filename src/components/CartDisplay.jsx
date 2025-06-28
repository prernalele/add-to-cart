import React from "react";
import emptyCartIllustration from "/assets/images/illustration-empty-cart.svg";

const CartDisplay = ({
  itemsInCart,
  setItemsInCart,
  totalItemsInCart,
  setTotalItemsInCart,
}) => {
  console.log("itemsInCart in cartDisplay component", itemsInCart);
  console.log("total Items In Cart", totalItemsInCart);
  
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
    setTotalItemsInCart(totalItemsInCart - 1);
  };

  return (
    <div className="bg-white w-[20%] mt-2 px-2 rounded-md">
      <div className="mt-10 max-w-xs text-red font-medium">
        Your Cart ({totalItemsInCart ? totalItemsInCart : 0})
      </div>
      {totalItemsInCart === 0 && <img src={emptyCartIllustration} />}
      {itemsInCart?.map((item) => {
        const { name, quantity, price, key } = item;
        const totalPrice = quantity * price;
        return (
          <div key={key} className="flex flex-row justify-between">
            <div>
              <div>{name}</div>
              <div className="flex flex-row justify-between">
                <span>{`${quantity}x`}</span>
                <span>{`@${price}`}</span>
                <span>{`$ ${totalPrice}`}</span>
              </div>
            </div>
            <div
              onClick={() => takeAwayFromCart(key)}
              className="hover:cursor-pointer"
            >
              x
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartDisplay;
