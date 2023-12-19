import React from "react";
import "./RelatedProduct.css";
import data_product from "../Assets/data.js";
import Item from "../item/Item.jsx";

const RelatedProduct = () => {
  return (
    <div className="relatedproduct">
      <h2>Related Products</h2>
      <hr />
      <div className="relatedproducts-item">
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

export default RelatedProduct;
