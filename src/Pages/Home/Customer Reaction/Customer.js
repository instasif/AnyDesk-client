import React from "react";

const Customer = ({ r }) => {
  const { name, location, review, img } = r;
  return (
    <div className="card bg-orange-400 text-primary-content">
      <div className="card-body">
        <p>{review}</p>
        <div className="flex items-center mt-6">
            <div className="avatar mr-4">
          <div className="w-16 rounded-full ring ring-orange-300 ring-offset-base-100 ring-offset-2">
          <img src={img} alt="" />
          </div>
        </div>
        <div>
            <h5 className="text-lg">{name}</h5>
            <p>{location}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
