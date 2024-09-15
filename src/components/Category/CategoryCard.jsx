import React from "react";
import classes from "./Category.module.css";

function CategoryCard({ data }) {
  console.log(data);
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
