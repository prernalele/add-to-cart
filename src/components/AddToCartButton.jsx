import React from "react";
import IconAddToCart from "/assets/images/icon-add-to-cart.svg";
import IconIncrement from "/assets/images/icon-increment-quantity.svg";
import IconDecrement from "/assets/images/icon-decrement-quantity.svg";

// /Users/plele/Documents/FrontendMentor/add-to-cart/public/assets/images/icon-add-to-cart.svg
const AddToCartButton = ({
  selectedKey,
  data,
  itemsInCart,
  setItemsInCart,
  totalItemsInCart,
  setTotalItemsInCart,
}) => {
  const addToCartMethod = (selectedKey) => {
    // setItemsInCart((prev) => {
    //   console.log("prev", prev);
    //   return prev.map((eachPrevValue, index) => {
    //     if (prev.length > 0 && selectedKey === eachPrevValue.key) {
    //       console.log("selectedKey if block");
    //       return {
    //         ...eachPrevValue,
    //         [quantity]: eachPrevValue.quantity + 1,
    //         [price]: eachPrevValue.price * quantity,
    //       };
    //     } else prev.push({ ...data[selectedKey], [quantity]: 1 });
    //   });
    // });
    setItemsInCart((prev) => {
      console.log("selectedKey", selectedKey);
      // console.log("key", key);
      console.log("*prev*", prev);
      // console.log("the object to be added", [
      //   ...prev,
      //   {
      //     ...data.find((eachData) => eachData.key === selectedKey),
      //     ["quantity"]: 1,
      //   },
      // ]);

      const findDataToUpdate = data.find(
        (eachData) => eachData.key === selectedKey
      );

      const isAlreadyInCart =
        itemsInCart?.length > 0
          ? itemsInCart?.find((item) => findDataToUpdate.key === item.key)
          : undefined;
      console.log("findDataToUpdate", findDataToUpdate);
      const updatedObject = {
        ...findDataToUpdate,
        ["quantity"]: findDataToUpdate.quantity + 1,
      };
      console.log("isAlreadyInCart", isAlreadyInCart);
      console.log("updatedObject", updatedObject);
      const updatedPrev = [
        prev.length > 0
          ? prev?.find((prevItem) => {
              if (prevItem.key === findDataToUpdate.key) {
                return {
                  ...findDataToUpdate,
                  ["quantity"]: findDataToUpdate.quantity + 1,
                };
              }
            })
          : null,
      ];

      return isAlreadyInCart == undefined
        ? [...prev, updatedObject]
        : updatedPrev;
    });
    setTotalItemsInCart(totalItemsInCart + 1);
  };
  return (
    <div className="-m-5 ml-4">
      <button className="bg-white text-sm font-semibold hover:bg-rose-200 hover:text-red p-2 rounded-2xl m-[-8] w-4/6 flex flex-row justify-baseline ml-4">
        <img src={IconDecrement} />
        <img src={IconAddToCart} />
        Add to Cart
        <img src={IconIncrement} onClick={() => addToCartMethod(selectedKey)} />
      </button>
    </div>
  );
};

export default AddToCartButton;
