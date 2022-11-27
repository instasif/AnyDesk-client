import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Myorders = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/order?email=${user.email}`

    const {data: orders = []} = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

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
      </tr>
    </thead>
    <tbody>
      {
        orders.map(( o, i ) => <tr className="hover">
            <th>{i + 1}</th>
            <td>{o.buyerName}</td>
            <td>{o.product}</td>
            <td>{o.location}</td>
            <td>{o.price} Taka</td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myorders;