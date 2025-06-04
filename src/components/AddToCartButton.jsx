import React from "react";
import IconAddToCart from "/assets/images/icon-add-to-cart.svg";
import IconIncrement from "/assets/images/icon-increment-quantity.svg";
import IconDecrement from "/assets/images/icon-decrement-quantity.svg";

// /Users/plele/Documents/FrontendMentor/add-to-cart/public/assets/images/icon-add-to-cart.svg
const AddToCartButton = ({
  selectedKey,
  data,
  itemsInCart,
  setItemsInCart,
}) => {
  const addToCartMethod = (selectedKey) => {
    console.log("selected Key in addedToCartMethod", selectedKey);
    // setItemsInCart((prev) => {
    //   console.log("prev", prev);
    //   return prev.map((eachPrevValue, index) => {
    //     if (prev.length > 0 && selectedKey === eachPrevValue.key) {
    //       console.log("selectedKey if block");
    //       return {
    //         ...eachPrevValue,
    //         [quantity]: eachPrevValue.quantity + 1,
    //         [price]: eachPrevValue.price * quantity,
    //       };
    //     } else prev.push({ ...data[selectedKey], [quantity]: 1 });
    //   });
    // });
    setItemsInCart((prev) => {
      console.log("previous", prev);
      prev.push({ ...data[selectedKey], ["quantity"]: 1 });
    });
  };
  return (
    <div className="-m-5 ml-4">
      <button className="bg-white text-sm font-semibold hover:bg-rose-200 hover:text-red p-2 rounded-2xl m-[-8] w-4/6 flex flex-row justify-baseline ml-4">
        <img src={IconDecrement} />
        <img src={IconAddToCart} />
        Add to Cart
        <img src={IconIncrement} onClick={() => addToCartMethod(selectedKey)} />
      </button>
    </div>
  );
};

export default AddToCartButton;
