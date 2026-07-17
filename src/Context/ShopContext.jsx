import React, { createContext, useEffect, useState } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : getDefaultCart();
  } catch (e) {
    return getDefaultCart();
  }
};

const loadUserFromStorage = () => {
  try {
    const stored = localStorage.getItem("currentUser");
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    return null;
  }
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(loadCartFromStorage);
  const [currentUser, setCurrentUser] = useState(loadUserFromStorage);

  // Persist cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(itemId)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const itemId in cartItems) {
      totalItems += cartItems[itemId];
    }
    return totalItems;
  };

  // --- Demo-only auth. Runs entirely in the browser via localStorage.
  // There is no server, so passwords are NOT hashed or secured - this is
  // meant only to demonstrate a working login/signup flow on the frontend,
  // not for storing real user credentials. ---
  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    const sessionUser = { name, email };
    localStorage.setItem("currentUser", JSON.stringify(sessionUser));
    setCurrentUser(sessionUser);
    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );
    if (!user) {
      return { success: false, message: "Invalid email or password." };
    }
    const sessionUser = { name: user.name, email: user.email };
    localStorage.setItem("currentUser", JSON.stringify(sessionUser));
    setCurrentUser(sessionUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
