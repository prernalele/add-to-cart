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
  totalItemsInCart,
  setTotalItemsInCart,
}) => {
  const { thumbnail, desktop, mobile, tablet } = pictures;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center mb-7">
        <img
          src={`/add-to-cart/assets/images/${desktop.split("/").pop()}`}
          className="size-50 hover:border-2 border-red"
          alt={`image of ${name}`}
        />
        <AddToCartButton
          selectedKey={selectedKey}
          data={data}
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          totalItemsInCart={totalItemsInCart}
          setTotalItemsInCart={setTotalItemsInCart}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-rose-900">{category}</div>
        <div className="text-rose-900 font-medium">{name}</div>
        <div className="text-red font-semibold">{`$ ${price}`}</div>
      </div>
    </div>
  );
};

export default EachDessert;
