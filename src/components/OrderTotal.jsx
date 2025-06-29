import React from "react";

const OrderTotal = ({ orderTotal }) => {
  console.log("orderTotal", OrderTotal);
  return (
    <div className="flex justify-between">
      <span>Order Total</span>
      <span>{orderTotal}</span>
    </div>
  );
};

export default OrderTotal;
