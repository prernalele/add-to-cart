import React, { useMemo } from "react";
import iconOrderConfirmed from "/assets/images/icon-order-confirmed.svg";
import ListOfConfirmedItems from "./ListOfConfirmedItems";

const OrderConfirmationForm = ({ itemsInCart, setShowOrderConfirmed }) => {
  const orderTotal = useMemo(() => {
    return itemsInCart.reduce((total, item) => {
      const currentTotal = item.quantity * item.price;

      return total + currentTotal;
    }, 0);
  }, [itemsInCart]);
  return (
    <div className=" fixed inset-0 z-50 bg-black/50 flex flex-col items-center justify-center  ">
      <div className="bg-rose-50 justify-around rounded-2xl  min-h-fit p-3 ">
        <img
          src={iconOrderConfirmed}
          className="size-10 ml-2 mt-2"
          alt="icon of order confirmation "
        />
        <h2 className="font-bold text-2xl text-black ml-2 mt-2">
          Order Confirmed
        </h2>
        <h5 className="text-rose-500 font-light ml-3">
          We hope you enjoy your food
        </h5>
        <ListOfConfirmedItems
          itemsInCart={itemsInCart}
          orderTotal={orderTotal}
        />
        <button
          className="bg-rose-200 text-black justify-center text-xl p-2 m-2 rounded-xl font-medium hover:bg-rose-300 hover:transition-300 w-[97%]"
          onClick={() => setShowOrderConfirmed(false)}
        >
          Start new order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationForm;
