import React from "react";
import Item from "../item/Item.jsx";

import "./Popular.css";

import data_product from "../Assets/data";

const Populer = () => {
  return (
    <div className="popular">
      <div class="curve"></div>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              image={item.image}
              id={item.id}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Populer;
