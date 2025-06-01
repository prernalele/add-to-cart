import React from "react";
import IconAddToCart from "/assets/images/icon-add-to-cart.svg";
import IconIncrement from "/assets/images/icon-increment-quantity.svg";
import IconDecrement from "/assets/images/icon-decrement-quantity.svg";

// /Users/plele/Documents/FrontendMentor/add-to-cart/public/assets/images/icon-add-to-cart.svg
const AddToCartButton = ({ itemsInCart, setItemsInCart }) => {
  console.log("itemsInCart", itemsInCart);
  const addToCartMethod = () => {
    console.log("inside add to cart");
    setItemsInCart();
  };
  return (
    <div className="-m-5 ml-4">
      <button className="bg-white text-sm font-semibold hover:bg-rose-200 hover:text-red p-2 rounded-2xl m-[-8] w-4/6 flex flex-row justify-baseline ml-4">
        <img src={IconDecrement} />
        <img src={IconAddToCart} />
        Add to Cart
        <img src={IconIncrement} onClick={addToCartMethod} />
      </button>
    </div>
  );
};

export default AddToCartButton;
