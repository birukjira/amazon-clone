import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

function ProductCard({ product, flex, add_description, add_button }) {
  // const { image, title, id, rating = {}, price } = product;
  // const { rate = 0, count = 0 } = rating;
  const { image, title, id, rating, price, description } = product;

  //optional rending for the rating
  return (
    <div
      className={`${classes.productCard__container} ${
        flex ? classes.product_detail : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className={classes.productCard__img__container}
        />
      </Link>
      <div>
        <h3>{title}</h3>
        {add_description && (
          <div style={{ maxWidth: "750" }}>{description}</div>
        )}
        <div className={classes.productCard__rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.productCard__button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
