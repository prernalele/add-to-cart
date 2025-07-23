import React from "react";

const OrderTotal = ({ orderTotal }) => {

  return (
    <div className="flex justify-between  ">
      <span className="text-amber-950 font-medium">Order Total</span>
      <span className="text-black font-bold">{`$ ${orderTotal}`}</span>
    </div>
  );
};

export default OrderTotal;
