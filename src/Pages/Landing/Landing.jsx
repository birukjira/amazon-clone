import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import CarouselsEffect from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";

function Landing() {
  return (
    <LayOut>
      <CarouselsEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
