import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import { Base_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../utils/userslice";
import axios from "axios";


const Body = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const userdata=useSelector((store)=>store.userdata);
  const fetchuser = async () => {
    try {
      if(userdata) return ;
      const res = await axios.get(Base_url + "/profile/view", {
        withCredentials: true,
      });
      dispatch(adduser(res.data));
      console.log(res.data)
      
    } catch (err) {
      if(err.status===401){
        navigate("/login");
      }
      console.error(err.message);
    }
  };
  useEffect(() => {
    fetchuser();
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
