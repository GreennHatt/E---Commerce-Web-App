import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [tab, setTab] = useState("description");

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          className={
            tab === "description"
              ? "descriptionbox-nav-box active"
              : "descriptionbox-nav-box"
          }
          onClick={() => setTab("description")}
        >
          Description
        </div>
        <div
          className={
            tab === "reviews"
              ? "descriptionbox-nav-box active"
              : "descriptionbox-nav-box"
          }
          onClick={() => setTab("reviews")}
        >
          Reviews (122)
        </div>
      </div>
      {tab === "description" ? (
        <div className="descriptionbox-description">
          <p>
            Built for everyday comfort without compromising on style. This
            piece is crafted from breathable, durable fabric and designed to
            hold up to regular wear and washing while keeping its shape and
            color.
          </p>
          <p>
            Pair it with your favorite bottoms for a casual day out, or dress
            it up for something a little more polished. A versatile addition
            to any wardrobe.
          </p>
        </div>
      ) : (
        <div className="descriptionbox-reviews">
          <p>No written reviews yet — be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
