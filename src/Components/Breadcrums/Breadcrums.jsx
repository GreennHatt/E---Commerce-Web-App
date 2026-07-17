import React from "react";
import "./Breadcrums.css";
import { Link } from "react-router-dom";
import arrow_icon from "../../Assets/breadcrum_arrow.png";

const categoryLabels = {
  men: "Men",
  women: "Women",
  kid: "Kids",
};

const categoryLinks = {
  men: "/mens",
  women: "/women",
  kid: "/kids",
};

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      <Link to="/" style={{ textDecoration: "none", color: "#5c5c5c" }}>
        HOME
      </Link>
      <img src={arrow_icon} alt="" />
      <Link
        to={categoryLinks[product.category] || "/"}
        style={{ textDecoration: "none", color: "#5c5c5c" }}
      >
        {categoryLabels[product.category] || "SHOP"}
      </Link>
      <img src={arrow_icon} alt="" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrums;
