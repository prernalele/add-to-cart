import React from "react";

const OrderConfirmationForm = ({ setShowOrderConfirmed }) => {
  return (
    <div className="w-[100%] h-[100%] bg-blend-lighten ">
      <div>Order confirmation</div>
      <button onClick={() => setShowOrderConfirmed(false)}>Confirmed</button>
    </div>
  );
};

export default OrderConfirmationForm;
