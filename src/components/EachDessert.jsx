import React from "react";

const EachDessert = ({ pictures, category, name, price }) => {
  const { thumbnail, desktop, mobile, tablet } = pictures;
  return (
    <div>
      <div className=" flex flex-col">
        <img src={`add-to-cart/assets/images/${thumbnail.split("/").pop()}`} />
        <div>{category}</div>
        <div>{name}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default EachDessert;
