import React from "react";

const Blog = ({b}) => {
    const {q, a} = b;
  return (
    <div>
      <div className="card bg-orange-400 text-primary-content">
        <div className="card-body">
          <h2>Q. {q}</h2>
          <h2>A. {a}</h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
