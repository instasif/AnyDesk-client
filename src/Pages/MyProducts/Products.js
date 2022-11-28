import React from "react";

const Products = ({p}) => {
    console.log(p);
    const {productPhoto, name, sellerName, status, yearOfUse, originalPrice, resalePrice} = p;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={productPhoto} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p>Seller Name: {sellerName}</p>
            <p>Years of purchase: {yearOfUse}</p>
            <p>Status: {status}</p>
            <p>Orginal Price: {originalPrice}</p>
            <p>Re-sale Price: {resalePrice} </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-orange-500 border-none">Advertise</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
