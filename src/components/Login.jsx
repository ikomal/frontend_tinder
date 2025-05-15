import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userslice";
import { useNavigate } from "react-router";
import { Base_url } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("ishan@gmail.com");
  const [password, setPassword] = useState("ishan@123");
  const [error,setError]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handlelogin=async()=>{
    try{
        const res= await axios.post(Base_url+"/login",{
          emailId,password
        },{
          withCredentials:true
        })
        console.log(res.data);
        dispatch(adduser(res.data));
        return navigate("/");
    }
    catch(err){
      setError(err?.response?.data || "something went wrong");
    }
  }
  return (
    <>
      <div className="card w-96 bg-base-300 m-auto card-md shadow-sm my-10 ">
        <div className="card-body flex ">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              value={emailId}
              className="input border-none "
              placeholder=""
              onChange={(e) => setEmailId(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              value={password}
              className="input  border-none"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
            <p className="text-red-500">{error}</p>

          <div className="justify-center card-actions ">
            <button className="btn btn-primary justify-center" onClick={handlelogin}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
