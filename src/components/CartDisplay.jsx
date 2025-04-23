import React from "react";
import emptyCartIllustration from "/assets/images/illustration-empty-cart.svg";

const CartDisplay = ({ itemsInCart, setItemsInCart }) => {
  return (
    <div className="bg-white w-[20%] mt-2 px-2 rounded-md">
      <div className="mt-10 max-w-xs text-orange-400 font-medium">
        Your Cart ({itemsInCart})
      </div>
      <img src={emptyCartIllustration} />
    </div>
  );
};

export default CartDisplay;
