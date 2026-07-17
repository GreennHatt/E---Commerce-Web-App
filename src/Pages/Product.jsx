import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Product not found.</h2>
      </div>
    );
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts category={product.category} currentId={product.id} />
    </div>
  );
};

export default Product;
