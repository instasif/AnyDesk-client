import React from "react";

const Item = ({ i }) => {
  const { productPhoto, locationOfSeller, originalPrice, productAddedDate, resalePrice, status, yearOfUse, name, conditionOfProduct} = i;
  return (
    <div className="card card-compact lg:card-side bg-base-100 shadow-xl my-6">
      <figure>
        <img className="lg:w-[400px] w-64" src={productPhoto} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-orange-500">{name}</h2>
        <div className="text-lg font-medium">
        <p>Condition: {conditionOfProduct}</p>
        <p>Date: {productAddedDate}</p>
        <p>Location: {locationOfSeller}</p>
        <p>Used for: {yearOfUse}yrs</p>
        <p>Orginal Price: {originalPrice} Taka</p>
        <p>Resale Price: {resalePrice} Taka</p>
        <p>Status: {status}</p>
        </div>
        <div className="card-actions my-auto lg:justify-end">
          <button className="btn bg-orange-400 border-none">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
