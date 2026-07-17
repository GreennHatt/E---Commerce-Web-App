import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const banners = {
  men: require("../Assets/banner_mens.png"),
  women: require("../Assets/banner_women.png"),
  kid: require("../Assets/banner_kids.png"),
};

const PAGE_SIZE = 12;

const ShopCategory = (props) => {
  const { category } = props;
  const { all_product } = useContext(ShopContext);
  const [sort, setSort] = useState("default");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = all_product.filter((item) => item.category === category);

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low-high") return a.new_price - b.new_price;
    if (sort === "high-low") return b.new_price - a.new_price;
    return 0;
  });

  const visibleItems = sorted.slice(0, visibleCount);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banners[category]} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing {visibleItems.length}-{sorted.length}
          </span>{" "}
          out of {sorted.length} products
        </p>
        <div className="shopcategory-sort">
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Sort by: Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {visibleItems.map((item, i) => (
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
      {visibleCount < sorted.length && (
        <div className="shopcategory-loadmore">
          <button onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
            Explore More
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
