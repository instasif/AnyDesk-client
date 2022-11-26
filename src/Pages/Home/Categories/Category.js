import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { categoryID, name } = category;
  return (
    <Link to={`/category/${categoryID}`}>
      <div className="card bg-orange-400 text-primary-content">
        <div className="card-body">
          <h1 className="text-center text-3xl text-bold">{name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Category;
