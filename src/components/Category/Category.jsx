import React from "react";
import { categoryInfo } from "./categoryFullInfos";
import CategoryCard from "./CategoryCard";

import classes from "./Category.module.css";

function Category() {
  return (
    <>
      <section className={classes.category__container}>
        {categoryInfo.map((infos, index) => {
          return <CategoryCard key={index} data={infos} />;
          // console.log(infos);
        })}
      </section>
    </>
  );
}

export default Category;
