import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100 flex justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/myorders'>My Orders</Link></li>
        <li><Link>Item 3</Link></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">AnyDesk</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/myorders'>My Orders</Link></li>
      <li><Link>Item 3</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {user?.uid ?
     <Link onClick={logOut} className="btn bg-orange-400 border-none">Logout</Link>
      :
    <Link to='/login' className="btn bg-orange-400 border-none">Login</Link>
  }
  </div>
      <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost text-orange-400 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
</div>
    );
};

export default Navbar;