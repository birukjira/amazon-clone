import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import CarouselsEffect from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";

function Landing() {
  return (
    <LayOut>
      <CarouselsEffect />
      <Category />
    </LayOut>
  );
}

export default Landing;
