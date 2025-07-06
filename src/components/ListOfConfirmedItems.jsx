import React from "react";

const ListOfConfirmedItems = ({ itemsInCart }) => {
  console.log("items in cart", itemsInCart);
  return (
    <div className="max-h-96 overflow-y-auto">
      {itemsInCart.map((item, index) => {
        const { image, name, price, quantity } = item;
        console.log("item", item);
        const { thumbnail } = image;
        return (
          <div className="flex flex-row justify-around p-2 m-2 grow-2 bg-rose-100">
            <img
              src={thumbnail}
              className="size-15 rounded-md flex-shrink-0 "
            />
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>{name}</div>
              <div className="flex flex-row justify-items-center m-2">
                <span className="m-2">{`${quantity}x`}</span>
                <span className="m-2">{`${price}`}</span>
              </div>
            </div>
            <div className="flex justify-center w-20 align-middle">
              {`$${quantity * price}`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfConfirmedItems;
