import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";
import { imgs } from "./imgs/data";

function CarouselsEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {imgs.map((imageItemsLinks, i) => {
          return <img key={i} src={imageItemsLinks} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </>
  );
}

export default CarouselsEffect;
