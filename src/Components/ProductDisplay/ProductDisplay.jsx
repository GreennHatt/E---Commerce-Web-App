import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";

const sizes = ["S", "M", "L", "XL", "XXL"];

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price.toFixed(2)}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price.toFixed(2)}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A comfortable, versatile piece designed to fit effortlessly into
          your everyday wardrobe. Made with quality materials for a great
          fit and lasting wear.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {sizes.map((size) => (
              <div
                key={size}
                className={selectedSize === size ? "size-selected" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>
          {added ? "ADDED!" : "ADD TO CART"}
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
