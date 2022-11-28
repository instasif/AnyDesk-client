import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const sellerName = form.sellerName.value;
        const status = form.status.value;
        const name = form.name.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const yearOfUse = form.yearOfUse.value;
        const productPhoto = form.productPhoto.value;
        const image = productPhoto[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
            }
        })
        
        const added = {sellerName, status, name, originalPrice, yearOfUse, resalePrice, productPhoto};
        
        fetch('http://localhost:5000/addedProducts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                author: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(added)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast.success(`${name} added successfullt!!`)
            navigate('/myorders/myproducts')
        })
      }
    return (
        <div className='h-7 w-96 p-6'>
            <h2 className='text-4xl'>Add a product</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 mt-7">
            <input name="name" type="text" placeholder="Product Name" className="input input-bordered input-warning w-full" />
            <input name="sellerName" type="text" placeholder="Seller Name" className="input input-bordered input-warning w-full" />
            <input name="status" type="text" placeholder="Status" className="input input-bordered input-warning w-full" />
            <input name="originalPrice" type="text" placeholder="Orginal Price" className="input input-bordered input-warning w-full" />
            <input name="resalePrice" type="text" placeholder="Resale Price" className="input input-bordered input-warning w-full" />
            <input name="yearOfUse" type="text" placeholder="years of use" className="input input-bordered input-warning w-full" />
            <input type="text" name="productPhoto" placeholder="Product Photo" className="input input-bordered input-warning w-full" />
            <input type="submit" value="Submit" className="btn bg-orange-400 border-none w-full" />
            </form>
        </div>
    );
};

export default AddProducts;