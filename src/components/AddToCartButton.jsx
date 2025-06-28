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
  totalItemsInCart,
  setTotalItemsInCart,
}) => {

  const addToCartMethod = (selectedKey) => {
    setItemsInCart((prev) => {
      /* 
      1. Any given item can either be added or updated
      2. IF the item's key already exist, update the quantity, return the previous 
        [1: 1, 2 : 2 ]
      3. IF the item's key is new, ADD to the prev, then return prev
        [1:1, 2:2]
        [1:1, 2:2, 3:1]
      */

      const itemToUpdateOrAdd = data.find((item) => item.key === selectedKey);
      console.log("itemToUpdateOrAdd", itemToUpdateOrAdd);
      console.log("previous", prev);
      const isAlreadyExist =
        prev?.length > 0
          ? prev.filter((eachPrev) => eachPrev.key === itemToUpdateOrAdd.key)
          : [];
      console.log("isAlreadyExist", isAlreadyExist);
      const updatedPrev = prev.map((item) => {
        if (item.key === itemToUpdateOrAdd.key) {
          return {
            ...item,
            ["quantity"]: item.quantity + 1,
          };
        } else return item;
      });
      const newItemToAppend = {
        ...itemToUpdateOrAdd,
        ["quantity"]: itemToUpdateOrAdd.quantity + 1,
      };
      console.log("newItemToAppend", newItemToAppend);
      console.log("updatedPrev", updatedPrev);
      return isAlreadyExist.length ? updatedPrev : [...prev, newItemToAppend];
    });
    setTotalItemsInCart(totalItemsInCart + 1);
  };
  const takeAwayFromCart = (selectedKey) => {
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
    <div className="-m-5 ml-4 gap-0.5">
      <button className="bg-white text-sm font-semibold hover:bg-rose-200 hover:text-red p-2 rounded-2xl m-[-8] w-4/6 flex flex-row justify-baseline ml-4">
        <img
          src={IconDecrement}
          onClick={() => takeAwayFromCart(selectedKey)}
          className="p-1 hover:cursor-pointer"
        />
        <img src={IconAddToCart} className="gap-0.5" />
        Add to Cart
        <img
          src={IconIncrement}
          onClick={() => addToCartMethod(selectedKey)}
          className="p-1 hover:cursor-pointer"
        />
      </button>
    </div>
  );
};

export default AddToCartButton;
