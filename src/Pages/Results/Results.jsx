import React from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";

function Results() {
  const { categoryName } = useParams();
  console.log(categoryName);
  return (
    <LayOut>
      <h1>Results</h1>
    </LayOut>
  );
}

export default Results;
