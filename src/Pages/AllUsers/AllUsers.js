import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                author:   `bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Succcessful');
                refetch();
            }
        })
    }

    return (
        <div>
            <h3 className='text-3xl mb-5'>All Users</h3>

            <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Admin </th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users?.map(( u, i ) =>
         <tr key={u._id} className="hover">
            <th>{i + 1}</th>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u?.role !== 'admin' && <button onClick={() => handleMakeAdmin(u._id)} className='btn bg-green-400 btn-xs border-none'>Make Admin</button>}</td>
            <td><button className='btn bg-red-500 btn-xs border-none'>Delete</button></td>
      </tr>)
      }
    </tbody>
  </table>
        </div>
    );
};

export default AllUsers;