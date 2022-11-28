import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Myorders = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/order?email=${user.email}`

    const {data: orders = [], isLoading, refetch} = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
              headers: {
                author:   `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
    });


    // const   removeProduct = id =>{
    //   fetch(`http://localhost:5000/order/${id}?email=${user.email}`, {
    //     method: 'DELETE',
    //     headers: {
    //       author: `bearer ${localStorage.getItem('accessToken')}`
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(data =>{
    //     console.log(data);
    //     if(data.deletedCount > 0){
    //       toast.success('Removed!');
          
    //     }
    //     refetch();
    //   })
  
    // };


    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Orders</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>Location</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {
        orders?.map(( o, i ) => <tr key={o._id} className="hover">
        <th>{i + 1}</th>
        <td>{o.buyerName}</td>
        <td>{o.product}</td>
        <td>{o.location}</td>
        <td>{o.price} Taka</td>
        {/* <td><button onClick={() => removeProduct(o._id)} className='btn bg-red-500 btn-xs border-none'>Remove</button></td> */}
  </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myorders;