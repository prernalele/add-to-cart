import React from "react";
import EachDessert from "./EachDessert";
import.meta.glob("../assets/images/*.jpg"); // This tells Vite to include these files
// import localimage from "./assets/images/image-panna-cotta-desktop.jpg";

const Dessert = ({ data }) => {
  console.log("data", data);
  return (
    <div className="grid grid-cols-4">
      {data.map((eachDessert, index) => {
        console.log("eachDessert", eachDessert);
        const { category, name, price, image } = eachDessert;
        const { desktop, thumbnail } = image;
        return (
          <div key={index} className="m-4">
            {/* <div className=" flex flex-col">
              <img
                src={`add-to-cart/assets/images/${thumbnail.split("/").pop()}`}
              />
              <div>{category}</div>
              <div>{name}</div>
              <div>{price}</div>
            </div> */}
            <EachDessert
              pictures={image}
              category={category}
              name={name}
              price={price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Dessert;
