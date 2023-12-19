import React from "react";

import "./NewCollections.css";

import new_collection from "../Assets/new_collections.js";
import Item from "../item/Item.jsx";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item) => {
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

export default NewCollections;
