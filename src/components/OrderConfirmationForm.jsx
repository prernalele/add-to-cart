import React from "react";
import iconOrderConfirmed from "/assets/images/icon-order-confirmed.svg";
const OrderConfirmationForm = ({ setShowOrderConfirmed }) => {
  return (
    <div className=" fixed inset-0 z-50 bg-black/50 flex flex-col items-center justify-center ">
      <div className="bg-amber-50 h-[50%] w-[30%] justify-around rounded-2xl">
        <img src={iconOrderConfirmed} />
        <h2 className="font-bold text-2xl text-black">Order Confirmed</h2>
        <h5>We hope you enjoy your food</h5>
        <button
          className="bg-rose-200 text-black justify-center text-xl p-2 rounded-xl font-medium hover:bg-rose-300 hover:transition-300"
          onClick={() => setShowOrderConfirmed(false)}
        >
          Start new order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationForm;
