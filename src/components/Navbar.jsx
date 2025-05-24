import React from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { Base_url } from "../utils/constants";
import { removeuser } from "../utils/userslice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleLogout=async()=>{
    await axios.post(Base_url+"/logout",{withCredentials:true});
    dispatch(removeuser());
    return navigate("/login"); 
  }
  // console.log(user);
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/"className="btn btn-ghost text-xl">👩‍💻TINDER</Link>
      </div>
      {user && (
      <div className="flex gap-2">
        {/* <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          /> */}

         <div className="my-2">Welcome {user.firstName}</div>
          <div className="dropdown dropdown-end mx-6 flex ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full">
                <img
                  alt="img"
                  src={user.photourl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <Link to="" onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
       
      </div>
       )}
    </div>
  );
};

export default Navbar;
