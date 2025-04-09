import React from "react";
import data from "../../data.json";

const Dessert = () => {
  console.log("data", data);
  return (
    <div className="flex flex-row w-100vw h-100vh gap-8">
      {data.map((eachDessert, index) => {
        return (
          <div key={index} className="m-4">
            eachDessert
          </div>
        );
      })}
    </div>
  );
};

export default Dessert;
