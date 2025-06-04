import React from "react";
import emptyCartIllustration from "/assets/images/illustration-empty-cart.svg";

const CartDisplay = ({ itemsInCart, setItemsInCart }) => {
  console.log("itemsInCart in cart display", itemsInCart);
  return (
    <div className="bg-white w-[20%] mt-2 px-2 rounded-md">
      <div className="mt-10 max-w-xs text-red font-medium">
        Your Cart ({itemsInCart})
      </div>
      <img src={emptyCartIllustration} />
    </div>
  );
};

export default CartDisplay;
