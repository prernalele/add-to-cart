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
  
  const removeItem = (e, key) => {
    console.log("key", key);
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
            <div onClick={(e, key) => removeItem(e, key)}>x</div>
          </div>
        );
      })}
    </div>
  );
};

export default CartDisplay;
