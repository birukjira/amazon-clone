import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import classes from "./Carousel.module.css";
import { imgs } from "./imgs/data";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function CarouselsEffect() {
  const arrowStyles = {
    position: "absolute",
    top: "100px",
    bottom: "auto",
    padding: ".4em",
    zIndex: 2,
  };
  return (
    <>
      <Carousel
        // className="relative"
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              // type="button"
              onClick={onClickHandler}
              title={label}
              className={classes.carousel__prev}
            >
              <IoIosArrowBack size={60} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              // type="button"
              onClick={onClickHandler}
              title={label}
              className={classes.carousel__next}
            >
              <IoIosArrowForward size={60} />
            </button>
          )
        }
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
