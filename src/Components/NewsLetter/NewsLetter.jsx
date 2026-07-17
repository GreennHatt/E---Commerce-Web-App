import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="Your Email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {subscribed && <p className="newsletter-success">Thanks for subscribing!</p>}
    </div>
  );
};

export default NewsLetter;
