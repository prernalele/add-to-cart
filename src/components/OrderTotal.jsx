import React from "react";

const OrderTotal = ({ OrderTotal }) => {
  console.log("orderTotal", OrderTotal);
  return (
    <div className="flex justify-between">
      <span>Order Total</span>
      <span>{OrderTotal}</span>
    </div>
  );
};

export default OrderTotal;
