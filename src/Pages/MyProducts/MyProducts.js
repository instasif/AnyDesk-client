import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Products from './Products';

const MyProducts = () => {
    const {data: products, } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () =>{
            try{
                const res = await fetch('http://localhost:5000/addedProducts', {
                    headers: {
                        author: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch(err){

            }
        }
    })
    return (
        <div>
            <h2 className='text-4xl'>My product</h2>
            <div className='grid gap-12 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 my-6'>
            {
                products?.map( p => <Products key={p._id} p={p}/>)
            }
        </div>
        </div>
    );
};

export default MyProducts;