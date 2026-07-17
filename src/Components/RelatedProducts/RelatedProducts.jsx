import React, { useContext } from "react";
import "./RelatedProducts.css";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";

const RelatedProducts = (props) => {
  const { category, currentId } = props;
  const { all_product } = useContext(ShopContext);

  const related = all_product
    .filter((item) => item.category === category && item.id !== currentId)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {related.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
