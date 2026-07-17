import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
import cart_cross_icon from "../../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const itemsInCart = all_product.filter((product) => cartItems[product.id] > 0);

  if (itemsInCart.length === 0) {
    return (
      <div className="cartitems-empty">
        <p>Your cart is empty.</p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {itemsInCart.map((product) => (
        <React.Fragment key={product.id}>
          <div className="cartitems-format cartitems-format-main">
            <img className="carticon-product-icon" src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.new_price.toFixed(2)}</p>
            <div className="cartitems-quantity">
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <span>{cartItems[product.id]}</span>
              <button onClick={() => addToCart(product.id)}>+</button>
            </div>
            <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
            <img
              className="cartitems-remove-icon"
              src={cart_cross_icon}
              onClick={() => deleteFromCart(product.id)}
              alt="remove"
            />
          </div>
          <hr />
        </React.Fragment>
      ))}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount().toFixed(2)}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
