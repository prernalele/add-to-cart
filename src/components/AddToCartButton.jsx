import React, { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  const currentItem = itemsInCart.find((item) => item.key === selectedKey);

  const currentQuantity = currentItem?.quantity ? currentItem.quantity : 0;

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

      const isAlreadyExist =
        prev?.length > 0
          ? prev.filter((eachPrev) => eachPrev.key === itemToUpdateOrAdd.key)
          : [];

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
    <div className="-m-5 place-items-center  gap-0.5">
      <button
        className="bg-white text-sm font-semibold hover:bg-rose-200 hover:text-red p-4 rounded-4xl    flex flex-row justify-between  flex-none w-[70%] min-w-[160px] "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={IconDecrement}
          alt="Decrease quantity"
          onClick={(e) => {
            e.stopPropagation();
            takeAwayFromCart(selectedKey);
          }}
          className="w-4 h-4 p-1 hover:cursor-pointer"
        />
        {/* {isHovered && currentQuantity > 0 ? (
          <div className="w-[100%]">{`${currentQuantity}`}</div>
        ) : ( */}
        <div className="flex flex-row items-center justify-between flex-none">
          {isHovered && currentQuantity > 0 ? (
            <div className="w-[100%]">{`${currentQuantity}`}</div>
          ) : (
            <>
              <img src={IconAddToCart} alt="Add to cart" className="w-4 h-4" />
              <span className="items-center">Add to Cart</span>
            </>
          )}
        </div>

        <img
          src={IconIncrement}
          alt="Increase quantity"
          onClick={(e) => {
            e.stopPropagation();
            addToCartMethod(selectedKey);
          }}
          className="w-4 h-4 p-1 hover:cursor-pointer"
        />
      </button>
    </div>
  );
};

export default AddToCartButton;
