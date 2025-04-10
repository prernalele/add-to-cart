import React from "react";
import data from "../../data.json";

const Dessert = () => {
  console.log("data", data);
  return (
    <div className="grid grid-cols-4">
      {data.map((eachDessert, index) => {
        console.log("eachDessert", eachDessert);
        const { category, name, price, image } = eachDessert;
        return (
          <div key={index} className="m-4">
            <div className=" flex flex-col">
              <img src={image.thumbnail} />
              <div>{category}</div>
              <div>{name}</div>
              <div>{price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dessert;
