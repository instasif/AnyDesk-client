import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Modal = ({ treatement, setTreatment }) => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const { name, resalePrice, locationOfSeller, _id } = treatement;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerName = form.buyerName.value;
    const email = form.email.value;
    const product = form.product.value;
    const price = form.price.value;
    const location = form.location.value;
    const orders = { buyerName, email, product, price, location, _id };

    fetch("https://assignment-server-neon.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Add on Dashboard");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold text-orange-500 text-center ">
            {name}
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="buyerName"
              type="text"
              placeholder="Type here"
              defaultValue={displayName}
              disabled
              className="input input-bordered input-warning w-full"
            />
            <input
              name="email"
              type="text"
              placeholder="Type here"
              disabled
              defaultValue={email}
              className="input input-bordered input-warning w-full"
            />
            <input
              name="product"
              type="text"
              placeholder="Type here"
              disabled
              defaultValue={name}
              className="input input-bordered input-warning w-full"
            />
            <input
              name="price"
              type="text"
              placeholder="Type here"
              disabled
              defaultValue={resalePrice}
              className="input input-bordered input-warning w-full"
            />
            <input
              name="location"
              type="text"
              placeholder="Type here"
              disabled
              defaultValue={locationOfSeller}
              className="input input-bordered input-warning w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn bg-orange-400 border-none w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
