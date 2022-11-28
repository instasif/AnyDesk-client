import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.eamil);
  return (
    <div>
        <Navbar/>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <Outlet/>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/myorders'>My Orders</Link>
            </li>
            <li>
              { isAdmin && <Link to='/myorders/allusers'>Users</Link>}
            </li>
            <li>
             {isAdmin && <Link to='/myorders/addproducts'>Add Products</Link>}
            </li>
            <li>
             {isAdmin && <Link to='/myorders/myproducts'>My Products</Link>}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
