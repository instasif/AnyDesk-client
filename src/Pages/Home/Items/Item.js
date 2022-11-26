import React from "react";

const Item = ({ i }) => {
  const { productPhoto, locationOfSeller, originalPrice, productAddedDate, resalePrice, status, yearOfUse, } = i;
  return (
    <div className="card card-compact lg:card-side bg-base-100 shadow-xl my-6">
      <figure>
        <img className="lg:w-[400px] w-64" src={productPhoto} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-400 border-none">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
