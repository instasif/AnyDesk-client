import React from "react";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://hatil.com/sites/default/files/styles/hatil_product_list_crop/public/Moseley-281.jpg?itok=l00CBzTv"
          className="max-w-sm lg:max-w-md rounded-lg shadow-2xl"
          alt=''
        />
        <div>
          <h1 className="text-5xl font-bold text-orange-500">AnyDesk</h1>
          <p className="py-6 text-xl">Bangladesh np. 1 leading resale platform! Let your space live up to your expectations.</p>
          <button className="btn bg-orange-400 border-none">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
