import React from "react";

const ListOfConfirmedItems = ({ itemsInCart, orderTotal }) => {
  return (
    <div className="max-h-96 overflow-y-auto">
      {itemsInCart.map((item, index) => {
        const { image, name, price, quantity } = item;
        const { thumbnail } = image;
        return (
          <div className="flex flex-row justify-around p-2 m-2 grow-2 bg-rose-100 rounded-md items-center ">
            <img
              src={thumbnail}
              className="size-20 rounded-md flex-shrink-0 "
            />
            <div className="flex flex-col justify-start flex-1 min-w-0 items-start">
              <div className="m-3 text-rose-900 font-semibold ">{name}</div>
              <div className="flex flex-row m-2">
                <span className="m-2 text-red">{`${quantity}x`}</span>
                <span className="m-2 text-rose-500">{`@$${price}`}</span>
              </div>
            </div>
            <div className="flex flex-row-reverse w-20 ">{`$${
              quantity * price
            }`}</div>
          </div>
        );
      })}
      <div className="flex justify-between bg-rose-100 m-2  p-4 ">
        <div className="text-lg">Order Total</div>
        <div className="text-xl font-semibold">{`$${orderTotal}`}</div>
      </div>
    </div>
  );
};

export default ListOfConfirmedItems;
