import React from 'react';

const Item = () => {
    return (
    <div className="card card-side bg-base-100 shadow-xl">
    <figure>
      <img src="https://placeimg.com/200/280/arch" alt="Movie" />
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