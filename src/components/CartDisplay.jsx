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
  return (
    <div className="bg-white w-[20%] mt-2 px-2 rounded-md">
      <div className="mt-10 max-w-xs text-red font-medium">
        Your Cart ({totalItemsInCart ? totalItemsInCart : 0})
      </div>
      <img src={emptyCartIllustration} />
    </div>
  );
};

export default CartDisplay;
