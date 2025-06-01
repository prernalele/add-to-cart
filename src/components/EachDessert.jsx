import React from "react";
import AddToCartButton from "./AddToCartButton.jsx";

const EachDessert = ({
  key,
  pictures,
  category,
  name,
  price,
  itemsInCart,
  setItemsInCart,
}) => {
  const { thumbnail, desktop, mobile, tablet } = pictures;
  console.log("key", key);
  console.log("pic", `/assets/images/${desktop.split("/").pop()}`);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center mb-7">
        <img
          src={`/assets/images/${desktop.split("/").pop()}`}
          className="size-50"
        />
        <AddToCartButton
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
        />
      </div>
      <div className="flex flex-col">
        <div>{category}</div>
        <div>{name}</div>
        <div>{`$ ${price}`}</div>
      </div>
    </div>
  );
};

export default EachDessert;
