import React from "react";
import AddToCartButton from "./AddToCartButton.jsx";

const EachDessert = ({
  selectedKey,
  data,
  pictures,
  category,
  name,
  price,
  itemsInCart,
  setItemsInCart,
}) => {
  const { thumbnail, desktop, mobile, tablet } = pictures;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center mb-7">
        <img
          src={`/add-to-cart/assets/images/${desktop.split("/").pop()}`}
          className="size-50"
        />
        <AddToCartButton
          selectedKey={selectedKey}
          data={data}
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
