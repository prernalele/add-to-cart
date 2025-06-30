import React from "react";

const OrderConfirmationForm = ({ setShowOrderConfirmed }) => {
  return (
    <div className=" fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div>Order confirmation</div>
      <button onClick={() => setShowOrderConfirmed(false)}>Confirmed</button>
    </div>
  );
};

export default OrderConfirmationForm;
